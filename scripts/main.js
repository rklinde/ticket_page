$(document).ready(function(){

	// nav 
	if ($(window).width() <= 401) {
		$('nav li ul').hide();
	}
	else {
		$('nav li').hover(
			function(){
				$(this).find('ul').show();
			}, function(){
				$(this).find('ul').hide();
			});
	}


	// slideshow
	var counter = 0,
	$imgs = $('.slideshow figure'),
	numImgs = $imgs.length;

	var showCurrent = function(){
		var itemToShow = Math.abs(counter % numImgs);

		$imgs.removeClass('show');
		$imgs.eq(itemToShow).addClass('show');
	};

	$('.next').on('click', function(){
		counter++;
		showCurrent();
	});

	$('.prev').on('click', function(){
		counter--;
		showCurrent();
	});

	

})