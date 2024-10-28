var Table_Deadline_Report;
var Table_Transaction_Report;

$(document).ready(function () {
    var Close_Bootstrap_Button = $.fn.button.noConflict() // Return "$.fn.button" to Previously Assigned Value
    $.fn.bootstrapBtn = Close_Bootstrap_Button            // Give "$().bootstrapBtn" the Bootstrap Functionality

    $("#Initial_Fecha_Movimiento_Inventario")
        .datepicker({ dateFormat: "dd/mm/yy" })
        .datepicker("setDate", new Date());
    $("#Final_Fecha_Movimiento_Inventario")
        .datepicker({ dateFormat: "dd/mm/yy" })
        .datepicker("setDate", new Date());

    jQuery.ajax({
        // ? url: "@Url.Action("Home_Controller_Dashboard_Tip", "Home")",
        url: "https://localhost:44320/Home/Home_Controller_Dashboard_Tip",
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        success: function (data) {
            var Object = data.result;
            $("#Tabla_Movimiento_Inventario").text(
                Object.Tabla_Movimiento_Inventario
            );
            $("#Tabla_Categoria_Insumo").text(Object.Tabla_Categoria_Insumo);
            $("#Tabla_Proveedor_Insumo").text(Object.Tabla_Proveedor_Insumo);
            $("#Tabla_Insumo").text(Object.Tabla_Insumo);
        },
    });

    jQuery.ajax({
        // ? url: "@Url.Action("Home_Controller_Chart_01", "Home")",
        url: "https://localhost:44320/Home/Home_Controller_Chart_01",
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        success: function (data) {

            var Array_01 = [];
            var Array_02 = [];

            for (var i = 0; i < data.data.length; i++) {
                Array_01.push(data.data[i].Month_Name)
                Array_02.push(data.data[i].Income_Number)
            }

            var Chart_01 = document.getElementById("Chart_01");

            var Chart_01_Alter = new Chart(Chart_01, {
                type: "bar",
                data: {
                    labels: Array_01,
                    datasets: [
                        {
                            label: "N\xb0 Transacciones de Salida",
                            backgroundColor: "rgb(128, 128, 128)",
                            data: Array_02,
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true
                        },
                    }
                }
            });
        },
        error: function (error) {
            alert(error);
        },
    });

    var Chart_02 = document.getElementById("Chart_02");

    var Chart_02_Alter = new Chart(Chart_02, {
        type: "pie",
        data: {
            labels: ["Blue", "Red", "Yellow", "Green"],
            datasets: [
                {
                    data: [12.21, 15.58, 11.25, 8.32],
                    backgroundColor: ["#007BFF", "#DC3545", "#FFC107", "#28A745"],
                }
            ]
        },
    });

    // ? var Url_01 = "@Url.Action("Home_Controller_Dashboard_Deadline", "Home")";
    var Url_01 = "https://localhost:44320/Home/Home_Controller_Dashboard_Deadline";

    Table_Deadline_Report = $("#Table_Deadline_Report").DataTable({
        responsive: {
            details: {
                display: DataTable.Responsive.display.modal({
                    header: function (row) {
                        var data = row.data();
                        return "Insumo: " + data.Nombre_Insumo;
                    },
                }),
                renderer: DataTable.Responsive.renderer.tableAll(),
            },
        },
        ordering: true,
        language: {
            url: "//cdn.datatables.net/plug-ins/2.1.8/i18n/es-MX.json",
        },
        ajax: {
            url: Url_01,
            type: "GET",
            dataType: "json",
        },
        columns: [
            { data: "ID_Insumo" },
            { data: "Nombre_Categoria_Insumo" },
            { data: "Nombre_Proveedor_Insumo" },
            { data: "Nombre_Insumo" },
            { data: "Descripcion_Insumo" },
            { data: "Unidad_Medida_Insumo" },
            { data: "Precio_Insumo" },
            { data: "Stock_Insumo" },
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
            { data: "Fecha_Vencimiento_Insumo" },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        '<img style="width: 90px; height: 90px;" src="../../Content/Supply_Images/' +
                        row.Nombre_Imagen_Insumo +
                        '" alt="Image_Error" class="border rounded img-fluid">'
                    );
                },
            },
            { data: "Deadline" },
            {
                defaultContent: '<button type="button" class="btn btn-danger btn-sm ms-2 Delete_Button"><i class="fa-solid fa-trash"></i></button>',
                orderable: false,
                searchable: false,
                width: "90px",
            },
        ],
    });

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

    $(document).on("click", ".Delete_Button", function () {
        Selected_Row = Selected_Row_Function(this);
        var data = Table_Deadline_Report.row(Selected_Row).data();
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
                    // ? url: "@Url.Action("Home_Controller_Insumo_Eliminar_Alter", "Home")",
                    url: "https://localhost:44320/Home/Home_Controller_Insumo_Eliminar_Alter",
                    type: "POST",
                    data: { ID_Insumo: data.ID_Insumo },
                    success: function (data) {
                        // debugger; // TODO: Punto de Depuración

                        if (data.result) {
                            Swal.fire({
                                title: "Correcto",
                                text: "El Insumo ha sido Eliminado",
                                icon: "success",
                            });
                            Table_Deadline_Report.row(Selected_Row).remove().draw();
                            $(".ui-dialog-content").dialog("close");
                        } else {
                            Swal.fire({
                                title: "Error",
                                text: "Error",
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

    // ? var Url_02 = "@Url.Action("Home_Controller_Dashboard_Transaction", "Home")",
    var Url_02 =
        "https://localhost:44320/Home/Home_Controller_Dashboard_Transaction" +
        "?Initial_Fecha_Movimiento_Inventario=" +
        $("#Initial_Fecha_Movimiento_Inventario").val() +
        "&Final_Fecha_Movimiento_Inventario=" +
        $("#Final_Fecha_Movimiento_Inventario").val() +
        "&ID_Movimiento_Inventario=" +
        $("#ID_Movimiento_Inventario").val();

    Table_Transaction_Report = $("#Table_Transaction_Report").DataTable({
        searching: false,
        responsive: {
            details: {
                display: DataTable.Responsive.display.modal({
                    header: function (row) {
                        var data = row.data();
                        return "Insumo: " + data.Nombre_Insumo_Alter;
                    },
                }),
                renderer: DataTable.Responsive.renderer.tableAll(),
            },
        },
        ordering: true,
        language: {
            url: "//cdn.datatables.net/plug-ins/2.1.8/i18n/es-MX.json",
        },
        ajax: {
            url: Url_02,
            type: "GET",
            dataType: "json",
        },
        columns: [
            { data: "ID_Movimiento_Inventario" },
            { data: "Tipo_Movimiento_Inventario" },
            { data: "Nombre_Categoria_Insumo_Alter" },
            { data: "Nombre_Proveedor_Insumo_Alter" },
            { data: "Nombre_Insumo_Alter" },
            { data: "Descripcion_Insumo_Alter" },
            { data: "Precio_Insumo_Alter" },
            { data: "Cantidad_Movimiento_Inventario" },
            { data: "Total_Transaction" },
            { data: "Fecha_Movimiento_Inventario" },
            { data: "Usuario_Transaction" },
        ],
    });

    $("#Search_Button").on("click", function () {
        // ? var New_Url_02 = "@Url.Action("Home_Controller_Dashboard_Transaction", "Home")",
        var New_Url_02 =
            "https://localhost:44320/Home/Home_Controller_Dashboard_Transaction" +
            "?Initial_Fecha_Movimiento_Inventario=" +
            $("#Initial_Fecha_Movimiento_Inventario").val() +
            "&Final_Fecha_Movimiento_Inventario=" +
            $("#Final_Fecha_Movimiento_Inventario").val() +
            "&ID_Movimiento_Inventario=" +
            $("#ID_Movimiento_Inventario").val();

        Table_Transaction_Report.ajax.url(New_Url_02).load();
    });
});