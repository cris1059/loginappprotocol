$(document).ready(function() {
    $("#navbar-container").load("../pages/requieres/nav_bar.html", function() {
        // Se asegura de que la funcionalidad de la barra de navegación se cargue
        $('#menu-icon').click(function() {
            $('#nav-menu').toggleClass('active');
        });
    });
});

