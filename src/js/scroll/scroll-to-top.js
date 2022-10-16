const scrollBtn = document.querySelector('.btn-scroll');

document.addEventListener('scroll', () => {
  btnVisibility();
});

scrollBtn.addEventListener('click', () => {
  scrollOnTop(0);
});

const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtn.style.visibility = 'visible';
  } else {
    scrollBtn.style.visibility = 'hidden';
  }
};

export function scrollOnTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
