(this.webpackJsonpsoccerreact16=this.webpackJsonpsoccerreact16||[]).push([[0],{28:function(e,n,t){e.exports=t(40)},33:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(21),o=t.n(r),c=(t(20),t(33),t(44)),l=t(45),s=t(17),d=t(47),u=t(48),m="team",g=t(3),f=t.n(g),h=t(22),v=t.n(h),p=function(e){var n,t=e.rank,a=e.team,r=e.updateTeamname,o=Object(u.a)({item:{team:a,type:m},end:function(n,t){if(t.didDrop()){var a=t.getItem(),i=t.getDropResult();e.swapPositions(a.team.id,i.team.id)}}}),c=f()("col-md-12","btn","text-bold",1===(n=t)?"tabellenfuehrerClass tabelleClass":n<=3?"championsLeagueClass tabelleClass":n<=6?"europaLeagueClass tabelleClass":n<=15?"mittelfeldClass tabelleClass":16===n?"relegationClass tabelleClass":"abstiegClass tabelleClass");return i.a.createElement("div",{className:c,style:{cursor:"pointer"},ref:o[1]},i.a.createElement(v.a,{onChange:function(e){r(a,e.target.value)},className:"textPointer",html:a.name,autoFocus:!0,maxLength:200,disabled:!a.editing}))},b=function(e){var n=e.team,t=e.rank,a=e.updateTeamname,r=e.swapPositions,o=Object(d.a)({accept:m,drop:function(){return{team:n}}});return i.a.createElement("div",{ref:o[1]},i.a.createElement(p,{team:n,rank:t,updateTeamname:a,swapPositions:r}))},w=t(42),C=t(25),E=function(e,n){return n.findIndex((function(n){return n.id===e}))+1},k=function(e,n){return n.find((function(n){return n.id===e}))},B=[{name:"Borussia M\xf6nchengladbach",editing:!0,id:"BMG"},{name:"Borussia Dortmund",editing:!0,id:"BVB"},{name:"FC Bayern M\xfcnchen",editing:!0,id:"FCB"},{name:"VFL Wolfsburg",editing:!0,id:"VFL"},{name:"Bayer Leverkusen",editing:!0,id:"B04"},{name:"FC Schalke 04",editing:!0,id:"S04"},{name:"Hertha BSC Berlin",editing:!0,id:"BSC"},{name:"1. FC K\xf6ln",editing:!0,id:"1FC"},{name:"FC Ingolstadt",editing:!0,id:"FCI"},{name:"Darmstadt 98",editing:!0,id:"D98"},{name:"Hamburger SV",editing:!0,id:"HSV"},{name:"Eintracht Frankfurt",editing:!0,id:"SGE"},{name:"Werder Bremen",editing:!0,id:"SVW"},{name:"Hoffenheim",editing:!0,id:"SAP"},{name:"FC Augsburg",editing:!0,id:"FCA"},{name:"Hannover 96",editing:!0,id:"H96"},{name:"Mainz 05",editing:!0,id:"M05"},{name:"VFB Stuttgart",editing:!0,id:"VFB"}],S=t(43),F=t(46),y=function(e,n){var t=function(e,n){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(a){return console.log(a),n}}(e,n);return[t,function(n){try{var a=n instanceof Function?n(t):n;window.localStorage.setItem(e,JSON.stringify(a))}catch(i){console.log(i)}}]},L=function(){var e=y("LEAGUE_TABLE",B),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(t),c=Object(s.a)(o,2),l=c[0],d=c[1],u=function(e,n){d(function(e,n,t){var a=t.slice(),i=E(e,a),r=E(n,a),o=k(e,a),c=k(n,a);return a[r-1]=o,a[i-1]=c,a}(e,n,l))},m=function(e,n){d(function(e,n,t){var a=t.slice(),i=E(e.id,a);return e.name=n,a[i-1]=e,a}(e,n,l))};Object(a.useEffect)((function(){r(l)}));var g=l.map((function(e,n){return i.a.createElement(b,{team:e,rank:n+1,key:n,swapPositions:u,updateTeamname:m})}));return i.a.createElement(w.a,{backend:C.a},i.a.createElement(S.a,{md:6},i.a.createElement(F.a,{bg:"dark"},i.a.createElement(F.a.Header,null,i.a.createElement(F.a.Title,null,"Ligatabelle zum Selberstecken")),i.a.createElement(F.a.Body,null,g))))},O=function(){return i.a.createElement("div",{className:"index"},i.a.createElement(c.a,null,i.a.createElement(l.a,null,i.a.createElement(L,null))))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(39);o.a.render(i.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/soccerReact16",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/soccerReact16","/service-worker.js");j?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):T(e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.76967017.chunk.js.map