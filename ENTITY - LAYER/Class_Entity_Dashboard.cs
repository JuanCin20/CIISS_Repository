namespace ENTITY___LAYER
{
    public class Class_Entity_Dashboard
    {
        public int Tabla_Movimiento_Inventario { get; set; }
        public int Tabla_Categoria_Insumo { get; set; }
        public int Tabla_Proveedor_Insumo { get; set; }
        public int Tabla_Insumo { get; set; }

        /**/

        public int ID_Insumo { get; set; }
        public string Nombre_Categoria_Insumo { get; set; }
        public string Nombre_Proveedor_Insumo { get; set; }
        public string Nombre_Insumo { get; set; }
        public string Descripcion_Insumo { get; set; }
        public string Unidad_Medida_Insumo { get; set; }
        public decimal Precio_Insumo { get; set; }
        public int Stock_Insumo { get; set; }
        public bool Estado_Insumo { get; set; }
        public string Fecha_Vencimiento_Insumo { get; set; }
        public string Ruta_Imagen_Insumo { get; set; }
        public string Nombre_Imagen_Insumo { get; set; }
        public int Deadline { get; set; }

        /**/

        public int ID_Movimiento_Inventario { get; set; }
        public string Tipo_Movimiento_Inventario { get; set; }
        public string Nombre_Categoria_Insumo_Alter { get; set; }
        public string Nombre_Proveedor_Insumo_Alter { get; set; }
        public string Nombre_Insumo_Alter { get; set; }
        public string Descripcion_Insumo_Alter { get; set; }
        public decimal Precio_Insumo_Alter { get; set; }
        public int Cantidad_Movimiento_Inventario { get; set; }
        public decimal Total_Transaction { get; set; }
        public string Fecha_Movimiento_Inventario { get; set; }
        public string Usuario_Transaction { get; set; }
    }
}