import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var UserServiceService = /** @class */ (function () {
    function UserServiceService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    UserServiceService.prototype.getUser = function (EntityId, PageCount) {
        return this._http.get(this.baseUrl + 'api/User/getUserData/' + EntityId + '/' + PageCount);
    };
    UserServiceService.prototype.getMakers = function (EntityId, UserId) {
        return this._http.get(this.baseUrl + 'api/User/getMakers/' + EntityId + '/' + UserId);
    };
    UserServiceService.prototype.CheckIsPresentmentChecker = function (EntityId) {
        return this._http.get(this.baseUrl + 'api/User/CheckIsPresentmentChecker/' + EntityId);
    };
    UserServiceService.prototype.SaveUser = function (em, EntityId, UserId) {
        var body = em;
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/USer/SaveData/' + EntityId + '/' + UserId, body, {
            headers: headers
        });
    };
    UserServiceService.prototype.EditData = function (UserId) {
        return this._http.get(this.baseUrl + 'api/User/EditData/' + UserId);
    };
    UserServiceService.prototype.UpdateUser = function (em, EntityId, UserId, Id) {
        var body = em;
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/USer/UpdateData/' + EntityId + '/' + UserId + '/' + Id, body, {
            headers: headers
        });
    };
    UserServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], UserServiceService);
    return UserServiceService;
}());
export { UserServiceService };
//# sourceMappingURL=user-service.service.js.map