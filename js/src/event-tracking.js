var $ = require("jquery");

// Begin Event Tracking Support //
function isMobile(){
	var $baseHtml = $("html");
	return ($baseHtml.hasClass("mobile") && !$baseHtml.hasClass("viewport-medium-10")) ? true : false;
}

function isTablet(orientation){
	var $baseHtml = $("html");

	if (orientation === null || orientation === undefined){
		return ($baseHtml.hasClass("mobile") && $baseHtml.hasClass("viewport-medium-10")) ? true : false;

	} else if (orientation === "portrait") {
		return ($baseHtml.hasClass("mobile") && $baseHtml.hasClass("viewport-medium-10") && !$baseHtml.hasClass("viewport-medium-30")) ? true : false;

	} else if (orientation === "landscape") {
		return ($baseHtml.hasClass("mobile") && $baseHtml.hasClass("viewport-medium-30") && !$baseHtml.hasClass("viewport-large")) ? true : false;
	}
}

window.G = window.G || {};
window.G.projectDetails = PaidPost.clientName + " - " + PaidPost.projectName + " - ";
window.G.currDevice = 'desktop';
window.G.track = function(category, action, opt_label, opt_value, opt_noninteraction) {
	if(typeof window.ga !== "undefined"){
		window.ga(
			'send',
			'event',
			window.G.projectDetails + window.G.currDevice + (typeof category === "string" ? (" - " + category) : ""),
			action,
			opt_label,
			opt_value
		);
	}
};

if (isTablet()) {
	window.G.currDevice = 'tablet';
} else if (isMobile()){
	window.G.currDevice = 'mobile';
}
// End Event Tracking Support //

// Track when the 360 video starts playing
if (OmniVirt) {
	OmniVirt.api.recieveMessage('started', function (type, data, iframe) {
		window.G.track("A Voyage Through Time 360 Video", "Started Playing");
	});

	OmniVirt.api.recieveMessage('expanded', function (type, data, iframe) {
		window.G.track("A Voyage Through Time 360 Video", "Entered Full Screen");
	});

	OmniVirt.api.recieveMessage('expanded', function (type, data, iframe) {
		window.G.track("A Voyage Through Time 360 Video", "Exited Full Screen");
	});

	OmniVirt.api.recieveMessage('ended', function (type, data, iframe) {
		window.G.track("A Voyage Through Time 360 Video", "Finished Playing");
	});

	OmniVirt.api.recieveMessage('quality', function (type, data, iframe) {
		var videoQualityStrings = {
			4: "4K",
			3: "HD",
			2: "720p",
			1: "480p"
		};

		window.G.track("A Voyage Through Time 360 Video", "Changed Video Quality", videoQualityStrings[data]);
	});
}