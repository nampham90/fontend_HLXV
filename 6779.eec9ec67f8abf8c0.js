"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[6779],{76779:(N,C,r)=>{r.r(C),r.d(C,{RichTextModule:()=>ee});var t=r(5316),e=r(94650),f=r(36895),l=r(24006),u=r(54968),_=r(49770),E=r(77579),w=r(82722),M=r(95698),b=r(69718),x=r(34782);function P(n,s){}const m=()=>{const n=typeof window<"u"?window:void 0;return n&&n.tinymce?n.tinymce:null};let T=(()=>{class n{constructor(){this.onBeforePaste=new e.vpe,this.onBlur=new e.vpe,this.onClick=new e.vpe,this.onContextMenu=new e.vpe,this.onCopy=new e.vpe,this.onCut=new e.vpe,this.onDblclick=new e.vpe,this.onDrag=new e.vpe,this.onDragDrop=new e.vpe,this.onDragEnd=new e.vpe,this.onDragGesture=new e.vpe,this.onDragOver=new e.vpe,this.onDrop=new e.vpe,this.onFocus=new e.vpe,this.onFocusIn=new e.vpe,this.onFocusOut=new e.vpe,this.onKeyDown=new e.vpe,this.onKeyPress=new e.vpe,this.onKeyUp=new e.vpe,this.onMouseDown=new e.vpe,this.onMouseEnter=new e.vpe,this.onMouseLeave=new e.vpe,this.onMouseMove=new e.vpe,this.onMouseOut=new e.vpe,this.onMouseOver=new e.vpe,this.onMouseUp=new e.vpe,this.onPaste=new e.vpe,this.onSelectionChange=new e.vpe,this.onActivate=new e.vpe,this.onAddUndo=new e.vpe,this.onBeforeAddUndo=new e.vpe,this.onBeforeExecCommand=new e.vpe,this.onBeforeGetContent=new e.vpe,this.onBeforeRenderUI=new e.vpe,this.onBeforeSetContent=new e.vpe,this.onChange=new e.vpe,this.onClearUndos=new e.vpe,this.onDeactivate=new e.vpe,this.onDirty=new e.vpe,this.onExecCommand=new e.vpe,this.onGetContent=new e.vpe,this.onHide=new e.vpe,this.onInit=new e.vpe,this.onInitNgModel=new e.vpe,this.onLoadContent=new e.vpe,this.onNodeChange=new e.vpe,this.onPostProcess=new e.vpe,this.onPostRender=new e.vpe,this.onPreInit=new e.vpe,this.onPreProcess=new e.vpe,this.onProgressState=new e.vpe,this.onRedo=new e.vpe,this.onRemove=new e.vpe,this.onReset=new e.vpe,this.onResizeEditor=new e.vpe,this.onSaveContent=new e.vpe,this.onSetAttrib=new e.vpe,this.onObjectResizeStart=new e.vpe,this.onObjectResized=new e.vpe,this.onObjectSelected=new e.vpe,this.onSetContent=new e.vpe,this.onShow=new e.vpe,this.onSubmit=new e.vpe,this.onUndo=new e.vpe,this.onVisualAid=new e.vpe}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275dir=e.lG2({type:n,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onResizeEditor:"onResizeEditor",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}}),n})();const y=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onResizeEditor","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],i=(n,s,o)=>(0,u.R)(n,s).pipe((0,w.R)(o)),c=(n,s)=>"string"==typeof n?n.split(",").map(o=>o.trim()):Array.isArray(n)?n:s;let O=0;const R=n=>typeof n<"u"&&"textarea"===n.tagName.toLowerCase(),I=n=>typeof n>"u"||""===n?[]:Array.isArray(n)?n:n.split(" "),K=(n,s)=>I(n).concat(I(s)),L=()=>{},U=n=>null==n,Z=(()=>{let n={script$:null};return{load:(d,g)=>n.script$||(n.script$=(0,_.P)(()=>{const h=d.createElement("script");return h.referrerPolicy="origin",h.type="application/javascript",h.src=g,d.head.appendChild(h),(0,u.R)(h,"load").pipe((0,M.q)(1),(0,b.h)(void 0))}).pipe((0,x.d)({bufferSize:1,refCount:!0}))),reinitialize:()=>{n={script$:null}}}})(),J=new e.OlP("TINYMCE_SCRIPT_SRC"),k={provide:l.JU,useExisting:(0,e.Gpc)(()=>S),multi:!0};let S=(()=>{class n extends T{constructor(o,d,g,h){super(),this.platformId=g,this.tinymceScriptSrc=h,this.cloudChannel="6",this.apiKey="no-api-key",this.id="",this.modelEvents="change input undo redo",this.onTouchedCallback=L,this.destroy$=new E.x,this.initialise=()=>{const D={...this.init,selector:void 0,target:this._element,inline:this.inline,readonly:this.disabled,plugins:K(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:v=>{this._editor=v,i(v,"init",this.destroy$).subscribe(()=>{this.initEditor(v)}),((n,s,o)=>{(n=>{const s=c(n.ignoreEvents,[]);return c(n.allowedEvents,y).filter(d=>y.includes(d)&&!s.includes(d))})(n).forEach(g=>{const h=n[g];i(s,g.substring(2),o).subscribe(D=>{h.observers.length>0&&n.ngZone.run(()=>h.emit({event:D,editor:s}))})})})(this,v,this.destroy$),this.init&&"function"==typeof this.init.setup&&this.init.setup(v)}};R(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(()=>{m().init(D)})},this._elementRef=o,this.ngZone=d}set disabled(o){this._disabled=o,this._editor&&this._editor.initialized&&("function"==typeof this._editor.mode?.set?this._editor.mode.set(o?"readonly":"design"):this._editor.setMode(o?"readonly":"design"))}get disabled(){return this._disabled}get editor(){return this._editor}writeValue(o){this._editor&&this._editor.initialized?this._editor.setContent(U(o)?"":o):this.initialValue=null===o?void 0:o}registerOnChange(o){this.onChangeCallback=o}registerOnTouched(o){this.onTouchedCallback=o}setDisabledState(o){this.disabled=o}ngAfterViewInit(){(0,f.NF)(this.platformId)&&(this.id=this.id||(n=>{const o=(new Date).getTime(),d=Math.floor(1e9*Math.random());return O++,"tiny-angular_"+d+O+String(o)})(),this.inline=void 0!==this.inline?!1!==this.inline:!!this.init?.inline,this.createElement(),null!==m()?this.initialise():this._element&&this._element.ownerDocument&&Z.load(this._element.ownerDocument,this.getScriptSrc()).pipe((0,w.R)(this.destroy$)).subscribe(this.initialise))}ngOnDestroy(){this.destroy$.next(),null!==m()&&m().remove(this._editor)}createElement(){this._element=document.createElement(this.inline?"string"==typeof this.tagName?this.tagName:"div":"textarea"),this._element&&(document.getElementById(this.id)&&console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`),this._element.id=this.id,R(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element))}getScriptSrc(){return U(this.tinymceScriptSrc)?`https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js`:this.tinymceScriptSrc}initEditor(o){i(o,"blur",this.destroy$).subscribe(()=>{this.ngZone.run(()=>this.onTouchedCallback())}),i(o,this.modelEvents,this.destroy$).subscribe(()=>{this.ngZone.run(()=>this.emitOnChange(o))}),"string"==typeof this.initialValue&&this.ngZone.run(()=>{o.setContent(this.initialValue),o.getContent()!==this.initialValue&&this.emitOnChange(o),void 0!==this.onInitNgModel&&this.onInitNgModel.emit(o)})}emitOnChange(o){this.onChangeCallback&&this.onChangeCallback(o.getContent({format:this.outputFormat}))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(J,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",init:"init",id:"id",initialValue:"initialValue",outputFormat:"outputFormat",inline:"inline",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",modelEvents:"modelEvents",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents",disabled:"disabled"},standalone:!0,features:[e._Bn([k]),e.qOj,e.jDz],decls:1,vars:0,template:function(o,d){1&o&&e.YNc(0,P,0,0,"ng-template")},dependencies:[f.ez,l.u5],styles:["[_nghost-%COMP%]{display:block}"]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[S]}),n})();var A=r(9116),Y=r(92340),G=r(32802),$=r(5037),F=r(73679),z=r(36704),Q=r(51971);function X(n,s){1&n&&(e.ynx(0),e._uU(1,"\u5fc5\u586b\u9879"),e.BQk())}function V(n,s){1&n&&e.YNc(0,X,2,0,"ng-container",8),2&n&&e.Q6J("ngIf",s.$implicit.hasError("required"))}const W=[{path:"",component:(()=>{class n{constructor(o){this.fb=o,this.pageHeaderInfo={title:"\u5bcc\u6587\u672c\uff0c\u4eba\u4eec\u603b\u662f\u559c\u6b22\u7528\u82b1\u91cc\u80e1\u54e8\u7684\u6587\u5b57\uff0c\u8868\u8fbe\u81ea\u5df1\u7a7a\u865a\u7684\u60c5\u611f",breadcrumb:["\u9996\u9875","\u6269\u5c55\u529f\u80fd","\u5bcc\u6587\u672c"]},this.localUrl="http://139.9.225.248:8088",this.uploadRichFileUrl=Y.NZ.production?`${this.localUrl}/rich-upload`:"/site/rich-upload",this.editInit={images_upload_url:this.uploadRichFileUrl,branding:!1,height:500,convert_urls:!1,menubar:!1,plugins:["image"],fontsize_formats:"12px 14px 16px 18px 24px 36px 48px 56px 72px",language:"zh_CN",toolbar:"|bold|fontselect|fontsizeselect|styleselect|removeformat|aligncenter  alignright alignjustify | image"}}initForm(){this.validateForm=this.fb.group({detail:["",[l.kI.required]]})}ngOnInit(){this.initForm()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(l.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-rich-text"]],decls:12,vars:15,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-form","",1,"form-wrap",3,"formGroup"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzSpan","24","nzRequired","","nzFor","detail"],["nzSm","24",3,"nzErrorTip","nzXl","nzXXl","nzLg","nzMd"],["formControlName","detail",3,"init","apiKey"],["combineTpl",""],[4,"ngIf"]],template:function(o,d){if(1&o&&(e._UZ(0,"app-page-header",0),e.TgZ(1,"div",1)(2,"nz-card"),e._UZ(3,"app-water-mark"),e.TgZ(4,"form",2)(5,"nz-form-item",3)(6,"nz-form-label",4),e._uU(7,"\u63cf\u8ff0"),e.qZA(),e.TgZ(8,"nz-form-control",5),e._UZ(9,"editor",6),e.qZA()()()()(),e.YNc(10,V,1,1,"ng-template",null,7,e.W1O)),2&o){const g=e.MAs(11);e.Q6J("pageHeaderInfo",d.pageHeaderInfo),e.xp6(4),e.Q6J("formGroup",d.validateForm),e.xp6(1),e.Q6J("nzXXl",24)("nzXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzXs",24),e.xp6(3),e.Q6J("nzErrorTip",g)("nzXl",18)("nzXXl",18)("nzLg",18)("nzMd",24),e.xp6(1),e.Q6J("init",d.editInit)("apiKey","95b1w09g3ruzin5ylg5inr4afxzm3oxotroc0ofkh8pwcefz")}},dependencies:[f.O5,l._Y,l.JJ,l.JL,l.sg,l.u,G.q,$.U,F.t3,F.SK,z.Lr,z.Nx,z.iK,z.Fd,Q.bd,S],changeDetection:0}),n})(),data:{title:"v\u0103n b\u1ea3n \u0111a d\u1ea1ng th\u1ee9c",key:"rich-text"}}];let q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[A.Bz.forChild(W),A.Bz]}),n})(),ee=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.m,j,q]}),n})()},32802:(N,C,r)=>{r.d(C,{q:()=>y});var t=r(94650),e=r(29576),f=r(9116),l=r(36895),u=r(45655),_=r(94963),E=r(66287);function w(i,p){if(1&i&&(t.TgZ(0,"nz-breadcrumb-item")(1,"a"),t._uU(2),t.qZA()()),2&i){const a=p.$implicit;t.xp6(2),t.Oqu(a)}}function M(i,p){1&i&&t.GkF(0)}function b(i,p){if(1&i&&(t.TgZ(0,"nz-page-header-extra"),t.YNc(1,M,1,0,"ng-container",4),t.qZA()),2&i){const a=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",a.extraTpl)}}function x(i,p){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const a=t.oxw(2);t.xp6(1),t.Oqu(a.pageHeaderInfo.desc)}}function P(i,p){if(1&i&&(t.TgZ(0,"nz-page-header-content"),t.YNc(1,x,2,1,"ng-container",5),t.qZA()),2&i){const a=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",a.pageHeaderInfo.desc)}}function m(i,p){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const a=t.oxw(2);t.xp6(1),t.Oqu(a.pageHeaderInfo.footer)}}function T(i,p){if(1&i&&(t.TgZ(0,"nz-page-header-footer"),t.YNc(1,m,2,1,"ng-container",5),t.qZA()),2&i){const a=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",a.pageHeaderInfo.footer)}}let y=(()=>{class i{constructor(a,c){this.themesService=a,this.router=c,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(e.f),t.Y36(f.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl",extraTpl:"extraTpl"},decls:6,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(a,c){1&a&&(t.TgZ(0,"nz-page-header",0),t.NdJ("nzBack",function(){return c.back()}),t.TgZ(1,"nz-breadcrumb",1),t.YNc(2,w,3,1,"nz-breadcrumb-item",2),t.qZA(),t.YNc(3,b,2,1,"nz-page-header-extra",3),t.YNc(4,P,2,1,"nz-page-header-content",3),t.YNc(5,T,2,1,"nz-page-header-footer",3),t.qZA()),2&a&&(t.Q6J("nzTitle",c.pageHeaderInfo.title)("nzBackIcon",c.backTpl?c.backTpl:null)("nzGhost",!1),t.xp6(2),t.Q6J("ngForOf",c.pageHeaderInfo.breadcrumb),t.xp6(1),t.Q6J("ngIf",c.extraTpl),t.xp6(1),t.Q6J("ngIf",c.pageHeaderInfo.desc),t.xp6(1),t.Q6J("ngIf",c.pageHeaderInfo.footer))},dependencies:[l.sg,l.O5,l.tP,u.$O,u.u5,u.Jp,u.$,u.A2,_.Dg,_.MO,E.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),i})()}}]);