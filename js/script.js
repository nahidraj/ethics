$(function () {
  "use strict";
  // banner slider
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    speed: 800,
  }).slickAnimation();

  // about us video js
  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // ec member slider slider
  $('.ec-member-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    fade: false,
    dots: false,
    infinite: true,
    arrows: true,
    autoplaySpeed: 2000,
    // speed: 3000,
    // cssEase: "linear",
    pauseOnHover: true,
    prevArrow: '<i class="fas fa-long-arrow-alt-left icon left"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right icon right"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  // feature slider
  $('.feature-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    dots: false,
    infinite: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  })
  // client slider
  $('.client-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    dots: false,
    infinite: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  })


  // back to top js
  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  });

  $(".js-select2").select2({
    closeOnSelect: true
  });
  // gallery popup js
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

  // aos animation
  AOS.init();

});

// mobile menu js
$('.mobile-topbar .bars i').click(function () {
  $('.mobile-menu-main').addClass('show-mobile-menu')
})
$('.close-m-menu').click(function () {
  $('.mobile-menu-main').removeClass('show-mobile-menu')
})
$('.mobile-topbar .bars i').click(function () {
  $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
})
$('.mobile-topbar .bars i').click(function () {
  $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
})
$('.close-m-menu').click(function () {
  $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
})
$('.mobile-menu-overlay').click(function () {
  $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
})
$('.mobile-menu-overlay').click(function () {
  $('.mobile-menu-main').removeClass('show-mobile-menu')
})

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

//# sourceMappingURL=custom.js.map