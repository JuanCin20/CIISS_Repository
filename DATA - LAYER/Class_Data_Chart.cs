using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System;
using ENTITY___LAYER;

namespace DATA___LAYER
{
    public class Class_Data_Chart
    {
        public List<Class_Entity_Chart> Class_Data_Chart_01()
        {
            List<Class_Entity_Chart> Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_CHART_01", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List_Class_Entity_Chart.Add(new Class_Entity_Chart()
                            {
                                Year = Convert.ToInt32(Obj_SqlDataReader["Year"]),
                                Month = Convert.ToInt32(Obj_SqlDataReader["Month"]),
                                Month_Name = Obj_SqlDataReader["Month_Name"].ToString(),
                                Income_Number = Convert.ToInt32(Obj_SqlDataReader["Income_Number"])
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List_Class_Entity_Chart;
        }

        public List<Class_Entity_Chart> Class_Data_Chart_02()
        {
            List<Class_Entity_Chart> Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_CHART_02", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List_Class_Entity_Chart.Add(new Class_Entity_Chart()
                            {
                                Year_Alter = Convert.ToInt32(Obj_SqlDataReader["Year"]),
                                Month_Alter = Convert.ToInt32(Obj_SqlDataReader["Month"]),
                                Month_Name_Alter = Obj_SqlDataReader["Month_Name"].ToString(),
                                Exit_Number = Convert.ToInt32(Obj_SqlDataReader["Exit_Number"])
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List_Class_Entity_Chart;
        }

        public List<Class_Entity_Chart> Class_Data_Chart_03()
        {
            List<Class_Entity_Chart> Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_CHART_03", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List_Class_Entity_Chart.Add(new Class_Entity_Chart()
                            {
                                Nombre_Categoria_Insumo = Obj_SqlDataReader["Nombre_Categoria_Insumo"].ToString(),
                                Number_Stock = Convert.ToInt32(Obj_SqlDataReader["Number_Stock"])
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List_Class_Entity_Chart;
        }

        public List<Class_Entity_Chart> Class_Data_Chart_04()
        {
            List<Class_Entity_Chart> Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_CHART_04", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List_Class_Entity_Chart.Add(new Class_Entity_Chart()
                            {
                                Nombre_Categoria_Insumo_01 = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Nombre_Insumo_01 = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Stock_Insumo_01 = Convert.ToInt32(Obj_SqlDataReader["Number_Transaction"])
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List_Class_Entity_Chart;
        }

        public List<Class_Entity_Chart> Class_Data_Chart_05()
        {
            List<Class_Entity_Chart> Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_CHART_05", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List_Class_Entity_Chart.Add(new Class_Entity_Chart()
                            {
                                Nombre_Categoria_Insumo_02 = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Nombre_Insumo_02 = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Stock_Insumo_02 = Convert.ToInt32(Obj_SqlDataReader["Number_Transaction"])
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List_Class_Entity_Chart;
        }

        public List<Class_Entity_Chart> Class_Data_Chart_06()
        {
            List<Class_Entity_Chart> Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
            try
            {
                using (SqlConnection Obj_SqlConnection = new SqlConnection(Class_Data_Connection.Connection_String))
                {
                    SqlCommand Obj_SqlCommand = new SqlCommand("SP_CHART_06", Obj_SqlConnection);
                    Obj_SqlCommand.CommandType = CommandType.StoredProcedure;

                    Obj_SqlConnection.Open();

                    using (SqlDataReader Obj_SqlDataReader = Obj_SqlCommand.ExecuteReader())
                    {
                        while (Obj_SqlDataReader.Read())
                        {
                            Obj_List_Class_Entity_Chart.Add(new Class_Entity_Chart()
                            {
                                Nombre_Categoria_Insumo_03 = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Nombre_Insumo_03 = Obj_SqlDataReader["Nombre_Insumo"].ToString(),
                                Stock_Insumo_03 = Convert.ToInt32(Obj_SqlDataReader["Number_Transaction"])
                            });
                        }
                    }
                }
            }
            catch (Exception Error)
            {
                Obj_List_Class_Entity_Chart = new List<Class_Entity_Chart>();
                Console.WriteLine(Error.Message);
            }
            return Obj_List_Class_Entity_Chart;
        }
    }
}