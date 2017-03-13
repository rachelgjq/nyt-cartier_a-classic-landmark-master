define(['jquery','TweenMax','utils'],function($,TweenMax,utils){
	var Scheme = function rollToShowSlider() {},
	proto = Scheme.prototype;

	proto.init = function($dom,dtd){
		this.$dom = $dom;

		// console.log('rollToShowSlider init...');
		this.overEnable = true;
		this.tapEnable = true;
		this.setUpEvent();

		dtd.resolve();
	};

	proto.setUpEvent = function(){
		var tmpSelf = this;
		this.targetDomArr = [];

		this.rollDom = this.$dom.find('.media-image').each(function(){
			var tmpDom = $(this),
				tmpTargetDom = tmpDom.parent(),
				tipBtn = $(tmpDom.find('.hover-btn')),

				closeBtn = $(tmpDom.find('.close-btn'));

			if(platform.isDesktop){
				tmpDom.on('mouseenter',[tmpTargetDom],show.bind(tmpSelf));
				tmpDom.on('mouseleave',[tmpTargetDom],hide.bind(tmpSelf));

			}else{

				tipBtn.on('touchstart',[tmpTargetDom,tipBtn,closeBtn],touchToShow.bind(tmpSelf));
				closeBtn.on('touchstart',[tmpTargetDom,tipBtn,closeBtn],touchToHide.bind(tmpSelf));
			}
		});

		var slickDoms = this.$dom.find('.custom-slick'),
			slickInstances = [];
		for(var i = 0,l = slickDoms.length;i<l;i++){
			/*slickInstances.push($(slickDoms[i])[0].slick);

			if($(slickDoms[i])[0].slick){
				$(slickDoms[i])[0].slick.$nextArrow.on('click',onSlickArrowClick.bind(tmpSelf));
				$(slickDoms[i])[0].slick.$prevArrow.on('click',onSlickArrowClick.bind(tmpSelf));
			}*/
			$(slickDoms[i]).on('beforeChange',onBeforeChange.bind(tmpSelf));
			$(slickDoms[i]).on('afterChange',onAfterChange.bind(tmpSelf));
		}



		// slickDoms.on('swipe',onSlickSwip.bind(tmpSelf));
	};

	/*function onSlickSwip(slick, direction){
		if(this.nowShow){
			this.nowShow.css({
				'opacity':0
			});
			this.nowShow = null;
		}
		if(this.nowHidden){
			this.nowHidden.css({
				'opacity':1,
				'display':'block'
			});
			this.nowHidden = null;
		}

		if(this.nowCloseBtn){
			this.nowCloseBtn.css({
				'display':'none'
			});
			this.nowCloseBtn = null;
		}
	}
	function onSlickArrowClick(e){
		console.log('onSlickArrowClick');
		if(this.nowShow){
			this.nowShow.css({
				'opacity':0
			});
			this.nowShow = null;
		}

		if(this.nowCloseBtn){
			this.nowCloseBtn.css({
				'display':'none'
			});
			this.nowCloseBtn = null;
		}
	}*/

	function onBeforeChange(slick, currentSlide, nextSlide){
		console.log('beforeChange'+currentSlide.currentSlide);
		// $(currentSlide.$slides[currentSlide.currentSlide]).removeClass('show-caption');
		this.nowSlider = currentSlide.currentSlide;
	}
	function onAfterChange(slick, currentSlide){
		if(this.nowSlider!=-1){
			if(this.nowSlider != currentSlide.currentSlide){
				$(currentSlide.$slides[this.nowSlider]).removeClass('show-caption');
			}
		}
		this.nowSlider = -1;
		//$(currentSlide.$slides[currentSlide.currentSlide]).addClass('show-caption');

		var $target = $(currentSlide.$slides[currentSlide.currentSlide]);
		var labelStr = "Slide " + (currentSlide.currentSlide + 1) + ": " + $target.find(".caption-text").text();
		window.G.track("Icons on Fifth Slideshow", "Slide Change", labelStr);
	}

	function show(e){

		/*e.data[0].css({
			'opacity':1
		});

		e.data[1].css({
			'opacity':0
		});*/
		e.data[0].addClass('show-caption');

		var $target = $(e.currentTarget);
		var labelStr = "Slide " + (parseInt($target.parent().attr("data-slick-index")) + 1) + ": " + $target.find(".caption-text").text();
		window.G.track("Icons on Fifth Slideshow", "Slide Hover", labelStr);
		e.stopPropagation();
		

		/*this.nowShow = e.data[0];
		this.nowHidden = e.data[1];*/
	}
	function hide(e){
		/*e.data[0].css({
			'opacity':0
		});
		e.data[1].css({
			'opacity':1
		})*/
		e.data[0].removeClass('show-caption');

		/*this.nowShow = null;
		this.nowHidden = null;*/
	}

	function touchToShow(e){
		e.data[0].addClass('show-caption');

		var $target = $(e.currentTarget);
		var labelStr = "Slide " + (parseInt($target.parent().attr("data-slick-index")) + 1) + ": " + $target.find(".caption-text").text();
		window.G.track("Icons on Fifth Slideshow", "Slide Tap", labelStr);
		e.stopPropagation();

		/*e.data[1].css('display','none');
		e.data[2].css('display','block');*/

		/*this.nowShow = e.data[0];
		this.nowHidden = e.data[1];*/


		/*console.log('get close btn');

		this.nowCloseBtn = e.data[2];*/

	}
	function touchToHide(e){
		e.data[0].removeClass('show-caption');

		/*e.data[1].css('display','block');
		e.data[2].css('display','none');*/

		/*this.nowShow = null;
		this.nowHidden = null;
		this.nowCloseBtn = null;*/
	}


	proto.update = function(tmpW,tmpH){
	};

	return Scheme;
});