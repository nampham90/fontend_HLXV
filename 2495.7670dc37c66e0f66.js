"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[2495],{2495:(x,z,t)=>{t.r(z),t.d(z,{UploadModule:()=>M});var e=t(6083),f=t(6806),p=t(4006),_=t(2340),c=t(9523),n=t(4650),F=t(8313),T=t(6895),C=t(2802),U=t(433),v=t(1102),h=t(3679),s=t(6704),E=t(6616),a=t(7044),d=t(1811),i=t(4607);function u(o,m){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const r=n.oxw().$implicit;n.xp6(1),n.Oqu(r.errors.message)}}function O(o,m){1&o&&(n.ynx(0),n._uU(1,"\u5fc5\u586b\u9879"),n.BQk())}function B(o,m){if(1&o&&(n.YNc(0,u,2,1,"ng-container",18),n.YNc(1,O,2,0,"ng-container",18)),2&o){const r=m.$implicit;n.Q6J("ngIf",r.hasError("message")),n.xp6(1),n.Q6J("ngIf",r.hasError("required"))}}const I=[{path:"",component:(()=>{class o{constructor(r,l){this.message=r,this.fb=l,this.pageHeaderInfo={title:"\u6587\u4ef6\u4e0a\u4f20",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u6587\u4ef6\u4e0a\u4f20"],desc:"\u7b80\u5355\u5f04\u4e00\u4e0b\uff0c\u8fd4\u56de\u7684\u90fd\u662f\u670d\u52a1\u5668\u7edf\u4e00\u8fd4\u56de\u7684\u6587\u4ef6"},this.uploadUrl=_.NZ.production?"/api/file/test/upload/document/":"/site/api/file/test/upload/document/",this.fileList=[],this.fileFormList=[]}handleChange(r){"success"===r.type&&0===r.file.response.code&&this.message.success(`\u670d\u52a1\u5668\u4e0a\u8fd4\u56de\u7684\u6587\u4ef6\u8def\u5f84\uff1a${r.file.response.data.data}`)}uploadFn(r){"success"===r.type&&0===r.file.response.code&&this.validateForm.get("file")?.setValue(r.file.response.data.data)}resetForm(){this.validateForm.reset(),this.fileFormList=[]}submitForm(){(0,c.r7)(this.validateForm)}initForm(){this.validateForm=this.fb.group({file:[null,[p.kI.required]]})}ngOnInit(){this.initForm()}}return o.\u0275fac=function(r){return new(r||o)(n.Y36(F.dD),n.Y36(p.qu))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-upload"]],decls:27,vars:22,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzTitle","\u7b80\u5355\u5b9e\u4f8b\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6587\u4ef6\u5730\u5740\u7edf\u4e00\uff0c\u6f14\u793a\u529f\u80fd\u4e0d\u4f1a\u4fdd\u5b58\u4e0a\u4f20\u7684\u6587\u4ef6"],[3,"nzName","nzShowButton","nzAction","nzLimit","nzSize","nzFileList","nzChange"],["nz-button",""],["nz-icon","","nzType","upload"],["nzTitle","\u5d4c\u5165\u8868\u5355\uff0c\u52a0\u5165\u8868\u5355\u9a8c\u8bc1",1,"m-t-20"],["nz-form","","nzLayout","vertical",3,"formGroup"],["nz-col","","nzSpan","24"],[3,"nzSm","nzXs","nzErrorTip"],[3,"nzSm","nzXs"],[3,"nzName","nzAction","nzSize","nzFileList","nzLimit","nzChange"],["formControlName","file",3,"hidden"],["nz-row","",1,"m-t-20"],[3,"nzSpan"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","default",1,"m-l-10",3,"click"],["combineTpl",""],[4,"ngIf"]],template:function(r,l){if(1&r&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card",2)(3,"nz-upload",3),n.NdJ("nzChange",function(A){return l.handleChange(A)}),n.TgZ(4,"button",4),n._UZ(5,"i",5),n._uU(6," \u5bfc\u5165\u6750\u6599(\u6700\u5927\u6d4b\u8bd5\u4e0a\u4f205M) "),n.qZA()()(),n.TgZ(7,"nz-card",6)(8,"form",7)(9,"nz-form-item",8)(10,"nz-form-control",9)(11,"nz-form-label",10),n._uU(12,"\u9644\u4ef6\uff1a"),n.qZA(),n.TgZ(13,"nz-form-control",10)(14,"nz-upload",11),n.NdJ("nzChange",function(A){return l.uploadFn(A)}),n.TgZ(15,"button",4),n._UZ(16,"i",5),n._uU(17," \u4e0a\u4f20\u9644\u4ef6(\u6700\u5927\u6d4b\u8bd5\u4e0a\u4f205M) "),n.qZA(),n._UZ(18,"input",12),n.qZA()()(),n.TgZ(19,"nz-form-item",13)(20,"nz-form-control",14)(21,"button",15),n.NdJ("click",function(){return l.submitForm()}),n._uU(22,"\u63d0\u4ea4"),n.qZA(),n.TgZ(23,"button",16),n.NdJ("click",function(){return l.resetForm()}),n._uU(24,"\u91cd\u7f6e"),n.qZA()()()()()()(),n.YNc(25,B,2,2,"ng-template",null,17,n.W1O)),2&r){const g=n.MAs(26);n.Q6J("pageHeaderInfo",l.pageHeaderInfo),n.xp6(3),n.Q6J("nzName","document")("nzShowButton",!0)("nzAction",l.uploadUrl)("nzLimit",1)("nzSize",5120)("nzFileList",l.fileList),n.xp6(5),n.Q6J("formGroup",l.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24)("nzErrorTip",g),n.xp6(1),n.Q6J("nzSm",14)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("nzName","document")("nzAction",l.uploadUrl)("nzSize",5120)("nzFileList",l.fileFormList)("nzLimit",1),n.xp6(4),n.Q6J("hidden",!0),n.xp6(2),n.Q6J("nzSpan",14)}},dependencies:[T.O5,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,C.q,U.FY,v.Ls,h.t3,h.SK,s.Lr,s.Nx,s.iK,s.Fd,E.ix,a.w,d.dQ,i.bd],changeDetection:0}),o})(),data:{title:"T\u1ea3i l\xean t\u1ec7p",key:"upload"}}];let D=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[f.Bz.forChild(I),f.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[e.m,D]}),o})()},2802:(x,z,t)=>{t.d(z,{q:()=>E});var e=t(4650),f=t(9576),p=t(6806),_=t(6895),c=t(5655),n=t(4963),F=t(6287);function T(a,d){if(1&a&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&a){const i=d.$implicit;e.xp6(2),e.Oqu(i)}}function C(a,d){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const i=e.oxw();e.xp6(1),e.Oqu(i.pageHeaderInfo.extra)}}function U(a,d){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const i=e.oxw(2);e.xp6(1),e.Oqu(i.pageHeaderInfo.desc)}}function v(a,d){if(1&a&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,U,2,1,"ng-container",3),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",i.pageHeaderInfo.desc)}}function h(a,d){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const i=e.oxw(2);e.xp6(1),e.Oqu(i.pageHeaderInfo.footer)}}function s(a,d){if(1&a&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,h,2,1,"ng-container",3),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",i.pageHeaderInfo.footer)}}let E=(()=>{class a{constructor(i,u){this.themesService=i,this.router=u,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(f.f),e.Y36(p.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(i,u){1&i&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return u.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,T,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,C,2,1,"ng-container",3),e.qZA(),e.YNc(5,v,2,1,"nz-page-header-content",4),e.YNc(6,s,2,1,"nz-page-header-footer",4),e.qZA()),2&i&&(e.Q6J("nzTitle",u.pageHeaderInfo.title)("nzBackIcon",u.backTpl?u.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",u.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",u.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",u.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",u.pageHeaderInfo.footer))},dependencies:[_.sg,_.O5,c.$O,c.u5,c.Jp,c.$,c.A2,n.Dg,n.MO,F.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),a})()}}]);