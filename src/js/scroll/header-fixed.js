const sectionMain = document.querySelector('.section-main');

if (sectionMain) {
  const headerContainer = document.querySelector('header');
  const headerHeight = headerContainer.offsetHeight;


  document.addEventListener('scroll', onHeaderScroll);

  function onHeaderScroll() {
    if (window.scrollY > headerHeight / 3) {
      document.querySelector('.preloader').classList.add('preloader-fixed');
      headerContainer.classList.add('is-fixed');
      sectionMain.style.paddingTop = headerHeight + 'px';
    } else {
      document.querySelector('.preloader').classList.remove('preloader-fixed');
      headerContainer.classList.remove('is-fixed');
      sectionMain.removeAttribute('style');
    }
  }
}
