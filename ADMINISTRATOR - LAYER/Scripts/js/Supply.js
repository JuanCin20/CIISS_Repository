var Table_Insumo;
var Selected_Row;

function Show_Supply_Image(input) {
    if (input.files) {
        var Reader = new FileReader();
        Reader.onload = function (event) {
            $("#Imagen_Insumo").attr("src", event.target.result);
        };
        Reader.readAsDataURL(input.files[0]);
    }
}

/**
 * *jQuery.ajax({
 * *    url: "https://localhost:44320/Management/Management_Controller_Insumo_Listar",
 * *    type: "GET",
 * *    dataType: "json",
 * *    contentType: "application/json; charset=UTF-8",
 * *    success: function (data) {
 * *        console.log(data); // ? Good 'console.log'
 * *    }
 * *});
 */
$(document).ready(function () {
    Table_Insumo = $("#Table_Insumo").DataTable({
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
            // ? url: "@Url.Action("Management_Controller_Insumo_Listar", "Management")",
            url: "https://localhost:44320/Management/Management_Controller_Insumo_Listar",
            type: "GET",
            dataType: "json",
        },
        columns: [
            { data: "ID_Insumo" },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        '<a tabindex="' +
                        row.ID_Insumo +
                        '" href="#" class="Pop_Trigger" data-bs-html="true" data-bs-custom-class="custom-popover" data-bs-container="body" data-bs-toggle="popover" data-bs-title="Informaci\xf3n" data-bs-content="<p><b>Categor\xeda:</b> ' +
                        row.Object_ID_Categoria_Insumo.Nombre_Categoria_Insumo +
                        "</p><p><b>Proveedor:</b> " +
                        row.Object_ID_Proveedor_Insumo.Nombre_Proveedor_Insumo +
                        "</p><p><b>Descripci\xf3n:</b> " +
                        row.Descripcion_Insumo +
                        '</p>">' +
                        row.Nombre_Insumo +
                        "</a>"
                    );
                },
            },
            { data: "Unidad_Medida_Insumo" },
            { data: "Precio_Insumo" },
            { data: "Stock_Insumo" },
            { data: "Fecha_Vencimiento_Insumo" },
            {
                data: "Estado_Insumo",
                render: function (Estado_Insumo) {
                    if (Estado_Insumo) {
                        return '<span class="badge text-bg-success">Disponible</span>';
                    } else {
                        return '<span class="badge text-bg-danger">No Disponible</span>';
                    }
                },
            },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        '<img style="width: 60px; height: 60px;" src="../../Content/Supply_Images/' +
                        row.Nombre_Imagen_Insumo +
                        '" alt="Image_Error" class="border rounded img-fluid">'
                    );
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

jQuery.ajax({
    // ? url: "@Url.Action("Management_Controller_Categoria_Insumo_Listar", "Management")",
    url: "https://localhost:44320/Management/Management_Controller_Categoria_Insumo_Listar",
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=UTF-8",
    success: function (data) {
        $("<option>")
            .attr({ value: "0", disabled: "true", selected: "true" })
            .text("Seleccionar")
            .appendTo("#Categoria_Insumo");
        $.each(data.data, function (index, item) {
            $("<option>")
                .attr({ value: item.ID_Categoria_Insumo })
                .text(item.Nombre_Categoria_Insumo)
                .appendTo("#Categoria_Insumo");
        });
    },
});

jQuery.ajax({
    // ? url: "@Url.Action("Management_Controller_Proveedor_Insumo_Listar", "Management")",
    url: "https://localhost:44320/Management/Management_Controller_Proveedor_Insumo_Listar",
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=UTF-8",
    success: function (data) {
        $("<option>")
            .attr({ value: "0", disabled: "true", selected: "true" })
            .text("Seleccionar")
            .appendTo("#Proveedor_Insumo");
        $.each(data.data, function (index, item) {
            $("<option>")
                .attr({ value: item.ID_Proveedor_Insumo })
                .text(item.Nombre_Proveedor_Insumo)
                .appendTo("#Proveedor_Insumo");
        });
    },
});

function Open_Form_Modal(data) {
    if (data == null) {
        $("#Categoria_Insumo").removeClass("is-valid");
        $("#Categoria_Insumo").removeClass("is-invalid");
        $("#Proveedor_Insumo").removeClass("is-valid");
        $("#Proveedor_Insumo").removeClass("is-invalid");
        $("#Nombre_Insumo").removeClass("is-valid");
        $("#Nombre_Insumo").removeClass("is-invalid");
        $("#Descripcion_Insumo").removeClass("is-valid");
        $("#Descripcion_Insumo").removeClass("is-invalid");
        $("#Unidad_Medida_Insumo").removeClass("is-valid");
        $("#Unidad_Medida_Insumo").removeClass("is-invalid");
        $("#Precio_Insumo").removeClass("is-valid");
        $("#Precio_Insumo").removeClass("is-invalid");
        $("#Stock_Insumo").removeClass("is-valid");
        $("#Stock_Insumo").removeClass("is-invalid");
        $("#Estado_Insumo").removeClass("is-valid");
        $("#Estado_Insumo").removeClass("is-invalid");
        $("#Fecha_Vencimiento_Insumo").removeClass("is-valid");
        $("#Fecha_Vencimiento_Insumo").removeClass("is-invalid");
        $("#Imagen_Insumo_Input").removeClass("is-valid");
        $("#Imagen_Insumo_Input").removeClass("is-invalid");
        $("#ID_Insumo").val(0);
        $("#Categoria_Insumo").val(0);
        $("#Proveedor_Insumo").val(0);
        $("#Nombre_Insumo").val("");
        $("#Descripcion_Insumo").val("");
        $("#Unidad_Medida_Insumo").val("");
        $("#Precio_Insumo").val("");
        $("#Stock_Insumo").val("");
        $("#Estado_Insumo").val(0);
        $("#Fecha_Vencimiento_Insumo")
            .datepicker({ dateFormat: "dd/mm/yy" })
            .datepicker("setDate", "");
        $("#Imagen_Insumo").removeAttr("src");
    } else {
        if (data != null) {
            $("#Categoria_Insumo").removeClass("is-valid");
            $("#Categoria_Insumo").removeClass("is-invalid");
            $("#Proveedor_Insumo").removeClass("is-valid");
            $("#Proveedor_Insumo").removeClass("is-invalid");
            $("#Nombre_Insumo").removeClass("is-valid");
            $("#Nombre_Insumo").removeClass("is-invalid");
            $("#Descripcion_Insumo").removeClass("is-valid");
            $("#Descripcion_Insumo").removeClass("is-invalid");
            $("#Unidad_Medida_Insumo").removeClass("is-valid");
            $("#Unidad_Medida_Insumo").removeClass("is-invalid");
            $("#Precio_Insumo").removeClass("is-valid");
            $("#Precio_Insumo").removeClass("is-invalid");
            $("#Stock_Insumo").removeClass("is-valid");
            $("#Stock_Insumo").removeClass("is-invalid");
            $("#Estado_Insumo").removeClass("is-valid");
            $("#Estado_Insumo").removeClass("is-invalid");
            $("#Fecha_Vencimiento_Insumo").removeClass("is-valid");
            $("#Fecha_Vencimiento_Insumo").removeClass("is-invalid");
            $("#Imagen_Insumo_Input").removeClass("is-valid");
            $("#Imagen_Insumo_Input").removeClass("is-invalid");
            $("#ID_Insumo").val(data.ID_Insumo);
            $("#Categoria_Insumo").val(
                data.Object_ID_Categoria_Insumo.ID_Categoria_Insumo
            );
            $("#Proveedor_Insumo").val(
                data.Object_ID_Proveedor_Insumo.ID_Proveedor_Insumo
            );
            $("#Nombre_Insumo").val(data.Nombre_Insumo);
            $("#Descripcion_Insumo").val(data.Descripcion_Insumo);
            $("#Unidad_Medida_Insumo").val(data.Unidad_Medida_Insumo);
            $("#Precio_Insumo").val(data.Precio_Insumo);
            $("#Stock_Insumo").val(data.Stock_Insumo);
            $("#Estado_Insumo").val(
                data.Estado_Insumo == true ? "Available" : "Not_Available"
            );
            $("#Fecha_Vencimiento_Insumo")
                .datepicker({ dateFormat: "dd/mm/yy" })
                .datepicker("setDate", data.Fecha_Vencimiento_Insumo);
            jQuery.ajax({
                // ? url: "@Url.Action("Management_Controller_Insumo_Imagen", "Management")",
                url: "https://localhost:44320/Management/Management_Controller_Insumo_Imagen",
                type: "GET",
                data: { ID_Insumo: data.ID_Insumo },
                success: function (data) {
                    $("#Imagen_Insumo").LoadingOverlay("hide");
                    if (data.conversion) {
                        $("#Imagen_Insumo").attr({
                            src:
                                "data:image/" +
                                data.extension_Imagen_Insumo +
                                ";base64," +
                                data.base_64_Imagen_Insumo,
                        });
                    }
                },
                error: function (error) {
                    alert(error);
                },
                beforeSend: function () {
                    $("#Imagen_Insumo").LoadingOverlay("show", {
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
    $("#Form_Modal").modal("show");
}

function Selected_Row_Function(data) {
    // ? Obtener la Fila Actual
    var Selected_Row = $(data).parents("tr");
    // ? Compruebe si la Fila Actual es una Fila Secundaria
    if (Selected_Row.hasClass("child")) {
        // ? Si es as�, Se�ale la Fila Anterior (It's "parent")
        Selected_Row = Selected_Row.prev();
    }
    return Selected_Row;
}

$("#Table_Insumo").on("click", ".Edit_Button", function () {
    Selected_Row = Selected_Row_Function(this);
    var data = Table_Insumo.row(Selected_Row).data();
    // console.log(data); // ? Good 'console.log'
    Open_Form_Modal(data);
});

$("#Table_Insumo").on("click", ".Delete_Button", function () {
    Selected_Row = Selected_Row_Function(this);
    var data = Table_Insumo.row(Selected_Row).data();
    Swal.fire({
        title: "Confirmaci\xf3n",
        text: "\xbfDesea Eliminar el Insumo Seleccionado?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#FF0000",
        confirmButtonText: "Eliminar",
        confirmButtonColor: "#3085D6",
    }).then((result) => {
        if (result.isConfirmed) {
            jQuery.ajax({
                // ? url: "@Url.Action("Management_Controller_Insumo_Eliminar", "Management")",
                url: "https://localhost:44320/Management/Management_Controller_Insumo_Eliminar",
                type: "POST",
                data: { ID_Insumo: data.ID_Insumo },
                success: function (data) {
                    // debugger; // TODO: Punto de Depuraci�n

                    if (data.result) {
                        Swal.fire({
                            title: "Correcto",
                            text: "El Insumo ha sido Eliminado",
                            icon: "success",
                        });
                        Table_Insumo.row(Selected_Row).remove().draw();
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

jQuery.validator.addMethod("Valid_Nombre_Insumo", function (value, element) {
    return (
        this.optional(element) ||
        /([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/.test(value)
    );
});

jQuery.validator.addMethod(
    "Valid_Unidad_Medida_Insumo",
    function (value, element) {
        return (
            this.optional(element) ||
            /([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/.test(value)
        );
    }
);

jQuery.validator.addMethod(
    "Valid_Descripcion_Insumo",
    function (value, element) {
        return (
            this.optional(element) ||
            /([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/.test(value)
        );
    }
);

$(document).ready(function () {
    $("#Form_Supply").validate({
        rules: {
            Estado_Insumo: {
                required: true,
            },
            Nombre_Insumo: {
                required: true,
                Valid_Nombre_Insumo: true,
            },
            Categoria_Insumo: {
                required: true,
            },
            Proveedor_Insumo: {
                required: true,
            },
            Unidad_Medida_Insumo: {
                required: true,
                Valid_Unidad_Medida_Insumo: true,
            },
            Precio_Insumo: {
                required: true,
                number: true,
            },
            Stock_Insumo: {
                required: true,
                number: true,
            },
            Fecha_Vencimiento_Insumo: {
                required: true,
            },
            Descripcion_Insumo: {
                required: true,
                Valid_Descripcion_Insumo: true,
            },
        },
        messages: {
            Estado_Insumo: {
                required: "Campo Requerido: Estado del Insumo",
            },
            Nombre_Insumo: {
                required: "Campo Requerido: Nombre de Insumo",
                Valid_Nombre_Insumo: "Campo Requerido: Nombre de Insumo",
            },
            Categoria_Insumo: {
                required: "Campo Requerido: Categor\xeda del Insumo",
            },
            Proveedor_Insumo: {
                required: "Campo Requerido: Proveedor del Insummo",
            },
            Unidad_Medida_Insumo: {
                required: "Campo Requerido: Unidad de Medida del Insumo",
                Valid_Unidad_Medida_Insumo:
                    "Campo Requerido: Unidad de Medida del Insumo",
            },
            Precio_Insumo: {
                required: "Campo Requerido: Precio del Insumo",
                number: "Ingrese un Precio V\xe1lido",
            },
            Stock_Insumo: {
                required: "Campo Requerido: Stock del Insumo",
                number: "Ingrese un Stock V\xe1lido",
            },
            Fecha_Vencimiento_Insumo: {
                required: "Campo Requerido: Fecha de Vencimiento del Insumo",
            },
            Descripcion_Insumo: {
                required: "Campo Requerido: Descripci\xf3n del Insumo",
                Valid_Descripcion_Insumo: "Campo Requerido: Descripci\xf3n del Insumo",
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
    if (!$("#Form_Supply").valid()) {
        return;
    } else {
        var Date_Object = $("#Fecha_Vencimiento_Insumo").datepicker("getDate");
        var Date_String = $.datepicker.formatDate("yy-mm-dd", Date_Object);

        var Imagen_Insumo_Input = $("#Imagen_Insumo_Input")[0].files[0];

        var Insumo = {
            ID_Insumo: $("#ID_Insumo").val(),
            Object_ID_Categoria_Insumo: {
                ID_Categoria_Insumo: $("#Categoria_Insumo option:selected").val(),
                Nombre_Categoria_Insumo: $("#Categoria_Insumo option:selected").text(),
            },
            Object_ID_Proveedor_Insumo: {
                ID_Proveedor_Insumo: $("#Proveedor_Insumo option:selected").val(),
                Nombre_Proveedor_Insumo: $("#Proveedor_Insumo option:selected").text(),
            },
            Nombre_Insumo: $.trim($("#Nombre_Insumo").val()),
            Descripcion_Insumo: $.trim($("#Descripcion_Insumo").val()),
            Unidad_Medida_Insumo: $.trim($("#Unidad_Medida_Insumo").val()),
            Precio_Insumo: $("#Precio_Insumo").val(),
            Precio_Insumo_String: $("#Precio_Insumo").val(),
            Stock_Insumo: $("#Stock_Insumo").val(),
            Estado_Insumo: $("#Estado_Insumo").val() == "Available" ? true : false,
            Fecha_Vencimiento_Insumo: Date_String,
        };

        if ($("#ID_Insumo").val() == 0) {
            var Request = new FormData();
            Request.append("Obj_Class_Entity_Insumo", JSON.stringify(Insumo));
            Request.append("Obj_IFormFile", Imagen_Insumo_Input);

            jQuery.ajax({
                // ? url: "@Url.Action("Management_Controller_Insumo_Registrar", "Management")",
                url: "https://localhost:44320/Management/Management_Controller_Insumo_Registrar",
                type: "POST",
                data: Request,
                processData: false,
                contentType: false,
                success: function (data) {
                    // debugger; // TODO: Punto de Depuraci�n

                    $(".modal-body").LoadingOverlay("hide");

                    if (data.iD_Auto_Generated != 0) {
                        Insumo.ID_Insumo = data.iD_Auto_Generated;
                        Table_Insumo.row.add(Insumo).draw(false);
                        $("#Form_Modal").modal("hide");
                        Table_Insumo.ajax.reload();
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
                        toastr["success"]("El Insumo ha sido Registrado", "\xc9xito:");
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
            if ($("#ID_Insumo").val() != 0) {
                var Request = new FormData();
                Request.append("Obj_Class_Entity_Insumo", JSON.stringify(Insumo));
                Request.append("Obj_IFormFile", Imagen_Insumo_Input);

                jQuery.ajax({
                    // ? url: "@Url.Action("Management_Controller_Insumo_Editar", "Management")",
                    url: "https://localhost:44320/Management/Management_Controller_Insumo_Editar",
                    type: "POST",
                    data: Request,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                       // debugger; // TODO: Punto de Depuraci�n

                        $(".modal-body").LoadingOverlay("hide");

                        if (data.successful_operation) {
                            Table_Insumo.row(Selected_Row).data(Insumo).draw(false);
                            Selected_Row = null;
                            $("#Form_Modal").modal("hide");
                            Table_Insumo.ajax.reload();
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
                            toastr["info"]("El Insumo ha sido Modificado", "Informaci\xf3n:");
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