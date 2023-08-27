// Home page 

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