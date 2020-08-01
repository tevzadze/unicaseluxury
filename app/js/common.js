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
	    	480 : {
	    		items: 1,
	    	},
	    },
	});
});
