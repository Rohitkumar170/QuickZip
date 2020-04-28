import * as tslib_1 from "tslib";
/// <reference path="../../services/accessrights/access-rights.service.ts" />
/// <reference path="../../../models/accessrights/access-rights-entity-details.ts" />
import { Component } from '@angular/core';
import { AccessRightsService } from '../../services/accessrights/access-rights.service';
var AccessRightsComponent = /** @class */ (function () {
    function AccessRightsComponent(_accessRightsService) {
        this._accessRightsService = _accessRightsService;
        this.storeLinkID = [0, 1, 2, 3];
        this.storeIsRead = [true, true, false, false];
        this.storeIsActive = [true, true, false, false];
        this.Ischecked = 0;
    }
    AccessRightsComponent.prototype.ngOnInit = function () {
        this.getEntityDetails();
    };
    AccessRightsComponent.prototype.getEntityDetails = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this._accessRightsService.getEntityDetails(item.UserType, item.ReferenceId).subscribe(function (res) { return _this.entitydDetails = res; }, function (error) { return console.log(error); });
    };
    AccessRightsComponent.prototype.getLinksForUser = function (data) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        //alert(data.userid)
        //alert(data)
        //userid
        this._accessRightsService.getLinksForUser(data, item.UserType).subscribe(function (res) {
            _this.AccessRightDetails = res,
                // this.checkAccessRights(res),
                function (error) { return console.log(error); };
        });
        this.InsertData(data);
    };
    AccessRightsComponent.prototype.checkAccessRights = function (data) {
        //if (event.target.checked) {
        //    this.storeLinkID.push(data.LinkID);
        //    this.storeIsRead.push(data.IsRead);
        //    if (data.IsRead == true) {
        //        this.storeIsActive.push(true);
        //    }
        //    else {
        //        this.storeIsActive.push(false);
        //    }
        //}
        //else {
        //    this.storeIsActive.pop();
        //    this.storeIsRead.pop();
        //    this.storeIsActive.pop();
        //}
        var ids = data.LinkID;
        if (document.getElementById(ids).checked == true) {
            this.storeLinkID.push(data.LinkID);
            this.storeIsRead.push(data.IsRead);
            if (data.IsRead == true) {
                this.storeIsActive.push(true);
            }
            else {
                this.storeIsActive.push(false);
            }
        }
        else {
            this.storeIsActive.pop();
            this.storeIsRead.pop();
            this.storeIsActive.pop();
        }
        alert(this.storeLinkID);
        alert(this.storeIsRead);
        alert(this.storeIsActive);
    };
    AccessRightsComponent.prototype.InsertData = function (userid) {
        var _this = this;
        alert('hi');
        this._accessRightsService.getInsertdata(userid, this.storeIsActive, this.storeIsRead, this.storeLinkID).subscribe(function (res) { return _this.AccessRightDetails = res; }, function (error) { return console.log(error); });
    };
    AccessRightsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-access-rights',
            templateUrl: './access-rights.component.html',
            styleUrls: ['./access-rights.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AccessRightsService])
    ], AccessRightsComponent);
    return AccessRightsComponent;
}());
export { AccessRightsComponent };
//# sourceMappingURL=access-rights.component.js.map