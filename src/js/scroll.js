(function($) {
  'use strict'; // Start of use strict

  function animate(target) {
    $('html, body').animate(
        {
          scrollTop: target.offset().top - 56,
        },
        400,
    );
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ===
        this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        animate(target);
        return false;
      }
    }
  });

  // Decrease header on scroll and sctoll to top
  $(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height  > 50) {
      $('#back-to-top').css('display', 'block');
      $('#header-title').addClass('smaller-title');
      $('.nav-item').addClass('smaller-nav-item');
      $('#main-nav').removeClass('bg-dark');
      $('#main-nav').addClass('dark-background');
      $('#main-nav').addClass('shadow');
    } else {
      $('#back-to-top').css('display', 'none');
      $('#header-title').removeClass('smaller-title');
      $('.nav-item').removeClass('smaller-nav-item');
      $('#main-nav').addClass('bg-dark');
      $('#main-nav').removeClass('dark-background');
      $('#main-nav').removeClass('shadow');
    }
  });

  $('#back-to-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#main-nav',
    offset: 56,
  });
})(jQuery); // End of use strict
