$(function () {
  var config = {
    animation: {
      enable: false,
    },
  };
  var mixer = mixitup(".portfolio__content", config);

});


const swiper = new Swiper(".swiper", {
  
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});