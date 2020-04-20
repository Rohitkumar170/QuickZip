using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Xml;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Net.NetworkInformation;
using User;

namespace Iace.User
{
    [Serializable]
    public class User
    {
        #region User Properties

        public int UserId { get; set; }
        public string UserType { get; set; }
        public string BranchId { get; set; }

        public string IsBulkMandate { get; set; }
        public string IsMandate { get; set; }

        public string BranchName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PasswordKey { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public long ReferenceId { get; set; }
        public string UserCode { get; set; }
        public int OrgId { get; set; }
        public int LegalId { get; set; }

        public int ModuleId { get; set; }
        public int DisplayOrderNo { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public int MenuId { get; set; }
        public int SubMenuId { get; set; }
        public string MenuName { get; set; }
        public string TitleHead { get; set; }
        public string URL { get; set; }



        public int RoleMenuId { get; set; }

        public bool IsEditable { get; set; }
        public bool IsAddable { get; set; }
        public bool IsViewable { get; set; }

        public bool IsDeletable { get; set; }
        public DateTime LastLogin { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public int CreatedBy { get; set; }
        public int UpdatedBy { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public bool IsLoginFirstTime { get; set; }
        public bool IsDefaultPswdChange { get; set; }

        #endregion User Properties

       
        // Used to Save the given User to Current Session
        public static bool SaveUserToSession(List<Logindetails> dataList)
        {
           
            User objNewUser = new User();
            objNewUser.UserId = Convert.ToInt32(dataList.Cast<Logindetails>().ToList().Select(x => x.UserId).First().ToString());
            //objNewUser.CollegeSysCode = Convert.ToInt32(dsUser.Tables[0].Rows[0]["CollegeSysCode"]);
            objNewUser.ReferenceId = Convert.ToInt64(dataList.Cast<Logindetails>().ToList().Select(x => x.ReferenceId).First().ToString());
            objNewUser.UserName = Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.UserName).First().ToString());
            objNewUser.Password = Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.Password).First().ToString());
            objNewUser.PasswordKey = Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.PasswordKey).First().ToString());
            //  objNewUser.RoleId = Convert.ToInt32(dsUser.Tables[0].Rows[0]["RoleId"]);
            //  objNewUser.RoleName = Convert.ToString(dsUser.Tables[0].Rows[0]["RoleName"]);
            objNewUser.UserCode = Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.UserCode).First().ToString());

            objNewUser.UserType = Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.UserType).First().ToString());
            objNewUser.BranchId = Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.BranchId).First().ToString());
            objNewUser.BranchName = Convert.ToString(dataList.Cast<Logindetails>().ToList().Select(x => x.BranchName).First().ToString());
            objNewUser.IsDefaultPswdChange = Convert.ToBoolean(dataList.Cast<Logindetails>().ToList().Select(x => x.IsDefaultPswdChange).First().ToString());


            //objNewUser.IsBulkMandate = Convert.ToString(dsUser.Tables[0].Rows[0]["IsBulkMandate"]);
            //objNewUser.IsMandate = Convert.ToString(dsUser.Tables[0].Rows[0]["IsMandate"]);
            //objNewUser.GroupMailId = Convert.ToString(dsUser.Tables[0].Rows[0]["GroupMailId"]);

            //objNewUser.CollegeType = Convert.ToString(dsUser.Tables[0].Rows[0]["CollegeType"]);
            //objNewUser.AccessScope = Convert.ToInt32(dsUser.Tables[0].Rows[0]["AccessScope"]);
            //objNewUser.IsDemoUser = Convert.ToBoolean(dsUser.Tables[0].Rows[0]["IsDemoUser"]);
            ////objNewUser.IsSetupCompleted = Convert.ToString(dsUser.Tables[0].Rows[0]["SetupCounter"]);

            //if (Convert.ToInt32(dsUser.Tables[0].Rows[0]["SetupCounter"]) < 4)
            //{ objNewUser.IsSetupCompleted = "0"; }
            //else
            //{ objNewUser.IsSetupCompleted = "1"; }

            objNewUser.LastLogin = Convert.ToDateTime(dataList.Cast<Logindetails>().ToList().Select(x => x.LastLogin).First().ToString());
            objNewUser.IsActive = Convert.ToBoolean(dataList.Cast<Logindetails>().ToList().Select(x => x.IsActive).First().ToString());
            objNewUser.IsDeleted = Convert.ToBoolean(dataList.Cast<Logindetails>().ToList().Select(x => x.IsDeleted).First().ToString());
            objNewUser.CreatedBy = Convert.ToInt32(dataList.Cast<Logindetails>().ToList().Select(x => x.CreatedBy).First().ToString());
            objNewUser.CreatedOn = Convert.ToDateTime(dataList.Cast<Logindetails>().ToList().Select(x => x.CreatedOn).First().ToString());
            //   objNewUser.UpdatedBy = Convert.ToInt32(dsUser.Tables[0].Rows[0]["UpdatedBy"]);
            //   objNewUser.UpdatedOn = Convert.ToDateTime(dsUser.Tables[0].Rows[0]["UpdatedOn"]);
            //   objNewUser.IsLoginFirstTime = Convert.ToBoolean(dsUser.Tables[0].Rows[0]["IsLoginFirstTime"]);

            //if (dsUser.Tables[0].Columns.Contains("SecureLoginURL"))
            //    objNewUser.SecureLoginURL = Convert.ToString(dsUser.Tables[0].Rows[0]["SecureLoginURL"]);

            //if (dsUser.Tables[0].Columns.Contains("RoleGroupType"))
            //    objNewUser.RoleGroupType = Convert.ToString(dsUser.Tables[0].Rows[0]["RoleGroupType"]);
            //if (dsUser.Tables[0].Columns.Contains("IsLoginFirstTime"))
            //    objNewUser.IsLoginFirstTime = Convert.ToBoolean(dsUser.Tables[0].Rows[0]["IsLoginFirstTime"]);

            Iace.User.CurrentUser.User = objNewUser;

            return true;
        }

    }
}
