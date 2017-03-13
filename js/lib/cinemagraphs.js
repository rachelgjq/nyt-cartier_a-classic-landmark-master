define(['jquery','TweenMax','utils','scrollmagicmanager'],function($,TweenMax,utils,smm){
	var Scheme = function cinemaGraphs() {},
	proto = Scheme.prototype;

	// all events' meaning refer to - http://www.w3schools.com/tags/ref_av_dom.asp
	/*['abort','canplay','canplaythrough','durationchange','emptied','ended','error','loadeddata',
	'loadedmetadata','loadstart','pause','play','playing','progress','ratechange','seeked','seeking',
	'stalled','suspend','timeupdate','volumechange','waiting'];*/

	proto.init = function($dom,dtd){
		this.$dom = $dom;
		// console.log('rollToShowFloor init...');
		this.videoUrlPrefix = 'http://video1.nytimes.com/paidpost/cartier/a-classic-landmark-for-the-modern-age/'
		
		this.videoEnable = false;
		this.playerArr = [];



		var smmData = {
			"triggerDom":this.$dom,
			'triggerPlay':0.8,
			'triggerReset':0.99,
			'offset':'10px',
			'inited':false,
			'debug':false,
			'inViewport':true,
		};
		this.inViewPort = true;
		this.edgeSceneArr = smm.addEdgeDetectScrollMagic(smmData,this.$dom,this);


		this.cgContainer = this.$dom.find('.cg-container');

		
		if(this.cgContainer.length>0){
			for(var i = 0,l = this.cgContainer.length;i<l;i++){
				this.playerArr.push(this.creatVideo($(this.cgContainer[i])));
			}
		}

		dtd.resolve();
	};

	proto.afterPageLoad = function(){
		//this.playerArr
		for(var i = 0,l = this.playerArr.length;i<l;i++){
			// console.log(this.playerArr[i].player[0]);
			this.playerArr[i].player[0].load();
		}
	};

	proto.creatVideo = function(videoContainer){
		var localThis = this;

		var videoDom = $('<video>').attr('preload','none').attr('loop','true').attr('muted','true').appendTo(videoContainer).addClass('cg-video');
		
		var videoUrl = videoContainer.data('cgurl');
		var mp4Source = $('<source>').attr({'src':this.videoUrlPrefix+videoUrl+'.mp4','type':'video/mp4'}).appendTo(videoDom);
		var webmSource = $('<source>').attr({'src':this.videoUrlPrefix+videoUrl+'.webm','type':'video/webm'}).appendTo(videoDom);
		// var mp4Source = $('<source>').attr({'src':'/video/'+videoUrl+'.mp4','type':'video/mp4'}).appendTo(videoDom);
		// var webmSource = $('<source>').attr({'src':'/video/'+videoUrl+'.webm','type':'video/webm'}).appendTo(videoDom);

		var videoObj = {
			'player':videoDom,
			'poster':videoContainer.find('img'),
			'originW':videoContainer.data('videow'),
			'originH':videoContainer.data('videoh'),
			'placeholder':videoContainer.parent(),
			'ready':false
		};
		videoDom.on('loadedmetadata',function(){
			// console.log(videoUrl+'--loadedmetadata');
			// console.log(videoDom.width()+','+videoDom.height());
			//videoObj.originW = videoDom.width();
			//videoObj.originH = videoDom.height();
			videoObj.ready = true;
			videoObj.player[0].volume = 0;

			videoObj.player.css({
				'opacity':1
			});

			//localThis.resizeVideo(videoObj);
			localThis.changeVideoState();
			videoObj.player[0].play();

		});

		this.resizeVideo(videoObj);

		/*setTimeout(function(){
			localThis.resizeVideo(videoObj);
		},100);*/

		requestAnimationFrame(function(){
			localThis.resizeVideo(videoObj);
		});

		return videoObj;
	};
	proto.resizeVideo = function(videoObj){
		if(!this.$dom.hasClass('content-footer')){
			var videoRatio = videoObj.originW/videoObj.originH,
				containerW = videoObj.placeholder.outerWidth(),
				containerH = videoObj.placeholder.outerHeight(),
				containerRatio = containerW/containerH;
			var targetW,targetH,shiftX,shiftY;

			/*if(videoObj.originW === 0|| videoObj.originH === 0){
				if(videoObj.videoObj){
					videoObj.originW = videoObj.videoObj.width();
					videoObj.originH = videoObj.videoObj.height();
				}else{
					console.log(videoObj);
				}
				
			}*/

			


			if(videoRatio>containerRatio){
				targetH = containerH;
				targetW = targetH * videoRatio;

				shiftY = 0;
				if(targetW>containerW){
					shiftX = (containerW-targetW)/2
				}else{
					shiftX = 0;
				}
			}else{
				targetW = containerW;
				targetH = targetW / videoRatio;

				shiftX = 0;
				if(targetH>containerH){
					shiftY = (containerH-targetH)/2
				}else{
					shiftY = 0;
				}
			}
			// console.log(videoObj);
			// console.log(containerW+','+containerH+'---'+videoRatio+'|||'+targetW+','+targetH);

			videoObj.player.css({
				'width':targetW+'px',
				'height':targetH+'px',
				'top':shiftY+'px',
				'left':shiftX+'px'
			});
			videoObj.poster.css({
				'width':targetW+'px',
				'height':targetH+'px',
				'top':shiftY+'px',
				'left':shiftX+'px'
				/*'opacity':1*/
			});
		}
	}

	proto.intoViewport = function(){
		console.log('intoViewport');
		this.inViewPort = true;
		this.changeVideoState();
	};
	proto.outofViewport = function(){
		console.log('outofViewport');
		this.inViewPort = false;
		this.changeVideoState();
	}


	proto.changeVideoState = function(){
		for(var i = 0,l = this.playerArr.length;i<l;i++){
			//console.log(i+','+this.inViewPort+','+this.videoEnable);
			if(this.playerArr[i].ready && this.inViewPort && this.videoEnable){
				this.playerArr[i].player[0].play();
			}else{
				this.playerArr[i].player[0].pause();
			}
		}
	}

	proto.update = function(tmpW,tmpH){
		for(var i = 0,l = this.playerArr.length;i<l;i++){
			this.resizeVideo(this.playerArr[i]);
		}

		if(tmpW>640 && !this.videoEnable){
			this.videoEnable = true;
			this.changeVideoState();
		}

		if(tmpW<=640 && this.videoEnable){
			this.videoEnable = false;
			this.changeVideoState();
		}
	};

	return Scheme;
});