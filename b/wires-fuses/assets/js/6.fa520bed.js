(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{405:function(s,t,e){"use strict";var a=e(409),n=a.b.reactiveProp;t.a={extends:a.a,mixins:[n],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},408:function(s,t,e){var a={"./af":278,"./af.js":278,"./ar":279,"./ar-dz":280,"./ar-dz.js":280,"./ar-kw":281,"./ar-kw.js":281,"./ar-ly":282,"./ar-ly.js":282,"./ar-ma":283,"./ar-ma.js":283,"./ar-sa":284,"./ar-sa.js":284,"./ar-tn":285,"./ar-tn.js":285,"./ar.js":279,"./az":286,"./az.js":286,"./be":287,"./be.js":287,"./bg":288,"./bg.js":288,"./bm":289,"./bm.js":289,"./bn":290,"./bn.js":290,"./bo":291,"./bo.js":291,"./br":292,"./br.js":292,"./bs":293,"./bs.js":293,"./ca":294,"./ca.js":294,"./cs":295,"./cs.js":295,"./cv":296,"./cv.js":296,"./cy":297,"./cy.js":297,"./da":298,"./da.js":298,"./de":299,"./de-at":300,"./de-at.js":300,"./de-ch":301,"./de-ch.js":301,"./de.js":299,"./dv":302,"./dv.js":302,"./el":303,"./el.js":303,"./en-SG":304,"./en-SG.js":304,"./en-au":305,"./en-au.js":305,"./en-ca":306,"./en-ca.js":306,"./en-gb":307,"./en-gb.js":307,"./en-ie":308,"./en-ie.js":308,"./en-il":309,"./en-il.js":309,"./en-nz":310,"./en-nz.js":310,"./eo":311,"./eo.js":311,"./es":312,"./es-do":313,"./es-do.js":313,"./es-us":314,"./es-us.js":314,"./es.js":312,"./et":315,"./et.js":315,"./eu":316,"./eu.js":316,"./fa":317,"./fa.js":317,"./fi":318,"./fi.js":318,"./fo":319,"./fo.js":319,"./fr":320,"./fr-ca":321,"./fr-ca.js":321,"./fr-ch":322,"./fr-ch.js":322,"./fr.js":320,"./fy":323,"./fy.js":323,"./ga":324,"./ga.js":324,"./gd":325,"./gd.js":325,"./gl":326,"./gl.js":326,"./gom-latn":327,"./gom-latn.js":327,"./gu":328,"./gu.js":328,"./he":329,"./he.js":329,"./hi":330,"./hi.js":330,"./hr":331,"./hr.js":331,"./hu":332,"./hu.js":332,"./hy-am":333,"./hy-am.js":333,"./id":334,"./id.js":334,"./is":335,"./is.js":335,"./it":336,"./it-ch":337,"./it-ch.js":337,"./it.js":336,"./ja":338,"./ja.js":338,"./jv":339,"./jv.js":339,"./ka":340,"./ka.js":340,"./kk":341,"./kk.js":341,"./km":342,"./km.js":342,"./kn":343,"./kn.js":343,"./ko":344,"./ko.js":344,"./ku":345,"./ku.js":345,"./ky":346,"./ky.js":346,"./lb":347,"./lb.js":347,"./lo":348,"./lo.js":348,"./lt":349,"./lt.js":349,"./lv":350,"./lv.js":350,"./me":351,"./me.js":351,"./mi":352,"./mi.js":352,"./mk":353,"./mk.js":353,"./ml":354,"./ml.js":354,"./mn":355,"./mn.js":355,"./mr":356,"./mr.js":356,"./ms":357,"./ms-my":358,"./ms-my.js":358,"./ms.js":357,"./mt":359,"./mt.js":359,"./my":360,"./my.js":360,"./nb":361,"./nb.js":361,"./ne":362,"./ne.js":362,"./nl":363,"./nl-be":364,"./nl-be.js":364,"./nl.js":363,"./nn":365,"./nn.js":365,"./pa-in":366,"./pa-in.js":366,"./pl":367,"./pl.js":367,"./pt":368,"./pt-br":369,"./pt-br.js":369,"./pt.js":368,"./ro":370,"./ro.js":370,"./ru":371,"./ru.js":371,"./sd":372,"./sd.js":372,"./se":373,"./se.js":373,"./si":374,"./si.js":374,"./sk":375,"./sk.js":375,"./sl":376,"./sl.js":376,"./sq":377,"./sq.js":377,"./sr":378,"./sr-cyrl":379,"./sr-cyrl.js":379,"./sr.js":378,"./ss":380,"./ss.js":380,"./sv":381,"./sv.js":381,"./sw":382,"./sw.js":382,"./ta":383,"./ta.js":383,"./te":384,"./te.js":384,"./tet":385,"./tet.js":385,"./tg":386,"./tg.js":386,"./th":387,"./th.js":387,"./tl-ph":388,"./tl-ph.js":388,"./tlh":389,"./tlh.js":389,"./tr":390,"./tr.js":390,"./tzl":391,"./tzl.js":391,"./tzm":392,"./tzm-latn":393,"./tzm-latn.js":393,"./tzm.js":392,"./ug-cn":394,"./ug-cn.js":394,"./uk":395,"./uk.js":395,"./ur":396,"./ur.js":396,"./uz":397,"./uz-latn":398,"./uz-latn.js":398,"./uz.js":397,"./vi":399,"./vi.js":399,"./x-pseudo":400,"./x-pseudo.js":400,"./yo":401,"./yo.js":401,"./zh-cn":402,"./zh-cn.js":402,"./zh-hk":403,"./zh-hk.js":403,"./zh-tw":404,"./zh-tw.js":404};function n(s){var t=r(s);return e(t)}function r(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=r,s.exports=n,n.id=408},424:function(s,t,e){},489:function(s,t,e){"use strict";var a=e(424);e.n(a).a},503:function(s,t,e){"use strict";e.r(t);var a={components:{LineChart:e(405).a},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var s=[2.13,2.12,2.109,2.099,2.088,2.078,2.067,2.057,2.046,2.036,2.025,2.015,2.004,1.994,1.983,1.973,1.962,1.952,1.941,1.931,1.92],t=document.getElementById("leadacid").value,e=[],a=0;a<21;a++)e.push({x:100-5*a,y:s[a]*t});var n=[3.392,3.314,3.309,3.308,3.304,3.296,3.283,3.275,3.271,3.268,3.265,3.264,3.262,3.252,3.24,3.226,3.213,3.19,3.177,3.132,2.833],r=document.getElementById("lfp").value,i=[];for(a=0;a<21;a++)i.push({x:100-5*a,y:n[a]*r});var j=[4.195,4.134,4.088,4.055,4.025,3.992,3.961,3.923,3.882,3.857,3.837,3.818,3.802,3.786,3.763,3.744,3.725,3.701,3.683,3.587,2.75],l=document.getElementById("nmc").value,o=[];for(a=0;a<21;a++)o.push({x:100-5*a,y:j[a]*l});this.chartData={datasets:[{label:"Lead acid",pointRadius:0,borderWidth:2,borderColor:"#6b6b6b",backgroundColor:"#6b6b6b",fill:!1,data:e},{label:"LiFePO4",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:i},{label:"Li-ion NMC",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:o}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"State of charge (%)"},gridLines:{display:!0},ticks:{reverse:!0}}],yAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"Battery voltage (V)"},ticks:{beginAtZero:!0},gridLines:{display:!0}}]},legend:{usePointStyle:!0},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}}}},n=(e(489),e(33)),r=Object(n.a)(a,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticStyle:{overflow:"auto"}},[e("line-chart",{attrs:{"chart-data":s.chartData,options:s.chartOptions}}),s._v(" "),e("p"),e("div",{staticClass:"left"},[s._v("Lead-acid:")]),s._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"leadacid",step:"1",value:"6",width:"30"},on:{change:function(t){return s.updateGraph()}}}),s._v(" cells in series")]),s._v(" "),e("div",{staticClass:"left"},[s._v("LiFePO4: ")]),s._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"lfp",step:"1",value:"4"},on:{change:function(t){return s.updateGraph()}}}),s._v(" cells in series")]),s._v(" "),e("div",{staticClass:"left"},[s._v("Li-ion NMC: ")]),s._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"nmc",step:"1",value:"3"},on:{change:function(t){return s.updateGraph()}}}),s._v(" cells in series")]),s._v(" "),e("p")],1)}),[],!1,null,null,null);t.default=r.exports}}]);