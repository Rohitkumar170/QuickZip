//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QuickZip.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblEntityBankSetup
    {
        public long EntityBankSetupId { get; set; }
        public Nullable<long> EntityId { get; set; }
        public Nullable<long> BankId { get; set; }
        public Nullable<bool> IsFileFormatXml { get; set; }
        public Nullable<bool> IsFileFormatExcel { get; set; }
        public Nullable<bool> IsFileFormatCsv { get; set; }
        public Nullable<bool> IsFileSendDaily { get; set; }
        public Nullable<bool> IsFileSendWeekly { get; set; }
        public Nullable<bool> IsFileSendMonthly { get; set; }
        public string TimeDuration { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
        public Nullable<long> CreatedBy { get; set; }
        public Nullable<long> UpdatedBy { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public string WeeklyDates { get; set; }
        public string MonthlyDate { get; set; }
        public string DailyTime { get; set; }
        public bool IsAdhoc { get; set; }
        public string AdhocDates { get; set; }
    }
}
