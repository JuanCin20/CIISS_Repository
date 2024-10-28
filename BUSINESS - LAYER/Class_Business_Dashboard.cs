using System.Collections.Generic;
using DATA___LAYER;
using ENTITY___LAYER;

namespace BUSINESS___LAYER
{
    public class Class_Business_Dashboard
    {
        private Class_Data_Dashboard Obj_Class_Data_Dashboard = new Class_Data_Dashboard();
        public Class_Entity_Dashboard Class_Business_Dashboard_Tip()
        {
            return Obj_Class_Data_Dashboard.Class_Data_Dashboard_Tip();
        }

        public bool Class_Business_Insumo_Eliminar_Alter(int ID_Insumo)
        {
            return Obj_Class_Data_Dashboard.Class_Data_Insumo_Eliminar_Alter(ID_Insumo);
        }

        public List<Class_Entity_Dashboard> Class_Business_Dashboard_Deadline()
        {
            return Obj_Class_Data_Dashboard.Class_Data_Dashboard_Deadline();
        }

        public List<Class_Entity_Dashboard> Class_Business_Dashboard_Transaction(string Initial_Fecha_Movimiento_Inventario, string Final_Fecha_Movimiento_Inventario, int ID_Movimiento_Inventario)
        {
            return Obj_Class_Data_Dashboard.Class_Data_Dashboard_Transaction(Initial_Fecha_Movimiento_Inventario, Final_Fecha_Movimiento_Inventario, ID_Movimiento_Inventario);
        }
    }
}