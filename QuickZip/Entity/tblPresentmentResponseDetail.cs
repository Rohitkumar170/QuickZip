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
    
    public partial class tblPresentmentResponseDetail
    {
        public long ResheaderDetId { get; set; }
        public long ResheaderId { get; set; }
        public Nullable<long> ACHTransactionCode { get; set; }
        public string Control9 { get; set; }
        public string DestinationAccountType { get; set; }
        public string LedgerFolioNumber { get; set; }
        public string Control15 { get; set; }
        public string BeneficiaryAccountHolderName { get; set; }
        public string Control99 { get; set; }
        public string Control7 { get; set; }
        public string UserName { get; set; }
        public string Control13 { get; set; }
        public Nullable<decimal> Amount { get; set; }
        public string ReservedACHItemSeqNo { get; set; }
        public string ReservedChecksum { get; set; }
        public string ReservedFlagforsuccessreturn { get; set; }
        public string ReservedReasonCode { get; set; }
        public string DestinationBankIFSCMICRIIN { get; set; }
        public string BeneficiaryBankAccountnumber { get; set; }
        public string SponsorBankIFSCMICRIIN { get; set; }
        public string UserNumber { get; set; }
        public string TransactionReference { get; set; }
        public string ProductType { get; set; }
        public string BeneficiaryAadhaarNumber { get; set; }
        public string UMRN { get; set; }
        public string Filer7 { get; set; }
        public Nullable<long> CreatedBy { get; set; }
        public Nullable<long> UpdatedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
    }
}
