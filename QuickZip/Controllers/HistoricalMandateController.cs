using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuickZip.Models;
using QuickZip.Models.HistoricalMandate;

namespace QuickZip.Controllers
{
    public class HistoricalMandateController : ApiController
    {
        HistoricalMandateDataAccess objHMDA = new HistoricalMandateDataAccess();
        [HttpGet]
        [Route("api/BindData/DatesWise/{FromDate}/{ToDate}")]
        public IEnumerable<HistoricalMandateClass> GetDataApi(string FromDate, string ToDate)
        {
            return objHMDA.GetDataFromDB(FromDate, ToDate);
        }
    }
}
