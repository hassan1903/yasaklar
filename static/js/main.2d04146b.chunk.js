(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(a){a.exports={cities:[{label:"Adana",value:1,status:2},{label:"Ad\u0131yaman",value:2,status:4},{label:"Afyon",value:3,status:2},{label:"A\u011fr\u0131",value:4,status:1},{label:"Amasya",value:5,status:4},{label:"Ankara",value:6,status:2},{label:"Antalya",value:7,status:3},{label:"Artvin",value:8,status:3},{label:"Ayd\u0131n",value:9,status:2},{label:"Bal\u0131kesir",value:10,status:4},{label:"Bilecik",value:11,status:3},{label:"Bing\xf6l",value:12,status:1},{label:"Bitlis",value:13,status:1},{label:"Bolu",value:14,status:3},{label:"Burdur",value:15,status:4},{label:"Bursa",value:16,status:2},{label:"\xc7anakkale",value:17,status:3},{label:"\xc7ank\u0131r\u0131",value:18,status:2},{label:"\xc7orum",value:19,status:2},{label:"Denizli",value:20,status:2},{label:"Diyarbak\u0131r",value:21,status:1},{label:"Edirne",value:22,status:4},{label:"Elaz\u0131\u011f",value:23,status:2},{label:"Erzincan",value:24,status:2},{label:"Erzurum",value:25,status:2},{label:"Eski\u015fehir",value:26,status:2},{label:"Gaziantep",value:27,status:2},{label:"Giresun",value:28,status:4},{label:"G\xfcm\xfc\u015fhane",value:29,status:4},{label:"Hakkari",value:30,status:1},{label:"Hatay",value:31,status:2},{label:"Isparta",value:32,status:2},{label:"Mersin",value:33,status:3},{label:"\u0130stanbul",value:34,status:3},{label:"\u0130zmir",value:35,status:3},{label:"Kars",value:36,status:2},{label:"Kastamonu",value:37,status:2},{label:"Kayseri",value:38,status:3},{label:"K\u0131rklareli",value:39,status:3},{label:"K\u0131r\u015fehir",value:40,status:2},{label:"Kocaeli",value:41,status:3},{label:"Konya",value:42,status:4},{label:"K\xfctahya",value:43,status:3},{label:"Malatya",value:44,status:2},{label:"Manisa",value:45,status:2},{label:"Kahramanmara\u015f",value:46,status:2},{label:"Mardin",value:47,status:1},{label:"Mu\u011fla",value:48,status:3},{label:"Mu\u015f",value:49,status:1},{label:"Nev\u015fehir",value:50,status:2},{label:"Ni\u011fde",value:51,status:3},{label:"Ordu",value:52,status:4},{label:"Rize",value:53,status:4},{label:"Sakarya",value:54,status:4},{label:"Samsun",value:55,status:4},{label:"Siirt",value:56,status:1},{label:"Sinop",value:57,status:4},{label:"Sivas",value:58,status:2},{label:"Tekirda\u011f",value:59,status:3},{label:"Tokat",value:60,status:4},{label:"Trabzon",value:61,status:4},{label:"Tunceli",value:62,status:2},{label:"\u015eanl\u0131urfa",value:63,status:1},{label:"U\u015fak",value:64,status:1},{label:"Van",value:65,status:1},{label:"Yozgat",value:66,status:2},{label:"Zonguldak",value:67,status:3},{label:"Aksaray",value:68,status:4},{label:"Bayburt",value:69,status:2},{label:"Karaman",value:70,status:3},{label:"K\u0131r\u0131kkale",value:71,status:3},{label:"Batman",value:72,status:1},{label:"\u015e\u0131rnak",value:73,status:1},{label:"Bart\u0131n",value:74,status:2},{label:"Ardahan",value:75,status:3},{label:"I\u011fd\u0131r",value:76,status:1},{label:"Yalova",value:77,status:3},{label:"Karab\xfck",value:78,status:2},{label:"Kilis",value:79,status:3},{label:"Osmaniye",value:80,status:4},{label:"D\xfczce",value:81,status:3}]}},123:function(a,e,l){a.exports=l(195)},181:function(a,e,l){},195:function(a,e,l){"use strict";l.r(e);var t=l(25),s=l.n(t),r=l(46),i=l(39),n=l(0),u=l.n(n),c=l(20),o=l.n(c),k=(l(130),l(198)),b=l(199),m=l(201),d=l(110),v=l(77),f=l(82),h=l(132),y=function(){var a=Object(r.a)(s.a.mark(function a(e){var l;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=Object(f.a)({},e),a.next=3,fetch("https://covid19.saglik.gov.tr/?lang=tr-TR",{mode:"cors"}).then(function(a){return a.text()}).then(function(a){var t=h.load(a);e.cities.forEach(function(a,e){var s=t("[data-adi="+a.label+"]").get(1);if(s&&s.attribs&&s.attribs.id){var r=s.attribs.id;l.cities[e].status=parseInt(r.replace("color_",""),10)}})});case 3:return a.abrupt("return",l);case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),p=function(){var a=Object(r.a)(s.a.mark(function a(e){var l;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=Object(f.a)({},e),a.next=3,fetch("https://covid19.saglik.gov.tr/?lang=tr-TR",{mode:"cors"}).then(function(a){return a.text()}).then(function(a){var t=h.load(a);e.cities.forEach(function(a,e){var s=t("[data-adi="+a.label+"]").get(0);if(s&&s.attribs&&s.attribs["data-detay"]){var r=parseInt(s.attribs["data-detay"],10),i=l.cities[e].status;switch(!0){case r>=0&&r<20:i=1;break;case r>=20&&r<50:i=2;break;case r>=50&&r<100:i=3;break;case r>=100:i=4}l.cities[e].status=i}})});case 3:return a.abrupt("return",l);case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),g=function(){var a=Object(r.a)(s.a.mark(function a(){var e;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://ipapi.co/json/",{mode:"cors"}).then(function(a){return a.json()}).then(function(a){a&&"TR"===a.country&&a.region_code&&(e=a.region_code)});case 2:return a.abrupt("return",e);case 3:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}(),C=y,z=l(59),E=l.n(z),O=(l(180),l(181),k.a.TabPane),w=function(){var a=Object(n.useState)(0),e=Object(i.a)(a,2),l=e[0],t=e[1],c=Object(n.useState)(0),o=Object(i.a)(c,2),f=o[0],h=o[1],y=Object(n.useState)(Object.assign({},JSON.parse(JSON.stringify(d)))),z=Object(i.a)(y,2),w=z[0],x=(z[1],Object(n.useState)(Object.assign({},JSON.parse(JSON.stringify(w))))),N=Object(i.a)(x,2),S=N[0],j=(N[1],Object(n.useState)({value:-1,label:"",status:-1})),L=Object(i.a)(j,2),A=L[0],K=L[1],F=Object(n.useState)({value:-1,label:"",status:-1}),T=Object(i.a)(F,2),H=T[0],R=T[1],M=1,_=1,P=[{key:1,value:"#0071c1",label:"D\xfc\u015f\xfck riskli b\xf6lge"},{key:2,value:"#f0e513",label:"Orta riskli b\xf6lge"},{key:3,value:"#f8931f",label:"Y\xfcksek riskli b\xf6lge"},{key:4,value:"#df1a23",label:"\xc7ok y\xfcksek riskli b\xf6lge"}],Y=P.find(function(a){return a.key===l});return Object(n.useEffect)(Object(r.a)(s.a.mark(function a(){var e;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p(S);case 2:return a.sent,a.next=5,C(w);case 5:return a.sent,a.next=8,g();case 8:e=a.sent,console.log(">>>newRegionCode:",e),h(e);case 11:case"end":return a.stop()}},a)})),[]),Object(n.useEffect)(function(){if(f){console.log(">>>regionCodeUseEffect:",f);var a=w.cities.find(function(a){return a.value===parseInt(f,10)}),e=S.cities.find(function(a){return a.value===parseInt(f,10)});K(a),R(e),t(a.status)}},[f]),u.a.createElement("div",{className:"App"},u.a.createElement(k.a,{defaultActiveKey:"1",onChange:function(a){if("2"===a){var e=S.cities.find(function(a){return a.label===H.label});t(e.status),R(e)}else{var l=w.cities.find(function(a){return a.label===A.label});t(l.status),K(l)}}},u.a.createElement(O,{tab:"Mevcut k\u0131s\u0131tlama",key:"1"},u.a.createElement("h4",{className:"title"},E()().locale("tr").format("LL")+" tarihi illere g\xf6re g\xfcncel k\u0131s\u0131tlama kurallar\u0131"),u.a.createElement("div",{style:{paddingTop:20,paddingBottom:50,textAlign:"center"}},u.a.createElement(B,{fillColor:Y?Y.value:"#000"})),u.a.createElement("div",{className:"container"},u.a.createElement(b.a,{showSearch:!0,style:{width:"100%"},placeholder:"\u015eehir Se\xe7iniz",onChange:function(a){var e=w.cities.find(function(e){return e.value===a});t(e.status),K(e)},options:w.cities,value:A.value>0?A.value:void 0,optionFilterProp:"children",filterOption:function(a,e){return e.label.toLocaleUpperCase("tr-TR").indexOf(a.toLocaleUpperCase("tr-TR"))>=0}}),0!==l&&A?u.a.createElement("h2",{className:"title",style:{color:P[l-1].value}},P[l-1].label):u.a.createElement("div",{className:"loader"},u.a.createElement(m.a,{size:"large"})),0!==l?u.a.createElement("ul",null,v.rules.map(function(a){return a.ruleId===M&&a.status.indexOf(l)>-1?(M++,u.a.createElement("li",{key:"tab1"+M,style:{paddingBottom:10},className:"rule-item-"+a.icon},a.label)):null})):null,0!==l&&A?u.a.createElement("div",{className:"footercontainer"},u.a.createElement("h5",{className:"titleH5WithoutPadding"},"Bilgilendirme ama\xe7l\u0131d\u0131r, ger\xe7e\u011fi yans\u0131tmayabilir, sorumluluk kabul edilmez."),u.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=Ya%C5%9Fad%C4%B1%C4%9F%C4%B1m%20%C5%9Fehrin%20risk%20grubunu%20ve%20ge%C3%A7erli%20olan%20k%C4%B1s%C4%B1tlamalar%C4%B1%20%C3%B6%C4%9Frendim.%20Sende%20%C3%B6%C4%9Frenmek%20istiyorsan%3B&url=https%3A%2F%2Fhassan1903.github.io%2Fkisitlamalar",className:"tweetbutton"},u.a.createElement(I,null),u.a.createElement("span",{className:"tweetlabel"},"Tweet")),u.a.createElement("h5",{className:"titleH5"},"Lovely developed by Hasan K\xfcr\u015fat K\xfc\xe7\xfck\xf6zta\u015f")):null)),u.a.createElement(O,{tab:"Tahmini k\u0131s\u0131tlama",key:"2"},u.a.createElement("h4",{className:"title"},E()().locale("tr").format("LL")+" tarihi illere g\xf6re tahmini k\u0131s\u0131tlama kurallar\u0131"),u.a.createElement("div",{style:{paddingTop:20,paddingBottom:50,textAlign:"center"}},u.a.createElement(B,{fillColor:Y?Y.value:"#000"})),u.a.createElement("div",{className:"container"},u.a.createElement(b.a,{showSearch:!0,style:{width:"100%"},placeholder:"\u015eehir Se\xe7iniz",onChange:function(a){var e=S.cities.find(function(e){return e.value===a});t(e.status),R(e)},options:S.cities,value:H.value>0?H.value:void 0,optionFilterProp:"children",filterOption:function(a,e){return e.label.toLocaleUpperCase("tr-TR").indexOf(a.toLocaleUpperCase("tr-TR"))>=0}}),0!==l&&H?u.a.createElement("h2",{className:"title",style:{color:P[l-1].value}},P[l-1].label):null,0!==l?u.a.createElement("ul",null,v.rules.map(function(a){return a.ruleId===_&&a.status.indexOf(l)>-1?(_++,u.a.createElement("li",{key:"tab2"+_,style:{paddingBottom:10},className:"rule-item-"+a.icon},a.label)):null})):null,0!==l&&H?u.a.createElement("div",{className:"footercontainer"},u.a.createElement("h5",{className:"titleH5WithoutPadding"},"Bilgilendirme ama\xe7l\u0131d\u0131r, ger\xe7e\u011fi yans\u0131tmayabilir, sorumluluk kabul edilmez."),u.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=Ya%C5%9Fad%C4%B1%C4%9F%C4%B1m%20%C5%9Fehrin%20risk%20grubunu%20ve%20ge%C3%A7erli%20olan%20k%C4%B1s%C4%B1tlamalar%C4%B1%20%C3%B6%C4%9Frendim.%20Sende%20%C3%B6%C4%9Frenmek%20istiyorsan%3B&url=https%3A%2F%2Fhassan1903.github.io%2Fkisitlamalar",className:"tweetbutton"},u.a.createElement(I,null),u.a.createElement("span",{className:"tweetlabel"},"Tweet")),u.a.createElement("h5",{className:"titleH5"},"Lovely developed by Hasan K\xfcr\u015fat K\xfc\xe7\xfck\xf6zta\u015f")):null))))},B=function(a){return u.a.createElement("svg",{width:"56px",height:"90px",viewBox:"0 0 56 90",version:"1.1"},u.a.createElement("defs",null),u.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},u.a.createElement("g",{id:"noun_bulb_1912567",fill:"#000000",fillRule:"nonzero"},u.a.createElement("path",{d:"M38.985,68.873 L17.015,68.873 C15.615,68.873 14.48,70.009 14.48,71.409 C14.48,72.809 15.615,73.944 17.015,73.944 L38.986,73.944 C40.386,73.944 41.521,72.809 41.521,71.409 C41.521,70.009 40.386,68.873 38.985,68.873 Z",id:"Shape"}),u.a.createElement("path",{d:"M41.521,78.592 C41.521,77.192 40.386,76.057 38.986,76.057 L17.015,76.057 C15.615,76.057 14.48,77.192 14.48,78.592 C14.48,79.993 15.615,81.128 17.015,81.128 L38.986,81.128 C40.386,81.127 41.521,79.993 41.521,78.592 Z",id:"Shape"}),u.a.createElement("path",{d:"M18.282,83.24 C17.114,83.24 16.793,83.952 17.559,84.83 L21.806,89.682 C21.961,89.858 22.273,90 22.508,90 L33.492,90 C33.726,90 34.039,89.858 34.193,89.682 L38.44,84.83 C39.207,83.952 38.885,83.24 37.717,83.24 L18.282,83.24 Z",id:"Shape"}),u.a.createElement("path",{d:"M16.857,66.322 L39.142,66.322 C40.541,66.322 41.784,65.19 42.04,63.814 C44.63,49.959 55.886,41.575 55.886,27.887 C55.887,12.485 43.401,0 28,0 C12.599,0 0.113,12.485 0.113,27.887 C0.113,41.575 11.369,49.958 13.959,63.814 C14.216,65.19 15.458,66.322 16.857,66.322 Z",id:"Shape",fill:a.fillColor}))))},I=function(a){return u.a.createElement("svg",{version:"1.1",id:"Logo",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"14.88px",height:"12.24px",viewBox:"0 0 248 204"},u.a.createElement("g",{id:"Logo_1_"},u.a.createElement("path",{id:"blue_background",fill:a.fillColor?a.fillColor:"#fff",d:"M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04 C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66 c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64 c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76 c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26 c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"})))},x=document.getElementById("root");o.a.render(u.a.createElement(w,null),x)},77:function(a){a.exports={rules:[{ruleId:1,label:"Haftasonu sabah 05:00 ila ak\u015fam 21:00 aras\u0131 soka\u011fa \xe7\u0131kabilirsiniz.",status:[1,2],icon:"check"},{ruleId:1,label:"Haftasonu sadece Cumartesi g\xfcn\xfc sabah 05:00 ila ak\u015fam 21:00 aras\u0131 soka\u011fa \xe7\u0131kabilirsiniz. Pazar g\xfcn\xfc yasaklar devam ediyor.",status:[3,4],icon:"cross"},{ruleId:2,label:"Haftan\u0131n her g\xfcn\xfc ak\u015fam 21:00 ile sabah 05:00 aras\u0131ndaki soka\u011fa \xe7\u0131kma s\u0131n\u0131rlamas\u0131 devam ediyor.",status:[1,2,3,4],icon:"cross"},{ruleId:3,label:"65 ya\u015f ve \xfczeri ile 20 ya\u015f alt\u0131 ki\u015filer i\xe7in getirilen soka\u011fa \xe7\u0131kma s\xfcre k\u0131s\u0131tlamas\u0131 kalkt\u0131 di\u011fer ya\u015f grubu ile ayn\u0131 kurallara dahil oldu.",status:[1,2],icon:"check"},{ruleId:3,label:"65 ya\u015f ve \xfczeri ile 20 ya\u015f alt\u0131 ki\u015filer i\xe7in getirilen soka\u011fa \xe7\u0131kma s\xfcreleri 3 saatten 4 saate y\xfckseldi. Ayr\u0131ca 65 ya\u015f ve \xfczeri ki\u015filer 10.00-14.00 saatleri aras\u0131nda, 20 ya\u015f alt\u0131 ki\u015filer ise 14.00-18.00 saatleri aras\u0131nda soka\u011fa \xe7\u0131kabilecek.",status:[3,4],icon:"cross"},{ruleId:4,label:"Okul \xf6ncesi e\u011fitim kurumlar\u0131 ve \xf6zel e\u011fitim okullar\u0131 tam zamanl\u0131 y\xfcz y\xfcze e\u011fitim verecek.",status:[1,2,3,4],icon:"check"},{ruleId:5,label:"Birle\u015ftirilmi\u015f s\u0131n\u0131fl\u0131 okullar ve k\xf6y vb. seyrek n\xfcfuslu yerlerdeki okullar y\xfcz y\xfcze e\u011fitime tam zamanl\u0131 devam edecek.",status:[1,2,3,4],icon:"check"},{ruleId:6,label:"\u0130lkokullar 2 g\xfcn okulda seyreltilmi\u015f s\u0131n\u0131flarda y\xfcz y\xfcze, 3 g\xfcn uzaktan e\u011fitim alacak.",status:[1,2,3,4],icon:"check"},{ruleId:7,label:"Ortaokul 5, 6, 7.s\u0131n\u0131flar 2 g\xfcn okulda seyreltilmi\u015f s\u0131n\u0131flarda y\xfcz y\xfcze, 3 g\xfcn uzaktan e\u011fitim alacak.",status:[1,2],icon:"check"},{ruleId:7,label:"Ortaokul 5, 6, 7.s\u0131n\u0131flar tam zamanl\u0131 uzaktan e\u011fitime devam edecek.",status:[3,4],icon:"cross"},{ruleId:8,label:"Ortaokul 8.s\u0131n\u0131flar haftada 12 ila 22 saat olacak \u015fekilde seyreltilmi\u015f y\xfcz y\xfcze e\u011fitim alacak.",status:[1,2,3,4],icon:"check"},{ruleId:9,label:"Haz\u0131rl\u0131k, 9, 10, 11.s\u0131n\u0131flarda haftada 2 g\xfcn seyreltilmi\u015f s\u0131n\u0131flarda y\xfcz y\xfcze e\u011fitim alacak.",status:[1,2],icon:"check"},{ruleId:9,label:"Haz\u0131rl\u0131k, 9, 10, 11.s\u0131n\u0131flar tam zamanl\u0131 uzaktan e\u011fitime devam edecek.",status:[3,4],icon:"cross"},{ruleId:10,label:"12.s\u0131n\u0131flar haftada 16 ila 24 saat olacak \u015fekilde planlanan seyreltilmi\u015f s\u0131n\u0131flarda y\xfcz y\xfcze e\u011fitim alacak.",status:[1,2,3,4],icon:"check"},{ruleId:11,label:"Destekleme ve yeti\u015ftirme kurslar\u0131 y\xfcz y\xfcze e\u011fitime devam edecek.",status:[1,2,3,4],icon:"check"},{ruleId:12,label:"S\u0131navlar seyreltilmi\u015f s\u0131n\u0131flarda yap\u0131lacak.",status:[1,2,3,4],icon:"check"},{ruleId:13,label:"Restoran, lokanta, kafetarya, tatl\u0131c\u0131, pastane ve k\u0131raathane gibi yerler 07:00-19:00 saatleri aras\u0131nda %50 kapasite ile a\xe7\u0131k olacak. Yeme-i\xe7me yerleri 19:00-21.00 saatleri aras\u0131nda paket servisi veya gel-al \u015feklinde, 21.00-24.00 saatleri aras\u0131nda ise sadece paket servis \u015feklinde hizmet verebilecekler.",status:[1,2,3],icon:"check"},{ruleId:13,label:"Restoran, lokanta, kafetarya, tatl\u0131c\u0131, pastane ve k\u0131raathane gibi yerler kapal\u0131 olacak. Yeme i\xe7me yerleri, 10.00-20.00 saatleri aras\u0131nda paket servisi veya gel-al \u015feklinde, 20.00-24.00 saatleri aras\u0131nda ise sadece paket servis \u015feklinde hizmet verebilecek olup ayr\u0131ca i\u015fyeri i\xe7erisinde hizmet sunamayacaklar.",status:[4],icon:"cross"},{ruleId:14,label:"Hal\u0131 saha, y\xfczme havuzu vb tesisler giri\u015flerde HES kodu kullan\u0131lmas\u0131 ve seyirci/refakat\xe7i/misafir al\u0131nmamas\u0131 kayd\u0131yla 09:00-19:00 aras\u0131nda a\xe7\u0131k olacak.",status:[1,2],icon:"check"},{ruleId:14,label:"Hal\u0131 saha, y\xfczme havuzu vb tesisler kapal\u0131 olacak.",status:[3,4],icon:"cross"},{ruleId:15,label:"Kamu kurulu\u015flar\u0131 a\xe7\u0131k olacak.",status:[1,2,3,4],icon:"check"},{ruleId:16,label:"Nikah ve nikah merasimi \u015feklindeki d\xfc\u011f\xfcnler, ki\u015fi ba\u015f\u0131na minimum 8 m2 alan ay\u0131rmak, kat\u0131l\u0131mc\u0131 say\u0131s\u0131 100\u2019\xfc ge\xe7memek ve 1 saatle s\u0131n\u0131rl\u0131 olmak \xfczere yap\u0131labilecek.",status:[1,2],icon:"check"},{ruleId:16,label:"Nikah ve nikah merasimi \u015feklindeki d\xfc\u011f\xfcnler, ki\u015fi ba\u015f\u0131na minimum 8 m2 alan ay\u0131rmak, kat\u0131l\u0131mc\u0131 say\u0131s\u0131 50\u2019yi ge\xe7memek ve 1 saatle s\u0131n\u0131rl\u0131 olmak \xfczere yap\u0131labilecek.",status:[3,4],icon:"cross"},{ruleId:17,label:"Genel kurullar 300 ki\u015fiye kadar serbest olacak.",status:[1,2,3],icon:"check"},{ruleId:17,label:"Genel kurullar yasak olacak.",status:[4],icon:"cross"}]}}},[[123,2,1]]]);
//# sourceMappingURL=main.2d04146b.chunk.js.map