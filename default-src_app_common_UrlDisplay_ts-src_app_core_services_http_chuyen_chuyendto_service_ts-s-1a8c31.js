"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["default-src_app_common_UrlDisplay_ts-src_app_core_services_http_chuyen_chuyendto_service_ts-s-1a8c31"],{

/***/ 22155:
/*!**************************************!*\
  !*** ./src/app/common/UrlDisplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlDisplayId": () => (/* binding */ UrlDisplayId)
/* harmony export */ });
var UrlDisplayId;
(function (UrlDisplayId) {
    //dashboard
    UrlDisplayId["Demo"] = "/default/dashboard/demo";
    UrlDisplayId["Analysis"] = "/default/dashboard/analysis";
    UrlDisplayId["Monitor"] = "/default/dashboard/monitor";
    UrlDisplayId["Workbench"] = "/default/dashboard/workbench";
    UrlDisplayId["spxe00101"] = "xe/spxe00101";
    //chuyen
    UrlDisplayId["spch00101"] = "chuyen/spch00101";
    UrlDisplayId["spch00201"] = "chuyen/spch00201";
    // khach hang
    UrlDisplayId["spkh00101"] = "khachhang/spkh00101";
    UrlDisplayId["spkh00201"] = "khachhang/spkh00201";
})(UrlDisplayId || (UrlDisplayId = {}));


/***/ }),

/***/ 91565:
/*!************************************************************!*\
  !*** ./src/app/core/services/common/webservice.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebserviceService": () => (/* binding */ WebserviceService)
/* harmony export */ });
/* harmony import */ var C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_base_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/base-http.service */ 54246);






class WebserviceService {
  constructor(http, httpt) {
    this.http = http;
    this.httpt = httpt;
    this.urlApi = 'https://fakestoreapi.com/';
    this.provincesApi = _app_common_const__WEBPACK_IMPORTED_MODULE_1__.tinhthanhApi;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  GetCallProvinces(fncSuccess, fncError) {
    var _this = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promise = _this.httpt.get(_this.provincesApi);

      promise.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promise;
    })();
  }

  GetCallCommonWs(serviceName, fncSuccess, fncError) {
    var _this2 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promise = _this2.httpt.get(_this2.urlApi + serviceName, {
        observe: 'response'
      });

      promise.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promise;
    })();
  }

  PostCallCommonWs(serviceName, data, fncSuccess, fncError) {
    var _this3 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this3.http.post(serviceName, data, {
        needSuccessInfo: false
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

  GetCallWs(serviceName, fncSuccess, fncError) {
    var _this4 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promise = _this4.http.get(serviceName, {
        observe: 'response'
      });

      promise.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promise;
    })();
  }

  PostCallWs(serviceName, data, fncSuccess, fncError) {
    var _this5 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this5.http.post(serviceName, data, {
        needSuccessInfo: false
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

  PutCallWs(serviceName, data, fncSuccess, fncError) {
    var _this6 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this6.http.put(serviceName, data, {
        needSuccessInfo: true
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

  DeleteCallWs(serviceName, data, fncSuccess, fncError) {
    var _this7 = this;

    return (0,C_Users_Administrator_Desktop_angular_theme_ng_ant_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let promisr = _this7.http.delete(serviceName, data, {
        needSuccessInfo: true
      });

      promisr.subscribe({
        next: res => {
          if (fncSuccess != null) {
            fncSuccess(res);
          }

          return true;
        },
        error: err => {
          if (fncError != null) {
            fncError();
          }

          return false;
        },
        complete: () => {}
      });
      return promisr;
    })();
  }

}

WebserviceService.??fac = function WebserviceService_Factory(t) {
  return new (t || WebserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_services_base_http_service__WEBPACK_IMPORTED_MODULE_2__.BaseHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

WebserviceService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
  token: WebserviceService,
  factory: WebserviceService.??fac,
  providedIn: 'root'
});

/***/ }),

/***/ 42996:
/*!*************************************************************!*\
  !*** ./src/app/core/services/http/chuyen/chuyen.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChuyenService": () => (/* binding */ ChuyenService)
/* harmony export */ });
/* harmony import */ var _app_utils_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils/tools */ 58995);
/* harmony import */ var src_app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/const */ 44556);
/* harmony import */ var _common_reuse_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/reuse-strategy */ 68602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _base_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-http.service */ 54246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






class ChuyenService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    getChuyens(params) {
        return this.http.post(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.ChuyenAnt100GetAll, params, { needSuccessInfo: false });
    }
    getChuyen(id) {
        return this.http.get(`${src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.ChuyenAnt100Get}/${id}/`);
    }
    createChuyen(params) {
        return this.http.post(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.ChuyenAnt100Create, params, { needSuccessInfo: false });
    }
    updateChuyen(params) {
        return this.http.put(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.ChuyenAnt100Update, params);
    }
    updateTrangthai(params) {
        return this.http.post(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.ChuyenAnt100UpdateTrangthai, params, { needSuccessInfo: false });
    }
    deleteChuyen(id) {
        return this.http.post(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.ChuyenAnt100Delete, { ids: id }, { needSuccessInfo: true });
    }
    delateChuyens() { }
    refresh(url) {
        const sourceUrl = url;
        // ?????????????????????????????????????????????tab????????????????????????????????????
        const currentRoute = (0,_app_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnGetPathWithoutParam)(sourceUrl);
        const queryParams = this.router.parseUrl(sourceUrl).queryParams;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            _common_reuse_strategy__WEBPACK_IMPORTED_MODULE_2__.SimpleReuseStrategy.deleteRouteSnapshot(this.getPathKey(sourceUrl));
            this.router.navigate([currentRoute], { queryParams });
        });
    }
    getPathKey(path) {
        const tempPath = (0,_app_utils_tools__WEBPACK_IMPORTED_MODULE_0__.fnFormatePath)(path);
        const pathParam = this.router.parseUrl(path).queryParams;
        let pathParamString = '';
        if (Object.keys(pathParam).length > 0) {
            pathParamString = JSON.stringify(this.router.parseUrl(path).queryParams);
        }
        return tempPath + pathParamString;
    }
}
ChuyenService.??fac = function ChuyenService_Factory(t) { return new (t || ChuyenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_base_http_service__WEBPACK_IMPORTED_MODULE_3__.BaseHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ChuyenService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: ChuyenService, factory: ChuyenService.??fac, providedIn: 'root' });


/***/ }),

/***/ 69386:
/*!****************************************************************!*\
  !*** ./src/app/core/services/http/chuyen/chuyendto.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChuyendtoService": () => (/* binding */ ChuyendtoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _chuyen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chuyen.service */ 42996);


class ChuyendtoService {
    constructor(dataService) {
        this.dataService = dataService;
        this.id = "";
        this.ngaydi = "";
        this.ngayve = "";
        this.tienxe = 0; // ti???n ????a tr?????c
        this.biensoxe = "";
        this.idtai = "";
        this.idphu = "";
        this.changduong = "";
        this.trangthai = 0;
    }
    clear() {
        this.id = "";
        this.ngaydi = "";
        this.ngayve = "";
        this.tienxe = 0; // ti???n ????a tr?????c
        this.biensoxe = "";
        this.idtai = "";
        this.idphu = "";
        this.changduong = "";
        this.trangthai = 0;
    }
}
ChuyendtoService.??fac = function ChuyendtoService_Factory(t) { return new (t || ChuyendtoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_chuyen_service__WEBPACK_IMPORTED_MODULE_0__.ChuyenService)); };
ChuyendtoService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ChuyendtoService, factory: ChuyendtoService.??fac, providedIn: 'root' });


/***/ }),

/***/ 13951:
/*!*****************************************************!*\
  !*** ./src/app/pages/system/base/base.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/common/webservice.service */ 91565);
/* harmony import */ var src_app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/const */ 44556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);








class BaseComponent {
    constructor(webService, router, cdf, datePipe) {
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.formItemNm = {};
        this.list = [];
        this.title = 'nam pham';
    }
    ngOnDestroy() {
        this.destroy();
    }
    ngOnInit() {
        this.setFormItemNm();
    }
    setFormItemNm() {
        let url = this.router.url;
        this.webService.PostCallWs(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.Ant100PostUrlParams, { url: url }, (response) => {
            this.list = response;
            this.list.forEach((row) => {
                this.formItemNm[row.stt] = row.title1;
            });
            this.fnInit();
        });
    }
    getDate() {
        let date = this.datePipe.transform(new Date(), 'yyyy/MM/dd') + "";
        return date;
    }
    formatDate(d) {
        if (d == null || d == '') {
            return '';
        }
        let date = this.datePipe.transform(d, 'yyyy/MM/dd') + "";
        return date;
    }
}
BaseComponent.??fac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_0__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe)); };
BaseComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: BaseComponent, selectors: [["app-base"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????ProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe])], decls: 0, vars: 0, template: function BaseComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 97313:
/*!**************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowchiphi/subwindow-chiphi.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowChiphiService": () => (/* binding */ SubwindowChiphiService)
/* harmony export */ });
/* harmony import */ var _subwindowchiphi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowchiphi.component */ 89602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/widget/base-modal */ 69174);



class SubwindowChiphiService {
    constructor(modalWrapService) {
        this.modalWrapService = modalWrapService;
    }
    getContentComponent() {
        return _subwindowchiphi_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowchiphiComponent;
    }
    show(modalOptions = {}, params) {
        return this.modalWrapService.show(this.getContentComponent(), modalOptions, params);
    }
}
SubwindowChiphiService.??fac = function SubwindowChiphiService_Factory(t) { return new (t || SubwindowChiphiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_app_widget_base_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWrapService)); };
SubwindowChiphiService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: SubwindowChiphiService, factory: SubwindowChiphiService.??fac, providedIn: 'root' });


/***/ }),

/***/ 89602:
/*!***************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowchiphi/subwindowchiphi.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowchiphiComponent": () => (/* binding */ SubwindowchiphiComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/common/const */ 44556);
/* harmony import */ var _app_utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/utils/tools */ 58995);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 20558);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);














const _c0 = ["Tlsotien"];
const _c1 = ["Tlghichu"];
const _c2 = ["Tfooter"];
const _c3 = ["Ttilte"];
function SubwindowchiphiComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "tr", 7)(2, "td")(3, "nz-form-item")(4, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "td")(7, "nz-form-item")(8, "nz-form-control", 10)(9, "nz-input-number", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function SubwindowchiphiComponent_ng_container_11_Template_nz_input_number_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r7.fnTongchiphi($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "td")(11, "nz-form-item")(12, "nz-form-control", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzSm", 18)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzSm", 18)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzMin", 0)("nzMax", 10000)("nzStep", 100)("nzDisabled", ctx_r0.showInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzSm", 18)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r0.showInfo);
} }
const _c4 = function () { return { "font-weight": "bold" }; };
function SubwindowchiphiComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " T\u1ED5ng chi ph\u00ED: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](6, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind3"](4, 2, ctx_r2.tongchiphi * 1000, "VND", ""));
} }
const _c5 = function () { return { "color": "red" }; };
function SubwindowchiphiComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "span", 13)(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "L\u01B0u \u00FD: ki\u1EC3m tra th\u00F4ng tin ch\u00EDnh x\u00E1c tr\u01B0\u1EDBc khi x\u00E1c nh\u1EADn. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](7, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](8, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" T\u1ED5ng chi ph\u00ED: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind3"](6, 3, ctx_r4.tongchiphi * 1000, "VND", ""), "");
} }
class SubwindowchiphiComponent {
    constructor(modalRef, fb, cdf, modalSrv) {
        this.modalRef = modalRef;
        this.fb = fb;
        this.cdf = cdf;
        this.modalSrv = modalSrv;
        this.dataList = [];
        this.data = [];
        this.const = _app_common_const__WEBPACK_IMPORTED_MODULE_0__;
        this.lstchiphi = _app_common_const__WEBPACK_IMPORTED_MODULE_0__.lstchiphi;
        this.tongchiphi = 0;
        this.showInfo = false;
        this.data.push({
            tenchiphi: 'T??n chi ph??',
            sotien: 'S??? ti???n',
            ghichu: 'Ghi ch??',
        });
        // this.params = {}
    }
    getAsyncFnData(modalValue) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(modalValue);
    }
    getCurrentValue() {
        if (!(0,_app_utils_tools__WEBPACK_IMPORTED_MODULE_1__.fnCheckForm)(this.addEditForm)) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.addEditForm.value);
    }
    createItem(element) {
        return this.fb.group({
            tenchiphi: [element.tenchiphi, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            sotien: [element.sotien, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            ghichu: [''],
        });
    }
    getControls() {
        return this.addEditForm.get('items').controls;
    }
    ngOnInit() {
        if (this.params.listcp != undefined && this.params.listcp.length > 0) {
            this.lstchiphi = this.params.listcp;
        }
        if (this.params.status != undefined && this.params.status == 5) {
            this.showInfo = true;
        }
        this.addEditForm = this.fb.group({
            items: this.fb.array([]),
        });
        for (let element of this.lstchiphi) {
            this.items = this.addEditForm.get('items');
            this.items.push(this.createItem(element));
        }
        this.fnTinhchiphi();
    }
    fnTongchiphi($event) {
        this.fnTinhchiphi();
    }
    fnTinhchiphi() {
        this.tongchiphi = 0;
        for (let element of this.addEditForm.value.items) {
            this.tongchiphi = this.tongchiphi + element.sotien;
        }
    }
}
SubwindowchiphiComponent.??fac = function SubwindowchiphiComponent_Factory(t) { return new (t || SubwindowchiphiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService)); };
SubwindowchiphiComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: SubwindowchiphiComponent, selectors: [["app-subwindowchiphi"]], viewQuery: function SubwindowchiphiComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c3, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.Tlsotien = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.Tlghichu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.Tfooter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.Ttilte = _t.first);
    } }, decls: 16, vars: 9, consts: [["nz-form", "", 3, "formGroup"], [3, "nzSize", "nzTemplateMode", "nzFooter", "nzTitle"], [3, "nzWidth"], ["formArrayName", "items"], [4, "ngFor", "ngForOf"], ["Tfooter", ""], ["Ttilte", ""], [3, "formGroupName"], ["nzErrorTip", "", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "tenchiphi", "name", "tenchiphi", "formControlName", "tenchiphi", "readonly", ""], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp ti\u1EC1n \u0111\u01B0a tr\u01B0\u1EDBc", 3, "nzSm", "nzXs"], ["id", "sotien", "name", "sotien", "formControlName", "sotien", 3, "nzMin", "nzMax", "nzStep", "nzDisabled", "ngModelChange"], ["nz-input", "", "id", "ghichu", "name", "ghichu", "formControlName", "ghichu", "nzAutosize", "", 3, "disabled"], [3, "ngStyle"]], template: function SubwindowchiphiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 0)(1, "nz-table", 1)(2, "thead")(3, "tr")(4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "T\u00EAn Ch\u00ED Ph\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "S\u1ED1 ti\u1EC1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Ghi ch\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, SubwindowchiphiComponent_ng_container_11_Template, 14, 12, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, SubwindowchiphiComponent_ng_template_12_Template, 5, 7, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, SubwindowchiphiComponent_ng_template_14_Template, 7, 9, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.addEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzSize", "small")("nzTemplateMode", true)("nzFooter", _r1)("nzTitle", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzWidth", "80px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzWidth", "50px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("nzWidth", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.getControls());
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzAutosizeDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__.NzInputNumberComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJ3aW5kb3djaGlwaGkuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 8538:
/*!************************************************************************!*\
  !*** ./src/app/widget/modal/subwindowchiphi/subwindowchiphi.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubwindowchiphiModule": () => (/* binding */ SubwindowchiphiModule)
/* harmony export */ });
/* harmony import */ var _subwindowchiphi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subwindowchiphi.component */ 89602);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class SubwindowchiphiModule {
}
SubwindowchiphiModule.??fac = function SubwindowchiphiModule_Factory(t) { return new (t || SubwindowchiphiModule)(); };
SubwindowchiphiModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: SubwindowchiphiModule });
SubwindowchiphiModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](SubwindowchiphiModule, { declarations: [_subwindowchiphi_component__WEBPACK_IMPORTED_MODULE_0__.SubwindowchiphiComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_common_UrlDisplay_ts-src_app_core_services_http_chuyen_chuyendto_service_ts-s-1a8c31.js.map