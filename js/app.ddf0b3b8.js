(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],f=0,u=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Covid19_tracker_project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},2913:function(t,e,a){"use strict";a("6b4a")},"325b":function(t,e,a){"use strict";a("844a")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"48f9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"bus",(function(){return dt}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavigationBar"),a("router-view")],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[s("img",{staticClass:"d-inline-block align-top",attrs:{src:a("cf05"),width:"53",height:"53",alt:"Logo"}}),s("router-link",{staticClass:"font navbar-brand",attrs:{to:"/"}},[t._v("Covid19 Tracker India")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"NavigationBar"},l=c,d=(a("325b"),a("2877")),f=Object(d["a"])(l,i,o,!1,null,null,null),u=f.exports,h=(a("ba8c"),{name:"App",components:{NavigationBar:u}}),m=h,b=(a("034f"),Object(d["a"])(m,r,n,!1,null,null,null)),p=b.exports,j=a("2f62");s["a"].use(j["a"]);var v,g,_=new j["a"].Store({state:{stateName:"mh"},getters:{},mutations:{},actions:{}}),y=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"background app"}},[a("div",{staticClass:"modal-body row"},[a("div",{staticClass:"col-md-6"},[a("Table")],1),a("div",{staticClass:"col-md-6"},[a("Chart"),a("RangeFilter")],1)])])},C=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container caard"},[a("table",{staticClass:"table table-striped table-rounded"},[t._m(0),a("tbody",t._l(t.newJsonListOfDictionaries,(function(e){return a("tr",{key:e.state},[a("td",{staticClass:"clickable-cell border px-4 py-2 text-blue-600 hover:text-blue-800",on:{click:function(a){return t.getStateName(e.state)}}},[t._v(" "+t._s(t.stateAcronymToFullName[e.state])+" ")]),a("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.confirmed))]),a("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.recovered))])])})),0)])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("State / Union Territory")]),a("th",{attrs:{scope:"col"}},[t._v("Confirmed")]),a("th",{attrs:{scope:"col"}},[t._v("Recovered")])])])}],N=a("b85c"),x=(a("96cf"),a("1da1")),O=a("bc3a"),R=a.n(O),S={name:"Table",data:function(){return{originalJsonData:[],stateName:"mh",states:["an","ap","ar","as","br","ch","ct","dd","dl","dn","ga","gj","hp","hr","jh","jk","ka","kl","la","ld","mh","ml","mn","mp","mz","nl","or","pb","py","rj","sk","tg","tn","tr","tt","un","up","ut","wb"],totalConfirmedList:[],totalRecoveredList:[],states_daily_list:[],tempNumber:0,sum:0,newJsonListOfDictionaries:[],stateAcronymToFullName:{an:"Andaman and Nicobar Islands",ap:"Andhra Pradesh",ar:"Arunachal Pradesh",as:"Assam",br:"Bihar",ch:"Chandigarh",ct:"Chhattisgarh",dd:"Daman and Diu",dl:"Delhi",dn:"Dadra and Nagar Haveli",ga:"Goa",gj:"Gujarat",hp:"Himachal Pradesh",hr:"Haryana",jh:"Jharkhand",jk:"Jammu and Kashmir",ka:"Karnataka",kl:"Kerala",la:"Ladakh",ld:"Lakshadweep",mh:"Maharashtra",ml:"Meghalaya",mn:"Manipur",mp:"Madhya Pradesh",mz:"Mizoram",nl:"Nagaland",or:"Odisha (formerly known as Orissa)",pb:"Punjab",py:"Puducherry (formerly known as Pondicherry)",rj:"Rajasthan",sk:"Sikkim",tg:"Telangana",tn:"Tamil Nadu",tr:"Tripura",tt:"All India Total",un:"Unknown",up:"Uttar Pradesh",ut:"Uttarakhand",wb:"West Bengal"}}},mounted:function(){var t=this;R.a.get("https://data.covid19india.org/states_daily.json").then((function(e){t.originalJsonData=e.data,t.getTotalConfirmed(),t.getTotalRecovered(),t.createNewJsonListOfDictionaries()})).catch((function(t){console.log(t)}))},methods:{fetchData:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://data.covid19india.org/states_daily.json");case 3:a=e.sent,t.covidData=a.data.statewise,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTotalConfirmed:function(){this.states_daily_list=this.originalJsonData["states_daily"];var t,e=Object(N["a"])(this.states);try{for(e.s();!(t=e.n()).done;){var a=t.value;this.sum=0;for(var s=0;s<this.states_daily_list.length;s+=3)this.tempNumber=parseInt(this.states_daily_list[s][a]),this.sum=this.sum+this.tempNumber;this.totalConfirmedList.push(this.sum)}}catch(r){e.e(r)}finally{e.f()}},getTotalRecovered:function(){this.states_daily_list=this.originalJsonData["states_daily"];var t,e=Object(N["a"])(this.states);try{for(e.s();!(t=e.n()).done;){var a=t.value;this.sum=0;for(var s=1;s<this.states_daily_list.length;s+=3)this.tempNumber=parseInt(this.states_daily_list[s][a]),this.sum=this.sum+this.tempNumber;this.totalRecoveredList.push(this.sum)}}catch(r){e.e(r)}finally{e.f()}},createNewJsonListOfDictionaries:function(){for(var t=0;t<this.states.length;t+=1)this.newJsonListOfDictionaries.push({state:this.states[t],confirmed:this.totalConfirmedList[t],recovered:this.totalRecoveredList[t]})},getStateName:function(t){this.stateName=t,this.$store.state.stateName=this.stateName,dt.$emit("changeIt",this.stateName)}}},T=S,L=(a("76a5"),Object(d["a"])(T,w,D,!1,null,null,null)),z=L.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"caard"},[a("h1",[t._v("State / UT: "+t._s(t.stateAcronymToFullName[this.stateNewName]))]),t.loaded?a("line-chart",{key:t.componentKey,attrs:{chartdata:t.chartdata}}):t._e()],1)},F=[],A=a("1fca"),I={extends:A["a"],props:{chartdata:{type:Object,default:null},options:{type:Object,default:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,min:0}}]}}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},M=I,E=Object(d["a"])(M,v,g,!1,null,null,null),J=E.exports,$={components:{LineChart:J},created:function(){var t=this;dt.$on("changeIt",(function(e){t.stateNewName=e,t.fullStateName=t.stateAcronymToFullName[e],console.log(t.stateNewName),t.getConfirmedCasesforSpecificState(),t.getRecoveredCasesforSpecificState(),t.chartdata={type:"line",labels:t.dates,datasets:[{label:"Confirmed Cases",backgroundColor:"#00FF00",data:t.confirmed_cases_list},{label:"Recovered Cases",backgroundColor:"#0000FF",data:t.recovered_cases_list}]},t.forceRerender()})),dt.$on("UpdateNewDates",(function(e){t.fromDate=e[0],t.toDate=e[1],t.filteredResults(),t.chartdata={type:"line",labels:t.filteredDatesList,datasets:[{label:"Confirmed Cases",backgroundColor:"#00FF00",data:t.filteredConfirmedCasesList},{label:"Recovered Cases",backgroundColor:"#0000FF",data:t.filteredRecoveredCasesList}]},t.forceRerender()}))},name:"Chart",data:function(){return{loaded:!1,componentKey:0,dates:[],filteredDatesList:[],filteredConfirmedCasesList:[],filteredRecoveredCasesList:[],stateNewName:"mh",fullStateName:"Maharashtra",states_daily_list:[],confirmed_cases_list:[],recovered_cases_list:[],chartData:null,fromDate:"",toDate:"",fromDateIndex:0,toDateIndex:0,stateAcronymToFullName:{an:"Andaman and Nicobar Islands",ap:"Andhra Pradesh",ar:"Arunachal Pradesh",as:"Assam",br:"Bihar",ch:"Chandigarh",ct:"Chhattisgarh",dd:"Daman and Diu",dl:"Delhi",dn:"Dadra and Nagar Haveli",ga:"Goa",gj:"Gujarat",hp:"Himachal Pradesh",hr:"Haryana",jh:"Jharkhand",jk:"Jammu and Kashmir",ka:"Karnataka",kl:"Kerala",la:"Ladakh",ld:"Lakshadweep",mh:"Maharashtra",ml:"Meghalaya",mn:"Manipur",mp:"Madhya Pradesh",mz:"Mizoram",nl:"Nagaland",or:"Odisha (formerly known as Orissa)",pb:"Punjab",py:"Puducherry (formerly known as Pondicherry)",rj:"Rajasthan",sk:"Sikkim",tg:"Telangana",tn:"Tamil Nadu",tr:"Tripura",tt:"All India Total",un:"Unknown",up:"Uttar Pradesh",ut:"Uttarakhand",wb:"West Bengal"}}},mounted:function(){var t=this;this.loaded=!1;try{R.a.get("https://data.covid19india.org/states_daily.json").then((function(e){t.originalJsonData=e.data,t.getDateYMD(),t.getConfirmedCasesforSpecificState(),t.getRecoveredCasesforSpecificState(),t.chartdata={type:"line",labels:t.dates,datasets:[{label:"Confirmed Cases",backgroundColor:"#00FF00",data:t.confirmed_cases_list},{label:"Recovered Cases",backgroundColor:"#0000FF",data:t.recovered_cases_list}]},t.loaded=!0})).catch((function(t){console.log(t)}))}catch(e){console.log(e)}},methods:{fetchChartData:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://data.covid19india.org/states_daily.json");case 3:a=e.sent,t.chartData=a.data.cases_time_series,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching chart data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},forceRerender:function(){this.componentKey+=1},filteredResults:function(){for(var t=0;t<this.dates.length;t++)this.dates[t]===this.fromDate&&(this.fromDateIndex=t);for(var e=0;e<this.dates.length;e++)this.dates[e]===this.toDate&&(this.toDateIndex=e);this.filteredDatesList=[],this.filteredConfirmedCasesList=[],this.filteredRecoveredCasesList=[];for(var a=this.fromDateIndex;a<=this.toDateIndex;a++)this.filteredDatesList.push(this.dates[a]),this.filteredConfirmedCasesList.push(this.confirmed_cases_list[a]),this.filteredRecoveredCasesList.push(this.recovered_cases_list[a])},getDateYMD:function(){this.states_daily_list=this.originalJsonData["states_daily"];for(var t=0;t<this.states_daily_list.length;t+=3)this.dates.push(this.states_daily_list[t]["dateymd"])},getConfirmedCasesforSpecificState:function(){this.confirmed_cases_list=[];for(var t=0;t<this.states_daily_list.length;t+=3)this.confirmed_cases_list.push(parseInt(this.states_daily_list[t][this.stateNewName]))},getRecoveredCasesforSpecificState:function(){this.recovered_cases_list=[];for(var t=1;t<this.states_daily_list.length;t+=3)this.recovered_cases_list.push(parseInt(this.states_daily_list[t][this.stateNewName]))}}},U=$,B=(a("e3e9"),Object(d["a"])(U,P,F,!1,null,null,null)),K=B.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"caaard"},[a("br"),a("div",{staticClass:"container-fluid pt-4",staticStyle:{border:"1px solid #cecece","border-radius":"15px"}},[a("h3",{staticStyle:{"text-align":"center"}},[t._v("Set Date Range")]),t._m(0),a("br"),t._m(1),a("br"),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.getTheValues}},[t._v(" Click Me")]),a("br"),a("br")])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("label",{attrs:{for:"from"}},[t._v("From :")]),t._v(" --\x3e "),a("input",{attrs:{type:"date",id:"from",name:"from",min:"2020-03-14",max:"2021-08-04"}}),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("label",{attrs:{for:"to"}},[t._v("To :")]),t._v(" --\x3e "),a("input",{attrs:{type:"date",id:"to",name:"to",min:"2020-03-15",max:"2021-08-05"}}),a("br")])])}],G={name:"RangeFilter",data:function(){return{fromVar:"2020-03-20",toVar:"2020-04-09"}},methods:{getTheValues:function(){this.fromVar=document.getElementById("from").value,this.toVar=document.getElementById("to").value,dt.$emit("UpdateNewDates",[this.fromVar,this.toVar])}}},q=G,W=(a("82ac"),Object(d["a"])(q,V,H,!1,null,null,null)),Y=W.exports,Z={name:"HomePage",components:{Table:z,Chart:K,RangeFilter:Y}},Q=Z,X=(a("2913"),Object(d["a"])(Q,k,C,!1,null,"1e533d62",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("This is the about page")])},at=[],st={},rt=st,nt=Object(d["a"])(rt,et,at,!1,null,null,null),it=nt.exports;s["a"].use(y["a"]);var ot=[{path:"/",component:tt},{path:"/about",component:it}],ct=new y["a"]({mode:"hash",routes:ot}),lt=ct,dt=new s["a"];s["a"].config.productionTip=!1,new s["a"]({router:lt,store:_,render:function(t){return t(p)}}).$mount("#app")},"694f":function(t,e,a){},"6b4a":function(t,e,a){},"76a5":function(t,e,a){"use strict";a("694f")},"82ac":function(t,e,a){"use strict";a("48f9")},"844a":function(t,e,a){},"85ec":function(t,e,a){},a0dc:function(t,e,a){},ba8c:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.b5a6126b.png"},e3e9:function(t,e,a){"use strict";a("a0dc")}});
//# sourceMappingURL=app.ddf0b3b8.js.map