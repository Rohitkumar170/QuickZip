(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["umrnhistory-umrnhistory-module-ngfactory"],{

/***/ "./ClientApp/app/master/umrnhistory/umrnhistory-routing.module.ts":
/*!************************************************************************!*\
  !*** ./ClientApp/app/master/umrnhistory/umrnhistory-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UmrnhistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmrnhistoryRoutingModule", function() { return UmrnhistoryRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _umrnhistory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./umrnhistory.component */ "./ClientApp/app/master/umrnhistory/umrnhistory.component.ts");


var routes = [{ path: '', component: _umrnhistory_component__WEBPACK_IMPORTED_MODULE_1__["UmrnhistoryComponent"] }];
var UmrnhistoryRoutingModule = /** @class */ (function () {
    function UmrnhistoryRoutingModule() {
    }
    return UmrnhistoryRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/master/umrnhistory/umrnhistory.component.css.shim.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./ClientApp/app/master/umrnhistory/umrnhistory.component.css.shim.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".card-header[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\n.boxhead[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    border: 2px solid #e6edf3;\r\n    border-radius: 4px;\r\n    left: -12px !important;\r\n    background-color: #f1f2f3;\r\n}\r\n\r\n#tblUmrnhistory[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    display: block;\r\n    max-height: 26vh;\r\n    border: 1px solid #d5d5d5;\r\n}\r\n\r\n#tblUmrnhistory[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        display: table;\r\n        table-layout: fixed;\r\n    }\r\n\r\n#tblUmrnhistory[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: table;\r\n    table-layout: fixed;\r\n}\r\n\r\n.boxsetting[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-left: 1%;\r\n}\r\n\r\n#maincontent[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 8%;\r\n    left: 14%;\r\n    width: 86%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbWFzdGVyL3Vtcm5oaXN0b3J5L3Vtcm5oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDBCQUEwQjtDQUM3Qjs7QUFFRztRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2Ysb0JBQW9CO0tBQ3ZCOztBQUdMO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztDQUNkIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvbWFzdGVyL3Vtcm5oaXN0b3J5L3Vtcm5oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uYm94aGVhZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U2ZWRmMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGxlZnQ6IC0xMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYzO1xyXG59XHJcblxyXG4jdGJsVW1ybmhpc3RvcnkgdGJvZHkge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDI2dmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNWQ1O1xyXG59XHJcblxyXG4gICAgI3RibFVtcm5oaXN0b3J5IHRib2R5IHRyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiN0YmxVbXJuaGlzdG9yeSB0aGVhZCB0ciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuLmJveHNldHRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuI21haW5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOCU7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICB3aWR0aDogODYlO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./ClientApp/app/master/umrnhistory/umrnhistory.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/master/umrnhistory/umrnhistory.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_UmrnhistoryComponent, View_UmrnhistoryComponent_0, View_UmrnhistoryComponent_Host_0, UmrnhistoryComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UmrnhistoryComponent", function() { return RenderType_UmrnhistoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UmrnhistoryComponent_0", function() { return View_UmrnhistoryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UmrnhistoryComponent_Host_0", function() { return View_UmrnhistoryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmrnhistoryComponentNgFactory", function() { return UmrnhistoryComponentNgFactory; });
/* harmony import */ var _umrnhistory_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./umrnhistory.component.css.shim.ngstyle */ "./ClientApp/app/master/umrnhistory/umrnhistory.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _umrnhistory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./umrnhistory.component */ "./ClientApp/app/master/umrnhistory/umrnhistory.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_UmrnhistoryComponent = [_umrnhistory_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UmrnhistoryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UmrnhistoryComponent, data: {} });

function View_UmrnhistoryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 88, "div", [["class", "main-content"], ["id", "maincontent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 87, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 34, "div", [["class", "col-md-12 col-sm-6 col-xs-4 contnt-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "col-sm-6 col-md-6 col-xs-3 no-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "legal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["UMRN History"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 30, "div", [["class", "rightmenu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 29, "div", [["class", "toolbar pull-right"], ["style", "display:none;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 28, "ul", [["class", "toolbar-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-download"], ["title", "Export"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Download E-Mandate Excel File "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-file-text"], ["title", "New"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Download Scanned Mandate "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-pencil-square-o"], ["title", "Edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Reject Mandate "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-floppy-o"], ["title", "Save"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Submit "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "li", [["style", "display: none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-key"], ["title", "Reset Password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Reset Password "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "li", [["style", "display: none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-times"], ["title", "Delete"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Delete "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "li", [["style", "display:none;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-reply"], ["title", "Back"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Back "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 25, "div", [["class", "col-md-12 col-sm-12 col-xs-12 boxsetting"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 24, "div", [["class", "col-md-12 col-sm-12 col-xs-12 boxhead"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 18, "div", [["class", "row no-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "div", [["class", "col-md-4 col-sm-4 col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "label", [["class", "col-sm-5 col-md-4 col-xs-4 control-label no-padding"], ["for", "form-field-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" UMRN "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "div", [["class", "col-sm-7 col-md-7 col-xs-7 no-padding-left displayinlineblock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 0, "input", [["class", "col-sm-12 col-md-12 col-xs-12"], ["style", "height: 22px;"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 5, "div", [["class", "col-md-4 col-sm-4 col-xs-12  no-padding "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "label", [["class", "col-sm-6 col-md-4 col-xs-4 control-label no-padding"], ["for", "form-field-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Customer Name "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "div", [["class", "col-sm-6 col-md-7 col-xs-7 no-padding-left displayinlineblock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "input", [["class", "col-sm-12 col-md-12 col-xs-12"], ["style", "height: 22px;"], ["type", "text"], ["value", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 5, "div", [["class", "col-md-4 col-sm-4 col-xs-12  no-padding "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "label", [["class", "col-sm-6 col-md-4 col-xs-4 control-label no-padding"], ["for", "form-field-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Reference Number "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "div", [["class", "col-sm-6 col-md-7 col-xs-7 no-padding-left displayinlineblock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, "input", [["class", "col-sm-12 col-md-12 col-xs-12"], ["style", "height: 22px;"], ["type", "text"], ["value", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 4, "div", [["class", "row no-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "div", [["class", "col-md-4 col-sm-4 col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 0, "div", [["class", "col-md-4 col-sm-4 col-xs-12  no-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 1, "div", [["class", "col-md-4 col-sm-4 col-xs-12  no-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "input", [["class", "col-md-2 col-sm-12 col-xs-12 btn btn-success"], ["id", "btnOk"], ["style", "margin-right: 12%; margin-top: 2%; margin-bottom: 2%;float:right;"], ["type", "button"], ["value", "Search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 25, "div", [["class", "col-md-12 col-sm-12 col-xs-12"], ["id", "tbldiv"], ["style", "margin-top:1%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 24, "table", [["id", "tblUmrnhistory"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "th", [["style", "width:150px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SR.No."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "th", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["UMRN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "th", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 1, "th", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reference Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "th", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 11, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "td", [["style", "width:150px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "td", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "td", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "td", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "td", [["style", "width:220px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Demo"]))], null, null); }
function View_UmrnhistoryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-umrnhistory", [], null, null, null, View_UmrnhistoryComponent_0, RenderType_UmrnhistoryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _umrnhistory_component__WEBPACK_IMPORTED_MODULE_2__["UmrnhistoryComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UmrnhistoryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-umrnhistory", _umrnhistory_component__WEBPACK_IMPORTED_MODULE_2__["UmrnhistoryComponent"], View_UmrnhistoryComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./ClientApp/app/master/umrnhistory/umrnhistory.component.ts":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/master/umrnhistory/umrnhistory.component.ts ***!
  \*******************************************************************/
/*! exports provided: UmrnhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmrnhistoryComponent", function() { return UmrnhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var UmrnhistoryComponent = /** @class */ (function () {
    function UmrnhistoryComponent() {
    }
    UmrnhistoryComponent.prototype.ngOnInit = function () {
    };
    return UmrnhistoryComponent;
}());



/***/ }),

/***/ "./ClientApp/app/master/umrnhistory/umrnhistory.module.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/master/umrnhistory/umrnhistory.module.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: UmrnhistoryModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmrnhistoryModuleNgFactory", function() { return UmrnhistoryModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _umrnhistory_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./umrnhistory.module */ "./ClientApp/app/master/umrnhistory/umrnhistory.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _umrnhistory_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./umrnhistory.component.ngfactory */ "./ClientApp/app/master/umrnhistory/umrnhistory.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _umrnhistory_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./umrnhistory-routing.module */ "./ClientApp/app/master/umrnhistory/umrnhistory-routing.module.ts");
/* harmony import */ var _umrnhistory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./umrnhistory.component */ "./ClientApp/app/master/umrnhistory/umrnhistory.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var UmrnhistoryModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_umrnhistory_module__WEBPACK_IMPORTED_MODULE_1__["UmrnhistoryModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _umrnhistory_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["UmrnhistoryComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _umrnhistory_routing_module__WEBPACK_IMPORTED_MODULE_6__["UmrnhistoryRoutingModule"], _umrnhistory_routing_module__WEBPACK_IMPORTED_MODULE_6__["UmrnhistoryRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _umrnhistory_module__WEBPACK_IMPORTED_MODULE_1__["UmrnhistoryModule"], _umrnhistory_module__WEBPACK_IMPORTED_MODULE_1__["UmrnhistoryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "", component: _umrnhistory_component__WEBPACK_IMPORTED_MODULE_7__["UmrnhistoryComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./ClientApp/app/master/umrnhistory/umrnhistory.module.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/master/umrnhistory/umrnhistory.module.ts ***!
  \****************************************************************/
/*! exports provided: UmrnhistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmrnhistoryModule", function() { return UmrnhistoryModule; });
var UmrnhistoryModule = /** @class */ (function () {
    function UmrnhistoryModule() {
    }
    return UmrnhistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=umrnhistory-umrnhistory-module-ngfactory.js.map