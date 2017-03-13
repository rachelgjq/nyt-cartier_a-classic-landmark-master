define(['jquery','TweenMax','utils'],function($,TweenMax,utils){
	
	var defaultOption = {
		'targetTime':'0000',
		'targetDir':'l-r',
		'duration':5,
		'cycle':3,
		'startStepDuration':1
	}

	var Scheme = function SlotAnimation() {},
	proto = Scheme.prototype;
	
	proto.init = function($dom,pre_option){
		this.playerContainer = $dom;
		this.localOption = utils.mergeObject(defaultOption,pre_option);

		// console.log(this.localOption);

		this.created = false;
		this.aniDomArr = [];
		this.singleAniStepHeight = 0;

		this.localW = window.innerWidth ? window.innerWidth : $window.width();
		this.shiftY = 1;

		this.state = 'beforeAnimation';//beforeAnimation,Animating,afterAnimation

		this.creatNewSYTL();
	};

	proto.creatNewSYTL = function(){
		this.aniTL = null;

		/*init animation dom array,this array will be reuse every window update*/
		for(var i = 0,l = this.localOption.targetTime.toString().length;i<l;i++){
			var singleAniDom = this.playerContainer.find('.year'+(i+1));
			this.aniDomArr.push(singleAniDom);
		}
		/*begin initialize animation time line*/
		this.initAniTimeLine();

		/*begin initialize animation time line*/
		this.created = true;
	}

	/*
	* 04/29/2016
	* this function will be called in initialization process and when window size changed.
	*
	* 1.when initialization process call this function,calcuteTargetPos() will get a target position for each animation dom
	*	then initDom() in charge of initialize animation dom's structure and start position
	*   after that, a instance of timeline will be created,which contains instances of TweenMax to execute the animation.
	*
	* 2.when window size changed,this function will call calcuteTargetPos() to recalcute target position
	* 	and reset animation doms' current postion based on current state(beforAnimation/Animating/afterAnimation)
	*	then recreate all TweenMax,add them into aniTL,before that,implement clear&kill method on aniTL to eliminate influences
	*	by old tweens.
	*/
	proto.initAniTimeLine = function(){
		var tweenArr = [];
		var tmpSelf = this;
		for(var i = 0,l = this.aniDomArr.length;i<l;i++){
			var tmpTargetPos = this.calcuteTargetPos(this.aniDomArr[i],l,i);

			// init dom structure
			if(this.state === 'afterAnimation' || this.state === 'Animating'){
				//console.log(this.localOption.targetTime+',['+i+':'+tmpTargetPos+']');
				TweenMax.set(this.aniDomArr[i],{y:tmpTargetPos});
			}else{
				this.initDom(this.aniDomArr[i]);
			}
			//creat instances of TweenMax
			TweenMax.killTweensOf(this.aniDomArr[i]);

			var singleTween = TweenMax.to(this.aniDomArr[i],this.localOption.duration,{y:tmpTargetPos,overwrite:'none'});
			tweenArr.push(singleTween);
		}
		

		if(this.aniTL){
			this.aniTL.clear();
			this.aniTL.kill();
			this.aniTL = null
		}
		this.aniTL = new TimelineMax({onComplete:tmpSelf.aniDone});

		this.aniTL.add(tweenArr,"+=0",'start',this.localOption.startStepDuration);
		this.aniTL.pause();
	}

	proto.calcuteTargetPos = function(aniDom,length,index) {
		function isFloat(n){
		    return Number(n) === n && n % 1 !== 0;
		}
		//var imgHeight = aniDom.find('.preload').width()/(140/2000);
		//var imgHeight = aniDom.find('.preload img').height();
		var imgWidth = aniDom.find('.preload img').width();

		var imgHeight = Math.round(imgWidth/(100/1400));

		aniDom.find('.preload img').height(imgHeight);
		
		//var testHeight = Math.round(imgWidth/(130/2000));
		//console.log(imgWidth+','+imgHeight+'-----'+testHeight);
		this.singleAniStepHeight = (imgHeight/10);
		//140/2000

		//console.log('this.playerContainer height :: ', this.singleAniStepHeight - this.shiftY);
		this.playerContainer.css('height',this.singleAniStepHeight - this.shiftY);

		// var singleTarget = utils.getNumber(this.localOption.targetTime,length-index-1);
		var singleTarget = this.localOption.targetTime[length-index-1];
		var singleTargetPos = singleTarget * this.singleAniStepHeight * (this.localOption.targetDir === "l-r"?-1:1);

		singleTargetPos = Math.floor(this.singleAniStepHeight * 10 * (this.localOption.cycle-1) * -1 + singleTargetPos - this.shiftY);


		//console.log('singleTargetPos :: ', singleTargetPos);
		return singleTargetPos
	}

	proto.initDom = function(aniDom){
		this.resetAni(aniDom);
		if(!this.created){
			for(var m = 1,n = this.localOption.cycle;m<n;m++){
				$(aniDom.find('.preload')[0]).clone().appendTo(aniDom);
			}
		}
	}

	proto.aniDone = function(){
		this.state = 'afterAnimation';
	}

	proto.resetAni = function(aniDom){
		this.state = 'beforeAnimation';
		TweenMax.set(aniDom,{y:this.singleAniStepHeight,opacity:1});
	}

	proto.play = function(){
		this.state = 'Animating';
		this.aniTL.play();
	};
	proto.seek = function(pos){
		this.aniTL.seek(pos);
	};
	proto.pause = function(){
		this.aniTL.pause();
		for(var i = 0,l = this.aniDomArr.length;i<l;i++){
			this.resetAni(this.aniDomArr[i]);
		}
	};

	proto.update = function(tmpW,tmpH){
		if(tmpW!=this.localW){
			this.localW = tmpW;
			if(this.created){
				this.initAniTimeLine();
			}
		}
	}

	return Scheme;
});