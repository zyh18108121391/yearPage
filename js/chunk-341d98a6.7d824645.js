(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341d98a6"],{"0686":function(e,t,a){"use strict";a("b110")},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1725:function(e,t,a){},"303b":function(e,t,a){"use strict";a("ffb9")},"35f3":function(e,t,a){"use strict";a("a9e3"),a("d3b7"),a("25f0");var i,r,l=a("b3f6"),n={name:"table-common",props:{tableData:{type:Array,default:function(){return[]}},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageNum:{type:Number,default:1}},data:function(){return{replayId:""}},methods:{headSpanFit:function(e,t){var a=t.column,i=(t.index,a.label.length);return a.minWidth=Object(l["a"])(.14*i)+20,e("span",{class:"",style:{width:"100%"}},[a.label])},getClass:function(e){return{"在运":"green","在建":"blue","停运":"red"}[e]},tableRowClassName:function(e){var t=e.row;e.rowIndex;return t.id==this.replayId?"active-row":""},handClick:function(e,t){this.$emit("btnClick",e,t),this.replayId=t.id.toString()},handleSizeChange:function(e){this.$emit("handleSizeChange",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)}}},o=n,c=a("2877"),s=Object(c["a"])(o,i,r,!1,null,null,null);t["a"]=s.exports},"534f":function(e,t,a){e.exports=a.p+"img/logo1.8cbbaa04.png"},"5a7e":function(e,t,a){"use strict";a("7db0"),a("ac1f");var i,r,l=a("5530"),n={data:function(){return{formObj:{},options:{form:{labelPosition:"left",labelWidth:"90px"},submitBtn:!1,resetBtn:!1},rule:[]}},mounted:function(){},methods:{_findRule:function(e){return this.rule.find((function(t){return t.field===e}))},down:function(){this.$emit("downHand")},search:function(){var e=this.formObj.formData(),t=Object(l["a"])({},e);for(var a in t)""!=t[a]&&void 0!=t[a]||delete t[a];this.$emit("searchHand",t)},reset:function(){this.formObj.resetFields();var e=this.formObj.model();for(var t in e){var a=e[t];"AutoCompleteQuery"==a.type&&this.formObj.exec(a.field,"clear")}this.$emit("searchHand",{})}}},o=n,c=(a("78a8"),a("2877")),s=Object(c["a"])(o,i,r,!1,null,null,null);t["a"]=s.exports},"63e7":function(e,t,a){"use strict";a.r(t);var i,r=function(){var e=this,t=this,a=t.$createElement,i=t._self._c||a;return i("BoxTitle",[i("SearchInputs",{on:{searchHand:t.searchHand,add:t.addHand}}),i("Table",{attrs:{tableData:t.tableData,pageNum:t.page.pageNum,pageSize:t.page.pageSize,total:t.total},on:{handleSizeChange:t.handleSizeChange,handleCurrentChange:t.handleCurrentChange,btnClick:t.btnClick}}),i("el-dialog",{attrs:{title:t.doType,"custom-class":"cusDialog",visible:this.dialogShow,width:"9rem","before-close":t.handleClose},on:{"update:visible":function(e){return t.$set(this,"dialogShow",e)}}},[i("div",{staticClass:"model-form"},[i("form-create",{attrs:{rule:t.rule,option:t.options},on:{"kc-name-select":t.selectKc,"fixed-price-change":t.fixedPriceChange,"variable-price-change":t.variablePriceChange},model:{value:t.formObj,callback:function(e){t.formObj=e},expression:"formObj"}})],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("提 交")]),i("el-button",{on:{click:t.handleClose}},[t._v("关 闭")])],1)]),i("el-dialog",{attrs:{title:"用电记录查看","custom-class":"cusDialog",visible:this.dialogShowRecords,width:"9rem","before-close":function(){e.dialogShowRecords=!1}},on:{"update:visible":function(e){return t.$set(this,"dialogShowRecords",e)}}},[i("div",{staticClass:"content-title"},[t._v("该合同关联的用电记录如下：")]),i("div",{staticClass:"item"},[i("el-table",{directives:[{name:"table-scroll",rawName:"v-table-scroll"}],attrs:{"row-key":"index","max-height":"500",data:t.bindRecordTableData,"header-cell-style":{background:"#E6EAFE",color:"#606266"},size:"small"}},[i("el-table-column",{attrs:{label:"序号",type:"index",width:"70"}}),i("el-table-column",{attrs:{label:"用能单位",prop:"wkOrg",width:"240","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{label:"平台名称",prop:"kpName",width:"120","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{label:"用电性质",prop:"wkTy",width:"80"}}),i("el-table-column",{attrs:{label:"公司名称",prop:"kcName",width:"240","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{label:"计量点名称",prop:"jpName",width:"240","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{label:"起码",prop:"startDima",width:"120"}}),i("el-table-column",{attrs:{label:"账单日",prop:"billDay",width:"70"}}),i("el-table-column",{attrs:{label:"开始用电时间",prop:"startTime",width:"170"}}),i("el-table-column",{attrs:{label:"结束用电时间",prop:"endTime",width:"170"}}),i("el-table-column",{attrs:{label:"运行状态",width:"75"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{class:"runing"===e.row["status"]?"green":"red"},[t._v(t._s("runing"==e.row["status"]?"在运":"离场"))])]}}])}),i("span",{attrs:{slot:"empty"},slot:"empty"},[t._v(" 该合同无用电记录，"),i("span",{staticClass:"link",on:{click:t.goRouter}},[t._v("去这里添加")])])],1),i("div",{staticClass:"page pagination-box"},[i("el-pagination",{attrs:{"current-page":t.page_record.pageNum,"page-sizes":[10,20,50,100],"page-size":t.page_record.pageSize,layout:"prev, pager, next, jumper,total, sizes",total:t.total_record},on:{"size-change":t.handleSizeChange_record,"current-change":t.handleCurrentChange_record}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(){e.dialogShowRecords=!1}}},[t._v("关 闭")])],1)])],1)},l=[],n=(a("a15b"),a("d81d"),a("a9e3"),a("ac1f"),a("841c"),a("1276"),a("ade3")),o=a("5530"),c=a("93e2"),s=a("ae24"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cus-table",staticStyle:{width:"100%"}},[a("el-table",{directives:[{name:"table-scroll",rawName:"v-table-scroll"}],attrs:{"row-key":"index",data:e.tableData,"header-cell-style":{background:"#E6EAFE",color:"#606266"},"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"70",fixed:"left"}}),a("el-table-column",{attrs:{label:"合同名称",prop:"name",width:"370","show-overflow-tooltip":"",fixed:"left"}}),a("el-table-column",{attrs:{label:"甲方公司",prop:"kcName",width:"230","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"乙方公司",prop:"yfName",width:"230","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"用电性质",prop:"wkTy",width:"160","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"合同单价",prop:"price",width:"110"}}),a("el-table-column",{attrs:{label:"税率",prop:"taxRate",width:"90"}}),a("el-table-column",{attrs:{label:"合同编码",prop:"code",width:"230","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"运营类型",prop:"devType",width:"90"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center","class-name":"cusTable",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table-btns"},[a("span",{staticClass:"cus-btn line",attrs:{type:"text",size:"small"},on:{click:function(a){return e.handClick("编辑",t.row)}}},[e._v("编辑")]),a("span",{staticClass:"cus-btn line",attrs:{type:"text",size:"small"},on:{click:function(a){return e.handClick("关联查看",t.row)}}},[e._v("关联查看")]),a("span",{staticClass:"cus-btn",attrs:{type:"text",size:"small"},on:{click:function(a){return e.handClick("下载",t.row)}}},[e._v("下载")])])]}}])})],1),a("div",{staticClass:"page pagination-box"},[a("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"prev, pager, next, jumper,total, sizes",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},d=[],b=a("35f3"),f=a("534f"),p=a.n(f),h={extends:b["a"],data:function(){return{defaultImg:p.a}},methods:{handleCommand:function(e,t){this.$emit("btnClick",e,t)}}},m=h,g=(a("907c"),a("2877")),v=Object(g["a"])(m,u,d,!1,null,"6af20f2a",null),w=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}},[a("form-create",{attrs:{rule:e.rule,option:e.options},on:{"btn-search":e.search,"btn-reset":e.reset},model:{value:e.formObj,callback:function(t){e.formObj=t},expression:"formObj"}}),a("div",{staticClass:"li"},[a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新 增")])],1)],1)},j=[],x=a("5a7e"),O={extends:x["a"],props:{},data:function(){return{options:{form:{labelPosition:"left",labelWidth:"70px"},submitBtn:!1,resetBtn:!1},rule:[{type:"input",field:"kcName",title:"业主公司：",value:"",props:{placeholder:"业主公司名称"},col:{span:7}},{type:"SubmitBtns",field:"btn",emit:["search","reset"],col:{span:2,offset:15}}]}},mounted:function(){},methods:{search:function(){var e=this.formObj.formData(),t=Object(o["a"])({},e);for(var a in t)""!=t[a]&&void 0!=t[a]||delete t[a];this.$emit("searchHand",t)},add:function(){this.$emit("add")}}},C=O,k=(a("da00"),Object(g["a"])(C,y,j,!1,null,null,null)),_=k.exports,N=a("4bda"),S=(a("5f87"),a("c59a")),P=(a("3de1"),a("ed08")),D={extends:s["a"],name:"kcList",components:{BoxTitle:c["a"],SearchInputs:_,Table:w},data:function(){var e=this;return{options:{form:{labelPosition:"left",labelWidth:"100px"},submitBtn:!1,resetBtn:!1},dialogShowRecords:!1,bindRecordTableData:[],page_record:{pageNum:1,pageSize:10},total_record:0,rule:[{type:"input",field:"code",title:"合同编码：",value:"",props:{placeholder:"请输入合同编码"},validate:[{required:!0,message:"请输入合同编码",trigger:"blur"}],col:{span:12}},{type:"input",field:"name",title:"合同名称：",value:"",props:{placeholder:"请输入合同名称"},validate:[{required:!0,message:"请输入合同名称",trigger:"blur"}],col:{span:12}},{type:"NoticeLabelInput",field:"variablePrice",value:0,props:{title:"浮动单价(¥)",placeholder:"请输入浮动单价",titleWidth:"120px",notice:"购电成本",required:!0},on:{change:function(t){var a=e.formObj.formData();if(""!==a.fixedPrice&&""!==a.variablePrice){var i=Object(P["i"])([Number(a.fixedPrice),Number(a.variablePrice)]);e.formObj.setValue({price:Object(P["e"])(Number(a.fixedPrice)+Number(a.variablePrice),i)})}}},validate:[{validator:function(e,t,a){""===t?a(new Error("单价不能为空")):t!=Number(t)||"0."===t?a(new Error("请输入合法数字")):a()},trigger:"blur",required:!0}],col:{span:8}},{type:"NoticeLabelInput",field:"fixedPrice",value:0,props:{placeholder:"请输入固定单价",title:"固定单价(¥)",titleWidth:"120px",notice:"服务费"},validate:[{validator:function(e,t,a){""===t?a(new Error("单价不能为空")):t!=Number(t)||"0."===t?a(new Error("请输入合法数字")):a()},trigger:"blur",required:!0}],emit:["change"],col:{span:8}},{type:"input",field:"price",title:"合同单价(¥)：",value:0,props:{placeholder:"自动计算",disabled:!0},validate:[{required:!0,trigger:"blur"}],col:{span:8}},{type:"AutoCompleteQuery",field:"kcName",title:"甲方公司：",props:{placeholder:"请选择公司或输入公司名称搜索",fieldValue:"fullName",fieldLabel:"fullName",value:"",queryFunc:function(e){var t={pageNum:1,pageSize:20,_loading:!1};return""!==e&&(t.keyWord=e),Object(N["P"])(t).then((function(e){if(e.data){var t=e.data.map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{value:e.fullName})}));return t}return[]}))}},validate:[{required:!0,message:"请选择公司",trigger:"blur"}],emit:["select"],col:{span:12}},{type:"select",field:"yfName",title:"乙方公司：",value:"成都中石油昆仑能源有限公司",options:[{value:"成都中石油昆仑能源有限公司",label:"成都中石油昆仑能源有限公司"},{value:"四川能投宜宾市售电有限公司",label:"四川能投宜宾市售电有限公司"}],validate:[{required:!0,message:"请选择运营类型",trigger:"blur"}],col:{span:12}},{type:"input",field:"taxRate",title:"税率(%)：",value:"",props:{placeholder:"请输入税率"},validate:[{validator:function(e,t,a){""===t?a(new Error("税率不能为空")):t!=Number(t)?a(new Error("请输入合法数字")):t<0||t>=100?a(new Error("请输入正确的范围")):a()},trigger:"blur",required:!0}],col:{span:12}},{type:"select",field:"devType",title:"运营类型：",value:"售电",options:[{value:"购电",label:"购电"},{value:"售电",label:"售电"},{value:"服务",label:"服务"},{value:"运维",label:"运维"},{value:"租赁",label:"租赁"}],validate:[{required:!0,message:"请选择运营类型",trigger:"blur"}],col:{span:12}},{type:"checkbox",field:"wkTy",title:"用电性质：",value:[],options:[{value:"钻井",label:"钻井"},{value:"压裂",label:"压裂"},{value:"生产",label:"生产"},{value:"试气",label:"试气"},{value:"生活",label:"生活"}],validate:[{required:!0,message:"请至少选择一项用电性质",trigger:"change"}],col:{span:12}},{type:"DatePicker",field:"validDate",title:"有效期限：",value:new Date,props:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"请选择日期"},validate:[{required:!0,message:"请选择日期",trigger:"blur"}],col:{span:12}},{type:"MyUpload",field:"contractFile",title:"合同文件 ：",value:"",validate:[{required:!0,message:"请选择合同文件",trigger:"change"}],col:{span:12}}]}},methods:(i={btnClick:function(e,t){var a=this;this.currEditRow=t,"关联查看"==e?(this.bindRecordTableData=[],this.dialogShowRecords=!0,this._queryRecordById()):"编辑"==e?(this.dialogShow=!0,this.doType="编辑合同",this.formObj.clearValidateState&&this.formObj.clearValidateState(),this.$nextTick((function(){var e=a.formObj.form;for(var i in t)e[i]=t[i];t.contractFile||(e.contractFile=""),e.wkTy=t.wkTy?t.wkTy.split(","):[],e.taxRate=Object(P["e"])(100*t.taxRate),a.formObj.exec("kcName","setLabel",t.kcName)}))):"下载"==e&&(t.contractFile?this.download(t.contractFile):this.$message.warning("附件为空"))},addHand:function(){var e=this,t="new"==this.currEditRow;this.currEditRow="new",this.doType="新增合同",this.dialogShow=!0,t||this.$nextTick((function(){e.formObj.form;e.formObj.resetFields(),e.formObj.exec("kcName","setLabel","")}))},fixedPriceChange:function(e){var t=this.formObj.formData();if(""!==t.fixedPrice&&""!==t.variablePrice){var a=Object(P["i"])([Number(t.fixedPrice),Number(t.variablePrice)]);this.formObj.setValue({price:Object(P["e"])(Number(t.fixedPrice)+Number(t.variablePrice),a)})}},variablePriceChange:function(e){var t=this.formObj.formData();if(""!==t.fixedPrice&&""!==t.variablePrice){var a=Object(P["i"])([Number(t.fixedPrice),Number(t.variablePrice)]);this.formObj.setValue({price:Object(P["e"])(Number(t.fixedPrice)+Number(t.variablePrice),a)})}}},Object(n["a"])(i,"fixedPriceChange",(function(e){var t=this.formObj.formData();if(""!==t.fixedPrice&&""!==t.variablePrice){var a=Object(P["i"])([Number(t.fixedPrice),Number(t.variablePrice)]);this.formObj.setValue({price:Object(P["e"])(Number(t.fixedPrice)+Number(t.variablePrice),a)})}})),Object(n["a"])(i,"getShowUrl",(function(e){return e?S["a"]+e:""})),Object(n["a"])(i,"download",(function(e){var t=this.getShowUrl(e),a=document.createElement("a");a.setAttribute("download",t),a.setAttribute("href",N["bc"]+"?resource="+t),a.click()})),Object(n["a"])(i,"goRouter",(function(){this.dialogShowRecords=!1,this.$router.push("/useEqManage")})),Object(n["a"])(i,"_queryRecordById",(function(){var e=this;Object(N["ab"])(Object(o["a"])({conId:this.currEditRow.id},this.page_record)).then((function(t){e.bindRecordTableData=t.rows?t.rows:[],e.total_record=t.total}))})),Object(n["a"])(i,"_getData",(function(){var e=this;Object(N["z"])(Object(o["a"])(Object(o["a"])({},this.search),this.page)).then((function(t){var a=t.rows?t.rows:[];e.tableData=a,e.total=t.total}))})),Object(n["a"])(i,"handleSizeChange_record",(function(e){this.page_record.pageSize!==e&&(this.page_record.pageSize=e,this._getData())})),Object(n["a"])(i,"handleCurrentChange_record",(function(e){this.page_record.pageNum!==e&&(this.page_record.pageNum=e,this._queryRecordById())})),Object(n["a"])(i,"submit",(function(){var e=this;this.formObj.validate((function(t,a){if(t){var i=e.formObj.formData();e.loading=!0,"new"!==e.currEditRow?Object(N["Cb"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},e.currEditRow),i),{},{taxRate:i.taxRate/100,wkTy:i.wkTy.join(",")})).then(e.notice).catch((function(t){return e.loading=!1,!1})):Object(N["Bb"])(Object(o["a"])(Object(o["a"])({},i),{},{taxRate:i.taxRate/100,wkTy:i.wkTy.join(",")})).then(e.notice).catch((function(t){return e.loading=!1,e.formObj.resetFields(),e.formObj.exec("kcName","setLabel",""),!1}))}}))})),Object(n["a"])(i,"selectKc",(function(){this.formObj.validateField("kcName",(function(){}))})),i)},R=D,T=(a("0686"),Object(g["a"])(R,r,l,!1,null,"343c3bd3",null));t["default"]=T.exports},"78a8":function(e,t,a){"use strict";a("f640")},"841c":function(e,t,a){"use strict";var i=a("d784"),r=a("825a"),l=a("1d80"),n=a("129f"),o=a("14c3");i("search",1,(function(e,t,a){return[function(t){var a=l(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a):new RegExp(t)[e](String(a))},function(e){var i=a(t,e,this);if(i.done)return i.value;var l=r(e),c=String(this),s=l.lastIndex;n(s,0)||(l.lastIndex=0);var u=o(l,c);return n(l.lastIndex,s)||(l.lastIndex=s),null===u?-1:u.index}]}))},"907c":function(e,t,a){"use strict";a("1725")},"93e2":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card",scopedSlots:e._u([{key:"header",fn:function(){return[e.label?a("div",{staticClass:"clearfix"},[a("span",[e._v(e._s(e.label))])]):e._e(),e._t("header")]},proxy:!0}],null,!0)},[e._t("default")],2)},r=[],l={name:"BoxTitle",props:{title:{type:String,default:""}},data:function(){return{}},computed:{pageTitle:function(){return this.$route.meta?this.$route.meta.title:""},label:function(){return this.title?this.title:this.pageTitle}}},n=l,o=(a("303b"),a("2877")),c=Object(o["a"])(n,i,r,!1,null,"cb4b73a2",null);t["a"]=c.exports},a15b:function(e,t,a){"use strict";var i=a("23e7"),r=a("44ad"),l=a("fc6a"),n=a("a640"),o=[].join,c=r!=Object,s=n("join",",");i({target:"Array",proto:!0,forced:c||!s},{join:function(e){return o.call(l(this),void 0===e?",":e)}})},ae24:function(e,t,a){"use strict";a("7db0");var i,r,l=a("fb6e"),n={extends:l["a"],name:"index-parent",data:function(){return{doType:"编辑",formObj:{},options:{form:{labelPosition:"left",labelWidth:"90px"},submitBtn:!1,resetBtn:!1},rule:[],currEditRow:""}},methods:{handleClose:function(){this.dialogShow=!1},_findRule:function(e){return this.rule.find((function(t){return t.field===e}))},notice:function(){this.dialogShow=!1,this.loading=!1,this.$notify({title:"成功",message:"操作成功",type:"success",duration:3e3}),this.reloadTable()}}},o=n,c=a("2877"),s=Object(c["a"])(o,i,r,!1,null,null,null);t["a"]=s.exports},b110:function(e,t,a){},b3f6:function(e,t,a){"use strict";var i=function(e){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t){var a=t/1920*100;return e*a}};t["a"]=i},da00:function(e,t,a){"use strict";a("f0c8")},f0c8:function(e,t,a){},f640:function(e,t,a){},fb6e:function(e,t,a){"use strict";a("ac1f"),a("841c");var i,r,l=a("ed08"),n={name:"TableCommon",data:function(){return{dialogShow:!1,loading:!1,tableData:[],total:0,page:{pageNum:1,pageSize:10},search:{}}},mounted:function(){this._getData&&(this._getData=Object(l["b"])(this._getData.bind(this),100),this._getData(this.page))},methods:{handleClose:function(){this.dialogShow=!1},handleSizeChange:function(e){this.page.pageSize!==e&&(this.page.pageSize=e,this._getData())},handleCurrentChange:function(e){this.page.pageNum!==e&&(this.page.pageNum=e,this._getData())},reloadTable:function(){this._getData()},searchHand:function(e){this.page.pageNum=1,this.search=e,this._getData()}},activated:function(){this._getData()},deactivated:function(){this.tableData=[]}},o=n,c=a("2877"),s=Object(c["a"])(o,i,r,!1,null,null,null);t["a"]=s.exports},ffb9:function(e,t,a){}}]);
//# sourceMappingURL=chunk-341d98a6.7d824645.js.map