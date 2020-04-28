export interface BankBind {

    SponsorBankCodeId: number;
    SponsorBankCodeName: string;

}

export interface CheckUser {

    PresentmentChecker: string;
    PresentmentMaker: string;
    admin: string;

}


export interface BindGridForm {

    AccountNumber: string;
    SponsorBankcode: string;
    UtilityCode: string;
    IFSC: string;
    username: string;
    UserID: number;
    Bank_ID: string;
}