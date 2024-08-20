    document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slide');
    const slides = slider.querySelectorAll('img');
    const numSlides = slides.length;
    let currentIndex = 0;

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % numSlides;
      const offset = currentIndex * slider.clientWidth;
      slider.scrollTo({ left: offset, behavior: 'smooth' });
    }

    setInterval(showNextSlide, 3000); // Change the interval time (3000ms = 3 seconds) as needed
  });
