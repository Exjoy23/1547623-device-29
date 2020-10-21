'use strict';

function showSlide(selector) {
    selector.classList.remove('visually__hidden');
  }
  
  function hideSlide(selector) {
    selector.classList.add('visually__hidden');
  }
  
  function addCurrent(selector) {
    selector.classList.add('current');
  }
  
  function removeCurrent(selector) {
    selector.classList.remove('current');
  }

// GALLERY SLIDER

const gallery = document.querySelector('.gallery');
const gallerySlides = gallery.querySelectorAll('.gallery__slider__item');
const galleryButtons = gallery.querySelectorAll('.gallery__slider__control__button');

galleryButtons.forEach((item, i) => {
  item.addEventListener('click', () => {
    galleryButtons.forEach(item => {
      removeCurrent(item);
      gallerySlides.forEach(item => {
        hideSlide(item);
      });
    });
    addCurrent(item);
    showSlide(gallerySlides[i]);
  });
});