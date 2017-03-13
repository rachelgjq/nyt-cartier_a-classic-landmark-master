require(['jquery','singleSection','scrollmagicmanager', 'video360Player', 'virtual-tour'],
	function($,singleSection,smm, video360Player, virtualTour) {
		var nowW = 0,nowH = 0;
		var $window = $(window);

		// pre-process html dom according to platform
		// ---------------------------------------------------------------
		if(platform.isMobile){
			$('.display-d').each(function(index){
				if(!$(this).hasClass('display-m')){
					$(this).remove();
				}
			});
			$('.display-t').each(function(index){
				if(!$(this).hasClass('display-m')){
					$(this).remove();
				}
			});
			$('.content-head').removeAttr('module-cinemaGraphs');
			$('.content-footer').removeAttr('module-cinemaGraphs');
		}
		if(platform.isTablet){
			$('.display-d').each(function(index){
				if(!$(this).hasClass('display-t')){
					$(this).remove();
				}
			});
			$('.display-m').each(function(index){
				if(!$(this).hasClass('display-t')){
					$(this).remove();
				}
			});


			$('.content-head').removeAttr('module-cinemaGraphs');
			$('.content-footer').removeAttr('module-cinemaGraphs');
		}
		if(platform.isDesktop){
			$('.display-t-r').each(function(index){
				if(!$(this).hasClass('display-d')){
					$(this).remove();
				}
			});
			$('.display-m-r').each(function(index){
				if(!$(this).hasClass('display-d')){
					$(this).remove();
				}
			});
		}

		if(platform.isIE11){
			$('html').addClass('isIE11');
		}
		// ---------------------------------------------------------------

		// ---------------------------------------------------------------
		var sectionInstanceArr = [];
		startPage();
		// begin instance each section base on it's [date-type]
		function startPage(){
			var sectionDoms = $('.need-init');
			for(var i = 0,l = sectionDoms.length;i<l;i++){
				var singleSectionIns,
				    $tmpTargetDom = $(sectionDoms[i]);

				singleSectionIns = new singleSection();

				var smdConfigKey = platform.isMobile?'mobile':'desktop';
				singleSectionIns.init($tmpTargetDom,smdConfig[smdConfigKey][$tmpTargetDom.data('smd')]);
				$tmpTargetDom.data('instance',singleSectionIns);
				sectionInstanceArr.push(singleSectionIns);
			}
			if(sectionInstanceArr.length>0){
				loadSections(0);
			}else{
				afterPageLoad();
			}
		}
		// load single sections one by one
		// once a section is loaded, all the animations it contains will play immediately
		function loadSections(index){
			// console.log('begin load section '+index);
			var dtd = $.Deferred();
			dtd.promise(sectionInstanceArr[index].preLoadSelf);

			sectionInstanceArr[index].preLoadSelf.done(function(){
				//console.log('complete load section '+index);
				index++;
				if(index<sectionInstanceArr.length){
				    loadSections(index);
				    
				}else{
				    afterPageLoad();
				}
			});

			sectionInstanceArr[index].preLoadSelf(dtd);
		}
		function afterPageLoad(){
			for(var i = 0,l = sectionInstanceArr.length;i<l;i++){
				sectionInstanceArr[i].afterPageLoad();
			}
			initScrollTrack();
			initOtherTrack();

			//initialize 360 Player
			video360Player.init();

			//initialize Virtual Tour
			virtualTour.init();

			requestAnimationFrame(resizeHandle);
		}

		// window resize handle based on requestAnimationFrame
		// each sections' instance also implements a update method and will be called at this point
		
		function resizeHandle(){
			var tmpH = window.innerHeight ? window.innerHeight : $window.height();
			var tmpW = window.innerWidth ? window.innerWidth : $window.width();

			if(nowW !== tmpW || nowH !== tmpH){
				for(var i = 0,l = sectionInstanceArr.length;i<l;i++){
					if(sectionInstanceArr[i].update){
						sectionInstanceArr[i].update(tmpW,tmpH);
					}
				}
				nowW = tmpW;
				nowH = tmpH;

				smm.update(nowW,nowH);
			}
			requestAnimationFrame(resizeHandle);
		}
		// ---------------------------------------------------------------

		// tracking
		// ---------------------------------------------------------------
		function initScrollTrack(){
			var deviceMetrics = {};
			var sectionCount = 1;

			$('.tracking-block').each(function(index){
				var tracking = $(this).data("tracking");

				if(typeof tracking !== "undefined" && $(this).is(':visible')){
					deviceMetrics[""+sectionCount] = { "section" : tracking, "trigger" : $(this) };
					sectionCount++;
				}
			});
			smm.trackScroll(deviceMetrics);
		}
		function initOtherTrack(){
		}
		// ---------------------------------------------------------------
	}
);