using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessLibrary;
using QuickZip.Entity;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Net.NetworkInformation;
using QuickZip.Models.UMRNUpload;

namespace QuickZip.Models.UMRNUpload
{
    public class UMRNUpload
    {
        List<MainGrid> dataList = new List<MainGrid>();
      
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();

        public Dictionary<string, object> BindGrid(string EntityId)
        {
          
            try
            {

                var Result = Common.Getdata(dbcontext.MultipleResults("[dbo].[Sp_Uploaddata]").With<MainGrid>().Execute("@QueryType", "@EntityId", "BindRecord", DbSecurity.Decrypt(HttpContext.Current.Server.UrlDecode(EntityId.Replace("_", "%")))));
                return Result;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }



        public Dictionary<string, object> BindOnRowdblClick(string UploadHeaderId)
        {

            try
            {

                var Result = Common.Getdata(dbcontext.MultipleResults("[dbo].[Sp_Uploaddata]").With<GridUnsuccess>().With<GridSuccess>().With<MainGridDetails>().Execute("@QueryType", "@UploadHeaderId", "Legacy_RowdbClick", UploadHeaderId));
                return Result;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}