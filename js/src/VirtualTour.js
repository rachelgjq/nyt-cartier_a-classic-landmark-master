define('virtual-tour', [], function() {
	var virtualTour = {};
	virtualTour.frame = document.getElementById('virtual-tour');

	var inFullScreen = false;

	var nativeRequestFullScreenApis = [
		"requestFullscreen",
		"webkitRequestFullscreen",
		"mozRequestFullScreen",
		"msRequestFullscreen"
	];

	var nativeExitFullScreenApis = [
		"exitFullscreen",
		"webkitExitFullscreen",
		"mozCancelFullScreen",
		"msExitFullscreen"
	];

	var requestFullscreen = function (ele) {
		for (var i = 0; i < nativeRequestFullScreenApis.length; i++) {
			var nativeFullScreenApi = nativeRequestFullScreenApis[i];

			if (typeof ele[nativeFullScreenApi] === "function") {
				ele[nativeFullScreenApi]();
				return;
				// Note: the onFullScreenChange() callback updates inFullScreen to the string "native"
			}
		}

		// If we weren't able to successfully enter full screen or return early...
		if (inFullScreen === false) {
			enterFauxFullscreen();
		}
	};

	var exitFullscreen = function () {
		if (inFullScreen === "native") {
			for (var i = 0; i < nativeExitFullScreenApis.length; i++) {
				var nativeFullScreenApi = nativeExitFullScreenApis[i];

				if (typeof document[nativeFullScreenApi] === "function") {
					document[nativeFullScreenApi]();
					// Note: the onFullScreenChange() callback updates inFullScreen to the string "native"
				}
			}
		} else {
			exitFauxFullscreen();
		}
	};

	var enterFauxFullscreen = function() {
		virtualTour.frame.parentElement.classList.add("fullscreen");
		// Note that we're using a "faux" full screen effect
		inFullScreen = "faux";
		window.G.track("Cartier Mansion Virtual Tour", "Enter Fullscreen");
		resizeFrame();
		window.addEventListener("scroll", resizeFrame);
		window.addEventListener("resize", resizeFrame);
	};

	var exitFauxFullscreen = function() {
		if (inFullScreen === "faux") {
			window.removeEventListener("scroll", resizeFrame);
			window.removeEventListener("resize", resizeFrame);
			virtualTour.frame.parentElement.classList.remove("fullscreen");
			virtualTour.frame.parentElement.removeAttribute('style');
			inFullScreen = false;
			window.G.track("Cartier Mansion Virtual Tour", "Exit Fullscreen");
		}
	};

	var resizeFrame = function() {
		var extraHeight = 0;
		if (inFullScreen === false) {
			extraHeight += 118;

			if (window.innerWidth < 540) {
				extraHeight += 80;
			}
		}

		// virtualTour.frame.style.height = "0px";
		console.log("Resizing frame to " + (window.innerHeight - extraHeight) + "px");
		virtualTour.frame.parentElement.style.height = (window.innerHeight - extraHeight) + "px";
	};

	var getNativeFullScreenState = function() {
		var isFullScreen;

		if (typeof document.fullscreenEnabled !== "undefined") {
			isFullScreen = document.fullscreenEnabled;
		}
		else if (typeof document.webkitIsFullScreen !== "undefined") {
			isFullScreen = document.webkitIsFullScreen;
		} else if (typeof document.mozFullScreen !== "undefined") {
			isFullScreen = document.mozFullScreen;
		} else if (typeof document.msFullscreenElement !== "undefined") {
			isFullScreen = document.msFullscreenElement !== null;
		}

		return isFullScreen;
	};

	var onFullScreenChange = function() {
		var isInNativeFullScreen = getNativeFullScreenState();

		if (isInNativeFullScreen === true) {
			inFullScreen = "native";
			window.G.track("Cartier Mansion Virtual Tour", "Enter Fullscreen");
		} else {
			// Work around Safari bug in which the element height is too tall when exiting full screen
			if (typeof document.webkitIsFullScreen !== "undefined") {
				resizeFrame();
				virtualTour.frame.parentElement.removeAttribute('style');

			}
			inFullScreen = false;
			window.G.track("Cartier Mansion Virtual Tour", "Exit Fullscreen");
		}
	};

	virtualTour.init = function(){
		virtualTour.frame.src = "https://paidpost-assets.nyt.com/paidpost/cartier/a-classic-landmark-for-the-modern-age/virtual-tour/index_v1.0.6.html";
		// Set up event handler for exiting full screen and properly updating inFullScreen state management
		if (document.addEventListener) {
			document.addEventListener('webkitfullscreenchange', onFullScreenChange, false);
			document.addEventListener('mozfullscreenchange', onFullScreenChange, false);
			document.addEventListener('fullscreenchange', onFullScreenChange, false);
			document.addEventListener('MSFullscreenChange', onFullScreenChange, false);
		}

		var fullScreenToggle = document.createElement("a");
		fullScreenToggle.id = "virtual-tour-full-screen-toggle";
		fullScreenToggle.textContent = "Toggle Full Screen";
		fullScreenToggle.href = "#";
		fullScreenToggle.addEventListener("click", function(e) {
			if (inFullScreen === false) {
				requestFullscreen(virtualTour.frame.parentElement);
			} else {
				exitFullscreen(virtualTour.frame.parentElement);
			}
			e.preventDefault();
		});

		virtualTour.frame.parentElement.appendChild(fullScreenToggle);
	};

	return virtualTour;
});