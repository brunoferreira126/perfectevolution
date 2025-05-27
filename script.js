document.addEventListener('DOMContentLoaded', () => {
  // === SCROLL SUAVE ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // === MENU HAMBÚRGUER ===
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
      if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
          navLinks.classList.remove('active');
      }
  });

  // === CARROSSEL ===
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-track .projeto-card');
  const btnNext = document.querySelector('.carousel-btn.next');
  const btnPrev = document.querySelector('.carousel-btn.prev');
  let currentSlide = 0;

  function getCardsPerPage() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function updateCarousel() {
    const cardsPerPage = getCardsPerPage();
    const cardWidth = cards[0]?.offsetWidth + 30 || 330; // fallback
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }

  btnNext?.addEventListener('click', () => {
    const cardsPerPage = getCardsPerPage();
    if (currentSlide + cardsPerPage < cards.length) {
      currentSlide += cardsPerPage;
    } else {
      currentSlide = 0;
    }
    updateCarousel();
  });

  btnPrev?.addEventListener('click', () => {
    const cardsPerPage = getCardsPerPage();
    if (currentSlide - cardsPerPage >= 0) {
      currentSlide -= cardsPerPage;
    } else {
      currentSlide = Math.max(0, cards.length - cardsPerPage);
    }
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();

  // === FORM CONTATO ===
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
  }
});
