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
    
    public partial class tblMandateFile
    {
        public long MandateFileId { get; set; }
        public Nullable<long> MandateId { get; set; }
        public string ImagePath { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public System.DateTime UpdatedOn { get; set; }
        public long CreatedBy { get; set; }
        public long UpdatedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
    }
}
