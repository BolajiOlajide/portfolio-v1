window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag("js", new Date());

gtag("config", "UA-48710501-7");

window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const modalWindow = document.querySelector('.modal-window');
  const darkModeToggle = document.getElementById('darkModeToggle');

  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    document.documentElement.setAttribute('data-theme', "dark");
  }

  const currentTheme = localStorage.getItem('proton-theme') ? localStorage.getItem('proton-theme') : null;

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      darkModeToggle.checked = true;
    }
  }

  const toggleOverlay = () => {
    modalWindow.classList.toggle('show');
  }

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('proton-theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('proton-theme', 'light');
    }
  }

  // event listeners
  menuBtn.addEventListener('click', toggleOverlay);
  darkModeToggle.addEventListener('change', switchTheme, false);
});