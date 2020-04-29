using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Xml;
using System.Xml.Linq;
using BusinessLibrary;
using QuickZip.Entity;
using QuickZip.Models;


namespace QuickZip.Models.BulkEmandate
{
    public class BulkEMandateClass
    {
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
        List<BulkEmandateAttribute> dataList = new List<BulkEmandateAttribute>();

        public IEnumerable<BulkEmandateAttribute> GetData(string UserId,string EntityId,string topVal,string ActivityType)
        {
            try
            {
                var Data = dbcontext.MultipleResults("[dbo].[Sp_Mandate]").With<BulkEmandateAttribute>().Execute("@QueryType", "@UserId", "@EntityId", "@topVal", "@ActivityType", "DataActivity", DbSecurity.Decrypt(HttpContext.Current.Server.UrlDecode(UserId.Replace("_", "%"))), EntityId,topVal, ActivityType);
                foreach (var dt in Data)
                {
                    dataList= dt.Cast<BulkEmandateAttribute>().ToList();
                }
                return dataList;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}