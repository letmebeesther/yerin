let currentSlide = 0;

  function showSlide(index) {
    const slider = document.getElementById('image-slider');
    const slides = document.getElementsByClassName('slide');
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    const offset = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + offset + ')';
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  setInterval(nextSlide, 3000); // 3초마다 자동으로 다음 슬라이드로 이동하도록 설정