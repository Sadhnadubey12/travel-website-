
(function($) {
	
	"use strict";
	

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 250) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();

	// dropdown menu

	var mobileWidth = 975;
	var navcollapse = $('.navigation li.dropdown');
	 
	$(window).on('resize', function(){
	    navcollapse.children('ul').hide();
	});

	navcollapse.hover(function() {
	if($(window).innerWidth() >= mobileWidth){
	      $(this).children('ul').stop(true, false, true).slideToggle(300);
	    }
	});
   $(window).on('scroll', function () {
		$(window).scrollTop() >= 200 ? $('.header-upper').addClass('stickyadd') : $('.header-upper').removeClass('stickyadd');
	}); 
 //   $(window).on('scroll', function () {
	// 	$(window).scrollTop() >= 200 ? $('.logo').addClass('imgrm') : $('.logo').removeClass('imgrm');
	// });
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');		
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	//Hidden Sidebar
	if ($('.hidden-bar,.fullscreen-menu').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.nav-toggler-two');
		var hiddenBarCloser = $('.hidden-bar-closer,.close-menu');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			$('body').addClass('visible-menu-bar');
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			$('body').removeClass('visible-menu-bar');
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).on('click', function () {
				$(this).parent() // return parent of .btn.expander (a)
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-angle-right fa-angle-down');

				return false;

			});
		});
	}
	hiddenBarMenuConfig();
	$('.banner-slider').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		dots: false,
		animateOut: 'fadeOut',
   		animateIn: 'fadeIn',
		dotsContainer: '#owl-custom-dots',
		nav: true,
		navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 6000,
		smartSpeed: 450,
	});
	var bannerSlider = $('.banner-slider');
	$('.owl-dot').click(function () {
		bannerSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
	});
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	//Testimonial Carousel
if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				},
				1500:{
					items:2
				}
			}
		});    		
	}
	if ($('.select-menu').length) {
		$('.select-menu').selectmenu();
	}
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			}, 1000);
	
		});
	}
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
$(".callbkFrm").on('submit',(function(e){e.preventDefault();
var url="_validation";
var data = new FormData(this);
data.append("operation","callback");
data.append("url",window.location.href);
$.ajax({type: "POST",url: url,data: data,contentType: false,cache: false,processData:false, dataType:"json",timeout:50000, 
beforeSend: function(){$('.actionbtn').addClass('is-loading');},
error:function(jqXHR,textStatus,errorThrown){
$('.actionbtn').removeClass('is-loading');
$(".clmsg").html('<div class="alert alert-danger">Something wrong try later</div>');
},
success: function(res){
$('.actionbtn').removeClass('is-loading');
if(res.status){location.href=res.msg;}else{$(".clmsg").html(res.msg);}
}
});
}));
	$(window).on('scroll', function() {
		headerStyle();
	});

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
	

})(window.jQuery);
