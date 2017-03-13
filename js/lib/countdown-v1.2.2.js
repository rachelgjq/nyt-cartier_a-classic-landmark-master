define(['jquery','TweenMax','utils','SlotAnimation','scrollmagicmanager'],function($,TweenMax,utils,SlotAnimation,smm){
	var Scheme = function countDown() {},
	proto = Scheme.prototype;

	proto.init = function($dom,dtd){
		self = this;
		this.$dom = $dom;
		// console.log('countDown init...');

		this.calcTime();

		//this.setupTime(dtd);
		this.slotAniContainer = this.$dom.find('.content-slots');
		console.log(this.$dom);
		// this.slotAni = new SlotAnimation();

		/*this.slotAni.init(this.slotAniContainer,{
			'targetTime':this.nowDayLeft+this.nowHourLeft+this.nowMinuteLeft,
			'targetDir':'l-r',
			'duration':1.2,
			'cycle':2,
			'startStepDuration':0.1
		});*/
		this.initSlotAni();

		this.initSMControl();
		dtd.resolve();
	};
	proto.initSlotAni = function(){
		this.dayContainer = this.$dom.find('.count-down-box .num1 p');
		this.hourContainer = this.$dom.find('.count-down-box .num2 p');
		this.minuteContainer = this.$dom.find('.count-down-box .num3 p');
		this.aniT = 1.5;
		console.log('im in init slot ani');
		this.slotAni = new TimelineMax();

		var dayObj = {
			'value':0
		};
		var hourObj = {
			'value':0
		};
		var minuteObj = {
			'value':0
		};
		var dayTween = TweenMax.to(dayObj,this.aniT,{value:this.nowDayLeft,ease:Linear.easeNone,onUpdate:updateCountDown.bind(this),onUpdateParams:[this.dayContainer,dayObj]});
		var hourTween = TweenMax.to(hourObj,this.aniT,{value:this.nowHourLeft,ease:Linear.easeNone,onUpdate:updateCountDown.bind(this),onUpdateParams:[this.hourContainer,hourObj]});
		var minuteTween = TweenMax.to(minuteObj,this.aniT,{value:this.nowMinuteLeft,ease:Linear.easeNone,onUpdate:updateCountDown.bind(this),onUpdateParams:[this.minuteContainer,minuteObj]});

		this.slotAni.add([dayTween,hourTween,minuteTween],"+=0",'start',0);
		this.slotAni.pause();
	};

	function updateCountDown(dom,obj){
		// console.log(obj);
		/*var tmpValue = obj.value;*/
		tmpValue = Math.floor(obj.value).toString();
    	if(tmpValue.length<2){
    		tmpValue = '0'+tmpValue;
    	}

    	dom.html(tmpValue);
	}
	proto.initSMControl = function(){
		this.smmData = {
			"triggerDom":this.slotAniContainer,
			'triggerPlay':0.9,
			'triggerReset':0.99,
			'offset':0,
			'inited':false,
			'debug':false
		};
		smm.addScrollMagic(this.smmData,this);
	};

	proto.playAni = function(){
		 console.log('play ani');
		this.slotAni.play();
	};

	proto.resetAni = function(){
		 console.log('reset ani');
		this.slotAni.seek(0);
		this.slotAni.pause();
	};
	proto.calcTime = function(){
		// target date
		// UTC time for 2016/11/14/23/59/00
		var year = 2016,
			month = 10,
			day = 16,
	 		hours = 4,
			minutes = 59,
			seconds = 00;
		this.endDate = new Date(year, month, day, hours, minutes, seconds, 00);

		/*this.$dayDom = this.$dom.find('.floor-date .days .date-text');
		this.$hourDom = this.$dom.find('.floor-date .hours .date-text');
		this.$minuteDom = this.$dom.find('.floor-date .mins .date-text');*/

		this.nowDayLeft = 0;
		this.nowHourLeft = 0;
		this.nowMinuteLeft = 0;

		var nowDate  = new Date();
		nowDate  = new Date(nowDate.getUTCFullYear(), 
							nowDate.getUTCMonth(), 
							nowDate.getUTCDate(), 
							nowDate.getUTCHours(), 
							nowDate.getUTCMinutes(), 
							nowDate.getUTCSeconds(), 00, 00);
		// get left date
		var daysLeft = parseInt((this.endDate-nowDate)/86400000),
			hoursLeft = parseInt((this.endDate-nowDate)/3600000),
			minutsLeft = parseInt((this.endDate-nowDate)/60000);

		minutes = hoursLeft*60;
    	minutes = minutsLeft-minutes;
    	/*minutes = minutes.toString();
    	if(minutes.length<2){
    		minutes = '0'+minutes;
    	}*/
    	this.nowMinuteLeft = minutes;

    	hours = daysLeft*24;
    	hours = (hoursLeft-hours) < 0 ? 0 : hoursLeft-hours;
    	/*hours = hours.toString();
    	if(hours.length<2){
    		hours = '0'+hours;
    	}*/
    	this.nowHourLeft = hours;

    	days = daysLeft;
    	/*days = days.toString();
    	if(days.length<2){
    		days = '0'+days;
    	}*/
    	this.nowDayLeft = days;


    	// console.log(this.nowDayLeft+','+this.nowHourLeft+','+this.nowMinuteLeft);
    	/*minutes = hoursLeft*60;
    	minutes = minutsLeft-minutes;

    	if(minutes.toString()!=this.nowMinuteLeft){
    		minutes = minutes.toString();
    		if(minutes.length<2){
    			minutes = '0'+minutes;
    		}
    		this.nowMinuteLeft = minutes;
    		//this.$minuteDom.html(minutes);
    	}

    	
    	hours = daysLeft*24;
    	hours = (hoursLeft-hours) < 0 ? 0 : hoursLeft-hours;

    	if(hours.toString()!=this.nowHourLeft){
    		hours = hours.toString();
    		if(hours.length<2){
    			hours = '0'+hours;
    		}
    		this.nowHourLeft = hours;
    	}

    	days = daysLeft;
    	if(days!=this.nowDayLeft){
    		this.nowDayLeft = days;
    		days = days.toString();
    		if(days.length<2){
    			days = '0'+days;
    		}
    		this.$dayDom.html(days);
    	}*/
	};

	proto.update = function(tmpW,tmpH){
		//this.slotAni.update(tmpW,tmpH);
	};

	return Scheme;
});