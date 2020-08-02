$(function() {
$('.slider_main').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:true,
	    items:3,
	    responsive : {
	    	0: {
	    		items:1,
	    	},
	    	481 : {
	    		items: 3,
	    	},
	    },
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

});
