using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickZip.Models.AccessRights
{
    public class AccessRightDetails
    {
        public Int64 LinkID { get; set; }
        public string LinkName { get; set; }
        public Boolean IsRead { get; set; }
        public Boolean IsCreate { get; set; }
        public Boolean IsEdit { get; set; }
        public string IconName { get; set; }
    
    }
}