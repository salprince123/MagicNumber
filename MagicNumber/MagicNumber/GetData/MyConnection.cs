using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagicNumber.GetData
{
    public class MyConnection
    {
        string conn = "host=localhost;user=root;password='';database=numberum;";
        public MyConnection()
        {
           
        }
        public MySqlConnection GetConnection()
        {
            return new MySqlConnection(conn);
        }
    }
}