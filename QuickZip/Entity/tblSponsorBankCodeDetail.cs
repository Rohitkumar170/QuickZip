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
    
    public partial class tblSponsorBankCodeDetail
    {
        public long SponsorBankCodeDetailId { get; set; }
        public string SponsorBankcode { get; set; }
        public string SponsorBankName { get; set; }
        public string IFSC { get; set; }
        public string UtilityCode { get; set; }
        public Nullable<long> EntityId { get; set; }
        public Nullable<System.DateTime> PresentmentDate { get; set; }
        public Nullable<System.TimeSpan> PresentmentTime { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
        public Nullable<long> CreatedBy { get; set; }
        public Nullable<long> UpdatedBy { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
    }
}
