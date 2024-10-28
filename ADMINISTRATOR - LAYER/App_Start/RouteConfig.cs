using System.Web.Mvc;
using System.Web.Routing;

namespace ADMINISTRATOR___LAYER
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Access", action = "Log_In", id = UrlParameter.Optional }
            );
        }
    }
}