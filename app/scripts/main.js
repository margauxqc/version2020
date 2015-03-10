/* jshint devel:true */
'use strict';

var container = document.querySelector('.masonry');
var msnry = new Masonry( container, {

	// options
	columnWidth: 5,
	itemSelector: '.tn',
	gutter: 174
});

Array.prototype.slice.call(container.querySelectorAll('.tn')).forEach(function (img) {
	img.onload = function () {
		msnry.layout();
	};
});