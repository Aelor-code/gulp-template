$('.js-popup').on('click', function (e) {
	e.preventDefault();
	if ($('body').hasClass('fancybox-active')) {
		$('[data-fancybox-close]').trigger('click');
	}
	$.fancybox.open({
		src: $(this).attr('href'),
		hash: false
	});
});
