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
    
    public partial class tblNPCIResponse
    {
        public long ResID { get; set; }
        public string LOTNO { get; set; }
        public string MessageID { get; set; }
        public string ProcessDate { get; set; }
        public string InstructingAgentMemberId { get; set; }
        public string InstructedAgentMemberId { get; set; }
        public string InstructedAgentName { get; set; }
        public string InitiatingPartyId { get; set; }
        public string MandateRequestId { get; set; }
        public string MandateCategory { get; set; }
        public string MandateCategoryName { get; set; }
        public string TXNtype { get; set; }
        public string RecurringoOneOff { get; set; }
        public string Frequency { get; set; }
        public string FirstCollectionDate { get; set; }
        public string FinalCollectionDate { get; set; }
        public string CollectionAmount { get; set; }
        public string MaximumAmount { get; set; }
        public string NameofUtility { get; set; }
        public string UtilityCode { get; set; }
        public string SponsorBankCode { get; set; }
        public string DebtorName { get; set; }
        public string ConsumerReferenceNo { get; set; }
        public string SchemePlanReferenceNo { get; set; }
        public string DebtorTelephoneNo { get; set; }
        public string DebtorMobileNo { get; set; }
        public string DebtorEmailAddress { get; set; }
        public string DebtorOtherDetails { get; set; }
        public string DestinationBankAccountNumber { get; set; }
        public string DestinationBankAccountType { get; set; }
        public string DestinationBankIFSCMICRcode { get; set; }
        public string DestinationBankName { get; set; }
        public string UMRN { get; set; }
        public string RESAcceptedRejected { get; set; }
        public string RESReasonCode { get; set; }
        public string ClosureDate { get; set; }
        public string REJECTREASON { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
        public Nullable<long> CreatedBy { get; set; }
        public Nullable<long> UpdatedBy { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public string AmountFixed { get; set; }
        public string Imagename { get; set; }
        public string SubStatus { get; set; }
        public string OutwardFileName { get; set; }
        public string Status { get; set; }
        public string FileName { get; set; }
        public string NewFileName { get; set; }
    }
}
