"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[7039],{7039:(T,s,o)=>{o.r(s),o.d(s,{LazyBasicModule:()=>i});var e=o(6083),l=o(6806),_=o(6561),p=o(7433),t=o(4650),f=o(6895),m=o(2802),u=o(6616),z=o(7044),h=o(1811);function C(n,r){if(1&n){const c=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(c);const g=t.oxw();return g.lazyServiceService.create(),t.KtG(g.isStarted=!0)}),t._uU(1,"\u70b9\u51fb"),t.qZA()}}function O(n,r){}const y=[{path:"",component:(()=>{class n{constructor(c){this.lazyServiceService=c,this.pageHeaderInfo={title:"\u61d2\u52a0\u8f7d\u7ec4\u4ef6\u793a\u4f8b",breadcrumb:["\u9996\u9875","\u7ec4\u4ef6","\u61d2\u52a0\u8f7d\u7ec4\u4ef6"],desc:"\u61d2\u52a0\u8f7d\u7ec4\u4ef6,\u6211\u6c38\u8fdc\u559c\u6b22\u5468\u6770\u4f26"},this.isStarted=!1}ngAfterViewInit(){this.lazyServiceService.adHost=this.adHost}ngOnInit(){}}return n.\u0275fac=function(c){return new(c||n)(t.Y36(_.R))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lazy-basic"]],viewQuery:function(c,d){if(1&c&&t.Gf(p.p,7),2&c){let g;t.iGM(g=t.CRH())&&(d.adHost=g.first)}},features:[t._Bn([_.R])],decls:5,vars:2,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-button","","nzType","primary",3,"click",4,"ngIf"],[1,"left-start-center",2,"flex-wrap","wrap"],["appAd",""],["nz-button","","nzType","primary",3,"click"]],template:function(c,d){1&c&&(t._UZ(0,"app-page-header",0),t.TgZ(1,"div",1),t.YNc(2,C,2,0,"button",2),t.TgZ(3,"div",3),t.YNc(4,O,0,0,"ng-template",4),t.qZA()()),2&c&&(t.Q6J("pageHeaderInfo",d.pageHeaderInfo),t.xp6(2),t.Q6J("ngIf",!d.isStarted))},dependencies:[f.O5,m.q,p.p,u.ix,z.w,h.dQ],styles:[".content-link[_ngcontent-%COMP%]{margin-top:16px}.content-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:32px}.content-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;margin-right:8px}.new-btn[_ngcontent-%COMP%]{width:100%;border:1px dashed #d9d9d9}.new-btn[_ngcontent-%COMP%]:hover{border-color:#1890ff;color:#1890ff}.new-btn[_ngcontent-%COMP%]:focus{border-color:#1890ff;color:#1890ff}"],changeDetection:0}),n})(),data:{title:"\u61d2\u52a0\u8f7d\u57fa\u7840\u5b9e\u4f8b",key:"lazy-basic"}}];let a=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(y),l.Bz]}),n})(),i=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.m,a]}),n})()},2802:(T,s,o)=>{o.d(s,{q:()=>y});var e=o(4650),l=o(9576),_=o(6806),p=o(6895),t=o(5655),f=o(4963),m=o(6287);function u(a,i){if(1&a&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&a){const n=i.$implicit;e.xp6(2),e.Oqu(n)}}function z(a,i){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const n=e.oxw();e.xp6(1),e.Oqu(n.pageHeaderInfo.extra)}}function h(a,i){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const n=e.oxw(2);e.xp6(1),e.Oqu(n.pageHeaderInfo.desc)}}function C(a,i){if(1&a&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,h,2,1,"ng-container",3),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",n.pageHeaderInfo.desc)}}function O(a,i){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const n=e.oxw(2);e.xp6(1),e.Oqu(n.pageHeaderInfo.footer)}}function v(a,i){if(1&a&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,O,2,1,"ng-container",3),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",n.pageHeaderInfo.footer)}}let y=(()=>{class a{constructor(n,r){this.themesService=n,this.router=r,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(l.f),e.Y36(_.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(n,r){1&n&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return r.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,u,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,z,2,1,"ng-container",3),e.qZA(),e.YNc(5,C,2,1,"nz-page-header-content",4),e.YNc(6,v,2,1,"nz-page-header-footer",4),e.qZA()),2&n&&(e.Q6J("nzTitle",r.pageHeaderInfo.title)("nzBackIcon",r.backTpl?r.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",r.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",r.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",r.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",r.pageHeaderInfo.footer))},dependencies:[p.sg,p.O5,t.$O,t.u5,t.Jp,t.$,t.A2,f.Dg,f.MO,m.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),a})()}}]);