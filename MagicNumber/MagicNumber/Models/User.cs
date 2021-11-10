using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagicNumber.Models
{
    public class User
    {
        public string UserID { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        
        public string Birthday { get; set; }
        public string Avatar { get; set; }

    }
}