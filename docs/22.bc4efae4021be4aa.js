"use strict";
(self["webpackChunkjob"] = self["webpackChunkjob"] || []).push([[22],{

/***/ 9198:
/*!***********************************************!*\
  !*** ./src/app/job-board/components/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "JobBoardComponent": () => (/* reexport safe */ _job_board_job_board_component__WEBPACK_IMPORTED_MODULE_0__.JobBoardComponent)
/* harmony export */ });
/* harmony import */ var _job_board_job_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-board/job-board.component */ 4485);


const COMPONENTS = [_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_0__.JobBoardComponent];

/***/ }),

/***/ 4485:
/*!***********************************************************************!*\
  !*** ./src/app/job-board/components/job-board/job-board.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobBoardComponent": () => (/* binding */ JobBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 1866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-icon */ 577);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5765);
/* harmony import */ var _shared_pipes_date_ago_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/date-ago/date-ago.pipe */ 659);
/* harmony import */ var _shared_pipes_rating_rating_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/rating/rating.pipe */ 4460);









const _c0 = function () {
  return {
    "width.px": 19,
    "height.px": 18
  };
};

function JobBoardComponent_div_2_svg_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rating_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", rating_r4, " ");
  }
}

const _c1 = function (a1) {
  return ["/details", a1];
};

const _c2 = function () {
  return {
    "width.px": 13,
    "height.px": 18,
    fill: "#878D9D"
  };
};

const _c3 = function () {
  return {
    "width.px": 16,
    "height.px": 20
  };
};

function JobBoardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8)(4, "div", 9)(5, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 15)(14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, JobBoardComponent_div_2_svg_icon_15_Template, 2, 3, "svg-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 18)(18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JobBoardComponent_div_2_Template_button_click_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.saveJob($event, data_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "svg-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 21)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c1, data_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", data_r1.pictures[0] + "?q=" + i_r2 + "-", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Department Name * ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 9, data_r1.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Posted ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 11, data_r1.createdAt), "");
  }
}

class JobBoardComponent {
  constructor(jobsService) {
    this.jobsService = jobsService;
    this.jobs = [];
    this.currentPage = 1;
    this.itemsPerPage = 8;
    this.page = 1;
    this.pageSize = 5;
  }

  ngOnInit() {
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  saveJob(event, id) {
    event.preventDefault();
    event.stopPropagation();
  }

  static {
    this.ɵfac = function JobBoardComponent_Factory(t) {
      return new (t || JobBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.JobsService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: JobBoardComponent,
      selectors: [["app-job-board"]],
      decls: 6,
      vars: 10,
      consts: [[1, "wrapper-container"], [1, "job-wrapper"], ["class", "job", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "pagination-container"], [1, "pagination-wrapper", 3, "page", "pageSize", "rotate", "collectionSize", "maxSize", "pageChange"], [1, "job", 3, "routerLink"], [1, "job__image-container"], [1, "job__image", 3, "src"], [1, "job__content"], [1, "job__description"], [1, "job__title"], [1, "job__department"], [1, "job__location"], ["src", "/Artem-Azarov-test-task-Jobs-Angular/assets/icons/location-marker.svg", 1, "job__location-marker", 3, "svgStyle"], [1, "job__location-address"], [1, "job__info"], [1, "job__rating"], ["class", "job__rating-marker", "src", "/Artem-Azarov-test-task-Jobs-Angular/assets/icons/rating.svg", 3, "svgStyle", 4, "ngFor", "ngForOf"], [1, "job__select"], [1, "job__save", 3, "click"], ["src", "/Artem-Azarov-test-task-Jobs-Angular/assets/icons/save.svg", 3, "svgStyle"], [1, "job__post"], ["src", "/Artem-Azarov-test-task-Jobs-Angular/assets/icons/rating.svg", 1, "job__rating-marker", 3, "svgStyle"]],
      template: function JobBoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, JobBoardComponent_div_2_Template, 24, 17, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "ngb-pagination", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function JobBoardComponent_Template_ngb_pagination_pageChange_5_listener($event) {
            return ctx.page = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 6, ctx.jobs, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("rotate", true)("collectionSize", ctx.jobs.length)("maxSize", 5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _shared_pipes_date_ago_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__.DateAgoPipe, _shared_pipes_rating_rating_pipe__WEBPACK_IMPORTED_MODULE_2__.RatingPipe],
      styles: [".job-wrapper {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 29px 9px 15px 9px;\n}\n\n.wrapper-container {\n  background-color: #F5F5F5;\n}\n\n.job {\n  display: flex;\n  margin-bottom: 8px;\n  padding: 24px 16px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);\n  font-size: 16px;\n  line-height: 25px;\n  color: #878d9d;\n  font-family: \"ProximaNova-Regular\";\n}\n\n.job:hover {\n  cursor: pointer;\n}\n\n.job__image-container {\n  width: 85px;\n}\n\n.job__image-container .job__image {\n  object-fit: cover;\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n  max-width: none;\n}\n\n.job__content {\n  display: flex;\n  margin-left: 26px;\n  width: 100%;\n}\n\n.job__description {\n  width: 100%;\n  margin-right: 32px;\n}\n\n.job__info {\n  display: flex;\n  flex-shrink: 0;\n}\n\n.job__title {\n  font-size: 20px;\n  line-height: 25px;\n  font-family: \"ProximaNova-Bold\", sans-serif;\n  letter-spacing: -0.625px;\n  color: #3a4562;\n  margin-bottom: 8px;\n}\n\n.job__department {\n  margin-bottom: 8px;\n  letter-spacing: 0.23619px;\n  font-family: \"ProximaNova-Regular\";\n  font-size: 16px;\n  line-height: 25px;\n}\n\n.job__location {\n  display: flex;\n}\n\n.job__location-marker {\n  display: flex;\n}\n\n.job__location-address {\n  margin-left: 8px;\n  font-family: \"ProximaNova-Regular\";\n  font-size: 16px;\n  line-height: 25px;\n  letter-spacing: 0.23619px;\n}\n\n.job__rating {\n  display: flex;\n  align-items: center;\n  min-width: 96px;\n}\n\n.job__select {\n  margin-left: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n.pagination-container {\n  display: flex;\n  justify-content: center;\n  margin: 49px auto;\n}\n\n@media (max-width: 767px) {\n  .job-wrapper {\n    background-color: #E6E9F2;\n    margin: 9px 9x 9px 26px;\n  }\n  .job {\n    background-color: #EFF0F5;\n    width: 100%;\n    padding: 13px 16px;\n  }\n  .job__image-container {\n    width: 66px;\n    padding-top: 30px;\n  }\n  .job__image-container .job__image {\n    object-fit: fill;\n    width: 66px;\n    height: 66px;\n    border-radius: 50%;\n    max-width: none;\n  }\n  .job__title {\n    font-family: \"ProximaNova-Regular\";\n  }\n  .job__content {\n    display: flex;\n    flex-direction: column;\n    margin-left: 19px;\n  }\n  .job__save {\n    display: none;\n  }\n  .job__info {\n    order: -1;\n  }\n  .job__rating {\n    min-width: 54px;\n  }\n  .job__rating-marker svg {\n    width: 10px !important;\n    height: 10px !important;\n  }\n  .job__info {\n    display: flex;\n    justify-content: space-between;\n  }\n  .pagination-wrapper {\n    width: 100%;\n  }\n  .pagination-wrapper .pagination {\n    justify-content: space-around;\n    font-size: 16px;\n  }\n  .pagination-wrapper .page-item:first-child .page-link {\n    opacity: 0;\n    padding: 0px 35px 18px 18px;\n  }\n  .pagination-wrapper .page-item:first-child span {\n    display: none;\n  }\n  .pagination-wrapper .page-item:last-child .page-link {\n    opacity: 0;\n    margin: 0 26px 0 35px;\n  }\n  .pagination-wrapper .page-item:last-child span {\n    display: none;\n  }\n  .pagination-wrapper .page-item:first-child::after {\n    left: 52px;\n    top: -7px;\n  }\n  .pagination-wrapper .page-item:last-child::before {\n    right: 52px;\n    top: -7px;\n  }\n  .pagination-wrapper .page-item {\n    padding: 9px 6px 7px;\n  }\n  .pagination-wrapper .page-item.active::after {\n    width: 24px;\n    height: 1px;\n    bottom: 0;\n    left: 0px;\n  }\n}"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 8065:
/*!*******************************************************!*\
  !*** ./src/app/job-board/job-board-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobBoardRoutingModule": () => (/* binding */ JobBoardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 9198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _components__WEBPACK_IMPORTED_MODULE_0__.JobBoardComponent
}];
class JobBoardRoutingModule {
  static {
    this.ɵfac = function JobBoardRoutingModule_Factory(t) {
      return new (t || JobBoardRoutingModule)();
    };

  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: JobBoardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JobBoardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2022:
/*!***********************************************!*\
  !*** ./src/app/job-board/job-board.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobBoardModule": () => (/* binding */ JobBoardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-icon */ 577);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5765);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _job_board_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-board-routing.module */ 8065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/job-board/job-board.component */ 4485);







class JobBoardModule {
  static {
    this.ɵfac = function JobBoardModule_Factory(t) {
      return new (t || JobBoardModule)();
    };

  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: JobBoardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _job_board_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobBoardRoutingModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__.AngularSvgIconModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](JobBoardModule, {
    declarations: [_components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_2__.JobBoardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _job_board_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobBoardRoutingModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__.AngularSvgIconModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule]
  });
})();

/***/ })

}]);