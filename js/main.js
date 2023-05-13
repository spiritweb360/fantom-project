const navbarBtn = document.querySelector('.navbar-nav__btn')
const menu = document.querySelector('.menu')
const menuNavbar = document.querySelector('.menu-navbar')

navbarBtn.addEventListener('click', function(){
  menu.style.display = 'block'
  menu.style.transition = 'all 0.3s'
  menuNavbar.style.transition = 'all 0.5s'
  setTimeout(()=>{
    menu.style.opacity = '1'
  }, 100)
  setTimeout(()=>{
    menuNavbar.style.transform = 'translateX(0%)'
  }, 300)
})

menu.addEventListener('click', function(){
  menuNavbar.style.transform = 'translateX(-180px)'
  setTimeout(()=>{
    menu.style.opacity = '0'
  }, 100)
  setTimeout(()=>{
    menu.style.display = 'none'
  }, 300)
  setTimeout(() => {
    menuNavbar.removeAttribute('style')
    menu.removeAttribute('style')
  }, 400);
})

var swiper = new Swiper(".reviews-slider__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 80,
  slidesPerView: 1,
});

var swiper = new Swiper(".blog-slider__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  breakpoints: {
    480: {slidesPerView: 1},
    768: {slidesPerView: 2},
    1200: {slidesPerView: 3},
    // 1400: {slidesPerView: 4},
  }
});