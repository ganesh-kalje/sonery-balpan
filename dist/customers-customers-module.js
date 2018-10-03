(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./src/app/admin/customers/customers-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/customers/customers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/customers/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/customers/customers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/customers/customers.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/admin/customers/customers-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/customers/list/list.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"]
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            providers: [_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/admin/customers/list/list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/customers/list/list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n\t<h2 class=\"text-muted\">Customers</h2>\r\n\t<div class=\"col-xl-12\">\r\n\t\t<p-table #dt [value]=\"customers\" [responsive]=\"true\" [paginator]=\"true\" [rows]=\"10\">\r\n\t\t    <ng-template pTemplate=\"header\">\r\n\t\t        <tr>\r\n\t\t\t\t\t<th style=\"width:3%\"></th>\r\n\t\t\t\t\t<th style=\"width:3%\"></th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"'name'\">\r\n\t\t\t\t\t\tName<p-sortIcon [field]=\"'name'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t            <th [pSortableColumn]=\"'phone'\">\r\n\t\t\t\t\t\tMobile<p-sortIcon [field]=\"'phone'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"'child_name'\">\r\n\t\t\t\t\t\tChild Name<p-sortIcon [field]=\"'child_name'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"'date_of_birth'\">\r\n\t\t\t\t\t\tChild DOB<p-sortIcon [field]=\"'date_of_birth'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th [pSortableColumn]=\"'total_orders'\">\r\n\t\t\t\t\t\tTotal Orders<p-sortIcon [field]=\"'total_orders'\"></p-sortIcon>\r\n\t\t\t\t\t</th>\r\n\t\t        </tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'name', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'phone', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'child_name', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th>\r\n\t\t            \t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'date_of_birth', 'contains')\">\r\n\t\t            </th>\r\n\t\t            <th>\r\n\t            \t\t<input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'total_orders','contains')\">\r\n\t\t            </th>\r\n\t            </tr>\r\n\t\t    </ng-template>\r\n\t\t    <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n\t\t        <tr>\r\n\t\t\t\t\t<td><span class=\"fa fa-fw fa-edit\"></span></td>\r\n\t\t\t\t\t<td><span class=\"fa fa-fw fa-close\"></span></td>\r\n\t\t            <td>{{rowData.name}}</td>\r\n\t\t\t\t\t<td>{{rowData.phone}}</td>\r\n\t\t\t\t\t<td>{{rowData.child_name}}</td>\r\n\t\t            <td>{{rowData.date_of_birth | date:'dd/mm/yyyy'}}</td>\r\n\t\t            <td>{{rowData.total_orders}}</td>\r\n\t\t        </tr>\r\n\t\t    </ng-template>\r\n\t\t</p-table>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/customers/list/list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/customers/list/list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/customers/list/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/customers/list/list.component.ts ***!
  \********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
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
    function ListComponent(customerService) {
        this.customerService = customerService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (data) {
            _this.customers = data;
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/customers/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/admin/customers/list/list.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map