(this.webpackJsonpmy_biseo=this.webpackJsonpmy_biseo||[]).push([[0],{46:function(e,n,t){},51:function(e,n,t){},69:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(0),i=t.n(r),a=t(18),o=t.n(a),s=(t(46),t(17)),d=t(6),l=t(3),u=t(12),j={isLoadingActions:{reverse_status:function(){return console.log("reverse"),{type:"REVERSE"}}},setCurrentPage:function(e){return console.log("current page",e),{type:e}}},b=(t(51),function(){var e=Object(r.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(u.c)((function(e){return e.isLoadingReducer})),o=Object(u.b)(),s=Object(r.useState)(!0),l=Object(d.a)(s,2),b=l[0],f=l[1],h=Object(r.useState)(""),O=Object(d.a)(h,2),x=O[0],p=O[1],m=Object(r.useState)(""),g=Object(d.a)(m,2),v=g[0],y=g[1];return Object(r.useEffect)((function(){if(navigator.geolocation?console.log("Available"):console.log("Not Available"),navigator.geolocation.getCurrentPosition((function(e){p((function(){return e.coords.longitude.toString()})),y((function(){return e.coords.latitude.toString()}))})),v&&x)fetch("/api/weather?lon=".concat(x,"&lat=").concat(v)).then((function(e){return e.json().then((function(e){i(e)})).then((function(){o(j.isLoadingActions.reverse_status()),f(a.status)}))}))}),[v,x]),b?Object(c.jsx)("div",{className:"loader-container",children:Object(c.jsx)("div",{className:"loader"})}):Object(c.jsx)("div",{style:{color:"rgba(229, 229, 234)",margin:"1em"},children:t?"".concat(t.name,"\uc758 \ub0a0\uc528 : ").concat(t.weather[0].description):"\ud604\uc7ac \ub0a0\uc528 \uc815\ubcf4 \uc54c \uc218 \uc5c6\uc74c"})}),f=t(4);function h(){var e=Object(l.a)(["\n  decoration: none;\n"]);return h=function(){return e},e}function O(){var e=Object(l.a)(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: #c7c7cc;\n"]);return O=function(){return e},e}var x=f.a.div(O()),p=f.a.li(h()),m=["\ud83d\ude91","\ud83d\udea0","\u274c","\u2757","\ud83d\udc89","\ud83d\udc8a","\ud83e\udd75","\ud83d\ude31","\ud83e\udd27","\ud83d\ude40"],g=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("/api/covid").then((function(e){e.json().then((function(e){console.log(e.response.body.items.item);var n=e.response.body.items.item;i((function(){return n.slice(0,1)})),console.log(n)}))})).catch((function(e){console.error("Error",e)}))}),[]),Object(c.jsx)(x,{children:Object(c.jsx)("ul",{children:t?t.map((function(e){return Object(c.jsxs)(p,{children:[e.stateDt,"\uc758 \ucf54\ub85c\ub098\uc18c\uc2dd,",Object(c.jsx)("br",{})," \ub204\uc801\ud655\uc9c4\uc790",m[Math.round(10*Math.random())],e.decideCnt,Object(c.jsx)("br",{}),"\ub204\uc801\uc0ac\ub9dd\uc790",m[Math.round(10*Math.random())],e.deathCnt]},e.create_dt)})):"no data"})})},v=function(e){var n=e.updateHandle,t=e.deleteHandle,r=e.todo;return Object(c.jsxs)("li",{style:{color:"white",display:"flex",flexDirection:"column"},name:r.created_date,children:["".concat(r.author," : => ").concat(r.description," ").concat(r.created_date),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("button",{name:r.created_date,onClick:n,style:{margin:1},value:"test_modify_button",children:"modify"}),Object(c.jsx)("button",{onClick:t,name:r.created_date,style:{margin:1},value:"test_delete_button",children:"delete"})]})]})};function y(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n"]);return y=function(){return e},e}var w=f.a.ul(y()),k=function(e){var n=e.todo,t=e.deleteHandle,r=e.updateHandle;return Object(c.jsx)("div",{children:Object(c.jsx)(w,{children:n.map((function(e,n){return Object(c.jsx)(v,{todo:e,deleteHandle:t,updateHandle:r},n)}))})})},C=t(22);function S(){var e=Object(l.a)(["\n  background: #3a3a3a;\n  color: #84aa84;\n"]);return S=function(){return e},e}function _(){var e=Object(l.a)(["\n  color: #ffd7af;\n  margin: 0 0 0.5rem 0.5rem;\n  @media only screen and (max-width: 375px) {\n  }\n  // props\ub97c \uc774\uc6a9\ud558\uae30\n"]);return _=function(){return e},e}function D(){var e=Object(l.a)(["\n    @media only screen and (max-width: 450px) {\n        width:",";\n        margin: 0 0.5rem 0 0.5rem;\n"]);return D=function(){return e},e}function E(){var e=Object(l.a)(["\n  display: flex;\n  @media only screen and (max-width: 450px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return E=function(){return e},e}function N(){var e=Object(l.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  @media only screen and (max-width: 450px) {\n    font-weight: 900;\n  }\n"]);return N=function(){return e},e}function H(){var e=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return H=function(){return e},e}var M=f.a.ul(H()),T=f.a.li(N()),z=f.a.form(E()),A=f.a.input(D(),(function(e){return e.inputWidth+"px"})),L=f.a.h1(_()),R=Object(f.a)(L)(S()),P=i.a.createContext({}),F=function(){var e=i.a.useContext(P);return{width:e.width,height:e.height}},I=function(e){var n=e.children,t=Object(r.useState)(window.innerWidth),i=Object(d.a)(t,2),a=i[0],o=i[1],s=Object(r.useState)(window.innerHeight),l=Object(d.a)(s,2),u=l[0],j=l[1],b=function(){o(window.innerWidth),j(window.innerHeight)};return Object(r.useEffect)((function(){return window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}}),[]),Object(c.jsx)(P.Provider,{value:{width:a,height:u},children:n})};function W(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return W=function(){return e},e}var B=f.a.div(W()),J=function(e){var n=Object(r.useState)([]),t=Object(d.a)(n,2),i=t[0],a=t[1],o=Object(r.useState)(""),s=Object(d.a)(o,2),l=s[0],u=s[1],j=Object(r.useState)(""),b=Object(d.a)(j,2),f=b[0],h=b[1],O=F().width;return Object(c.jsxs)(B,{children:[Object(c.jsx)(L,{children:"kandan Todo List"}),Object(c.jsx)(R,{children:"write what you need to do!!"}),Object(c.jsxs)(z,{style:{display:"flex"},onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("author",l),n.append("description",f);Object(C.post)("/api/insert",n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){a(e.data)}))},method:"POST",children:[Object(c.jsx)("div",{children:Object(c.jsx)(A,{inputWidth:O-30,type:"text",name:"author",value:l,onChange:function(e){var n=e.target.value;u(n)}})}),Object(c.jsx)("div",{children:Object(c.jsx)(A,{inputWidth:O-30,type:"text",name:"description",value:f,onChange:function(e){var n=e.target.value;h(n)}})}),Object(c.jsxs)("div",{style:{display:"flex",alignItems:"stretch"},children:[Object(c.jsx)("button",{type:"submit",children:"todo \ub4f1\ub85d\ud558\uae30"}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),Object(C.get)("/api/selectAll").then((function(e){return a((function(){return e.data}))}))},children:"todos"})]})]}),Object(c.jsx)(k,{todo:i,deleteHandle:function(e){e.preventDefault();var n=e.target.getAttribute("name"),t=i.filter((function(e){return e.created_date!==n}));a((function(){return t})),fetch("/api/delete?target=".concat(n))},updateHandle:function(e){e.preventDefault()}})]})},V=t.p+"static/media/github.a95512d7.svg",q=t.p+"static/media/twitter.50c035ed.svg",G=t.p+"static/media/mail.f6a817f2.svg",K=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(M,{className:"contact",style:{display:"flex",background:"white",flexDirection:"row",justifyContent:"space-around"},children:[Object(c.jsx)(T,{children:Object(c.jsx)("a",{target:"_",href:"https://github.com/sa82trip",children:Object(c.jsx)("img",{src:V,alt:""})})}),Object(c.jsx)(T,{children:Object(c.jsx)("a",{target:"_",href:"https://twitter.com/vim_gil",children:Object(c.jsx)("img",{src:q,alt:""})})}),Object(c.jsx)(T,{children:Object(c.jsx)("a",{href:"mailto:sa82trip@gmail.com",children:Object(c.jsx)("img",{src:G,alt:""})})})]})})};function Q(){var e=Object(l.a)(["\n  // color: #fcba03;\n  color: #bc5656;\n  font-size: 5rem;\n  padding: 0 0 1rem 0;\n  &:hover {\n    color: red;\n  }\n  @media only screen and (max-width: 430px) {\n    font-weight: 900;\n  }\n"]);return Q=function(){return e},e}function U(){var e=Object(l.a)(["\n  text-decoration: none;\n  // color: rgba(94, 92, 230);\n  color: #81a681;\n  font-size: 3vh;\n  font-weight: bold;\n  font-family: monospace;\n  &:hover {\n    background: #e0eafc;\n    opacity: 30%;\n  }\n  &:active {\n    color: red;\n  }\n  @media only screen and (max-width: 430px) {\n    font-size: 3rem;\n  }\n"]);return U=function(){return e},e}function X(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: #81a681;\n  font-size: 3vh;\n  font-weight: bold;\n  font-family: monospace;\n  transition: background 2s;\n  &:hover {\n    transform: rotate(360deg);\n    opacity: 30%;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(l.a)(["\n  border-bottom: 0.7rem solid #5f87af;\n  font-weight: bold;\n  margin: 0.5rem 0.5rem 0 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: space-around;\n  // position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  @media only screen and (min-width: 630px) {\n    align-items: space-around;\n  }\n"]);return Y=function(){return e},e}var Z=f.a.div(Y()),$=f.a.a(X()),ee=Object(f.a)(s.b)(U()),ne=f.a.div(Q()),te=function(){var e=Object(u.b)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(Z,{children:[Object(c.jsx)(ne,{children:" My Biseo "}),Object(c.jsx)("div",{}),Object(c.jsxs)(M,{className:"menu",children:[Object(c.jsx)($,{children:Object(c.jsx)(ee,{to:"/",children:Object(c.jsx)(T,{children:"MyBiseo"})})}),Object(c.jsx)($,{name:"TODO",onClick:function(){return e(j.setCurrentPage("TODO"))},children:Object(c.jsx)(ee,{to:"/todo",children:Object(c.jsx)(T,{children:"Todo"})})}),Object(c.jsx)($,{name:"INFO",onClick:function(){return e(j.setCurrentPage("INFO"))},children:Object(c.jsx)(ee,{to:"/info",children:Object(c.jsx)(T,{children:"info"})})}),Object(c.jsx)(K,{})]})]})})},ce=(t(69),t(5));function re(){var e=Object(l.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  top: 0;\n  padding: none;\n  z-index: -1;\n  position: fixed; /* optional depending on what you want to do in your app */\n  filter: opacity(60%);\n"]);return re=function(){return e},e}function ie(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-itmes: center;\n  // height: 100vh;\n  @media only screen and (max-width: 630px) {\n    background: #262626;\n    box-shadow: 3px 3px 5px black;\n    height: auto;\n  } // background: #aa4b6b; // background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) ; // background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) ;\n"]);return ie=function(){return e},e}function ae(){var e=Object(l.a)(["\n  font-size: 3rem;\n  font-weight: bold;\n  color: orange;\n  padding: 1.5rem;\n  border: 2px yellow;\n"]);return ae=function(){return e},e}f.a.div(ae());var oe=f.a.div(ie()),se=f.a.video(re());var de=function(){var e=Object(r.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(u.c)((function(e){return e.isLoadingReducer})),o=(Object(u.b)(),F().height);return Object(r.useEffect)((function(){console.log("isLoading",a),fetch("/api/time").then((function(e){return e.json()})).then((function(e){i(e.time)}))}),[a,o]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(se,{loop:!0,autoPlay:!0,src:"https://wedistill.io/uploads/videos/processed/1716/Northernlights2_HD.mp4.mp4"}),Object(c.jsxs)("div",{className:"whole",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(c.jsx)("div",{className:"flex-left"}),Object(c.jsx)("div",{className:"app",style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},children:Object(c.jsxs)(oe,{containerHeight:function(){return o-10},className:"App",children:[Object(c.jsx)(te,{}),Object(c.jsxs)(ce.c,{children:[Object(c.jsx)(ce.a,{path:"/info",children:Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("p",{style:{color:"#d787af"},children:["The current time is ",t,"."]})}),Object(c.jsx)(b,{}),Object(c.jsx)(g,{})]})}),Object(c.jsx)(ce.a,{path:"/todo",children:Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("p",{style:{color:"#d787af"},children:["The current time is ",t,"."]})}),Object(c.jsx)(J,{})]})})]})]})}),Object(c.jsx)("div",{className:"flex-right"})]})]})})},le=function(){return Object(c.jsx)(I,{children:Object(c.jsx)(s.a,{children:Object(c.jsx)(de,{})})})},ue=t(13),je=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REVERSE":return{status:!1};default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"HOME",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HOME":return"HOME";case"TODO":return console.log("reducer todo"),"TODO";case"INFO":return"INFO";default:return e}},fe=Object(ue.combineReducers)({isLoadingReducer:je,currentPageReducer:be}),he=t(40),Oe=Object(ue.createStore)(fe,Object(he.composeWithDevTools)(Object(ue.applyMiddleware)()));o.a.render(Object(c.jsx)(u.a,{store:Oe,children:Object(c.jsx)(le,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.f9518353.chunk.js.map