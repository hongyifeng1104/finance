webpackJsonp([9],{"2l2P":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sections"},[a("h1",[t._v("还款处理")]),t._v(" "),a("div",{staticClass:"pl_body",staticStyle:{"text-align":"center",margin:"0 auto"}},[a("Form",{staticClass:"downMenu blackChk",attrs:{model:t.formSel,onsubmit:"return false;"}},[a("FormItem",[a("Input",{attrs:{icon:"ios-search",placeholder:"借款编号/手机号/姓名"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.chkClick(e)}},model:{value:t.formSel.input,callback:function(e){t.$set(t.formSel,"input",e)},expression:"formSel.input"}}),t._v(" "),a("Button",{attrs:{id:"queryButton",type:"success"},on:{click:t.chkClick}},[t._v("查询")])],1)],1),t._v(" "),1==t.vs?a("div",[a("div",{staticClass:"table_show",attrs:{model:t.loanDetail}},[a("table",{staticClass:"headerTb smallTb",attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",{staticClass:"txt_center"},[t._v("借款编号")]),a("td",[t._v(" "+t._s(t.loanDetail.loanNo))]),t._v(" "),a("td",{staticClass:"txt_center"},[t._v("手机号")]),a("td",[t._v(t._s(t.loanDetail.custMobile))])]),t._v(" "),a("tr",[a("td",{staticClass:"txt_center"},[t._v("客户姓名")]),a("td",[t._v(t._s(t.loanDetail.custName))]),t._v(" "),a("td",{staticClass:"txt_center"},[t._v("产品名称")]),a("td",[t._v(t._s(t.loanDetail.product))])]),t._v(" "),a("tr",[a("td",{staticClass:"txt_center"},[t._v("借款金额")]),a("td",[t._v("￥"+t._s(t.loanDetail.loanAmount))]),t._v(" "),a("td",{staticClass:"txt_center"}),a("td")])])]),t._v(" "),a("div",{staticClass:"table_show",staticStyle:{"margin-top":"40px"}},[a("Row",{staticStyle:{"margin-bottom":"10px"}},[a("Col",{attrs:{span:"12"}},[a("h3",{staticClass:"txt_left"},[t._v("还款计划")])]),a("Col",{attrs:{span:"12"}},[a("Button",{staticClass:"float_right",attrs:{type:"primary"},on:{click:t.preRepayShow}},[t._v("提前结清")])],1)],1),t._v(" "),a("Table",{attrs:{border:"",columns:t.columns1,data:t.data1}})],1)]):t._e()],1),t._v(" "),a("Modal",{attrs:{title:"还款处理"},on:{"on-ok":t.currentRepay},model:{value:t.model1,callback:function(e){t.model1=e},expression:"model1"}},[a("Form",{attrs:{model:t.formPay,"label-width":90}},[a("FormItem",{attrs:{label:"还款时间"}},[a("span",[a("DatePicker",{attrs:{value:t.formPay.time,format:"yyyy-MM-dd",placement:"bottom-start",placeholder:"还款时间"},on:{"on-change":t.dateChange}})],1)]),t._v(" "),a("FormItem",{attrs:{label:"结清金额"}},[a("Icon",{attrs:{type:"social-yen"}}),a("Input",{staticClass:"moneyIpt",attrs:{placeholder:"结清金额"},model:{value:t.formPay.money,callback:function(e){t.$set(t.formPay,"money",e)},expression:"formPay.money"}})],1),t._v(" "),a("FormItem",{attrs:{label:"线下还款渠道"}},[a("Select",{attrs:{placeholder:"请选择"},model:{value:t.formPay.orget,callback:function(e){t.$set(t.formPay,"orget",e)},expression:"formPay.orget"}},[a("Option",{attrs:{value:"001"}},[t._v("上海银行")]),t._v(" "),a("Option",{attrs:{value:"002"}},[t._v("建设银行")]),t._v(" "),a("Option",{attrs:{value:"003"}},[t._v("微信")])],1)],1)],1)],1),t._v(" "),a("Modal",{attrs:{title:"提前结清"},on:{"on-ok":t.preRepaySquare},model:{value:t.model2,callback:function(e){t.model2=e},expression:"model2"}},[a("Form",{attrs:{model:t.formRepay,"label-width":90}},[a("FormItem",{attrs:{label:"结清时间"}},[a("span",[a("DatePicker",{attrs:{value:t.formRepay.time,format:"yyyy-MM-dd",placement:"bottom-start",placeholder:"还款时间"},on:{"on-change":t.datePreChange}})],1)]),t._v(" "),a("FormItem",{attrs:{label:"结清金额"}},[a("Icon",{attrs:{type:"social-yen"}}),a("Input",{staticClass:"moneyIpt",attrs:{placeholder:"结清金额"},model:{value:t.formRepay.money,callback:function(e){t.$set(t.formRepay,"money",e)},expression:"formRepay.money"}})],1),t._v(" "),a("FormItem",{attrs:{label:"线下还款渠道"}},[a("Select",{attrs:{placeholder:"请选择"},model:{value:t.formRepay.orget,callback:function(e){t.$set(t.formRepay,"orget",e)},expression:"formRepay.orget"}},[a("Option",{attrs:{value:"001"}},[t._v("上海银行")]),t._v(" "),a("Option",{attrs:{value:"002"}},[t._v("建设银行")]),t._v(" "),a("Option",{attrs:{value:"003"}},[t._v("微信")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},FeBl:function(t,e){var a=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=a)},mvHQ:function(t,e,a){t.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(t,e,a){var n=a("FeBl"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},xoSa:function(t,e,a){var n=a("VU/8")(a("zDoj"),a("2l2P"),null,null,null);t.exports=n.exports},zDoj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),o=a.n(n);e.default={name:"sections",data:function(){var t=this;return{model1:!1,model2:!1,formSel:{input:""},vs:!1,operatorPersonId:0,totalMoney:0,prePlanStage:"",planStatus:"",channelCode:"",acctId:"",flowNo:"",formPay:{time:[],money:"300.00",orget:"0",orgot:"0"},loanDetail:{},formRepay:{time:[],money:"300.00",moneyLose:"",orget:"0"},columns1:[{title:"期数",width:80,key:"planStage"},{title:"应还时间",key:"planLtm",width:160},{title:"应还总额",width:100,key:"planTotal"},{title:"应还本金",width:100,key:"planPrp"},{title:"应还利息",width:100,key:"planInt"},{title:"应还服务费",width:100,key:"planSfe"},{title:"应还罚息",width:100,key:"planPin"},{title:"应还违约金",width:100,key:"dfltAmount"},{title:"实还时间",key:"realTime",width:160},{title:"实还总额",width:100,key:"repAmount"},{title:"实还本金",width:100,key:"realPrp"},{title:"实还利息",width:100,key:"realInt"},{title:"实还服务费",width:100,key:"realSfe"},{title:"实还罚息",width:100,key:"realPin"},{title:"实还违约金",width:100,key:"dfltAmount"},{title:"状态",width:100,key:"status"},{title:"操作",key:"action",width:100,fixed:"right",align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.show(a.index)}}},"还款处理")])}}],data1:[]}},computed:{pageWin:function(){return Math.max(window.innerWidth,document.documentElement.clientWidth,document.body.clientWidth)}},methods:{chkClick:function(){this.findPlan(),this.vs=!0},dateChange:function(t){this.formPay.time=t},datePreChange:function(t){this.formRepay.time=t},show:function(t){if(4==this.planStatus)return void alert("有还款正在处理中,不能还款");if(this.data1[t].planStage!=this.prePlanStage)return void alert("请选择正确的还款期数,不能还本期");var e=new Date;this.formPay.time=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),this.model1=!0},findPlan:function(){var t=this;t.operatorPersonId=0,t.totalMoney=0,t.prePlanStage="",t.planStatus="",t.channelCode="",t.acctId="",t.flowNo="";var e={value:t.formSel.input};this.axios.post("/detail/findRepayDetailFromCore",o()(e),{headers:{"Content-Type":"application/json"}}).then(function(e){if(1==e.data.resCode){var a=0;e.data.result.repayDetail.forEach(function(e){var n=0;0==e.status?e.status="计划未开始":1==e.status?(""==t.prePlanStage&&(t.prePlanStage=e.planStage),e.status="未到期",n=e.planPrp+e.dfltAmount-e.repAmount):2==e.status?(""==t.prePlanStage&&(t.prePlanStage=e.planStage),e.status="本期待还",n=e.planPrp+e.planInt+e.planPin+e.planSfe-e.repAmount):3==e.status?(""==t.prePlanStage&&(t.prePlanStage=e.planStage),e.status="逾期待还",n=e.planPrp+e.planInt+e.planPin+e.planSfe-e.repAmount):4==e.status?(t.planStatus=4,e.status="还款中",n=e.planPrp+e.planInt+e.planPin+e.planSfe-e.repAmount):5==e.status?e.status="已还清":6==e.status&&(e.status="合同取消"),a+=n},this),t.totalMoney=a,t.data1=e.data.result.repayDetail,t.loanDetail=e.data.result.loanDetail,t.acctId=e.data.result.loanDetail.acctId,t.channelCode=e.data.result.loanDetail.channelCode,t.flowNo=e.data.result.loanDetail.flowNo}}).catch(function(t){this.$Message.warning("系统异常")})},check:function(){return""==this.custId?(alert("数据有误,请联系我们"),!1):""==this.prePlanStage?(alert("期数数据有误,请联系我们"),!1):"0"==this.formPay.orget?(alert("请选择线下还款渠道"),!1):void 0},currentRepay:function(){if(""==this.custId)return alert("数据有误,请联系我们"),!1;if(""==this.prePlanStage)return alert("期数数据有误,请联系我们"),!1;if("0"==this.formPay.orget)return alert("请选择线下还款渠道"),!1;var t=this.acctId,e=new Number(100*this.formPay.money),a=e.toFixed(0),n=this.prePlanStage,l=this.formPay.time,r=this.operatorPersonId,i=this.flowNo,s={};s.acctId=t,s.amount=a,s.planStage=n,s.repayDate=l,s.operator=r,s.flowNo=i,s.platNo=this.formPay.orget,s.channel=this.channelCode,s.type=0,s.remark="",this.axios.post("/detail/offlineRepay",o()(s),{headers:{"Content-Type":"application/json"}}).then(function(t){1==t.data.resCode?(alert("线下还款成功"),$("#queryButton").click(),this.model1=!1):(alert("线下还款失败,失败原因是:"+t.data.message),this.model1=!1)}).catch(function(t){this.$Message.warning("系统异常")})},preRepayShow:function(){var t=this;if(4==this.planStatus)return alert("有还款正在处理中,不能还款"),!1;if(1==t.totalMoney)return alert("数据有问题,请联系我们"),!1;this.formRepay.money=t.totalMoney;var e=new Date;this.formRepay.time=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),this.model2=!0},preRepaySquare:function(){if(""==this.custId)return alert("数据有误,请联系我们"),!1;if(""==this.prePlanStage)return alert("期数数据有误,请联系我们"),!1;if("0"==this.formRepay.orget)return alert("请选择线下还款渠道"),!1;var t=this.acctId,e=new Number(100*this.formRepay.money),a=e.toFixed(0),n=this.prePlanStage,l=this.formRepay.time,r=this.operatorPersonId,i=this.flowNo,s={};s.acctId=t,s.amount=a,s.planStage=n,s.repayDate=l,s.operator=r,s.flowNo=i,s.platNo=this.formRepay.orget,s.channel=this.channelCode,s.type=0,s.remark="",this.axios.post("/detail/offlinePreRepay",o()(s),{headers:{"Content-Type":"application/json"}}).then(function(t){1==t.data.resCode?(alert("线下提前还清成功"),$("#queryButton").click(),this.model1=!1):(alert("线下提前还清失败,失败原因是:"+t.data.message),this.model1=!1)}).catch(function(t){this.$Message.warning("系统异常")})}}}}});
//# sourceMappingURL=9.6f6283acd97d71ed0c63.js.map