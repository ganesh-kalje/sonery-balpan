(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["celebrity-celebrity-module"],{

/***/ "./src/app/admin/celebrity/add/add.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/celebrity/add/add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]> \r\n  <form>\r\n    <p-panel header=\"Add Celebrity\">\r\n      <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Name *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Address *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Mobile *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Username *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Password *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Confirm Password *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            ADHAR Card Number:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            PAN Card Number:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input pInputText type=\"text\"  placeholder=\"Required\"/>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\"></div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <button pButton type=\"submit\" label=\"Submit\"></button>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\"></div>\r\n        </div>\r\n      </div>\r\n    </p-panel>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/celebrity/add/add.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/celebrity/add/add.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/celebrity/add/add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/celebrity/add/add.component.ts ***!
  \******************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/admin/celebrity/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/admin/celebrity/add/add.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/admin/celebrity/celebrity-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/celebrity/celebrity-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CelebrityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityRoutingModule", function() { return CelebrityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/celebrity/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/admin/celebrity/add/add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    },
    {
        path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    }
];
var CelebrityRoutingModule = /** @class */ (function () {
    function CelebrityRoutingModule() {
    }
    CelebrityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CelebrityRoutingModule);
    return CelebrityRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/celebrity/celebrity.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/celebrity/celebrity.module.ts ***!
  \*****************************************************/
/*! exports provided: CelebrityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityModule", function() { return CelebrityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _celebrity_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./celebrity-routing.module */ "./src/app/admin/celebrity/celebrity-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/celebrity/list/list.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/admin/celebrity/add/add.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CelebrityModule = /** @class */ (function () {
    function CelebrityModule() {
    }
    CelebrityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _celebrity_routing_module__WEBPACK_IMPORTED_MODULE_3__["CelebrityRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_12__["StatModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"]
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"]]
        })
    ], CelebrityModule);
    return CelebrityModule;
}());



/***/ }),

/***/ "./src/app/admin/celebrity/list/list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/celebrity/list/list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n\t<h2 class=\"text-muted\">Celebrity</h2>\r\n\t<div class=\"col-xl-12\">\r\n\t\t<p-table #dt [value]=\"celebrity\" [responsive]=\"true\" [paginator]=\"true\" [rows]=\"10\">\r\n\t\t    <ng-template pTemplate=\"header\">\r\n\t\t        <tr>\r\n\t\t\t\t\t<th style=\"width:3%\">\r\n\t\t\t\t\t\t<span [routerLink]=\"['add']\" class=\"fa fa-fw fa-plus-circle\"></span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th style=\"width:3%\"></th>\r\n\t\t\t\t\t<th style=\"width:3%\"></th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"'name'\">\r\n\t\t\t\t\t\tName<p-sortIcon [field]=\"'name'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t            <th [pSortableColumn]=\"'mobile'\">\r\n\t\t\t\t\t\tMobile<p-sortIcon [field]=\"'mobile'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"'username'\">\r\n\t\t\t\t\t\tUsername<p-sortIcon [field]=\"'username'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t            <th [pSortableColumn]=\"'total_customer'\">\r\n\t\t\t\t\t\tCustomers<p-sortIcon [field]=\"'total_customer'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t            <th [pSortableColumn]=\"''\">\r\n\t\t\t\t\t\tPending Bonus<p-sortIcon [field]=\"''\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"''\">\r\n\t\t\t\t\t\tPaid Bonus<p-sortIcon [field]=\"''\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"''\">\r\n\t\t\t\t\t\tCreated On<p-sortIcon [field]=\"''\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'name', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'mobile', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'username', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'total_customer', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th></th>\r\n\t\t            <th></th>\r\n\t\t            <th>\r\n\t            \t\t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'createdOn','contains')\">\r\n\t\t            </th>\r\n        \t\t</tr>\r\n\t\t    </ng-template>\r\n\t\t    <ng-template pTemplate=\"body\" let-rowData>\r\n\t\t        <tr>\r\n\t\t\t\t\t<td><span title=\"Edit\" class=\"fa fa-fw fa-edit\"></span></td>\r\n\t\t\t\t\t<td><span title=\"Inactive\" class=\"fa fa-fw fa-close\"></span></td>\r\n\t\t\t\t\t<td><span title=\"pay bonus\" class=\"fa fa-inr\"></span></td>\r\n\t\t            <td>{{rowData.name}}</td>\r\n\t\t\t\t\t<td>{{rowData.mobile}}</td>\r\n\t\t\t\t\t<td>{{rowData.username}}</td>\r\n\t\t            <td>{{rowData.total_customer}}</td>\r\n\t\t            <td>250</td>\r\n\t\t            <td>500</td>\r\n\t\t            <td>25-08-2018</td>\r\n\t\t        </tr>\r\n\t\t    </ng-template>\r\n\t\t</p-table>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/celebrity/list/list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/celebrity/list/list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Column Priorities */\n@media only all {\n  th.ui-p-6,\n  td.ui-p-6,\n  th.ui-p-5,\n  td.ui-p-5,\n  th.ui-p-4,\n  td.ui-p-4,\n  th.ui-p-3,\n  td.ui-p-3,\n  th.ui-p-2,\n  td.ui-p-2,\n  th.ui-p-1,\n  td.ui-p-1 {\n    display: none; } }\n/* Show priority 1 at 320px (20em x 16px) */\n@media screen and (min-width: 20em) {\n  th.ui-p-1,\n  td.ui-p-1 {\n    display: table-cell; } }\n/* Show priority 2 at 480px (30em x 16px) */\n@media screen and (min-width: 30em) {\n  th.ui-p-2,\n  td.ui-p-2 {\n    display: table-cell; } }\n/* Show priority 3 at 640px (40em x 16px) */\n@media screen and (min-width: 40em) {\n  th.ui-p-3,\n  td.ui-p-3 {\n    display: table-cell; } }\n/* Show priority 4 at 800px (50em x 16px) */\n@media screen and (min-width: 50em) {\n  th.ui-p-4,\n  td.ui-p-4 {\n    display: table-cell; } }\n/* Show priority 5 at 960px (60em x 16px) */\n@media screen and (min-width: 60em) {\n  th.ui-p-5,\n  td.ui-p-5 {\n    display: table-cell; } }\n/* Show priority 6 at 1,120px (70em x 16px) */\n@media screen and (min-width: 70em) {\n  th.ui-p-6,\n  td.ui-p-6 {\n    display: table-cell; } }\n"

/***/ }),

/***/ "./src/app/admin/celebrity/list/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/celebrity/list/list.component.ts ***!
  \********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_celebrity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/celebrity.service */ "./src/app/admin/service/celebrity.service.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(celebrityService) {
        this.celebrityService = celebrityService;
        this.celebrity = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.celebrityService.getCelebrity().subscribe(function (data) {
            _this.celebrity = data;
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/celebrity/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/admin/celebrity/list/list.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_service_celebrity_service__WEBPACK_IMPORTED_MODULE_1__["CelebrityService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=celebrity-celebrity-module.js.map