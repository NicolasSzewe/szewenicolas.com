/*global jQuery:false */
(function ($) {


	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       0
      }
    );
    wow.init();

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});	

	
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
		$('a.totop,a#btn-scroll,a.btn-slide,.carousel-inner .item a.btn').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	

            
	//Lock scroll when loading page
	$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
	});
	


	//Unlock scroll and remove loading bar
	$(window).load(function() {
		if(SnakeState==0){
			$(".loader-wrap").fadeOut("slow");
			$('html, body').css({
    			'overflow': 'auto',
    			'height': 'auto'
			});
		}
		else {
			document.getElementById("percentage-loading").innerHTML = "The Website is Ready !";
			$(".snake-game-container").keydown(function(e) {
				code = e.which;
				if(code == "81"){
					$(".loader-wrap").fadeOut("slow");
					$('html, body').css({
    					'overflow': 'auto',
    					'height': 'auto'
					});
				}
			});	
		}
	})
	
	$('.testimonialslide').flexslider({
	animation: "slide",
	slideshow: false,
	directionNav:false,
	controlNav: true
	});
	

	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");					
		});
		
	popupapparition = function(domelementA, domelementB) {
    document.getElementById(domelementA).style.display = 'block';
    document.getElementById(domelementB).style.display = 'none';
	}
		
	$(document).ready(function() {
	//Project pop up apparition
	$('#bouttonWeb').bind('click', function() {
		popupapparition('detailWeb', 'pageSchool');
	});
	$('#boutonCloseWeb').bind('click', function() {
		popupapparition('pageSchool', 'detailWeb');
	});
	$('#boutonViz').bind('click', function() {
		popupapparition('detailViz', 'pageSchool');
	});
	$('#boutonCloseViz').bind('click', function() {
		popupapparition('pageSchool', 'detailViz');
	});
	$('#bouttonOrientation').bind('click', function() {
		popupapparition('detailOrientation', 'pageSchool');
	});
	$('#boutonCloseOrientation').bind('click', function() {
		popupapparition('pageSchool', 'detailOrientation');
	});
	$('#bouttonPartner').bind('click', function() {
		popupapparition('detailPartner', 'pageSchool');
	});
	$('#boutonClosePartner').bind('click', function() {
		popupapparition('pageSchool', 'detailPartner');
	});
	
	$('#bouttonShwet').bind('click', function() {
		popupapparition('detailShwet', 'pageSchool');
	});
	$('#boutonCloseShwet').bind('click', function() {
		popupapparition('pageSchool', 'detailShwet');
	});
	
	$('#bouttonADIT').bind('click', function() {
		popupapparition('detailADIT', 'pageSchool');
	});
	$('#boutonCloseADIT').bind('click', function() {
		popupapparition('pageSchool', 'detailADIT');
	});
	
	});
	
	
})(jQuery);
