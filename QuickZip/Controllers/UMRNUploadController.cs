using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuickZip.Models;
using QuickZip.Models.UMRNUpload;

namespace QuickZip.Controllers
{
    public class UMRNUploadController : ApiController
    {
        UMRNUpload umrn = new UMRNUpload();


        [HttpGet]
        // [Route("api/NachMandate/Binddetails")]
        [Route("api/UMRNUpload/BindGrid/{EntityId}")]
        public Dictionary<string, object> BindGrid( string EntityId)
        {

            return umrn.BindGrid( EntityId);
        }



        [HttpGet]
     
        [Route("api/UMRNUpload/BindOnRowdblClick/{UploadHeaderId}")]
        public Dictionary<string, object> BindOnRowdblClick(string UploadHeaderId)
        {

            return umrn.BindOnRowdblClick(UploadHeaderId);
        }
    }
}
