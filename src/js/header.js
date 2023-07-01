window.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.querySelector('a[data-action="index"]');
  homeLink.classList.add('current');

  const currentUrl = window.location.href;
  if (currentUrl.endsWith('/shopping-list.html')) {
    homeLink.classList.remove('current');

    const shoppingListLink = document.querySelector(
      'a[data-action="shopping-list"]'
    );
    shoppingListLink.classList.add('current');
  }
});
