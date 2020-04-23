﻿using BusinessLibrary;
using QuickZip.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickZip.Models.UMRN_History
{
    public class UMRNHistoryDataAccess
    {
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
        List<UMRNHistoryClass> dataList = new List<UMRNHistoryClass>();

        public IEnumerable<UMRNHistoryClass> GetDataFromDB(UMRNHistoryClass UMRNHistoryClass)
        {
            try
            {
                var Result = dbcontext.MultipleResults("[dbo].[Sp_Presenment]").With<UMRNHistoryClass>().Execute("@QueryType", "@UMRN", "@customer1", "@Refrence1", "@UserID", "UMRNHistoryDetails", UMRNHistoryClass.UMRN, UMRNHistoryClass.customer1, UMRNHistoryClass.RefrNo,DbSecurity.Decrypt(UMRNHistoryClass.UserId));
                foreach (var Data in Result)
                {
                    dataList = Data.Cast<UMRNHistoryClass>().ToList();
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