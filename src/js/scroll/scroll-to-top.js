const scrollBtn = document.querySelector('.btn-scroll');

document.addEventListener('scroll', () => {
  btnVisibility();
});

scrollBtn.addEventListener('click', () => {
  scrollOnTop();
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
    top: 270,
    behavior: 'smooth',
  });
}
