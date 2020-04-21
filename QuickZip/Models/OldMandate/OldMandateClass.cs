using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessLibrary;
using QuickZip.Entity;
using QuickZip.Models;

namespace QuickZip.Models.OldMandate
{
    public class OldMandateClass
    {
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
        List<OldMandateAttribute> dataList = new List<OldMandateAttribute>();

        public IEnumerable<OldMandateAttribute> GetUserBankData(string UserId)
        {
            try
            {

                var Data = dbcontext.MultipleResults("[dbo].[Sp_Mandate]").With<OldMandateAttribute>().Execute("@QueryType", "@UserId", "UserBank",DbSecurity.Decrypt(UserId));
                foreach(var dt in Data)
                {
                    dataList = dt.Cast<OldMandateAttribute>().ToList();
                }
                return dataList;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }


        //search by Reference

        public IEnumerable<OldMandateAttribute> GetAllDataByRefrence(string UserId,string Refrence1)
        {
            try
            {
                var Data = dbcontext.MultipleResults("[dbo].[Sp_Mandate]").With<OldMandateAttribute>().Execute("@QueryType", "@UserId", "@Refrence1", "grdOldMandateRefrenceise",DbSecurity.Decrypt(UserId),Refrence1);
                foreach (var dt in Data)
                {
                    dataList = dt.Cast<OldMandateAttribute>().ToList();
                }
                return dataList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public IEnumerable<OldMandateAttribute> GetAllDataByDate(string UserId, string strFromDate,string strToDate,string SponsorBankCode)
        {
            try
            {
                var Data = dbcontext.MultipleResults("[dbo].[Sp_Mandate]").With<OldMandateAttribute>().Execute("@QueryType", "@UserId", "@strFromDate", "@strToDate", "@SponsorBankCode", "grdOldMandateDateWise", DbSecurity.Decrypt(UserId), strFromDate, strToDate, SponsorBankCode);
                foreach (var dt in Data)
                {
                    dataList = dt.Cast<OldMandateAttribute>().ToList();
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