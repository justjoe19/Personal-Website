

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
});