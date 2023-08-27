// Home page 

// slider
const partneredImages = document.querySelector('.partnered-images');
    const partneredImageWidth = document.querySelector('.partnered-image').clientWidth;
    let currentIndex = 0;

    function slideImages(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > 4) currentIndex = 4;

      partneredImages.style.transform = `translateX(-${currentIndex * partneredImageWidth}px)`;
    }

    let intervalId = setInterval(() => {
      slideImages(1);
    }, 2000);

    function clearSlideInterval() {
      clearInterval(intervalId);
    }

    partneredImages.addEventListener('mousedown', () => {
      clearSlideInterval();
    });

    partneredImages.addEventListener('mouseup', () => {
      intervalId = setInterval(() => {
        slideImages(1);
      }, 2000);
    });

    window.addEventListener('resize', () => {
      partneredImageWidth = document.querySelector('.partnered-image').clientWidth;
      slideImages(0);
    });