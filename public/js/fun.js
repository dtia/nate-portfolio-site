$('.photo-item').click(function(e) {
	var index = $(e.currentTarget).data('index');
	$('#bm-carousel').carousel(index);
});

$(document).keydown(function(e) {
	console.log('hi2');
	if(e.which === 39) {
        $('#bm-carousel').carousel('next');
    }
    else if (e.which === 37) {
    	$('#bm-carousel').carousel('prev');	
    }
    else if (e.which === 27) {
    	$('#fun-modal').modal('hide');
    }
});
