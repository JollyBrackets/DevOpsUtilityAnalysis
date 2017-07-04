webpackJsonp([1],[,function(e,l){},function(e,l,t){function n(e){t(6)}var i=t(7)(t(4),t(8),n,null,null);e.exports=i.exports},,function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={name:"app",computed:{allBasicYes:function(){return 3==this.$data.basic.filter(function(e){return 1==e.value}).length},allDetailClicked:function(){return 0==this.$data.detail.filter(function(e){return null==e.value}).length},score:function(){return Math.round(this.$data.detail.reduce(function(e,l){return e+=l.value||0},0)/45*100)}},data:function(){return{showResult:!1,basic:[{ref:"A1",question:"Wird Software entwickelt?",value:null},{ref:"A2",question:"Soll diese Software agil entwickelt werden?",value:null},{ref:"A3",question:"Darf DevOps verwendet werden?",info:"Z.B. dürfen Entwicklung und Betrieb ihr Wissen und ihre Arbeitsumgebungen teilen?",value:null}],detail:[{ref:"W1",question:"Wie lang ist die Projektphase?",info:"Phase vor GoLive",value:null,options:[{value:1,label:"< 3 Monate"},{value:3,label:"> 3 Monate"},{value:5,label:"> 6 Monate"}]},{ref:"W2",question:"Wie lang ist der Anwendungslebenszyklus?",info:"Phase in der auch weiterentwickelt wird",value:null,options:[{value:1,label:"0"},{value:3,label:"< 1 Jahr"},{value:5,label:">= 1 Jahr"}]},{ref:"W3",question:"Welche Lieferzyklen sind angedacht?",value:null,options:[{value:6,label:"< 2 Wochen"},{value:4,label:"< 4 Wochen"},{value:2,label:"> 4 Wochen"}]},{ref:"W4",question:"Von welchen Kunden sind Feedbacks gewünscht?",info:null,value:null,options:[{value:1,label:"von keinem"},{value:3,label:"vom Businesskunden"},{value:5,label:"auch vom Endkunden"}]},{ref:"W5",question:"Welche Korrekturzeit wird bei Fehlern erwartet?",info:null,value:null,options:[{value:2,label:"> 1 Tag"},{value:4,label:"< 1 Tag"},{value:6,label:"wenige Stunden (AC1)"}]},{ref:"W6",question:"Bedarf es eines Monitorings?",info:null,value:null,options:[{value:1,label:"Nein"},{value:2,label:"der Applikation (AC1, AC2)"},{value:3,label:"der Applikation und des Nutzerverhaltens"}]},{ref:"W7",question:"Bedarf es einer Versionskontrolle?",info:null,value:null,options:[{value:1,label:"Nein"},{value:2,label:"in der Entwicklung"},{value:3,label:"In der Entwicklung und in der Applikation"}]},{ref:"W8",question:"Welche Verfügbarkeit wird erwartet?",info:null,value:null,options:[{value:2,label:"n/a"},{value:4,label:"zu den Geschäftszeiten (AC2)"},{value:6,label:"24/7 (AC1)"}]},{ref:"W9",question:"Wie wird die Anwendung hinsichtlich der Sicherheitsrichtlinien eingestuft?",info:null,value:null,options:[{value:1,label:"niedrig (AC3, DC4)"},{value:3,label:"mittel (AC2, DC3)"},{value:5,label:"hoch (AC1, DC1, DC2)"}]},{ref:"W10",question:"Welche Wiederbereitschaftszeit wird erwartet?",info:null,value:null,options:[{value:6,label:"< 2 Stunden"},{value:4,label:"< 4 Stunden"},{value:2,label:"> 4 Stunden"}]}]}}}},function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n=t(0),i=t(2),a=t.n(i),s=t(3),u=t.n(s),o=t(1);t.n(o);n.default.config.productionTip=!1,n.default.use(u.a),n.default.material.registerTheme("default",{primary:"blue",accent:"red",warn:"red",background:"grey"}),new n.default({el:"#app",template:"<App/>",components:{App:a.a}})},function(e,l){},,function(e,l){e.exports={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{attrs:{id:"app"}},[t("md-toolbar",{staticClass:"md-accent",staticStyle:{"text-align":"center"}},[t("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[e._v("DevOps Nutzwertanalyse")])]),e._v(" "),t("md-layout",{attrs:{"md-gutter":""}},[t("md-layout",{attrs:{"md-flex-offset-medium":"10","md-flex-medium":"80","md-flex-offset-xlarge":"33","md-flex-xlarge":"33"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showResult,expression:"!showResult"}],staticStyle:{"padding-bottom":"50px"}},[t("h1",{staticClass:"md-display-1"},[e._v("Ausschlusskriterien")]),e._v(" "),e._l(e.basic,function(l){return t("div",[t("h1",{staticClass:"md-title"},[e._v("\n            "+e._s(l.ref)+": "+e._s(l.question)+"\n            "),t("sup",{staticStyle:{cursor:"pointer"}},[l.info?t("md-icon",[e._v("info")]):e._e(),e._v(" "),t("md-tooltip",{attrs:{"md-direction":"bottom"}},[e._v(e._s(l.info))])],1)]),e._v(" "),t("md-button-toggle",{staticClass:"md-primary",attrs:{"md-single":""}},[t("md-button",{on:{click:function(e){l.value=1}}},[e._v("Ja")]),e._v(" "),t("md-button",{on:{click:function(e){l.value=0}}},[e._v("Nein")])],1)],1)}),e._v(" "),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.allBasicYes,expression:"allBasicYes"}]},[t("h1",{staticClass:"md-display-1"},[e._v("Detailkriterien")]),e._v(" "),e._l(e.detail,function(l){return t("div",{key:l.ref},[t("h1",{staticClass:"md-title"},[e._v("\n              "+e._s(l.ref)+": "+e._s(l.question)+"\n              "),t("sup",{staticStyle:{cursor:"pointer"}},[l.info?t("md-icon",[e._v("info")]):e._e(),e._v(" "),t("md-tooltip",{attrs:{"md-direction":"bottom"}},[e._v(e._s(l.info))])],1)]),e._v(" "),t("md-button-toggle",{staticClass:"md-primary",attrs:{"md-single":""}},e._l(l.options,function(n){return t("md-button",{key:n.label,on:{click:function(e){l.value=n.value}}},[e._v("\n                "+e._s(n.label)+"\n              ")])}))],1)})],2)],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showResult,expression:"showResult"}],staticStyle:{width:"100%","text-align":"center"}},[t("h1",{staticClass:"md-display-4"},[e._v(" "+e._s(e.score)+"% ")]),e._v(" "),t("h1",{staticClass:"md-headline"},[e._v("NUTZWERT")])])])],1),e._v(" "),e.allDetailClicked?t("md-button",{staticClass:"md-fab",staticStyle:{position:"fixed",bottom:"20px",right:"20px"},on:{click:function(l){e.showResult=!e.showResult}}},[e.showResult?e._e():t("md-icon",[e._v("check")]),e._v(" "),e.showResult?t("md-icon",[e._v("close")]):e._e()],1):e._e()],1)},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.5dc7acbfb1576e525b24.js.map