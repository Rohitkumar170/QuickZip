﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace QuickZip
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}/{id1}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
