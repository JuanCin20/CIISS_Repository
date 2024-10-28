jQuery.validator.addMethod("Valid_E_Mail_Usuario", function (value, element) {
    return (
        this.optional(element) || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
    );
});

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

    $("#Form_Log_In").validate({
        rules: {
            E_Mail_Usuario: {
                required: true,
                Valid_E_Mail_Usuario: true,
            },
            Password_Usuario: {
                required: true,
                minlength: 5,
            },
        },
        messages: {
            E_Mail_Usuario: {
                required: "Campo Requerido: Correo Electr\xf3nico del Usuario",
                Valid_E_Mail_Usuario: "Ingrese un Correo Electr\xf3nico V\xe1lido",
            },
            Password_Usuario: {
                required: "Campo Requerido: Contrase\xf1a del Usuario",
                minlength:
                    "La Contrase\xf1a del Usuario debe Contener un M\xednimo de 5 Caracteres",
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