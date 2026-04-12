const toggleButton = document.getElementById('theme-toggle');
const themeIcon = toggleButton.querySelector('.theme-icon');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load, check for saved preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

