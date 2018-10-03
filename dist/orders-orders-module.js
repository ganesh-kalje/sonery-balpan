(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./src/app/admin/orders/list/list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/orders/list/list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <h2 class=\"text-muted\">Orders</h2>\r\n  <p-table #dt [value]=\"orders\" [responsive]=\"true\" [paginator]=\"true\" [rows]=\"10\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th style=\"width: 5%\" >\r\n          <a *ngIf=\"!viewAddForm\" (click)=\"showHideAddForm()\" href=\"javascript:void(0)\"> Add </a>\r\n          <a *ngIf=\"viewAddForm\" (click)=\"showHideAddForm()\" href=\"javascript:void(0)\"> Close </a>\r\n        </th>\r\n        <th [pSortableColumn]=\"'name'\">Order Number<p-sortIcon [field]=\"'name'\"></p-sortIcon></th>\r\n        <th [pSortableColumn]=\"'amount'\">Customer Name<p-sortIcon [field]=\"'amount'\"></p-sortIcon></th>\r\n        <th [pSortableColumn]=\"'dateTime'\">Total<p-sortIcon [field]=\"'dateTime'\"></p-sortIcon></th>\r\n        <th [pSortableColumn]=\"'dateTime'\">Date<p-sortIcon [field]=\"'dateTime'\"></p-sortIcon></th>\r\n      </tr>\r\n      <tr>\r\n        <th style=\"width: 5%\"></th>\r\n        <th><input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'name', 'contains')\"></th>\r\n        <th><input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'amount', 'contains')\"></th>\r\n        <th><input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'dateTime', 'contains')\"></th>\r\n        <th><input pInputText type=\"text\" class=\"w-100\" (input)=\"dt.filter($event.target.value, 'dateTime', 'contains')\"></th>\r\n      </tr>\r\n      <tr *ngIf=\"viewAddForm\">\r\n        <th style=\"width: 5%\"><a href=\"javascript:void\">Save</a></th>\r\n        <th>25</th>\r\n        <th><input pInputText type=\"text\" class=\"w-100\" placeholder=\"Customer Name\"></th>\r\n        <th><input pInputText type=\"text\" class=\"w-100\" placeholder=\"Total\"></th>\r\n        <th>{{ currentDate | date}}</th>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-rowData>\r\n      <tr>\r\n        <td><span title=\"Inactive\" class=\"fa fa-fw fa-close\"></span></td>\r\n        <td>{{rowData.order_number}}</td>\r\n        <td>{{rowData.name}}</td>\r\n        <td>{{rowData.total}}</td>\r\n        <td>{{rowData.order_date}}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/orders/list/list.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin/orders/list/list.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/orders/list/list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/orders/list/list.component.ts ***!
  \*****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
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


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.viewAddForm = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.currentDate = new Date();
        this.orders = [{
                name: "ganesh", order_number: "25", total: "25", "order_date": "25/05/2018"
            }];
    };
    ListComponent.prototype.showHideAddForm = function () {
        this.viewAddForm = !this.viewAddForm;
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/orders/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/admin/orders/list/list.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/admin/orders/orders-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/orders/list/list.component.ts");
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
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/admin/orders/orders-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/admin/orders/list/list.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"]
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ })

}]);
//# sourceMappingURL=orders-orders-module.js.map