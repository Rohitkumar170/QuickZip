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
    
    public partial class tblNPCIResponseFromService
    {
        public long REsID { get; set; }
        public string MndtReqId { get; set; }
        public string Accptd { get; set; }
        public string RejectBy { get; set; }
        public string ErrorDesc { get; set; }
        public string ReasonDesc { get; set; }
        public string npcirefmsgID { get; set; }
        public string MerchantID { get; set; }
        public string ErrorCode { get; set; }
        public string ReasonCode { get; set; }
        public string ReqInitDate { get; set; }
        public string AccptRefNo { get; set; }
        public string UMRN { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
        public Nullable<long> CreatedBy { get; set; }
        public Nullable<long> UpdatedBy { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public string YoekiResponse { get; set; }
        public Nullable<long> MandateId { get; set; }
    }
}
