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
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
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

// SERVICES SLIDER

const services = document.querySelector('.services');
const servicesSlides = services.querySelectorAll('.services__item');
const servicesButtons = services.querySelectorAll('.services__list__control__link');

servicesButtons.forEach((item, i) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    servicesButtons.forEach(item => {
      removeCurrent(item);
      servicesSlides.forEach(item => {
        hideSlide(item);
      });
    });
    addCurrent(item);
    showSlide(servicesSlides[i]);
  });
});