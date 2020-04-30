using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuickZip.Models.Allumrn;
using QuickZip.Models;

namespace QuickZip.Controllers
{
    public class AllUMRNController : ApiController
    {
        Allumrnaccesslayer obj = new Allumrnaccesslayer();
        [HttpGet]
        [Route("api/AllUMRN/GridBind/{Entityid}/{Pageno}")]
        public IEnumerable<GridData> GridBind(string Entityid, string Pageno)
        {
            return obj.GridBind(Entityid, Pageno);
        }
        [HttpGet]
        [Route("api/AllUMRN/GridBind1/{Entityid}/{Pageno}")]
        public Dictionary<string, object> GridBind1(string Entityid, string Pageno)
        {
            return obj.GridBind1(Entityid, Pageno);
        }

        [HttpPost]
        [Route("api/AllUMRN/SearchData")]
        public IEnumerable<GridData> SearchData([FromBody] GridData searchdata)
        {
            return obj.SearchData(searchdata);
        }
        [HttpPost]
        [Route("api/AllUMRN/AddUmrn1")]
        public Dictionary<string, object> AddUmrn1([FromBody] Insertumrn insertdata)
        {
            return obj.AddUmrn1(insertdata);
        }

        [HttpPost]
        [Route("api/AllUMRN/AddUmrn")]
        public IEnumerable<Insertumrn> AddUmrn([FromBody] Insertumrn insertdata)
         {
            return obj.AddUmrn(insertdata);
        }

        [HttpGet]
        [Route("api/AllUMRN/GridDataDetails/{UMRN}/{Entityid}")]
        public IEnumerable<GridDataDetails> GridDataDetails(string UMRN, string Entityid)
        {
            return obj.GridDataDetails(UMRN, Entityid);
        }

        
        

    }
}
