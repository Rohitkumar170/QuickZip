using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;


using System.Data;
using System.IO;

using System.Net.Http;
using System.Web.Http;
using QuickZip.Entity;
using QuickZip.Models;
using System.Web;

using QuickZip.Models.UMRNUpload;

namespace QuickZip.Controllers
{
    public class UMRNUploadController : ApiController
    {
        UMRNUpload umrn = new UMRNUpload();

       // QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
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

        //[HttpPost]
        //[Route("api/UMRNUpload/UploadExcel")]       
        //public string UploadExcel()
        //{
        //    string message = "";
        //    HttpResponseMessage result = null;
        //    var httpRequest = HttpContext.Current.Request;
        //    using (QuickCheckEmandate_AngularEntities objEntity = new QuickCheckEmandate_AngularEntities())
        //    {

        //        if (httpRequest.Files.Count > 0)
        //        {
        //            HttpPostedFile file = httpRequest.Files[0];
        //            Stream stream = file.InputStream;

        //            IExcelDataReader reader = null;

        //            if (file.FileName.EndsWith(".xls"))
        //            {
        //                reader = ExcelReaderFactory.CreateBinaryReader(stream);
        //            }
        //            else if (file.FileName.EndsWith(".xlsx"))
        //            {
        //                reader = ExcelReaderFactory.CreateOpenXmlReader(stream);
        //            }
        //            else
        //            {
        //                message = "This file format is not supported";
        //            }

        //            DataSet excelRecords = reader.AsDataSet();
        //            reader.Close();

        //            var finalRecords = excelRecords.Tables[0];
        //            for (int i = 0; i < finalRecords.Rows.Count; i++)
        //            {
        //                UserDetail objUser = new UserDetail();
        //                objUser.UserName = finalRecords.Rows[i][0].ToString();
        //                objUser.EmailId = finalRecords.Rows[i][1].ToString();
        //                objUser.Gender = finalRecords.Rows[i][2].ToString();
        //                objUser.Address = finalRecords.Rows[i][3].ToString();
        //                objUser.MobileNo = finalRecords.Rows[i][4].ToString();
        //                objUser.PinCode = finalRecords.Rows[i][5].ToString();

        //                objEntity.UserDetails.Add(objUser);

        //            }

        //            int output = objEntity.SaveChanges();
        //            if (output > 0)
        //            {
        //                message = "Excel file has been successfully uploaded";
        //            }
        //            else
        //            {
        //                message = "Excel file uploaded has fiald";
        //            }

        //        }

        //        else
        //        {
        //            result = Request.CreateResponse(HttpStatusCode.BadRequest);
        //        }
        //    }
        //    return message;
        //}

    }
}
