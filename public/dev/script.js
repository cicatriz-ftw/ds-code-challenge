var script = function (win, doc) {
	"use strict";
	function publicInit(){

		console.log("script go");

	}

	return {
		init: publicInit
	};

}($(window), document);

$(document).ready(script.init);
