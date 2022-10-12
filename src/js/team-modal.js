import confetti from 'canvas-confetti';
const TeamModal = document.querySelector('.modal-team');
const overlay = document.querySelector('.js-overlay');
const BtnModalClose = document.querySelector('[data-team-close]');
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
  showConfetti();
  TeamModal.classList.remove('is-hidden__team');
  overlay.classList.remove('is-hidden__team');

  overlay.addEventListener('click', overlayClose);

  document.addEventListener('keydown', escClose);
}

BtnModalClose.addEventListener('click', closeOurTeamModal);
function closeOurTeamModal() {
  addIsHidden();
}

function addIsHidden() {
  TeamModal.classList.add('is-hidden__team');
  overlay.classList.add('is-hidden__team');
  document.removeEventListener('keydown', escClose);
  overlay.removeEventListener('click', overlayClose);
}
