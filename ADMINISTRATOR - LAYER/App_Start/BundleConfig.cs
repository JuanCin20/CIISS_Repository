using System.Web.Optimization;

namespace ADMINISTRATOR___LAYER
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Bundle/Style").Include(
                "~/Content/Site.css",
                "~/Library/Bootstrap_v5.3.3/Content/bootstrap.min.css",
                "~/Library/JQuery_Datatables_v1.10.15/Content/DataTables/css/jquery.dataTables.min.css",
                "~/Library/JQuery_Datatables_v1.10.15/Content/DataTables/css/responsive.dataTables.min.css",
                "~/Library/Sweet_Alert_2_v1.0.1/staticwebassets/bootstrap4Theme.min.css",
                "~/Library/Toastr_v2.1.1/content/toastr.min.css",
                "~/Library/Fontawesome_v6.6.0/css/all.min.css",
                "~/Content/Extra.css",
                "~/Library/JQuery_UI_Combined_v1.13.3/Content/themes/base/jquery-ui.min.css"
            ));

            bundles.Add(new Bundle("~/Bundle/Script").Include(
                "~/Scripts/Site.js",
                "~/Library/Bootstrap_v5.3.3/Scripts/bootstrap.bundle.min.js",
                "~/Library/JQuery_v3.7.1/Scripts/jquery-3.7.1.min.js",
                "~/Library/JQuery_Datatables_v1.10.15/Scripts/DataTables/jquery.dataTables.min.js",
                "~/Library/JQuery_Datatables_v1.10.15/Scripts/DataTables/dataTables.responsive.min.js",
                "~/Library/JQuery_Loading_Overlay_v2.1.5/Scripts/loadingoverlay.min.js",
                "~/Library/Sweet_Alert_2_v1.0.1/staticwebassets/sweetAlert2.min.js",
                "~/Library/Toastr_v2.1.1/scripts/toastr.min.js",
                "~/Library/Fontawesome_v6.6.0/js/Scripts/all.min.js",
                "~/Library/JQuery_Validation_v1.19.5/dist/jquery.validate.min.js",
                "~/Library/JQuery_UI_Combined_v1.13.3/Scripts/jquery-ui-1.13.3.min.js"
            ));
        }
    }
}