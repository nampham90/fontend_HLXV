(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[8285],{8285:(y,w,r)=>{"use strict";r.r(w),r.d(w,{DownloadModule:()=>z});var e=r(6083),h=r(9116),T=r(2722),m=r(9019),g=r(4327),_=r.n(g),n=r(4650),b=r(4246);let E=(()=>{class a{constructor(d){this.http=d}fileStreamDownload(d){return this.http.downZip("/file/download/document",d,{needSuccessInfo:!1})}}return a.\u0275fac=function(d){return new(d||a)(n.LFG(b.q))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var t=r(8176),o=r(2802),p=r(6616),i=r(7044),u=r(1811),c=r(4607);const l=[{path:"",component:(()=>{class a{constructor(d,v){this.downloadService=d,this.destroy$=v,this.pageHeaderInfo={title:"\u6587\u4ef6\u4e0b\u8f7d",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u6587\u4ef6\u4e0b\u8f7d"],desc:"\u5404\u79cd\u6587\u4ef6\u4e0b\u8f7d"}}ngOnInit(){}fileStreamDownload(){this.downloadService.fileStreamDownload({downloadUrl:`http://${m.ip}/api/file/\u56fe\u7eb8\u5b9e\u9645\u6750\u6599\u91cf\u5bfc\u5165\u6a21\u677f.xlsx`}).pipe((0,T.R)(this.destroy$)).subscribe(v=>{const O=new Blob([v],{type:"text/plain;charset=utf-8"});_().saveAs(O,"\u6750\u6599\u5e93\u5bfc\u5165\u6a21\u677f.xlsx")})}}return a.\u0275fac=function(d){return new(d||a)(n.Y36(E),n.Y36(t.z))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-download"]],decls:14,vars:1,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzTitle","\u6839\u636e\u540e\u53f0\u63a5\u53e3\u6587\u4ef6\u6d41\u4e0b\u8f7d",1,"m-b-10"],["nz-button","","nzType","primary",3,"click"],["nzTitle","\u6839\u636e\u6587\u4ef6\u5730\u5740\u4e0b\u8f7d\u6587\u4ef6",1,"m-b-10"],["nzTitle","base64\u6d41\u4e0b\u8f7d",1,"m-b-10"],["nzTitle","\u56fe\u7247Url\u4e0b\u8f7d,\u5982\u679c\u6709\u8de8\u57df\u95ee\u9898\uff0c\u9700\u8981\u5904\u7406\u56fe\u7247\u8de8\u57df",1,"m-b-10"]],template:function(d,v){1&d&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card",2)(3,"button",3),n.NdJ("click",function(){return v.fileStreamDownload()}),n._uU(4,"\u6587\u4ef6\u6d41\u4e0b\u8f7d"),n.qZA()(),n.TgZ(5,"nz-card",4)(6,"button",3),n.NdJ("click",function(){return v.fileStreamDownload()}),n._uU(7,"\u6587\u4ef6\u5730\u5740\u4e0b\u8f7d"),n.qZA()(),n.TgZ(8,"nz-card",5)(9,"button",3),n.NdJ("click",function(){return v.fileStreamDownload()}),n._uU(10,"base64\u6d41\u4e0b\u8f7d"),n.qZA()(),n.TgZ(11,"nz-card",6)(12,"button",3),n.NdJ("click",function(){return v.fileStreamDownload()}),n._uU(13,"\u56fe\u7247Url\u4e0b\u8f7d"),n.qZA()()()),2&d&&n.Q6J("pageHeaderInfo",v.pageHeaderInfo)},dependencies:[o.q,p.ix,i.w,u.dQ,c.bd],changeDetection:0}),a})(),data:{title:"t\u1eadp tin t\u1ea3i v\u1ec1",key:"download"}}];let s=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[h.Bz.forChild(l),h.Bz]}),a})(),z=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[e.m,s]}),a})()},2802:(y,w,r)=>{"use strict";r.d(w,{q:()=>u});var e=r(4650),h=r(9576),T=r(9116),m=r(6895),g=r(5655),_=r(4963),n=r(6287);function b(c,f){if(1&c&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&c){const l=f.$implicit;e.xp6(2),e.Oqu(l)}}function E(c,f){if(1&c&&(e.ynx(0),e._uU(1),e.BQk()),2&c){const l=e.oxw();e.xp6(1),e.Oqu(l.pageHeaderInfo.extra)}}function t(c,f){if(1&c&&(e.ynx(0),e._uU(1),e.BQk()),2&c){const l=e.oxw(2);e.xp6(1),e.Oqu(l.pageHeaderInfo.desc)}}function o(c,f){if(1&c&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,t,2,1,"ng-container",3),e.qZA()),2&c){const l=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",l.pageHeaderInfo.desc)}}function p(c,f){if(1&c&&(e.ynx(0),e._uU(1),e.BQk()),2&c){const l=e.oxw(2);e.xp6(1),e.Oqu(l.pageHeaderInfo.footer)}}function i(c,f){if(1&c&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,p,2,1,"ng-container",3),e.qZA()),2&c){const l=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",l.pageHeaderInfo.footer)}}let u=(()=>{class c{constructor(l,s){this.themesService=l,this.router=s,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return c.\u0275fac=function(l){return new(l||c)(e.Y36(h.f),e.Y36(T.F0))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(l,s){1&l&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return s.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,b,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,E,2,1,"ng-container",3),e.qZA(),e.YNc(5,o,2,1,"nz-page-header-content",4),e.YNc(6,i,2,1,"nz-page-header-footer",4),e.qZA()),2&l&&(e.Q6J("nzTitle",s.pageHeaderInfo.title)("nzBackIcon",s.backTpl?s.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",s.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",s.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",s.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",s.pageHeaderInfo.footer))},dependencies:[m.sg,m.O5,g.$O,g.u5,g.Jp,g.$,g.A2,_.Dg,_.MO,n.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),c})()},4327:function(y,w){var h;void 0!==(h=function(){"use strict";function m(t,o,p){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){E(i.response,o,p)},i.onerror=function(){console.error("could not download file")},i.send()}function g(t){var o=new XMLHttpRequest;o.open("HEAD",t,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function _(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,b=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),E=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!b?function(t,o,p){var i=n.URL||n.webkitURL,u=document.createElement("a");u.download=o=o||t.name||"download",u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?_(u):g(u.href)?m(t,o,p):_(u,u.target="_blank")):(u.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(u.href)},4e4),setTimeout(function(){_(u)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,p){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function T(t,o){return typeof o>"u"?o={autoBom:!1}:"object"!=typeof o&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,p),o);else if(g(t))m(t,o,p);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){_(i)})}}:function(t,o,p,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return m(t,o,p);var u="application/octet-stream"===t.type,c=/constructor/i.test(n.HTMLElement)||n.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||u&&c||b)&&typeof FileReader<"u"){var l=new FileReader;l.onloadend=function(){var a=l.result;a=f?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=a:location=a,i=null},l.readAsDataURL(t)}else{var s=n.URL||n.webkitURL,z=s.createObjectURL(t);i?i.location=z:location.href=z,i=null,setTimeout(function(){s.revokeObjectURL(z)},4e4)}});n.saveAs=E.saveAs=E,y.exports=E}.apply(w,[]))&&(y.exports=h)}}]);