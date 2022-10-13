const headerContainer = document.querySelector('.header-home');
const sectionMain = document.querySelector('.section-main');
const headerHeight = headerContainer.offsetHeight;

document.addEventListener('scroll', onHeaderScroll);

function onHeaderScroll() {
  if (window.scrollY > headerHeight / 3) {
    headerContainer.classList.add('is-fixed');
    sectionMain.style.paddingTop = headerHeight + 'px';
  } else {
    headerContainer.classList.remove('is-fixed');
    sectionMain.removeAttribute('style');
  }
}
