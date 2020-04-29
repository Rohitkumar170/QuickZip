import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BuldEmandateService } from '../../../app/Services/BulkEMandate/buld-emandate.service';
var BulkEmandateComponent = /** @class */ (function () {
    function BulkEmandateComponent(myservice) {
        this.myservice = myservice;
        this.ActivityType = 'E';
        this.topVal = 50;
        this.EntityId = '10';
    }
    BulkEmandateComponent.prototype.ngOnInit = function () {
        //ActivityType: string = 'p';
        var item = JSON.parse(sessionStorage.getItem('User'));
        //sessionStorage.setItem('ReferenceId', JSON.stringify(data[0]));
        //let item1 = JSON.parse(sessionStorage.getItem('ReferenceId'));
        // alert(item1.ReferenceId);
        this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
    };
    BulkEmandateComponent.prototype.BindGrid = function (EntityId, topVal, ActivityType) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        //  alert(item.UserId);
        // console.log(item.UserId);
        //  console.log(ActivityType);
        this.myservice.GetGridAllData(item.UserId, EntityId, topVal, ActivityType).subscribe(function (res) {
            console.log(res);
            // console.log(res.length);
            // alert(res);
            _this.tabledata = res;
            alert(_this.tabledata.length);
            // var datalength = this.tabledata.length;
            // alert(JSON.stringify(res));
            //var Count = JSON.parse(res).length;
        });
    };
    BulkEmandateComponent.prototype.pagenext = function () {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.topVal += 50;
        //  console.log(this.topVal);
        this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
    };
    BulkEmandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bulk-emandate',
            templateUrl: './bulk-emandate.component.html',
            styleUrls: ['./bulk-emandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BuldEmandateService])
    ], BulkEmandateComponent);
    return BulkEmandateComponent;
}());
export { BulkEmandateComponent };
//# sourceMappingURL=bulk-emandate.component.js.map