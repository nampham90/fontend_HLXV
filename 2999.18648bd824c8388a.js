"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[2999],{85216:(v,z,s)=>{s.d(z,{m:()=>g});var p=s(94650);let g=(()=>{class m{constructor(){this.formRules={nonEmpty:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",usernameMin:6,passwordMin:6,passwordPattern:"^[a-zA-Z0-9]{6,20}$"},this.formErrors={name:"",email:"",password:"",confirmPassword:"",accept:!1},this.errorMessages={name:{required:"Name kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",minLength:`Name t\u1ed1i thi\u1ec3u ${this.formRules.usernameMin} k\xfd t\u1ef1`,pattern:"Must contain letters and/or numbers, no trailing spaces",namedb:"T\xean T\xe0i Kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i."},text:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng."},email:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng.",email:"\u0110\u1ecba ch\u1ec9 Email kh\xf4ng \u0111\xfang.",emaildb:"Email \u0111\xe3 t\u1ed3n t\u1ea1i."},password:{required:"Password kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",pattern:"Password l\xe0 k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t, s\u1ed1, ch\u1eef hoa v\xe0 ch\u1eef th\u01b0\u1eddng",minLength:`Password t\u1ed1i thi\u1ec3u ${this.formRules.passwordMin} k\xfd t\u1ef1`},confirmPassword:{required:"Password confirmation is required",passwordMismatch:"Passwords must match"},accept:{requiredTrue:"You have to accept our Terms and Conditions"}}}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275prov=p.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},78898:(v,z,s)=>{s.d(z,{C:()=>f});var p=s(44556),g=s(94650),m=s(54246);let f=(()=>{class d{constructor(c){this.http=c}searchParams(c){return this.http.post(p.Spin00901Ant100Search,c,{needSuccessInfo:!1})}Detail(c){return this.http.post(p.Spin00901Ant100Detail,c,{needSuccessInfo:!1})}create(c){return this.http.post(p.Spin00901Ant100Add,c,{needSuccessInfo:!1})}update(c){return this.http.post(p.Spin00901Ant100Update,c,{needSuccessInfo:!1})}delete(c){return this.http.post(p.Spin00901Ant100Del,c,{needSuccessInfo:!1})}deleteAll(c){return this.http.post(p.Spin00901Ant100Alldel,c,{needSuccessInfo:!1})}}return d.\u0275fac=function(c){return new(c||d)(g.LFG(m.q))},d.\u0275prov=g.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},67859:(v,z,s)=>{s.d(z,{S:()=>Z});var p=s(94650),T=s(91565);let E=(()=>{class r{constructor(h){this.webService=h}mobileRule(h){return h?function l(r){return/^(0|\+?84|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(r)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\xednh x\xe1c"}:null}telPhoneRule(h){return h?function c(r){return/^(0\d{2,3}-?)?\d{7,8}$/.test(r)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp zalo ch\xednh x\xe1c"}:null}emailRule(h){return h?function x(r){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(r)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp emali ch\xednh x\xe1c"}:null}passwordRule(h){return h?function n(r){return/^[^\s]{6,20}$/.test(r)&&!/^\d+$/.test(r)}(h)?null:{message:"M\u1eadt kh\u1ea9u bao g\u1ed3m 6 \u0111\u1ebfn 20 ch\u1eef c\xe1i vi\u1ebft hoa v\xe0 vi\u1ebft th\u01b0\u1eddng, s\u1ed1 ho\u1eb7c c\xe1c k\xfd t\u1ef1 kh\xe1c"}:null}}return r.\u0275fac=function(h){return new(h||r)(p.LFG(T.Q))},r.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),Z=(()=>{class r{constructor(h){this.vrService=h}emailValidator(){return this.commonUtil(this.vrService.emailRule)}mobileValidator(){return this.commonUtil(this.vrService.telPhoneRule)}passwordValidator(){return this.commonUtil(this.vrService.passwordRule)}zaloValidator(){return this.commonUtil(this.vrService.telPhoneRule)}commonUtil(h){return C=>h(C.value)}}return r.\u0275fac=function(h){return new(h||r)(p.LFG(E))},r.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},71094:(v,z,s)=>{s.r(z),s.d(z,{Spin00251Module:()=>$n});var p=s(9116),g=s(22155),m=s(13951),f=s(44556),d=s(22195),l=s(24006),c=s(17489),x=s.n(c),n=s(94650),M=s(91565),T=s(36895),E=s(99651),Z=s(35568),r=s(49651),_=s(50007),h=s(49523),C=s(39646),w=s(28746),Q=s(78898),A=s(73679),S=s(36704),b=s(35635),D=s(38231),N=s(37096);function U(e,a){1&e&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-label",31),n._uU(3,"S\u1ed1 th\u1ee9 t\u1ef1"),n.qZA(),n.TgZ(4,"nz-form-control",32),n._UZ(5,"input",33),n.qZA()(),n.BQk()),2&e&&(n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",!0))}function I(e,a){if(1&e&&n._UZ(0,"nz-option",34),2&e){const t=a.$implicit;n.Q6J("nzValue",t.value)("nzLabel",t.lable)}}function L(e,a){if(1&e&&n._UZ(0,"nz-option",34),2&e){const t=a.$implicit;n.Q6J("nzValue",t.datacd)("nzLabel",t.datanm)}}const B=function(){return{minRows:2,maxRows:6}};let O=(()=>{class e{constructor(t,i,o,u){this.modalRef=t,this.fb=i,this.cdf=o,this.spin00901Service=u,this.isEdit=!1,this.const=f,this.listKho=[],this.listdonvitinh=f.lstdonvitinh,this.tenkho="",this.searchParam={},this.params={}}ngOnInit(){this.initForm(),this.getListKho(),Object.keys(this.params).length>0&&(this.isEdit=!0,this.setFormStatusByType("enable"),this.addEditForm.patchValue(this.params))}setFormStatusByType(t){this.addEditForm.get("stt")?.[t]()}getAsyncFnData(t){return(0,C.of)(t)}getCurrentValue(){return(0,h.r7)(this.addEditForm)?(0,C.of)(this.addEditForm.value):(0,C.of)(!1)}initForm(){this.addEditForm=this.fb.group({stt:[null],noidungdonhang:[null,[l.kI.required]],tiencuoc:[0,[l.kI.required]],diadiembochang:[null,[l.kI.required]],soluong:[null,[l.kI.required]],donvitinh:[null,[l.kI.required]],makho:[null,[l.kI.required]],tennguoinhan:[null,[l.kI.required]],sdtnguoinhan:[null,[l.kI.required]],diachinguoinhan:[null,[l.kI.required]],ghichu:[null]})}getListKho(){this.searchParam.rcdkbn="0001",this.spin00901Service.searchParams({pageSize:0,pageNum:0,filters:this.searchParam}).pipe((0,w.x)(()=>{})).subscribe(i=>{this.listKho=i,this.cdf.markForCheck()})}changeKho(t){let i=!1;this.addEditForm.patchValue("KHONGOAI"==t?{diadiembochang:""}:{diadiembochang:t});for(let o of this.listKho)if(o.datacd==t){this.tenkho=o.datanm,i=!0;break}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.Lf),n.Y36(l.qu),n.Y36(n.sBO),n.Y36(Q.C))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-spin00251sub"]],decls:55,vars:52,consts:[["nz-form","",3,"formGroup"],[4,"ngIf"],["nzRequired","","nzFor","noidungdonhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp n\u1ed9i dung \u0111\u01a1n h\xe0ng",3,"nzSm","nzXs"],["nz-input","","formControlName","noidungdonhang","name","noidungdonhang","placeholder","","id","noidungdonhang"],["nzRequired","","nzFor","soluong",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng",3,"nzSm","nzXs"],["name","soluong","id","soluong","formControlName","soluong",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","donvitinh",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn \u0111\u01a1n v\u1ecb t\xednh",3,"nzSm","nzXs"],["name","donvitinh","id","donvitinh","formControlName","donvitinh","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzRequired","","nzFor","trongtai",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ti\u1ec1n c\u01b0\u1edbc",3,"nzSm","nzXs"],["name","tiencuoc","id","tiencuoc","formControlName","tiencuoc",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","makho",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn m\xe3 kho",3,"nzSm","nzXs"],["name","makho","id","makho","formControlName","makho","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select",3,"ngModelChange"],["nzErrorTip","Vui l\xf2ng nh\u1eadp \u0111\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng",3,"nzSm","nzXs"],["nz-input","","formControlName","diadiembochang","name","diadiembochang","placeholder","","id","diadiembochang"],["diadiembochang",""],["nzRequired","","nzFor","tennguoinhan",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean ng\u01b0\u1eddi nh\u1eadn",3,"nzSm","nzXs"],["nz-input","","formControlName","tennguoinhan","name","tennguoinhan","placeholder","","id","tennguoinhan"],["nzRequired","","nzFor","sdtnguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","sdtnguoinhan","name","sdtnguoinhan","placeholder","","id","sdtnguoinhan"],["nzRequired","","nzFor","diachinguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","diachinguoinhan","name","diachinguoinhan","placeholder","","id","diachinguoinhan"],["nzFor","ghichu",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["nz-input","","formControlName","ghichu","placeholder","M\u1ed1t s\u1ed1 ghi ch\xfa v\u1ec1 th\xf4ng tin \u0111\u01a1n h\xe0ng.",3,"nzAutosize"],["nzRequired","","nzFor","stt",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ...",3,"nzSm","nzXs"],["nz-input","","formControlName","stt","name","stt","placeholder","","id","stt",3,"readOnly"],[3,"nzValue","nzLabel"]],template:function(t,i){1&t&&(n.TgZ(0,"form",0),n.YNc(1,U,6,5,"ng-container",1),n.TgZ(2,"nz-form-item")(3,"nz-form-label",2),n._uU(4,"N\u1ed9i dung \u0111\u01a1n h\xe0ng"),n.qZA(),n.TgZ(5,"nz-form-control",3),n._UZ(6,"input",4),n.qZA()(),n.TgZ(7,"nz-form-item")(8,"nz-form-label",5),n._uU(9,"S\u1ed1 l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(10,"nz-form-control",6),n._UZ(11,"nz-input-number",7),n.qZA()(),n.TgZ(12,"nz-form-item")(13,"nz-form-label",8),n._uU(14,"\u0110\u01a1n v\u1ecb t\xednh"),n.qZA(),n.TgZ(15,"nz-form-control",9)(16,"nz-select",10),n.YNc(17,I,1,2,"nz-option",11),n.qZA()()(),n.TgZ(18,"nz-form-item")(19,"nz-form-label",12),n._uU(20,"Ti\u1ec1n c\u01b0\u1edbc"),n.qZA(),n.TgZ(21,"nz-form-control",13),n._UZ(22,"nz-input-number",14),n.qZA()(),n.TgZ(23,"nz-form-item")(24,"nz-form-label",15),n._uU(25,"M\xe3 kho"),n.qZA(),n.TgZ(26,"nz-form-control",16)(27,"nz-select",17),n.NdJ("ngModelChange",function(u){return i.changeKho(u)}),n.YNc(28,L,1,2,"nz-option",11),n.qZA()()(),n.TgZ(29,"nz-form-item")(30,"nz-form-label",12),n._uU(31,"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng"),n.qZA(),n.TgZ(32,"nz-form-control",18),n._UZ(33,"input",19,20),n.qZA()(),n.TgZ(35,"nz-form-item")(36,"nz-form-label",21),n._uU(37,"T\xean ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(38,"nz-form-control",22),n._UZ(39,"input",23),n.qZA()(),n.TgZ(40,"nz-form-item")(41,"nz-form-label",24),n._uU(42,"SDT ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(43,"nz-form-control",22),n._UZ(44,"input",25),n.qZA()(),n.TgZ(45,"nz-form-item")(46,"nz-form-label",26),n._uU(47,"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(48,"nz-form-control",22),n._UZ(49,"input",27),n.qZA()(),n.TgZ(50,"nz-form-item")(51,"nz-form-label",28),n._uU(52,"Ghi ch\xfa"),n.qZA(),n.TgZ(53,"nz-form-control",29),n._UZ(54,"textarea",30),n.qZA()()()),2&t&&(n.Q6J("formGroup",i.addEditForm),n.xp6(1),n.Q6J("ngIf",i.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",1e4)("nzStep",1),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",i.listdonvitinh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",100)("nzMax",5e4)("nzStep",100),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",i.listKho),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(4),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzAutosize",n.DdM(51,B)))},dependencies:[T.sg,T.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,A.t3,A.SK,S.Lr,S.Nx,S.iK,S.Fd,b.Zp,b.rh,D.Ip,D.Vq,N._V]}),e})();var q=s(69174);let Y=(()=>{class e{constructor(t){this.modalWrapService=t}getContentComponent(){return O}show(t={},i){return this.modalWrapService.show(this.getContentComponent(),t,i)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(q.U))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=s(57763),R=s(77322),V=s(44499),P=s(32802),H=s(5529),K=s(35656),W=s(94178),$=s(21102),j=s(66616),nn=s(47044),tn=s(21811),en=s(51971),y=s(48521);const on=["operationTpl"],an=["tiencuocTpl"],sn=["noidungdonhangTpl"],rn=["ghichuTpl"],ln=["soluongTpl"],un=["donvitinhTpl"],hn=["makhoTpl"],cn=["diadiembochangTpl"],pn=["sdtnguoinhanTpl"],dn=["tennguoinhanTpl"],mn=["diachinguoinhanTpl"];function gn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",19),n.NdJ("click",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.showVideo())}),n._UZ(1,"span",20),n._uU(2),n.qZA()}if(2&e){const t=n.oxw();n.Q6J("nzSize","large"),n.xp6(2),n.hij("",t.formItemNm[4]," ")}}function zn(e,a){if(1&e&&(n.ynx(0),n.TgZ(1,"span",21),n._uU(2),n.qZA(),n.BQk()),2&e){const t=n.oxw(2);n.xp6(2),n.hij("Quay l\u1ea1i ",t.backMH,"")}}function fn(e,a){if(1&e&&n.YNc(0,zn,3,1,"ng-container",5),2&e){const t=n.oxw();n.Q6J("ngIf",t.showreturnBack)}}function _n(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",41),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.searchUserClick())}),n._UZ(1,"span",42),n.qZA()}2&e&&n.Q6J("nzType","primary")}function Sn(e,a){if(1&e&&(n.ynx(0),n._uU(1),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.errors.message)}}function Tn(e,a){1&e&&(n.ynx(0),n._uU(1,"Ph\u1ea7n b\u1eaft bu\u1ed9c"),n.BQk())}function Cn(e,a){if(1&e&&(n.YNc(0,Sn,2,1,"ng-container",5),n.YNc(1,Tn,2,0,"ng-container",5)),2&e){const t=a.$implicit;n.Q6J("ngIf",t.hasError("message")),n.xp6(1),n.Q6J("ngIf",t.hasError("required"))}}const F=function(){return{xs:8,sm:16,md:24}},bn=function(){return{minRows:2,maxRows:6}};function vn(e,a){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"form",22),n.NdJ("ngSubmit",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.submitForm())}),n.TgZ(2,"div",23)(3,"div",24)(4,"nz-form-item")(5,"nz-form-label",25),n._uU(6,"S\u1ed1 ID"),n.qZA(),n.TgZ(7,"nz-form-control",26),n._UZ(8,"input",27),n.qZA()()()(),n.TgZ(9,"div",23)(10,"div",28)(11,"nz-form-item")(12,"nz-form-label",29),n._uU(13,"Id Kh\xe1ch H\xe0ng"),n.qZA(),n.TgZ(14,"nz-form-control",30)(15,"nz-input-group",31)(16,"input",32),n.NdJ("blur",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.fnFocusOutUser())}),n.qZA()(),n.YNc(17,_n,2,1,"ng-template",null,33,n.W1O),n.TgZ(19,"nz-form-label",34)(20,"span")(21,"u"),n._uU(22),n.qZA()()()()()(),n.TgZ(23,"div",24)(24,"nz-form-item")(25,"nz-form-label",29),n._uU(26,"H\xecnh th\u1ee9c thanh to\xe1n"),n.qZA(),n.TgZ(27,"nz-form-control",30)(28,"nz-radio-group",35)(29,"label",36),n._uU(30,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(31,"label",37),n._uU(32,"Ghi n\u1ee3"),n.qZA(),n.TgZ(33,"label",38),n._uU(34,"Khi nh\u1eadn h\xe0ng"),n.qZA()()()()()(),n.TgZ(35,"div",23)(36,"div",24)(37,"nz-form-item")(38,"nz-form-label",25),n._uU(39,"Ghi ch\xfa"),n.qZA(),n.TgZ(40,"nz-form-control",26),n._UZ(41,"textarea",39),n.qZA()()()()(),n.YNc(42,Cn,2,2,"ng-template",null,40,n.W1O),n.BQk()}if(2&e){const t=n.MAs(18),i=n.MAs(43),o=n.oxw();n.xp6(1),n.Q6J("formGroup",o.headerForm),n.xp6(1),n.Q6J("nzGutter",n.DdM(83,F)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("nzGutter",n.DdM(84,F)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",10)("nzXl",10)("nzLg",10)("nzMd",10)("nzSm",20)("nzXs",24)("nzErrorTip",i),n.xp6(1),n.Q6J("nzAddOnAfter",t),n.xp6(4),n.Q6J("nzNoColon",!0),n.xp6(3),n.Oqu(o.usernm),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",10)("nzXl",10)("nzLg",10)("nzMd",10)("nzSm",20)("nzXs",24)("nzErrorTip",i),n.xp6(8),n.Q6J("nzGutter",n.DdM(85,F)),n.xp6(1),n.Q6J("nzXXl",24)("nzXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",3)("nzXl",3)("nzLg",3)("nzMd",6)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzAutosize",n.DdM(86,bn))}}function xn(e,a){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"app-card-table-wrap",43),n.NdJ("reload",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.reloadTable())}),n.TgZ(2,"app-ant-table",44),n.NdJ("selectedChange",function(o){n.CHM(t);const u=n.oxw();return n.KtG(u.selectedChecked(o))})("changePageSize",function(o){n.CHM(t);const u=n.oxw();return n.KtG(u.changePageSize(o))})("changePageNum",function(o){n.CHM(t);const u=n.oxw();return n.KtG(u.getDataList(o))}),n.qZA()(),n.BQk()}if(2&e){const t=n.oxw(),i=n.MAs(10),o=n.MAs(12);n.xp6(1),n.Q6J("tableTitle","Danh s\xe1ch m\u1eb7t h\xe0ng")("btnTpl",i)("btnConfirm",o),n.xp6(1),n.Q6J("checkedCashArrayFromComment",t.checkedCashArray)("tableConfig",t.tableConfig)("tableData",t.dataList)}}function An(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",47),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.add())}),n._UZ(1,"i",48),n._uU(2," Th\xeam m\u1edbi "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnNew)}}function En(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",49),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.allDel())}),n._UZ(1,"i",50),n._uU(2," X\xf3a t\u1ea5t c\u1ea3 "),n.qZA()}2&e&&n.Q6J("disabled",!0)}function Zn(e,a){if(1&e&&(n.YNc(0,An,3,1,"button",45),n.YNc(1,En,3,1,"button",46)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.Spin00251Add),n.xp6(1),n.Q6J("appAuth",t.ActionCode.Spin00251Delall)}}function Fn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"span",52)(1,"button",47),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(3);return n.KtG(o.fnBtnConfirm())}),n._UZ(2,"i",53),n._uU(3," Confirm "),n.qZA()()}if(2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("disabled",!t.btnConfirm)("disabled",!t.headerForm.valid)}}function Xn(e,a){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"button",54),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(4);return n.KtG(o.fnBtnCopy())}),n._UZ(2,"i",55),n._uU(3," Sao ch\xe9p "),n.qZA(),n.BQk()}}function Mn(e,a){if(1&e&&(n.TgZ(0,"span",52),n.YNc(1,Xn,4,0,"ng-container",5),n.qZA()),2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("ngIf",t.showbtnCopy)}}function Dn(e,a){if(1&e&&(n.ynx(0),n.YNc(1,Fn,4,2,"span",51),n.YNc(2,Mn,2,1,"span",51),n.BQk()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("appAuth",t.ActionCode.Spin00251Confirm),n.xp6(1),n.Q6J("appAuth",t.ActionCode.Spin00251Copy)}}function yn(e,a){if(1&e&&n.YNc(0,Dn,3,2,"ng-container",5),2&e){const t=n.oxw();n.Q6J("ngIf",t.showConfirm)}}function Jn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"span",52)(1,"button",56),n.NdJ("click",function(){n.CHM(t);const o=n.oxw().stt,u=n.oxw();return n.KtG(u.edit(o))}),n._uU(2,"C\u1eadp nh\u1eadt"),n.qZA()()}}function kn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"span",52)(1,"button",56),n.NdJ("click",function(){n.CHM(t);const o=n.oxw().stt,u=n.oxw();return n.KtG(u.del(o))}),n._uU(2,"X\xf3a"),n.qZA()()}}function wn(e,a){if(1&e&&(n.YNc(0,Jn,3,0,"span",51),n.YNc(1,kn,3,0,"span",51)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.Spin00251Update),n.xp6(1),n.Q6J("appAuth",t.ActionCode.Spin00251Del)}}function Qn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=a.tiencuoc;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function Nn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.noidungdonhang;n.xp6(1),n.Oqu(t)}}function Un(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.donvitinh;n.xp6(1),n.Oqu(t)}}function In(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.diadiembochang;n.xp6(1),n.Oqu(t)}}function Ln(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.ghichu;n.xp6(1),n.Oqu(t)}}function Bn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.soluong;n.xp6(1),n.Oqu(t)}}function On(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.makho;n.xp6(1),n.Oqu(t)}}function qn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.sdtnguoinhan;n.xp6(1),n.Oqu(t)}}function Yn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.tennguoinhan;n.xp6(1),n.Oqu(t)}}function Gn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.diachinguoinhan;n.xp6(1),n.Oqu(t)}}const Rn=function(){return{"padding-bottom":0}},Vn=[{path:"",component:(()=>{class e extends m.H{constructor(t,i,o,u,J,k,jn,nt,tt,et,it,ot,at){super(t,i,o,u,J,k),this.webService=t,this.router=i,this.cdf=o,this.datePipe=u,this.tabService=J,this.modalVideoyoutube=k,this.message=jn,this.modalSrv=nt,this.fb=tt,this.spin00251subService=et,this.spin00251subkhachhangService=it,this.dataService=ot,this.spin00251dtoService=at,this.pageHeaderInfo={title:"",breadcrumb:["","",""]},this.dateFormat=f.dateFormat,this.dataList=[],this.backupdatalst=[],this.checkedCashArray=[],this.ActionCode=d.h,this.showreturnBack=!1,this.usernm="",this.stockuser="",this.showConfirm=!1,this.btnConfirm=!0,this.showbtnCopy=!1,this.btnNew=!1,this.backMH="",this.backurl="",this.listdetail=[],this.DisplayScreenID=g.t.spin00251}fnInit(){if(this.pageHeaderInfo={title:this.formItemNm[3],breadcrumb:[this.formItemNm[1],this.formItemNm[2],this.formItemNm[3]],desc:""},this.initTable(),0==this.spin00251dtoService.initFlg){this.headerForm=this.createForm();let t={soID:this.spin00251dtoService.soID,iduser:this.spin00251dtoService.iduser,hinhthucthanhtoan:this.spin00251dtoService.hinhthucthanhtoan+"",ghichu:this.spin00251dtoService.ghichu};this.usernm=this.spin00251dtoService.usernm,this.headerForm.patchValue(t),this.listdetail=[...this.spin00251dtoService.listsp];let i=1;for(let o of this.listdetail)o.stt=i,i++;this.fnBackuplist(this.listdetail),this.getDataList(),this.showBtnConfirm(),this.showbtnCopy=!0,this.showreturnBack=!0,this.backMH=this.spin00251dtoService.mode,this.backurl=this.spin00251dtoService.backurl}else this.headerForm=this.createForm()}fnBackuplist(t){this.backupdatalst=[];for(let i of t){let o={};o.soID=i.soID,o.idchuyen=i.idchuyen,o.biensoxe=i.biensoxe,o.iduser=i.iduser,o.tiencuoc=i.tiencuoc,o.lotrinh=i.lotrinh,o.ngaynhap=i.ngaynhap,o.noidungdonhang=i.noidungdonhang,o.soluong=i.soluong,o.donvitinh=i.donvitinh,o.diadiembochang=i.diadiembochang,o.tennguoinhan=i.tennguoinhan,o.sdtnguoinhan=i.sdtnguoinhan,o.diachinguoinhan=i.diachinguoinhan,o.makho=i.makho,o.hinhthucthanhtoan=i.hinhthucthanhtoan,o.ghichu=i.ghichu,o.trangthai=i.trangthai,o.status01=i.status01,o.status02=i.status02,o.status03=i.status03,o.status04=i.status04,o.status05=i.status05,o.id=i.id,o.stt=i.stt,this.backupdatalst.push(o)}}destroy(){}submitForm(){}createForm(){return this.fb.group({soID:[""],iduser:[null,[l.kI.required]],hinhthucthanhtoan:["1",[l.kI.required]],ghichu:[""]})}fnFocusOutUser(){this.headerForm.value.iduser!=this.stockuser&&(this.usernm="")}searchUserClick(){this.spin00251subkhachhangService.show({nzTitle:"Danh s\xe1ch kh\xe1ch h\xe0ng"},{showcomfirm:!1}).subscribe(t=>{if(!t||0===t.status)return;const i={...t.modalValue};this.headerForm.patchValue({iduser:i.id}),this.stockuser=i.id,this.usernm=i.name})}fnBtnConfirm(){if(0==this.spin00251dtoService.initFlg)if(1==this.fnCheckChange())this.modalSrv.info({nzTitle:"Ch\u01b0a c\xf3 thay \u0111\u1ed5i"});else{let t={spin00251Header:this.headerForm.getRawValue(),listsp:this.dataList,mode:"update"};this.dataService.update(t).pipe().subscribe(i=>{this.modalSrv.success(0==i?{nzTitle:"Th\u1ef1c hi\u1ec7n th\xe0nh c\xf4ng !"}:{nzTitle:"\u0110\u01a1n h\xe0ng n\xe0y kh\xf4ng t\u1ed3n t\u1ea1i !"})})}else this.dataService.register({iduser:this.headerForm.value.iduser,hinhthucthanhtoan:this.headerForm.value.hinhthucthanhtoan,ghichu:this.headerForm.value.ghichu,listsp:this.dataList}).pipe().subscribe(i=>{if(i){if(i.header){let u={soID:i.header.soID,iduser:i.header.iduser.id,hinhthucthanhtoan:i.header.hinhthucthanhtoan+"",ghichu:i.header.ghichu};this.usernm=i.header.iduser.name,this.headerForm.patchValue(u)}this.listdetail=[...i.listsp];let o=1;for(let u of this.listdetail)u.stt=o,o++;this.fnBackuplist(this.listdetail),this.getDataList(),this.fnSendService(),this.showbtnCopy=!0,this.message.success("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng")}else this.message.success("\u0110\u0103ng k\xfd th\u1ea5t b\u1ea1i")})}fnSendService(){this.spin00251dtoService.initFlg=!1,this.spin00251dtoService.iduser=this.headerForm.value.iduser,this.spin00251dtoService.usernm=this.usernm,this.spin00251dtoService.soID=this.headerForm.value.soID,this.spin00251dtoService.hinhthucthanhtoan=this.headerForm.value.hinhthucthanhtoan,this.spin00251dtoService.listsp=this.dataList,this.spin00251dtoService.ghichu=this.headerForm.value.ghichu}fnCheckChange(){let t=this.headerForm.getRawValue(),i={soID:this.spin00251dtoService.soID,iduser:this.spin00251dtoService.iduser,hinhthucthanhtoan:this.spin00251dtoService.hinhthucthanhtoan+"",ghichu:this.spin00251dtoService.ghichu};return!!x().isEqual(t,i)&&!!x().isEqual(this.dataList,this.backupdatalst)}fnBtnCopy(){this.spin00251dtoService.clear(),this.headerForm.patchValue({soID:""}),this.message.info("Sao ch\xe9p th\xe0nh c\xf4ng !")}add(){this.spin00251subService.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(t=>{!t||0===t.status||(this.tableLoading(!0),this.mergeDetail(t.modalValue),this.addListDetail(),this.getDataList(),this.showBtnConfirm())},t=>this.tableLoading(!1))}showBtnConfirm(){this.showConfirm=this.dataList.length>0}addListDetail(){this.pnh&&(this.listdetail=this.listdetail.concat(this.pnh))}mergeDetail(t){let i=0,o=this.listdetail.length;if(0==o)i=1;else{let u=this.listdetail[o-1].stt;u&&u>0&&(i=u+1)}return this.pnh=t,this.pnh.stt=i,this.pnh}mergeUpdateList(t){for(let i of this.listdetail)i.stt==t.stt&&(i.noidungdonhang=t.noidungdonhang,i.tiencuoc=t.tiencuoc,i.soluong=t.soluong,i.donvitinh=t.donvitinh,i.makho=t.makho,i.diadiembochang=t.diadiembochang,i.sdtnguoinhan=t.sdtnguoinhan,i.tennguoinhan=t.tennguoinhan,i.diachinguoinhan=t.diachinguoinhan,i.ghichu=t.ghichu)}allDel(){}edit(t){let i;for(let o of this.dataList)o.stt===t&&(i=o);this.spin00251subService.show({nzTitle:"C\u1eadp nh\u1eadt"},i).subscribe(({modalValue:o,status:u})=>{0!==u&&(this.tableLoading(!0),o.stt=t,this.mergeUpdateList(o),this.getDataList(),this.message.info("Click Confirm \u0111\u1ec3 ho\xe0n th\xe0nh c\u1eadp nh\u1eadt "))})}del(t){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a n\xf3 kh\xf4ng?",nzContent:"Kh\xf4ng th\u1ec3 ph\u1ee5c h\u1ed3i sau khi x\xf3a",nzOnOk:()=>{this.tableLoading(!0),this.listdetail=this.listdetail.filter(i=>i.stt!==t),this.dataList=[...this.listdetail],this.showBtnConfirm(),this.tableLoading(!1)}})}reloadTable(){}getDataList(t){this.tableLoading(!0),this.listdetail.length>0?(this.dataList=[...this.listdetail],this.tableLoading(!1)):this.tableLoading(!1)}selectedChecked(t){this.checkedCashArray=[...t]}changePageSize(t){this.tableConfig.pageSize=t}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"STT",field:"stt",width:80},{title:"N\u1ed9i dung b\xf3c h\xe0ng",width:450,field:"noidungdonhang",tdTemplate:this.noidungdonhangTpl},{title:"Ti\u1ec1n c\u01b0\u1edbc",width:100,field:"tiencuoc",tdTemplate:this.tiencuocTpl},{title:"M\xe3 kho",width:150,field:"makho",tdTemplate:this.makhoTpl},{title:"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng",width:300,field:"diadiembochang",tdTemplate:this.diadiembochangTpl},{title:"T\xean ng\u01b0\u1eddi nh\u1eadn",width:250,field:"tennguoinhan",tdTemplate:this.tennguoinhanTpl},{title:"SDT ng\u01b0\u1eddi nh\u1eadn",width:150,field:"sdtnguoinhan",tdTemplate:this.sdtnguoinhanTpl},{title:"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn",width:350,field:"diachinguoinhan",tdTemplate:this.diachinguoinhanTpl},{title:"Ghi ch\xfa",width:450,field:"ghichu",tdTemplate:this.ghichuTpl},{title:"H\xe0nh \u0111\u1ed9ng",tdTemplate:this.operationTpl,width:200,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1,yScroll:400}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(M.Q),n.Y36(p.F0),n.Y36(n.sBO),n.Y36(T.uU),n.Y36(E.p),n.Y36(Z.L),n.Y36(r.dD),n.Y36(_.Sf),n.Y36(l.qu),n.Y36(Y),n.Y36(G.a),n.Y36(R.w),n.Y36(V.h))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-spin00251"]],viewQuery:function(t,i){if(1&t&&(n.Gf(on,7),n.Gf(an,7),n.Gf(sn,7),n.Gf(rn,7),n.Gf(ln,7),n.Gf(un,7),n.Gf(hn,7),n.Gf(cn,7),n.Gf(pn,7),n.Gf(dn,7),n.Gf(mn,7)),2&t){let o;n.iGM(o=n.CRH())&&(i.operationTpl=o.first),n.iGM(o=n.CRH())&&(i.tiencuocTpl=o.first),n.iGM(o=n.CRH())&&(i.noidungdonhangTpl=o.first),n.iGM(o=n.CRH())&&(i.ghichuTpl=o.first),n.iGM(o=n.CRH())&&(i.soluongTpl=o.first),n.iGM(o=n.CRH())&&(i.donvitinhTpl=o.first),n.iGM(o=n.CRH())&&(i.makhoTpl=o.first),n.iGM(o=n.CRH())&&(i.diadiembochangTpl=o.first),n.iGM(o=n.CRH())&&(i.sdtnguoinhanTpl=o.first),n.iGM(o=n.CRH())&&(i.tennguoinhanTpl=o.first),n.iGM(o=n.CRH())&&(i.diachinguoinhanTpl=o.first)}},features:[n.qOj],decls:35,vars:8,consts:[[3,"backTpl","backUrl","pageHeaderInfo","extraTpl"],["huongdanTpl",""],["backTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],[4,"ngIf"],["tableBtns",""],["tableConfirm",""],["operationTpl",""],["tiencuocTpl",""],["noidungdonhangTpl",""],["donvitinhTpl",""],["diadiembochangTpl",""],["ghichuTpl",""],["soluongTpl",""],["makhoTpl",""],["sdtnguoinhanTpl",""],["tennguoinhanTpl",""],["diachinguoinhanTpl",""],["nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","star","nzTheme","outline"],["nz-icon","","nzType","arrow-left","nzTheme","outline"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-input","","name","soID","formControlName","soID","placeholder","S\u1ed1 ID","readonly","",3,"disabled"],["nz-col","",1,"inputIcon",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzRequired","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzErrorTip"],["nzSearch","",3,"nzAddOnAfter"],["name","iduser","type","text","nz-input","","formControlName","iduser","placeholder","",3,"blur"],["suffixIconButtonTaixe",""],["nzFor","",1,"fix-inputIcon",3,"nzNoColon"],["name","hinhthucthanhtoan","formControlName","hinhthucthanhtoan"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nz-radio","","nzValue","3"],["nz-input","","name","ghichu","formControlName","ghichu","placeholder","Ghi ch\xfa",3,"nzAutosize"],["combineTpl",""],["nz-button","",1,"bg-icon",3,"nzType","click"],["nz-icon","","nzType","search"],[3,"tableTitle","btnTpl","btnConfirm","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["nz-button","","nzType","primary","class","m-r-8",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","default",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"disabled","click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","default",3,"disabled","click"],["nz-icon","","nzType","delete"],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-icon","","nzType","caret-right"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","copy"],["nz-button","","nzType","primary","nzGhost","",3,"click"]],template:function(t,i){if(1&t&&(n._UZ(0,"app-page-header",0),n.YNc(1,gn,3,2,"ng-template",null,1,n.W1O),n.YNc(3,fn,1,1,"ng-template",null,2,n.W1O),n.TgZ(5,"div",3)(6,"nz-card",4),n.YNc(7,vn,44,87,"ng-container",5),n.qZA(),n.YNc(8,xn,3,6,"ng-container",5),n.YNc(9,Zn,2,2,"ng-template",null,6,n.W1O),n.YNc(11,yn,1,1,"ng-template",null,7,n.W1O),n.qZA(),n.YNc(13,wn,2,2,"ng-template",null,8,n.W1O),n.YNc(15,Qn,3,5,"ng-template",null,9,n.W1O),n.YNc(17,Nn,2,1,"ng-template",null,10,n.W1O),n.YNc(19,Un,2,1,"ng-template",null,11,n.W1O),n.YNc(21,In,2,1,"ng-template",null,12,n.W1O),n.YNc(23,Ln,2,1,"ng-template",null,13,n.W1O),n.YNc(25,Bn,2,1,"ng-template",null,14,n.W1O),n.YNc(27,On,2,1,"ng-template",null,15,n.W1O),n.YNc(29,qn,2,1,"ng-template",null,16,n.W1O),n.YNc(31,Yn,2,1,"ng-template",null,17,n.W1O),n.YNc(33,Gn,2,1,"ng-template",null,18,n.W1O)),2&t){const o=n.MAs(2),u=n.MAs(4);n.Q6J("backTpl",u)("backUrl",i.backurl)("pageHeaderInfo",i.pageHeaderInfo)("extraTpl",o),n.xp6(6),n.Q6J("nzBodyStyle",n.DdM(7,Rn)),n.xp6(1),n.Q6J("ngIf",i.headerForm),n.xp6(1),n.Q6J("ngIf",i.tableConfig)}},dependencies:[T.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,P.q,H.q,K.x,W.p,$.Ls,A.t3,A.SK,S.Lr,S.Nx,S.iK,S.Fd,j.ix,nn.w,tn.dQ,b.Zp,b.gB,b.rh,en.bd,y.Of,y.Dg,T.H9]}),e})(),data:{title:"Nh\u1eadp h\xe0ng",key:"spin00251"}}];let Pn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[p.Bz.forChild(Vn),p.Bz]}),e})();var X=s(5316),Hn=s(30804);let Kn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[X.m]}),e})(),Wn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[X.m]}),e})(),$n=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[X.m,Pn,Hn.A,Kn,Wn]}),e})()},30804:(v,z,s)=>{s.d(z,{A:()=>f});var p=s(5316),g=s(13458),m=s(94650);let f=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[p.m,g.e]}),d})()}}]);