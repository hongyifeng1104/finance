webpackJsonp([18],{"2mie":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sections"},[o("h1",[t._v("扣款记录")]),t._v(" "),o("div",{staticClass:"pl_body"},[o("Row",{staticClass:"form_row"},[o("Col",{attrs:{sm:22,xs:24}},[o("Form",{staticClass:"downMenu",attrs:{model:t.formSel}},[o("FormItem",[o("Input",{staticStyle:{display:"none"}}),t._v(" "),o("Input",{attrs:{icon:"ios-search",width:"120",placeholder:"借款编号/客户姓名/手机号"},on:{"on-enter":function(t){}},model:{value:t.formSel.input,callback:function(e){t.$set(t.formSel,"input",e)},expression:"formSel.input"}}),t._v(" "),o("Button",{attrs:{type:"primary"},on:{click:function(t){}}},[t._v("查询")]),t._v(" "),o("Dropdown",{staticClass:"showMn",attrs:{trigger:"click"},on:{"on-click":t.showMenu,"on-visible-change":t.orShow}},[o("Button",{class:{active:t.vs,chk:""!=t.formSel.moneyWho},attrs:{type:"ghost"}},[t._v("\n                              资金提供方"),o("span",{domProps:{textContent:t._s(t.formSel.moneyWho)}}),t._v(" "),o("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"全部",selected:"全部"==t.formSel.moneyWho}},[t._v("全部")]),t._v(" "),o("DropdownItem",{attrs:{name:"华金",selected:"华金"==t.formSel.moneyWho}},[t._v("华金")]),t._v(" "),o("DropdownItem",{attrs:{name:"中科诺",selected:"中科诺"==t.formSel.moneyWho}},[t._v("中科诺")])],1)],1),t._v(" "),o("Dropdown",{staticClass:"showMn",attrs:{trigger:"click"},on:{"on-click":t.showMenu1,"on-visible-change":t.orShow1}},[o("Button",{class:{active:t.vs1,chk:""!=t.formSel.selectTp},attrs:{type:"ghost"}},[t._v("\n                              扣款状态"),o("span",{domProps:{textContent:t._s(t.formSel.selectTp)}}),t._v(" "),o("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"全部",selected:"全部"==t.formSel.selectTp}},[t._v("全部")]),t._v(" "),o("DropdownItem",{attrs:{name:"处理中",selected:"1"==t.formSel.selectTp}},[t._v("处理中")]),t._v(" "),o("DropdownItem",{attrs:{name:"成功",selected:"2"==t.formSel.selectTp}},[t._v("成功")]),t._v(" "),o("DropdownItem",{attrs:{name:"失败",selected:"3"==t.formSel.selectTp}},[t._v("失败")])],1)],1)],1)],1)],1),t._v(" "),o("Col",{attrs:{sm:2,xs:24}},[o("div",{staticClass:"float_right"},[o("Button",{attrs:{type:"success"},on:{click:function(e){t.exportData(2)}}},[o("Icon",{attrs:{type:"ios-download-outline"}}),t._v(" 导出EXCEL")],1)],1)])],1),t._v(" "),o("div",{staticClass:"table_show"},[o("Table",{ref:"table",attrs:{border:"",columns:t.columns1,data:t.data1}})],1),t._v(" "),t.pageWin>=768?o("Row",{attrs:{gutter:16}},[o("Col",{attrs:{sm:5,xs:24}},[o("div",{staticClass:"total"},[t._v("共"+t._s(t.total)+"页")])]),t._v(" "),o("Col",{staticClass:"txt_right",attrs:{sm:19,xs:24}},[o("Page",{attrs:{total:t.total,"show-elevator":""},on:{"on-change":t.changePage}})],1)],1):o("Page",{attrs:{total:t.total,simple:""},on:{"on-change":t.changePage}})],1)])},staticRenderFns:[]}},"5MIz":function(t,e,o){var n=o("VU/8")(o("NqyZ"),o("2mie"),null,null,null);t.exports=n.exports},NqyZ:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sections",data:function(){return{tbWidth:100,total:100,vs:!1,vs1:!1,formSel:{input:"",moneyWho:"",selectTp:""},columns1:[{title:"客户姓名",key:"name"},{title:"手机号码",key:"userPh"},{title:"借款编号",key:"userId"},{title:"借款时间",key:"payTm",width:104},{title:"借款金额",key:"moneyOd"},{title:"实际放款金额",key:"moneyTu"},{title:"业务类型",key:"bankTp"},{title:"商户法人",key:"bankNm"},{title:"商户名称",key:"nameBs"},{title:"资金提供方",key:"moneyWho"},{title:"扣款金额",key:"moneyOut"},{title:"扣款原因",key:"outWhy"},{title:"扣款流水",key:"outNo"},{title:"扣款时间",key:"outTm",width:104},{title:"扣款平台",key:"outPl"},{title:"平台流水号",key:"comNo"},{title:"扣款状态",key:"outStatus"},{title:"备注",key:"outDesc"}],data1:[]}},created:function(){if($(window).width()<768){for(var t=this.columns1,e=0;e<t.length;e++)t[e].width=this.tbWidth;this.columns1=t}},computed:{pageWin:function(){return Math.max(window.innerWidth,document.documentElement.clientWidth,document.body.clientWidth)}},methods:{showMenu:function(t){this.formSel.moneyWho="全部"!=t&&""!=t?" : "+t:""},orShow:function(t){this.vs=t},showMenu1:function(t){this.formSel.selectTp="全部"!=t&&""!=t?" : "+t:""},orShow1:function(t){this.vs1=t},exportData:function(t){2===t&&this.$refs.table.exportCsv({filename:"排序和过滤后的数据",original:!1})},changePage:function(){},countOk:function(t){}}}}});
//# sourceMappingURL=18.b007a02f79bfa4524615.js.map