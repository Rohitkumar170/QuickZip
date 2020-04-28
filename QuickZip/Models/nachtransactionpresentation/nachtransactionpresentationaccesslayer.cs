using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuickZip.Entity;
using BusinessLibrary;
namespace QuickZip.Models.nachtransactionpresentation
{
    public class nachtransactionpresentationaccesslayer
    {
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
        List<Nachtransactionpresentation> dataList = new List<Nachtransactionpresentation>();
        List<NachTransactionPrsentationBindForm> dataList1 = new List<NachTransactionPrsentationBindForm>();
        
        //public Dictionary<string, object> BankBind(string UserId,string EntityId)
             public IEnumerable<Nachtransactionpresentation> BankBind(string UserId, string EntityId)
        {
            try

            {

                var Result = dbcontext.MultipleResults("[dbo].[Sp_Presenment]").With<Nachtransactionpresentation>().Execute("@QueryType", "@UserId", "@EntityId", "Dropdown", UserId, EntityId);
                foreach (var Nachtransactionpresentation in Result)
                {
                    dataList = Nachtransactionpresentation.Cast<Nachtransactionpresentation>().ToList();

                }
                return dataList;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Dictionary<string, object> CheckUser(string UserId, string EntityId)
        {
            try
            {
                var Result = Common.Getdata(dbcontext.MultipleResults("[dbo].[Sp_Presenment]").With<NachTransactionCheckUser>().Execute("@QueryType", "@UserId", "@EntityId", "CheckUser", UserId, EntityId));
                return Result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<NachTransactionPrsentationBindForm> BindGridForm(string Bank,string UserId, string EntityId)
        {
            try

            {
                var Result = dbcontext.MultipleResults("[dbo].[Sp_Presenment]").With<NachTransactionPrsentationBindForm>().Execute("@QueryType", "@Bank_ID", "@UserId", "@EntityId", "BindBankDropdownData", Bank, UserId, EntityId);
                foreach (var Nachtransaction in Result)
                {
                    dataList1 = Nachtransaction.Cast<NachTransactionPrsentationBindForm>().ToList();

                }
                return dataList1;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}