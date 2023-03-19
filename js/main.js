$(document).ready(function () {
  /***** search *****/
  $(".search-icon").click(function () {
    $(".search-cont").slideToggle();
  });
  /***** search *****/
  $(".menu-icon").click(function (e) {
    $(".overlay").fadeIn(500);
    $(".top-nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-icon,.overlay").click(function (e) {
    $(".overlay").fadeOut(500);
    $(".top-nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  if ($(window).width() <= 991) {
    $(".nav-link").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".nav-link").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-link").not(this).siblings().slideUp(500);
    });
  }
  /***** cats slider *****/
  if ($(window).width() <= 767) {
    var catSwiper = new Swiper(".cats-slider .swiper-container", {
      spaceBetween: 20,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 4500,
      },
      pagination: {
        el: ".cats-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
      },
    });
  }
  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper-container", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-button-next",
      prevEl: ".main-slider .swiper-button-prev",
    },
  });
  /***** Specials slider *****/
  var specialswiper = new Swiper(".specials-slider .swiper-container", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 31,
      },
    },
    pagination: {
      el: ".specials-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".specials-slider .swiper-button-next",
      prevEl: ".specials-slider .swiper-button-prev",
    },
  });

  /***** Bestseller slider *****/
  var bestsellerswiper = new Swiper(".bestseller-slider .swiper-container", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 31,
      },
    },
    pagination: {
      el: ".bestseller-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".bestseller-slider .swiper-button-next",
      prevEl: ".bestseller-slider .swiper-button-prev",
    },
  });

  /***** Arrow *****/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
