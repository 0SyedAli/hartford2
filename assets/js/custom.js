AOS.init({
  once: true,
});

// text edtior start

$('.banner-btm-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.s8-card-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  centerMode: true,
  responsive: [{ breakpoint: 1099, settings: { slidesToShow: 3, centerMode: true, slidesToScroll: 1, infinite: !0, dots: !0 } }, { breakpoint: 830, settings: { slidesToShow: 2, centerMode: true, slidesToScroll: 1 } }, {
    breakpoint: 580, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1 }
  }]
});

$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  centerMode: true,
  arrows: false,
  responsive: [{ breakpoint: 1099, settings: { slidesToShow: 3, centerMode: true, slidesToScroll: 1, infinite: !0, dots: !0 } }, { breakpoint: 830, settings: { slidesToShow: 2, centerMode: true, slidesToScroll: 1 } }, {
    breakpoint: 580, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1 }
  }]
});

$('.datepicker').pickadate({
  monthSelector: true,
  yearSelector: true,
  yearSelector: 100,
  dateMin: [1960, 1, 1],
  dateMax: true,
  onStart: function () {
    this.show(1, 1960)
  }
});
// text edtior end
