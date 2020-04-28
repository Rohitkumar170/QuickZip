using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickZip.Models.AccessRights
{
    public class AccessRightsEntityDetails
    {
        public Int64 userid { get; set; }
        public string username { get; set; }
        public string usertype { get; set; }
        public Int64 entityid { get; set; }
                      
    }
}