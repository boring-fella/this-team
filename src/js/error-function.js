export function onFetchError(error) {
  console.log(error.message);

  const notifEl = document.querySelector('.text-error');

  notifEl.style.color = '#ff001b';
  notifEl.textContent = 'Sorry, something going wrong... Please try again.';
}
