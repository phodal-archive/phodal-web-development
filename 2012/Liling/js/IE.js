$(document).ready(function () {

/* Footer Open / Close & Showcase Oopen / Close */

    $("#open-footer").click(function () {
        $('.big-blob').stop().animate({
            "top": "-501px"
        }, 600);
			$("#bf-content").css({"display": "block"});
        $("#showcase-frame").css({
            "display": "none"
        });
        $("#ep-top").stop().animate({
            "height": '71px'
        }, 700);
		    $("#contact-trigger").stop().animate({
	            "opacity":"0"
	        }, 600);
        $("#open-footer").delay(800).animate({
            "opacity": "0"
        }, 300);
        $("#bf-content").stop().animate({
            "opacity": '1', 'filter':''
        });
        $("#close-footer").delay(800).animate({
            "opacity": "1", 'filter':'',
            "top": "7px"
        }, 400);
        $("#frame").delay(500).animate({
            "opacity": "0",
            "height": "0"
        }, 400);
    });
    $("#close-footer").click(function () {
        $("#ep-top").stop().animate({
            "height": "100%"
        }, 800);
        $("#open-footer").delay(800).animate({
            "opacity": "1", 'filter':''
        }, 500);
        $("#close-footer").delay(800).animate({
            "opacity": "0",
            "top": "-30px"
        }, 400);
        $("#contact-trigger").delay(2000).animate({
            "opacity": "1", 'filter':''
        }, 	600);
        $("#frame").animate({
            "opacity": "1", 'filter':'',
            "height": "550"
        }, 500);
        $(".carousel-previous").animate({
            "opacity": "0",
            "left": "-22px"
        }, 300);
        $(".carousel-next").animate({
            "opacity": "0",
            "right": "-22px"
        }, 300);
        $("#showcase-frame").animate({
            "opacity": "0"
        }, 300);
			$("#bf-content").css({"display": "none"});
    });


 $("#showcase-drop").click(function () {
			$("#bf-content").css({"display": "none"});
			$("#showcase-frame").css({"display": "block"});
        $("#ep-top").stop().animate({
            "height": '71px'
        }, 800);
        $("#open-footer").delay(800).animate({
            "opacity": "0"
        }, 400);
	    $("#contact-trigger").stop().animate({
            "opacity":"0"
        }, 600);
        $("#close-footer").delay(800).animate({
            "opacity": "1", 'filter':'',
            "top": "7px"
        }, 500);
        $("#frame").delay(400).animate({
            "opacity": "0",
            "height": "0"
        }, 500);
        $(".carousel-previous").delay(800).animate({
            "opacity": "1", 'filter':'',
            "left": "20px"
        }, 500);
        $(".carousel-next").delay(800).animate({
            "opacity": "1", 'filter':'',
            "right": "20px"
        }, 500);
        $(".stagger").delay(1000).animate({
            "left": "65px",
            "effect": "slide"
        }, 500);
        $(".imac").delay(1000).animate({
            "left": "350px",
            "effect": "slide"
        }, 700);
    });
});