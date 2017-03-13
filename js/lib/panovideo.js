define(['jquery','TweenMax','utils','tour'],function($,TweenMax,utils){
	var Scheme = function panoVideo() {},
	proto = Scheme.prototype;
	var self;

	proto.init = function($dom,dtd){
		self = this;
		this.$dom = $dom;
		this.dtd = dtd;

		this.panoName = this.$dom.data('panoname');

		// embedpano({
		// 	swf:PaidPost.assets + this.panoName+"/tour.swf", 
		// 	xml:PaidPost.assets + this.panoName+"/tour.xml", 
		// 	target:this.panoName,
		// 	mwheel:false,
		// 	initvars:{
		// 		REMOTEPATH : "https://adv.preview.nytimes.com/demos/cartier/mansion/pageflow-with-360-video"
		// 	},
		// 	onready:function(){
		// 		dtd.resolve();
		// 		self.krpanoReady();
		// 	}
		// })
	}

	proto.krpanoReady = function(panoObj){
		var krpano = $('#krpanoSWFObject');
		this.panoObj = krpano;

		// console.log(krpano);

		/*var fov = Number( krpano.get("view.fov") );
		fov += 10.0;
		krpano.set("view.fov", fov);*/
	};

	window.entervr = function(){
		if(platform.isIos){
			$("#paid-top-bar-container").css('display','none');
			$("#masthead").css('display','none');
		}
	}
	window.exitvr = function(){
		if(platform.isIos){
			$("#paid-top-bar-container").css('display','block');
			$("#masthead").css('display','block');
		}
	}

	proto.update = function(tmpW,tmpH){
		/*if(platform.isIos){
			$('#krpanoSWFObject').css({
				'height':tmpH+'px'
			})
		}*/
	};

	return Scheme;
});