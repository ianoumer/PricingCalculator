(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(353)},167:function(e,t,a){},168:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(50),s=a.n(r),l=(a(167),a(22)),o=a(23),c=a(25),m=a(24),u=a(26),d=(a(168),a(355)),p=a(356),h=a(10),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).yaxis=function(){if(a.state.currentWidth)return i.a.createElement(h.i,{type:"number",tickFormatter:function(e){return new Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(e)},allowDecimals:!1})},a.state={currentWidth:window.innerWidth},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){this.setState({currentWidth:window.innerWidth>=768}),this.yaxis()}},{key:"render",value:function(){var e=[{name:"Timesheet rounding savings",label:this.props.timesheet_savings},{name:"Roster optimisation",label:this.props.roster_optimisation},{name:"Reduction in rostering admin time",label:this.props.reduction_time},{name:"Elimination of manual award interpretation",label:this.props.elimination_award}],t=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.payload;return i.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},i.a.createElement(h.f,{dy:16,fontSize:14,textAnchor:"middle",verticalAnchor:"start",width:80},n.value))}}]),t}(n.Component),a=i.a.createElement("div",{className:"barChart"},i.a.createElement(h.e,{width:"100%",height:"100%"},i.a.createElement(h.b,{width:400,height:300,data:e},i.a.createElement(h.g,{content:i.a.createElement(function(e){e.payload;var t=e.label;return e.active?i.a.createElement("div",{className:"staff-tooltip"},i.a.createElement("p",null,t),i.a.createElement("p",null,function(e){return"Timesheet rounding savings"===e?"Estimated savings from using Tanda\u2019s Smart Timesheet Rounding that ensures staff are paid only for the hours they work with built in photo verification.":"Roster optimisation"===e?"Expected savings from having live, award interpreted wage data and overtime flags while building the roster.":"Reduction in rostering admin time"===e?"Admin savings by utilising Tanda\u2019s simple online rostering solution with features like smart templates, forecasting and auto shift-filling.":"Elimination of manual award interpretation"===e?"Cost savings gained by removing the need for manual award interpretation with Tanda\u2019s award interpreter handling pay calculations.":void 0}(t))):null},null)}),i.a.createElement(h.c,{stroke:"#efefef",vertical:!1}),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},i.a.createElement("stop",{offset:"0%",stopColor:"#F76B1C",stopOpacity:1}),i.a.createElement("stop",{offset:"24.36%",stopColor:"#F9A842",stopOpacity:1}),i.a.createElement("stop",{offset:"100%",stopColor:"#FAD961",stopOpacity:1}))),i.a.createElement(h.a,{type:"monotone",dataKey:"label",fill:"url(#colorUv)",barSize:60},i.a.createElement(h.d,{position:"top",dataKey:"label",formatter:function(e){return new Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(e)}})),i.a.createElement(h.h,{type:"category",dataKey:"name",interval:0,width:40,tick:i.a.createElement(t,null)}),this.yaxis())));return i.a.createElement("div",null,a)}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).gradient=function(e){var t=.094*e;document.getElementById("gradient").style.width=t+"%"},a.handleSwitch=function(e){var t=a.state.pay_period,n=a.state.business_size,i=52===t?26:52;a.setState({pay_period:i},function(){return a.getROI(n)}),52===i?(document.getElementById("fortnightly").style.color="#9B9B9B",document.getElementById("weekly").style.color="#fff"):(document.getElementById("fortnightly").style.color="#fff",document.getElementById("weekly").style.color="#9B9B9B")},a.handleChange=function(e){var t=e.target;t instanceof HTMLInputElement&&(a.gradient(t.value),a.setState({business_size:t.value},function(){a.getROI(t.value)}))},a.getTimesheetSavings=function(e){var t=Math.pow(166.941216*e,1.05);return a.setState({timesheet_savings:t}),t},a.getRosterOptimisation=function(e){var t=299.8944*e;return a.setState({roster_optimisation:t}),t},a.getReductionTime=function(e){var t=.05*a.state.pay_period*e*32.04;return a.setState({reduction_time:t}),t},a.getEliminationAward=function(e){var t=32.04*e*.2*a.state.pay_period;return a.setState({elimination_award:t}),t},a.getAnnualSavings=function(e){var t=a.getTimesheetSavings(e)+a.getRosterOptimisation(e)+a.getReductionTime(e)+a.getEliminationAward(e);return a.setState({annual_savings:t}),t},a.getAnnualSubscriptionCost=function(e){var t=10*e*12;return a.setState({annual_subscription:t}),t},a.getROI=function(e){var t=a.getAnnualSubscriptionCost(e),n=a.getAnnualSavings(e)/t*100;return a.setState({roi:n}),n},a.state={checked:!1,pay_period:26,business_size:50},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.gradient(this.state.business_size),this.getROI(this.state.business_size)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"staff"},i.a.createElement(d.a,{className:"mb-5 pb-3"},i.a.createElement(p.a,{lg:"6",md:"6"},i.a.createElement("p",{className:"title desktop"},"Calculate your Return of Investment (ROI)"),i.a.createElement("p",{className:"title mobile"},"Calculate your ROI")),i.a.createElement(p.a,{lg:"6",md:"6"},i.a.createElement("label",{id:"switch",className:"switch"},i.a.createElement("input",{type:"checkbox",defaultChecked:!0,value:this.state.pay_period,onClick:this.handleSwitch}),i.a.createElement("span",{className:"slider round"}),i.a.createElement("span",{id:"weekly"},"Weekly"),i.a.createElement("span",{id:"fortnightly"},"Fortnightly")))),i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"2",md:"2",sm:"12"},i.a.createElement("p",{className:"label"},"Staff Count"),i.a.createElement("input",{type:"number",className:"staff-count",min:"1",step:"1",value:this.state.business_size,onChange:this.handleChange})),i.a.createElement(p.a,{lg:"8",md:"8",sm:"12"},i.a.createElement("span",{id:"gradient"}),i.a.createElement("input",{value:this.state.business_size,className:"w-100",type:"range",min:"1",max:"1000",onChange:this.handleChange})),i.a.createElement(p.a,{lg:"2",md:"2",sm:"2"},i.a.createElement("p",{className:"label-right"},"1000+"))),i.a.createElement(g,{timesheet_savings:Number(this.state.timesheet_savings).toFixed(2).toLocaleString(),roster_optimisation:Number(this.state.roster_optimisation).toFixed(2).toLocaleString(),reduction_time:Number(this.state.reduction_time).toFixed(2).toLocaleString(),elimination_award:Number(this.state.elimination_award).toFixed(2).toLocaleString()})),i.a.createElement("div",{className:"annual"},i.a.createElement(d.a,null,i.a.createElement(p.a,{md:"4",sm:"12"},i.a.createElement("p",{className:"title"},"Annual Savings"),i.a.createElement("p",{className:"result"},"$",Number(this.state.annual_savings).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),i.a.createElement(p.a,{md:"4",sm:"12",className:"middle"},i.a.createElement("p",{className:"title"},"Annual Subscription Cost"),i.a.createElement("p",{className:"result"},"$",Number(this.state.annual_subscription).toFixed(2).toLocaleString().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),i.a.createElement(p.a,{md:"4",sm:"12"},i.a.createElement("p",{className:"title"},"ROI"),i.a.createElement("p",{className:"result"},Math.round(Number(this.state.roi).toLocaleString()),"%")))))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(352);s.a.render(i.a.createElement(v,null),document.getElementById("roiCal")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,2]]]);
//# sourceMappingURL=main.cad68fdf.chunk.js.map