using System.Web.Mvc;
using ENTITY___LAYER;
using BUSINESS___LAYER;
using System.Linq;
using Newtonsoft.Json;
using System.IO;
using System;
using System.Web;
using System.Configuration;

namespace ADMINISTRATOR___LAYER.Controllers
{
    [Authorize]
    public class StaffController : Controller
    {
        public ActionResult User()
        {
            return View();
        }

        //+++++++++++++++++++++++Http_Request_Methods_Usuario+++++++++++++++++++++++//
        #region Http_Request_Methods_Usuario
        [HttpGet]
        public JsonResult Staff_Controller_Usuario_Listar()
        {
            object data;

            data = new Class_Business_Usuario().Class_Business_Usuario_Listar();

            return Json(new { data = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Staff_Controller_Usuario_Registrar(string Obj_Class_Entity_Usuario, HttpPostedFileBase Obj_IFormFile)
        {
            string message = string.Empty;
            bool successful_operation = true;
            bool successful_save_image = true;

            Class_Entity_Usuario Obj_Class_Entity_Usuario_Alter = new Class_Entity_Usuario();
            Obj_Class_Entity_Usuario_Alter = JsonConvert.DeserializeObject<Class_Entity_Usuario>(Obj_Class_Entity_Usuario);

            int ID_Auto_Generated = new Class_Business_Usuario().Class_Business_Usuario_Registrar(Obj_Class_Entity_Usuario_Alter, out message);

            if (ID_Auto_Generated != 0)
            {
                Obj_Class_Entity_Usuario_Alter.ID_Usuario = ID_Auto_Generated;
            }
            else
            {
                successful_operation = false;
            }

            if (successful_operation)
            {
                if (Obj_IFormFile != null)
                {
                    string Ruta_Imagen_Usuario = ConfigurationManager.AppSettings["User_Image_Server"];
                    string Image_Extension = Path.GetExtension(Obj_IFormFile.FileName);
                    string Nombre_Imagen_Usuario = string.Concat(Obj_Class_Entity_Usuario_Alter.ID_Usuario.ToString(), Image_Extension);

                    try
                    {
                        Obj_IFormFile.SaveAs(Path.Combine(Ruta_Imagen_Usuario, Nombre_Imagen_Usuario));
                    }
                    catch (Exception Error)
                    {
                        string Message = Error.Message;
                        successful_save_image = false;
                    }

                    if (successful_save_image)
                    {
                        Obj_Class_Entity_Usuario_Alter.Ruta_Imagen_Usuario = Ruta_Imagen_Usuario;
                        Obj_Class_Entity_Usuario_Alter.Nombre_Imagen_Usuario = Nombre_Imagen_Usuario;
                        bool Answer = new Class_Business_Usuario().Class_Business_Usuario_Registrar_Imagen(Obj_Class_Entity_Usuario_Alter, out message);
                    }
                    else
                    {
                        message = "Error: Ruta_Imagen_Usuario && Error: Nombre_Imagen_Usuario";
                    }
                }
                else
                {
                    if (Obj_IFormFile == null)
                    {
                        string Ruta_Imagen_Usuario = ConfigurationManager.AppSettings["User_Image_Server"];
                        string Nombre_Imagen_Usuario = "Image_Error.jpg";
                        Obj_Class_Entity_Usuario_Alter.Ruta_Imagen_Usuario = Ruta_Imagen_Usuario;
                        Obj_Class_Entity_Usuario_Alter.Nombre_Imagen_Usuario = Nombre_Imagen_Usuario;
                        bool Answer = new Class_Business_Usuario().Class_Business_Usuario_Registrar_Imagen(Obj_Class_Entity_Usuario_Alter, out message);
                    }
                }
            }
            return Json(new { successful_operation = successful_operation, iD_Auto_Generated = Obj_Class_Entity_Usuario_Alter.ID_Usuario, message = message }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Staff_Controller_Usuario_Editar(string Obj_Class_Entity_Usuario, HttpPostedFileBase Obj_IFormFile)
        {
            string message = string.Empty;
            bool successful_operation = true;
            bool successful_save_image = true;

            Class_Entity_Usuario Obj_Class_Entity_Usuario_Alter = new Class_Entity_Usuario();
            Obj_Class_Entity_Usuario_Alter = JsonConvert.DeserializeObject<Class_Entity_Usuario>(Obj_Class_Entity_Usuario);

            successful_operation = new Class_Business_Usuario().Class_Business_Usuario_Editar(Obj_Class_Entity_Usuario_Alter, out message);

            if (successful_operation)
            {
                if (Obj_IFormFile != null)
                {
                    string Ruta_Imagen_Usuario = ConfigurationManager.AppSettings["User_Image_Server"];
                    string Image_Extension = Path.GetExtension(Obj_IFormFile.FileName);
                    string Nombre_Imagen_Usuario = string.Concat(Obj_Class_Entity_Usuario_Alter.ID_Usuario.ToString(), Image_Extension);

                    try
                    {
                        Obj_IFormFile.SaveAs(Path.Combine(Ruta_Imagen_Usuario, Nombre_Imagen_Usuario));
                    }
                    catch (Exception Error)
                    {
                        string Message = Error.Message;
                        successful_save_image = false;
                    }

                    if (successful_save_image)
                    {
                        Obj_Class_Entity_Usuario_Alter.Ruta_Imagen_Usuario = Ruta_Imagen_Usuario;
                        Obj_Class_Entity_Usuario_Alter.Nombre_Imagen_Usuario = Nombre_Imagen_Usuario;
                        bool Answer = new Class_Business_Usuario().Class_Business_Usuario_Registrar_Imagen(Obj_Class_Entity_Usuario_Alter, out message);
                    }
                    else
                    {
                        message = "Error: Ruta_Imagen_Usuario && Error: Nombre_Imagen_Usuario";
                    }
                }
            }
            return Json(new { successful_operation = successful_operation, iD_Auto_Generated = Obj_Class_Entity_Usuario_Alter.ID_Usuario, message = message }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Staff_Controller_Usuario_Imagen(int ID_Usuario)
        {
            bool conversion;
            Class_Entity_Usuario Obj_Class_Entity_Usuario = new Class_Business_Usuario().Class_Business_Usuario_Listar().Where(Obj_Class_Entity_Usuario_Alter => Obj_Class_Entity_Usuario_Alter.ID_Usuario == ID_Usuario).FirstOrDefault();
            string Base_64_Imagen_Usuario = Class_Business_Recurso.Convert_Base_64(Path.Combine(Obj_Class_Entity_Usuario.Ruta_Imagen_Usuario, Obj_Class_Entity_Usuario.Nombre_Imagen_Usuario), out conversion);
            return Json(new { conversion = conversion, base_64_Imagen_Usuario = Base_64_Imagen_Usuario, extension_Imagen_Usuario = Path.GetExtension(Obj_Class_Entity_Usuario.Nombre_Imagen_Usuario) }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Staff_Controller_Usuario_Eliminar(int ID_Usuario)
        {
            bool result = false;
            string message = string.Empty;

            result = new Class_Business_Usuario().Class_Business_Usuario_Eliminar(ID_Usuario, out message);

            return Json(new { result = result, message = message }, JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}