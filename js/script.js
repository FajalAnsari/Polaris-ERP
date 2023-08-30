// Home page 
// preloader 


// slider
const partneredImages = document.querySelector('.partnered-images');
  const partneredImageWidth = document.querySelector('.partnered-image').clientWidth;
  let currentIndex = 0;
  let isPaused = false;

  function slideImages(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 7; // Wrap to the last image
    if (currentIndex > 7) currentIndex = 0; // Wrap to the first image

    partneredImages.style.transform = `translateX(-${currentIndex * partneredImageWidth}px)`;
  }

  let intervalId = setInterval(() => {
    if (!isPaused) {
      slideImages(1);
    }
  }, 2000);

  function clearSlideInterval() {
    clearInterval(intervalId);
  }

  partneredImages.addEventListener('mouseover', () => {
    isPaused = true;
    clearSlideInterval();
  });

  partneredImages.addEventListener('mouseout', () => {
    isPaused = false;
    intervalId = setInterval(() => {
      if (!isPaused) {
        slideImages(1);
      }
    }, 2000);
  });

  partneredImages.addEventListener('mousedown', () => {
    clearSlideInterval();
  });

  partneredImages.addEventListener('mouseup', () => {
    if (!isPaused) {
      intervalId = setInterval(() => {
        slideImages(1);
      }, 2000);
    }
  });

  window.addEventListener('resize', () => {
    partneredImageWidth = document.querySelector('.partnered-image').clientWidth;
    slideImages(0);
  });



  // Faq's 
  // Add event listeners to each toggle button
  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
  
      question.addEventListener("click", () => {
        // Close all other open answers
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("open")) {
            otherItem.querySelector(".faq-answer").style.display = "none";
            otherItem.querySelector(".faq-question .icon").classList.remove("minus-icon");
            otherItem.querySelector(".faq-question .icon").classList.add("plus-icon");
            otherItem.classList.remove("open");
          }
        });
  
        if (answer.style.display === "none") {
          answer.style.display = "block";
          question.querySelector(".icon").classList.remove("plus-icon");
          question.querySelector(".icon").classList.add("minus-icon");
          item.classList.add("open");
        } else {
          answer.style.display = "none";
          question.querySelector(".icon").classList.remove("minus-icon");
          question.querySelector(".icon").classList.add("plus-icon");
          item.classList.remove("open");
        }
      });
    });
  });
  
  
// sticky navbar js 
window.addEventListener("scroll", function () {
  var navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 100) {
      navbar.classList.add('sticky-nav');
  } else {
      navbar.classList.remove('sticky-nav');
  }
});