"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[7289],{7289:(O,p,r)=>{r.r(p),r.d(p,{SessionTimeoutModule:()=>T});var e=r(6083),d=r(6806),i=r(4650),g=r(4246);let s=(()=>{class t{constructor(o){this.http=o}sessionTimeOut(){return this.http.get("/sessionTimeOut/")}}return t.\u0275fac=function(o){return new(o||t)(i.LFG(g.q))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=r(2802),m=r(6616),_=r(7044),l=r(1811);const f=[{path:"",component:(()=>{class t{constructor(o){this.dataService=o,this.pageHeaderInfo={title:"\u767b\u5f55\u8fc7\u671f",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u767b\u5f55\u8fc7\u671f"],desc:"\u7528\u6237\u767b\u5f55\u8fc7\u671f\u793a\u4f8b\u3002\u5982\u679credis\u8d85\u65f6\u4e86\uff0c\u5219\u91cd\u65b0\u5f39\u51fa\u767b\u5f55\u6846\uff0c\u767b\u5f55\u6210\u529f\u5219\u5c06\u539f\u5148\u7684\u63a5\u53e3\u91cd\u65b0\u53d1\u9001\uff0c\u767b\u5f55\u5931\u8d25\uff0c\u5219\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762\u3002"}}go(){this.dataService.sessionTimeOut().subscribe()}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(s))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-session-timeout"]],decls:4,vars:1,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-button","",3,"click"]],template:function(o,a){1&o&&(i._UZ(0,"app-page-header",0),i.TgZ(1,"div",1)(2,"button",2),i.NdJ("click",function(){return a.go()}),i._uU(3,"\u89e6 \u53d1"),i.qZA()()),2&o&&i.Q6J("pageHeaderInfo",a.pageHeaderInfo)},dependencies:[u.q,m.ix,_.w,l.dQ],encapsulation:2,changeDetection:0}),t})(),data:{title:"\u0110\u0103ng nh\u1eadp \u0111\xe3 h\u1ebft h\u1ea1n",key:"session-timeout"}}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[d.Bz.forChild(f),d.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[e.m,h]}),t})()},2802:(O,p,r)=>{r.d(p,{q:()=>t});var e=r(4650),d=r(9576),i=r(6806),g=r(6895),s=r(5655),u=r(4963),m=r(6287);function _(n,o){if(1&n&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&n){const a=o.$implicit;e.xp6(2),e.Oqu(a)}}function l(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const a=e.oxw();e.xp6(1),e.Oqu(a.pageHeaderInfo.extra)}}function z(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const a=e.oxw(2);e.xp6(1),e.Oqu(a.pageHeaderInfo.desc)}}function f(n,o){if(1&n&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,z,2,1,"ng-container",3),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",a.pageHeaderInfo.desc)}}function h(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const a=e.oxw(2);e.xp6(1),e.Oqu(a.pageHeaderInfo.footer)}}function T(n,o){if(1&n&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,h,2,1,"ng-container",3),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",a.pageHeaderInfo.footer)}}let t=(()=>{class n{constructor(a,c){this.themesService=a,this.router=c,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(d.f),e.Y36(i.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(a,c){1&a&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return c.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,_,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,l,2,1,"ng-container",3),e.qZA(),e.YNc(5,f,2,1,"nz-page-header-content",4),e.YNc(6,T,2,1,"nz-page-header-footer",4),e.qZA()),2&a&&(e.Q6J("nzTitle",c.pageHeaderInfo.title)("nzBackIcon",c.backTpl?c.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",c.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",c.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",c.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",c.pageHeaderInfo.footer))},dependencies:[g.sg,g.O5,s.$O,s.u5,s.Jp,s.$,s.A2,u.Dg,u.MO,m.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),n})()}}]);