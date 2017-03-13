define('video360Player', [], function(){

	var video360Player = {};
	video360Player.frame = document.getElementById('ado-2249');

	video360Player.init = function(){
		var WIDTH = '100%';
	  	var HEIGHT = '100%';
	  	var VIDEO_ID = '2249';  // Omnivirt Video ID Here
	  	var AUTO_PLAY = 'false'; // Set Autoplay here if needed
	  	var PLAYER_MODE = 'true';

	  	var CUSTOM_PLAYER_PATH = '//upload.omnivirt.com/sample/nyt_post/omnivirt_custom.html';
	  	var SITE_URL = encodeURIComponent(window.location.href);
	  	var url = CUSTOM_PLAYER_PATH + "?id=" + VIDEO_ID + "&player=" + PLAYER_MODE + "&autoplay=" + AUTO_PLAY + "&control=false&referer=" + SITE_URL;
	  	
	  	var ieVideoUrl = "https://paidpost-assets.nyt.com/paidpost/cartier/a-classic-landmark-for-the-modern-age/360-pano-video/v1.0.11/index.html";
	  	
	  	if(platform.isIE11 || platform.isIE10){
	  		video360Player.frame.src = ieVideoUrl;
	  	}else{
	  		video360Player.frame.src = url;
	  	}
	};

	return video360Player;
});