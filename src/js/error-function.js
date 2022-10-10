export function onFetchError(error) {
  console.log(error.message);

  const notifEl = document.querySelector('.text-error');

  notifEl.textContent = 'Sorry, something going wrong... Please try again.';

  const onCatchTimer = setTimeout(() => {
    notifEl.textContent = '';
  }, 2000);
}
