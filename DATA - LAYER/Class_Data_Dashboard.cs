using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System;
using ENTITY___LAYER;
using System.Globalization;

namespace DATA___LAYER
{
    public class Class_Data_Dashboard
    {
        public Class_Entity_Dashboard Class_Data_Dashboard_Tip()
        {
            Class_Entity_Dashboard Obj_Class_Entity_Dashboard = new Class_Entity_Dashboard();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_TIP_REPORT", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_Class_Entity_Dashboard = new Class_Entity_Dashboard()
                            {
                                Tabla_Movimiento_Inventario = Convert.ToInt32(Obj_SqlDataReader["Tabla_Movimiento_Inventario"]),
                                Tabla_Categoria_Insumo = Convert.ToInt32(Obj_SqlDataReader["Tabla_Categoria_Insumo"]),
                                Tabla_Proveedor_Insumo = Convert.ToInt32(Obj_SqlDataReader["Tabla_Proveedor_Insumo"]),
                                Tabla_Insumo = Convert.ToInt32(Obj_SqlDataReader["Tabla_Insumo"])
                            };
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Console.WriteLine(Error.Message);
                Obj_Class_Entity_Dashboard = new Class_Entity_Dashboard();
            }
            return Obj_Class_Entity_Dashboard;
        }

        public bool Class_Data_Insumo_Eliminar_Alter(int ID_Insumo)
        {
            bool Result = false;
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_SUPPLY_DELETE_ALTER", Obj_SqlConnection);
                    Obj_SqlCommand.Parameters.AddWithValue("ID_Insumo", ID_Insumo);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    Obj_SqlCommand.ExecuteNonQuery();

                    Result = true;
                }
            }
            catch (Exception Error)
            {
                Console.WriteLine(Error.Message);
                Result = false;
            }
            return Result;
        }

        public List<Class_Entity_Dashboard> Class_Data_Dashboard_Deadline()
        {
            List<Class_Entity_Dashboard> Obj_List_Class_Entity_Dashboard = new List<Class_Entity_Dashboard>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_DEADLINE_REPORT", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List_Class_Entity_Dashboard.Add(new Class_Entity_Dashboard()
                            {
                                ID_Insumo = Convert.ToInt32(Obj_SqlDataReader["ID_Insumo"].ToString()),
                                Nombre_Categoria_Insumo = Obj_SqlDataReader["Nombre_Categoria_Insumo"].ToString(),
                                Nombre_Proveedor_Insumo = Obj_SqlDataReader["Nombre_Proveedor_Insumo"].ToString(),
                                Nombre_Insumo = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Descripcion_Insumo = Obj_SqlDataReader["Descripcion_Insumo"].ToString(),
                                Unidad_Medida_Insumo = Obj_SqlDataReader["Unidad_Medida_Insumo"].ToString(),
                                Precio_Insumo = Convert.ToDecimal(Obj_SqlDataReader["Precio_Insumo"], new CultureInfo("es-PE")),
                                Stock_Insumo = Convert.ToInt32(Obj_SqlDataReader["Stock_Insumo"].ToString()),
                                Estado_Insumo = Convert.ToBoolean(Obj_SqlDataReader["Estado_Insumo"]),
                                Fecha_Vencimiento_Insumo = Obj_SqlDataReader["Fecha_Vencimiento_Insumo"].ToString(),
                                Ruta_Imagen_Insumo = Obj_SqlDataReader["Ruta_Imagen_Insumo"].ToString(),
                                Nombre_Imagen_Insumo = Obj_SqlDataReader["Nombre_Imagen_Insumo"].ToString(),
                                Deadline = Convert.ToInt32(Obj_SqlDataReader["Deadline"].ToString()),
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List_Class_Entity_Dashboard = new List<Class_Entity_Dashboard>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List_Class_Entity_Dashboard;
        }

        public List<Class_Entity_Dashboard> Class_Data_Dashboard_Transaction(string Initial_Fecha_Movimiento_Inventario, string Final_Fecha_Movimiento_Inventario, int ID_Movimiento_Inventario)
        {
            List<Class_Entity_Dashboard> Obj_List = new List<Class_Entity_Dashboard>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_TRANSACTION_REPORT", Obj_SqlConnection);
                    Obj_SqlCommand.Parameters.AddWithValue("Initial_Fecha_Movimiento_Inventario", Initial_Fecha_Movimiento_Inventario);
                    Obj_SqlCommand.Parameters.AddWithValue("Final_Fecha_Movimiento_Inventario", Final_Fecha_Movimiento_Inventario);
                    Obj_SqlCommand.Parameters.AddWithValue("ID_Movimiento_Inventario", ID_Movimiento_Inventario);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List.Add(new Class_Entity_Dashboard()
                            {
                                ID_Movimiento_Inventario = Convert.ToInt32(Obj_SqlDataReader["ID_Movimiento_Inventario"].ToString()),
                                Tipo_Movimiento_Inventario = Obj_SqlDataReader["Tipo_Movimiento_Inventario"].ToString(),
                                Nombre_Categoria_Insumo_Alter = Obj_SqlDataReader["Nombre_Categoria_Insumo"].ToString(),
                                Nombre_Proveedor_Insumo_Alter = Obj_SqlDataReader["Nombre_Proveedor_Insumo"].ToString(),
                                Nombre_Insumo_Alter = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Descripcion_Insumo_Alter = Obj_SqlDataReader["Descripcion_Insumo"].ToString(),
                                Precio_Insumo_Alter = Convert.ToDecimal(Obj_SqlDataReader["Precio_Insumo"], new CultureInfo("es-PE")),
                                Cantidad_Movimiento_Inventario = Convert.ToInt32(Obj_SqlDataReader["Cantidad_Movimiento_Inventario"].ToString()),
                                Total_Transaction = Convert.ToDecimal(Obj_SqlDataReader["Total_Transaction"], new CultureInfo("es-PE")),
                                Fecha_Movimiento_Inventario = Obj_SqlDataReader["Fecha_Movimiento_Inventario"].ToString(),
                                Usuario_Transaction = Obj_SqlDataReader["Usuario_Transaction"].ToString()
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List = new List<Class_Entity_Dashboard>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List;
        }
    }
}