/* jshint devel:true */
'use strict';
if (window.Masonry) {
	var container = document.querySelector('.masonry');
	var msnry = new Masonry( container, {

		// options
		columnWidth: 5,
		itemSelector: 'a',
		gutter: 174
	});

	Array.prototype.slice.call(container.querySelectorAll('.tn')).forEach(function (img) {
		img.onload = function () {
			msnry.layout();
		};
	});

	var img = new Image();
	img.classList.add('header-nib');
	img.src = "images/php/nib" + Math.ceil(Math.random() * 5) + ".png";
	$('.butt').before(img);
}