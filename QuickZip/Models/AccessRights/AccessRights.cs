using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuickZip.Entity;
using QuickZip.Models.DownloadMandate;
using BusinessLibrary;
using System.Xml;
using System.Data;
using System.Xml.Linq;
using System.Web.UI.WebControls;
namespace QuickZip.Models.AccessRights
{
    public class AccessRights
    {
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
        List<CommonFlag> common = new List<CommonFlag>();
        CommonFlag Flag = new CommonFlag();
        List<AccessRightsEntityDetails> dataList = new List<AccessRightsEntityDetails>();
        
            List<AccessRightDetails> dataList1 = new List<AccessRightDetails>();

        public IEnumerable<AccessRightsEntityDetails> BindEntityDetails(string UserType,string ReferenceId)
        {
            // List<DownloadMandateDetails> dataList = new List<DownloadMandateDetails>();
            try
            {
                var Result = dbcontext.MultipleResults("[dbo].[Sp_LinkSetup_AccessRights]").With<AccessRightsEntityDetails>().Execute("@QueryType", "@userType", "@EntityID", "GetUsersType", DbSecurity.Decrypt(HttpContext.Current.Server.UrlDecode(UserType.Replace("_", "%"))), DbSecurity.Decrypt(HttpContext.Current.Server.UrlDecode(ReferenceId.Replace("_", "%"))));

                foreach (var employe in Result)
                {
                    dataList = employe.Cast<AccessRightsEntityDetails>().ToList();
                }
                return dataList;

                // return Result;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
      
        public IEnumerable<AccessRightDetails> BindAccessRightDetails(string userid,string UserType)
        {
            // List<DownloadMandateDetails> dataList = new List<DownloadMandateDetails>();
            try
            {
                var Result = dbcontext.MultipleResults("[dbo].[Sp_LinkSetup_AccessRights]").With<AccessRightDetails>().Execute("@QueryType", "@UserID", "@UserType", "GetLinksForUser", userid, DbSecurity.Decrypt(HttpContext.Current.Server.UrlDecode(UserType.Replace("_", "%"))));

                foreach (var employee in Result)
                {
                    dataList1 = employee.Cast<AccessRightDetails>().ToList();
                }
                return dataList1;

                // return Result;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        

              public Dictionary<string, object> Insertdata(string userid, string storeIsActive, string storeIsRead, string storeLinkID)
           {
           
            try
            {
                var Result = Common.Getdata(dbcontext.MultipleResults("[dbo].[Sp_Mandate]").With<DownloadMandateGridDetails>().Execute("@QueryType", "@UserId", "@strToDate", "@strFromDate", "@strTable", "@RejectedReason", "RejectdataDateWise"));
                return Result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public string GetXmlByDatable(DataTable dtObjectforXml)
        {
            if (dtObjectforXml == null)
                return "";
            if (dtObjectforXml.Rows.Count == 0)
                return "";

            if (dtObjectforXml.TableName == "")
                dtObjectforXml.TableName = "dtXml";

            XmlDocument objectXmlDocument = new XmlDocument();
            XmlElement objElement = objectXmlDocument.CreateElement(dtObjectforXml.TableName);

            for (int iRecordCounter = 0; iRecordCounter < dtObjectforXml.Rows.Count; iRecordCounter++)
            {
                // Generate XmlObject and Append Nodes by calling a Child function.
                objElement.AppendChild(BuildXmlElement(dtObjectforXml.Rows[iRecordCounter], objectXmlDocument));
            }

            objectXmlDocument.AppendChild(objElement);
            return objectXmlDocument.OuterXml;
        }

        private XmlElement BuildXmlElement(DataRow drObjectforXml, XmlDocument objectXmlDocument)
        {
            XmlElement XmlElement = objectXmlDocument.CreateElement(drObjectforXml.Table.TableName);
            for (int iColumnCounter = 0; iColumnCounter < drObjectforXml.Table.Columns.Count; iColumnCounter++)
            {
                XmlElement.SetAttribute(drObjectforXml.Table.Columns[iColumnCounter].ColumnName, Convert.ToString(drObjectforXml[iColumnCounter].ToString()));
            }

            return XmlElement;
        }

    }
}