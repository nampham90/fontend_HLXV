"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[9977],{80126:(y,z,s)=>{s.d(z,{u:()=>p});var d=s(44556),f=s(94650),_=s(54246);let p=(()=>{class c{constructor(u){this.http=u}postAll(u){return this.http.post(d.NguonxeAnt100GetAll,u,{needSuccessInfo:!1})}postDetail(u){return this.http.post(d.NguonxeAnt100GetDetail,u,{needSuccessInfo:!1})}postCreate(u){return this.http.post(d.NguonxeAnt100Create,u,{needSuccessInfo:!1})}postUpdate(u){return this.http.post(d.NguonxeAnt100Update,u,{needSuccessInfo:!1})}postDelete(u){return this.http.post(d.NguonxeAnt100Delete,u,{needSuccessInfo:!1})}postDeleteAll(u){return this.http.post(d.NguonxeAnt100DeleteAll,u,{needSuccessInfo:!1})}postUpdateStatus(u){return this.http.post(d.NguonxeAnt100UpdateStatus,u,{needSuccessInfo:!1})}}return c.\u0275fac=function(u){return new(u||c)(f.LFG(_.q))},c.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},79977:(y,z,s)=>{s.r(z),s.d(z,{Spch00251Module:()=>at});var d=s(9116),f=s(22155),_=s(13951),p=s(44556),c=s(22195),h=s(24006),u=s(28746),n=s(94650),D=s(91565),T=s(36895),F=s(99651),J=s(35568),Q=s(49651),L=s(49523),A=s(39646),Z=s(50007),M=s(67859),N=s(69454),U=s(85726),b=s(73679),g=s(36704),x=s(35635),C=s(38231),v=s(48521),w=s(37096);function q(e,a){if(1&e&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-label",40),n._uU(3,"S\u1ed1 th\u1ee9 t\u1ef1"),n.qZA(),n.TgZ(4,"nz-form-control",3),n._UZ(5,"input",41),n.qZA()(),n.BQk()),2&e){const t=n.oxw();n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",t._disable)}}function k(e,a){if(1&e&&n._UZ(0,"nz-option",42),2&e){const t=a.$implicit;n.Q6J("nzValue",t.value)("nzLabel",t.lable)}}function B(e,a){if(1&e&&n._UZ(0,"nz-option",42),2&e){const t=a.$implicit;n.Q6J("nzValue",t.id)("nzLabel",t.name)}}const O=function(){return{minRows:2,maxRows:6}};let H=(()=>{class e{constructor(t,i,o,l,r){this.modalRef=t,this.fb=i,this.cdf=o,this.validatorsService=l,this.dataKhachhangService=r,this.const=p,this.listKh=[],this.listdonvitinh=p.lstdonvitinh,this.tiencuocMode=0,this.tiencuocxengoaiMode=0,this.editForm=!1,this._disable=!1}changeTiencuoc(t){this.tiencuocMode=t}changeTiencuocxengoai(t){this.tiencuocxengoaiMode=t}getAsyncFnData(t){return(0,A.of)(t)}getCurrentValue(){return(0,L.r7)(this.addEditForm)?(this.addEditForm.value.tiencuoc=this.tiencuocMode,this.addEditForm.value.tiencuocxengoai=this.tiencuocxengoaiMode,(0,A.of)(this.addEditForm.value)):(0,A.of)(!1)}ngOnInit(){this.getListKh(),this.initForm(),Object.keys(this.params).length>0&&(this.editForm=!0,this.setFormStatusByType("enable"),this.addEditForm.patchValue(this.params),this.tiencuocMode=this.params.tiencuoc,this.params.soid&&""!=this.params.soid&&(this._disable=!0),this.tiencuocxengoaiMode=this.params.tiencuocxengoai)}initForm(){this.addEditForm=this.fb.group({stt:[null],thongtindonhang:[null,[h.kI.required]],soluong:[null,[h.kI.required]],donvitinh:[null,[h.kI.required]],diadiembochang:[null,[h.kI.required]],htttxengoai:["1",[h.kI.required]],idkhachhang:["",[h.kI.required]],htttkhachhang:["1",[h.kI.required]],tennguoinhan:[null,[h.kI.required]],sdtnguoinhan:[null,[h.kI.required,this.validatorsService.mobileValidator()]],diachinguoinhan:[null,[h.kI.required]],status02:["1",[h.kI.required]],ghichu:[null]})}setFormStatusByType(t){this.addEditForm.get("stt")?.[t]()}getListKh(){this.dataKhachhangService.getAccount({pageSize:0,pageNum:0,filters:{phongban_id:this.const.idKhachhang}}).pipe((0,u.x)(()=>{})).subscribe(i=>{this.listKh=i,this.cdf.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(Z.Lf),n.Y36(h.qu),n.Y36(n.sBO),n.Y36(M.S),n.Y36(N.B))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-subwindowctchuyenngoai"]],decls:88,vars:76,consts:[["nz-form","",3,"formGroup"],[4,"ngIf"],["nzRequired","","nzFor","thongtindonhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ...",3,"nzSm","nzXs"],["nz-input","","formControlName","thongtindonhang","name","thongtindonhang","placeholder","Vui l\xf2ng nh\u1eadp ...","id","thongtindonhang"],["nzRequired","","nzFor","soluong",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng",3,"nzSm","nzXs"],["name","soluong","id","soluong","formControlName","soluong",3,"nzMin","nzMax","nzStep","nzDisabled"],["nzRequired","","nzFor","donvitinh",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn \u0111\u01a1n v\u1ecb t\xednh",3,"nzSm","nzXs"],["name","donvitinh","id","donvitinh","formControlName","donvitinh","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select",3,"nzDisabled"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzRequired","","nzFor","diadiembochang",3,"nzSm","nzXs"],["nz-input","","formControlName","diadiembochang","name","diadiembochang","placeholder","Vui l\xf2ng nh\u1eadp ...","id","diadiembochang",3,"readOnly"],["nzRequired","","nzFor","tiencuoc",3,"nzSm","nzXs"],[3,"Amount","Disable","changeAmount"],["nzRequired","","nzFor","tiencuocxengoai",3,"nzSm","nzXs"],[3,"Amount","changeAmount"],["nzRequired","","nzFor","htttxengoai",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["formControlName","htttxengoai"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nzRequired","","nzFor","idkhachhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn",3,"nzSm","nzXs"],["name","idkhachhang","id","idkhachhang","formControlName","idkhachhang","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select",3,"nzDisabled"],["nzRequired","","nzFor","htttkhachhang",3,"nzSm","nzXs"],["formControlName","htttkhachhang",3,"nzDisabled"],["nz-radio","","nzValue","3"],["nzRequired","","nzFor","tennguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","tennguoinhan","name","tennguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","tennguoinhan",3,"readOnly"],["nzRequired","","nzFor","sdtnguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","sdtnguoinhan","name","sdtnguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","sdtnguoinhan",3,"readOnly"],["nzRequired","","nzFor","diachinguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","diachinguoinhan","name","diachinguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","diachinguoinhan",3,"readOnly"],["nzRequired","","nzFor","status02",3,"nzSm","nzXs"],["formControlName","status02"],["nz-radio","","nzValue","0"],["nzFor","ghichu",3,"nzSm","nzXs"],["nz-input","","formControlName","ghichu","placeholder","M\u1ed1t s\u1ed1 ghi ch\xfa v\u1ec1 chi ti\u1ebft \u0111\u01a1n h\xe0ng.",3,"nzAutosize"],["nzRequired","","nzFor","stt",3,"nzSm","nzXs"],["nz-input","","formControlName","stt","name","stt","placeholder","","id","stt",3,"readOnly"],[3,"nzValue","nzLabel"]],template:function(t,i){1&t&&(n.TgZ(0,"form",0),n.YNc(1,q,6,5,"ng-container",1),n.TgZ(2,"nz-form-item")(3,"nz-form-label",2),n._uU(4,"Th\xf4ng tin \u0111\u01a1n h\xe0ng"),n.qZA(),n.TgZ(5,"nz-form-control",3),n._UZ(6,"input",4),n.qZA()(),n.TgZ(7,"nz-form-item")(8,"nz-form-label",5),n._uU(9,"S\u1ed1 l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(10,"nz-form-control",6),n._UZ(11,"nz-input-number",7),n.qZA()(),n.TgZ(12,"nz-form-item")(13,"nz-form-label",8),n._uU(14,"\u0110\u01a1n v\u1ecb t\xednh"),n.qZA(),n.TgZ(15,"nz-form-control",9)(16,"nz-select",10),n.YNc(17,k,1,2,"nz-option",11),n.qZA()()(),n.TgZ(18,"nz-form-item")(19,"nz-form-label",12),n._uU(20,"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng"),n.qZA(),n.TgZ(21,"nz-form-control",3),n._UZ(22,"input",13),n.qZA()(),n.TgZ(23,"nz-form-item")(24,"nz-form-label",14),n._uU(25,"Ti\u1ec1n c\u01b0\u1edbc"),n.qZA(),n.TgZ(26,"nz-form-control",3)(27,"app-input-currency",15),n.NdJ("changeAmount",function(l){return i.changeTiencuoc(l)}),n.qZA()()(),n.TgZ(28,"nz-form-item")(29,"nz-form-label",16),n._uU(30,"Ti\u1ec1n c\u01b0\u1edbc xe ngo\xe0i"),n.qZA(),n.TgZ(31,"nz-form-control",3)(32,"app-input-currency",17),n.NdJ("changeAmount",function(l){return i.changeTiencuocxengoai(l)}),n.qZA()()(),n.TgZ(33,"nz-form-item")(34,"nz-form-label",18),n._uU(35,"HTTT Xe ngo\xe0i"),n.qZA(),n.TgZ(36,"nz-form-control",19)(37,"nz-radio-group",20)(38,"label",21),n._uU(39,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(40,"label",22),n._uU(41,"Ghi n\u1ee3"),n.qZA()()()(),n.TgZ(42,"nz-form-item")(43,"nz-form-label",23),n._uU(44,"Id Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(45,"nz-form-control",24)(46,"nz-select",25),n.YNc(47,B,1,2,"nz-option",11),n.qZA()()(),n.TgZ(48,"nz-form-item")(49,"nz-form-label",26),n._uU(50,"HTTT Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(51,"nz-form-control",19)(52,"nz-radio-group",27)(53,"label",21),n._uU(54,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(55,"label",22),n._uU(56,"Ghi n\u1ee3"),n.qZA(),n.TgZ(57,"label",28),n._uU(58,"Khi nh\u1eadn h\xe0ng"),n.qZA()()()(),n.TgZ(59,"nz-form-item")(60,"nz-form-label",29),n._uU(61,"T\xean ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(62,"nz-form-control",3),n._UZ(63,"input",30),n.qZA()(),n.TgZ(64,"nz-form-item")(65,"nz-form-label",31),n._uU(66,"SDT ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(67,"nz-form-control",3),n._UZ(68,"input",32),n.qZA()(),n.TgZ(69,"nz-form-item")(70,"nz-form-label",33),n._uU(71,"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(72,"nz-form-control",3),n._UZ(73,"input",34),n.qZA()(),n.TgZ(74,"nz-form-item")(75,"nz-form-label",35),n._uU(76,"Thu h\u1ed3i bi\xean lai"),n.qZA(),n.TgZ(77,"nz-form-control",19)(78,"nz-radio-group",36)(79,"label",21),n._uU(80,"C\xf3"),n.qZA(),n.TgZ(81,"label",37),n._uU(82,"Kh\xf4ng"),n.qZA()()()(),n.TgZ(83,"nz-form-item")(84,"nz-form-label",38),n._uU(85,"Ghi ch\xfa"),n.qZA(),n.TgZ(86,"nz-form-control",19),n._UZ(87,"textarea",39),n.qZA()()()),2&t&&(n.Q6J("formGroup",i.addEditForm),n.xp6(1),n.Q6J("ngIf",i.editForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",1e4)("nzStep",1)("nzDisabled",i._disable),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzDisabled",i._disable),n.xp6(1),n.Q6J("ngForOf",i.listdonvitinh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",i._disable),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("Amount",i.tiencuocMode)("Disable",i._disable),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("Amount",i.tiencuocxengoaiMode),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzDisabled",i._disable),n.xp6(1),n.Q6J("ngForOf",i.listKh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzDisabled",i._disable),n.xp6(8),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",i._disable),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",i._disable),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",i._disable),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzAutosize",n.DdM(75,O)))},dependencies:[T.sg,T.O5,h._Y,h.Fj,h.JJ,h.JL,h.sg,h.u,U.e,b.t3,b.SK,g.Lr,g.Nx,g.iK,g.Fd,x.Zp,x.rh,C.Ip,C.Vq,v.Of,v.Dg,w._V]}),e})();var I=s(69174);let Y=(()=>{class e{constructor(t){this.modalWrapService=t}getContentComponent(){return H}show(t={},i){return this.modalWrapService.show(this.getContentComponent(),t,i)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(I.U))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=s(80126),R=s(63604),V=s(47094),P=s(78898),K=s(72333),W=s(54246);let j=(()=>{class e{constructor(t){this.http=t}Huychuyenngoai(t){return this.http.post(p.Spch00251Ant100Huychuyenngoai,t,{needSuccessInfo:!1})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(W.q))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=s(32802),nn=s(5529),tn=s(35656),en=s(94178),on=s(21102),an=s(66616),sn=s(47044),ln=s(21811),hn=s(51971),un=s(834);const rn=["operationTpl"],cn=["tiencuocTpl"],dn=["tiencuocxengoaiTpl"],pn=["thongtindonhangTpl"],gn=["diadiembochangTpl"],mn=["ghichuTpl"],zn=["htttkhachhangTpl"],fn=["htttxengoaiTpl"],_n=["sdtnguoinhanTpl"],Tn=["tennguoinhanTpl"],Sn=["diachinguoinhanTpl"];function bn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",39),n.NdJ("click",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.showVideo())}),n._UZ(1,"span",40),n._uU(2,"H\u01b0\u1edbng d\u1eabn "),n.qZA()}2&e&&n.Q6J("nzSize","large")}function xn(e,a){1&e&&(n.ynx(0),n.TgZ(1,"span",42),n._uU(2,"Quay l\u1ea1i"),n.qZA(),n.BQk())}function Cn(e,a){if(1&e&&n.YNc(0,xn,3,0,"ng-container",41),2&e){const t=n.oxw();n.Q6J("ngIf",t.showreturnBack)}}function Xn(e,a){if(1&e&&n._UZ(0,"nz-option",43),2&e){const t=a.$implicit;n.hYB("nzLabel","",t.datacd," - ",t.datanm,""),n.s9C("nzValue",t.id)}}function An(e,a){if(1&e&&n._UZ(0,"nz-option",43),2&e){const t=a.$implicit;n.s9C("nzLabel",t.datanm),n.s9C("nzValue",t.datacd)}}function yn(e,a){if(1&e&&n._UZ(0,"nz-option",43),2&e){const t=a.$implicit;n.s9C("nzLabel",t.datacd),n.s9C("nzValue",t.datacd)}}function Zn(e,a){if(1&e&&(n.ynx(0),n._uU(1),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.errors.message)}}function vn(e,a){1&e&&(n.ynx(0),n._uU(1,"Ph\u1ea7n b\u1eaft bu\u1ed9c"),n.BQk())}function En(e,a){if(1&e&&(n.YNc(0,Zn,2,1,"ng-container",41),n.YNc(1,vn,2,0,"ng-container",41)),2&e){const t=a.$implicit;n.Q6J("ngIf",t.hasError("message")),n.xp6(1),n.Q6J("ngIf",t.hasError("required"))}}function Dn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"span",45)(1,"button",46),n.NdJ("click",function(){n.CHM(t);const o=n.oxw().stt,l=n.oxw();return n.KtG(l.edit(o))}),n._uU(2,"C\u1eadp nh\u1eadt"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("disabled",t.btnUpdate)}}function Fn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"span",45)(1,"button",46),n.NdJ("click",function(){n.CHM(t);const o=n.oxw().stt,l=n.oxw();return n.KtG(l.del(o))}),n._uU(2,"H\u1ee7y"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("disabled",t.btnDelete)}}function Jn(e,a){if(1&e&&(n.YNc(0,Dn,3,1,"span",44),n.YNc(1,Fn,3,1,"span",44)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.ChuyenngoaiEdit),n.xp6(1),n.Q6J("appAuth",t.ActionCode.ChuyenngoaiDel)}}function Qn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=a.tiencuoc;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function Ln(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=a.tiencuocxengoai;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function Mn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.thongtindonhang;n.xp6(1),n.Oqu(t)}}function Nn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.diadiembochang;n.xp6(1),n.Oqu(t)}}function Un(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.ghichu;n.xp6(1),n.Oqu(t)}}function wn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.htttkhachhang,i=n.oxw();n.xp6(1),n.Oqu(i.mergeHttt(t))}}function qn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.htttxengoai,i=n.oxw();n.xp6(1),n.Oqu(i.mergeHttt(t))}}function kn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.sdtnguoinhan;n.xp6(1),n.Oqu(t)}}function Bn(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.tennguoinhan;n.xp6(1),n.Oqu(t)}}function On(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=a.diachinguoinhan;n.xp6(1),n.Oqu(t)}}function Hn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",49),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.addtrongkho())}),n._UZ(1,"i",50),n._uU(2," Th\xeam t\u1eeb kho "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnNew)}}function In(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",49),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.add())}),n._UZ(1,"i",50),n._uU(2," Th\xeam m\u1edbi "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnNew)}}function Yn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"button",51),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.allDel())}),n._UZ(1,"i",52),n._uU(2," X\xf3a t\u1ea5t c\u1ea3 "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnDeleteAll)}}function Gn(e,a){if(1&e&&(n.YNc(0,Hn,3,1,"button",47),n.YNc(1,In,3,1,"button",47),n.YNc(2,Yn,3,1,"button",48)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.ChuyenngoaiAddtrongkho),n.xp6(1),n.Q6J("appAuth",t.ActionCode.ChuyenngoaiAdd),n.xp6(1),n.Q6J("appAuth",t.ActionCode.DataScDelAll)}}function Rn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"span",45)(1,"button",49),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(3);return n.KtG(o.fnBtnConfirm())}),n._UZ(2,"i",53),n._uU(3," Confirm "),n.qZA()()}if(2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("disabled",!t.btnConfirm)("disabled",!t.headerForm.valid)}}function Vn(e,a){if(1&e&&(n.ynx(0),n.YNc(1,Rn,4,2,"span",44),n.BQk()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("appAuth",t.ActionCode.ConfirmChuyenngoai)}}function Pn(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"span",45)(1,"button",49),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(3);return n.KtG(o.fnBtnHuychuyen())}),n._UZ(2,"i",52),n._uU(3," H\u1ee7y chuy\u1ebfn "),n.qZA()()}if(2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("disabled",!t.btnConfirm)("disabled",!t.headerForm.valid)}}function Kn(e,a){if(1&e&&(n.ynx(0),n.YNc(1,Pn,4,2,"span",44),n.BQk()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("appAuth",t.ActionCode.ChuyenngoaiHuy)}}function Wn(e,a){if(1&e&&(n.YNc(0,Vn,2,1,"ng-container",41),n.YNc(1,Kn,2,1,"ng-container",41)),2&e){const t=n.oxw();n.Q6J("ngIf",t.showConfirm),n.xp6(1),n.Q6J("ngIf",t.showHuychuyenngoai)}}const jn=function(){return{"padding-bottom":0}},X=function(){return{xs:8,sm:16,md:24}},$n=function(){return{minRows:2,maxRows:6}},nt=[{path:"",component:(()=>{class e extends _.H{constructor(t,i,o,l,r,m,S,st,lt,ht,ut,rt,ct,dt,pt,gt){super(t,i,o,l,r,m),this.webService=t,this.router=i,this.cdf=o,this.datePipe=l,this.tabService=r,this.modalVideoyoutube=m,this.message=S,this.subwinCtChuyenngoaiService=st,this.modalSrv=lt,this.nguonxeService=ht,this.dataService=ut,this.chuyenngoaiDto=rt,this.spin00901Service=ct,this.fb=dt,this.modalListSoIDService=pt,this.spch00251Service=gt,this.DisplayScreenID=f.t.spch00251,this.searchParam={},this.dateFormat=p.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=c.h,this.availableOptions=[],this.listbsxe=[],this.listtaixe=[],this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i",breadcrumb:["Home","Chuy\u1ebfn","Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i"],desc:""},this.ngaynhap=null,this.ngayvanchuyen=null,this.ngaydukiengiaohang=null,this.listnguonxe=[],this.biensoxe="",this.tentaixe="",this.sodienthoai="",this.ghichu="",this.listdetail=[],this.disabledidchuyenngoai=!0,this.disabledsdtnguonxe=!0,this.showConfirm=!1,this.btnConfirm=!0,this.btnNew=!0,this.btnDelete=!0,this.btnDeleteAll=!0,this.btnUpdate=!0,this.showreturnBack=!1,this.showHuychuyenngoai=!1}fnInit(){}destroy(){}ngOnInit(){this.initTable(),this.headerForm=this.createForm(),this.showBtnConfirm(),this.fnGetAllNguonXe(),!0===this.chuyenngoaiDto.initFlg&&(this.btnNew=!1,this.btnDelete=!1,this.btnDeleteAll=!1,this.btnUpdate=!1,this.showreturnBack=!1),"link"==this.chuyenngoaiDto.mode&&!1===this.chuyenngoaiDto.initFlg&&(this.tableLoading(!0),this.dataService.postDetail({id:this.chuyenngoaiDto.id}).pipe().subscribe(t=>{this.listdetail=[...t.listdetail];let i=1;for(let o of this.listdetail)o.stt=i,i++;this.getDataList(),this.headerForm.patchValue(t.resHeader),this.showreturnBack=!0}),this.chuyenngoaiDto.mode="",this.chuyenngoaiDto.initFlg=!0),"update"==this.chuyenngoaiDto.mode&&!1===this.chuyenngoaiDto.initFlg&&(this.tableLoading(!0),this.dataService.postDetail({id:this.chuyenngoaiDto.id}).pipe().subscribe(t=>{this.listdetail=[...t.listdetail];let i=1;for(let o of this.listdetail)o.stt=i,i++;this.getDataList(),this.headerForm.patchValue(t.resHeader),this.showBtnConfirm(),this.btnDelete=!1,this.btnDeleteAll=!0,this.btnNew=!1,this.btnUpdate=!1,this.showreturnBack=!0,this.showHuychuyenngoai=!0}))}fnGetAllNguonXe(){this.nguonxeService.postAll({pageSize:0,pageNum:0}).pipe().subscribe(i=>{this.listnguonxe=i})}fnCheckDataList(){for(let t of this.dataList)if(""==t.htttxengoai||0==t.tiencuocxengoai)return!0;return!1}fnBtnConfirm(){if(this.headerForm.value.id&&""==this.chuyenngoaiDto.id&&24==this.headerForm.value.id.length)this.chuyenngoaiDto.clear(),this.headerForm.reset();else{let t={},i="",o="",l="";if(!1===this.chuyenngoaiDto.initFlg&&"update"==this.chuyenngoaiDto.mode)l="update",i="B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n c\u1eadp nh\u1eadt !",o="D\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt sau khi nh\u1ea5n OK",t={spch00251Header:this.headerForm.value,spch00251Listdetail:this.dataList,mode:"update"};else{if(1==this.fnCheckDataList())return void this.modalSrv.info({nzTitle:"Vui l\xf2ng c\u1eadp nh\u1eadt \u0111\u01a1n h\xe0ng",nzContent:"N\xf4i dung c\u1ea7n c\u1eadp nh\u1eadt\n 1. Ti\u1ec1n c\u01b0\u1edbc xe ngo\xe0i\n 2. Httt xe ngo\xe0i"});l="create",i="B\u1ea1n ch\u1eafc ch\u1eafn d\u1eef li\u1ec7u b\u1ea1n t\u1ea1o \u0111\xe3 \u0111\xfang ch\u01b0a !",o="Nh\u1ea5n ok \u0111\u1ec3 ho\xe0n th\xe0nh c\xf4ng vi\u1ec7c !",t={spch00251Header:this.headerForm.value,spch00251Listdetail:this.dataList,mode:"create"}}this.modalSrv.confirm({nzTitle:i,nzContent:o,nzOnOk:()=>{this.dataService.postCreate(t).pipe().subscribe(r=>{this.tableLoading(!0),this.listdetail=r.reslistdetail;let m=1;for(let S of this.listdetail)S.stt=m,m++;this.headerForm.patchValue(r.resspch00251Header),this.getDataList(),this.chuyenngoaiDto.initFlg=!1,this.chuyenngoaiDto.mode="update",this.chuyenngoaiDto.listdetail=r.reslistdetail,"create"==l?(this.message.success("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng !"),this.showHuychuyenngoai=!0):this.message.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng !")})}})}}fnBtnHuychuyen(){const t=this.headerForm.get("id").value;if(""==t||null==t||null==t)return void this.modalSrv.info({nzTitle:"Chuy\u1ebfn h\xe0ng kh\xf4ng t\u1ed3n t\u1ea1i"});let i={idchuyenngoai:t};this.modalSrv.confirm({nzTitle:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n h\u1ee7y chuy\u1ebfn h\xe0ng n\xe0y kh\xf4ng ?",nzContent:"Sau khi H\u1ee7y kh\xf4ng th\u1ec3 kh\xf4i ph\u1ee5c chuy\u1ebfn !",nzOnOk:()=>{this.spch00251Service.Huychuyenngoai(i).subscribe(o=>{1==o&&(this.message.success("H\u1ee7y th\xe0nh c\xf4ng !"),this.headerForm.reset(),this.dataList=[],this.listdetail=[],this.chuyenngoaiDto.clear())})}})}createForm(){return this.fb.group({id:[""],nguonxe:[null,[h.kI.required]],sdtnguonxe:["",[h.kI.required]],ngaynhap:[this.getDate(),[h.kI.required]],ngayvanchuyen:[null,[h.kI.required]],ngaydukiengiaohang:[null],biensoxe:[null,[h.kI.required]],tentaixe:[null,[h.kI.required]],sodienthoai:[null,[h.kI.required]],ghichu:[""]})}submitForm(){console.log("submit",this.headerForm.value)}fnChangeNguonXe(t){this.nguonxeService.postDetail({id:t}).pipe().subscribe(o=>{this.headerForm.patchValue({sdtnguonxe:o.sodienthoai}),this.fnGetListBiensoxe(o.id),this.fnGetListTaiXe(o.sodienthoai)})}fnGetListBiensoxe(t){this.spin00901Service.searchParams({pageSize:0,pageNum:0,filters:{rcdkbn:t}}).pipe((0,u.x)(()=>{})).subscribe(o=>{this.listbsxe=o,this.cdf.detectChanges()})}fnGetListTaiXe(t){this.spin00901Service.searchParams({pageSize:0,pageNum:0,filters:{rcdkbn:t}}).pipe((0,u.x)(()=>{})).subscribe(o=>{this.listtaixe=o,this.cdf.detectChanges()})}fnChangeTaiXe(t){for(let i of this.listtaixe)if(i.datacd==t){this.headerForm.patchValue({sodienthoai:i.datanm});break}}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}getDataList(t){this.tableLoading(!0),this.listdetail.length>0?(this.dataList=[...this.listdetail],console.log(this.dataList),this.tableLoading(!1)):this.tableLoading(!1)}selectedChecked(t){this.checkedCashArray=[...t]}changePageSize(t){this.tableConfig.pageSize=t}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}getListsoId(){let t=[];for(let i of this.dataList)i.soid&&""!=i.soid&&t.push(i.soid);return t}addtrongkho(){let t=this.getListsoId();this.modalListSoIDService.show({nzTitle:"Danh H\xe0ng t\u1ed3n kho"},{showcomfirm:!1,idchuyen:"NULL",status02:"KHONG",listsoId:t}).subscribe(i=>{if(!i||0===i.status)return;const o={...i.modalValue};let l="";l=o.iduser.id?o.iduser.id:o.iduser._id,this.mergeDetail({soid:o.soID,idkhachhang:l,tiencuoc:o.tiencuoc,thongtindonhang:o.noidungdonhang,soluong:o.soluong,donvitinh:o.donvitinh,diadiembochang:o.diadiembochang,htttkhachhang:o.hinhthucthanhtoan+"",tennguoinhan:o.tennguoinhan,sdtnguoinhan:o.sdtnguoinhan,diachinguoinhan:o.diachinguoinhan,ghichu:o.ghichu,tiencuocxengoai:0,htttxengoai:""}),this.addListDetail(),this.getDataList(),this.showBtnConfirm()})}add(){this.subwinCtChuyenngoaiService.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(t=>{!t||0===t.status||(this.tableLoading(!0),this.mergeDetail(t.modalValue),this.addListDetail(),this.getDataList(),this.showBtnConfirm())},t=>this.tableLoading(!1))}edit(t){let i;for(let o of this.dataList)o.stt===t&&(i=o);this.subwinCtChuyenngoaiService.show({nzTitle:"C\u1eadp nh\u1eadt"},i).subscribe(({modalValue:o,status:l})=>{0!==l&&(this.tableLoading(!0),o.stt=t,this.mergeUpdateList(o),this.getDataList(),this.message.info("Click Confirm \u0111\u1ec3 ho\xe0n th\xe0nh c\u1eadp nh\u1eadt "))})}del(t){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a n\xf3 kh\xf4ng?",nzContent:"Kh\xf4ng th\u1ec3 ph\u1ee5c h\u1ed3i sau khi x\xf3a",nzOnOk:()=>{this.tableLoading(!0),this.listdetail=this.listdetail.filter(i=>i.stt!==t),this.dataList=[...this.listdetail],this.showBtnConfirm(),this.tableLoading(!1)}})}showBtnConfirm(){this.showConfirm=this.dataList.length>0}allDel(){}addListDetail(){this.ctchuyenngoai&&(this.listdetail=this.listdetail.concat(this.ctchuyenngoai))}mergeDetail(t){let i=0,o=this.listdetail.length;if(0==o)i=1;else{let l=this.listdetail[o-1].stt;l&&l>0&&(i=l+1)}return this.ctchuyenngoai=t,this.ctchuyenngoai.stt=i,this.ctchuyenngoai}mergeUpdateList(t){for(let i of this.listdetail)i.stt==t.stt&&(i.thongtindonhang=t.thongtindonhang,i.soluong=t.soluong,i.donvitinh=t.donvitinh,i.diadiembochang=t.diadiembochang,i.ghichu=t.ghichu,i.idkhachhang=t.idkhachhang,i.htttkhachhang=t.htttkhachhang,i.htttxengoai=t.htttxengoai,i.sdtnguoinhan=t.sdtnguoinhan,i.tennguoinhan=t.tennguoinhan,i.diachinguoinhan=t.diachinguoinhan,i.tiencuoc=t.tiencuoc,i.status02=t.status02,i.tiencuocxengoai=t.tiencuocxengoai)}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"STT",field:"stt",width:80},{title:"Th\xf4ng tin \u0111\u01a1n h\xe0ng",field:"thongtindonhang",width:280,tdTemplate:this.thongtindonhangTpl},{title:"\u0110\u1ecba \u0111i\u1ec3m b\u1ed1c h\xe0ng",width:280,field:"diadiembochang",tdTemplate:this.diadiembochangTpl},{title:"Ti\u1ec1n c\u01b0\u1edbc",width:120,field:"tiencuoc",tdTemplate:this.tiencuocTpl},{title:"Ti\u1ec1n thu\xea xe ngo\xe0i",width:250,field:"tiencuocxengoai",tdTemplate:this.tiencuocxengoaiTpl},{title:"HTTT xe ngo\xe0i",width:200,field:"htttxengoai",tdTemplate:this.htttxengoaiTpl},{title:"HTTT kh\xe1ch h\xe0ng",width:200,field:"htttkhachhang",tdTemplate:this.htttkhachhangTpl},{title:"T\xean ng\u01b0\u1eddi nh\u1eadn",width:150,field:"tennguoinhan",tdTemplate:this.tennguoinhanTpl},{title:"SDT ng\u01b0\u1eddi nh\u1eadn",width:150,field:"sdtnguoinhan",tdTemplate:this.sdtnguoinhanTpl},{title:"\u0110ia ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn",width:230,field:"diachinguoinhan",tdTemplate:this.diachinguoinhanTpl},{title:"Ghi ch\xfa",width:350,field:"ghichu",tdTemplate:this.ghichuTpl},{title:"H\xe0nh \u0111\u1ed9ng",tdTemplate:this.operationTpl,width:160,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(D.Q),n.Y36(d.F0),n.Y36(n.sBO),n.Y36(T.uU),n.Y36(F.p),n.Y36(J.L),n.Y36(Q.dD),n.Y36(Y),n.Y36(Z.Sf),n.Y36(G.u),n.Y36(R.h),n.Y36(V.d),n.Y36(P.C),n.Y36(h.qu),n.Y36(K.J),n.Y36(j))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-spch00251"]],viewQuery:function(t,i){if(1&t&&(n.Gf(rn,7),n.Gf(cn,7),n.Gf(dn,7),n.Gf(pn,7),n.Gf(gn,7),n.Gf(mn,7),n.Gf(zn,7),n.Gf(fn,7),n.Gf(_n,7),n.Gf(Tn,7),n.Gf(Sn,7)),2&t){let o;n.iGM(o=n.CRH())&&(i.operationTpl=o.first),n.iGM(o=n.CRH())&&(i.tiencuocTpl=o.first),n.iGM(o=n.CRH())&&(i.tiencuocxengoaiTpl=o.first),n.iGM(o=n.CRH())&&(i.thongtindonhangTpl=o.first),n.iGM(o=n.CRH())&&(i.diadiembochangTpl=o.first),n.iGM(o=n.CRH())&&(i.ghichuTpl=o.first),n.iGM(o=n.CRH())&&(i.htttkhachhangTpl=o.first),n.iGM(o=n.CRH())&&(i.htttxengoaiTpl=o.first),n.iGM(o=n.CRH())&&(i.sdtnguoinhanTpl=o.first),n.iGM(o=n.CRH())&&(i.tennguoinhanTpl=o.first),n.iGM(o=n.CRH())&&(i.diachinguoinhanTpl=o.first)}},features:[n.qOj],decls:105,vars:222,consts:[[3,"backTpl","backUrl","extraTpl","pageHeaderInfo"],["huongdanTpl",""],["backTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzRequired","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-input","","name","id","formControlName","id","placeholder","M\xe3 chuy\u1ebfn ngo\xe0i","readonly","",3,"disabled"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzErrorTip"],["name","nguonxe","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select","formControlName","nguonxe",3,"ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-input","","name","sdtnguonxe","id","sdtnguonxe","formControlName","sdtnguonxe","placeholder","","readonly","",3,"disabled"],["name","ngaynhap","formControlName","ngaynhap",3,"nzFormat","nzPlaceHolder"],["name","ngayvanchuyen","formControlName","ngayvanchuyen",3,"nzFormat","nzPlaceHolder"],["name","ngaydukiengiaohang","formControlName","ngaydukiengiaohang",3,"nzFormat","nzPlaceHolder"],["name","biensoxe","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select","formControlName","biensoxe"],["name","tentaixe","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select","formControlName","tentaixe",3,"ngModelChange"],["nz-input","","name","sodienthoai","formControlName","sodienthoai","placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i t\xe0i x\u1ebf"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],["nz-input","","name","ghichu","formControlName","ghichu","placeholder","Ghi ch\xfa",3,"nzAutosize"],["combineTpl",""],[3,"tableTitle","btnTpl","btnConfirm","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["operationTpl",""],["tiencuocTpl",""],["tiencuocxengoaiTpl",""],["thongtindonhangTpl",""],["diadiembochangTpl",""],["ghichuTpl",""],["htttkhachhangTpl",""],["htttxengoaiTpl",""],["sdtnguoinhanTpl",""],["tennguoinhanTpl",""],["diachinguoinhanTpl",""],["tableBtns",""],["tableConfirm",""],["nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","star","nzTheme","outline"],[4,"ngIf"],["nz-icon","","nzType","arrow-left","nzTheme","outline"],[3,"nzLabel","nzValue"],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"disabled","click"],["nz-button","","nzType","primary","class","m-r-8",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","default",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"disabled","click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","default",3,"disabled","click"],["nz-icon","","nzType","delete"],["nz-icon","","nzType","caret-right"]],template:function(t,i){if(1&t&&(n._UZ(0,"app-page-header",0),n.YNc(1,bn,3,1,"ng-template",null,1,n.W1O),n.YNc(3,Cn,1,1,"ng-template",null,2,n.W1O),n.TgZ(5,"div",3)(6,"nz-card",4)(7,"form",5),n.NdJ("ngSubmit",function(){return i.submitForm()}),n.TgZ(8,"div",6)(9,"div",7)(10,"nz-form-item")(11,"nz-form-label",8),n._uU(12,"M\xe3 chuy\u1ebfn ngo\xe0i"),n.qZA(),n.TgZ(13,"nz-form-control",9),n._UZ(14,"input",10),n.qZA()()(),n.TgZ(15,"div",7)(16,"nz-form-item")(17,"nz-form-label",8),n._uU(18,"Ngu\u1ed3n xe"),n.qZA(),n.TgZ(19,"nz-form-control",11)(20,"nz-select",12),n.NdJ("ngModelChange",function(l){return i.fnChangeNguonXe(l)}),n.YNc(21,Xn,1,3,"nz-option",13),n.qZA()()()(),n.TgZ(22,"div",7)(23,"nz-form-item")(24,"nz-form-label",8),n._uU(25,"SDT ngu\u1ed3n xe"),n.qZA(),n.TgZ(26,"nz-form-control",9),n._UZ(27,"input",14),n.qZA()()()(),n.TgZ(28,"div",6)(29,"div",7)(30,"nz-form-item")(31,"nz-form-label",8),n._uU(32,"Ng\xe0y nh\u1eadp"),n.qZA(),n.TgZ(33,"nz-form-control",11),n._UZ(34,"nz-date-picker",15),n.qZA()()(),n.TgZ(35,"div",7)(36,"nz-form-item")(37,"nz-form-label",8),n._uU(38,"Ng\xe0y v\u1eadn chuy\u1ec3n"),n.qZA(),n.TgZ(39,"nz-form-control",11),n._UZ(40,"nz-date-picker",16),n.qZA()()(),n.TgZ(41,"div",7)(42,"nz-form-item")(43,"nz-form-label",8),n._uU(44,"Ng\xe0y d\u1ef1 ki\u1ebfn GH"),n.qZA(),n.TgZ(45,"nz-form-control",11),n._UZ(46,"nz-date-picker",17),n.qZA()()()(),n.TgZ(47,"div",6)(48,"div",7)(49,"nz-form-item")(50,"nz-form-label",8),n._uU(51,"Bi\u1ec3n s\u1ed1 xe"),n.qZA(),n.TgZ(52,"nz-form-control",11)(53,"nz-select",18),n.YNc(54,An,1,2,"nz-option",13),n.qZA()()()(),n.TgZ(55,"div",7)(56,"nz-form-item")(57,"nz-form-label",8),n._uU(58,"T\xean t\xe0i x\u1ebf"),n.qZA(),n.TgZ(59,"nz-form-control",11)(60,"nz-select",19),n.NdJ("ngModelChange",function(l){return i.fnChangeTaiXe(l)}),n.YNc(61,yn,1,2,"nz-option",13),n.qZA()()()(),n.TgZ(62,"div",7)(63,"nz-form-item")(64,"nz-form-label",8),n._uU(65,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),n.qZA(),n.TgZ(66,"nz-form-control",11),n._UZ(67,"input",20),n.qZA()()()(),n.TgZ(68,"div",6)(69,"div",7)(70,"nz-form-item")(71,"nz-form-label",21),n._uU(72,"Ghi ch\xfa"),n.qZA(),n.TgZ(73,"nz-form-control",11),n._UZ(74,"textarea",22),n.qZA()()()()(),n.YNc(75,En,2,2,"ng-template",null,23,n.W1O),n.qZA(),n.TgZ(77,"app-card-table-wrap",24),n.NdJ("reload",function(){return i.reloadTable()}),n.TgZ(78,"app-ant-table",25),n.NdJ("selectedChange",function(l){return i.selectedChecked(l)})("changePageSize",function(l){return i.changePageSize(l)})("changePageNum",function(l){return i.getDataList(l)}),n.qZA(),n.YNc(79,Jn,2,2,"ng-template",null,26,n.W1O),n.YNc(81,Qn,3,5,"ng-template",null,27,n.W1O),n.YNc(83,Ln,3,5,"ng-template",null,28,n.W1O),n.YNc(85,Mn,2,1,"ng-template",null,29,n.W1O),n.YNc(87,Nn,2,1,"ng-template",null,30,n.W1O),n.YNc(89,Un,2,1,"ng-template",null,31,n.W1O),n.YNc(91,wn,2,1,"ng-template",null,32,n.W1O),n.YNc(93,qn,2,1,"ng-template",null,33,n.W1O),n.YNc(95,kn,2,1,"ng-template",null,34,n.W1O),n.YNc(97,Bn,2,1,"ng-template",null,35,n.W1O),n.YNc(99,On,2,1,"ng-template",null,36,n.W1O),n.qZA(),n.YNc(101,Gn,3,3,"ng-template",null,37,n.W1O),n.YNc(103,Wn,2,2,"ng-template",null,38,n.W1O),n.qZA()),2&t){const o=n.MAs(2),l=n.MAs(4),r=n.MAs(76),m=n.MAs(102),S=n.MAs(104);n.Q6J("backTpl",l)("backUrl","/default/chuyen/spch00252")("extraTpl",o)("pageHeaderInfo",i.pageHeaderInfo),n.xp6(6),n.Q6J("nzBodyStyle",n.DdM(216,jn)),n.xp6(1),n.Q6J("formGroup",i.headerForm),n.xp6(1),n.Q6J("nzGutter",n.DdM(217,X)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(2),n.Q6J("ngForOf",i.listnguonxe),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("nzGutter",n.DdM(218,X)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(1),n.Q6J("nzFormat",i.dateFormat)("nzPlaceHolder",i.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(1),n.Q6J("nzFormat",i.dateFormat)("nzPlaceHolder",i.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(1),n.Q6J("nzFormat",i.dateFormat)("nzPlaceHolder",i.dateFormat),n.xp6(1),n.Q6J("nzGutter",n.DdM(219,X)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(2),n.Q6J("ngForOf",i.listbsxe),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(2),n.Q6J("ngForOf",i.listtaixe),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzGutter",n.DdM(220,X)),n.xp6(1),n.Q6J("nzXXl",24)("nzXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",3)("nzXl",3)("nzLg",3)("nzMd",6)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",r),n.xp6(1),n.Q6J("nzAutosize",n.DdM(221,$n)),n.xp6(3),n.Q6J("tableTitle","Chi ti\u1ebft \u0111\u01a1n h\xe0ng")("btnTpl",m)("btnConfirm",S),n.xp6(1),n.Q6J("checkedCashArrayFromComment",i.checkedCashArray)("tableConfig",i.tableConfig)("tableData",i.dataList)}},dependencies:[T.sg,T.O5,h._Y,h.Fj,h.JJ,h.JL,h.sg,h.u,$.q,nn.q,tn.x,en.p,on.Ls,b.t3,b.SK,g.Lr,g.Nx,g.iK,g.Fd,an.ix,sn.w,ln.dQ,x.Zp,x.rh,C.Ip,C.Vq,hn.bd,un.uw,T.H9]}),e})(),data:{title:"Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i",key:"spch00251"}}];let tt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.Bz.forChild(nt),d.Bz]}),e})();var E=s(5316);let et=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[E.m]}),e})();var it=s(30804),ot=s(42172);let at=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[tt,E.m,et,it.A,ot.b]}),e})()},30804:(y,z,s)=>{s.d(z,{A:()=>p});var d=s(5316),f=s(13458),_=s(94650);let p=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=_.oAB({type:c}),c.\u0275inj=_.cJS({imports:[d.m,f.e]}),c})()}}]);