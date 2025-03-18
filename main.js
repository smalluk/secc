const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true)
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute('data-overlay');
})


const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: true, // dots enabled 1280px and up
    },
  },
});

// Array of image URLs
const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/10.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg',
  'images/15.jpg',
  'images/16.jpg',
  'images/17.jpg',
  'images/18.jpg',
  'images/19.jpg',
  'images/20.jpg',
  'images/21.jpg'
];

// Function to select a random image
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Set the src attribute of the image element
document.getElementById('randomImage').src = getRandomImage();
