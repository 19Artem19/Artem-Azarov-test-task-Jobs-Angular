"use strict";
(self["webpackChunkjob"] = self["webpackChunkjob"] || []).push([[427],{

/***/ 7557:
/*!*************************************************************************!*\
  !*** ./src/app/job-details/components/apply-job/apply-job.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyJobComponent": () => (/* binding */ ApplyJobComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ApplyJobComponent {
  constructor() {}

  ngOnInit() {}

  static {
    this.ɵfac = function ApplyJobComponent_Factory(t) {
      return new (t || ApplyJobComponent)();
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplyJobComponent,
      selectors: [["app-apply-job"]],
      decls: 2,
      vars: 0,
      consts: [["type", "button", 1, "apply"]],
      template: function ApplyJobComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "APPLY NOW");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".apply[_ngcontent-%COMP%] {\n  padding: 18px 30px;\n  border-radius: 8px;\n  background-color: #384564;\n  color: #fff;\n  cursor: pointer;\n  border: none;\n  font-size: 12px;\n  line-height: 16px;\n  font-family: \"ProximaNova-Semibold\";\n}"]
    });
  }
}

/***/ }),

/***/ 3313:
/*!*************************************************!*\
  !*** ./src/app/job-details/components/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyJobComponent": () => (/* reexport safe */ _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_0__.ApplyJobComponent),
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS),
/* harmony export */   "JobDetailsComponent": () => (/* reexport safe */ _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_1__.JobDetailsComponent)
/* harmony export */ });
/* harmony import */ var _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-job/apply-job.component */ 7557);
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-details/job-details.component */ 833);




const COMPONENTS = [_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_1__.JobDetailsComponent, _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_0__.ApplyJobComponent];

/***/ }),

/***/ 833:
/*!*****************************************************************************!*\
  !*** ./src/app/job-details/components/job-details/job-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobDetailsComponent": () => (/* binding */ JobDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ 1866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-svg-icon */ 577);
/* harmony import */ var _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apply-job/apply-job.component */ 7557);
/* harmony import */ var _shared_pipes_date_ago_date_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/date-ago/date-ago.pipe */ 659);










function JobDetailsComponent_div_1_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](type_r4.value);
  }
}

function JobDetailsComponent_div_1_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const benefit_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](benefit_r5.value);
  }
}

function JobDetailsComponent_div_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const image_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", image_r6 + "?q=" + i_r7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

const _c0 = function () {
  return {
    "width.px": 16,
    "height.px": 20
  };
};

const _c1 = function () {
  return {
    "width.px": 21,
    "height.px": 20
  };
};

const _c2 = function () {
  return {
    "width.px": 13,
    "height.px": 18,
    fill: "#878D9D"
  };
};

function JobDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Job Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobDetailsComponent_div_1_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.saveJob($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "svg-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobDetailsComponent_div_1_Template_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.saveJob($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "svg-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Save to my list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobDetailsComponent_div_1_Template_button_click_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.saveJob($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-apply-job", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 20)(29, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Brutto, per year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 22)(34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 23)(38, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "app-apply-job", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 27)(42, "div", 28)(43, "div", 29)(44, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Addiditional Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Employment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, JobDetailsComponent_div_1_ng_container_49_Template, 3, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Benefits");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, JobDetailsComponent_div_1_ng_container_54_Template, 3, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 33)(57, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Attahced images");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, JobDetailsComponent_div_1_div_60_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 36)(62, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "RETURN TO A JOB BOARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 38)(65, "div", 39)(66, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 40)(69, "div", 41)(70, "div", 42)(71, "div", 43)(72, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Department name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "svg-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.job.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Posted ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 17, ctx_r0.job.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.job.salary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Posted ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 19, ctx_r0.job.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", ctx_r0.job.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 21, ctx_r0.job.employment_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 23, ctx_r0.job.benefits));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.job.pictures);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.job.name, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.job.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.job.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.job.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getMapUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

class JobDetailsComponent {
  constructor(route, jobsService) {
    this.route = route;
    this.jobsService = jobsService;
    this.googleMapsKeys = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.googleMapsKey; //! work with Api Key Google

    this.googleApiUrl = 'https://maps.googleapis.com/maps/api/staticmap';
    this.mapConfig = [{
      zoom: '13'
    }, {
      size: '600x220'
    }, {
      style: 'feature:all|color:0x989fb1'
    }, {
      style: 'feature:landscape.man_made|color:0x333a52'
    }, {
      style: 'feature:road|color:0x2a324a|visibility:simplified'
    }, {
      maptype: 'roadmap'
    }, {
      markers: 'color:0xd8d8d8%7C'
    }];
    route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => this.jobsService.getJobById(params['id']))).subscribe(job => {
      this.job = job;
    });
  }

  get config() {
    return this.mapConfig.reduce((prev, curr) => {
      const key = Object.keys(curr)[0];
      prev += `&${key}=${curr[key]}`;
      return prev;
    }, '');
  }

  get getMapUrl() {
    //! work with Api Key Google
    if (!this.job) {
      return '';
    }

    const coordinats = `${this.job.location.lat},${this.job.location.long}`;
    return `${this.googleApiUrl}?center=` + coordinats + this.config + coordinats + `&key=${this.googleMapsKeys}`;
  }

  saveJob(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  static {
    this.ɵfac = function JobDetailsComponent_Factory(t) {
      return new (t || JobDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.JobsService));
    };

  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: JobDetailsComponent,
      selectors: [["app-job-details"]],
      decls: 2,
      vars: 1,
      consts: [[1, "details-wrapper"], ["class", "details", 4, "ngIf"], [1, "details"], [1, "details__job"], [1, "details__share"], [1, "details__target"], [1, "details__save"], [1, "details__save--button", 3, "click"], ["src", "/assets/icons/save.svg", 3, "svgStyle"], [1, "details__save--button-mobile", 3, "click"], ["src", "/assets/icons/save-star.svg", 3, "svgStyle"], [1, "details__divide"], [1, "details__divide--button", 3, "click"], ["src", "/assets/icons/share.svg", 3, "svgStyle"], [1, "apply__first-button"], [1, "title"], [1, "title__job"], [1, "title__job-description"], [1, "title__salary"], [1, "title__post-mobile"], [1, "title__salary-total"], [1, "title__salary-brutto"], [1, "title-post"], [1, "description"], [1, "description__job"], [3, "innerText"], [1, "apply__second-button"], [1, "addiditional-wrapper"], [1, "addiditional-container"], [1, "addiditional"], [1, "type"], [4, "ngFor", "ngForOf"], [1, "benefits"], [1, "attached-container"], [1, "picture"], ["class", "picture__job", 4, "ngFor", "ngForOf"], [1, "return-container"], ["routerLink", "/", 1, "return-container__button"], [1, "contact-wrapper"], [1, "contact-header"], [1, "contact"], [1, "contact__job"], [1, "contact__info-wrapper"], [1, "contact__info"], [1, "contact__info-name"], [1, "contact__info-address"], ["src", "/assets/icons/location-marker.svg", 1, "job__location-marker", 3, "svgStyle"], [1, "contact__info-phone-email"], [1, "contact__info-email"], [1, "contact__map"], ["alt", "Map with address work", 1, "map", 3, "src"], [1, "label"], [1, "label", "label--warning"], [1, "picture__job"], [1, "picture__job-image", 3, "src"]],
      template: function JobDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, JobDetailsComponent_div_1_Template, 85, 29, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.job);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconComponent, _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_2__.ApplyJobComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe, _shared_pipes_date_ago_date_ago_pipe__WEBPACK_IMPORTED_MODULE_3__.DateAgoPipe],
      styles: ["*[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #3A4562;\n  font-size: 18px;\n  line-height: 24px;\n  font-family: \"Roboto\";\n  letter-spacing: -0.5625px;\n}\n\n*[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 34px;\n  color: #3A4562;\n  font-family: \"ProximaNova-Bold\";\n  letter-spacing: 0.413333px;\n  border-bottom: 1px solid #e5e7ea;\n  padding-bottom: 9px;\n}\n\n*[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n  color: #3A4562;\n  font-family: \"ProximaNova-Bold\";\n  letter-spacing: -0.625px;\n}\n\n*[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #3A4562;\n  font-size: 18px;\n  line-height: 24px;\n  font-family: \"Roboto\";\n  letter-spacing: -0.5625px;\n  margin-bottom: 10px;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  max-width: 1300px;\n  padding: 56px 0 162px;\n}\n\n.details__job[_ngcontent-%COMP%] {\n  max-width: 774px;\n}\n\n.details__share[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 39px;\n  border-bottom: 1px solid #e5e7ea;\n}\n\n.details__share[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.details__target[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 5px;\n}\n\n.details__save[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 30px;\n}\n\n.details__save--button[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.details__save--button-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.details__divide[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.details__divide--button[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 32px;\n}\n\n.details[_ngcontent-%COMP%]   .title__job[_ngcontent-%COMP%] {\n  max-width: 501px;\n}\n\n.details[_ngcontent-%COMP%]   .title__job-description[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 30px;\n  font-family: \"ProximaNova-Bold\";\n  letter-spacing: -0.75px;\n}\n\n.details[_ngcontent-%COMP%]   .title__post-mobile[_ngcontent-%COMP%] {\n  display: none;\n  color: #b8bbc5;\n}\n\n.details[_ngcontent-%COMP%]   .title-post[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n\n.details[_ngcontent-%COMP%]   .title-post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b8bbc5;\n}\n\n.details[_ngcontent-%COMP%]   .addiditional[_ngcontent-%COMP%] {\n  margin-top: 86px;\n  margin-bottom: 15px;\n}\n\n.details[_ngcontent-%COMP%]   .job-attached-info[_ngcontent-%COMP%] {\n  margin-top: 87px;\n}\n\n.details[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   .benefits[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.details[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px 79px;\n  background: #e1e6f4;\n  border-radius: 8px;\n  color: #55699E;\n  font-size: 16px;\n  line-height: 16px;\n  border: 1px solid #b7c0da;\n  margin: 0px 8px 23px 0;\n  font-family: \"ProximaNova-Bold\";\n}\n\n.details[_ngcontent-%COMP%]   .label--warning[_ngcontent-%COMP%] {\n  background: #fff8d9;\n  border-radius: 8px;\n  color: #988B49;\n  border: 1px solid #FFCF00;\n}\n\n.details[_ngcontent-%COMP%]   .attached-container[_ngcontent-%COMP%] {\n  margin-top: 87px;\n  max-width: 723px;\n}\n\n.return-container[_ngcontent-%COMP%] {\n  margin: 89px 0 0 25px;\n}\n\n.return-container__button[_ngcontent-%COMP%] {\n  background: #E4E5EA;\n  border-radius: 8px;\n  font-size: 12px;\n  line-height: 16px;\n  font-family: \"ProximaNova-Semibold\";\n  border: none;\n  cursor: pointer;\n  color: #3A4562;\n  position: relative;\n  padding: 17px 27px 17px 41px;\n  right: 85px;\n}\n\n.return-container__button[_ngcontent-%COMP%]::before {\n  content: url(\"/assets/icons/arrow-back.svg\");\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  left: 20px;\n  top: 15px;\n}\n\n.picture[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow-y: hidden;\n}\n\n.picture__job[_ngcontent-%COMP%] {\n  margin: 21px 10px 0 0;\n}\n\n.picture__job-image[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  width: 209px;\n  height: 115px;\n  max-width: none;\n  object-fit: cover;\n}\n\n.contact-header[_ngcontent-%COMP%] {\n  margin-top: 63px;\n  display: none;\n  max-width: 723px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  border: 1px solid #2A3047;\n  margin-left: 134px;\n  border-radius: 8px;\n  max-width: 402px;\n}\n\n.contact__job[_ngcontent-%COMP%] {\n  background-color: #2A3047;\n  border-radius: 8px 8px 0px 0px;\n}\n\n.contact__info-wrapper[_ngcontent-%COMP%] {\n  background-image: url('Combined Shape.369a9b96dd7ef794.svg');\n  background-repeat: no-repeat;\n  border-radius: 7px;\n}\n\n.contact__info[_ngcontent-%COMP%] {\n  padding: 31px 63px;\n  min-height: 218px;\n}\n\n.contact__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #E7EAF0;\n}\n\n.contact__info-name[_ngcontent-%COMP%] {\n  color: #E7EAF0;\n  font-family: \"ProximaNova-Bold\", sans-serif;\n  font-size: 20px;\n  line-height: 25px;\n}\n\n.contact__info-address[_ngcontent-%COMP%], .contact__info-phone-email[_ngcontent-%COMP%], .contact__info-email[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n  font-family: \"Roboto\";\n  color: #E8EBF3;\n  margin-top: 8px;\n}\n\n.contact[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  min-height: 218px;\n  object-fit: cover;\n  border-radius: 0px 0px 7px 7px;\n}\n\n@media (max-width: 762px) {\n  .details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .details__job[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding: 24px 15px 0 15px;\n  }\n  .details__share[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border: none;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n  .details__share[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(58, 69, 98, 0.13);\n    width: 100%;\n    padding-bottom: 12px;\n  }\n  .details__target[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  .details__save--button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .details__save--button-mobile[_ngcontent-%COMP%] {\n    display: block;\n    padding-right: 11px;\n  }\n  .details__divide--button[_ngcontent-%COMP%] {\n    padding-right: 11px;\n  }\n  .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .details[_ngcontent-%COMP%]   .title__salary[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 5px;\n  }\n  .details[_ngcontent-%COMP%]   .title__post-mobile[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 21px;\n  }\n  .details[_ngcontent-%COMP%]   .title__post-mobile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #b8bbc5;\n    font-size: 13px;\n    line-height: 25px;\n  }\n  .details[_ngcontent-%COMP%]   .title__salary-total[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 5px;\n  }\n  .details[_ngcontent-%COMP%]   .title__salary-brutto[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .details[_ngcontent-%COMP%]   .title-post[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .details[_ngcontent-%COMP%]   .apply__second-button[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .details[_ngcontent-%COMP%]   .addiditional-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .details[_ngcontent-%COMP%]   .addiditional-wrapper[_ngcontent-%COMP%]   .addiditional-container[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .details[_ngcontent-%COMP%]   .addiditional-wrapper[_ngcontent-%COMP%]   .addiditional-container[_ngcontent-%COMP%]   .addiditional[_ngcontent-%COMP%] {\n    margin-top: 55px;\n    width: 100%;\n  }\n  .details[_ngcontent-%COMP%]   .addiditional-wrapper[_ngcontent-%COMP%]   .addiditional-container[_ngcontent-%COMP%]   .addiditional[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .details[_ngcontent-%COMP%]   .attached-container[_ngcontent-%COMP%] {\n    margin-top: 135px;\n  }\n  .details[_ngcontent-%COMP%]   .attached-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 12px;\n    margin-bottom: 11px;\n  }\n  .details[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n    padding-right: 15px;\n    padding-left: 27px;\n  }\n  .details[_ngcontent-%COMP%]   .return-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .details[_ngcontent-%COMP%]   .apply__first-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .details[_ngcontent-%COMP%]   .apply__second-button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .details[_ngcontent-%COMP%]   .contact-wrapper[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  .details[_ngcontent-%COMP%]   .contact-wrapper[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .details[_ngcontent-%COMP%]   .contact-wrapper[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 10px;\n    margin-bottom: 21px;\n  }\n  .details[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    max-width: 402px;\n  }\n  .details[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 20px;\n  }\n  .details[_ngcontent-%COMP%]   .contact__info-wrapper[_ngcontent-%COMP%] {\n    background-color: #2A3047;\n  }\n  .details[_ngcontent-%COMP%]   .contact__info-name[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 20px;\n  }\n  .details[_ngcontent-%COMP%]   .contact__info-address[_ngcontent-%COMP%] {\n    margin-top: 17px;\n  }\n  .details[_ngcontent-%COMP%]   .contact__info-phone-email[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   .contact__info-email[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 23px;\n    color: #b9bbc2;\n    margin-top: 6px;\n  }\n}"]
    });
  }
}

/***/ }),

/***/ 5471:
/*!***********************************************************!*\
  !*** ./src/app/job-details/job-details-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobDetailsRoutingModule": () => (/* binding */ JobDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 3313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _components__WEBPACK_IMPORTED_MODULE_0__.JobDetailsComponent
}];
class JobDetailsRoutingModule {
  static {
    this.ɵfac = function JobDetailsRoutingModule_Factory(t) {
      return new (t || JobDetailsRoutingModule)();
    };

  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: JobDetailsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JobDetailsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7427:
/*!***************************************************!*\
  !*** ./src/app/job-details/job-details.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobDetailsModule": () => (/* binding */ JobDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-icon */ 577);
/* harmony import */ var _job_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-details-routing.module */ 5471);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _components_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/job-details/job-details.component */ 833);
/* harmony import */ var _components_apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/apply-job/apply-job.component */ 7557);







class JobDetailsModule {
  static {
    this.ɵfac = function JobDetailsModule_Factory(t) {
      return new (t || JobDetailsModule)();
    };

  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: JobDetailsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _job_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobDetailsRoutingModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__.AngularSvgIconModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](JobDetailsModule, {
    declarations: [_components_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__.JobDetailsComponent, _components_apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_3__.ApplyJobComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _job_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobDetailsRoutingModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__.AngularSvgIconModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ })

}]);