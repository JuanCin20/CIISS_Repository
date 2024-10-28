$(document).ready(function () {

    $("#Input_Password_Usuario").on("click", function () {
        const Password_Usuario = document.getElementById("Password_Usuario");
        if (Password_Usuario.type === "password") {
            Password_Usuario.type = "text";
            $("#Control_Eye").removeClass("fa-solid fa-eye");
            $("#Control_Eye").addClass("fa-solid fa-eye-slash");
        } else {
            Password_Usuario.type = "password";
            $("#Control_Eye").addClass("fa-solid fa-eye");
            $("#Control_Eye").removeClass("fa-solid fa-eye-slash");
        }
    });

    $("#Input_Password_Usuario_01").on("click", function () {
        const Password_Usuario_01 = document.getElementById("Password_Usuario_01");
        if (Password_Usuario_01.type === "password") {
            Password_Usuario_01.type = "text";
            $("#Control_Eye_01").removeClass("fa-solid fa-eye");
            $("#Control_Eye_01").addClass("fa-solid fa-eye-slash");
        } else {
            Password_Usuario_01.type = "password";
            $("#Control_Eye_01").addClass("fa-solid fa-eye");
            $("#Control_Eye_01").removeClass("fa-solid fa-eye-slash");
        }
    });

    $("#Input_Password_Usuario_02").on("click", function () {
        const Password_Usuario_02 = document.getElementById("Password_Usuario_02");
        if (Password_Usuario_02.type === "password") {
            Password_Usuario_02.type = "text";
            $("#Control_Eye_02").removeClass("fa-solid fa-eye");
            $("#Control_Eye_02").addClass("fa-solid fa-eye-slash");
        } else {
            Password_Usuario_02.type = "password";
            $("#Control_Eye_02").addClass("fa-solid fa-eye");
            $("#Control_Eye_02").removeClass("fa-solid fa-eye-slash");
        }
    });

    $("#Form_Change_Password").validate({
        rules: {
            Password_Usuario: {
                required: true,
                minlength: 5,
            },
            Password_Usuario_01: {
                required: true,
                minlength: 5,
            },
            Password_Usuario_02: {
                required: true,
                minlength: 5,
                equalTo: "#Password_Usuario_01",
            },
        },
        messages: {
            Password_Usuario: {
                required: "Campo Requerido: Contrase\xf1a del Usuario",
                minlength:
                    "La Contrase\xf1a del Usuario debe Contener un M\xednimo de 5 Caracteres",
            },
            Password_Usuario_01: {
                required: "Campo Requerido: Nueva Contrase\xf1a del Usuario",
                minlength: "La Nueva Contrase\xf1a del Usuario debe Contener un M\xednimo de 5 Caracteres",
            },
            Password_Usuario_02: {
                required: "Campo Requerido: Nueva Contrase\xf1a del Usuario",
                minlength: "La Nueva Contrase\xf1a del Usuario debe Contener un M\xednimo de 5 Caracteres",
                equalTo: "Las Nuevas Contrase\xf1as Deben Coindicir",
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the "invalid-feedback" class to the error element
            error.addClass("invalid-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
    });
});