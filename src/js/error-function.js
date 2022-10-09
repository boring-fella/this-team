export function onFetchError() {
  console.log(error.message);

  refs.notificationEl.textContent =
    'Sorry, something going wrong... Please try again.';

  const onCatchTimer = setTimeout(() => {
    refs.notificationEl.textContent = '';
  }, 2000);
}
