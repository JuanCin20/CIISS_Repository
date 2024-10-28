var Table_Proveedor_Insumo;
var Selected_Row;

/**
 * *jQuery.ajax({
 * *    url: "https://localhost:44320/Management/Management_Controller_Proveedor_Insumo_Listar",
 * *    type: "GET",
 * *    dataType: "json",
 * *    contentType: "application/json; charset=UTF-8",
 * *    success: function (data) {
 * *        console.log(data); // ? Good 'console.log'
 * *    }
 * *});
 */
$(document).ready(function () {
    Table_Proveedor_Insumo = $("#Table_Proveedor_Insumo").DataTable({
        fnDrawCallback: function () {
            // !
            $(document).ready(function () {
                $(".Pop_Trigger").popover({
                    trigger: "hover focus",
                    animation: true,
                });
            });
            // !
        },
        responsive: true,
        ordering: false,
        language: {
            url: "//cdn.datatables.net/plug-ins/2.1.8/i18n/es-MX.json",
        },
        ajax: {
            // ? url: "@Url.Action("Management_Controller_Proveedor_Insumo_Listar", "Management")",
            url: "https://localhost:44320/Management/Management_Controller_Proveedor_Insumo_Listar",
            type: "GET",
            dataType: "json",
        },
        columns: [
            { data: "ID_Proveedor_Insumo" },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        '<a tabindex="' +
                        row.ID_Proveedor_Insumo +
                        '" href="#" class="Pop_Trigger" data-bs-html="true" data-bs-custom-class="custom-popover" data-bs-container="body" data-bs-toggle="popover" data-bs-title="Informaci\xf3n" data-bs-content="<p><b>Tel\xe9fono:</b> ' +
                        row.Telefono_Proveedor_Insumo +
                        "</p><p><b>E-Mail:</b> " +
                        row.E_Mail_Proveedor_Insumo +
                        "</p><p><b>Direcci\xf3n:</b> " +
                        row.Direccion_Proveedor_Insumo +
                        '</p>">' +
                        row.Nombre_Proveedor_Insumo +
                        "</a>"
                    );
                },
            },
            {
                data: "Estado_Proveedor_Insumo",
                render: function (Estado_Proveedor_Insumo) {
                    if (Estado_Proveedor_Insumo) {
                        return '<span class="badge text-bg-success">Disponible</span>';
                    } else {
                        return '<span class="badge text-bg-danger">No Disponible</span>';
                    }
                },
            },
            {
                defaultContent:
                    '<button type="button" class="btn btn-primary btn-sm Edit_Button"><i class="fa-solid fa-pencil"></i></button>' +
                    '<button type="button" class="btn btn-danger btn-sm ms-2 Delete_Button"><i class="fa-solid fa-trash"></i></button>',
                orderable: false,
                searchable: false,
                width: "90px",
            },
        ],
    });
});

function Open_Form_Modal(data) {
    if (data == null) {
        $("#Nombre_Proveedor_Insumo").removeClass("is-valid");
        $("#Nombre_Proveedor_Insumo").removeClass("is-invalid");
        $("#Telefono_Proveedor_Insumo").removeClass("is-valid");
        $("#Telefono_Proveedor_Insumo").removeClass("is-invalid");
        $("#E_Mail_Proveedor_Insumo").removeClass("is-valid");
        $("#E_Mail_Proveedor_Insumo").removeClass("is-invalid");
        $("#Direccion_Proveedor_Insumo").removeClass("is-valid");
        $("#Direccion_Proveedor_Insumo").removeClass("is-invalid");
        $("#Estado_Proveedor_Insumo").removeClass("is-valid");
        $("#Estado_Proveedor_Insumo").removeClass("is-invalid");
        $("#ID_Proveedor_Insumo").val(0);
        $("#Nombre_Proveedor_Insumo").val("");
        $("#Telefono_Proveedor_Insumo").val("");
        $("#E_Mail_Proveedor_Insumo").val("");
        $("#Direccion_Proveedor_Insumo").val("");
        $("#Estado_Proveedor_Insumo").val(0);
    } else {
        if (data != null) {
            $("#Nombre_Proveedor_Insumo").removeClass("is-valid");
            $("#Nombre_Proveedor_Insumo").removeClass("is-invalid");
            $("#Telefono_Proveedor_Insumo").removeClass("is-valid");
            $("#Telefono_Proveedor_Insumo").removeClass("is-invalid");
            $("#E_Mail_Proveedor_Insumo").removeClass("is-valid");
            $("#E_Mail_Proveedor_Insumo").removeClass("is-invalid");
            $("#Direccion_Proveedor_Insumo").removeClass("is-valid");
            $("#Direccion_Proveedor_Insumo").removeClass("is-invalid");
            $("#Estado_Proveedor_Insumo").removeClass("is-valid");
            $("#Estado_Proveedor_Insumo").removeClass("is-invalid");
            $("#ID_Proveedor_Insumo").val(data.ID_Proveedor_Insumo);
            $("#Nombre_Proveedor_Insumo").val(data.Nombre_Proveedor_Insumo);
            $("#Telefono_Proveedor_Insumo").val(data.Telefono_Proveedor_Insumo);
            $("#E_Mail_Proveedor_Insumo").val(data.E_Mail_Proveedor_Insumo);
            $("#Direccion_Proveedor_Insumo").val(data.Direccion_Proveedor_Insumo);
            $("#Estado_Proveedor_Insumo").val(
                data.Estado_Proveedor_Insumo == true ? "Available" : "Not_Available"
            );
        }
    }
    $("#Form_Modal").modal("show");
}

function Selected_Row_Function(data) {
    // ? Obtener la Fila Actual
    var Selected_Row = $(data).parents("tr");
    // ? Compruebe si la Fila Actual es una Fila Secundaria
    if (Selected_Row.hasClass("child")) {
        // ? Si es así, Señale la Fila Anterior (It's "parent")
        Selected_Row = Selected_Row.prev();
    }
    return Selected_Row;
}

$("#Table_Proveedor_Insumo").on("click", ".Edit_Button", function () {
    Selected_Row = Selected_Row_Function(this);
    var data = Table_Proveedor_Insumo.row(Selected_Row).data();
    // console.log(data); // ? Good 'console.log'
    Open_Form_Modal(data);
});

$("#Table_Proveedor_Insumo").on("click", ".Delete_Button", function () {
    Selected_Row = Selected_Row_Function(this);
    var data = Table_Proveedor_Insumo.row(Selected_Row).data();
    Swal.fire({
        title: "Confirmaci\xf3n",
        text: "\xbfDesea Eliminar al Proveedor Seleccionado?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#FF0000",
        confirmButtonText: "Eliminar",
        confirmButtonColor: "#3085D6",
    }).then((result) => {
        if (result.isConfirmed) {
            jQuery.ajax({
                // ? url: "@Url.Action("Management_Controller_Proveedor_Insumo_Eliminar", "Management")",
                url: "https://localhost:44320/Management/Management_Controller_Proveedor_Insumo_Eliminar",
                type: "POST",
                data: { ID_Proveedor_Insumo: data.ID_Proveedor_Insumo },
                success: function (data) {
                    // debugger; // TODO: Punto de Depuración

                    if (data.result) {
                        Swal.fire({
                            title: "Correcto",
                            text: "El Proveedor ha sido Eliminado",
                            icon: "success",
                        });
                        Table_Proveedor_Insumo.row(Selected_Row).remove().draw();
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: data.message,
                            icon: "error",
                        });
                    }
                },
                error: function (error) {
                    alert(error);
                },
            });
        }
    });
    // console.log(data); // ? Good 'console.log'
});

jQuery.validator.addMethod(
    "Valid_Nombre_Proveedor_Insumo",
    function (value, element) {
        return (
            this.optional(element) ||
            /([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/.test(value)
        );
    }
);

jQuery.validator.addMethod(
    "Valid_Telefono_Proveedor_Insumo",
    function (value, element) {
        return (
            this.optional(element) ||
            /^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3}$/.test(value)
        );
    }
);

jQuery.validator.addMethod(
    "Valid_E_Mail_Proveedor_Insumo",
    function (value, element) {
        return (
            this.optional(element) || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        );
    }
);

jQuery.validator.addMethod(
    "Valid_Direccion_Proveedor_Insumo",
    function (value, element) {
        return (
            this.optional(element) ||
            /([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/.test(value)
        );
    }
);

$(document).ready(function () {
    $("#Form_Supplier").validate({
        rules: {
            Estado_Proveedor_Insumo: {
                required: true,
            },
            Nombre_Proveedor_Insumo: {
                required: true,
                Valid_Nombre_Proveedor_Insumo: true,
            },
            Telefono_Proveedor_Insumo: {
                required: true,
                number: true,
                Valid_Telefono_Proveedor_Insumo: true,
            },
            E_Mail_Proveedor_Insumo: {
                required: true,
                Valid_E_Mail_Proveedor_Insumo: true,
            },
            Direccion_Proveedor_Insumo: {
                required: true,
                Valid_Direccion_Proveedor_Insumo: true,
            },
        },
        messages: {
            Estado_Proveedor_Insumo: {
                required: "Campo Requerido: Estado del Proveedor del Insumo",
            },
            Nombre_Proveedor_Insumo: {
                required: "Campo Requerido: Nombre del Proveedor del Insumo",
                Valid_Nombre_Proveedor_Insumo:
                    "Campo Requerido: Nombre del Proveedor del Insumo",
            },
            Telefono_Proveedor_Insumo: {
                required: "Campo Requerido: Tel\xe9fono del Proveedor del Insumo",
                number: "Ingrese un N\xfamero Tel\xe9fonico V\xe1lido",
                Valid_Telefono_Proveedor_Insumo: "Ingrese un N\xfamero Tel\xe9fonico V\xe1lido",
            },
            E_Mail_Proveedor_Insumo: {
                required:
                    "Campo Requerido: Correo Electr\xf3nico del Proveedor del Insumo",
                Valid_E_Mail_Proveedor_Insumo: "Ingrese un Correo Electr\xf3nico V\xe1lido",
            },
            Direccion_Proveedor_Insumo: {
                required: "Campo Requerido: Direcci\xf3n del Proveedor del Insumo",
                Valid_Direccion_Proveedor_Insumo:
                    "Campo Requerido: Direcci\xf3n del Proveedor del Insumo",
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

$.validator.setDefaults({
    submitHandler: function () {
        console.log("Ok!");
    },
});

function Procesar() {
    if (!$("#Form_Supplier").valid()) {
        return;
    } else {
        var Proveedor = {
            ID_Proveedor_Insumo: $("#ID_Proveedor_Insumo").val(),
            Nombre_Proveedor_Insumo: $.trim($("#Nombre_Proveedor_Insumo").val()),
            Telefono_Proveedor_Insumo: $("#Telefono_Proveedor_Insumo").val(),
            E_Mail_Proveedor_Insumo: $.trim($("#E_Mail_Proveedor_Insumo").val()),
            Direccion_Proveedor_Insumo: $.trim(
                $("#Direccion_Proveedor_Insumo").val()
            ),
            Estado_Proveedor_Insumo:
                $("#Estado_Proveedor_Insumo").val() == "Available" ? true : false,
        };

        if ($("#ID_Proveedor_Insumo").val() == 0) {
            jQuery.ajax({
                // ? url: "@Url.Action("Management_Controller_Proveedor_Insumo_Registrar", "Management")",
                url: "https://localhost:44320/Management/Management_Controller_Proveedor_Insumo_Registrar",
                type: "POST",
                data: { Obj_Class_Entity_Proveedor_Insumo: Proveedor },
                success: function (data) {
                    // debugger; // TODO: Punto de Depuración

                    $(".modal-body").LoadingOverlay("hide");

                    if (data.result != 0) {
                        Proveedor.ID_Proveedor_Insumo = data.result;
                        Table_Proveedor_Insumo.row.add(Proveedor).draw(false);
                        $("#Form_Modal").modal("hide");
                        toastr.options = {
                            closeButton: true,
                            debug: false,
                            newestOnTop: true,
                            progressBar: true,
                            positionClass: "toast-bottom-center",
                            preventDuplicates: false,
                            onclick: null,
                            showDuration: "300",
                            hideDuration: "1000",
                            timeOut: "5000",
                            extendedTimeOut: "1000",
                            showEasing: "swing",
                            hideEasing: "linear",
                            showMethod: "fadeIn",
                            hideMethod: "fadeOut",
                        };
                        toastr["success"]("El Proveedor ha sido Registrado", "\xc9xito:");
                    } else {
                        toastr.options = {
                            closeButton: true,
                            debug: false,
                            newestOnTop: true,
                            progressBar: true,
                            positionClass: "toast-bottom-center",
                            preventDuplicates: false,
                            onclick: null,
                            showDuration: "300",
                            hideDuration: "1000",
                            timeOut: "5000",
                            extendedTimeOut: "1000",
                            showEasing: "swing",
                            hideEasing: "linear",
                            showMethod: "fadeIn",
                            hideMethod: "fadeOut",
                        };
                        toastr["error"](data.message, "Error:");
                    }
                },
                error: function (error) {
                    $(".modal-body").LoadingOverlay("hide");
                    alert(error);
                },
                beforeSend: function () {
                    $(".modal-body").LoadingOverlay("show", {
                        background: "rgba(0, 0, 0, 0.5)",
                        image: "../../Content/img/clock-regular.svg",
                        imageAnimation: "1.5s fadein",
                        imageAutoResize: true,
                        imageResizeFactor: 1,
                        imageColor: "rgb(255, 205, 0)",
                    });
                },
            });
        } else {
            if ($("#ID_Proveedor_Insumo").val() != 0) {
                jQuery.ajax({
                    // ? url: "@Url.Action("Management_Controller_Proveedor_Insumo_Editar", "Management")",
                    url: "https://localhost:44320/Management/Management_Controller_Proveedor_Insumo_Editar",
                    type: "POST",
                    data: { Obj_Class_Entity_Proveedor_Insumo: Proveedor },
                    success: function (data) {
                        debugger; // TODO: Punto de Depuración

                        $(".modal-body").LoadingOverlay("hide");

                        if (data.result) {
                            Table_Proveedor_Insumo.row(Selected_Row)
                                .data(Proveedor)
                                .draw(false);
                            Selected_Row = null;
                            $("#Form_Modal").modal("hide");
                            toastr.options = {
                                closeButton: true,
                                debug: false,
                                newestOnTop: true,
                                progressBar: true,
                                positionClass: "toast-bottom-center",
                                preventDuplicates: false,
                                onclick: null,
                                showDuration: "300",
                                hideDuration: "1000",
                                timeOut: "5000",
                                extendedTimeOut: "1000",
                                showEasing: "swing",
                                hideEasing: "linear",
                                showMethod: "fadeIn",
                                hideMethod: "fadeOut",
                            };
                            toastr["info"]("El Proveedor ha sido Modificado", "Informaci\xf3n:");
                        } else {
                            toastr.options = {
                                closeButton: true,
                                debug: false,
                                newestOnTop: true,
                                progressBar: true,
                                positionClass: "toast-bottom-center",
                                preventDuplicates: false,
                                onclick: null,
                                showDuration: "300",
                                hideDuration: "1000",
                                timeOut: "5000",
                                extendedTimeOut: "1000",
                                showEasing: "swing",
                                hideEasing: "linear",
                                showMethod: "fadeIn",
                                hideMethod: "fadeOut",
                            };
                            toastr["error"](data.message, "Error:");
                        }
                    },
                    error: function (error) {
                        $(".modal-body").LoadingOverlay("hide");
                        alert(error);
                    },
                    beforeSend: function () {
                        $(".modal-body").LoadingOverlay("show", {
                            background: "rgba(0, 0, 0, 0.5)",
                            image: "../../Content/img/clock-regular.svg",
                            imageAnimation: "1.5s fadein",
                            imageAutoResize: true,
                            imageResizeFactor: 1,
                            imageColor: "rgb(255, 205, 0)",
                        });
                    },
                });
            }
        }
    }
}