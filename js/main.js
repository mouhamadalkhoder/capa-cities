(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

})(jQuery);



$('.client-carousel').owlCarousel({
  loop: true,
  margin:15,
  autoplay: true,
  autoplaySpeed:1000,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 4
    },
    900: {
      items: 6
    }
  }
});




//earth 









//button get down 

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if ((this.hash !== "")&&(this.pathname ==window.location.pathname)) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//EARTH 

/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * https://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart("chartdiv", {
  type: "map",
  "theme": "light",
  pathToImages: "https://www.amcharts.com/lib/3/images/",

  imagesSettings: {
      rollOverColor: "#0D4F9A",
      rollOverScale: 3,
      selectedScale: 3,
      selectedColor: "#0D4F9A",
      color: "#0D4F9A"
  },

  zoomControl: {
      buttonFillColor: "#0D4F9A"
  },

  areasSettings: {
      unlistedAreasColor: "#0D4F9A"
  },

  dataProvider: {
      map: "worldLow",
      images: [{
          zoomLevel: 10,
          scale: 0.5,
          title: "Poland",
          latitude: 52.6763,
          longitude: 18.5681
      }, {
          
          zoomLevel: 5,
          scale: 0.5,
          title: "France",
          latitude: 48.8567,
          longitude: 2.3510
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "IraQ",
          latitude: 32.7558,
          longitude: 45.6176
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Jordan",
          latitude: 30.7558,
          longitude: 36.6176
      }, 
       {
          zoomLevel: 5,
          scale: 0.5,
          title: "United Kingdom",
          latitude: 51.5002,
          longitude: -0.1262,
          
      }, 
       {
          zoomLevel: 5,
          scale: 0.5,
          title: "Qatar",
          latitude: 25.6353,
          longitude: 51.2250
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Emirates",
          latitude: 24,
          longitude: 54.6823,
          
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Kuwait",
          latitude: 29,
          longitude: 48
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Oman",
          latitude:23,
          longitude: 58
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Zambia",
          latitude: -15.0571,
          longitude: 31.2272
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "United States",
          latitude: 50.4235,
          longitude: -90.6979
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Lebanon",
          latitude: 33.8921,
          longitude: 36
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Saudi",
          latitude:21,
          longitude: 47
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "Egypte",
          latitude: 30.0571,
          longitude: 31.2272
      }, {
          zoomLevel: 5,
          scale: 0.5,
          title: "australia",
          latitude:-20 ,
          longitude: 133
      }]
  }
});

// add events to recalculate map position when the map is moved or zoomed
map.addListener("positionChanged", updateCustomMarkers);

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers (event) {
  // get map object
  var map = event.chart;
  
  // go through all of the images
  for( var x in map.dataProvider.images) {
      // get MapImage object
      var image = map.dataProvider.images[x];
      
      // check if it has corresponding HTML element
      if ('undefined' == typeof image.externalElement)
          image.externalElement = createCustomMarker(image);

      // reposition the element accoridng to coordinates
      image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
      image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker(image) {
  // create holder
  var holder = document.createElement('div');
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';
  
  // maybe add a link to it?
  if (undefined != image.url) {
      holder.onclick = function() {
          window.location.href = image.url;
      };
      holder.className += ' map-clickable';
  }
  
  // create dot
  var dot = document.createElement('div');
  dot.className = 'dot';
  holder.appendChild(dot);
  
  // create pulse
  var pulse = document.createElement('div');
  pulse.className = 'pulse';
  holder.appendChild(pulse);
  
  // append the marker to the map container
  image.chart.chartDiv.appendChild(holder);
  
  return holder;
}

