using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuickZip.Models.OldEmandate;
using QuickZip.Models;
namespace QuickZip.Controllers
{
    public class DownloadoldemandateController : ApiController
    {


        Downloadoldemandateaccesslayer obj = new Downloadoldemandateaccesslayer();
        [HttpGet]
        [Route("api/Downloadoldemandate/BankBind/{userid}")]
        public Dictionary<string, object> BankBind(string userid)
        {
            return obj.BankBind(userid);
        }


        //[HttpPost]
        //[Route("api/Downloadoldemandate/Searchdata")]
        //public IEnumerable<Searchdata>Searchdata([FormData]Searchdata objsearch)
        //{
        //    return obj.SearchData(objsearch);
        //}

        [HttpGet]
        [Route("api/Downloadoldemandate/SearchData/{FromDate}/{ToDate}/{Bank}/{userid}")]
        public IEnumerable<Searchdata> SearchData(string FromDate, string ToDate, string Bank, string userid)
        {
            return obj.SearchData(FromDate, ToDate, Bank, userid);
        }
    }
}
