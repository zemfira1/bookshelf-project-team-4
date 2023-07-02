function showLoader(loaderSelector) {
  const el = document.querySelector(loaderSelector);
  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
  }
}

function hideLoader(loaderSelector) {
  const el = document.querySelector(loaderSelector);
  if (!el.classList.contains('hidden')) {
    el.classList.add('hidden');
  }
}

export { showLoader, hideLoader };
