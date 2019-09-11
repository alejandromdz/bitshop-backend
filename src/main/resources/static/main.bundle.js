webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n<app-topnav></app-topnav>\n<div class=\"app-page\" [ngClass]=\"{'borderless-page': isBorderlessPage}\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.app-page {\n  padding-top: 65px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initUserFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__techiediaries_ngx_qrcode__ = __webpack_require__("../../../../@techiediaries/ngx-qrcode/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routing_app_routing_module__ = __webpack_require__("../../../../../src/app/routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nebular_theme_components_menu_menu_service__ = __webpack_require__("../../../../@nebular/theme/components/menu/menu.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component__ = __webpack_require__("../../../../../src/app/component/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function initUserFactory(userService) {
    return function () { return userService.initUser(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: Object.keys(__WEBPACK_IMPORTED_MODULE_14__component__).map(function (k) { return __WEBPACK_IMPORTED_MODULE_14__component__[k]; }).concat([
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            ]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["h" /* NbThemeModule */].forRoot({ name: 'default' }),
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["c" /* NbLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["f" /* NbSidebarModule */],
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["d" /* NbMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["a" /* NbCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["b" /* NbCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__techiediaries_ngx_qrcode__["a" /* NgxQRCodeModule */]
            ],
            providers: Object.keys(__WEBPACK_IMPORTED_MODULE_15__service__).map(function (k) { return __WEBPACK_IMPORTED_MODULE_15__service__[k]; }).concat([
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["g" /* NbSidebarService */],
                __WEBPACK_IMPORTED_MODULE_13__nebular_theme_components_menu_menu_service__["a" /* NbMenuInternalService */],
                __WEBPACK_IMPORTED_MODULE_10__nebular_theme__["e" /* NbMenuService */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatIconRegistry */],
                {
                    'provide': __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* APP_INITIALIZER */],
                    'useFactory': initUserFactory,
                    'deps': [__WEBPACK_IMPORTED_MODULE_15__service__["UserService"]],
                    'multi': true
                }
            ]),
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__component__["BuyDialogComponent"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/browse-dashboard/browse-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"browse-container\" >    \n        <publication *ngFor=\"let pub of publications\" [publication]=\"pub\"></publication>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/browse-dashboard/browse-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".browse-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center products;\n      -ms-flex-align: center products;\n          align-items: center products;\n    align-items-flex-grow: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/browse-dashboard/browse-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowseDashboardComponent = (function () {
    function BrowseDashboardComponent(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.publications = [];
    }
    BrowseDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService
            .get(this.config.publications_url)
            .subscribe(function (response) {
            _this.publications = response || [];
        });
    };
    BrowseDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'browse-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/browse-dashboard/browse-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/browse-dashboard/browse-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["ConfigService"]])
    ], BrowseDashboardComponent);
    return BrowseDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n    \n  <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n    <nb-menu [items]=\"menu\" [autoCollapse]=\"true\"></nb-menu>\n    \n  </nb-sidebar>\n\n  <nb-layout-column class=\"main-content\" (click)=\"collapseSidebar()\">\n    <router-outlet></router-outlet>\n  </nb-layout-column>\n</nb-layout>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item a, :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded a, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed a, :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item a, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded a, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed a {\n  color: #8d8d8e;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item a:hover, :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded a:hover, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed a:hover, :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item a:hover, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded a:hover, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed a:hover {\n  color: #dadfe6; }\n  :host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item a:hover i, :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded a:hover i, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed a:hover i, :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item a:hover i, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded a:hover i, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed a:hover i {\n    color: #dadfe6; }\n\n:host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item a.active, :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded a.active, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed a.active, :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item a.active, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded a.active, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed a.active {\n  color: #ffd740;\n  border-radius: 0; }\n  :host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item a.active i, :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded a.active i, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed a.active i, :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item a.active i, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded a.active i, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed a.active i {\n    color: white; }\n\n:host-context(.nb-theme-default) ::ng-deep .scrollable {\n  background: #3d3e42;\n  padding-top: 0; }\n\n:host-context(.nb-theme-default) nb-menu {\n  background: black; }\n  :host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item {\n    border: none; }\n    :host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item a:hover {\n      background: black; }\n    :host-context(.nb-theme-default) nb-menu ::ng-deep .menu-item a.active {\n      background: #212121; }\n\n:host-context(.nb-theme-default) ::ng-deep .menu-items.expanded, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed {\n  background: #3d3e42; }\n  :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded .menu-item, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed .menu-item {\n    background: #3d3e42 !important; }\n  :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded a:hover, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed a:hover {\n    background: #3d3e42 !important; }\n  :host-context(.nb-theme-default) ::ng-deep .menu-items.expanded a.active, :host-context(.nb-theme-default) ::ng-deep .menu-items.collapsed a.active {\n    background: #3d3e42 !important; }\n\n:host-context(.nb-theme-cosmic) ::ng-deep .scrollable {\n  background: #3d3e42;\n  padding-top: 0; }\n\n:host-context(.nb-theme-cosmic) nb-menu {\n  background: black; }\n  :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item {\n    border: none; }\n    :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item a:hover {\n      background: black; }\n    :host-context(.nb-theme-cosmic) nb-menu ::ng-deep .menu-item a.active {\n      background: #212121; }\n\n:host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed {\n  background: #3d3e42; }\n  :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded .menu-item, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed .menu-item {\n    background: #3d3e42 !important; }\n  :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded a:hover, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed a:hover {\n    background: #3d3e42 !important; }\n  :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.expanded a.active, :host-context(.nb-theme-cosmic) ::ng-deep .menu-items.collapsed a.active {\n    background: #3d3e42 !important; }\n\n@media (min-width: 768px) {\n  nb-sidebar.fixed {\n    position: static;\n    top: 0 !important; } }\n\nnb-sidebar {\n  top: 65px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/component/dashboard/pages-menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(sidebarService, themeService) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService
            .onMediaQueryChange()
            .subscribe(function (_a) {
            var bpFrom = _a[0], bpTo = _a[1];
            _this.currentBreakpoint = bpTo;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        /*clean body from unnecessary theme styles*/
        __WEBPACK_IMPORTED_MODULE_2_jquery__('body').removeAttr('class');
        __WEBPACK_IMPORTED_MODULE_2_jquery__('body').removeAttr('style');
    };
    DashboardComponent.prototype.collapseSidebar = function () {
        if (this.currentBreakpoint.width < __WEBPACK_IMPORTED_MODULE_4_app_shared_models__["a" /* BreakpointSizes */].md)
            this.sidebarService.collapse('menu-sidebar');
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__nebular_theme__["g" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["i" /* NbThemeService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/mypublications-dashboard/mypublications-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"browse-container\" >    \n    <publication *ngFor=\"let pub of publications\" [publication]=\"pub\"></publication>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/mypublications-dashboard/mypublications-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".browse-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center products;\n      -ms-flex-align: center products;\n          align-items: center products;\n    align-items-flex-grow: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/mypublications-dashboard/mypublications-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypublicationsDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MypublicationsDashboardComponent = (function () {
    function MypublicationsDashboardComponent(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.publications = [];
    }
    MypublicationsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService
            .get(this.config.self_publications_url)
            .subscribe(function (response) {
            _this.publications = response || [];
        });
    };
    MypublicationsDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mypublications-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/mypublications-dashboard/mypublications-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/mypublications-dashboard/mypublications-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["ConfigService"]])
    ], MypublicationsDashboardComponent);
    return MypublicationsDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/newpublication-dashboard/newpublication-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"newpublication-container d-flex justify-content-around\">\n  <mat-card *ngIf=\"!submitted\">\n    <mat-card-title>\n      <h2>New Publication</h2>\n      <p [class]=\"notification.msgType\" *ngIf=\"notification\">{{notification.msgBody}}</p>\n    </mat-card-title>\n    <mat-card-content>\n\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='publication.title' placeholder=\"Title\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='publication.price' placeholder=\"Price\">\n      </div>\n      <div class=\"form-group\">\n        <div *ngFor=\"let photo of publication.photos\" class=\"card text-center\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"remove(photo)\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <div class=\"card-block\">\n            <img [src]=\"photo.url\" alt=\"Image thumbnail\" class=\"img-thumbnail\">\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <s3-upload (fileUploaded)=\"handleFileUploaded($event)\"></s3-upload>\n      </div>\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" [(ngModel)]=\"publication.description\" placeholder=\"Description\"></textarea>\n      </div>\n      <button (click)=\"savePublication()\" class=\"btn btn-info btn-tn\">Publish</button>\n\n    </mat-card-content>\n  </mat-card>\n\n  <mat-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></mat-spinner>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/newpublication-dashboard/newpublication-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\n  .newpublication-container nb-card {\n    min-width: 400px; } }\n\n.card {\n  max-width: 400px;\n  position: relative; }\n  .card .close {\n    position: absolute;\n    right: 10px;\n    top: 10px; }\n  .card img {\n    width: 100%;\n    height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/newpublication-dashboard/newpublication-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpublicationDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewpublicationDashboardComponent = (function () {
    function NewpublicationDashboardComponent(apiService, cfg, router, route) {
        this.apiService = apiService;
        this.cfg = cfg;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.publication = { description: '', photos: [], product: { name: '' }, title: '', };
    }
    NewpublicationDashboardComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    NewpublicationDashboardComponent.prototype.handleFileUploaded = function (locationURL) {
        this.publication.photos.push({ url: locationURL });
    };
    NewpublicationDashboardComponent.prototype.remove = function (image) {
        this.publication.photos.splice(this.publication.photos.indexOf(image), 1);
    };
    NewpublicationDashboardComponent.prototype.savePublication = function () {
        var _this = this;
        this.notification = undefined;
        this.submitted = true;
        this.apiService
            .post(this.cfg.publications_url, this.publication)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (e) {
            _this.submitted = false;
            _this.notification = { msgType: 'error', msgBody: 'An error occurred, please try again.' };
        });
    };
    NewpublicationDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'newpublication-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/newpublication-dashboard/newpublication-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/newpublication-dashboard/newpublication-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["ConfigService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NewpublicationDashboardComponent);
    return NewpublicationDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Browse',
        icon: 'nb-search',
        link: '/dashboard/browse',
        home: true,
    },
    {
        title: 'My Info',
        icon: 'nb-person',
        link: '/dashboard/profile'
    },
    {
        title: 'Publications',
        icon: 'nb-compose',
        children: [
            {
                title: 'My publications',
                link: '/dashboard/mypublications',
            },
            {
                title: 'New Publication',
                link: '/dashboard/newpublication',
            }
        ]
    },
    {
        title: 'Payments',
        icon: 'ion-logo-bitcoin',
        children: [
            {
                title: 'My Purchases',
                link: '/dashboard/purchases',
            },
            {
                title: 'My Sells',
                link: '/dashboard/payments',
            },
        ],
    },
    {
        title: 'Exit',
        icon: 'ion-md-exit',
        link: '/logout'
    }
];


/***/ }),

/***/ "../../../../../src/app/component/dashboard/payment-dashboard/payment-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "../../../../../src/app/component/dashboard/payment-dashboard/payment-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/payment-dashboard/payment-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentDashboardComponent = (function () {
    function PaymentDashboardComponent() {
    }
    PaymentDashboardComponent.prototype.ngOnInit = function () { };
    PaymentDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'payment-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/payment-dashboard/payment-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/payment-dashboard/payment-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentDashboardComponent);
    return PaymentDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/profile-dashboard/profile-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\" >    \n        <user-profile></user-profile>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/profile-dashboard/profile-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/profile-dashboard/profile-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileDashboardComponent = (function () {
    function ProfileDashboardComponent() {
    }
    ProfileDashboardComponent.prototype.ngOnInit = function () { };
    ProfileDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/profile-dashboard/profile-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/profile-dashboard/profile-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileDashboardComponent);
    return ProfileDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/purchase-dashboard/purchase-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/component/dashboard/purchase-dashboard/purchase-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/purchase-dashboard/purchase-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchaseDashboardComponent = (function () {
    function PurchaseDashboardComponent() {
    }
    PurchaseDashboardComponent.prototype.ngOnInit = function () { };
    PurchaseDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'purchase-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/purchase-dashboard/purchase-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/purchase-dashboard/purchase-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PurchaseDashboardComponent);
    return PurchaseDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jumbotron_jumbotron_component__ = __webpack_require__("../../../../../src/app/component/jumbotron/jumbotron.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__jumbotron_jumbotron_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/component/landing/landing.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/component/page-not-found/page-not-found.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/component/profile/profile.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publication_publication_component__ = __webpack_require__("../../../../../src/app/component/publication/publication.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__publication_publication_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__publication_buyDialog_component__ = __webpack_require__("../../../../../src/app/component/publication/buyDialog.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BuyDialogComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__publication_buyDialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__purchases_purchases_component__ = __webpack_require__("../../../../../src/app/component/purchases/purchases.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PurchasesComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__purchases_purchases_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_main_search_main_component__ = __webpack_require__("../../../../../src/app/component/search-main/search-main.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SearchMain", function() { return __WEBPACK_IMPORTED_MODULE_9__search_main_search_main_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/component/sign-up/sign-up.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__spacer_spacer_component__ = __webpack_require__("../../../../../src/app/component/spacer/spacer.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SpacerComponent", function() { return __WEBPACK_IMPORTED_MODULE_11__spacer_spacer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__topnav_topnav_component__ = __webpack_require__("../../../../../src/app/component/topnav/topnav.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__topnav_topnav_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_payment_dashboard_payment_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/payment-dashboard/payment-dashboard.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PaymentDashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_13__dashboard_payment_dashboard_payment_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_browse_dashboard_browse_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/browse-dashboard/browse-dashboard.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BrowseDashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__dashboard_browse_dashboard_browse_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_purchase_dashboard_purchase_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/purchase-dashboard/purchase-dashboard.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PurchaseDashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_15__dashboard_purchase_dashboard_purchase_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_profile_dashboard_profile_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/profile-dashboard/profile-dashboard.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProfileDashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_16__dashboard_profile_dashboard_profile_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_newpublication_dashboard_newpublication_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/newpublication-dashboard/newpublication-dashboard.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NewpublicationDashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__dashboard_newpublication_dashboard_newpublication_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_mypublications_dashboard_mypublications_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/mypublications-dashboard/mypublications-dashboard.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MypublicationsDashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_18__dashboard_mypublications_dashboard_mypublications_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__s3_upload_s3_upload_component__ = __webpack_require__("../../../../../src/app/component/s3-upload/s3-upload.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "S3UploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_19__s3_upload_s3_upload_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__s3_upload_s3_upload_directive__ = __webpack_require__("../../../../../src/app/component/s3-upload/s3-upload.directive.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "S3UploadDirective", function() { return __WEBPACK_IMPORTED_MODULE_20__s3_upload_s3_upload_directive__["a"]; });























/***/ }),

/***/ "../../../../../src/app/component/jumbotron/jumbotron.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-jumbotron\">\n  \n  <img src=\"/assets/img/bit-shop.svg\"\n       class=\"jumbo-image\"\n       height=\"300\"\n       alt=\"Cool Image\">\n\n  <div style=\"max-width: 500px;\">\n    <h1 class=\"center\" style=\"color: white\">\n      <span>Find the </span>\n      <div id=\"carousel\"><ul>\n        <li>product</li>\n        <li>videogame</li>\n        <li>gift</li>\n        <li>guitar</li>\n        <li>book</li>\n        <li>product</li><!-- repeated element -->\n      </ul> \n    </div>\n      <span>you're looking for, pay with bitcoin</span>\n    </h1>\n    <app-spacer height=\"30\"></app-spacer>\n    <button mat-raised-button routerLink=\"signup\" class=\"custom-entry\" style=\"padding: 10px 15px; font-size: 20px\">\n      Get Started!\n    </button>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/jumbotron/jumbotron.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, ".app-jumbotron {\n  min-height: 100vh;\n  background-image: url(\"/assets/img/AviaPark_Moscow.jpg\");\n  background-size: auto 140%;\n  background-position-x: center;\n  background-repeat: no-repeat;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  padding: 10px; }\n  .app-jumbotron h1.center {\n    font-family: \"Oxygen\", sans-serif; }\n\n.jumbo-image {\n  padding: 20px; }\n\n#carousel {\n  height: 45px;\n  width: 220px;\n  overflow: hidden;\n  position: relative;\n  margin: 0 auto;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  border: #9573d0 3px dashed; }\n  #carousel ul {\n    list-style-type: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0px;\n    margin: 0px;\n    position: absolute;\n    -webkit-animation: slide 25s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;\n            animation: slide 25s cubic-bezier(0.075, 0.82, 0.165, 1) infinite; }\n    #carousel ul li {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: 220px;\n      height: 45px;\n      padding-bottom: 15px; }\n\n.custom-entry {\n  background-color: #2196F3;\n  color: white; }\n\n@-webkit-keyframes slide {\n  0% {\n    top: 0px; }\n  20% {\n    top: -45px; }\n  40% {\n    top: -90px; }\n  60% {\n    top: -135px; }\n  80% {\n    top: -180px; }\n  100% {\n    top: -225px; } }\n\n@keyframes slide {\n  0% {\n    top: 0px; }\n  20% {\n    top: -45px; }\n  40% {\n    top: -90px; }\n  60% {\n    top: -135px; }\n  80% {\n    top: -180px; }\n  100% {\n    top: -225px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/jumbotron/jumbotron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumbotronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumbotronComponent = (function () {
    function JumbotronComponent() {
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    JumbotronComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jumbotron',
            template: __webpack_require__("../../../../../src/app/component/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/jumbotron/jumbotron.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<app-jumbotron></app-jumbotron>\n\n<div class=\"section section-type-one\">\n  <div class=\"container\">\n    <div class=\"image-title-text-section\">\n      <img src=\"../assets/img/004-speed.svg\"\n           height=\"150\"\n           style=\"padding: 20px\"\n           alt=\"\">\n      <div style=\"max-width: 450px\">\n        <h2>\n          Join the Bitcoin community\n        </h2>\n        <p class=\"large\">\n          Bit-shops allows you to sell and buy goods while using Bitcoin \n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"section section-type-two\">\n    \n       <search-main></search-main>  \n\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, ".section, .section-type-one {\n  font-family: \"Open Sans\", sans-serif; }\n\n.section-type-one {\n  padding: 20px 0 60px;\n  background: #26404c;\n  color: #F5F5F5; }\n\n.image-title-text-section {\n  padding: 30px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = (function () {
    function LandingComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.redirectUrl = this.route.snapshot.queryParams['redirect'];
        if (this.redirectUrl) {
            this.router.navigate([this.redirectUrl]);
        }
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/component/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <mat-card *ngIf=\"!submitted\">\n    <p [class]=\"notification.msgType\" *ngIf=\"notification\">{{notification.msgBody}}</p>\n    <h2 class=\"login-header\">Login</h2>\n    <div class=\"login-icon\">\n      <i class=\"nb-locked\"></i>\n    </div>\n    <form *ngIf=\"!submitted\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n      <mat-input-container class=\"full-width\">\n        <input matInput formControlName=\"username\" required placeholder=\"username\">\n      </mat-input-container>\n      <mat-input-container class=\"full-width\">\n        <input matInput formControlName=\"password\" required type=\"password\" placeholder=\"password\">\n      </mat-input-container>\n      <div class=\"clearfix\">\n        <div class=\"float-right\">\n          <button class=\"login-button\" type=\"submit\" [disabled]=\"!loginForm.form.valid\" mat-raised-button color=\"primary\">Login</button>\n        </div>\n      </div>\n    </form>\n\n  </mat-card>\n  <mat-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></mat-spinner>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, "html, body {\n  height: 100%; }\n\n.app-page {\n  height: 100%; }\n\n.login-container {\n  width: 100%;\n  margin-top: -66px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  background: #4c8098; }\n  .login-container mat-card {\n    max-width: 500px;\n    min-width: 200px; }\n  .login-container .login-header {\n    font-family: \"Open Sans\", sans-serif;\n    width: 100%;\n    text-align: center; }\n  .login-container .login-icon {\n    width: 100%;\n    text-align: center;\n    font-size: 5em;\n    color: #4c8098; }\n  .login-container .login-button:not([disabled]) {\n    background: #292b2c; }\n\n.full-width {\n  width: 100%; }\n\n.half-width {\n  width: 49%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, authService, router, route, formBuilder) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (params) {
            _this.notification = params;
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(64)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(32)])]
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.notification = undefined;
        this.submitted = true;
        this.authService.login(this.form.value)
            .delay(1000)
            .subscribe(function (data) {
            _this.userService.getMyInfo().subscribe();
            _this.router.navigate([_this.returnUrl]);
        }, function (e) {
            _this.submitted = false;
            _this.notification = { msgType: 'error', msgBody: 'Incorrect username or password.' };
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-login',
            template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_service__["UserService"],
            __WEBPACK_IMPORTED_MODULE_4_app_service__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-not-found-wrapper\">\n\n  <div class=\"disclaimer\">\n    <h2>\n      Something wrong happend\n    </h2>\n    <br/>\n    <div>\n      <a mat-raised-button routerLink=\"/\">return</a>\n    </div>\n  </div>\n  <img src=\"/assets/img/robot-search.svg\" height=\"150px\" alt=\"\" />\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, ".page-not-found-wrapper {\n  padding: 0;\n  margin: 0;\n  margin-top: -66px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 100vh;\n  background: #33a0ff;\n  background: linear-gradient(to right, #e2ff08, #33a0ff); }\n  .page-not-found-wrapper div.disclaimer {\n    max-width: 420px;\n    margin: 10px; }\n    .page-not-found-wrapper div.disclaimer a, .page-not-found-wrapper div.disclaimer a:hover, .page-not-found-wrapper div.disclaimer a:link, .page-not-found-wrapper div.disclaimer a:active, .page-not-found-wrapper div.disclaimer a:visited {\n      text-decoration: none; }\n  .page-not-found-wrapper img {\n    max-width: 420px;\n    height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/component/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container d-flex justify-content-center\">\n  <mat-card *ngIf=\"!submitted\">\n    <mat-card-title>\n\n      <p [class]=\"notification.msgType\" *ngIf=\"notification\">{{notification.msgBody}}</p>\n      <h2>Profile</h2>\n    </mat-card-title>\n    <mat-card-content>\n      \n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"inputFirstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" [(ngModel)]='user.firstname' placeholder=\"First Name\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"inputLastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputLastName\" [(ngModel)]='user.lastname' placeholder=\"Last Name\">\n          </div>\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <label for=\"inputUsername\">Username</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputUsername\" [(ngModel)]='user.username' placeholder=\"Username\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputEmail\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail\" [(ngModel)]='user.email' placeholder=\"Email\" disabled>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAddress\">Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputAddress\" [(ngModel)]='user.address' placeholder=\"Address\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputCountry\">Country</label>\n          <select id=\"inputCountry\" [(ngModel)]=\"country\" (ngModelChange)=\"onChange($event)\">\n            <option *ngFor=\"let c of countries\" [ngValue]=\"c\"> {{c}} </option>\n          </select>\n          \n        </div>\n                \n        <div class=\"form-group\">\n          <label for=\"inputTelephone\">Telephone</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputTelephone\" [(ngModel)]='user.telephone' placeholder=\"Telephone\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-info btn-tn\" (click)='saveInfo()'>Save</button>\n      \n    </mat-card-content>\n  </mat-card>\n\n  <mat-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></mat-spinner>\n</div>\n\n\n "

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\n  .profile-container mat-card {\n    min-width: 400px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(apiService, config, router, route) {
        this.apiService = apiService;
        this.config = config;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.user = { firstname: '', lastname: '', username: '', email: '', telephone: '', address: '' };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.apiService
            .get(this.config.self_url)
            .subscribe(function (data) {
            if (_this.user.username !== undefined) {
                _this.user = data;
            }
        }, function (e) { });
    };
    ProfileComponent.prototype.saveInfo = function () {
        var _this = this;
        this.notification = undefined;
        this.submitted = true;
        this.apiService
            .put(this.config.self_url, this.user)
            .subscribe(function (data) {
            _this.submitted = false;
            _this.notification = { msgType: 'success', msgBody: 'Your information was succesfully updated.' };
        }, function (e) {
            _this.submitted = false;
            _this.notification = { msgType: 'error', msgBody: 'An error occurred, please try again later.' };
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-profile',
            template: __webpack_require__("../../../../../src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["ConfigService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/publication/buyDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n  {{ data.publication.title }}</h1>\n<div mat-dialog-content>\n  <p>You are about to buy this product, please scan this code in your Bitcoin wallet </p>\n  <ngx-qrcode \n  *ngIf=\"loaded\"\n  [qrc-value]=\"bitcoinURI\" \n  qrc-class=\"aclass\" \n  qrc-errorCorrectionLevel=\"L\">\n  </ngx-qrcode>\n  <mat-spinner *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-spinner>\n</div>\n\n<div align='end' mat-dialog-actions>\n  <a mat-button (click)=\"onNoClick()\">CLOSE</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/publication/buyDialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[mat-dialog-content] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\na[mat-button] {\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/publication/buyDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_config_service__ = __webpack_require__("../../../../../src/app/service/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BuyDialogComponent = (function () {
    function BuyDialogComponent(dialogRef, apiService, bitcoinService, config, userService, data) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.bitcoinService = bitcoinService;
        this.config = config;
        this.userService = userService;
        this.data = data;
        this.bitcoin_address = '';
        this.loaded = false;
        this.BTC_USD = Infinity;
    }
    BuyDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BuyDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var label = this.data.publication.title;
        var message = 'Your buy in bitshops';
        var price = this.data.publication.price;
        var publicationId = this.data.publication.id;
        var senderId = this.userService.currentUser.id;
        this.bitcoinService.BTC_USD
            .subscribe(function (data) {
            _this.BTC_USD = data.BTC_USD;
            _this.bitcoinURI = "bitcoin:" + _this.bitcoin_address + "?amount=" + price / _this.BTC_USD + "&label=" + label + "&message=" + message;
        });
        this.apiService
            .get(this.config.BTC_address_service + "publication/" + publicationId + "/sender/" + senderId, null, { withCredentials: false })
            .subscribe(function (data) {
            _this.bitcoin_address = data.address;
            _this.bitcoinURI = "bitcoin:" + _this.bitcoin_address + "?amount=" + price / _this.BTC_USD + "&label=" + label + "&message=" + message;
            _this.loaded = true;
        });
    };
    BuyDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'buy-dialog',
            template: __webpack_require__("../../../../../src/app/component/publication/buyDialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/publication/buyDialog.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2__service__["BictoinService"],
            __WEBPACK_IMPORTED_MODULE_3_app_service_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__service__["UserService"], Object])
    ], BuyDialogComponent);
    return BuyDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/publication/publication.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"publication-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"publication-header-image\"></div>\n    <mat-card-title>{{publication.title|uppercase}}</mat-card-title>\n    <mat-card-subtitle>{{publication.price|currency:'USD'}}</mat-card-subtitle>\n  </mat-card-header>\n\n  <div class=\"image-container\">\n\n    <img mat-card-image [src]=\"publication.photos[0]?publication.photos[0].url:''\" alt=\"Photo of a product\">\n  </div>\n\n  <mat-card-content>\n    <p>\n      {{publication.description}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <button class=\"buy-button\" mat-button (click)='openDialog()'>BUY</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/component/publication/publication.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null]}!../../../material/prebuilt-themes/deeppurple-amber.css"), "");

// module
exports.push([module.i, ".publication-card {\n  margin-top: 10px;\n  max-width: 400px; }\n\n.publication-header-image {\n  background-image: url(https://cdn.worldvectorlogo.com/logos/fender-1.svg);\n  background-size: contain;\n  background-position-y: center;\n  background-position-x: center;\n  background-repeat: no-repeat; }\n\n.image-container {\n  widows: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .image-container img {\n    margin-top: 0px;\n    width: 100%;\n    height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/publication/publication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_component_publication_buyDialog_component__ = __webpack_require__("../../../../../src/app/component/publication/buyDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicationComponent = (function () {
    function PublicationComponent(dialog, userService, router) {
        this.dialog = dialog;
        this.userService = userService;
        this.router = router;
        this.imgUrl = "";
    }
    PublicationComponent.prototype.ngOnInit = function () {
    };
    PublicationComponent.prototype.openDialog = function () {
        if (this.userService.loggedIn()) {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3_app_component_publication_buyDialog_component__["a" /* BuyDialogComponent */], {
                width: '250px',
                data: {
                    publication: this.publication
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PublicationComponent.prototype, "publication", void 0);
    PublicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'publication',
            template: __webpack_require__("../../../../../src/app/component/publication/publication.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/publication/publication.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__service__["UserService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/purchases/purchases.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/purchases/purchases.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item> Pepper </mat-list-item>\n  <mat-list-item> Salt </mat-list-item>\n  <mat-list-item> Paprika </mat-list-item>\n </mat-list>"

/***/ }),

/***/ "../../../../../src/app/component/purchases/purchases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchasesComponent = (function () {
    function PurchasesComponent() {
    }
    PurchasesComponent.prototype.ngOnInit = function () {
    };
    PurchasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-purchases',
            template: __webpack_require__("../../../../../src/app/component/purchases/purchases.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/purchases/purchases.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PurchasesComponent);
    return PurchasesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/s3-upload/s3-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"width: 100px; height: 100px; border: 1px solid black\" id=\"s3Upload\" S3Upload s3Upload=\"s3Upload\">\n        Drag & drop\n    </div> -->\n<input class=\"inputfile\" name=\"file\" id=\"file\" type=\"file\" size=\"60\" (change)=\"onChange($event)\">\n<!--Proxy element to the file input -->\n<label for=\"file\" class=\"btn btn-success btn-tn\">\n        \n        <span>choose a photo</span>\n</label>\n<button (click)=\"upload()\" type=\"button\" class=\"btn btn-success btn-with-icon btn-tn\">\n    <i class=\"fa fa-upload \"></i>\n    <span>upload</span>\n</button>\n\n<div class=\"repeater\">   \n        <ngb-progressbar \n        *ngFor=\"let file of s3Upload.managedUploads; let i = index\"\n        type=\"success\" \n        height=\"20px\"\n        [value]=\"file.total>0?(file.progress/file.total)*100:0\" \n        [max]=\"100\">\n            <span *ngIf=\"file.status==='PENDING'\"> {{(file.total>0?(file.progress/file.total)*100:0)| number : '1.2-2'}}% </span>\n            <span *ngIf=\"file.status==='COMPLETE'\">\n                <b>Uploaded</b>\n            </span>\n        </ngb-progressbar>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/s3-upload/s3-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n  margin-top: 10px; }\n\nngb-progressbar ::ng-deep.progress-bar {\n  height: 100%; }\n\nngb-progressbar {\n  margin-top: 5rem; }\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n  margin-bottom: 0px; }\n\n.repeater {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/s3-upload/s3-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_S3upload_service__ = __webpack_require__("../../../../../src/app/service/S3upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var S3UploadComponent = (function () {
    function S3UploadComponent(s3Upload) {
        this.s3Upload = s3Upload;
        this.fileUploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    S3UploadComponent.prototype.upload = function () {
        this.s3Upload.upload();
    };
    S3UploadComponent.prototype.pauseUpload = function (index) {
    };
    S3UploadComponent.prototype.removeUpload = function (index) {
    };
    S3UploadComponent.prototype.onChange = function (event) {
        var _this = this;
        this.s3Upload.add(event.srcElement.files)
            .subscribe(function (location) {
            //emit event to the outer element
            _this.fileUploaded.emit(location);
        }, function (e) {
            //TODO, emit an error image url
        });
    };
    S3UploadComponent.prototype.ngOnDestroy = function () {
        this.s3Upload.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], S3UploadComponent.prototype, "fileUploaded", void 0);
    S3UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 's3-upload',
            template: __webpack_require__("../../../../../src/app/component/s3-upload/s3-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/s3-upload/s3-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service_S3upload_service__["a" /* S3UploadService */]])
    ], S3UploadComponent);
    return S3UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/s3-upload/s3-upload.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3UploadDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_S3upload_service__ = __webpack_require__("../../../../../src/app/service/S3upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var S3UploadDirective = (function () {
    function S3UploadDirective(element) {
        this.fileOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.element = element;
    }
    S3UploadDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        this._preventAndStop(event);
        this.s3UploadService.add(transfer.files);
        this.fileOver.emit(false);
    };
    S3UploadDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    S3UploadDirective.prototype.onDragLeave = function (event) {
        if (event.currentTarget === this.element[0]) {
            return;
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    S3UploadDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    S3UploadDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    S3UploadDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_app_service_S3upload_service__["a" /* S3UploadService */])
    ], S3UploadDirective.prototype, "s3UploadService", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], S3UploadDirective.prototype, "fileOver", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], S3UploadDirective.prototype, "onDrop", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], S3UploadDirective.prototype, "onDragOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], S3UploadDirective.prototype, "onDragLeave", null);
    S3UploadDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[s3upload]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], S3UploadDirective);
    return S3UploadDirective;
}());



/***/ }),

/***/ "../../../../../src/app/component/search-main/search-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"stage\" [ngClass]=\"{'faded':isToggled}\">\n        <div class=\"cell\">\n          <div class=\"searchbar\" [ngClass]=\"{'clicked':isToggled}\">\n            <input type=\"text\"  (keyup.enter)='doSearch()' class=\"btn-extended\" placeholder=\"search\" [(ngModel)]='searchString'/>\n            <div class=\"btn-search\" (click)='doSearch()'></div>  \n          </div>\n        </div>\n\n      <div class=\"publication-container\" >    \n          <publication *ngFor=\"let pub of publications\" [publication]=\"pub\"></publication>\n      </div>\n    \n</div>\n      "

/***/ }),

/***/ "../../../../../src/app/component/search-main/search-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, ".stage {\n  background-color: #e2ff08;\n  margin: -35px 0 0;\n  height: 100%;\n  padding: 40px 0;\n  transition: all 0.3s ease-in-out; }\n  .stage.faded {\n    background-color: #88980f; }\n\n.publication-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px; }\n  .publication-container publication {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.searchbar {\n  position: relative;\n  top: -40px; }\n  .searchbar.clicked .btn-search {\n    border-radius: 0 30px 30px 0;\n    margin-left: 115px; }\n  .searchbar.clicked .btn-extended {\n    margin-left: -125px;\n    width: 250px;\n    padding: 20px 30px;\n    opacity: 1;\n    border-radius: 30px 0 0 30px; }\n  .searchbar .btn-search {\n    position: absolute;\n    background-color: #26404c;\n    color: white;\n    width: 60px;\n    height: 60px;\n    left: 50%;\n    top: 50%;\n    margin-left: -35px;\n    margin-top: -35px;\n    border-radius: 30px;\n    cursor: pointer;\n    transition: all 0.4s ease-in-out;\n    border: 5px solid #e2ff08; }\n    .searchbar .btn-search:before {\n      position: absolute;\n      content: '';\n      display: block;\n      top: 12px;\n      left: 14px;\n      width: 15px;\n      height: 15px;\n      border-radius: 20px;\n      box-shadow: 0px 0px 0px 3px #fff; }\n    .searchbar .btn-search:after {\n      content: \"\";\n      position: absolute;\n      width: 15px;\n      height: 4px;\n      top: 30px;\n      left: 27px;\n      background-color: #fff;\n      -webkit-transform: rotateZ(45deg);\n              transform: rotateZ(45deg);\n      border-radius: 3px; }\n  .searchbar .btn-extended {\n    position: absolute;\n    width: 0px;\n    height: 60px;\n    left: 50%;\n    margin-left: 35px;\n    top: 50%;\n    margin-top: -35px;\n    border-radius: 30px;\n    padding: 0;\n    font-size: 16px;\n    border: none;\n    opacity: 0;\n    transition: all 0.4s ease-in-out; }\n    .searchbar .btn-extended:focus {\n      outline-width: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/search-main/search-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchMain; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchMain = (function () {
    function SearchMain(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.isToggled = false;
        this.publications = [];
    }
    SearchMain.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService
            .get(this.config.publications_url)
            .subscribe(function (response) {
            _this.publications = response || [];
        });
    };
    SearchMain.prototype.doSearch = function () {
        var _this = this;
        if (this.isToggled && this.searchString) {
            this.apiService
                .get(this.config.publications_url + "?search=" + this.searchString)
                .subscribe(function (response) {
                _this.publications = response || [];
            });
        }
        this.isToggled = !this.isToggled;
    };
    SearchMain = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-main',
            template: __webpack_require__("../../../../../src/app/component/search-main/search-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/search-main/search-main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["ConfigService"]])
    ], SearchMain);
    return SearchMain;
}());



/***/ }),

/***/ "../../../../../src/app/component/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-container\">\n  <mat-card *ngIf=\"!submitted\">\n    <p [class]=\"notification.msgType\" *ngIf=\"notification\">{{notification.msgBody}}</p>\n\n    <h2 class=\"signup-header\">\n      Sign Up\n    </h2>\n    <div class=\"signup-icon\">\n      <span class=\"nb-person\"></span>\n    </div>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput [(ngModel)]=\"newUser.username\" placeholder=\"Username\">\n    </mat-form-field>\n\n\n    <mat-form-field class=\"full-width\">\n      <input matInput [(ngModel)]=\"newUser.email\" autocomplete=\"false\" placeholder=\"Email\">\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput [(ngModel)]=\"newUser.password\" autocomplete=\"new-password\" type=\"password\" placeholder=\"Password\">\n    </mat-form-field>\n\n    <div class=\"clearfix\">\n      <div class=\"float-right\">\n        <button class=\"signup-button\" (click)=\"doSignUp()\" color=\"primary\" mat-raised-button>Sign Up</button>\n      </div>\n    </div>\n\n  </mat-card>\n  <mat-spinner *ngIf=\"submitted\" mode=\"indeterminate\"></mat-spinner>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/sign-up/sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, ".signup-container {\n  width: 100%;\n  margin-top: -66px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  background: #4c8098; }\n  .signup-container mat-card {\n    max-width: 500px; }\n  .signup-container .signup-header {\n    font-family: \"Open Sans\", sans-serif;\n    width: 100%;\n    text-align: center; }\n  .signup-container .signup-icon {\n    width: 100%;\n    text-align: center;\n    font-size: 5em;\n    color: #4c8098; }\n  .signup-container .signup-button {\n    background: #292b2c; }\n\n.full-width {\n  width: 100%; }\n\n.half-width {\n  width: 49%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = (function () {
    function SignUpComponent(apiService, config, router, route) {
        this.apiService = apiService;
        this.config = config;
        this.router = router;
        this.route = route;
        this.newUser = { email: '', firstname: '', lastname: '', password: '', username: '', telephone: '', address: '' };
        this.submitted = false;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (params) {
            _this.notification = params;
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    SignUpComponent.prototype.doSignUp = function () {
        var _this = this;
        this.notification = undefined;
        this.submitted = true;
        this.apiService
            .post(this.config.signup_url, this.newUser)
            .delay(1000)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (e) {
            _this.submitted = false;
            var message = "An error occurred, please try again later.";
            if (e.error && e.error.result) {
                message = e.error.result;
            }
            _this.notification = { msgType: 'error', msgBody: message };
        });
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-sign-up',
            template: __webpack_require__("../../../../../src/app/component/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_2_app_service__["ConfigService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/spacer/spacer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/spacer/spacer.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.height]=\"getHeight\"></div>"

/***/ }),

/***/ "../../../../../src/app/component/spacer/spacer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpacerComponent = (function () {
    function SpacerComponent() {
    }
    SpacerComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SpacerComponent.prototype, "getHeight", {
        get: function () {
            return this.height ? this.height + 'px' : '10px';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SpacerComponent.prototype, "height", void 0);
    SpacerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spacer',
            template: __webpack_require__("../../../../../src/app/component/spacer/spacer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/spacer/spacer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpacerComponent);
    return SpacerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-toggleable-sm navbar-light bs-topnav\">\n  <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"conversion-container\">\n    <a routerLink=\"/\" class=\"navbar-brand hidden-xs-down\">\n      bit-shops\n    </a>\n    <div class=\"conversion\">\n      <span class=\"one\">1</span>\n      <mat-chip-list>\n        <mat-chip class=\"btc-chip\">BTC</mat-chip>\n      </mat-chip-list>\n      <span> = {{BTC_USD| currency:'USD':true:'1.2-2'}} </span>\n    </div>\n  </div>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav ml-auto\" [ngClass]=\"{'login-hide': loggedIn()}\">\n      <li class=\"nav-item hidden-sm-up\" routerLink=\"/\" *ngIf=\"!loggedIn()\">\n        <a class=\"nav-link\" href=\"/\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <i class=\"fa fa-home icon hidden-md-up\" aria-hidden=\"true\"></i>\n          <b>Home</b>\n        </a>\n      </li>\n\n      <li class=\"nav-item\" routerLink=\"signup\" *ngIf=\"!loggedIn()\">\n        <a class=\"nav-link\" href=\"/signup\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <i class=\"fa fa-user icon hidden-md-up\" aria-hidden=\"true\"></i>\n          <b>Sign Up</b>\n        </a>\n      </li>\n      <li class=\"nav-item\" routerLink=\"login\" *ngIf=\"!loggedIn()\">\n        <a class=\"nav-link\" href=\"/login\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <i class=\"fa fa-lock icon hidden-md-up\" aria-hidden=\"true\"></i>\n          <b>Log In</b>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/component/topnav/topnav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oxygen);", ""]);

// module
exports.push([module.i, "@media (max-width: 767px) {\n  ::ng-deep .navbar-nav {\n    height: 90vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    ::ng-deep .navbar-nav li .icon {\n      margin: 20px;\n      font-size: 1.5em; }\n    ::ng-deep .navbar-nav li a {\n      font-size: 1.5em; } }\n\n.login-hide {\n  display: none; }\n\n.bs-topnav {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: rgba(75, 99, 111, 0.95);\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.home-button {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.navbar a, .navbar a:hover, .navbar a:active, .navbar a:focus, .navbar a:visited {\n  color: #E8EAF6; }\n\n.conversion-container {\n  line-height: 30px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .conversion-container .conversion {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 0.8em;\n    color: #CDDC39;\n    width: 150px;\n    border: 1px solid black;\n    border-radius: 25px;\n    padding: 4px;\n    padding-left: 12px; }\n    .conversion-container .conversion mat-chip-list {\n      display: inline-block; }\n      .conversion-container .conversion mat-chip-list .btc-chip {\n        background-color: #e09a35;\n        height: 2em;\n        width: 3em;\n        padding: 0.6em;\n        font-size: 0.8em; }\n\n@media (min-width: 768px) {\n  .conversion-container {\n    z-index: 100; }\n  .collapse.navbar-collapse {\n    position: absolute;\n    left: -10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/topnav/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopnavComponent = (function () {
    function TopnavComponent(userService, authService, router, route, apiService, bitcoinService, config, sidebarService) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.bitcoinService = bitcoinService;
        this.config = config;
        this.sidebarService = sidebarService;
    }
    TopnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.bitcoinService.BTC_USD.subscribe(function (data) {
            _this.BTC_USD = data.BTC_USD;
        });
    };
    TopnavComponent.prototype.loggedIn = function () {
        return this.userService.loggedIn();
    };
    TopnavComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logout().subscribe(function () {
            _this.router.navigate([_this.returnUrl]);
        });
    };
    TopnavComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
    };
    TopnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topnav',
            template: __webpack_require__("../../../../../src/app/component/topnav/topnav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service__["UserService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["BictoinService"],
            __WEBPACK_IMPORTED_MODULE_1_app_service__["ConfigService"],
            __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["g" /* NbSidebarService */]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_component__ = __webpack_require__("../../../../../src/app/component/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_auth_guard_service__ = __webpack_require__("../../../../../src/app/service/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["LandingComponent"], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_service_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["LoginComponent"], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_service_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["SignUpComponent"], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_service_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["LandingComponent"], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_service_auth_guard_service__["a" /* AuthGuardService */]] },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["DashboardComponent"], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_service_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: '', redirectTo: 'browse', pathMatch: 'full' },
            { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["BrowseDashboardComponent"] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["ProfileDashboardComponent"] },
            { path: 'mypublications', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["MypublicationsDashboardComponent"] },
            { path: 'newpublication', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["NewpublicationDashboardComponent"] },
            { path: 'purchases', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["PurchaseDashboardComponent"] },
            { path: 'payments', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["PaymentDashboardComponent"] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2_app_component__["PageNotFoundComponent"] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_app_service_auth_guard_service__["a" /* AuthGuardService */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/service/S3upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var S3UploadService = (function () {
    function S3UploadService(http) {
        this.http = http;
        this.managedUploads = [];
        this.XHRRequestState = 'READY';
        this._s3dataendpoint = 'https://hb5xoj5n7k.execute-api.us-west-1.amazonaws.com/v1/';
        this._tag = 'S3Upload';
        this._endpoint = '';
        if (!this._policy)
            this._getS3Credentials();
    }
    // CRUD
    S3UploadService.prototype.add = function (file) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var files = __WEBPACK_IMPORTED_MODULE_3_underscore__["toArray"](file);
            files.map(function (file) {
                var path = _this._endpoint + ((typeof _this._policy.folder !== 'undefined') ? (_this._policy.folder + '/') : '') + file.name;
                var managedUpload = new __WEBPACK_IMPORTED_MODULE_2__shared_models__["c" /* UploadManager */](file, _this._policy.folder, path, _this._policy);
                managedUpload.xhr = _this._xhrCreate(managedUpload, observer);
                _this.managedUploads.push(managedUpload);
            });
        });
    };
    S3UploadService.prototype.delete = function (index) {
        var managedUpload = this._findWithIndex(index);
        if (managedUpload.status === 'PENDING')
            this.abort();
    };
    S3UploadService.prototype.reset = function () {
        this.abort();
        while (this.managedUploads.length) {
            this.managedUploads.shift();
        }
    };
    S3UploadService.prototype.abort = function () {
        var xhrAborted = false;
        var managedUpload = this._findMemberWithStatus('PENDING');
        if (managedUpload) {
            managedUpload.xhr.abort();
            this._changeUploadStatus(managedUpload, 'ABORTED');
            xhrAborted = true;
        }
        return xhrAborted;
    };
    // Upload
    S3UploadService.prototype.upload = function () {
        var files = this._findMemberWithStatus(['READY', 'ABORTED', 'ERROR']);
        if (files.length === 0)
            throw new Error('No files to upload in ' + this._tag);
        return this._upload(files[0]);
    };
    // XHR Methods
    S3UploadService.prototype._xhrCreate = function (managedUpload, observer) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('loadStart', function (ev) {
        });
        xhr.upload.addEventListener('progress', function (ev) {
            managedUpload.progress = ev.loaded;
            managedUpload.total = ev.total;
        });
        xhr.upload.addEventListener('load', function (ev) {
        });
        xhr.upload.addEventListener('loadend', function (ev) {
        });
        xhr.upload.addEventListener('error', function (ev) {
            _this._xhrOnIncomplete();
        });
        xhr.upload.addEventListener('abort', function (ev) {
            _this._xhrOnIncomplete();
        });
        xhr.upload.addEventListener('timeout', function (ev) {
            observer.error(xhr.response);
        });
        xhr.addEventListener('readystatechange', function (ev) {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var location_1 = xhr.getResponseHeader('Location');
                    observer.next(location_1);
                    observer.complete();
                    _this._xhrOnComplete(managedUpload);
                }
                else {
                    observer.error(xhr.response);
                }
            }
        });
        return xhr;
    };
    S3UploadService.prototype._xhrOnComplete = function (managedUpload) {
        this._changeUploadStatus(managedUpload, 'COMPLETE');
        if (this._findMemberWithStatus(['READY', 'ABORTED', 'ERROR']))
            this.upload();
    };
    S3UploadService.prototype._xhrOnIncomplete = function () {
    };
    // Utils
    S3UploadService.prototype._findWithIndex = function (index) {
        return this.managedUploads[index];
    };
    S3UploadService.prototype._findMemberWithStatus = function (status) {
        var statuses = typeof status === 'string' ? [status] : status;
        var managedUpload = __WEBPACK_IMPORTED_MODULE_3_underscore__["filter"](this.managedUploads, function (memberFile) {
            var statusMatch = __WEBPACK_IMPORTED_MODULE_3_underscore__["filter"](statuses, function (status) {
                return memberFile.status === status;
            });
            if (statusMatch.length !== 0)
                return true;
            return false;
        });
        if (managedUpload.length === 0)
            return null;
        return managedUpload;
    };
    S3UploadService.prototype._upload = function (managedUpload) {
        if (!managedUpload.xhr || !managedUpload.formData)
            throw new Error('ManagedUpload has not been prepared for XHR in ' + this._tag);
        managedUpload.xhr.open('POST', this._endpoint, true);
        managedUpload.xhr.send(managedUpload.formData);
        return this._changeUploadStatus(managedUpload, 'PENDING');
    };
    // Stateful changes
    S3UploadService.prototype._changeUploadStatus = function (managedUpload, status) {
        return managedUpload.status = status;
    };
    // Initial Get.
    S3UploadService.prototype._getS3Credentials = function () {
        var _this = this;
        return this.http.post(this._s3dataendpoint, {})
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            if (!response.xAmzBucket)
                throw new Error('Bucket wasn\'t returned from API call. You must return an S3 bucket in' + _this._tag);
            _this._policy = new __WEBPACK_IMPORTED_MODULE_2__shared_models__["b" /* Policy */](response);
            _this._endpoint = 'https://' + response.xAmzBucket + '.s3.amazonaws.com/';
        }, function (errorResponse) { throw new Error('Unable to grab credentials in ' + _this._tag); });
    };
    S3UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], S3UploadService);
    return S3UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_utilities_serialize__ = __webpack_require__("../../../../../src/app/shared/utilities/serialize.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestMethod;
(function (RequestMethod) {
    RequestMethod["Get"] = "GET";
    RequestMethod["Head"] = "HEAD";
    RequestMethod["Post"] = "POST";
    RequestMethod["Put"] = "PUT";
    RequestMethod["Delete"] = "DELETE";
    RequestMethod["Options"] = "OPTIONS";
    RequestMethod["Patch"] = "PATCH";
})(RequestMethod || (RequestMethod = {}));
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }
    ApiService.prototype.get = function (path, args, options) {
        if (options === void 0) { options = {
            headers: this.headers,
            withCredentials: true
        }; }
        if (args) {
            options['params'] = Object(__WEBPACK_IMPORTED_MODULE_4_app_shared_utilities_serialize__["a" /* serialize */])(args);
        }
        return this.http.get(path, options)
            .catch(this.checkError.bind(this));
    };
    ApiService.prototype.post = function (path, body, customHeaders) {
        return this.request(path, body, RequestMethod.Post, customHeaders);
    };
    ApiService.prototype.put = function (path, body) {
        return this.request(path, body, RequestMethod.Put);
    };
    ApiService.prototype.delete = function (path, body) {
        return this.request(path, body, RequestMethod.Delete);
    };
    ApiService.prototype.request = function (path, body, method, custemHeaders) {
        var _this = this;
        if (method === void 0) { method = RequestMethod.Post; }
        var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpRequest */](method, path, body, {
            headers: custemHeaders || this.headers,
            withCredentials: true
        });
        return this.http.request(req)
            .filter(function (response) { return response instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]; })
            .map(function (response) { return response.body; })
            .catch(function (error) { return _this.checkError(error); });
    };
    // Display error if logged in, otherwise redirect to IDP
    ApiService.prototype.checkError = function (error) {
        if (error && error.status === 401) {
            // this.redirectIfUnauth(error);
        }
        else {
            // this.displayError(error);
        }
        throw error;
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service__ = __webpack_require__("../../../../../src/app/service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = (function () {
    function AuthGuardService(router, userService, authService) {
        this.router = router;
        this.userService = userService;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        //handle logout
        if (state.url === '/logout') {
            this.authService
                .logout()
                .subscribe(function () {
                _this.router.navigate(['/']);
            });
            return false;
        }
        return this.isAllowedOnState(state.url);
    };
    AuthGuardService.prototype.isAllowedOnState = function (url) {
        var forbiddenWhenLoggedOut = /(\/dashboard\/*.*|\/profile|\/logout)/ig;
        var forbiddenWhenLoggedIn = ['/login', '/signup', '/'];
        var isLoggedIn = this.userService.loggedIn();
        if (isLoggedIn && forbiddenWhenLoggedIn.indexOf(url) > -1) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else if (!isLoggedIn && forbiddenWhenLoggedOut.test(url)) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_app_service__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__("../../../../../src/app/service/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(apiService, userService, config) {
        this.apiService = apiService;
        this.userService = userService;
        this.config = config;
    }
    AuthService.prototype.login = function (loginForm) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ fromObject: loginForm });
        var loginHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.apiService
            .post(this.config.login_url, params.toString(), loginHeaders)
            .map(function () {
            _this.userService.getMyInfo().subscribe();
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.apiService
            .post(this.config.logout_url, {})
            .map(function () {
            _this.userService.currentUser = null;
        });
    };
    AuthService.prototype.changePassowrd = function (passwordChanger) {
        return this.apiService.post(this.config.change_password_url, passwordChanger);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/service/bitcoin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BictoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BictoinService = (function () {
    function BictoinService(apiService, config) {
        this.sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.apiService = apiService;
        this.config = config;
    }
    Object.defineProperty(BictoinService.prototype, "BTC_USD", {
        get: function () {
            var _this = this;
            this.apiService
                .get(this.config.BTC_USD_API_url, null, { wihCredentials: false })
                .subscribe(function (json) {
                if (json.USD && json.USD.buy) {
                    _this.sub.next({
                        BTC_USD: json.USD.buy
                    });
                }
            });
            return this.sub;
        },
        enumerable: true,
        configurable: true
    });
    BictoinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1____["ApiService"]; }))),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1____["ConfigService"]; }))),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["ApiService"],
            __WEBPACK_IMPORTED_MODULE_1____["ConfigService"]])
    ], BictoinService);
    return BictoinService;
}());



/***/ }),

/***/ "../../../../../src/app/service/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigService = (function () {
    function ConfigService() {
        this._api_url = '/api';
        this._refresh_token_url = this._api_url + '/refresh';
        this._login_url = this._api_url + '/login';
        this._logout_url = this._api_url + '/logout';
        this._signup_url = this._api_url + '/signup';
        this._change_password_url = this._api_url + '/changePassword';
        this._self_url = this._api_url + '/self';
        this._users_url = this._api_url + '/user';
        this._publications_url = this._api_url + '/publication';
        this._self_publications_url = this.self_url + "/publication";
        this._BTC_USD_API_url = 'https://blockchain.info/ticker?cors=true';
        this._BTC_address_service = 'https://n03u3txun2.execute-api.us-west-1.amazonaws.com/v1/';
    }
    Object.defineProperty(ConfigService.prototype, "refresh_token_url", {
        get: function () {
            return this._refresh_token_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "self_url", {
        get: function () {
            return this._self_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "users_url", {
        get: function () {
            return this._users_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "login_url", {
        get: function () {
            return this._login_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "logout_url", {
        get: function () {
            return this._logout_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "change_password_url", {
        get: function () {
            return this._change_password_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "publications_url", {
        get: function () {
            return this._publications_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "BTC_USD_API_url", {
        get: function () {
            return this._BTC_USD_API_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "signup_url", {
        get: function () {
            return this._signup_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "self_publications_url", {
        get: function () {
            return this._self_publications_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "BTC_address_service", {
        get: function () {
            return this._BTC_address_service;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/service/config.service.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return __WEBPACK_IMPORTED_MODULE_2__config_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return __WEBPACK_IMPORTED_MODULE_3__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bitcoin_service__ = __webpack_require__("../../../../../src/app/service/bitcoin.service.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BictoinService", function() { return __WEBPACK_IMPORTED_MODULE_4__bitcoin_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__S3upload_service__ = __webpack_require__("../../../../../src/app/service/S3upload.service.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "S3UploadService", function() { return __WEBPACK_IMPORTED_MODULE_5__S3upload_service__["a"]; });








/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/service/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.currentUser = null;
    }
    UserService.prototype.initUser = function () {
        var _this = this;
        return this.apiService
            .get(this.config.refresh_token_url)
            .toPromise()
            .then(function (res) {
            if (res.access_token !== null) {
                return _this.getMyInfo()
                    .toPromise()
                    .then(function (user) {
                    _this.currentUser = user;
                });
            }
        })
            .catch(function () { return null; });
    };
    UserService.prototype.getMyInfo = function () {
        var _this = this;
        return this.apiService
            .get(this.config.self_url)
            .map(function (user) { return _this.currentUser = user; });
    };
    UserService.prototype.getAll = function () {
        return this.apiService
            .get(this.config.users_url);
    };
    UserService.prototype.loggedIn = function () {
        return this.currentUser != null;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/breakpoint-sizes.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakpointSizes; });
var BreakpointSizes;
(function (BreakpointSizes) {
    BreakpointSizes[BreakpointSizes["xs"] = 0] = "xs";
    BreakpointSizes[BreakpointSizes["is"] = 400] = "is";
    BreakpointSizes[BreakpointSizes["sm"] = 576] = "sm";
    BreakpointSizes[BreakpointSizes["md"] = 768] = "md";
    BreakpointSizes[BreakpointSizes["lg"] = 992] = "lg";
    BreakpointSizes[BreakpointSizes["xl"] = 1200] = "xl";
    BreakpointSizes[BreakpointSizes["xxl"] = 1400] = "xxl";
    BreakpointSizes[BreakpointSizes["xxxl"] = 1600] = "xxxl";
})(BreakpointSizes || (BreakpointSizes = {}));


/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_manager_model__ = __webpack_require__("../../../../../src/app/shared/models/upload-manager.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__upload_manager_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__policy_model__ = __webpack_require__("../../../../../src/app/shared/models/policy.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__policy_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breakpoint_sizes_model__ = __webpack_require__("../../../../../src/app/shared/models/breakpoint-sizes.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__breakpoint_sizes_model__["a"]; });





/***/ }),

/***/ "../../../../../src/app/shared/models/policy.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Policy; });
var Policy = (function () {
    function Policy(policy) {
        this.policy = policy;
        this.s3Signature = policy.s3Signature;
        this.accessKeyId = policy.accessKeyId;
        this.signatureKey = policy.signatureKey;
        this.base64Policy = policy.base64Policy;
        this.folder = policy.folder;
        this.xAmzAcl = policy.xAmzAcl;
        this.xAmzDate = policy.xAmzDate;
        this.xAmzBucket = policy.xAmzBucket;
        this.xAmzMetaUuid = policy.xAmzMetaUuid;
        this.xAmzAlgorithm = policy.xAmzAlgorithm;
        this.xAmzCredential = policy.xAmzCredential;
        this.xAmzServerSideEncryption = policy.xAmzServerSideEncryption;
    }
    return Policy;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/upload-manager.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadManager; });
var UploadManager = (function () {
    function UploadManager(file, folder, path, policy) {
        this.file = file;
        this.formData = this._createFormData(file, folder, path, policy);
        this.status = 'READY';
        this.path = path;
        this.progress = 0;
        this.total = 0;
    }
    UploadManager.prototype._createFormData = function (file, folder, path, policy) {
        var formData = new FormData;
        if (!policy)
            throw new Error('No valid policy in Managed upload creator');
        formData.append('acl', policy.xAmzAcl);
        formData.append('Content-Type', file.type);
        formData.append('X-Amz-Date', policy.xAmzDate);
        formData.append('x-amz-server-side-encryption', policy.xAmzServerSideEncryption);
        formData.append('x-amz-meta-uuid', policy.xAmzMetaUuid);
        formData.append('X-Amz-Algorithm', policy.xAmzAlgorithm);
        formData.append('X-Amz-Credential', policy.xAmzCredential);
        formData.append('X-Amz-Signature', policy.s3Signature);
        formData.append('Policy', policy.base64Policy);
        formData.append('key', folder + '/' + file.name);
        // File field must come last! 
        formData.append('file', file);
        return formData;
    };
    return UploadManager;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utilities/loose-invalid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = looseInvalid;
function looseInvalid(a) {
    return a === '' || a === null || a === undefined;
}


/***/ }),

/***/ "../../../../../src/app/shared/utilities/serialize.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = serialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loose_invalid__ = __webpack_require__("../../../../../src/app/shared/utilities/loose-invalid.ts");


function serialize(obj) {
    var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && !Object(__WEBPACK_IMPORTED_MODULE_1__loose_invalid__["a" /* looseInvalid */])(obj[key])) {
            params = params.set(key, obj[key]);
        }
    }
    return params;
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map