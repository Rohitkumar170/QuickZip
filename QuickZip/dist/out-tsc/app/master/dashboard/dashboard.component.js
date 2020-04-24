import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(
    //private router: Router
    ) {
        //if (this.router.url === "/Login" || this.router.url === "/ChangePassword/:Id") {
        //    this.isLoggedin = false; this.isChangePassword = false;
        //} else {
        //    this.isLoggedin = true; this.isChangePassword = true;
        //}  
    }
    DashboardComponent.prototype.onClick = function (event) {
        this.showModal = true;
    };
    DashboardComponent.prototype.hide = function () {
        this.showModal = false;
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map