/* jshint devel:true */
'use strict';

function bindMagicLinks(target) {
	if (target === undefined) {
		target = $('body');
	}
	target.find('a.magic').click(function(event){
		event.preventDefault();
		loadUrl("page1.html");
	});
}

function loadUrl (url) {
	var tempDiv = $('<div>');
	var oldContent = $( ".content");
	tempDiv.load( url + " .content", undefined, function () {
		bindMagicLinks(tempDiv);
		oldContent.after(tempDiv.find('.content'));
		oldContent.remove();
	});
	history.pushState({
		url: url
	}, undefined, url);
}

window.onload = function () {
	var container = document.querySelector('.masonry');
	var msnry = new Masonry( container, {

		// options
		columnWidth: 5,
		itemSelector: '.tn',
		gutter: 174
	});
}