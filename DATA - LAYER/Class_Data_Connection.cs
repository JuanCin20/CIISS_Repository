using System.Configuration;

namespace DATA___LAYER
{
    public class Class_Data_Connection
    {
        public static string Connection_String = ConfigurationManager.ConnectionStrings["Connection_String"].ToString();
    }
}