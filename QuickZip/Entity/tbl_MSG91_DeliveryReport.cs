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
    
    public partial class tbl_MSG91_DeliveryReport
    {
        public long DeliveryRequestId { get; set; }
        public string RequestId { get; set; }
        public Nullable<long> UserId { get; set; }
        public long SenderId { get; set; }
        public string CampaignName { get; set; }
        public string Desciption { get; set; }
        public byte Status { get; set; }
        public string PhoneNumber { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreatedOn { get; set; }
    }
}
