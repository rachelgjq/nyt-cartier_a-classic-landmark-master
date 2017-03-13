define(['jquery','TweenMax','utils','slick-carousel'],function($,TweenMax,utils,slick){
	var Scheme = function customSlick() {},
	proto = Scheme.prototype;

	var self;

	proto.init = function($dom,dtd){
		self = this;
		this.$dom = $dom;
		
		dtd.resolve();
		this.initSlick();
	};

	proto.initSlick = function(){
		this.slickContainer = this.$dom.find('.custom-slick').each(function(index){
			var tmpThis = $(this);
			tmpThis.slick(tmpThis.data('slick'));
			setTimeout(function(){
				$(window).trigger('resize');
			},1500);
		});

	}

	proto.update = function(tmpW,tmpH){
	};


	return Scheme;
});