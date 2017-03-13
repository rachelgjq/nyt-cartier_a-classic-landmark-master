define(['jquery','TweenMax','utils'],function($,TweenMax,utils){
	var Scheme = function rollToShowFloor() {},
	proto = Scheme.prototype;

	proto.init = function($dom,dtd){
		this.$dom = $dom;

		// console.log('rollToShowFloor init...');
		this.enable = true;
		this.setUpEvent();

		dtd.resolve();
	};

	proto.setUpEvent = function(){
		var tmpSelf = this;
		this.targetDomArr = [];

		this.rollDom = this.$dom.find('.floor-imgs li').each(function(){
			var tmpDom = $(this),
				tmpTargetDom = $(tmpDom.find('.floor-text')),
				tipBtn = $(tmpDom.find('.tip-btn'));
			tmpSelf.targetDomArr.push(tmpTargetDom);
			if(platform.isDesktop){
				tmpDom.on('mouseenter',[tmpTargetDom,tipBtn],show.bind(tmpSelf));
				tmpDom.on('mouseleave',[tmpTargetDom,tipBtn],hide.bind(tmpSelf));
			}
			if(platform.isTablet){
				tmpDom.on('touchstart',[tmpTargetDom,tipBtn],touchToggle.bind(tmpSelf));
			}
		});

		this.nowShow = null;
		this.nowShowTip = null;
		
	};

	function show(e){
		window.G.track("Halls of Greatness Section", "Image Hover", $(e.currentTarget).find("h1").text().toLowerCase() + " image");

		if(this.enable){
			e.data[0].css({
				'opacity':1
			});
			e.data[1].css({
				'opacity':0
			});
		}
	}
	function hide(e){
		if(this.enable){
			e.data[0].css({
				'opacity':0
			});
			e.data[1].css({
				'opacity':1
			});
		}
	}
	function touchToggle(e){
		if(e.data[0].css('opacity') === '0'){
			e.data[0].css('opacity',1);
			e.data[1].css('opacity',0);
		}else{
			e.data[0].css('opacity',0);
			e.data[1].css('opacity',1);
		}
		if(this.nowShow){
			if(e.data[0] != this.nowShow){
				this.nowShow.css('opacity',0);
				this.nowShowTip.css('opacity',1);

				this.nowShow = e.data[0];
				this.nowShowTip = e.data[1];
			}
		}else{
			this.nowShow = e.data[0];
			this.nowShowTip = e.data[1];

			window.G.track("Halls of Greatness Section", "Image Tap", $(e.currentTarget).find("h1").text().toLowerCase() + " image");
		}
	}


	proto.update = function(tmpW,tmpH){
		if(this.enable && tmpW<=640){
			this.enable = false;
			for(var i = 0,l = this.targetDomArr.length;i<l;i++){
				this.targetDomArr[i].css({
					'opacity':1
				});
			}
		}
		if(!this.enable && tmpW>640){
			this.enable = true;
			for(var i = 0,l = this.targetDomArr.length;i<l;i++){
				this.targetDomArr[i].css({
					'opacity':0
				});
			}
		}
	};

	return Scheme;
});