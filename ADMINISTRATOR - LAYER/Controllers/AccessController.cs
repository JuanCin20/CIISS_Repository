using System.Web.Mvc;
using ENTITY___LAYER;
using BUSINESS___LAYER;
using System.Linq;
using System.Web.Security;

namespace ADMINISTRATOR___LAYER.Controllers
{
    public class AccessController : Controller
    {
        public ActionResult Log_In()
        {
            return View();
        }

        public ActionResult Change_Password()
        {
            return View();
        }

        public ActionResult Reset_Password()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Log_In(string E_Mail_Usuario, string Password_Usuario)
        {
            Class_Entity_Usuario Obj_Class_Entity_Usuario = new Class_Entity_Usuario();

            Obj_Class_Entity_Usuario = new Class_Business_Usuario().Class_Business_Usuario_Listar().Where(Obj_Class_Entity_Usuario_Alter => Obj_Class_Entity_Usuario_Alter.E_Mail_Usuario == E_Mail_Usuario && Obj_Class_Entity_Usuario_Alter.Password_Usuario == Class_Business_Recurso.Convert_SHA_256(Password_Usuario)).FirstOrDefault();

            if (Obj_Class_Entity_Usuario == null)
            {
                ViewBag.Error = "Verifique sus Credenciales";
                return View();
            }
            else
            {
                if (Obj_Class_Entity_Usuario.Reestablecer_Password_Usuario)
                {
                    TempData["ID_Usuario"] = Obj_Class_Entity_Usuario.ID_Usuario;
                    ViewBag.Error = null;
                    return RedirectToAction("Change_Password", "Access");
                }
                else
                {
                    FormsAuthentication.SetAuthCookie(Obj_Class_Entity_Usuario.E_Mail_Usuario, false);
                    System.Web.HttpContext.Current.Session["Nombre_Apellido_String"] = Obj_Class_Entity_Usuario.Nombre_Usuario + " " + Obj_Class_Entity_Usuario.Apellido_Usuario;
                    System.Web.HttpContext.Current.Session["E_Mail_Usuario"] = Obj_Class_Entity_Usuario.E_Mail_Usuario;
                    ViewBag.Error = null;
                    return RedirectToAction("Index", "Home");
                }
            }
        }

        [HttpPost]
        public ActionResult Change_Password(int ID_Usuario, string Password_Usuario, string Password_Usuario_01, string Password_Usuario_02)
        {
            Class_Entity_Usuario Obj_Class_Entity_Usuario = new Class_Entity_Usuario();

            Obj_Class_Entity_Usuario = new Class_Business_Usuario().Class_Business_Usuario_Listar().Where(Obj_Class_Entity_Usuario_Alter => Obj_Class_Entity_Usuario_Alter.ID_Usuario == ID_Usuario).FirstOrDefault();

            if (Obj_Class_Entity_Usuario.Password_Usuario != Class_Business_Recurso.Convert_SHA_256(Password_Usuario))
            {
                TempData["ID_Usuario"] = ID_Usuario;
                ViewBag.Error = "La Contraseña Actual es Incorrecta";
                return View();
            }

            Password_Usuario_01 = Class_Business_Recurso.Convert_SHA_256(Password_Usuario_01);

            string Message = string.Empty;

            bool Answer = new Class_Business_Usuario().Class_Business_Usuario_Change_Password(ID_Usuario, Password_Usuario_01, out Message);

            if (Answer)
            {
                ViewBag.Error = null;
                return RedirectToAction("Log_In", "Access");
            }
            else
            {
                TempData["ID_Usuario"] = ID_Usuario;
                ViewBag.Error = Message;
                return View();
            }
        }

        [HttpPost]
        public ActionResult Reset_Password(string E_Mail_Usuario)
        {
            Class_Entity_Usuario Obj_Class_Entity_Usuario = new Class_Entity_Usuario();

            Obj_Class_Entity_Usuario = new Class_Business_Usuario().Class_Business_Usuario_Listar().Where(Obj_Class_Entity_Usuario_Alter => Obj_Class_Entity_Usuario_Alter.E_Mail_Usuario == E_Mail_Usuario).FirstOrDefault();

            if (Obj_Class_Entity_Usuario == null)
            {
                ViewBag.Error = "No se Encontró a un Usuario Relacionado con este Correo";
                return View();
            }

            string Message = string.Empty;
            bool Answer = new Class_Business_Usuario().Class_Business_Usuario_Reset_Password(Obj_Class_Entity_Usuario.ID_Usuario, E_Mail_Usuario, out Message);

            if (Answer)
            {
                ViewBag.Error = null;
                return RedirectToAction("Log_In", "Access");
            }
            else
            {
                ViewBag.Error = Message;
                return View();
            }
        }

        public ActionResult Access_Controller_Log_Out()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Log_In", "Access");
        }
    }
}