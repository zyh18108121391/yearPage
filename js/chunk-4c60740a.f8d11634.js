(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c60740a"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"303b":function(t,e,a){"use strict";a("ffb9")},"30d1":function(t,e,a){"use strict";a("4f68")},"4f68":function(t,e,a){},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"841c":function(t,e,a){"use strict";var s=a("d784"),n=a("825a"),i=a("1d80"),l=a("129f"),o=a("14c3");s("search",1,(function(t,e,a){return[function(e){var a=i(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var i=n(t),r=String(this),c=i.lastIndex;l(c,0)||(i.lastIndex=0);var u=o(i,r);return l(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]}))},8866:function(t,e,a){},"8b3f":function(t,e,a){},"93e2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[t.label?a("div",{staticClass:"clearfix"},[a("span",[t._v(t._s(t.label))])]):t._e(),t._t("header")]},proxy:!0}],null,!0)},[t._t("default")],2)},n=[],i={name:"BoxTitle",props:{title:{type:String,default:""}},data:function(){return{}},computed:{pageTitle:function(){return this.$route.meta?this.$route.meta.title:""},label:function(){return this.title?this.title:this.pageTitle}}},l=i,o=(a("303b"),a("2877")),r=Object(o["a"])(l,s,n,!1,null,"cb4b73a2",null);e["a"]=r.exports},9946:function(t,e,a){"use strict";a("8b3f")},9970:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"month-div"},[a("span",[t._v("月份： ")]),a("el-date-picker",{attrs:{type:"month",format:"yyyy年M月","picker-options":t.pickerBeginDateBefore,placeholder:"选择月"},on:{change:t.change},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1),a("keep-alive",[a("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"电费暂估表",name:"0"}},[a("Assess",{ref:"0"})],1),a("el-tab-pane",{attrs:{label:"异常数据维护",name:"1"}},[a("EditDataTable",{ref:"1"})],1)],1)],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"print-btn"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.freezeStatus,expression:"freezeStatus"}],attrs:{type:"primary"},on:{click:t.freeze}},[t._v("冻结")]),a("el-button",{directives:[{name:"print",rawName:"v-print",value:"#table-content",expression:"'#table-content'"}],attrs:{type:"primary"}},[t._v("打 印")]),a("el-button",{attrs:{type:"default"},on:{click:t.html2Excel}},[t._v("导 出")])],1),a("div",{ref:"dom",attrs:{id:"table-content"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"scorll"},[a("table",{staticClass:"table"},[a("thead",[t._m(0),t._m(1),a("tr",{staticClass:"noBorder"},[a("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"5"}},[t._v("制表单位：西藏先锋绿能环保科技有限公司")]),a("td",{attrs:{colspan:"5"}},[t._v(t._s(t.date))]),a("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"6"}},[t._v("金额单位：元")])])]),a("tbody",[t._m(2),t._l(t.list,(function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.resourceName))]),a("td",[t._v(t._s(e.customer))]),a("td",[t._v(t._s(e.kcShortName))]),a("td",[t._v(t._s(e.wkTy))]),a("td",[t._v(t._s(e.unit))]),a("td",[t._v(t._s(e.amount))]),a("td",[t._v(t._s(e.provisionalPrice))]),a("td",[t._v(t._s(e.klMgtCharge))]),a("td",[t._v(t._s(e.klPrestore))]),a("td",[t._v(t._s(e.taxAmount))]),a("td",[t._v(t._s(e.taxRate)+"%")]),a("td",[t._v(t._s(e.noTaxAmount))]),a("td",[t._v(t._s(e.reason))]),a("td",[t._v(t._s(e.provisionalMonth))]),a("td",[t._v(t._s(e.chonghuiMonth))])])})),a("tr",[a("td",{attrs:{colspan:"5"}},[t._v("合计")]),a("td",[t._v("度")]),a("td",[t._v(t._s(t.sumDl))]),a("td"),a("td"),a("td"),a("td",[t._v(t._s(t.sumPrice))]),a("td"),a("td",[t._v(t._s(t.sumPriceNoRate))]),a("td"),a("td"),a("td")]),a("tr",{staticClass:"noBorder"},[a("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"3"}},[t._v("业务部门负责人：")]),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"3"}},[t._v("打印人："+t._s(t.personName))])]),a("tr",{staticClass:"noBorder"},[a("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"16"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!!t.des,expression:"!!des"}],staticClass:"desc-lf"},[t._v("备注：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.des,expression:"des"}],staticClass:"desc-input",attrs:{type:"text",placeholder:"输入备注"},domProps:{value:t.des},on:{input:function(e){e.target.composing||(t.des=e.target.value)}}}),a("span",{staticClass:"desc-print"},[t._v(t._s(t.des))])])])],2)])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"noBorder head"},[a("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"16"}},[t._v("西藏先锋绿能环保科技有限公司")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"noBorder head"},[a("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"16"}},[t._v("电费暂估表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("序号")]),a("th",[t._v("物资名称")]),a("th",[t._v("客户")]),a("th",[t._v("业主单位")]),a("th",[t._v("用电性质")]),a("th",[t._v("计量单位")]),a("th",[t._v("数量")]),a("th",[t._v("预估单价")]),a("th",[t._v("昆仑管理费")]),a("th",[t._v("昆仑预存电量45%")]),a("th",[t._v("含税金额")]),a("th",[t._v("税率")]),a("th",[t._v("不含税金额")]),a("th",[t._v("原因")]),a("th",[t._v("预估入账月份")]),a("th",[t._v("冲回月份")])])}],o=(a("d81d"),a("5530")),r=a("2f62"),c=a("93e2"),u=a("ed08"),d=a("4bda"),m=a("3de1"),h=a("9302"),f=a.n(h),p={name:"useEqManage",components:{BoxTitle:c["a"]},data:function(){return{month:"",list:[],sumDl:0,sumPrice:0,sumPriceNoRate:0,showInput:!1,des:"",freezeStatus:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(r["c"])({personName:function(t){return t.user.nickName}})),{},{date:function(){return Object(u["l"])(this.month,"{y}年{m}月27日")}}),mounted:function(){var t=document.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id","tableStyle"),t.innerHTML="\n            \x3c!--\n                @page {\n                    margin:1.54cm 2cm;               \n                }\n            --\x3e\n        ";var e=this.$refs.dom;e.appendChild(t),e.attachEvent?e.attachEvent("onmousewheel",this.mouseScroll.bind(e)):e.addEventListener&&(e.addEventListener("DOMMouseScroll",this.mouseScroll.bind(e),!1),e.onmousewheel=this.mouseScroll.bind(e))},methods:{parseTime:u["l"],init:function(t){this.month=t,this._getData()},_getData:function(){var t=this;Object(d["mb"])({month:this.month}).then((function(){return Object(d["ob"])({month:t.month,_loading:!1})})).then((function(e){t.list=e.rows?e.rows:[],t.sumDl=0,t.sumPrice=0,t.sumPriceNoRate=0,t.list.map((function(e){t.sumDl+=e.amount,t.sumPrice+=e.taxAmount,t.sumPriceNoRate+=e.noTaxAmount,e.amount=Object(u["d"])(e.amount,2),e.taxAmount=Object(u["d"])(e.taxAmount),e.noTaxAmount=Object(u["d"])(e.noTaxAmount)})),t.list[0]&&(t.freezeStatus=!m["a"].isYes(t.list[0].freeze)),t.sumDl=Object(u["d"])(t.sumDl,2),t.sumPrice=Object(u["d"])(t.sumPrice),t.sumPriceNoRate=Object(u["d"])(t.sumPriceNoRate)}))},freeze:function(){var t=this;this.$confirm("冻结后表格数据将存入历史库且不可修改，是否确认操作？","冻结数据",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(d["lb"])({month:t.month}).then((function(e){t._getData()}))})).catch((function(){}))},html2Excel:function(){new f.a("#table-content table").export("先锋绿能电费暂估表-".concat(this.parseTime(this.month,"{y}年{m}月")))},reloadTable:function(){this._getData()},mouseScroll:function(t){var e=t.wheelDelta||t.detail,a=-1,s=1,n=0;n=e>0?100*a:100*s,t.preventDefault(),this.$refs.dom.querySelector(".scorll").scrollLeft=this.$refs.dom.querySelector(".scorll").scrollLeft+n}}},b=p,v=(a("30d1"),a("2877")),_=Object(v["a"])(b,i,l,!1,null,"5971679a",null),g=_.exports,w=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"item"},[s("InfoBox",{attrs:{items:e.infoIems,title:"异常账单统计"}})],1),s("el-table",{directives:[{name:"table-scroll",rawName:"v-table-scroll"}],attrs:{"row-key":"index",data:e.tableData,"header-cell-style":{background:"#E6EAFE",color:"#606266"}}},[s("el-table-column",{attrs:{label:"序号",prop:"index",width:"90",fixed:"left"}}),s("el-table-column",{attrs:{label:"所属平台",prop:"kpName",width:"200"}}),s("el-table-column",{attrs:{label:"用电性质",prop:"workType",width:"90"}}),s("el-table-column",{attrs:{label:"账单月份",prop:"arSnum",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(e.changeMonth(t.row["month"])))])]}}])}),s("el-table-column",{attrs:{label:"起度",prop:"arSnum",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s("3"!=t.row["type"]||t.row["isChild"]?t.row["arSnum"]:""))])]}}])}),s("el-table-column",{attrs:{label:"止度",prop:"arEnum",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s("3"!=t.row["type"]||t.row["isChild"]?t.row["arEnum"]:""))])]}}])}),s("el-table-column",{attrs:{label:"倍率",prop:"blRate",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s("3"!=t.row["type"]||t.row["isChild"]?t.row["blRate"]:""))])]}}])}),s("el-table-column",{attrs:{label:"电量（kW·h）",prop:"useEq",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s("3"!=t.row["type"]||t.row["isChild"]?t.row["useEq"]:""))])]}}])}),s("el-table-column",{attrs:{label:"分摊损耗比例",prop:"loseRate",width:"120"}}),s("el-table-column",{attrs:{label:"损耗电量",prop:"loseEq",width:"100"}}),s("el-table-column",{attrs:{label:"补录电量",prop:"extraEq",width:"100"}}),s("el-table-column",{attrs:{label:"总电量（kW·h）",prop:"allEq",width:"130"}}),s("el-table-column",{attrs:{label:"所属公司",prop:"kcName","show-overflow-tooltip":"",width:"200"}}),s("el-table-column",{attrs:{label:"所属路线",prop:"glName","show-overflow-tooltip":"",width:"200"}}),s("el-table-column",{attrs:{label:"计量点名称",prop:"jpName","show-overflow-tooltip":"",width:"250"}}),s("el-table-column",{attrs:{label:"用能单位",prop:"sdName","show-overflow-tooltip":"",width:"240"}}),s("el-table-column",{attrs:{label:"结算起止码时间",prop:"ts",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row["arSt"]?s("span",[e._v(" "+e._s(e.changeTime(t.row["arSt"]))+"-"+e._s(e.changeTime(t.row["arEt"]))+" ")]):e._e()]}}])}),s("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right","class-name":"cusTable",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"table-btns"},[s("span",{staticClass:"cus-btn",attrs:{type:"text",size:"small"},on:{click:function(a){return e.handClick("预估电量",t.row)}}},[e._v("预估电量")])])]}}])})],1),s("div",{staticClass:"page pagination-box"},[s("el-pagination",{attrs:{"current-page":e.page.pageNum,"page-sizes":[10,20,50,100],"page-size":e.page.pageSize,layout:"prev, pager, next, jumper,total, sizes",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),s("el-dialog",{attrs:{title:"添加预估电量","custom-class":"cusDialog",visible:this.dialogShow,width:"4.6rem","before-close":function(){t.dialogShow=!1}},on:{"update:visible":function(t){return e.$set(this,"dialogShow",t)}}},[s("el-form",{ref:"form",staticClass:"form",attrs:{model:e.formData,rules:e.rule}},[s("div",{staticClass:"li"},[s("div",{staticClass:"item"},[s("el-form-item",[s("div",{staticClass:"label"},[e._v("公司名称：")]),s("div",{staticClass:"rt"},[s("div",{staticClass:"box"},[e._v(e._s(e.detailData.kcName))])])])],1)]),s("div",{staticClass:"li"},[s("div",{staticClass:"item"},[s("el-form-item",[s("div",{staticClass:"label"},[e._v("平台名称：")]),s("div",{staticClass:"rt"},[s("div",{staticClass:"box"},[e._v(e._s(e.detailData.kpName))])])])],1)]),s("div",{staticClass:"li"},[s("div",{staticClass:"item"},[s("el-form-item",[s("div",{staticClass:"label"},[e._v("用电单位：")]),s("div",{staticClass:"rt"},[s("div",{staticClass:"box"},[e._v(e._s(e.detailData.sdName))])])])],1)]),s("div",{staticClass:"li"},[s("div",{staticClass:"item"},[s("el-form-item",{attrs:{prop:"estimateEq"}},[s("div",{staticClass:"label"},[s("span",{staticClass:"important"},[e._v("*")]),e._v("预估电量：")]),s("div",{staticClass:"rt"},[s("div",{staticClass:"box"},[s("el-input",{attrs:{type:"number",min:"0",placeholder:"请输入预估电量"},model:{value:e.formData.estimateEq,callback:function(t){e.$set(e.formData,"estimateEq",t)},expression:"formData.estimateEq"}},[s("template",{slot:"append"},[e._v("kW·h")])],2)],1)])])],1)])]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submit}},[e._v("确 定")]),s("el-button",{on:{click:function(){t.dialogShow=!1}}},[e._v("关 闭")])],1)],1)],1)},x=[],C=(a("4160"),a("a9e3"),a("159b"),a("fb6e")),y=a("0f47"),D={extends:C["a"],name:"editDataTable",components:{InfoBox:y["a"]},data:function(){return{infoIems:[],loading:!1,dialogShow:!1,formObj:{},options:{form:{labelPosition:"left",labelWidth:"90px"},submitBtn:!1,resetBtn:!1},rule:{estimateEq:[{validator:function(t,e,a){""===e?a(new Error("预估电量不能为空")):e<=0?a(new Error("请输入大于0的数字")):e!=Number(e)||"0."===e?a(new Error("请输入合法数字")):a()},trigger:"blur"}]},detailData:{},formData:{estimateEq:0},month:""}},methods:{init:function(t){this.month=t,this._getData()},handClick:function(t,e){"预估电量"===t&&(this.detailData=e,this.dialogShow=!0,this.formData.estimateEq=this.detailData.allEq?this.detailData.allEq:0)},changeMonth:function(t){return Object(u["l"])(new Date(t),"{y}年{m}月")},changeTime:function(t){return Object(u["l"])(new Date(t),"{y}/{m}/{d} {h}:{i}")},submit:function(){var t=this;Object(d["Zb"])({billId:this.detailData.id,estimateEq:this.formData.estimateEq}).then((function(e){t.dialogShow=!1,t.$message.success("操作成功"),t.detailData={},t.formData.estimateEq=0,t.$refs.form.clearValidate(),t.reloadTable()}))},_getData:function(){var t=this;Object(d["nb"])(Object(o["a"])(Object(o["a"])({},this.page),{},{month:this.month})).then((function(e){var a=e.rows?e.rows:[],s=0;a.forEach((function(e,a){e.index=(t.page.pageNum-1)*t.page.pageSize+a+1,4==e.type&&(s++,e.index+=" 【国】"),e.subBills&&e.subBills.length&&e.subBills.forEach((function(t,a){t.index=e.index+"."+(a+1),t.isChild=!0}))})),t.tableData=a,t.total=e.total,t.infoIems=[{label:"当前账单总数",num:t.total},{label:"国网账单数",num:s},{label:"非国网账数",num:t.total-s}]})).catch((function(e){t.tableData=[],t.total=0}))}}},S=D,k=(a("9946"),Object(v["a"])(S,w,x,!1,null,"cb7bda5e",null)),E=k.exports,N={name:"index",components:{Assess:g,EditDataTable:E},data:function(){return{activeName:"0",month:Object(u["j"])(26),pickerBeginDateBefore:{disabledDate:function(t){return t.getTime()>=Date.now()}}}},mounted:function(){this.init()},methods:{change:function(){this.init()},init:function(){var t=Object(u["l"])(this.month,"{y}-{m}");this.$refs[0].init(t),this.$refs[1].init(t)},tabClick:function(t){var e=t.index;this.$refs[e]&&this.$refs[e].reloadTable()}}},j=N,O=(a("a9e8"),Object(v["a"])(j,s,n,!1,null,"6a37aa06",null));e["default"]=O.exports},a9e8:function(t,e,a){"use strict";a("8866")},fb6e:function(t,e,a){"use strict";a("ac1f"),a("841c");var s,n,i=a("ed08"),l={name:"TableCommon",data:function(){return{dialogShow:!1,loading:!1,tableData:[],total:0,page:{pageNum:1,pageSize:10},search:{}}},mounted:function(){this._getData&&(this._getData=Object(i["b"])(this._getData.bind(this),100),this._getData(this.page))},methods:{handleClose:function(){this.dialogShow=!1},handleSizeChange:function(t){this.page.pageSize!==t&&(this.page.pageSize=t,this._getData())},handleCurrentChange:function(t){this.page.pageNum!==t&&(this.page.pageNum=t,this._getData())},reloadTable:function(){this._getData()},searchHand:function(t){this.page.pageNum=1,this.search=t,this._getData()}},activated:function(){this._getData()},deactivated:function(){this.tableData=[]}},o=l,r=a("2877"),c=Object(r["a"])(o,s,n,!1,null,null,null);e["a"]=c.exports},ffb9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4c60740a.f8d11634.js.map