if(screen.width > 999){
var swiper = new Swiper(".reviews", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}else if(screen.width < 999){
  var swiper = new Swiper(".reviews", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
