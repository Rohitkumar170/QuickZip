using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuickZip.Models.nachtransactionpresentation;
using QuickZip.Models;

namespace QuickZip.Controllers
{
    public class NachtransactionPresentationController : ApiController
    {
        nachtransactionpresentationaccesslayer obj = new nachtransactionpresentationaccesslayer();
        [HttpGet]
        [Route("api/NachtransactionPresentation/BankBind/{UserId}/{EntityId}")]
        public IEnumerable<Nachtransactionpresentation> BankBind(string UserId, string EntityId)
        {
            return obj.BankBind(UserId, EntityId);
        }
        [HttpGet]
        [Route("api/NachtransactionPresentation/CheckUser/{UserId}/{EntityId}")]
        public Dictionary<string, object> CheckUser(string UserId, string EntityId)
        {
            return obj.CheckUser(UserId, EntityId);
        }
        [HttpGet]
        [Route("api/NachtransactionPresentation/BindGridForm/{Bank}/{UserId}/{EntityId}")]
        public IEnumerable<NachTransactionPrsentationBindForm> BindGridForm(string Bank,string UserId, string EntityId)
        {
            return obj.BindGridForm(Bank,UserId, EntityId);
        }
    }
}
