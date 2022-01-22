// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };
$(".sliderMain").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  centerMode: false,
  variableWidth: false,
  dots: false,
  asNavFor: ".sliderNav__nav",
  responsive: [
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".sliderNav__nav").slick({
  asNavFor: ".sliderMain",
  dots: false,
  arrows: false,
  speed: 300,
  centerMode: false,
  variableWidth: true,
});
