using System.Web.Mvc;
using ENTITY___LAYER;
using BUSINESS___LAYER;
using System.Data;
using ClosedXML.Excel;
using System.IO;
using System;
using System.Collections.Generic;

namespace ADMINISTRATOR___LAYER.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Privacy()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Home_Controller_Dashboard_Tip()
        {
            Class_Entity_Dashboard Obj_Class_Entity_Dashboard = new Class_Business_Dashboard().Class_Business_Dashboard_Tip();

            return Json(new { result = Obj_Class_Entity_Dashboard }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Chart_01()
        {
            object data;

            data = new Class_Business_Chart().Class_Business_Chart_01();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Chart_02()
        {
            object data;

            data = new Class_Business_Chart().Class_Business_Chart_02();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Chart_03()
        {
            object data;

            data = new Class_Business_Chart().Class_Business_Chart_03();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Chart_04()
        {
            object data;

            data = new Class_Business_Chart().Class_Business_Chart_04();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Chart_05()
        {
            object data;

            data = new Class_Business_Chart().Class_Business_Chart_05();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Chart_06()
        {
            object data;

            data = new Class_Business_Chart().Class_Business_Chart_06();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Home_Controller_Insumo_Eliminar_Alter(int ID_Insumo)
        {
            bool result = false;

            result = new Class_Business_Dashboard().Class_Business_Insumo_Eliminar_Alter(ID_Insumo);

            return Json(new { result = result }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Dashboard_Deadline()
        {
            object data;

            data = new Class_Business_Dashboard().Class_Business_Dashboard_Deadline();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Home_Controller_Dashboard_Transaction(string Initial_Fecha_Movimiento_Inventario, string Final_Fecha_Movimiento_Inventario, int ID_Movimiento_Inventario = 0)
        {
            object data;

            data = new Class_Business_Dashboard().Class_Business_Dashboard_Transaction(Initial_Fecha_Movimiento_Inventario, Final_Fecha_Movimiento_Inventario, ID_Movimiento_Inventario);

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public FileResult Home_Controller_Dashboard_Export(string Initial_Fecha_Movimiento_Inventario, string Final_Fecha_Movimiento_Inventario, int ID_Movimiento_Inventario = 0)
        {
            List<Class_Entity_Dashboard> Obj_List = new List<Class_Entity_Dashboard>();
            Obj_List = new Class_Business_Dashboard().Class_Business_Dashboard_Transaction(Initial_Fecha_Movimiento_Inventario, Final_Fecha_Movimiento_Inventario, ID_Movimiento_Inventario);
            DataTable Obj_DataTable = new DataTable();

            Obj_DataTable.Locale = new System.Globalization.CultureInfo("es-PE");
            Obj_DataTable.Columns.Add("ID_Movimiento_Inventario", typeof(int));
            Obj_DataTable.Columns.Add("Tipo_Movimiento_Inventario", typeof(string));
            Obj_DataTable.Columns.Add("Nombre_Categoria_Insumo_Alter", typeof(string));
            Obj_DataTable.Columns.Add("Nombre_Proveedor_Insumo_Alter", typeof(string));
            Obj_DataTable.Columns.Add("Nombre_Insumo_Alter", typeof(string));
            Obj_DataTable.Columns.Add("Descripcion_Insumo_Alter", typeof(string));
            Obj_DataTable.Columns.Add("Precio_Insumo_Alter", typeof(int));
            Obj_DataTable.Columns.Add("Cantidad_Movimiento_Inventario", typeof(decimal));
            Obj_DataTable.Columns.Add("Total_Transaction", typeof(decimal));
            Obj_DataTable.Columns.Add("Fecha_Movimiento_Inventario", typeof(string));
            Obj_DataTable.Columns.Add("Usuario_Transaction", typeof(string));

            foreach (Class_Entity_Dashboard Obj_Class_Entity_Dashboard in Obj_List)
            {
                Obj_DataTable.Rows.Add(new object[] {
                Obj_Class_Entity_Dashboard.ID_Movimiento_Inventario,
                Obj_Class_Entity_Dashboard.Tipo_Movimiento_Inventario,
                Obj_Class_Entity_Dashboard.Nombre_Categoria_Insumo_Alter,
                Obj_Class_Entity_Dashboard.Nombre_Proveedor_Insumo_Alter,
                Obj_Class_Entity_Dashboard.Nombre_Insumo_Alter,
                Obj_Class_Entity_Dashboard.Descripcion_Insumo_Alter,
                Obj_Class_Entity_Dashboard.Precio_Insumo_Alter,
                Obj_Class_Entity_Dashboard.Cantidad_Movimiento_Inventario,
                Obj_Class_Entity_Dashboard.Total_Transaction,
                Obj_Class_Entity_Dashboard.Fecha_Movimiento_Inventario,
                Obj_Class_Entity_Dashboard.Usuario_Transaction,
            });
            }

            Obj_DataTable.TableName = "Transaction - Report";

            using (XLWorkbook Obj_XLWorkbook = new XLWorkbook())
            {
                Obj_XLWorkbook.Worksheets.Add(Obj_DataTable);
                using (MemoryStream Obj_MemoryStream = new MemoryStream())
                {
                    Obj_XLWorkbook.SaveAs(Obj_MemoryStream);
                    return File(Obj_MemoryStream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Transaction - Report - " + DateTime.Now.ToString() + ".xlsx");
                }
            }
        }
    }
}