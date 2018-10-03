(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cl-bonus-cl-bonus-module"],{

/***/ "./src/app/cl/cl-bonus/cl-bonus-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/cl/cl-bonus/cl-bonus-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ClBonusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClBonusRoutingModule", function() { return ClBonusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/cl/cl-bonus/list/list.component.ts");
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
var ClBonusRoutingModule = /** @class */ (function () {
    function ClBonusRoutingModule() {
    }
    ClBonusRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClBonusRoutingModule);
    return ClBonusRoutingModule;
}());



/***/ }),

/***/ "./src/app/cl/cl-bonus/cl-bonus.module.ts":
/*!************************************************!*\
  !*** ./src/app/cl/cl-bonus/cl-bonus.module.ts ***!
  \************************************************/
/*! exports provided: ClBonusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClBonusModule", function() { return ClBonusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _cl_bonus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cl-bonus-routing.module */ "./src/app/cl/cl-bonus/cl-bonus-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/cl/cl-bonus/list/list.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ClBonusModule = /** @class */ (function () {
    function ClBonusModule() {
    }
    ClBonusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _cl_bonus_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClBonusRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextareaModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]]
        })
    ], ClBonusModule);
    return ClBonusModule;
}());



/***/ }),

/***/ "./src/app/cl/cl-bonus/list/list.component.html":
/*!******************************************************!*\
  !*** ./src/app/cl/cl-bonus/list/list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\t<h2 class=\"text-muted\">Bonus</h2>\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12\" style=\"margin-bottom:3%\">\n\t\t\t<p-panel header=\"Pending Bonus\">\n\t\t\t\t<div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\n\t\t\t\t\t<div class=\"ui-grid-row\">\n\t\t\t          <div class=\"ui-grid-col-2\">Pending Bonus *:</div>\n\t\t\t          <div class=\"ui-grid-col-6\">250/-</div>\n\t\t          \t  <div class=\"ui-grid-col-4\"></div>\n\t\t        \t</div>\n\t\t\t\t</div>\n\t\t\t</p-panel>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-12\">\n\t\t\t<p-table #dt [value]=\"bonusList\" [responsive]=\"true\" [paginator]=\"true\" [rows]=\"10\">\n\t\t\t    <ng-template pTemplate=\"header\">\n\t\t\t        <tr>\n\t\t\t\t\t\t<th [pSortableColumn]=\"'name'\">\n\t\t\t\t\t\t\tDateTime<p-sortIcon [field]=\"'name'\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th [pSortableColumn]=\"'name'\">\n\t\t\t\t\t\t\tBonus<p-sortIcon [field]=\"'name'\"></p-sortIcon>\n\t\t\t\t\t\t</th>\n\t\t\t        </tr>\n\t\t\t\t</ng-template>\n\t\t\t    <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\n\t\t\t        <tr>\n\t\t\t\t\t\t<td>21/02/2018 12:10</td>\n\t\t\t\t\t\t<td>300</td>\n\t\t\t        </tr>\n\t\t\t    </ng-template>\n\t\t\t    <ng-template pTemplate=\"summary\">\n    \t\t\t\tTotal Bonus 600/-\n    \t\t\t</ng-template>\n\n\t\t\t</p-table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/cl/cl-bonus/list/list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cl/cl-bonus/list/list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cl/cl-bonus/list/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cl/cl-bonus/list/list.component.ts ***!
  \****************************************************/
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
    }
    ListComponent.prototype.ngOnInit = function () {
        this.bonusList = [{}, {}, {}];
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/cl/cl-bonus/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/cl/cl-bonus/list/list.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cl-bonus-cl-bonus-module.js.map