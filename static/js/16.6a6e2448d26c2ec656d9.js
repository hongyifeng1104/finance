webpackJsonp([16],{S22P:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("mtWM"),a=o.n(s);e.default={name:"sections",data:function(){return{vs:!1,vs2:!1,vs3:!1,vs4:!1,tbWidth:100,total:100,formSel:{selectTm:"",moneyGv:"",typePd:"",typeStr:""},formSel2:{selectTm:"",moneyGv:"",typePd:"",typeStr:""},columns1:[{title:"日期",key:"statTm"},{title:"业务类型",key:"type"},{title:"借款笔数",key:"loanCount"},{title:"借款金额",key:"loanAmt"},{title:"放款金额",key:"payAmt"},{title:"已结算金额",key:"settledAmt"},{title:"贴息（服务费）",key:"discountSfe"},{title:"贴息（利息）",key:"discountInt"},{title:"贴息合计",key:"discount"},{title:"中科诺放款资金",key:"zknAmt"},{title:"华金放款资金",key:"hjAmt"},{title:"日借款合计",key:"loanAmt"}],data1:[],columns2:[{title:"日期",key:"statTm"},{title:"业务类型",key:"type"},{title:"借款笔数",key:"loanCount"},{title:"借款金额",key:"loanAmt"},{title:"放款金额",key:"payAmt"},{title:"已结算金额",key:"settledAmt"},{title:"贴息（服务费）",key:"discountSfe"},{title:"贴息（利息）",key:"discountInt"},{title:"贴息合计",key:"discount"},{title:"中科诺放款资金",key:"zknAmt"},{title:"华金放款资金",key:"hjAmt"},{title:"月借款合计",key:"loanAmt"}],data2:[]}},created:function(){if($(window).width()<768){for(var t=this.columns1,e=0;e<t.length;e++)t[e].width=this.tbWidth;this.columns1=t;for(var o=this.columns2,e=0;e<o.length;e++)o[e].width=this.tbWidth;this.columns2=o}},computed:{pageWin:function(){return Math.max(window.innerWidth,document.documentElement.clientWidth,document.body.clientWidth)}},methods:{showMenu:function(t){this.vs=!this.vs},orShow:function(t){this.vs=t},orShow3:function(t){this.vs3=t},showMenu3:function(t){this.formSel.moneyGv="全部"!=t&&""!=t?" : "+t:""},showMenu4:function(t){this.formSel.typePd="全部"!=t&&""!=t?t.split(":")[0]:-1},showMenu2:function(t){this.vs2=!this.vs2},orShow2:function(t){this.vs2=t},orShow4:function(t){this.vs4=t},dateChange:function(t){this.formSel.selectTm=t},dateChange2:function(t){this.formSel2.selectTm=t},queryLoanStatMonth:function(){var t=this,e=[];this.formSel.selectTm&&(e[0]=this.formSel.selectTm);var o=this.formSel.typePd;console.log(e,o);var s={statTm:e,loanType:o};a.a.post("/stat/selectLoanStatByMonth",s,{headers:{"Content-Type":"application/json"}}).then(function(e){1==e.data.resCode?(e.data.result.forEach(function(t){null!=t.discount&&""!=t.discount||(t.discount=0),0==t.type?t.type="消费贷":1==t.type&&(t.type="现金贷"),t.loanAmt=t.loanAmt/100,t.payAmt=t.payAmt/100,t.zknAmt=t.zknAmt/100,t.hjAmt=t.hjAmt/100,t.settledAmt=t.settledAmt/100,t.discountSfe=t.discountSfe/100,t.discountInt=t.discountInt/100,t.discount=t.discount/100},this),t.data2=e.data.result,t.total=e.data.count):alert(e.data.msg)}).catch(function(t){this.$Message.warning("系统异常")})},queryLoanStatDay:function(){var t=this,e=[];this.formSel.selectTm&&(e=this.formSel.selectTm);var o=this.formSel.typePd;console.log(e,o);var s={statTm:e,loanType:o};a.a.post("/stat/selectLoanStatByDay",s,{headers:{"Content-Type":"application/json"}}).then(function(e){1==e.data.resCode?(e.data.result.forEach(function(t){null!=t.discount&&""!=t.discount||(t.discount=0),0==t.type?t.type="消费贷":1==t.type&&(t.type="现金贷"),t.loanAmt=t.loanAmt/100,t.payAmt=t.payAmt/100,t.zknAmt=t.zknAmt/100,t.hjAmt=t.hjAmt/100,t.settledAmt=t.settledAmt/100,t.discountSfe=t.discountSfe/100,t.discountInt=t.discountInt/100,t.discount=t.discount/100},this),t.data1=e.data.result,t.total=e.data.count):alert(e.data.msg)}).catch(function(t){this.$Message.warning("系统异常")})},exportData:function(t){2===t&&this.$refs.table.exportCsv({filename:"排序和过滤后的数据",original:!1})},changePage:function(){}}}},ZGUQ:function(t,e,o){var s=o("VU/8")(o("S22P"),o("c30F"),null,null,null);t.exports=s.exports},c30F:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sections"},[o("div",{staticClass:"pl_body"},[o("Tabs",[o("TabPane",{attrs:{label:"日汇总表",name:"tab1"}},[o("Row",{staticClass:"form_row"},[o("Col",{attrs:{sm:22,xs:24}},[o("Form",{staticClass:"downMenu",attrs:{model:t.formSel}},[o("FormItem",[o("DatePicker",{attrs:{value:t.formSel.selectTm,format:"yyyy-MM-dd",type:"daterange",placement:"bottom-start",placeholder:"借款时间"},on:{"on-change":t.dateChange}}),t._v(" "),o("Dropdown",{staticClass:"showMn",attrs:{trigger:"click"},on:{"on-click":t.showMenu4,"on-visible-change":t.orShow}},[o("Button",{class:{active:t.vs,chk:""!=t.formSel.typePd},attrs:{type:"ghost"}},[t._v("\n                                      产品类型"),o("span",{domProps:{textContent:t._s(t.formSel.typePd)}}),t._v(" "),o("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"全部",selected:"全部"==t.formSel.typePd}},[t._v("全部")]),t._v(" "),o("DropdownItem",{attrs:{name:"0:消费贷",selected:0==t.formSel.typePd}},[t._v("消费贷")]),t._v(" "),o("DropdownItem",{attrs:{name:"1:现金贷",selected:1==t.formSel.typePd}},[t._v("现金贷")])],1)],1),t._v(" "),o("Button",{attrs:{type:"success"},on:{click:function(e){t.queryLoanStatDay()}}},[t._v("查询")])],1)],1)],1),t._v(" "),o("Col",{attrs:{sm:2,xs:24}},[o("div",{staticClass:"float_right"},[o("Button",{attrs:{type:"success"},on:{click:function(e){t.exportData(2)}}},[o("Icon",{attrs:{type:"ios-download-outline"}}),t._v(" 导出EXCEL")],1)],1)])],1),t._v(" "),o("div",{staticClass:"table_show"},[o("Table",{ref:"table",attrs:{border:"",columns:t.columns1,data:t.data1}})],1),t._v(" "),t.pageWin>=768?o("Row",{attrs:{gutter:16}},[o("Col",{attrs:{sm:5,xs:24}},[o("div",{staticClass:"total"},[t._v("共"+t._s(t.total)+"页")])]),t._v(" "),o("Col",{staticClass:"txt_right",attrs:{sm:19,xs:24}},[o("Page",{attrs:{total:t.total,"show-elevator":""},on:{"on-change":t.changePage}})],1)],1):o("Page",{attrs:{total:t.total,simple:""},on:{"on-change":t.changePage}})],1),t._v(" "),o("TabPane",{attrs:{label:"月汇总表",name:"tab2"}},[o("Row",{staticClass:"form_row"},[o("Col",{attrs:{sm:22,xs:24}},[o("Form",{staticClass:"downMenu",attrs:{model:t.formSel2}},[o("FormItem",[o("DatePicker",{staticClass:"datesel",attrs:{type:"month",value:t.formSel.selectTm,format:"yyyy-MM",placement:"bottom-start",placeholder:"借款日期"},on:{"on-change":t.dateChange}}),t._v(" "),o("Dropdown",{staticClass:"showMn",attrs:{trigger:"click"},on:{"on-click":t.showMenu4,"on-visible-change":t.orShow}},[o("Button",{class:{active:t.vs,chk:""!=t.formSel.typePd},attrs:{type:"ghost"}},[t._v("\n                                产品类型"),o("span",{domProps:{textContent:t._s(t.formSel.typePd)}}),t._v(" "),o("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"全部",selected:"全部"==t.formSel.typePd}},[t._v("全部")]),t._v(" "),o("DropdownItem",{attrs:{name:"0:消费贷",selected:0==t.formSel.typePd}},[t._v("消费贷")]),t._v(" "),o("DropdownItem",{attrs:{name:"1:现金贷",selected:1==t.formSel.typePd}},[t._v("现金贷")])],1)],1),t._v(" "),o("Button",{attrs:{type:"success"},on:{click:function(e){t.queryLoanStatMonth()}}},[t._v("查询")])],1)],1)],1),t._v(" "),o("Col",{attrs:{sm:2,xs:24}},[o("div",{staticClass:"float_right"},[o("Button",{attrs:{type:"success"},on:{click:function(e){t.exportData(2)}}},[o("Icon",{attrs:{type:"ios-download-outline"}}),t._v(" 导出EXCEL")],1)],1)])],1),t._v(" "),o("div",{staticClass:"table_show"},[o("Table",{ref:"table",attrs:{border:"",columns:t.columns2,data:t.data2}})],1),t._v(" "),t.pageWin>=768?o("Row",{attrs:{gutter:16}},[o("Col",{attrs:{sm:5,xs:24}},[o("div",{staticClass:"total"},[t._v("共"+t._s(t.total)+"页")])]),t._v(" "),o("Col",{staticClass:"txt_right",attrs:{sm:19,xs:24}},[o("Page",{attrs:{total:t.total,"show-elevator":""},on:{"on-change":t.changePage}})],1)],1):o("Page",{attrs:{total:t.total,simple:""},on:{"on-change":t.changePage}})],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=16.6a6e2448d26c2ec656d9.js.map