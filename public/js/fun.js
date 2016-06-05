$('.photo-item').click(function(e) {
	var index = $(e.currentTarget).data('index');
	$('#bm-carousel').carousel(index);
});