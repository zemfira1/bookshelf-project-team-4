document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.href;
  const menuLinks = document.querySelectorAll('.site-nav .nav-link');

  menuLinks.forEach(function (link) {
    const linkAction = link.getAttribute('data-action');
    if (currentPage.includes(linkAction)) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
});
