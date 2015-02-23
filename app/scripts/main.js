/* jshint devel:true */
console.log('\'Allo \'Allo!');

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

function bindMagicLinks(target) {
	if (target === undefined) target = $('body');
	target.find('a.magic').click(function(event){
		event.preventDefault();
		loadUrl("page1.html");
	});
}

bindMagicLinks();

window.onpopstate = function (event) {
	if (event.state && event.state.url) {
		loadUrl(event.state.url);
		return;
	}
	window.location.assign(document.location);
}