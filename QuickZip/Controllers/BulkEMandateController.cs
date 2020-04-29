using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuickZip.Models;
using QuickZip.Models.BulkEmandate;

namespace QuickZip.Controllers
{
    
    public class BulkEMandateController : ApiController
    {
        BulkEMandateClass BulkEmandt = new BulkEMandateClass();

        [HttpGet]
        [Route("api/BulkEMandate/GetGridData/{UserId}/{EntityId}/{topVal}/{ActivityType}")]
        public IEnumerable<BulkEmandateAttribute> GetGridData(string UserId, string EntityId, string topVal, string ActivityType)
        {
            return BulkEmandt.GetData(UserId, EntityId, topVal, ActivityType);
        }
    }
}
