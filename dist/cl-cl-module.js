(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cl-cl-module"],{

/***/ "./src/app/cl/celebrity-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/cl/celebrity-routing.module.ts ***!
  \************************************************/
/*! exports provided: CelebrityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityRoutingModule", function() { return CelebrityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _celebrity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./celebrity.component */ "./src/app/cl/celebrity.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _celebrity_component__WEBPACK_IMPORTED_MODULE_2__["CelebrityComponent"],
        children: [
            { path: '', redirectTo: 'cl-dashboard', pathMatch: 'prefix' },
            { path: 'cl-dashboard', loadChildren: './cl-dashboard/cl-dashboard.module#ClDashboardModule' },
            { path: 'cl-customers', loadChildren: './cl-customers/cl-customers.module#ClCustomersModule' },
            { path: 'cl-bonus', loadChildren: './cl-bonus/cl-bonus.module#ClBonusModule' },
        ]
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

/***/ "./src/app/cl/celebrity.component.html":
/*!*********************************************!*\
  !*** ./src/app/cl/celebrity.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\n\t<router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/cl/celebrity.component.scss":
/*!*********************************************!*\
  !*** ./src/app/cl/celebrity.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/cl/celebrity.component.ts":
/*!*******************************************!*\
  !*** ./src/app/cl/celebrity.component.ts ***!
  \*******************************************/
/*! exports provided: CelebrityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityComponent", function() { return CelebrityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CelebrityComponent = /** @class */ (function () {
    function CelebrityComponent() {
    }
    CelebrityComponent.prototype.ngOnInit = function () {
    };
    CelebrityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-celebrity',
            template: __webpack_require__(/*! ./celebrity.component.html */ "./src/app/cl/celebrity.component.html"),
            styles: [__webpack_require__(/*! ./celebrity.component.scss */ "./src/app/cl/celebrity.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CelebrityComponent);
    return CelebrityComponent;
}());



/***/ }),

/***/ "./src/app/cl/cl.module.ts":
/*!*********************************!*\
  !*** ./src/app/cl/cl.module.ts ***!
  \*********************************/
/*! exports provided: ClModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClModule", function() { return ClModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _celebrity_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./celebrity-routing.module */ "./src/app/cl/celebrity-routing.module.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/cl/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/cl/components/header/header.component.ts");
/* harmony import */ var _celebrity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./celebrity.component */ "./src/app/cl/celebrity.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../shared/services/jwt.interceptor */ "./src/app/shared/services/jwt.interceptor.ts");
/* harmony import */ var _shared_services_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../shared/services/error.interceptor */ "./src/app/shared/services/error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ClModule = /** @class */ (function () {
    function ClModule() {
    }
    ClModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _celebrity_routing_module__WEBPACK_IMPORTED_MODULE_4__["CelebrityRoutingModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_services_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }
            ],
            declarations: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _celebrity_component__WEBPACK_IMPORTED_MODULE_7__["CelebrityComponent"]]
        })
    ], ClModule);
    return ClModule;
}());



/***/ }),

/***/ "./src/app/cl/components/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/cl/components/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">Sonery Balpan</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <!--<li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-user\"></i> Admin <b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>-->\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/cl/components/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/cl/components/header/header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/cl/components/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cl/components/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/cl/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/cl/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/cl/components/sidebar/sidebar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/cl/components/sidebar/sidebar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"cl-dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\r\n            <span>{{ 'Dashboard' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"cl-customers\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-street-view\"></i>&nbsp;\r\n            <span>{{ 'Customers' | translate }}</span>\r\n        </a>\r\n        <a routerLink=\"cl-bonus\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-money\"></i>&nbsp;\r\n            <span>{{ 'Bonus' | translate }}</span>\r\n        </a>\r\n        <a  href=\"javascript:void(0)\" class=\"list-group-item\" (click)=\"logout()\">\r\n            <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;\r\n            <span>Logout</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\r\n        <i class=\"fa fa-fw fa-angle-double-left\"></i>&nbsp;\r\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/cl/components/sidebar/sidebar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cl/components/sidebar/sidebar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n"

/***/ }),

/***/ "./src/app/cl/components/sidebar/sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cl/components/sidebar/sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router, loginService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.loginService = loginService;
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    SidebarComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/cl/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/cl/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cl-cl-module.js.map