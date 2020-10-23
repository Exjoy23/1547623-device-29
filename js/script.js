'use strict';

// FUNCTIONS

function createSlider(item, i, buttons, slides) {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    buttons.forEach(item => {
      item.classList.remove('current');
      slides.forEach(item => {
        item.classList.add('visually__hidden');
      });
    });
    item.classList.add('current');
    slides[i].classList.remove('visually__hidden');
  });
}

function openModal(modal) {
  modal.classList.add('current');
  modal.classList.add('show');
}

function closeModal(modal) {
  modal.classList.add('hide');
  removeClassOnTimer(modal, 'current', 1000);
  removeClassOnTimer(modal, 'show', 1000);
  removeClassOnTimer(modal, 'hide', 1000);
}

function removeClassOnTimer(selector, addClass, time) {
  setTimeout(() => selector.classList.remove(addClass), time);
}

// GALLERY SLIDER

const gallery = document.querySelector('.gallery');
const gallerySlides = gallery.querySelectorAll('.gallery__slider__item');
const galleryButtons = gallery.querySelectorAll('.gallery__slider__control__button');

galleryButtons.forEach((item, i) => {
  createSlider(item, i, galleryButtons, gallerySlides);
});

// SERVICES SLIDER

const services = document.querySelector('.services');
const servicesSlides = services.querySelectorAll('.services__item');
const servicesButtons = services.querySelectorAll('.services__list__control__link');

servicesButtons.forEach((item, i) => {
  createSlider(item, i, servicesButtons, servicesSlides);
});

// MAP

const info = document.querySelector('.info');
const openMap = info.querySelector('.contacts__link__map');
const closeMap = info.querySelector('.contacts__map__button');
const map = info.querySelector('.contacts__map');

openMap.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(map);
});

closeMap.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal(map);
});

// POPUP

const openPopup = info.querySelector('.contacts__link');
const closePopup = info.querySelector('.contacts__popup__button');
const popup = info.querySelector('.contacts__popup');

openPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(popup);
});

closePopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal(popup);
});