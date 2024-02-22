document.addEventListener('DOMContentLoaded', function() {
    const menuOpener = document.querySelector('.menu-opener');
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('nav');
  
    menuOpener.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  });

  