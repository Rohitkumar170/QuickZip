﻿using QuickZip.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace QuickZip
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                constraints:new
                {
                    serverRoute=new ServerRouteConstraint(
                       url =>
                       {
                           return url.PathAndQuery.StartsWith("/Settings",
                       StringComparison.InvariantCultureIgnoreCase);
                       })
                }
            );

            routes.MapRoute(
               name: "Angular",
               url: "{*url}",
               defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }

               );

        }
    }
}
