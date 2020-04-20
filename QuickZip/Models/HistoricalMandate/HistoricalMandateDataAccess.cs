using BusinessLibrary;
using QuickZip.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickZip.Models.HistoricalMandate
{
    public class HistoricalMandateDataAccess
    {
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
        List<HistoricalMandateClass> dataList = new List<HistoricalMandateClass>();
        public IEnumerable<HistoricalMandateClass> GetDataFromDB(string FromDate, string ToDate)
        {          
            try
            {
                var Result = dbcontext.MultipleResults("[dbo].[Sp_Mandate]").With<HistoricalMandateClass>().Execute("@QueryType", "@ToDate", "@FromDate", "@UserId", "grdMandateDataDateWise", ToDate, FromDate,"94"); 
                foreach (var HistoricalMandateData in Result)
                {
                    dataList = HistoricalMandateData.Cast<HistoricalMandateClass>().ToList();
                  
                }
                return dataList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}