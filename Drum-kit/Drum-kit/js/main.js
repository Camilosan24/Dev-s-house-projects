 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
				autoplay: true,
		    margin: 20,
		    nav: false,
		    dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 1
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2
	        },
	        1200:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 3
	        }
		    }
			});
		}

		if ( $('.slide-one-item').length > 0 ) {
			$('.slide-one-item').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    pauseOnHover: false,
		    nav: true,
		    animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
		    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
		  });
	  }


	  if ( $('.nonloop-block-4').length > 0 ) {
		  $('.nonloop-block-4').owlCarousel({
		    center: true,
		    items:1,
		    loop:false,
		    margin:10,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	          items:1
	        }
		    }
			});
		}

	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: true,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		if ( $('#date-countdown').length > 0 ) {
			$('#date-countdown').countdown('2020/10/10', function(event) {
			  var $this = $(this).html(event.strftime(''
			    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
			    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
			    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
			    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
			    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
			});
		}
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	

});

const teclado = document.getElementById('teclado');
const drumPieces= document.getElementById('DrumPieces').addEventListener('click', sonidoMouse);
/*const bambo = document.getElementById('bambo');
const platillo_crash_izquierdo = document.getElementById('platillo-crash-izquierdo');
const platillo_crash_derecho = document.getElementById('platillo-crash-derecho');
const platillo_negro_izquierdo = document.getElementById('platillo-negro-izquierdo');
const platillo_crash_izquierdo_abajo = document.getElementById('platillo-crash-izquierdo-abajo');
const tambor_centro = document.getElementById('tambor-centro');
const tambor_derecho = document.getElementById('tambor-derecho');
const platillo_crash_derecho_abajo = document.getElementById('platillo-crash-derecho-abajo');
const tambor_negro_abajo = document.getElementById('tambor_negro_abajo');
*/


var teclas = 
{
    bombo : 66,
    caja : 67,
    hit_hat : 72,
    platillo_Der : 68,
    platillo_Izq : 73,
    platillo_ride : 82,
    tom_aereo : 65,
    tom_suelo : 83

};

document.addEventListener("keyup", sonidoTeclado);

function sonidoTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.bombo:
            teclado.innerHTML = '<Audio src= "./sounds/bombo.mp3" autoplay></Audio>';
        break;
        case teclas.caja:
            teclado.innerHTML = '<Audio src= "./sounds/caja.mp3" autoplay></Audio>';
        break;
        case teclas.hit_hat:
            teclado.innerHTML = '<Audio src= "./sounds/hit-hat.mp3" autoplay></Audio>';
        break;
        case teclas.platillo_Der:
            teclado.innerHTML = '<Audio src= "./sounds/platillo-crash-derecho2.mp3" autoplay></Audio>';
        break;
        case teclas.platillo_Izq:
            teclado.innerHTML = '<Audio src= "./sounds/platillo-crash-izquierdo.mp3" autoplay></Audio>';
        break;
        case teclas.platillo_ride:
            teclado.innerHTML = '<Audio src= "./sounds/platillo-ride.mp3" autoplay></Audio>';
        break;
        case teclas.tom_aereo:
            teclado.innerHTML = '<Audio src= "./sounds/tom-aereo.mp3" autoplay></Audio>';
        break;
        case teclas.tom_suelo:
            teclado.innerHTML = '<Audio src= "./sounds/tom-suelo.mp3" autoplay></Audio>';
        break;
        //default:

        //break;       
        

    }
} 



function sonidoMouse(e)
{   
	const idEvento = e.target;
	console.log(idEvento);
	
		if(idEvento == "bambo")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/bombo.mp3" autoplay></Audio>';
		}
		else if(idEvento == "platillo-crash-izquierdo")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/platillo-crash-izquierdo.mp3" autoplay></Audio>';
		}
		else if(idEvento == "platillo-crash-derecho")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/platillo-crash-derecho.mp3" autoplay></Audio>';
		}
		else if(idEvento == "platillo-negro-izquierdo")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/hit-hat.mp3" autoplay></Audio>';
		}
		else if(idEvento == "platillo-crash-izquierdo-abajo")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/platillo-ride.mp3" autoplay></Audio>';
		}
		else if(idEvento == "tambor-centro" )
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/tom-aereo.mp3"  autoplay></Audio>';
		}
		else if(idEvento == "tambor-derecho")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/tom-aereo.mp3" autoplay></Audio>';
		}
		else if (idEvento == "platillo-crash-derecho-abajo")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/platillo-crash-derecho.mp3" autoplay></Audio>';
		}
		else if (idEvento == "tambor-negro-abajo")
		{
			drumPieces.innerHTML ='<Audio src= "./sounds/tom-suelo.mp3" autoplay></Audio>';
		}

}