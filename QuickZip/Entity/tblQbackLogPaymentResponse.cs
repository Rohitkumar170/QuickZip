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
    
    public partial class tblQbackLogPaymentResponse
    {
        public long LogPaymentResponseId { get; set; }
        public long PaymentResponseId { get; set; }
        public Nullable<long> MandateId { get; set; }
        public Nullable<long> EntityId { get; set; }
        public string MessageCode { get; set; }
        public Nullable<long> ReqDateTime { get; set; }
        public string MerchantId { get; set; }
        public string TraceNo { get; set; }
        public string ResponseCode { get; set; }
        public string ErrorReason { get; set; }
        public string RRN { get; set; }
        public string BankRefNo { get; set; }
        public string BeniName { get; set; }
        public string ChkSum { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public System.DateTime UpdatedOn { get; set; }
        public long CreatedBy { get; set; }
        public long UpdatedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public Nullable<long> ActivityId { get; set; }
    }
}
