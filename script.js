'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////
// select element 

const allSections = document.querySelectorAll('.section');
const Section = document.querySelector('.section');
const header = document.querySelector('.header');
const allButtons = document.getElementsByClassName('button');
document.getElementById('section--1');

// creating and inserting element
// .insertAdjacentHTML déjà vu au niveau du foreach
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies to improve performance.';
message.innerHTML = 'We use cookies to improve performance <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
header.append(message);
header.before(message);
header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function(){
  message.remove();
});
