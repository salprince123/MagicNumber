using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MagicNumber.Models
{
    public class User : IdentityUser<int>
    {
        [PersonalData]
        public string Name { get; set; }
        [PersonalData]
        public string About { get; set; }
        [PersonalData]
        public string Quote { get; set; }
        [PersonalData]
        public string Birthday { get; set; }
        [PersonalData]
        public string Avatar { get; set; }
        [PersonalData]
        public string Background { get; set; }

    }
}