(this.webpackJsonpwhere_to_go=this.webpackJsonpwhere_to_go||[]).push([[0],{73:function(e,t,n){e.exports=n(87)},78:function(e,t,n){},79:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),c=n.n(i),o=(n(78),n(36)),s=n(27),l=(n(79),n(135)),u=n(67),p=n(18),m=n(121),f=n(129),h=n(122),d=n(124),g=n(125),v=n(126),b=n(63),y=n.n(b),O=n(128),E=n(127),j=Object(m.a)((function(e){return{card:{maxWidth:"300px",margin:"0 auto",cursor:"pointer"},media:{height:"150px"},content:{height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","& p":{textAlign:"center"}},actions:{justifyContent:"flex-end"}}}));function k(e){var t=j(),n=Object(p.c)(),r=function(e){n({type:"like",event:e})},i=function(e){n({type:"dislike",event:e})};return a.a.createElement(h.a,{className:t.card,onClick:function(){e.goToDetails&&e.goToDetails(e.event)}},a.a.createElement(d.a,{className:t.media,image:e.event.imgSrc,title:"Paella dish"}),a.a.createElement(g.a,{className:t.content},a.a.createElement(v.a,{paragraph:!0},e.event.title),a.a.createElement(v.a,{paragraph:!0},"\u0422\u0438\u043f: ",e.event.type),a.a.createElement(v.a,{paragraph:!0},"\u0426\u0435\u043d\u0430: ",e.event.price)),a.a.createElement(E.a,{disableSpacing:!0,className:t.actions},a.a.createElement(O.a,{onClick:function(t){return function(e,t){e.stopPropagation(),t.favorite?i(t):r(t)}(t,e.event)},"aria-label":"add to favorites"},a.a.createElement(y.a,{color:e.event.favorite?"error":""}))))}var x=Object(m.a)((function(e){return{title:{textAlign:"center"},list:{maxWidth:"940px",margin:"3% auto 0"},"@media (max-width: 950px)":{list:{maxWidth:"300px"}}}}));function w(e){var t=x(),n=Object(p.d)((function(e){return e.events}));return a.a.createElement("div",null,a.a.createElement("h1",{className:t.title},"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),a.a.createElement(f.a,{container:!0,className:t.list,spacing:2},n&&n.filter((function(e){return e.favorite})).map((function(e,t){return a.a.createElement(f.a,{key:t,item:!0,xs:12,md:6,lg:4},a.a.createElement(k,{event:e}))}))))}var S=n(24),C=n(15),P=n(32),B=n(33),D=n(34),N=n(17),T=n(130),L=n(131),W=n(5),F=n(132),I=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(P.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(a)))).goToHome=function(){n.props.history.push("/")},n.goToProfile=function(){n.props.history.push("/profile")},n}return Object(D.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(T.a,{position:"static"},a.a.createElement(L.a,{className:e.toolbar},a.a.createElement("img",{alt:"logo",onClick:this.goToHome,className:e.logo,src:"https://static-6441fa1c.kudago.com/img/logo-white.svg"}),a.a.createElement(F.a,{color:"inherit",onClick:this.goToProfile},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")))}}]),t}(r.Component),R=Object(N.b)(Object(W.a)((function(e){return{logo:{width:"154px",cursor:"pointer"},toolbar:{display:"flex",justifyContent:"space-between",width:"80%",margin:"0 auto"}}})),s.f)(I),A=n(51),z=n.n(A),J=n(65),_=n(12),H=n(10),M=n(133),G=n(134),$=n(136),q=n(139),K=n(137),Q=n(66),U=n.n(Q),V=n(138),X=[{id:1,title:"\u0412\u0435\u0447\u0435\u0440 \u0436\u0438\u0432\u043e\u0433\u043e \u0434\u0436\u0430\u0437\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0434\u0435\u0441\u044c",price:300,type:"concert",imgSrc:"https://kudago.com/media/thumbs/xl/images/event/88/33/8833b8a001857d0d046c830ad4684340.jpg"},{id:2,title:"\u0412\u044b\u0441\u0442\u0430\u0432\u043a\u0430 \u0418\u043b\u044c\u044f \u0420\u0435\u043f\u0438\u043d",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0434\u0435\u0441\u044c",price:200,type:"exhibition",imgSrc:"https://kudago.com/media/thumbs/xl/images/event/10/14/1014614390dc494a313d90dc04890ab9.jpg"},{id:3,title:"\u0412\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430 \u043d\u0430 \u0442\u0435\u043f\u043b\u043e\u0445\u043e\u0434\u0435",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0434\u0435\u0441\u044c",price:500,type:"party",imgSrc:"https://kudago.com/media/thumbs/xl/images/event/93/ed/93ed353172671c70a5f390f5e4294a75.JPG"},{id:4,title:"\u0412\u044b\u0441\u0442\u0430\u0432\u043a\u0430 \xab\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\xbb",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0434\u0435\u0441\u044c",price:1500,type:"exhibition",imgSrc:"https://kudago.com/media/thumbs/xl/images/event/9b/44/9b44663b0607d921e7edbc173fa3fb91.jpg"},{id:5,title:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442 Chrysta Bell ",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0434\u0435\u0441\u044c",price:1200,type:"concert",imgSrc:"https://kudago.com/media/thumbs/xl/images/event/9c/35/9c35f9cc714625034b836ece840a4c72.jpg"},{id:6,title:"\u041f\u043e\u043a\u0430\u0437 \u0444\u0438\u043b\u044c\u043c\u0430 \xab\u041c\u0430\u043d\u0445\u044d\u0442\u0442\u0435\u043d\xbb",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0434\u0435\u0441\u044c",price:2500,type:"cinema",imgSrc:"https://kudago.com/media/thumbs/xl/images/event/b0/9b/b09b41e811142618e43fde4687b56022.jpeg"}],Y=function(){return new Promise((function(e,t){setTimeout((function(){e(X)}),1e3)}))};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=Object(W.a)({root:{color:"#63ACE5"}})(M.a),ne=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(P.a)(this,Object(B.a)(t).call(this,e))).sortByPrice=function(e){var t,r=n.state.list.slice();switch(e){case"des":t=r.sort((function(e,t){return t.price-e.price}));break;case"asc":t=r.sort((function(e,t){return e.price-t.price}))}n.setState({list:t}),n.close()},n.filter=function(e){var t=e.title,r=e.description,a=e.type;return n.filterBySearch(t,r)&&n.filterByEventType(a)},n.filterBySearch=function(e,t){return!n.state.filterBy||(e.toLowerCase().startsWith(n.state.filterBy.toLowerCase())||t.toLowerCase().startsWith(n.state.filterBy.toLowerCase()))},n.filterByEventType=function(e){return n.state.list.filter((function(t){return n.state.filterLookup[e]})).length},n.toggleFilterCheckbox=function(e,t){n.setState((function(n){return{filterLookup:ee({},n.filterLookup,Object(_.a)({},e,t))}}))},n.open=function(e){n.setState({anchorEl:e.currentTarget})},n.close=function(){n.setState({anchorEl:null})},n.getFilterOptions=function(){var e=new Set(n.state.list.map((function(e){return e.type})));return Array.from(e).sort()},n.goToDetails=function(e){n.props.history.push(""+e.id)},n.canRender=function(){return n.props.events.length},n.state={list:[],sortedByPrice:!1,filterBy:"",filterLookup:{},canFadeOut:!1,anchorEl:null},n}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(J.a)(z.a.mark((function e(){var t,n=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.events.length){e.next=5;break}return e.next=3,Y().then((function(e){var r=e.slice().map((function(e){return ee({},e,{favorite:!1})}));t=r,n.props.initializeEvents(t)}));case 3:e.next=6;break;case 5:t=this.props.events;case 6:this.setState({list:t,filterLookup:t.map((function(e){return e.type})).reduce((function(e,t){return e[t]=!0,e}),{}),canFadeOut:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.classes;return this.canRender()?a.a.createElement(G.a,{in:this.state.canFadeOut},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:t.options},a.a.createElement("div",null,a.a.createElement(F.a,{color:"primary","aria-controls":"simple-menu","aria-haspopup":"true",onClick:this.open},"\u0426\u0435\u043d\u0430"),a.a.createElement($.a,{id:"simple-menu",anchorEl:this.state.anchorEl,keepMounted:!0,open:Boolean(this.state.anchorEl),onClose:this.close},a.a.createElement(q.a,{onClick:function(t){return e.sortByPrice("asc")}},"\u041f\u043e \u0432\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0435\u0439"),a.a.createElement(q.a,{onClick:function(t){return e.sortByPrice("des")}},"\u041f\u043e \u043d\u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0435\u0439"))),a.a.createElement("div",{className:t.search},a.a.createElement("div",{className:t.searchIcon},a.a.createElement(U.a,null)),a.a.createElement(V.a,{onChange:function(t){return e.setState({filterBy:t.target.value})},placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),a.a.createElement("div",null,this.getFilterOptions().map((function(t,n){return a.a.createElement("span",{key:n},a.a.createElement("span",null,t),a.a.createElement(K.a,{checked:e.state.filterLookup[t],value:"checkedA",color:"primary",onChange:function(n,r){return e.toggleFilterCheckbox(t,r)},inputProps:{"aria-label":"primary checkbox"}}))})))),a.a.createElement(f.a,{container:!0,className:t.root,spacing:2},this.state.list.filter((function(t){return e.filter(t)})).map((function(t,n){return a.a.createElement(f.a,{key:n,item:!0,xs:12,md:6,lg:4},a.a.createElement(k,{event:t,goToDetails:function(t){return e.goToDetails(t)}}))}))))):a.a.createElement("div",{className:t.spinnerWrapper},a.a.createElement(te,{size:150}),";")}}]),t}(r.Component),re=Object(N.b)(Object(W.a)((function(e){return{root:{maxWidth:"940px",margin:"3% auto 0"},options:{display:"flex",justifyContent:"space-around",margin:"20px 0"},spinnerWrapper:{height:"calc(100vh - 100px)",display:"flex",justifyContent:"center",alignItems:"center"},search:Object(_.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(H.b)("#222",.15),marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",height:"100%"},inputInput:Object(_.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),"@media (max-width: 950px)":{root:{maxWidth:"300px"}}}})),s.f,Object(p.b)((function(e){return{events:e.events}}),(function(e){return{initializeEvents:function(t){return e({type:"initialize-events",events:t})}}})))(ne),ae=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(P.a)(this,Object(B.a)(t).call(this,e))).state={event:e.events.find((function(t){return t.id===+e.match.params.id}))},n}return Object(D.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.state.event&&a.a.createElement("div",null,a.a.createElement("p",null,this.state.event.title),a.a.createElement("p",null,"\u0426\u0435\u043d\u0430: ",this.state.event.price),a.a.createElement("p",null,this.state.event.description)))}}]),t}(r.Component),ie=Object(N.b)(s.f,Object(p.b)((function(e){return{events:e.events}}),null))(ae),ce=Object(u.a)({palette:{primary:{main:"#222"},secondary:{main:"#ffffff"}}});var oe=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement(l.a,{theme:ce},a.a.createElement(R,null),a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:re}),a.a.createElement(s.a,{exact:!0,path:"/profile",component:w}),a.a.createElement(s.a,{exact:!0,path:"/:id",component:ie})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=n(26);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe={events:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"initialize-events":return ue({},e,{events:Object(se.a)(t.events)});case"like":var n=e.events.map((function(e){return e===t.event&&(e.favorite=!0),e}));return ue({},e,{events:Object(se.a)(n)});case"dislike":var r=e.events.map((function(e){return e===t.event&&(e.favorite=!1),e}));return ue({},e,{events:Object(se.a)(r)});default:return e}};n.d(t,"loadState",(function(){return fe})),n.d(t,"saveState",(function(){return he}));var fe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},he=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}},de=fe(),ge=Object(N.c)(me,de);ge.subscribe((function(){he({events:ge.getState().events})})),c.a.render(a.a.createElement(p.a,{store:ge},a.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[73,1,2]]]);
//# sourceMappingURL=main.81705828.chunk.js.map