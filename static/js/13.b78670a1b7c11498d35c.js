webpackJsonp([13],{FeBl:function(t,e){var o=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=o)},"m+HC":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mvHQ"),a=o.n(n),s=o("mtWM");o.n(s);e.default={name:"sections",data:function(){var t=this;return{vs:!1,vs2:!1,vs3:!1,vs4:!1,vs5:!1,cpsModal:!1,cpsModal2:!1,tbWidth:100,total:100,selectTm:"",sn:"",mn:"",tabVal:"xinmei",formSel:{overdueVal:1,overdueVal1:1,input:"",overdue:"",selectTm:"",repayTm:"",typeBs:"",channelBs:"",typePd:"",moneyGv:""},money:"",compenstateForm:{selectTm:"",money:""},columns1:[{type:"selection",width:60,align:"center"},{title:"借款编号",key:"loanNo"},{title:"客户姓名",key:"custName"},{title:"手机号",key:"custMobile"},{title:"身份证号",key:"idcard"},{title:"借款金额",key:"loanAmount"},{title:"首付金额",key:"downpayAmount"},{title:"借款时间",key:"loanTime",width:104},{title:"省份",key:"province"},{title:"城市",key:"city"},{title:"总期数",key:"totalStage"},{title:"当前期数",key:"planStage"},{title:"应还时间",key:"planLtm",width:104},{title:"应还本金",key:"planPrp"},{title:"应还服务费",key:"planSfe"},{title:"应还利息",key:"planInt"},{title:"应还罚息",key:"planPin"},{title:"应还违约金",key:"d"},{title:"应还总金额",key:"planTotal"},{title:"逾期天数",key:"exceedDay"},{title:"代偿状态",key:"cpsSt"},{title:"备注",key:"clrType"}],data1:[],columns2:[{title:"代理商名称",key:"agentName"},{title:"法人姓名",key:"name"},{title:"手机号",key:"phone"},{title:"省市",key:"address"},{title:"操作",key:"action",width:80,align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.cpsModal2=!0}}},"代偿")])}}],data2:[{agentName:"深圳高明有限公司",name:"张一河",phone:"13655556666",address:"广东省深圳市"}],options1:{disabledDate:function(t){var e,o=new Date;e=0==o.getMonth()?new Date(o.getFullYear()-1,11,1):new Date(o.getFullYear(),o.getMonth()-1,1);var n=new Date(e.getFullYear(),e.getMonth()+1,0);return t&&t.valueOf()>=new Date(e.getFullYear()+"-"+(e.getMonth()+1)+"-"+n.getDate())-864e5}}}},created:function(){if($(window).width()<768){for(var t=this.columns1,e=0;e<t.length;e++)t[e].width=this.tbWidth;this.columns1=t}var o,n=new Date;o=0==n.getMonth()?new Date(n.getFullYear()-1,11,1):new Date(n.getFullYear(),n.getMonth()-1,1),this.compenstateForm.selectTm=o.getFullYear().toString()+"-"+(o.getMonth()+1).toString()},computed:{pageWin:function(){return Math.max(window.innerWidth,document.documentElement.clientWidth,document.body.clientWidth)}},mounted:function(){this.loadContent(1)},methods:{cpsTmChange:function(t){this.selectTm=t},monthChange:function(t){this.compenstateForm.selectTm=t},cps:function(t){var e=this.$refs.table.getSelection();if(console.log(e),e.length<=0)return void this.$Message.error("代偿计划不能为空");this.cpsModal=t},cpsConfirm:function(){var t=this,e=this.$refs.table.getSelection();if(console.log(e),e.length<=0)return void this.$Message.error("代偿计划不能为空");for(var o=[],n=0;n<e.length;n++){var s=e[n];console.log("item planId",s.planId),o.push(s.planId)}if(console.log(this.selectTm,this.mn,this.sn,o),null==this.selectTm||""==this.selectTm)return void this.$Message.error("代偿时间为空");$.ajax({url:"/compensatory/cpsConfirm",type:"post",cache:!1,dataType:"json",xhrFields:{withCredentials:!0},data:{cpsTm:this.selectTm,cpsAmt:this.mn,cpsSn:this.sn,planIds:a()(o)},contentType:"application/x-www-form-urlencoded; charset=utf-8",success:function(e){console.log(a()(e)),e.success&&1==e.resCode&&(t.$Message.error("操作成功"),t.loadContent(1),t.cpsModal=!1)}})},showMenu2:function(t){this.formSel.typeBs="全部"!=t&&""!=t?" : "+t:""},orShow2:function(t){this.vs2=t},showMenu3:function(t){this.formSel.channelBs="全部"!=t&&""!=t?" : "+t:""},orShow3:function(t){this.vs3=t},showMenu4:function(t){this.formSel.typePd="全部"!=t&&""!=t?" : "+t:""},orShow4:function(t){this.vs4=t},showMenu5:function(t){this.formSel.moneyGv="全部"!=t&&""!=t?" : "+t:""},loadContent:function(t){var e=10*(parseInt(t)-1),o=this;$.ajax({url:"/compensatory/queryAllCompensatoryInfos",type:"post",cache:!1,dataType:"json",xhrFields:{withCredentials:!0},data:{cpsSt:1,pageStart:e,pageSize:10},contentType:"application/x-www-form-urlencoded; charset=utf-8",success:function(t){console.log(a()(t)),o.total=t.count,1==t.resCode&&(o.total=t.count.count,t.result.forEach(function(t){0==t.cpsSt?t.cpsSt="未到代偿日":1==t.cpsSt?t.cpsSt="待代偿":2==t.status&&(t.cpsSt="代偿成功")},this),o.data1=t.result)}})},orShow5:function(t){this.vs5=t},dateChange:function(t){this.formSel.selectTm=t},dateChange1:function(t){this.formSel.repayTm=t},overdueClick:function(){this.formSel.overdue=" : "+this.formSel.overdueVal+"-"+this.formSel.overdueVal1,this.vs=!1},exportData:function(){var t=this;this.$Modal.confirm({title:"信美代偿",render:function(e){return e("Input",{props:{value:t.money,autofocus:!0,placeholder:"输入代偿金额"},style:{marginTop:"20px"},on:{input:function(e){t.money=e}}})}})},changePage:function(){}}}},mvHQ:function(t,e,o){t.exports={default:o("qkKv"),__esModule:!0}},qkKv:function(t,e,o){var n=o("FeBl"),a=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},wsyz:function(t,e,o){var n=o("VU/8")(o("m+HC"),o("zrnW"),null,null,null);t.exports=n.exports},zrnW:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sections"},[o("div",{staticClass:"pl_body"},[o("Tabs",[o("TabPane",{attrs:{label:"信美代偿",name:"xinmei"}},[o("Row",{staticClass:"form_row"},[o("Col",{attrs:{sm:22,xs:24}},[o("Form",{staticClass:"downMenu",attrs:{model:t.formSel}},[o("FormItem",[o("Input",{attrs:{icon:"ios-search",placeholder:"借款编号/客户姓名/手机号"},on:{"on-enter":function(t){}},model:{value:t.formSel.input,callback:function(e){t.$set(t.formSel,"input",e)},expression:"formSel.input"}}),t._v(" "),o("Button",{attrs:{type:"primary"},on:{click:function(t){}}},[t._v("查询")]),t._v(" "),o("DatePicker",{attrs:{value:t.formSel.selectTm,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-start",placeholder:"借款时间"},on:{"on-change":t.dateChange}}),t._v(" "),o("DatePicker",{attrs:{value:t.formSel.repayTm,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-start",placeholder:"应还时间"},on:{"on-change":t.dateChange1}}),t._v(" "),o("Dropdown",{staticClass:"showMn",attrs:{trigger:"click"},on:{"on-click":t.showMenu2,"on-visible-change":t.orShow2}},[o("Button",{class:{active:t.vs2,chk:""!=t.formSel.typeBs},attrs:{type:"ghost"}},[t._v("\n                              业务类型"),o("span",{domProps:{textContent:t._s(t.formSel.typeBs)}}),t._v(" "),o("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"全部",selected:""==t.formSel.typeBs}},[t._v("全部")]),t._v(" "),o("DropdownItem",{attrs:{name:"现金贷",selected:"0"==t.formSel.typeBs}},[t._v("现金贷")]),t._v(" "),o("DropdownItem",{attrs:{name:"消费贷",selected:"1"==t.formSel.typeBs}},[t._v("消费贷")])],1)],1),t._v(" "),o("Dropdown",{staticClass:"showMn",attrs:{trigger:"click"},on:{"on-click":t.showMenu5,"on-visible-change":t.orShow5}},[o("Button",{class:{active:t.vs5,chk:""!=t.formSel.moneyGv},attrs:{type:"ghost"}},[t._v("\n                              资金提供方"),o("span",{domProps:{textContent:t._s(t.formSel.moneyGv)}}),t._v(" "),o("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"全部",selected:"0"==t.formSel.moneyGv}},[t._v("全部")]),t._v(" "),o("DropdownItem",{attrs:{name:"华金",selected:"1"==t.formSel.moneyGv}},[t._v("华金")]),t._v(" "),o("DropdownItem",{attrs:{name:"中科诺",selected:"2"==t.formSel.moneyGv}},[t._v("中科诺")])],1)],1)],1)],1)],1),t._v(" "),o("Col",{attrs:{sm:2,xs:24}},[o("div",{staticClass:"float_right"},[o("Button",{attrs:{type:"success"},on:{click:function(e){t.cps(!0)}}},[t._v(" 信美代偿")])],1)])],1),t._v(" "),o("div",{staticClass:"table_show"},[o("Table",{ref:"table",attrs:{border:"",columns:t.columns1,data:t.data1}})],1),t._v(" "),t.pageWin>=768?o("Row",{attrs:{gutter:16}},[o("Col",{attrs:{sm:5,xs:24}},[o("div",{staticClass:"total"},[t._v("共"+t._s(t.total)+"页")])]),t._v(" "),o("Col",{staticClass:"txt_right",attrs:{sm:19,xs:24}},[o("Page",{attrs:{total:t.total,"show-elevator":""},on:{"on-change":t.changePage}})],1)],1):o("Page",{attrs:{total:t.total,simple:""},on:{"on-change":t.changePage}})],1),t._v(" "),o("TabPane",{attrs:{label:"代理商代偿",name:"agent"}},[o("Form",{staticClass:"downMenu",attrs:{model:t.formSel}},[o("FormItem",[o("Input",{attrs:{icon:"ios-search",placeholder:"借款编号/客户姓名/手机号"},on:{"on-enter":function(t){}},model:{value:t.formSel.input,callback:function(e){t.$set(t.formSel,"input",e)},expression:"formSel.input"}}),t._v(" "),o("Button",{attrs:{type:"primary"},on:{click:function(t){}}},[t._v("查询")])],1)],1),t._v(" "),o("div",{staticClass:"table_show"},[o("Table",{ref:"table",attrs:{border:"",columns:t.columns2,data:t.data2}})],1),t._v(" "),t.pageWin>=768?o("Row",{attrs:{gutter:16}},[o("Col",{attrs:{sm:5,xs:24}},[o("div",{staticClass:"total"},[t._v("共"+t._s(t.total)+"页")])]),t._v(" "),o("Col",{staticClass:"txt_right",attrs:{sm:19,xs:24}},[o("Page",{attrs:{total:t.total,"show-elevator":""},on:{"on-change":t.changePage}})],1)],1):o("Page",{attrs:{total:t.total,simple:""},on:{"on-change":t.changePage}})],1)],1)],1),t._v(" "),o("Modal",{attrs:{title:"信美代偿确认"},model:{value:t.cpsModal,callback:function(e){t.cpsModal=e},expression:"cpsModal"}},[o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"text",size:"large"},on:{click:function(e){t.cpsModal=!t.cpsModal}}},[t._v("取消")]),t._v(" "),o("Button",{attrs:{type:"primary",size:"large"},on:{click:t.cpsConfirm}},[t._v("确定")])],1),t._v(" "),o("Form",{attrs:{"label-width":60}},[o("FormItem",{attrs:{label:"时间"}},[o("DatePicker",{attrs:{value:t.selectTm,format:"yyyy-MM-dd",placement:"bottom-start",placeholder:"偿还时间"},on:{"on-change":t.cpsTmChange}})],1),t._v(" "),o("FormItem",{attrs:{label:"偿还流水号"}},[o("Input",{attrs:{placeholder:"偿还流水号"},model:{value:t.sn,callback:function(e){t.sn=e},expression:"sn"}})],1)],1)],1),t._v(" "),o("Modal",{attrs:{title:"信美代偿"},model:{value:t.cpsModal2,callback:function(e){t.cpsModal2=e},expression:"cpsModal2"}},[o("Form",{attrs:{model:t.compenstateForm}},[o("FormItem",[o("DatePicker",{attrs:{type:"month",value:t.compenstateForm.selectTm,format:"yyyy-MM",placement:"bottom-start",placeholder:"代偿月份",options:t.options1},on:{"on-change":t.monthChange}})],1),t._v(" "),o("FormItem",[o("Input",{attrs:{placeholder:" 输入代偿金额"},model:{value:t.compenstateForm.money,callback:function(e){t.$set(t.compenstateForm,"money",e)},expression:"compenstateForm.money"}})],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.b78670a1b7c11498d35c.js.map