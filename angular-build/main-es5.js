(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n  <head>\n    <link\n      rel=\"stylesheet\"\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n    />\n  </head>\n\n  <header>\n    <div class=\"head\">\n      <a href=\"#\" routerLink=\"/\">\n        <p><i class=\"fa fa-diamond fa_custom fa-1x\"></i> dtech</p></a\n      >\n    </div>\n  </header>\n  <div class=\"employee\">\n    <div class=\"emp\">\n      <p>Employee Salary</p>\n      <div class=\"add\">\n        <a href=\"#\">Add Salary</a>\n      </div>\n    </div>\n    <!-- <form> -->\n    <div class=\"row\">\n      <div class=\"form-group col-md-4\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"input1\"\n          placeholder=\"Employee Name\"\n        />\n      </div>\n      <div class=\"form-group col-md-4\">\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option disabled>Role</option>\n          <option>Executives</option>\n          <option>Manager</option>\n          <option>Senior staff</option>\n          <option>Junior Staff</option>\n        </select>\n      </div>\n      <div class=\"form-group col-md-4\">\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option disabled>Loan Status</option>\n          <option>No Loan Taken</option>\n          <option>Pending</option>\n          <option>Approved</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group all-date col-md-4\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"example-date-input\"\n          placeholder=\"From\"\n          onfocus=\"(this.type='date')\"\n        />\n      </div>\n      <div class=\"form-group all-date col-md-4\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"example-date-input\"\n          placeholder=\"To\"\n          onfocus=\"(this.type='date')\"\n        />\n      </div>\n      <div class=\"search col-md-4\">\n        <a href=\"#\">Search</a>\n      </div>\n    </div>\n    <!-- </form> -->\n    <div class=\"big-table\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Employee</th>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Role</th>\n            <th scope=\"col\">Payslip</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\" class=\"now\">\n              <div class=\"ib\">E</div>\n               Emma Neuer\n            </th>\n            <td>JW-134</td>\n            <td>emma20@gmail.com</td>\n            <td>\n              <select class=\"rad\">\n                <option>Executives</option>\n                <option>Manager</option>\n                <option>Senior staff</option>\n                <option>Junior Staff</option>\n              </select>\n            </td>\n            <td class=\"generate\">\n              <a href=\"#\" routerLink=\"/payroll\">Generate slip</a>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\" class=\"now\">\n              <div class=\"ib\">J</div>\n              Joel Jason\n            </th>\n            <td>JW-128</td>\n            <td>jason324@gmail.com</td>\n            <td>\n              <select class=\"rad\">\n                <option>Executives</option>\n                <option>Manager</option>\n                <option>Senior staff</option>\n                <option>Junior Staff</option>\n              </select>\n            </td>\n            <td class=\"generate\">\n              <a href=\"#\" routerLink=\"/payroll\">Generate slip</a>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\" class=\"now\">\n              <div class=\"ib\">L</div>\n              Larry Fred\n            </th>\n            <td>JR-257</td>\n            <td>freddy60@gmail.com</td>\n            <td>\n              <select class=\"rad\">\n                <option>Executives</option>\n                <option>Manager</option>\n                <option>Senior staff</option>\n                <option>Junior Staff</option>\n              </select>\n            </td>\n            <td class=\"generate\">\n              <a href=\"#\" routerLink=\"/payroll\">Generate slip</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"main\">\n  <head>\n    <link\n      rel=\"stylesheet\"\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n    />\n  </head>\n  <header>\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\n      <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\"\n        ><i class=\"fa fa-diamond fa_custom fa-1x\"></i> DTECH</a\n      >\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        (click)=\"toggleNavbar()\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNavAltMarkup\"\n        aria-controls=\"navbarNavAltMarkup\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div\n        class=\"collapse navbar-collapse\"\n        [ngClass]=\"{ show: navbarOpen }\"\n        id=\"navbarNavAltMarkup\"\n      >\n        <div class=\"navbar-nav\">\n          <a class=\"nav-item nav-link active\" href=\"#\" routerLink=\"/\"\n            >Home <span class=\"sr-only\">(current)</span></a\n          >\n          <a class=\"nav-item nav-link\" href=\"#\">Our Solution</a>\n          <a class=\"nav-item nav-link\" href=\"#\">About Us</a>\n          <a class=\"nav-item nav-link\" href=\"#\">How We Work</a>\n          <div class=\"log\">\n            <a class=\"nav-item nav-link log\" href=\"#\" routerLink=\"/sign-in\"\n              >Login</a\n            >\n          </div>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <div class=\"text\">\n    <h2>Proudly Automating</h2>\n    <h1>Payroll Weekly, Bi-weekly, Monthly</h1>\n    <p>Perfect payroll is at the root of business growth</p>\n    <div class=\"learn\">\n      <a href=\"#\">Learn more</a>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n  />\n</head>\n<header>\n  <div class=\"main\">\n    <div class=\"head\">\n      <a href=\"#\" routerLink=\"/\"> <p> <i class=\"fa fa-diamond fa_custom fa-1x\"></i> DTECH</p></a>\n      <div class=\"bar\">\n          <select class=\"rad\">\n              <option disabled>Export</option>\n              <option><a href=\"#\">CSV</a></option>\n              <option><a href=\"#\">PDF</a></option>\n              <option><a href=\"#\"> <i class=\"fa fa-print\"></i> Print </a></option>\n            </select>\n      </div>\n    </div>\n<header>\n    <div class=\"payslip\">\n      <div class=\"heading\">\n        Payslip for the month of november 2019\n      </div>\n      <div class=\"pay\">\n        PAYSLIP #42356 <br />\n        <small>Salary month: November 2019</small>\n      </div>\n      <div class=\"add\">\n        Diamond Technologies <br />\n        254 Shomito, Lagos <br />\n        Nigeria.\n      </div>\n      <div class=\"employee\">\n          Shoniyitan Rasaq <br>\n          Emplyee ID: 1342AB4\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"light\">Earnings</div>\n          <table class=\"table table-borderless\">\n            <tbody>\n              <tr>\n                <td class=\"first\">Basic Salary</td>\n                <td class=\"edge\">$60500</td>\n              </tr>\n              <tr>\n                <td class=\"first\">Dearness Allowance (D.A)</td>\n                <td class=\"edge\">$155</td>\n              </tr>\n              <tr>\n                <td class=\"first\">House Rent Allowance (H.R.A)</td>\n                <td class=\"edge\">$63</td>\n              </tr>\n              <tr>\n                <td class=\"first\">Conveyance</td>\n                <td class=\"edge\">$257</td>\n              </tr>\n              <tr>\n                <td class=\"first\">Allowance</td>\n                <td class=\"edge\">$1242</td>\n              </tr>\n              <tr>\n                <td class=\"first\">Medical Allowance</td>\n                <td class=\"edge\">$587</td>\n              </tr>\n              <tr>\n                <td class=\"first\">Other Allowance</td>\n                <td class=\"edge\">$810</td>\n              </tr>\n              <tr>\n                <td class=\"first\">Total Earning</td>\n                <td class=\"edge\">$70435</td>\n              </tr>\n              <div class=\"net\">\n                  Net Salary: $60258\n                </div>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"light\">Deductions</div>\n          <table class=\"table table-borderless\">\n            <tbody>\n              <tr>\n                <td  class=\"first\">Tax Deducted Source (T.D.S)</td>\n                <td class=\"edge\">20%</td>\n              </tr>\n              <tr>\n                <td  class=\"first\">Provident Fund</td>\n                <td class=\"edge\">$0</td>\n              </tr>\n              <tr>\n                <td  class=\"first\">ESI</td>\n                <td class=\"edge\">$0</td>\n              </tr>\n              <tr>\n                <td  class=\"first\">Total Deductions</td>\n                <td class=\"edge first\">$7800</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"/>\n</head>\n<div class=\"main\">\n  <div class=\"head\">\n      <a href=\"#\" routerLink=\"/\"> <p> <i class=\"fa fa-diamond fa_custom fa-1x\"></i> DTECH</p></a>\n  </div>\n    <div class=\"field\">\n        <div class=\"container col-md-12\">\n      <div class=\"heading\">Login</div>\n      <form [formGroup]=\"details\" (ngSubmit)=\"saveUserDetails()\">\n        <div class=\"sign-in row\">\n          <div class=\"col-md-12\">\n            <input\n              id=\"email\"\n              type=\"email\"\n              placeholder=\"Email\"\n              formControlName=\"email\"\n            />\n            <div\n              *ngIf=\"\n                details.get('email')?.hasError('required') &&\n                details.get('email')?.touched\n              \" class=\"inv\"\n            >\n              Please enter your Email\n            </div>\n          </div>\n          <div class=\"col-md-12\" >\n            <input\n              type=\"password\"\n              placeholder=\"password\"\n              formControlName=\"password\"\n              id=\"password\"\n            />\n            <div\n              *ngIf=\"\n                details.get('password')?.hasError('required') &&\n                details.get('password')?.touched\" class=\"inv\">\n              Password is required\n            </div>\n            <div class=\"forget\">\n              <a href=\"#\">Forget password?</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"btn\">\n          <button class=\"btn btn-primary\"  routerLink=\"/employee\" [disabled]=\"!details.valid\">\n                Login\n          </button>\n        </div>\n        <div class=\"exist\">\n            <p>Didn't have an account?  <a href=\"#\" routerLink=\"/sign-up\">Register</a></p>\n          </div>\n      </form>\n    </div>\n  </div>\n</div>\n      ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"/>\n</head>\n<div class=\"main\">\n    <div class=\"head\">\n        <a href=\"#\" routerLink=\"/\"> <p> <i class=\"fa fa-diamond fa_custom fa-1x\"></i> DTECH</p></a>\n    </div>\n    <div class=\"field\">\n        <div class=\"container col-md-12\">\n      <div class=\"heading\">Sign Up</div>\n      <form [formGroup]=\"details\" (ngSubmit)=\"saveUserDetails()\">\n        <div class=\" sign-up row\">\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <input\n                    type=\"text\"\n                    placeholder=\"First Name\"\n                    formControlName=\"firstName\"\n                    id=\"firstName\"\n                  />\n                  <div\n                    *ngIf=\"details.get('firstName')?.hasError('required') &&\n                      details.get('firstName')?.touched\" class=\"inv\">\n                    Please enter First Name\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <input\n                    type=\"text\"\n                    placeholder=\"Last Name\"\n                    formControlName=\"lastName\"\n                    id=\"lastName\"\n                  />\n                  <div\n                    *ngIf=\"\n                      details.get('lastName')?.hasError('required') &&\n                      details.get('lastName')?.touched\" class=\"inv\">\n                    Please enter Last Name\n                  </div>\n                </div>\n          </div>\n          <div class=\"row\">\n              <div class=\" wider col-md-12\">\n                  <input\n                    id=\"email\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    formControlName=\"email\"\n                  />\n                  <div\n                    *ngIf=\"\n                      details.get('email')?.hasError('required') &&\n                      details.get('email')?.touched\n                    \" class=\"inv\">\n                    Please enter your Email\n                  </div>\n                </div>\n          </div>\n          <div class=\"row\">\n              <div class=\" wider col-md-12\">\n                  <input\n                    id=\"phone\"\n                    type=\"tel\"\n                    placeholder=\"Phone Number\"\n                    formControlName=\"phoneNumber\"\n                  />\n                </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <input\n                    type=\"password\"\n                    placeholder=\"Password\"\n                    formControlName=\"password\"\n                    id=\"password\"\n                  />\n                  <div\n                    *ngIf=\"\n                      details.get('password')?.hasError('required') &&\n                      details.get('password')?.touched\n                    \" class=\"inv\">\n                    Password is required\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <input\n                      type=\"password\"\n                      placeholder=\" Confirm Password\"\n                      formControlName=\"confirmPassword\"\n                      id=\"confirmPassword\"\n                    />\n                    <div\n                      *ngIf=\"\n                        details.get('confirmPassword')?.hasError('required') &&\n                        details.get('confirmPassword')?.touched\n                      \" class=\"inv\">\n                      Password confirmation is required\n                    </div>\n                  </div>\n          </div>\n        </div>\n        <div class=\"btn\">\n            <button class=\"btn btn-primary\" routerLink=\"/sign-in\" [disabled]=\"!details.valid\">\n                  Register\n            </button>\n          </div>\n          <div class=\"exist\">\n              <p>Already have an account? <a href=\"#\" target=\"_blank\" routerLink=\"/sign-in\">Login</a></p>\n            </div>\n      </form>\n    </div>\n  </div>\n  \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'payroll';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
            /* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
            /* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/payroll/payroll.component.ts");
            /* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                        _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_10__["PayrollComponent"],
                        _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                            { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"] },
                            { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"] },
                            { path: 'payroll', component: _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_10__["PayrollComponent"] },
                            { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"] }
                        ]),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/employee/employee.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/employee/employee.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n.head {\n  font-family: \"Open Sans\", sans-serif;\n  padding: 10px;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  margin-right: 5%;\n  font-weight: 600;\n}\n.head a {\n  text-decoration: none;\n  color: #fff;\n}\n.head p {\n  text-transform: uppercase;\n}\n.main {\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  height: 100vh;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n}\n.main .employee {\n  width: 95%;\n  height: 88%;\n  top: 50%;\n  left: 50%;\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  background: #fff;\n  padding: 40px 30px;\n}\n.main .employee .emp {\n  display: inline-flex;\n}\n.main .employee .add {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  padding: 0.3rem;\n  display: inline-block;\n  background: #fccb82;\n  color: #4F4F4F;\n  border-radius: 1rem;\n}\n.main .employee .add a {\n  color: #4F4F4F;\n  text-decoration: none;\n}\n.main .employee .search a {\n  position: absolute;\n  text-align: center;\n  background: #fccb82;\n  color: #4F4F4F;\n  padding: 0.4rem;\n  width: 205px;\n  text-decoration: none;\n}\n.main .employee .now {\n  display: inline-flex;\n  font-weight: 300;\n  color: #4F4F4F;\n}\n.main .employee .now .ib {\n  background: #a09e9e;\n  color: #fff;\n  text-align: center;\n  padding: 0.2rem;\n  width: 30px;\n  border-radius: 50px;\n}\n.rad {\n  border-radius: 1rem;\n  padding: 0.3rem;\n  box-shadow: none;\n  border: 0.5px solid #acabab;\n}\n.generate a {\n  white-space: nowrap;\n  text-align: center;\n  background: #fccb82;\n  color: #4F4F4F;\n  padding: 0.4rem;\n  text-decoration: none;\n}\ntable {\n  color: #4F4F4F;\n}\n.big-table {\n  overflow-x: auto;\n  margin-top: 5px;\n}\n@media screen and (max-width: 510px) {\n  .ib {\n    width: 50px !important;\n    height: 50% !important;\n    border-radius: 50% !important;\n  }\n}\n@media screen and (min-width: 511px) and (max-width: 784px) {\n  .ib {\n    width: 40% !important;\n    height: 40% !important;\n    border-radius: 50% !important;\n  }\n}\n@media screen and (max-width: 766px) {\n  .search a {\n    position: relative !important;\n    border-radius: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxwYXlyb2xsL3NyY1xcYXBwXFxlbXBsb3llZVxcZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtcGxveWVlL0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxccGF5cm9sbC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhaWFibGUuc2NzcyIsInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsNkVBQUE7QUNEUjtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDRVI7QURDSTtFQUNJLHlCQUFBO0FDQ1I7QUZaQTtFQUNJLG1FQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUVlSjtBRmJJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRWVSO0FGYlE7RUFDSSxvQkFBQTtBRWVaO0FGWlE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUVjWjtBRlpZO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FFY2hCO0FGVlE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRVlaO0FGVFE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRVdaO0FGVlk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUVZaEI7QUZOQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUVTSjtBRk5BO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBRVNKO0FGRUE7RUFDSSxjQUFBO0FFQ0o7QUZFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRUNKO0FGRUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtFRUNOO0FBQ0Y7QUZFQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0VFQU47QUFDRjtBRkdBO0VBQ0k7SUFDSSw2QkFBQTtJQUNBLG1CQUFBO0VFRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFpYWJsZSc7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ExYzRmZCAwJSwgI2MyZTlmYiAxMDAlKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAuZW1wbG95ZWUge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgaGVpZ2h0OiA4OCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMzBweDtcclxuXHJcbiAgICAgICAgLmVtcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZjY2I4MjtcclxuICAgICAgICAgICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoIGEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZjY2I4MjtcclxuICAgICAgICAgICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDIwNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgICAgICAuaWIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE2MCwgMTU4LCAxNTgpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJhZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE3MiwgMTcxLCAxNzEpO1xyXG59XHJcblxyXG4uZ2VuZXJhdGUgYSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjY2I4MjtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vLyBzbWFsbCB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDc2JTtcclxuLy8gICAgIGxlZnQ6IDE0JTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4vLyAgICAgY29sb3I6ICM0RjRGNEY7XHJcbi8vIH1cclxuXHJcbnRhYmxlIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG59XHJcblxyXG4uYmlnLXRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgICAuaWIge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTExcHgpIGFuZCAobWF4LXdpZHRoOiA3ODRweCkge1xyXG4gICAgLmliIHtcclxuICAgICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcclxuICAgIC5zZWFyY2ggYSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIH1cclxufSIsIi5oZWFkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcIik7XG4uaGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaGVhZCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkIHAge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICNhMWM0ZmQgMCUsICNjMmU5ZmIgMTAwJSk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5tYWluIC5lbXBsb3llZSB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogODglO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNDBweCAzMHB4O1xufVxuLm1haW4gLmVtcGxveWVlIC5lbXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5tYWluIC5lbXBsb3llZSAuYWRkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICByaWdodDogNSU7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmNjYjgyO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5tYWluIC5lbXBsb3llZSAuYWRkIGEge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1haW4gLmVtcGxveWVlIC5zZWFyY2ggYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmNjYjgyO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgcGFkZGluZzogMC40cmVtO1xuICB3aWR0aDogMjA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYWluIC5lbXBsb3llZSAubm93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuLm1haW4gLmVtcGxveWVlIC5ub3cgLmliIHtcbiAgYmFja2dyb3VuZDogI2EwOWU5ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4ycmVtO1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLnJhZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYWNhYmFiO1xufVxuXG4uZ2VuZXJhdGUgYSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZjY2I4MjtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuXG4uYmlnLXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xuICAuaWIge1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTExcHgpIGFuZCAobWF4LXdpZHRoOiA3ODRweCkge1xuICAuaWIge1xuICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQwJSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuICAuc2VhcmNoIGEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/employee/employee.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/employee/employee.component.ts ***!
          \************************************************/
        /*! exports provided: EmployeeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () { return EmployeeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EmployeeComponent = /** @class */ (function () {
                function EmployeeComponent() {
                }
                EmployeeComponent.prototype.ngOnInit = function () {
                };
                return EmployeeComponent;
            }());
            EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.scss */ "./src/app/employee/employee.component.scss")).default]
                })
            ], EmployeeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n.main {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('helloquence-5fNmWej4tAA-unsplash.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n}\n.main .navbar .navbar-brand {\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  margin-right: 5%;\n  font-weight: 600;\n}\n.main .navbar-nav a {\n  font-family: \"Open Sans\", sans-serif;\n  text-align: center;\n  color: #fff;\n  margin: 2%;\n  white-space: nowrap;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.main .navbar-toggler {\n  color: #fff;\n}\n.main .log a {\n  height: 40px;\n  width: 160px;\n  display: inline-block;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #fccb82;\n  text-align: center;\n  border-radius: 5rem;\n  margin-top: 10px;\n  margin-right: 10px;\n  font-weight: 600;\n  font-size: 1.2rem;\n  line-height: initial;\n}\n.main .text {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-family: \"Open Sans\", sans-serif;\n  transform: translate(-50%, -50%);\n  color: #eee;\n  text-align: center;\n}\n.main .text h1 {\n  font-size: 4rem;\n  margin: 2rem 0;\n}\n.main .text h2 {\n  font-size: 1.6rem;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.main .text p {\n  font-size: 1.6rem;\n  margin-bottom: 5rem;\n}\n.main .text .learn {\n  white-space: nowrap;\n  padding: 0.8em;\n  display: inline-block;\n  background-color: #fccb82;\n  border-radius: 5rem;\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.main .text .learn a {\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 600;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  line-height: initial;\n}\n@media screen and (max-width: 990px) {\n  .navbar-nav {\n    position: fixed;\n    right: 0;\n    height: 100vh;\n    flex-direction: column;\n    background-color: #8d8a8a;\n    z-index: 1000;\n    align-items: initial;\n    overflow-y: scroll;\n  }\n\n  .log a {\n    margin-left: 20px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXHBheXJvbGwvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2RUFBQTtBQUVSO0VBQ0ksMkhBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURHSTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FESUk7RUFDSSxXQUFBO0FDRlI7QURLSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNIUjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSlI7QURNUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSlo7QURPUTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0xaO0FEUVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDTlo7QURTUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNQWjtBRFVZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ1JoQjtBRGNBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsUUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUNYTjs7RURjRTtJQUNJLDRCQUFBO0VDWE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm1haW4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwLjIpLHJnYmEoMCwwLDAsMC4yKSksdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2hlbGxvcXVlbmNlLTVmTm1XZWo0dEFBLXVuc3BsYXNoLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLW5hdiBhIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMiU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAubG9nIGEge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNjYjgyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxlYXJuIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC44ZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjY2I4MjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ4YThhO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGluaXRpYWw7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2cgYSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk0cHgpLCAobWF4LXdpZHRoOiAxMjY0cHgpIHt9IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbi5tYWluIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hlbGxvcXVlbmNlLTVmTm1XZWo0dEFBLXVuc3BsYXNoLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tYWluIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluIC5uYXZiYXItbmF2IGEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAyJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluIC5uYXZiYXItdG9nZ2xlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1haW4gLmxvZyBhIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2NiODI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG59XG4ubWFpbiAudGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluIC50ZXh0IGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbi5tYWluIC50ZXh0IGgyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubWFpbiAudGV4dCBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4ubWFpbiAudGV4dCAubGVhcm4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNjYjgyO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XG59XG4ubWFpbiAudGV4dCAubGVhcm4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5uYXZiYXItbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDhhOGE7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cblxuICAubG9nIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                // setStyle() {
                //   let styles = {
                //     'background':
                //    }
                //   return 'url(\'../../assets/images/payroll.jpg\')';
                // }
                function HomeComponent() {
                    this.navbarOpen = false;
                }
                HomeComponent.prototype.toggleNavbar = function () {
                    this.navbarOpen = !this.navbarOpen;
                };
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/payroll/payroll.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/payroll/payroll.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n.head {\n  font-family: \"Open Sans\", sans-serif;\n  padding: 10px;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  margin-right: 5%;\n  font-weight: 600;\n}\n.head a {\n  text-decoration: none;\n  color: #fff;\n}\n.head p {\n  text-transform: uppercase;\n}\n.main {\n  height: 100vh;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n}\n.main .head {\n  font-family: \"Open Sans\", sans-serif;\n  padding: 10px;\n  color: #4F4F4F;\n  font-weight: 600;\n}\n.main .head a {\n  text-decoration: none;\n  color: #4F4F4F;\n}\n.main .head a p {\n  text-transform: uppercase;\n}\n.main .bar {\n  position: absolute;\n  right: 20px;\n  top: 3px;\n}\n.main .bar .rad {\n  border-radius: 1rem;\n  padding: 0.3rem;\n  box-shadow: none;\n  border: none;\n}\n.main .bar .rad:focus {\n  outline: none;\n}\n.payslip {\n  width: 95%;\n  height: 94%;\n  top: 53%;\n  left: 50%;\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  background: #fff;\n  padding: 40px 30px;\n}\n.payslip .heading {\n  text-align: center;\n  text-transform: uppercase;\n  color: gray;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n}\n.payslip .pay {\n  color: gray;\n  float: right;\n}\n.add {\n  color: gray;\n  font-weight: 500;\n}\n.employee {\n  margin-top: 3px;\n  color: gray;\n  font-weight: 500;\n}\n.light {\n  font-weight: 700;\n  color: gray;\n  font-family: \"Open Sans\", sans-serif;\n}\n.edge {\n  position: absolute;\n  right: 10px;\n  color: gray;\n}\ntbody tr {\n  border: 1px solid rgba(199, 197, 197, 0.8) !important;\n}\ntbody tr .first {\n  color: gray;\n  font-weight: 600;\n}\n.net {\n  color: gray;\n  font-weight: 600;\n}\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\nselect::-ms-expand {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .payslip {\n    height: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5cm9sbC9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXHBheXJvbGwvc3JjXFxhcHBcXHBheXJvbGxcXHBheXJvbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BheXJvbGwvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxwYXlyb2xsL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFpYWJsZS5zY3NzIiwic3JjL2FwcC9wYXlyb2xsL3BheXJvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsNkVBQUE7QUNEUjtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDRVI7QURDSTtFQUNJLHlCQUFBO0FDQ1I7QUZYQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FFY0o7QUZaSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRWNSO0FGWlE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUVjWjtBRlpZO0VBQ0kseUJBQUE7QUVjaEI7QUZSSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUVVUjtBRlJRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FFVVo7QUZQUTtFQUNJLGFBQUE7QUVTWjtBRkpBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRU9KO0FGTEk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUVPUjtBRkpJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUVNUjtBRkZBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FFS0o7QUZGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUVLSjtBRkZBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUVLSjtBRkhBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRU1KO0FGSEE7RUFDSSxxREFBQTtBRU1KO0FGSkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUVNUjtBRkZBO0VBQ0ksV0FBQTtFQUNJLGdCQUFBO0FFS1I7QUZGQTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FFS0o7QUZGQTtFQUNJLGFBQUE7QUVLSjtBRkRBO0VBRUk7SUFDSSx1QkFBQTtFRUdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXlyb2xsL3BheXJvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy92YWlhYmxlJztcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuLm1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5oZWFkIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC5iYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICB0b3A6IDNweDtcclxuXHJcbiAgICAgICAgLnJhZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhZDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGF5c2xpcCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiA5NCU7XHJcbiAgICB0b3A6IDUzJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcblxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXkge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5lbXBsb3llZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5saWdodCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmVkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxudGJvZHkgdHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTksIDE5NywgMTk3LCAwLjgpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmZpcnN0IHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmV0IHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAucGF5c2xpcCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIuaGVhZCB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuLmhlYWQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhlYWQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZCBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWFpbiAuaGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluIC5oZWFkIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuLm1haW4gLmhlYWQgYSBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tYWluIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDNweDtcbn1cbi5tYWluIC5iYXIgLnJhZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1haW4gLmJhciAucmFkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBheXNsaXAge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDk0JTtcbiAgdG9wOiA1MyU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDQwcHggMzBweDtcbn1cbi5wYXlzbGlwIC5oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucGF5c2xpcCAucGF5IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmFkZCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZW1wbG95ZWUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGlnaHQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5lZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbnRib2R5IHRyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTksIDE5NywgMTk3LCAwLjgpICFpbXBvcnRhbnQ7XG59XG50Ym9keSB0ciAuZmlyc3Qge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5ldCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5zZWxlY3Qge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF5c2xpcCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/payroll/payroll.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/payroll/payroll.component.ts ***!
          \**********************************************/
        /*! exports provided: PayrollComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function () { return PayrollComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PayrollComponent = /** @class */ (function () {
                function PayrollComponent() {
                }
                PayrollComponent.prototype.ngOnInit = function () {
                };
                return PayrollComponent;
            }());
            PayrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-payroll',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payroll.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payroll/payroll.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payroll.component.scss */ "./src/app/payroll/payroll.component.scss")).default]
                })
            ], PayrollComponent);
            /***/ 
        }),
        /***/ "./src/app/sign-in/sign-in.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/sign-in/sign-in.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n.main {\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  height: 100vh;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n}\n.main .field {\n  width: 420px;\n  height: 420px;\n  color: gray;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  background: #fff;\n  padding: 40px 30px;\n  border-radius: 20px;\n}\n.main .heading {\n  margin: 0;\n  padding: 0 0 20px;\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #4F4F4F;\n  font-family: \"Open Sans\", sans-serif;\n}\n.main .field input {\n  margin-top: 25px;\n  color: gray;\n  font-family: \"Open Sans\", sans-serif;\n  border: 1px solid #a1c4fd;\n  background: #fff;\n  width: 100%;\n  font-size: 1rem;\n  padding: 10px 20px;\n  border-radius: 0.7rem;\n}\n.main .login input:focus {\n  outline: none;\n}\n.main .inv {\n  color: #f34d4d;\n}\n.main .forget {\n  position: relative;\n  transform: translateY(-5%);\n  left: 60%;\n}\n.main .forget a {\n  color: #4F4F4F;\n}\n.main .exist {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500px;\n  font-size: 16px;\n  color: #4F4F4F;\n  margin-top: 10px;\n  text-align: center;\n}\n.main .exist a {\n  color: #4F4F4F;\n}\n.main .exist a:hover {\n  text-decoration: none;\n}\n.main .btn-primary {\n  margin-left: 0;\n  width: 320px;\n  display: block;\n  justify-content: center;\n  font-size: 1.2rem;\n  position: relative;\n  right: 3%;\n}\n.main .btn-primary :active {\n  outline: none;\n  cursor: pointer;\n}\n@media screen and (max-width: 450px) {\n  .main {\n    background-image: none;\n  }\n}\n.head {\n  font-family: \"Open Sans\", sans-serif;\n  padding: 10px;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  margin-right: 5%;\n  font-weight: 600;\n}\n.head a {\n  text-decoration: none;\n  color: #fff;\n}\n.head p {\n  text-transform: uppercase;\n}\n.sign-in {\n  margin-top: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXHBheXJvbGwvc3JjXFxhc3NldHNcXHNjc3NcXF9mb3JtLnNjc3MiLCJzcmMvYXBwL3NpZ24taW4vQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxwYXlyb2xsL3NyY1xcYXBwXFxzaWduLWluXFxzaWduLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ24taW4vQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxwYXlyb2xsL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZFQUFBO0FDRUEsNkVBQUE7QUREUjtFQUNJLG1FQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUVFSjtBRkFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUVFSjtBRkNBO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUVDSjtBRkVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FFQUo7QUZHQTtFQUNJLGFBQUE7QUVESjtBRktBO0VBQ0ksY0FBQTtBRUhKO0FGTUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBRUpKO0FGTUk7RUFDSSxjQUFBO0FFSlI7QUZRQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUVOSjtBRlFJO0VBQ0ksY0FBQTtBRU5SO0FGU0k7RUFDSSxxQkFBQTtBRVBSO0FGWUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FFVko7QUZZSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FFVlI7QUZlQTtFQUVJO0lBQ0ksc0JBQUE7RUViTjtBQUNGO0FDeEZBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRDBGSjtBQ3hGSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBRDBGUjtBQ3ZGSTtFQUNJLHlCQUFBO0FEeUZSO0FEbEdBO0VBQ0ksaUJBQUE7QUNxR0oiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuLm1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ExYzRmZCAwJSwgI2MyZTlmYiAxMDAlKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbi5maWVsZCB7XHJcbiAgICB3aWR0aDogNDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ExYzRmZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjdyZW07XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuLmludiB7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgNzcsIDc3KTtcclxufVxyXG5cclxuLmZvcmdldCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICAgIGxlZnQ6IDYwJTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIH1cclxufVxyXG5cclxuLmV4aXN0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMyU7XHJcblxyXG4gICAgOmFjdGl2ZXtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG5cclxuICAgIC5tYWluIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvZm9ybSc7XHJcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3ZhaWFibGUnO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG4uc2lnbi1pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbi5tYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ExYzRmZCAwJSwgI2MyZTlmYiAxMDAlKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm1haW4gLmZpZWxkIHtcbiAgd2lkdGg6IDQyMHB4O1xuICBoZWlnaHQ6IDQyMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNDBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm1haW4gLmhlYWRpbmcge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5tYWluIC5maWVsZCBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ExYzRmZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XG59XG4ubWFpbiAubG9naW4gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLm1haW4gLmludiB7XG4gIGNvbG9yOiAjZjM0ZDRkO1xufVxuLm1haW4gLmZvcmdldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIGxlZnQ6IDYwJTtcbn1cbi5tYWluIC5mb3JnZXQgYSB7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuLm1haW4gLmV4aXN0IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4gLmV4aXN0IGEge1xuICBjb2xvcjogIzRGNEY0Rjtcbn1cbi5tYWluIC5leGlzdCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1haW4gLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHdpZHRoOiAzMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMyU7XG59XG4ubWFpbiAuYnRuLXByaW1hcnkgOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLm1haW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cbn1cbi5oZWFkIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5oZWFkIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWQgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zaWduLWluIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59IiwiLmhlYWQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/sign-in/sign-in.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/sign-in/sign-in.component.ts ***!
          \**********************************************/
        /*! exports provided: SignInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function () { return SignInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var SignInComponent = /** @class */ (function () {
                function SignInComponent(fb) {
                    this.details = fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                }
                SignInComponent.prototype.saveUserDetails = function () {
                    console.log('Form Submitted', this.details.value);
                };
                return SignInComponent;
            }());
            SignInComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sign-in/sign-in.component.scss")).default]
                })
            ], SignInComponent);
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/sign-up/sign-up.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n.main {\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\n  height: 100vh;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n}\n.main .field {\n  width: 420px;\n  height: 420px;\n  color: gray;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  background: #fff;\n  padding: 40px 30px;\n  border-radius: 20px;\n}\n.main .heading {\n  margin: 0;\n  padding: 0 0 20px;\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #4F4F4F;\n  font-family: \"Open Sans\", sans-serif;\n}\n.main .field input {\n  margin-top: 25px;\n  color: gray;\n  font-family: \"Open Sans\", sans-serif;\n  border: 1px solid #a1c4fd;\n  background: #fff;\n  width: 100%;\n  font-size: 1rem;\n  padding: 10px 20px;\n  border-radius: 0.7rem;\n}\n.main .login input:focus {\n  outline: none;\n}\n.main .inv {\n  color: #f34d4d;\n}\n.main .forget {\n  position: relative;\n  transform: translateY(-5%);\n  left: 60%;\n}\n.main .forget a {\n  color: #4F4F4F;\n}\n.main .exist {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500px;\n  font-size: 16px;\n  color: #4F4F4F;\n  margin-top: 10px;\n  text-align: center;\n}\n.main .exist a {\n  color: #4F4F4F;\n}\n.main .exist a:hover {\n  text-decoration: none;\n}\n.main .btn-primary {\n  margin-left: 0;\n  width: 320px;\n  display: block;\n  justify-content: center;\n  font-size: 1.2rem;\n  position: relative;\n  right: 3%;\n}\n.main .btn-primary :active {\n  outline: none;\n  cursor: pointer;\n}\n@media screen and (max-width: 450px) {\n  .main {\n    background-image: none;\n  }\n}\n.head {\n  font-family: \"Open Sans\", sans-serif;\n  padding: 10px;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  margin-right: 5%;\n  font-weight: 600;\n}\n.head a {\n  text-decoration: none;\n  color: #fff;\n}\n.head p {\n  text-transform: uppercase;\n}\n.sign-up {\n  margin-top: -30px;\n}\n.field {\n  height: 505px !important;\n  margin: 5px;\n}\n.wider {\n  width: 390px;\n}\n.btn {\n  margin-top: 5px;\n}\n@media screen and (max-width: 767px) {\n  .field {\n    height: 620px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXHBheXJvbGwvc3JjXFxhc3NldHNcXHNjc3NcXF9mb3JtLnNjc3MiLCJzcmMvYXBwL3NpZ24tdXAvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxwYXlyb2xsL3NyY1xcYXBwXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ24tdXAvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxwYXlyb2xsL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZFQUFBO0FDRUEsNkVBQUE7QUREUjtFQUNJLG1FQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUVFSjtBRkFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUVFSjtBRkNBO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUVDSjtBRkVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FFQUo7QUZHQTtFQUNJLGFBQUE7QUVESjtBRktBO0VBQ0ksY0FBQTtBRUhKO0FGTUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBRUpKO0FGTUk7RUFDSSxjQUFBO0FFSlI7QUZRQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUVOSjtBRlFJO0VBQ0ksY0FBQTtBRU5SO0FGU0k7RUFDSSxxQkFBQTtBRVBSO0FGWUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FFVko7QUZZSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FFVlI7QUZlQTtFQUVJO0lBQ0ksc0JBQUE7RUViTjtBQUNGO0FDeEZBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRDBGSjtBQ3hGSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBRDBGUjtBQ3ZGSTtFQUNJLHlCQUFBO0FEeUZSO0FEbEdBO0VBQ0ksaUJBQUE7QUNxR0o7QURsR0E7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUNxR0o7QURsR0E7RUFDSSxZQUFBO0FDcUdKO0FEbEdBO0VBQ0ksZUFBQTtBQ3FHSjtBRGxHQTtFQUNJO0lBQ0csd0JBQUE7RUNxR0w7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG4ubWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuLmZpZWxkIHtcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTFjNGZkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuN3JlbTtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uaW52IHtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCA3NywgNzcpO1xyXG59XHJcblxyXG4uZm9yZ2V0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gICAgbGVmdDogNjAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhpc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAzJTtcclxuXHJcbiAgICA6YWN0aXZle1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gICAgLm1haW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9mb3JtJztcclxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFpYWJsZSc7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbi5zaWduLXVwIHtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gICAgaGVpZ2h0OiA1MDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi53aWRlciB7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgIGhlaWdodDogNjIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWFpbiAuZmllbGQge1xuICB3aWR0aDogNDIwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIGNvbG9yOiBncmF5O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubWFpbiAuaGVhZGluZyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLm1haW4gLmZpZWxkIGlucHV0IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTFjNGZkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbn1cbi5tYWluIC5sb2dpbiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubWFpbiAuaW52IHtcbiAgY29sb3I6ICNmMzRkNGQ7XG59XG4ubWFpbiAuZm9yZ2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgbGVmdDogNjAlO1xufVxuLm1haW4gLmZvcmdldCBhIHtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG4ubWFpbiAuZXhpc3Qge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbiAuZXhpc3QgYSB7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuLm1haW4gLmV4aXN0IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbiAuYnRuLXByaW1hcnkge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgd2lkdGg6IDMyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAzJTtcbn1cbi5tYWluIC5idG4tcHJpbWFyeSA6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAubWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxufVxuLmhlYWQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhlYWQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZCBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpZ24tdXAge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmZpZWxkIHtcbiAgaGVpZ2h0OiA1MDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweDtcbn1cblxuLndpZGVyIHtcbiAgd2lkdGg6IDM5MHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZmllbGQge1xuICAgIGhlaWdodDogNjIwcHggIWltcG9ydGFudDtcbiAgfVxufSIsIi5oZWFkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/sign-up/sign-up.component.ts ***!
          \**********************************************/
        /*! exports provided: SignUpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () { return SignUpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var SignUpComponent = /** @class */ (function () {
                function SignUpComponent(fb) {
                    this.details = fb.group({
                        firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        phoneNumber: [''],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                }
                SignUpComponent.prototype.saveUserDetails = function () {
                    console.log('Form Submitted', this.details.value);
                };
                return SignUpComponent;
            }());
            SignUpComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")).default]
                })
            ], SignUpComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\USER\Desktop\payroll\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map