using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;

namespace Iace.User
{
    [Serializable]
    public class AccessRight
    {
        #region private Variables

        private int _RoleMenuId;
        private int _RoleId;
        private int _SubMenuId;
        private bool _IsEditable;
        private bool _IsAddable;
        private bool _IsDeletable;
        private bool _IsViewable;
        private bool _IsActive;
        private bool _IsDeleted;
        private DateTime _CreatedOn;
        private DateTime _UpdatedOn;

        #endregion private Variables

        #region public Properties

        public int RoleMenuId
        {
            get
            {
                return _RoleMenuId;
            }
            set
            {
                _RoleMenuId = value;
            }
        }
        public int RoleId
        {
            get
            {
                return _RoleId;
            }
            set
            {
                _RoleId = value;
            }
        }
        public int SubMenuId
        {
            get
            {
                return _SubMenuId;
            }
            set
            {
                _SubMenuId = value;
            }
        }
        public bool IsEditable
        {
            get
            {
                return _IsEditable;
            }
            set
            {
                _IsEditable = value;
            }
        }
        public bool IsAddable
        {
            get
            {
                return _IsAddable;
            }
            set
            {
                _IsAddable = value;
            }
        }
        public bool IsDeletable
        {
            get
            {
                return _IsDeletable;
            }
            set
            {
                _IsDeletable = value;
            }
        }
        private bool IsViewable
        {
            get
            {
                return _IsViewable;
            }
            set
            {
                _IsViewable = value;
            }
        }
        public bool IsActive
        {
            get
            {
                return _IsActive;
            }
            set
            {
                _IsActive = value;
            }
        }
        public bool IsDeleted
        {
            get
            {
                return _IsDeleted;
            }
            set
            {
                _IsDeleted = value;
            }
        }
        public DateTime CreatedOn
        {
            get
            {
                return _CreatedOn;
            }
            set
            {
                _CreatedOn = value;
            }
        }
        public DateTime UpdatedOn
        {
            get
            {
                return _UpdatedOn;
            }
            set
            {
                _UpdatedOn = value;
            }
        }


        #endregion public Properties


        #region Constructor

        /// <summary>
        /// Non Parameterize Constructor
        /// </summary>
        public AccessRight()
        {

        }

        public AccessRight(SqlDataReader myReader)
        {

            _RoleMenuId = myReader.GetInt32(myReader.GetOrdinal("_RoleMenuId"));
            _RoleId = myReader.GetInt32(myReader.GetOrdinal("_RoleId"));
            _SubMenuId = myReader.GetInt32(myReader.GetOrdinal("_SubMenuId"));
            _IsEditable = myReader.GetBoolean(myReader.GetOrdinal("_IsEditable"));
            _IsAddable = myReader.GetBoolean(myReader.GetOrdinal("_IsAddable"));
            _IsDeletable = myReader.GetBoolean(myReader.GetOrdinal("_IsDeletable"));
            _IsViewable = myReader.GetBoolean(myReader.GetOrdinal("_IsViewable"));
            _IsActive = myReader.GetBoolean(myReader.GetOrdinal("_IsActive"));
            _IsDeleted = myReader.GetBoolean(myReader.GetOrdinal("_IsDeleted"));
            _CreatedOn = myReader.GetDateTime(myReader.GetOrdinal("_CreatedOn"));
            _UpdatedOn = myReader.GetDateTime(myReader.GetOrdinal("_UpdatedOn"));

        }


        #endregion Constructor

        //#region Public Functions

        ///// <summary>
        ///// Used to get the List of Menu Permitted to access from Header
        ///// </summary>
        ///// <param name="objRoleAccessList"></param>
        ///// <returns></returns>
        //public static List<AccessRight> GetPermittedHeaderMenu(List<AccessRight> objRoleAccessList)
        //{
        //    objRoleAccessList = objRoleAccessList.Where(x => x.MenuParentId == 1).ToList<AccessRight>();
        //    objRoleAccessList = objRoleAccessList.Where(x => x.AccessAllowed == 1).ToList<AccessRight>();

        //    return objRoleAccessList;
        //}

        ///// <summary>
        ///// Used to get the List of Menu Permitted to access from Left Menu
        ///// </summary>
        ///// <param name="objRoleAccessList"></param>
        ///// <param name="HeaderMenuId"></param>
        ///// <returns></returns>
        //public static bool GetPermittedLeftMenu(List<AccessRight> objRoleAccessList, ref List<AccessRight> objPermittedLeftMenuList, int HeaderMenuId)
        //{
        //    List<AccessRight> objLeftMenuWithSameParent = new List<AccessRight>();

        //    objLeftMenuWithSameParent = objRoleAccessList.Where(x => x.MenuParentId == HeaderMenuId).ToList<AccessRight>();
        //    objLeftMenuWithSameParent = objLeftMenuWithSameParent.Where(x => x.AccessAllowed == 1).ToList<AccessRight>();
        //    objLeftMenuWithSameParent = objLeftMenuWithSameParent.Where(x => x.MenuLocation.CompareTo("L") == 0).ToList<AccessRight>();

        //    if (objLeftMenuWithSameParent.Count > 0)
        //    {
        //        foreach (AccessRight item in objLeftMenuWithSameParent)
        //        {
        //            objPermittedLeftMenuList.Add(item);
        //            GetPermittedLeftMenu(objRoleAccessList, ref objPermittedLeftMenuList, item.MenuId);
        //        }
        //    }
        //    return true;
        //}

        //public static bool GetPermittedRightMenu(List<AccessRight> objRoleAccessList, ref List<AccessRight> objPermittedRightMenuList, int HeaderMenuId)
        //{
        //    List<AccessRight> objLeftMenuWithSameParent = new List<AccessRight>();

        //    objLeftMenuWithSameParent = objRoleAccessList.Where(x => x.MenuParentId == HeaderMenuId).ToList<AccessRight>();
        //    objLeftMenuWithSameParent = objLeftMenuWithSameParent.Where(x => x.AccessAllowed == 1).ToList<AccessRight>();
        //    objLeftMenuWithSameParent = objLeftMenuWithSameParent.Where(x => x.MenuLocation.CompareTo("R") == 0).ToList<AccessRight>();

        //    if (objLeftMenuWithSameParent.Count > 0)
        //    {
        //        foreach (AccessRight item in objLeftMenuWithSameParent)
        //        {
        //            objPermittedRightMenuList.Add(item);
        //            //GetPermittedRightMenu(objRoleAccessList, ref objPermittedRightMenuList, item.MenuId);
        //        }
        //    }
        //    return true;
        //}

        //// Old function Working fine
        ////public static List<AccessRight> GetPermittedLeftMenu(ref List<AccessRight> objRoleAccessList, int HeaderMenuId)
        ////{
        ////    List<AccessRight> objPermittedRoleAccessList = new List<AccessRight>(); 
        ////    if (HeaderMenuId != 0)
        ////    {
        ////        objRoleAccessList = objRoleAccessList.Where(x => x.AccessAllowed == 1).ToList<AccessRight>();
        ////        foreach (AccessRight item in objRoleAccessList)
        ////        {
        ////            if (item._MenuParentId == HeaderMenuId)
        ////            {
        ////                item.CurrentMenu = true; 
        ////            }
        ////            else
        ////            {
        ////                item.CurrentMenu = false;
        ////            }
        ////        }
        ////        objPermittedRoleAccessList = objRoleAccessList.Where(x => x.MenuParentId == HeaderMenuId).ToList<AccessRight>();          
        ////    }
        ////    else
        ////    {
        ////        objPermittedRoleAccessList = objRoleAccessList.Where(x => x.MenuParentId > 1).ToList<AccessRight>();
        ////        objPermittedRoleAccessList = objPermittedRoleAccessList.Where(x => x.CurrentMenu == true ).ToList<AccessRight>();          
        ////    }


        ////    return objPermittedRoleAccessList;
        ////}



        //#endregion Public Functions
    }
}

