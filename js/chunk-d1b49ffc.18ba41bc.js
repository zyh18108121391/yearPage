(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1b49ffc"],{"0808":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BoxTitle",[a("SearchInputs",{on:{downHand:t.downHand,searchHand:t.searchHand}}),a("CusTable",{attrs:{tableData:t.tableData,pageNum:t.page.pageNum,pageSize:t.page.pageSize,total:t.total},on:{btnClick:t.btnClick,handleSizeChange:t.handleSizeChange,handleCurrentChange:t.handleCurrentChange}})],1)},l=[],i=(a("4160"),a("caad"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("841c"),a("159b"),a("ddb0"),a("2b3d"),a("5530")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"over-box"},[t._l(t.items,(function(e){return[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"items"},t._l(e.list,(function(e){return a("div",{staticClass:"item-li",style:t.itemWith},[a("span",{staticClass:"label"},[t._v(t._s(e.label)+"：")]),a("span",{staticClass:"count"},[t._v(t._s(e.num))]),a("span",{staticClass:"label"},[t._v(" "+t._s(e.unt?e.unt:""))])])})),0)]}))],2)},r=[],c={name:"InfBox",props:{data:{type:Object,default:function(){}}},mounted:function(){this.data&&this.init(this.data)},data:function(){return{items:[]}},computed:{itemWith:function(){return{width:"25%"}}},methods:{init:function(t){this.items=[{title:"账单信息",list:[{label:"当前账单总电量",num:t.totalEq,unt:"kW.h"},{label:"当前账单总电费",num:t.totalPrice,unt:"元"}]},{title:"当月电量（kW·h)",list:t.itemsEq},{title:"当月电费（元)",list:t.itemsMo}]},click:function(t){this.$emit("click",t)}},watch:{data:{handler:function(t){t&&this.init(t)},deep:!0,immediate:!0}}},s=c,u=(a("34dc"),a("2877")),d=Object(u["a"])(s,o,r,!1,null,"df59da8a",null),f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cus-table",staticStyle:{width:"100%"}},[a("el-table",{directives:[{name:"table-scroll",rawName:"v-table-scroll"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":{background:"#E6EAFE",color:"#606266"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"70",fixed:"left"}}),a("el-table-column",{attrs:{label:"所属公司",prop:"company","show-overflow-tooltip":"",width:"220"}}),a("el-table-column",{attrs:{label:"合同名称",prop:"contractName","show-overflow-tooltip":"",width:"280"}}),a("el-table-column",{attrs:{label:"合同编号",prop:"contractCode","show-overflow-tooltip":"",width:"250"}}),a("el-table-column",{attrs:{label:"账单月份",prop:"billDate",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.changeMonth(e.row["billDate"])))])]}}])}),a("el-table-column",{attrs:{label:"用电性质",prop:"wkTy",width:"180","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"合同电量（kW·h）",prop:"allEq",width:"150"}}),a("el-table-column",{attrs:{label:"结算起止码时间",prop:"ts",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.changeTime(e.row["timeBegin"]))+"-"+t._s(t.changeTime(e.row["timeEnd"])))])]}}])}),a("el-table-column",{attrs:{label:"合同单价（￥/kW·h）",prop:"contractPrice",width:"180"}}),a("el-table-column",{attrs:{label:"合同总价-含税（万元）",prop:"totalPrice",width:"180"}}),a("el-table-column",{attrs:{label:"先锋总价-含税（万元）",prop:"xfTotalPrice",width:"180"}}),a("el-table-column",{attrs:{label:"结算单",align:"center",fixed:"right","class-name":"cusTable",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"table-btns"},[a("div",{staticClass:"center"},[a("span",{staticClass:"cus-btn",attrs:{type:"text",size:"small"},on:{click:function(a){return t.handClick("下载",e.row)}}},[t._v("下载 ")])])])]}}])}),a("el-table-column",{attrs:{label:"回款状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:t.getStatus(e.row)[1]},[t._v(t._s(t.getStatus(e.row)[0]))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right","class-name":"cusTable",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"table-btns"},[a("div",{staticClass:"center"},[t.isMarketer&&"N"==e.row.klPayConfirm?a("span",{staticClass:"cus-btn",attrs:{type:"text",size:"small"},on:{click:function(a){return t.handClick("klConfirm",e.row)}}},[t._v("回款确认（昆仑） ")]):t._e(),t.isFinance&&"Y"==e.row.klPayConfirm&&"N"==e.row.xfPayConfirm?a("span",{staticClass:"cus-btn",attrs:{type:"text",size:"small"},on:{click:function(a){return t.handClick("xfConfirm",e.row)}}},[t._v("回款确认（先锋） ")]):t._e()])])]}}])})],1),a("div",{staticClass:"page pagination-box"},[a("el-pagination",{attrs:{"current-page":t.pageNum,"page-sizes":[10,20,50,100],"page-size":t.pageSize,layout:"prev, pager, next, jumper,total, sizes",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},b=[],h=(a("ed08"),a("2f62")),m=a("01ea"),v=a("8947"),g={extends:v["a"],name:"table1",data:function(){return{statusArr:["未确认","已确认"]}},computed:Object(i["a"])({},Object(h["c"])({isMarketer:function(t){return t.permission.roles.includes(m["a"].marketer)},isFinance:function(t){return t.permission.roles.includes(m["a"].finance)}})),mounted:function(){},methods:{getStatus:function(t){return"C"==t.status?["回款完毕","green"]:"N"==t.klPayConfirm?["待市场确认","warning"]:"N"==t.xfPayConfirm?["待财务确认","blue"]:void 0}}},C=g,y=(a("aae7"),Object(u["a"])(C,p,b,!1,null,"02d64a64",null)),w=y.exports,j=a("d91b"),k=a("93e2"),_=a("4bda"),O=a("3de1"),x=a("fb6e"),S={extends:x["a"],name:"CostCollection",components:{CusTable:w,SearchInputs:j["a"],BoxTitle:k["a"],InfoBoxBill:f},data:function(){return{data:{totalPrice:0,totalEq:0,itemsEq:[],itemsMo:[]}}},computed:Object(i["a"])({},Object(h["c"])({isMarketer:function(t){return t.permission.roles.includes(m["a"].marketer)},userId:function(t){return t.user.userId}})),mounted:function(){this.getCalc()},methods:{_getData:function(){var t=this;Object(_["V"])(Object(i["a"])(Object(i["a"])({},this.search),this.page)).then((function(e){var a=e.data.bills.rows?e.data.bills.rows:[];t.tableData=a,t.total=e.data.bills.total,t.data.totalPrice=e.data.totalPrice,t.data.totalEq=e.data.totalEq}))},getCalc:function(){var t=this;Object(_["fb"])().then((function(e){e.data&&e.data.forEach((function(e){t.data.itemsEq.push({label:e.company,num:e.totalEq}),t.data.itemsMo.push({label:e.company,num:e.totalPrice})}))}))},downHand:function(){Object(_["f"])(Object(i["a"])({},this.search)).then(O["a"].down)},btnClick:function(t,e){var a=this;"下载"==t?Object(_["a"])(e.id).then((function(t){var e=new Blob([t]),a=URL.createObjectURL(e),n=document.createElement("a");n.setAttribute("download","收缴资料.zip"),n.setAttribute("href",a),n.click()})):"klConfirm"==t?this.$confirm("是否确认昆仑已收到该合同款项？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(_["Q"])({finalId:e.id})})).then((function(t){a.success(),a._getData()})).catch((function(){})):"xfConfirm"==t&&this.$confirm("是否确认先锋已收到该合同款项？","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(_["kb"])({finalId:e.id})})).then((function(t){a.success(),a._getData()})).catch((function(){}))},success:function(){this.$message({type:"success",message:"操作成功"})}}},D=S,E=Object(u["a"])(D,n,l,!1,null,null,null);e["default"]=E.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1554:function(t,e,a){},"303b":function(t,e,a){"use strict";a("ffb9")},"34dc":function(t,e,a){"use strict";a("1554")},"841c":function(t,e,a){"use strict";var n=a("d784"),l=a("825a"),i=a("1d80"),o=a("129f"),r=a("14c3");n("search",1,(function(t,e,a){return[function(e){var a=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var i=l(t),c=String(this),s=i.lastIndex;o(s,0)||(i.lastIndex=0);var u=r(i,c);return o(i.lastIndex,s)||(i.lastIndex=s),null===u?-1:u.index}]}))},8513:function(t,e,a){},8947:function(t,e,a){"use strict";a("a9e3"),a("d3b7"),a("25f0");var n,l,i=a("b3f6"),o=a("ed08"),r={name:"ElTableCommon",props:{tableData:{type:Array,default:function(){return[]}},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageNum:{type:Number,default:1}},data:function(){return{replayId:""}},methods:{headSpanFit:function(t,e){var a=e.column,n=(e.index,a.label.length);return a.minWidth=Object(i["a"])(.14*n)+20,t("span",{class:"",style:{width:"100%"}},[a.label])},tableRowClassName:function(t){var e=t.row;t.rowIndex;return e.id==this.replayId?"active-row":""},changeMonth:function(t){return Object(o["l"])(new Date(t),"{y}年{m}月")},changeTime:function(t){return Object(o["l"])(new Date(t),"{y}/{m}/{d} {h}:{i}")},handClick:function(t,e){this.$emit("btnClick",t,e),this.replayId=e.id.toString()},handleCommand:function(t,e){this.$emit("btnClick",t,e)},handleSizeChange:function(t){this.$emit("handleSizeChange",t)},handleCurrentChange:function(t){this.$emit("handleCurrentChange",t)}}},c=r,s=a("2877"),u=Object(s["a"])(c,n,l,!1,null,null,null);e["a"]=u.exports},"912e":function(t,e,a){},"93e2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[t.label?a("div",{staticClass:"clearfix"},[a("span",[t._v(t._s(t.label))])]):t._e(),t._t("header")]},proxy:!0}],null,!0)},[t._t("default")],2)},l=[],i={name:"BoxTitle",props:{title:{type:String,default:""}},data:function(){return{}},computed:{pageTitle:function(){return this.$route.meta?this.$route.meta.title:""},label:function(){return this.title?this.title:this.pageTitle}}},o=i,r=(a("303b"),a("2877")),c=Object(r["a"])(o,n,l,!1,null,"cb4b73a2",null);e["a"]=c.exports},aae7:function(t,e,a){"use strict";a("8513")},b3f6:function(t,e,a){"use strict";var n=function(t){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var a=e/1920*100;return t*a}};e["a"]=n},bc92:function(t,e,a){"use strict";a("912e")},d38d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}}},[a("form-create",{attrs:{rule:t.rule,option:t.options},on:{"btn-search":t.search,"btn-reset":t.reset,"kp-code-select":t.handleSelectKp},model:{value:t.formObj,callback:function(e){t.formObj=e},expression:"formObj"}}),a("div",{staticClass:"li"},[a("el-button",{attrs:{type:"primary"},on:{click:t.down}},[t._v("导 出")])],1)],1)},l=[],i=(a("99af"),a("7db0"),a("d81d"),a("b0c0"),a("a9e3"),a("ac1f"),a("5530")),o=a("4bda"),r=a("ed08"),c={props:{type:{type:Number,default:1},showAddBtn:Boolean},data:function(){var t=this;return{formObj:{},options:{form:{labelPosition:"left",labelWidth:"90px"},submitBtn:!1,resetBtn:!1},rule:[{type:"select",field:"kcCode",title:"公司名称：",value:"",options:[],props:{filterable:!0},on:{change:function(e){var a=t.formObj.bind();a.glCode="",t.formObj.exec("kpCode","clear"),t.formObj.exec("jpCode","clear")}},col:{span:7}},{type:"AutoCompleteQuery",field:"kpCode",title:"平台名称：",props:{placeholder:"请选择平台或输入名称搜索",fieldValue:"code",fieldLabel:"name",value:"",queryFunc:function(e){var a={pageNum:1,pageSize:20,kcCode:t.formObj.getValue("kcCode"),_loading:!1};return""!==e&&(a.keyWord=e),Object(o["R"])(a).then((function(t){if(t.data){var e=t.data.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{value:t.name})}));return e}return[]}))}},emit:["select"],col:{span:6}},{type:"select",field:"glCode",title:"线路名称：",value:"",options:[],on:{change:function(e){var a=t.formObj.bind();a.kcCode="",t.formObj.exec("kpCode","clear"),t.formObj.exec("jpCode","clear")}},col:{span:6}},{type:"SubmitBtns",field:"btn",emit:["search","reset"],col:{span:5}},{type:"AutoCompleteQuery",field:"jpCode",title:"计量点名称：",value:"",props:{placeholder:"请选择计量点或输入名称搜索",fieldValue:"code",fieldLabel:"name",queryFunc:function(e){var a={pageNum:1,pageSize:20,_loading:!1};""!==e&&(a.jpName=e);var n=t.formObj.formData(),l=n.kpCode,r=n.kcCode,c=n.glCode;return""!==l&&(a.kpCode=l),""!==r&&(a.kcCode=r),""!==c&&(a.glCode=c),""!==e&&(a.keyWord=e),Object(o["Z"])(a).then((function(t){if(t.list){var e=t.list.rows.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{value:t.name})}));return e}return[]}))}},col:{span:7}},{type:"DatePicker",field:"month",title:"结算月份：",value:"",props:{type:"month",format:"yyyy年M月",placeholder:"请选择账单月",pickerOptions:{disabledDate:function(t){return new Date(t)>(new Date).getTime()}}},col:{span:6}},{type:"select",field:"type",title:"表计类型：",value:"",options:[{value:"",label:"全部"},{value:"1",label:"单表"},{value:"2",label:"共表"},{value:"3",label:"合表"},{value:"4",label:"国网"}],col:{span:6}},{type:"ElCol",props:{span:5}},{type:"input",field:"gcAccount",title:"户　　号：",value:"",props:{placeholder:"请输入户号"},col:{span:7}}]}},mounted:function(){this._updateGl(),this._updateKc()},methods:{handleSelectKp:function(t){var e=this.formObj.bind();e.glCode="",this._findRule("jpCode")&&this.formObj.exec("jpCode","clear")},_findRule:function(t){return this.rule.find((function(e){return e.field===t}))},_updateGl:function(t){var e=this;Object(o["I"])(t).then((function(t){var a=t.data.map((function(t){return{value:t.code,label:t.name}}));e.rule[2].options=[{value:"",label:"全部"}].concat(a)}))},_updateKc:function(t){var e=this;Object(o["O"])(t).then((function(t){var a=t.data.map((function(t){return{value:t.code,label:t.fullName}}));e.rule[0].options=[{value:"",label:"全部"}].concat(a)}))},down:function(){this.$emit("downHand")},search:function(){var t=this.formObj.formData(),e=Object(i["a"])(Object(i["a"])({},t),{},{month:Object(r["l"])(t.month,"{y}-{m}")});for(var a in e)""!=e[a]&&void 0!=e[a]||delete e[a];this.$emit("searchHand",e)},reset:function(){this.formObj.resetFields();var t=this.formObj.model();for(var e in t){var a=t[e];"AutoCompleteQuery"==a.type&&this.formObj.exec(a.field,"clear")}this.$emit("searchHand",{})}}},s=c,u=(a("bc92"),a("2877")),d=Object(u["a"])(s,n,l,!1,null,null,null);e["a"]=d.exports},d91b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}}},[a("form-create",{attrs:{rule:t.rule,option:t.options},on:{"btn-search":t.search,"btn-reset":t.reset},model:{value:t.formObj,callback:function(e){t.formObj=e},expression:"formObj"}}),a("div",{staticClass:"li"},[a("el-button",{attrs:{type:"primary"},on:{click:t.down}},[t._v("导 出")])],1)],1)},l=[],i=(a("99af"),a("d81d"),a("ac1f"),a("841c"),a("5530")),o=a("4bda"),r=a("ed08"),c=a("d38d"),s={extends:c["a"],mounted:function(){this._updateKc(),this.search()},data:function(){var t=this;return{rule:[{type:"select",field:"kcCode",title:"公司名称：",value:"",options:[],props:{filterable:!0},on:{change:function(e){var a=t.formObj.bind();a.glCode="",t._findRule("kpCode")&&t.formObj.exec("kpCode","clear"),t._findRule("jpCode")&&t.formObj.exec("jpCode","clear")}},col:{span:6}},{type:"DatePicker",field:"month",title:"结算月份：",value:Object(r["j"])(),props:{type:"month",format:"yyyy年M月",placeholder:"请选择账单月",pickerOptions:{disabledDate:function(t){return new Date(t)>(new Date).getTime()}}},col:{span:6}},{type:"select",field:"wkTy",title:"用电性质：",value:"",options:[{value:"",label:"全部"},{value:"钻井",label:"钻井"},{value:"压裂",label:"压裂"},{value:"生产",label:"生产"},{value:"试气",label:"试气"},{value:"生活",label:"生活"}],col:{span:6}},{type:"SubmitBtns",field:"btn",emit:["search","reset"],col:{span:6}},{type:"AutoCompleteQuery",field:"contractCode",title:"合同编号：",props:{placeholder:"请选择合同或输入编号搜索",fieldValue:"code",fieldLabel:"code",value:"",queryFunc:function(t){var e={pageNum:1,pageSize:20,_loading:!1};return""!==t&&(e.keyWord=t),Object(o["y"])(e).then((function(t){if(t.data){var e=t.data.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{value:t.code})}));return e}return[]}))}},col:{span:6}},{type:"select",field:"status",title:"回款状态：",value:"",options:[{value:"",label:"全部"},{value:"B",label:"待开票回款"},{value:"C",label:"回款完毕"}],col:{span:6}}]}},methods:{_updateGl:function(){},_updateKc:function(t){var e=this;Object(o["O"])(t).then((function(t){var a=t.data.map((function(t){return{value:t.code,label:t.shortName}}));e.rule[0].options=[{value:"",label:"全部"}].concat(a)}))}}},u=s,d=a("2877"),f=Object(d["a"])(u,n,l,!1,null,null,null);e["a"]=f.exports},fb6e:function(t,e,a){"use strict";a("ac1f"),a("841c");var n,l,i=a("ed08"),o={name:"TableCommon",data:function(){return{dialogShow:!1,loading:!1,tableData:[],total:0,page:{pageNum:1,pageSize:10},search:{}}},mounted:function(){this._getData&&(this._getData=Object(i["b"])(this._getData.bind(this),100),this._getData(this.page))},methods:{handleClose:function(){this.dialogShow=!1},handleSizeChange:function(t){this.page.pageSize!==t&&(this.page.pageSize=t,this._getData())},handleCurrentChange:function(t){this.page.pageNum!==t&&(this.page.pageNum=t,this._getData())},reloadTable:function(){this._getData()},searchHand:function(t){this.page.pageNum=1,this.search=t,this._getData()}},activated:function(){this._getData()},deactivated:function(){this.tableData=[]}},r=o,c=a("2877"),s=Object(c["a"])(r,n,l,!1,null,null,null);e["a"]=s.exports},ffb9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-d1b49ffc.18ba41bc.js.map