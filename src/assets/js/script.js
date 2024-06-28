$(document).ready(function() {
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();
        
        var username = $("#username").val();
        var password = $("#password").val();
        
        $.ajax({
            url: "./no_limit/dcodificate_n3r/login_auttenticate_nft/BD_USSERS.txt",
            dataType: "text",
            success: function(data) {
                var users = data.split('\n');
                var valid = false;
                var redirectUrl = "";
                
                $.each(users, function(index, user) {
                    var userDetails = user.split(',');
                    var storedUsername = userDetails[0].trim();
                    var storedPassword = userDetails[1].trim();
                    var storedRedirectUrl = userDetails[2].trim(); // Asumimos que la URL de redirección está en la tercera posición
                    
                    if (username === storedUsername && password === storedPassword) {
                        valid = true;
                        redirectUrl = storedRedirectUrl;
                        return false; // Break out of the loop
                    }
                });
                
                if (valid) {
                    $("#message").text("Login exitoso! Redirigiendo...").css("color", "green");
                    setTimeout(function() {
                        window.location.href = redirectUrl;
                    }, 1000); // Espera 1 segundo antes de redirigir
                } else {
                    $("#message").text("Usuario o contraseña incorrectos.");
                }
            },
            error: function() {
                $("#message").text("Error al cargar el archivo de usuarios.");
            }
        });
    });
});
