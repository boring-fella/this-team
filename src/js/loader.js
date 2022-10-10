export function toggleLoader() {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.toggle('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 200);
}
