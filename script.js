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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // window.scrollTo({
  //   top: s1coords.top,
  //   left: s1coords.left,
  //   behavior: 'smooth'
  // }); 

  section1.scrollIntoView({behavior: 'smooth'});

});



////////////////////////////////
// LECTURES
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
message.innerHTML =
  'We use cookies to improve performance <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
header.append(message);
header.before(message);
header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // ancienne méthode removeChild
    // message.parentNode.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(getComputedStyle(message).color);

message.style.height = 
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beatifull minimalist logo';
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use
// logo.className = 'Jonas';

