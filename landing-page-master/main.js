'use strict';
let curSlide = 0;

const slide = document.querySelectorAll('.slide');
const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot');
const hamburger = document.querySelector('.hamburger-header');
const navigation = document.querySelector('.primary-navigation');
const overlay = document.querySelector('.overlay');
const closeNav = document.querySelector('.close-nav');
// console.log(slide);
// slide.forEach(function (el, i) {
//   el.style.transform = `translateX(${100 * (i - curSlide)}%)`;
// });

const goToSlide = function (currentSlide) {
  slide.forEach(function (el, i) {
    el.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};

goToSlide(curSlide);

dots.addEventListener('click', function (e) {
  const target = e.target.closest('.dot').getAttribute('data-version-number');
  const closestDot = e.target.closest('.dot');
  console.log(closestDot);
  if (!target) return;
  goToSlide(target);
  dot.forEach(el => {
    el.classList.remove('active-dot');
  });
  closestDot.classList.add('active-dot');
});

hamburger.addEventListener('click', function (e) {
  navigation.classList.remove('navigation-visibility');
  overlay.classList.remove('hidden');
});

closeNav.addEventListener('click', function (e) {
  navigation.classList.add('navigation-visibility');
  overlay.classList.add('hidden');
});
