/* ========================================
   栖木全屋定制 - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  initNavHighlight();
  initSmoothScroll();
  initFadeInAnimations();
});

/* --- Navigation highlight on scroll --- */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header-nav a[href^="#"]');

  function highlightNav() {
    let current = '';
    const scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();
}

/* --- Smooth scroll for anchor links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        var offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
}

/* --- Fade-in on scroll --- */
function initFadeInAnimations() {
  var elements = document.querySelectorAll('.fade-in');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(function (el) {
    observer.observe(el);
  });
}

/* --- CTA button click --- */
document.querySelectorAll('.header-cta, .cta-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var contact = document.querySelector('#contact');
    if (contact) {
      var offset = contact.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});
