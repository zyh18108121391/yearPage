(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74050926"],{"303b":function(t,e,n){"use strict";n("ffb9")},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"633e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoxTitle",[n("div",{staticClass:"month-div"},[n("span",[t._v("月份： ")]),n("el-date-picker",{attrs:{type:"month",format:"yyyy年M月","picker-options":t.pickerBeginDateBefore,placeholder:"选择月"},on:{change:t.change},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1),n("div",{staticClass:"item"},[n("InfoBox",{attrs:{items:t.infoIems,title:t.monthLabel+"月账单确认总览"}})],1),n("div",{staticClass:"box"},[n("div",{staticClass:"print-btn"},[n("el-button",{directives:[{name:"print",rawName:"v-print",value:"#table-content",expression:"'#table-content'"}],attrs:{type:"primary"}},[t._v("打 印")]),n("el-button",{attrs:{type:"default"},on:{click:t.html2Excel}},[t._v("导 出")])],1),n("div",{ref:"dom",attrs:{id:"table-content"}},[n("div",{staticClass:"item"},[n("div",{staticClass:"scorll"},[n("table",{staticClass:"table"},[n("tr",{staticClass:"noBorder head"},[n("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"9"}},[t._v("先锋绿能与昆仑公司电力加工费结算表")])]),n("tr",{staticClass:"noBorder"},[n("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"9"}},[t._v("金额单位：元")])]),n("tr",[n("th",[t._v("序号")]),n("th",[t._v("业主单位")]),n("th",[t._v("区域")]),n("th",[t._v("结算月份")]),n("th",[t._v("结算时间")]),n("th",[t._v("销售金额")]),n("th",[t._v("预存电费（45%）")]),n("th",[t._v("结算费用（0.02元/度）")]),n("th",[t._v("先锋结算金额")])]),t._l(t.list,(function(e,a){return t._l(e.list,(function(a,s){return n("tr",[n("td",[t._v(t._s(a.xh))]),n("td",[t._v(t._s(a.shortName))]),0==s?n("td",{attrs:{rowspan:e.list.length}},[t._v(t._s(a.area))]):t._e(),n("td",[t._v(t._s(t.parseTime(a.endTime,"{y}年{m}")))]),n("td",[t._v(t._s(t.parseTime(a.startTime,"{y}/{m}/{d}"))+"-"+t._s(t.parseTime(a.endTime,"{y}/{m}/{d}"))+" ")]),n("td",[t._v(t._s(a.amount))]),n("td",[t._v(t._s(a.prestore))]),n("td",[t._v(t._s(a.klFinalAmo))]),n("td",[t._v(t._s(a.xfFinalAmo))])])}))})),n("tr",[n("td",{attrs:{colspan:"5"}},[t._v(t._s(t.parseTime(t.month,"{y}年{m}"))+"合计")]),n("td",[t._v(t._s(t.sumAmount))]),n("td",[t._v(t._s(t.sumPrestore))]),n("td",[t._v(t._s(t.sumKLAmount))]),n("td",[t._v(t._s(t.sumXfAmount))])])],2)])])])])])},s=[],o=(n("4160"),n("d81d"),n("b64b"),n("159b"),n("5530")),i=n("2f62"),r=n("93e2"),c=n("0f47"),u=n("ed08"),l=n("4bda"),m=(n("3de1"),n("9302")),d=n.n(m),f={name:"useEqManage",components:{BoxTitle:r["a"],InfoBox:c["a"]},data:function(){return{infoIems:[],month:Object(u["j"])(26),list:[],sumAmount:0,sumPrestore:0,sumKLAmount:0,sumXfAmount:0,pickerBeginDateBefore:{disabledDate:function(t){return t.getTime()>=Date.now()}}}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])({personName:function(t){return t.user.nickName}})),{},{date:function(){return Object(u["l"])(this.month,"{y}年{m}月27日")},monthLabel:function(){return parseInt(Object(u["l"])(this.month,"{m}"))}}),mounted:function(){var t=document.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id","tableStyle"),t.innerHTML="\n            \x3c!--\n                @page {\n                    margin:1.54cm 2cm;               \n                }\n            --\x3e\n        ",this.$refs.dom.appendChild(t),this._getData()},methods:{parseTime:u["l"],change:function(){this._getData()},_getData:function(){var t=this;this._getNoConfirm(),Object(l["N"])({month:Object(u["l"])(this.month,"{y}-{m}")}).then((function(e){var n=e.rows?e.rows:[];t.sumAmount=0,t.sumPrestore=0,t.sumKLAmount=0,t.sumXfAmount=0;var a={};n.map((function(e){a[e.area]?a[e.area].push(e):a[e.area]=[e],t.sumAmount+=e.amount,t.sumPrestore+=e.prestore,t.sumKLAmount+=e.klFinalAmo,t.sumXfAmount+=e.xfFinalAmo,e.amount=Object(u["e"])(e.amount+""),e.prestore=Object(u["e"])(e.prestore),e.klFinalAmo=Object(u["e"])(e.klFinalAmo),e.xfFinalAmo=Object(u["e"])(e.xfFinalAmo)})),t.list=[];var s=0;Object.keys(a).forEach((function(e){var n=a[e];n.forEach((function(t){t.xh=++s})),t.list.push({area:e,list:n})})),t.sumAmount=Object(u["d"])(t.sumAmount),t.sumPrestore=Object(u["d"])(t.sumPrestore),t.sumKLAmount=Object(u["d"])(t.sumKLAmount),t.sumXfAmount=Object(u["d"])(t.sumXfAmount)}))},_getNoConfirm:function(){var t=this;Object(l["M"])({month:Object(u["l"])(this.month,"{y}-{m}")}).then((function(e){t.infoIems=[{label:"当前账单总数",num:e.data.countAll},{label:"未确认账单数",num:e.data.count},{label:"已确认账单数",num:e.data.countAll-e.data.count}]}))},html2Excel:function(){new d.a("#table-content table").export("先锋绿能与昆仑公司电力加工费结算表-".concat(this.parseTime(this.month,"{y}年{m}月")))},reloadTable:function(){this._getData()}},activated:function(){this._getData()}},h=f,b=(n("d0e5"),n("2877")),p=Object(b["a"])(h,a,s,!1,null,"7c694f46",null);e["default"]=p.exports},"89c5":function(t,e,n){},"93e2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[t.label?n("div",{staticClass:"clearfix"},[n("span",[t._v(t._s(t.label))])]):t._e(),t._t("header")]},proxy:!0}],null,!0)},[t._t("default")],2)},s=[],o={name:"BoxTitle",props:{title:{type:String,default:""}},data:function(){return{}},computed:{pageTitle:function(){return this.$route.meta?this.$route.meta.title:""},label:function(){return this.title?this.title:this.pageTitle}}},i=o,r=(n("303b"),n("2877")),c=Object(r["a"])(i,a,s,!1,null,"cb4b73a2",null);e["a"]=c.exports},d0e5:function(t,e,n){"use strict";n("89c5")},ffb9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-74050926.4209b016.js.map