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
    
    public partial class GetMandateStatus_Result
    {
        public long MandateTransactionId { get; set; }
        public Nullable<long> MandateId { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public Nullable<long> EntityId { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public System.DateTime UpdatedOn { get; set; }
        public long CreatedBy { get; set; }
        public long UpdatedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public Nullable<long> TransactionNo { get; set; }
        public Nullable<long> ActivityID { get; set; }
    }
}
