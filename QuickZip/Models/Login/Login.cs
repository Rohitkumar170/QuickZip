using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessLibrary;
using QuickZip.Entity;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Net.NetworkInformation;
using QuickZip.Models.ForgotPassword;
using System.Net.Http;
namespace QuickZip.Models.Login
{
    public class Login
    {
        QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
        List<CommonFlag> common = new List<CommonFlag>();
        CommonFlag Flag = new CommonFlag();
        public IEnumerable<CommonFlag> Binddetails(string Username, string Password)
        {
            List<Logindetails> dataList = new List<Logindetails>();
            try
            {
                var Result = dbcontext.MultipleResults("[dbo].[sp_UserLogin]").With<Logindetails>().Execute("@QueryType", "@UserName", "GetUser",Username);
                foreach (var Logindata in Result)
                {
                    dataList = Logindata.Cast<Logindetails>().ToList();
                    if (dataList.Count > 0)
                    {
                        string strDbPassword = DbSecurity.Decrypt(Convert.ToString(Logindata.Cast<Logindetails>().ToList().Select(x => x.Password).First().ToString()), Convert.ToString(Logindata.Cast<Logindetails>().ToList().Select(x => x.PasswordKey).First().ToString()));
                        if (strDbPassword.Trim() != Password)
                        {
                            Flag.Flag = "0";
                            Flag.FlagValue = "Wrong Username or Password!!";
                            common.Add(Flag);
                        }
                        else
                        {
                            Random generator = new Random();
                            QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
                            var SaveLoginSessionTrxn = dbcontext.MultipleResults("[dbo].[sp_UserLogin]").With<SaveLoginSessionTrxn>().Execute("@QueryType", "@UserId", "@TokenID", "@IPAddress", "@MacAddress", "@IsLogin", "SaveLoginSessionTrxn", Convert.ToString(Logindata.Cast<Logindetails>().ToList().Select(x => x.UserId).First().ToString()), Convert.ToString(generator.Next(1, 1000000)), Convert.ToString(GetIpAddress()), Convert.ToString(GetMacAddress()), Convert.ToString(1));
                            foreach (var Existlogin in SaveLoginSessionTrxn)
                            {
                              //  if (Existlogin.Cast<SaveLoginSessionTrxn>().ToList().Select(x => x.SessionActive).First().ToString() == "0")
                              //  {
                                    #region Session creation
                                   // Iace.User.User.SaveUserToSession(dataList);
                                     Flag.IsRefrenceCheck =DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsRefrenceCheck).First().ToString()));
                                     Flag.IsOverPrintMandate = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsOverPrintMandate).First().ToString()));
                                     Flag.IsBulkMandate = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsBulkMandate).First().ToString()));
                                     Flag.IsMandate = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsMandate).First().ToString()));
                                    //NewCode
                                     Flag.IsMandateEdit = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsMandateEdit).First().ToString()));
                                     Flag.IsRefrenceEdit = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsRefrenceEdit).First().ToString()));
                                     Flag.IsEmandate = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsEmandate).First().ToString()));
                                     Flag.IsPhysical = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsPhysical).First().ToString()));
                                     Flag.IsZipShoreABPS = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsZipShoreABPS).First().ToString()));
                                     Flag.UserId = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.UserId).First().ToString()));
                                     Flag.ReferenceId = DbSecurity.Encrypt(dataList.Cast<Logindetails>().ToList().Select(x => x.ReferenceId).First().ToString());
                                     Flag.UserName  = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.UserName).First().ToString()));
                                     Flag.Password = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.Password).First().ToString()));
                                    Flag.PasswordKey = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.PasswordKey).First().ToString()));
                                    Flag.UserCode  = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.UserCode).First().ToString()));
                                    Flag.UserType  = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.UserType).First().ToString()));
                                    Flag.BranchId  = DbSecurity.Encrypt(dataList.Cast<Logindetails>().ToList().Select(x => x.BranchId).First().ToString());
                                    Flag.BranchName  = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.BranchName).First().ToString()));
                                    Flag.IsDefaultPswdChange = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsDefaultPswdChange).First().ToString()));
                                    Flag.LastLogin = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.LastLogin).First().ToString()));
                                    Flag.IsActive = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsActive).First().ToString()));
                                    Flag.IsDeleted = DbSecurity.Encrypt(Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.IsDeleted).First().ToString()));
                                    Flag.CreatedBy = DbSecurity.Encrypt(dataList.Cast<Logindetails>().ToList().Select(x => x.CreatedBy).First().ToString());
                                    Flag.CreatedOn = DbSecurity.Encrypt(dataList.Cast<Logindetails>().ToList().Select(x => x.CreatedOn).First().ToString());
                                    #endregion
                                
                                    Flag.Flag = "1";
                                    common.Add(Flag);
                                //}
                                //else {
                                //    Flag.Flag = "0";
                                //    Flag.FlagValue = "User already logged on. Either Try logging in after closing the current session or Try after some time!!";
                                //    common.Add(Flag);
                                //}
                            }
                        }
                    }
                    else {
                        Flag.Flag = "0";
                        Flag.FlagValue = "Invalid User!!";
                        common.Add(Flag);
                    }
                }
                    return common;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<CommonFlag> SendMail(string Username)
        {
            try
            {
                List<Value> dataList = new List<Value>(); List<UserDetails> dataList1 = new List<UserDetails>();
                var Result = dbcontext.MultipleResults("[dbo].[Sp_UserLogin]").With<Value>().With<UserDetails>().Execute("@QueryType", "@EmailId", "ChkEmail", Username);
                
                dataList = Result.FirstOrDefault().Cast<Value>().ToList();
                dataList1 = Result.LastOrDefault().Cast<UserDetails>().ToList();
                if (dataList.Cast<Value>().ToList().Select(x => x.value).First().ToString() == "1")
                {
                    if (dataList1.Count > 0)
                    {
                        using (StringWriter sw = new StringWriter())
                        {
                            using (HtmlTextWriter hw = new HtmlTextWriter(sw))
                            {
                                StringBuilder sb = new StringBuilder();
                                string WebAppUrl = ConfigurationManager.AppSettings["WebAppUrl"].ToString();
                                string SMTPHost = ConfigurationManager.AppSettings["Amazon_SMTPHost"].ToString();
                                string UserId = ConfigurationManager.AppSettings["Amazon_UserId"].ToString();
                                string MailPassword = ConfigurationManager.AppSettings["Amazon_MailPassword"].ToString();
                                string SMTPPort = ConfigurationManager.AppSettings["Amazon_SMTPPort"].ToString();
                                string SMTPEnableSsl = ConfigurationManager.AppSettings["Amazon_SMTPEnableSsl"].ToString();
                                string FromMailId = ConfigurationManager.AppSettings["Amazon_FromMailId"].ToString();
                                string Teamtext = ConfigurationManager.AppSettings["Team"].ToString();
                                sb.Append("Dear " + dataList1.Cast<UserDetails>().ToList().Select(x => x.UserName).First().ToString() + ",<br> <br>");
                                sb.Append("Please click on the below button to set a new Password . <br> <br>");
                                 string User = HttpContext.Current.Server.UrlEncode(DbSecurity.Encrypt(dataList1.Cast<UserDetails>().ToList().Select(x => x.UserId).First().ToString())).Replace("%", "_");
                                sb.Append("<a href=' " + WebAppUrl + "ChangePassword/"+ User + "' target='_blank'>");
                                sb.Append("<input style='background-color: #3965a9;color: #fff;padding: 3px 10px 3px 10px;' type='button' value='Change Password' /></a> </div>");

                                SmtpClient smtpClient = new SmtpClient();
                                MailMessage mailmsg = new MailMessage();
                                MailAddress mailaddress = new MailAddress(FromMailId);
                                mailmsg.To.Add(Username);
                                mailmsg.From = mailaddress;

                                mailmsg.Subject = "Recover Password";
                                mailmsg.IsBodyHtml = true;
                                mailmsg.Body = sb.ToString();

                                smtpClient.Host = SMTPHost;
                                smtpClient.Port = Convert.ToInt32(SMTPPort);
                                smtpClient.EnableSsl = Convert.ToBoolean(SMTPEnableSsl);
                                smtpClient.UseDefaultCredentials = true;
                                smtpClient.Credentials = new System.Net.NetworkCredential(UserId, MailPassword);
                                smtpClient.Send(mailmsg);
                                QuickCheckEmandate_AngularEntities dbcontext = new QuickCheckEmandate_AngularEntities();
                                dbcontext.MultipleResults("[dbo].[Sp_SendEmail]").With<Value>().Execute("@QueryType", "@MandateId", "@EmailCount", "@SmsCount", "SendMail", Convert.ToString(0), "1", "0");
                                Flag.Flag = "1";
                                common.Add(Flag);

                            }
                        }
                    }
                }

            }
            catch (Exception)
            {
                Flag.Flag = "1";
                common.Add(Flag);
            }

            return common;
        }
        public IEnumerable<CommonFlag> UpdateForgot(string Password, string Email)
        {
            List<Forgotflag> dataList = new List<Forgotflag>();
            string ChangePassword = string.Empty;
            string changePasswordKey = string.Empty;
            try
            {

                if (Password.Length >= 6)
                {
                    ChangePassword = DbSecurity.Encrypt(Password, ref changePasswordKey);
                    var Result = dbcontext.MultipleResults("[dbo].[sp_UserLogin]").With<Forgotflag>().Execute("@QueryType", "@ChangePassword", "@ChangePasswordKey",
                            "@UserId", "UpdatePassword", ChangePassword, changePasswordKey, DbSecurity.Decrypt(HttpContext.Current.Server.UrlDecode(Email.Replace("_", "%"))) );
                    dataList = Result.FirstOrDefault().Cast<Forgotflag>().ToList();
                    if (dataList.Count > 0)
                    {
                        Flag.Flag = "1";
                        Flag.FlagValue = "Password Updated Successfuly !!";
                        common.Add(Flag);
                    }
                    else
                    {
                        Flag.Flag = "0";
                        Flag.FlagValue = "Invalid UserId !!";
                        common.Add(Flag);
                    }
                }
                else
                {
                    Flag.Flag = "0";
                    Flag.FlagValue = "Minimum length of password is 6 !!";
                    common.Add(Flag);
                }
                
                return common;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private static string GetIpAddress()  // Get IP Address
        {
            IPHostEntry ipEntry = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress[] addr = ipEntry.AddressList;
            return addr[1].ToString();
        }
        private static string GetMacAddress()
        {
            string macAddresses = string.Empty;

            foreach (NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces())
            {
                if (nic.OperationalStatus == OperationalStatus.Up)
                {
                    macAddresses += nic.GetPhysicalAddress().ToString();
                    break;
                }
            }
            return macAddresses;
        }
    }

}