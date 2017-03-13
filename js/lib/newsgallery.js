define(['jquery','TweenMax','utils'],function($,TweenMax,utils){
	var Scheme = function newsGallery() {},
	proto = Scheme.prototype;
	var self;

	proto.init = function($dom,dtd){
		self = this;
		this.$dom = $dom;

		// console.log('rollToShow init...');

		this.setUpDom();
		this.enable = false;

		dtd.resolve();
	};

	proto.setUpDom = function(){
		var tmpSelf = this;
		var tmpNowIndex = 0;

		this.news = [];
		this.$dom.find('.news-left .news-img').each(function(index){
			tmpSelf.news.push($(this));
		});

		this.titles = [];
		this.$dom.find('.news-right .cta-box.display-d .cta-copy').each(function(index){
			tmpSelf.titles.push($(this));
		});

		this.newsBtns = [];
		this.$dom.find('.news-btn').each(function(index){
			var tmpBtn = $(this);
			tmpSelf.newsBtns.push(tmpBtn);

			tmpBtn.on('click',function(){
				if(tmpNowIndex!=index){
					tmpSelf.newsBtns[tmpNowIndex].removeClass('active').addClass('disactive');
					tmpSelf.news[tmpNowIndex].removeClass('active');
					tmpSelf.titles[tmpNowIndex].removeClass('active');
					tmpNowIndex = index;
					tmpBtn.removeClass('disactive').addClass('active');
					tmpSelf.news[tmpNowIndex].addClass('active');
					tmpSelf.titles[tmpNowIndex].addClass('active');

					console.log(tmpSelf.titles[tmpNowIndex]);

					// var $target = $(currentSlide.$slides[currentSlide.currentSlide]);
					// var labelStr = "Slide " + (tmpNowIndex + 1) + ": " + $target.find(".caption-text").text();

					window.G.track("Making News for 99 Years Slideshow", "Slide Change", "Slide " + (tmpNowIndex + 1));

					tmpSelf.nowURL = tmpBtn.data('url');
				}
			});
		});

		this.nowURL = $(this.$dom.find('.news-btn')[0]).data('url');
		this.$dom.find('.cta-title').on('click',clickThrough.bind(tmpSelf));
		// this.$dom.find('.cta-copy').on('click',clickThrough.bind(tmpSelf));
	};

	function clickThrough(e) {
		if(this.enable){
			window.open(this.nowURL,"_blank");
		}

		console.log(e.currentTarget);

		window.G.track("Making News for 99 Years Slideshow", "Open NYTimes Article Link", "Link for Slide " + ($(e.currentTarget).index()));
	}
	proto.update = function(tmpW,tmpH){
		if(tmpW>640 && !this.enable){
			this.enable = true;
		}
		if(tmpW<=640 && this.enable){
			this.enable = false;
		}
	};

	return Scheme;
});