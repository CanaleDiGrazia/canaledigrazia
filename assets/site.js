// Smooth reveal on scroll
function reveal() {
  document.querySelectorAll('.fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Simple navigation helper (not required but included for future expansion)
function navTo(e, href) {
  if (e) e.preventDefault();
  window.location.href = href;
}
