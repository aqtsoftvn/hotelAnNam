/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();

            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {

                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {

                    $( this ).on( 'click', function( event ) {

                        var $dot = $( this );

                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );

                        }

                        slitslider.jump( i + 1 );
                        return false;

                    } );

                } );

            };

            return { init : init };

    })();

    Page.init();

});



$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });


	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,

		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},

		helpers : {
			title : {
				type: 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});

});


/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(10.511229, 108.945963);

	    var mapOptions = {
	        zoom: 15,
	        center: myLatLng,
	        navigationControl: true,
	        scaleControl: true,
	        draggable: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#46bcec'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(10.511229, 108.945963),
        map: map,
    });
    var infowindow = new google.maps.InfoWindow({
        content: "Địa chỉ nhà nghỉ Hoàng phú"
    });
    infowindow.open(map,marker);
}

// ========== END GOOGLE MAP ========== //

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();

/*========================================================================================
DATETIME PICKER
==========================================================================================*/
/*$(document).ready(function(){
        var date_input=$('input[name="date-bg"]');
        var container=$('#date-bg form').length>0 ? $('#date-bg form').parent() : "body";
        date_input.datepicker({
            format: 'dd/mm/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
    });
$(document).ready(function(){
        var date_input=$('input[name="date-end"]');
        var container=$('#date-end form').length>0 ? $('#date-end form').parent() : "body";
        date_input.datepicker({
            format: 'dd/mm/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
    });*/
/*====================================================================================================================================================================================================
SEE MORE
======================================================================================================================================================================================================*/
$(document).ready(function() {
  var showChar = 400;
  var ellipsestext = "...";
  $('.more').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar-1, content.length - showChar);

      var html = c + '<span class="moreelipses">'+ellipsestext+'</span>';

      $(this).html(html);
    }

  });
});

$(document).ready(function() {
  var showChar = 50;
  var ellipsestext = "...";
  $('.mored').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar-1, content.length - showChar);

      var html = c + '<span class="moreelipses">'+ellipsestext+'</span>';

      $(this).html(html);
    }

  });
});


$(document).ready(function() {
  var showChar = 100;
  var ellipsestext = "...";
  var moretext = "xem chi tiết";
  $('.imgmore').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar-1, content.length - showChar);

      var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<a href="" class="morelink1">'+moretext+'</a></span>';

      $(this).html(html);
    }

  });

  $(".morelink1").click(function(){
    history.pushState({}, "", "chitietdv.html");
  });
});

/*============================================================================================================================
Trạng thái phòng
==============================================================================================================================*/
$(document).ready(function() {
    var x = document.getElementsByClassName("trangthai");
    for (i = 0; i < x.length; i++) {
       if (x[i].innerText == "Còn phòng") {
            x[i].style.color = "#4bb777";
       }
       else if (x[i].innerText == "Phòng đã đặt") {
            x[i].style.color = "red";
       }
    }
});
/*=======================================================================================
ZOOM IMAGE
=========================================================================================*/
$(document).ready(function(){
      // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (var i = 0; i < img.length; i++) {
        img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
})

// img clicks
$(document).ready(function() {
  $(".img-phong").click(function(){
    window.location.href = 'chitietph.html';
  });
});
// hs clicks
$(document).ready(function() {
  $(".img-hs").click(function(){
    window.location.href = 'chitieths.html';
  });
});
