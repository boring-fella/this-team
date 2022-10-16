import confetti from 'canvas-confetti';
const teamModal = document.querySelector('.modal-team');
const overlay = document.querySelector('.js-overlay');
const btnModalClose = document.querySelector('[data-team-close]');
const openModalT = document.querySelector('.js-open-team-modal');

function showConfetti() {
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 400, spread: 200, zIndex: 2021, scalar: 0.8 });
}

const escClose = e => {
  if (e.key === 'Escape') {
    addIsHidden();
  }
};

const overlayClose = e => {
  if (!e.target.closest('.modal-team')) {
    addIsHidden();
  }
};

openModalT.addEventListener('click', openOurTeamModal);

function openOurTeamModal() {
  let teamPaddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';
  showConfetti();
  document.body.style.overflow = 'hidden';

  overlay.style.paddingRight = teamPaddingOffSet;
  document.body.style.paddingRight = teamPaddingOffSet;

  teamModal.classList.remove('is-hidden__team');
  overlay.classList.remove('is-hidden__team');

  overlay.addEventListener('click', overlayClose);
  document.addEventListener('keydown', escClose);
}

btnModalClose.addEventListener('click', closeOurTeamModal);
function closeOurTeamModal() {
  addIsHidden();
}

function addIsHidden() {
  overlay.style.paddingRight = 0;
  document.body.style.paddingRight = 0;

  document.body.style.overflow = 'visible';
  teamModal.classList.add('is-hidden__team');
  overlay.classList.add('is-hidden__team');

  document.removeEventListener('keydown', escClose);
  overlay.removeEventListener('click', overlayClose);
}
