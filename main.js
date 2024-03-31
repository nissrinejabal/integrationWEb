// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation')

navToggle.addEventListener('click', () => {
  // primaryNav.classList.toggle("opened")
  primaryNav.hasAttribute('data-visible')
    // ? console.log('true')
    // : console.log('false')
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute('aria-expanded', true)
  primaryNav.toggleAttribute("data-visible")
  primaryHeader.toggleAttribute("data-overlay")
})

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  //   centerMode	Boolean	Default: false
  // (EXPERIMENTAL) Makes the center slide active
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  }

});
// Animate on scroll with Anime.js
document.addEventListener('DOMContentLoaded', function () {
  anime({
    targets: '.animated-section',
    opacity: 1,
    translateY: 50,
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 500
  });
});

import 'bootstrap/dist/css/bootstrap.min.css'; // 


