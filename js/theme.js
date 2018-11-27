// Lazy load for Disqus https://css-tricks.com/lazy-loading-disqus-comments/
if (typeof(disqus_options) !== 'undefined') {
	disqusLoader('#disqus', disqus_options);
}

// Theme tweaks
(function() {
	// Search box
	var search_box = document.getElementById('navbar-search-input');
	if (search_box !== null) search_box.setAttribute('size', search_box.getAttribute('placeholder').length);

	// Menu toggler
	var menu = document.getElementById('menu');
	var toggler = document.getElementById('menu-toggler');
	toggler.addEventListener('click', function() {
		toggler.classList.toggle('transform');
		menu.classList.toggle('d-flex');
	});
}());