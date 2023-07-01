(function (window, document, undefined) {
    
    let darkMode = localStorage.getItem('my_darkMode');
    if (darkMode) {
        document.documentElement.className += ' darkmode';
    }
})(window, document);

(function (window, document, undefined) {
    let switcherMode = document.querySelector('.switch');
    switcherMode.addEventListener('change', function (event) {
        event.preventDefault();
        document.documentElement.classList.toggle('darkmode');
        if ( document.documentElement.classList.contains('darkmode') ) {
            localStorage.setItem('my_darkMode', true);
            return;
        }
        localStorage.removeItem('my_darkMode');
    }, false);
})(window, document);