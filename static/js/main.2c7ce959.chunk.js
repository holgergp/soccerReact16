(this.webpackJsonpsoccerreact16=this.webpackJsonpsoccerreact16||[]).push([[0],{42:function(e,n,t){e.exports=t(56)},47:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(30),o=t.n(r),c=(t(21),t(47),t(60)),s=t(61),l=t(19),u=t(9),d="team",g=t(3),m=t.n(g),f=t(31),v=t.n(f),h={beginDrag:e=>({sourceId:e.team.id}),endDrag(e,n){if(n.didDrop()){var t=n.getItem(),a=n.getDropResult();e.swapPositions(t.sourceId,a.id)}}},p=Object(u.DragSource)(d,h,(function(e,n){return{connectDragSource:e.dragSource(),isDragging:n.isDragging()}}))((function(e){var n,t=e.rank,a=e.team,r=e.updateTeamname,o=e.connectDragSource,c=m()("col-md-12","btn","text-bold",1===(n=t)?"tabellenfuehrerClass tabelleClass":n<=3?"championsLeagueClass tabelleClass":n<=6?"europaLeagueClass tabelleClass":n<=15?"mittelfeldClass tabelleClass":16===n?"relegationClass tabelleClass":"abstiegClass tabelleClass");return o(i.a.createElement("div",{className:c,style:{cursor:"pointer"}},i.a.createElement(v.a,{onChange:function(e){r(a,e.target.value)},className:"textPointer",html:a.name,autoFocus:!0,maxLength:200,disabled:!a.editing})))})),b={drop:e=>e.team},w=Object(u.DropTarget)(d,b,(function(e,n){return{connectDropTarget:e.dropTarget(),isOver:n.isOver(),item:n.getItem()}}))((function(e){var n=e.team,t=e.rank,a=e.updateTeamname,r=e.swapPositions;return(0,e.connectDropTarget)(i.a.createElement("div",null,i.a.createElement(p,{team:n,rank:t,updateTeamname:a,swapPositions:r})))})),C=t(58),E=t(35),k=function(e,n){return n.findIndex((function(n){return n.id===e}))+1},S=function(e,n){return n.find((function(n){return n.id===e}))},B=[{name:"Borussia M\xf6nchengladbach",editing:!0,id:"BMG"},{name:"Borussia Dortmund",editing:!0,id:"BVB"},{name:"FC Bayern M\xfcnchen",editing:!0,id:"FCB"},{name:"VFL Wolfsburg",editing:!0,id:"VFL"},{name:"Bayer Leverkusen",editing:!0,id:"B04"},{name:"FC Schalke 04",editing:!0,id:"S04"},{name:"Hertha BSC Berlin",editing:!0,id:"BSC"},{name:"1. FC K\xf6ln",editing:!0,id:"1FC"},{name:"FC Ingolstadt",editing:!0,id:"FCI"},{name:"Darmstadt 98",editing:!0,id:"D98"},{name:"Hamburger SV",editing:!0,id:"HSV"},{name:"Eintracht Frankfurt",editing:!0,id:"SGE"},{name:"Werder Bremen",editing:!0,id:"SVW"},{name:"Hoffenheim",editing:!0,id:"SAP"},{name:"FC Augsburg",editing:!0,id:"FCA"},{name:"Hannover 96",editing:!0,id:"H96"},{name:"Mainz 05",editing:!0,id:"M05"},{name:"VFB Stuttgart",editing:!0,id:"VFB"}],F=t(59),D=t(62),y=function(e,n){var t=function(e,n){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(a){return console.log(a),n}}(e,n);return[t,function(n){try{var a=n instanceof Function?n(t):n;window.localStorage.setItem(e,JSON.stringify(a))}catch(i){console.log(i)}}]},T=function(){var e=y("LEAGUE_TABLE",B),n=Object(l.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(t),c=Object(l.a)(o,2),s=c[0],u=c[1],d=function(e,n){u(function(e,n,t){var a=t.slice(),i=k(e,a),r=k(n,a),o=S(e,a),c=S(n,a);return a[r-1]=o,a[i-1]=c,a}(e,n,s))},g=function(e,n){u(function(e,n,t){var a=t.slice(),i=k(e.id,a);return e.name=n,a[i-1]=e,a}(e,n,s))};Object(a.useEffect)((function(){r(s)}));var m=s.map((function(e,n){return i.a.createElement(w,{team:e,rank:n+1,key:n,swapPositions:d,updateTeamname:g})}));return i.a.createElement(C.a,{backend:E.a},i.a.createElement(F.a,{md:6},i.a.createElement(D.a,{bg:"dark"},i.a.createElement(D.a.Header,null,i.a.createElement(D.a.Title,null,"Ligatabelle zum Selberstecken")),i.a.createElement(D.a.Body,null,m))))},L=function(){return i.a.createElement("div",{className:"index"},i.a.createElement(c.a,null,i.a.createElement(s.a,null,i.a.createElement(T,null))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(55);o.a.render(i.a.createElement(L,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/soccerReact16",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/soccerReact16","/service-worker.js");O?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.2c7ce959.chunk.js.map