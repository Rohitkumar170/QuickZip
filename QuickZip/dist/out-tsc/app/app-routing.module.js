import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
var routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'ChangePassword/:Id', component: ChangePasswordComponent },
    {
        path: "dashboard",
        children: [{
                path: "",
                loadChildren: './common-layout/layout.module#LayoutModule'
                //loadChildren: "app/src/Module#LayoutModule"
            }
        ]
    }
    //{
    //    path: '', component: HeaderComponent,
    //    children: [
    //        { path: 'user', component: UserComponent},
    //        { path: 'dashboard', component: DashboardComponent },
    //        { path: 'NachMandate', component: NachMandateComponent },
    //        { path: 'HistoricalMandate', component: HistoricalMandateComponent },
    //        { path: 'Downloadmandate', component: DownloadmandateComponent },
    //        { path: 'DownloadEmandate', component: DownloadEmandateComponent },
    //        { path: 'Downloadoldmandate', component: DownloadoldmandateComponent },
    //        { path: 'Downloadoldemandate', component: DownloadoldemandateComponent },
    //        { path: 'Umrnhistory', component: UmrnhistoryComponent },
    //        { path: 'Umrnupload', component: UmrnuploadComponent },
    //        { path: 'Demophysical', component: DemophysicalComponent },
    //        { path: 'Demoemandate', component: DemoemandateComponent },
    //        { path: 'Allumrn', component: AllumrnComponent },
    //        { path: 'Nachtransactionpresentation', component: NachtransactionpresentationComponent },
    //    ]
    //}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map