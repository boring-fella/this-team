const headerLibrary = document.querySelector('.header-library');
const sectionMain = document.querySelector('.section-library');
const headerHeightLb = headerLibrary.offsetHeight;


document.addEventListener('scroll', onHeaderLbScroll);

function onHeaderLbScroll() {
  if (window.scrollY > headerHeightLb / 8) {
    headerLibrary.classList.add('is-fixed');
    sectionMain.style.paddingTop = headerHeightLb + 'px';
  } else {
    headerLibrary.classList.remove('is-fixed');
    sectionMain.removeAttribute('style');
  }
}
