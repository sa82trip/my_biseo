(this.webpackJsonpmy_biseo=this.webpackJsonpmy_biseo||[]).push([[0],{46:function(e,n,t){},51:function(e,n,t){},69:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),i=t.n(c),o=t(18),a=t.n(o),s=(t(46),t(17)),d=t(6),l=t(4),u=t(12),j={isLoadingActions:{reverse_status:function(){return console.log("reverse"),{type:"REVERSE"}}},setCurrentPage:function(e){return console.log("current page",e),{type:e}}},b=(t(51),function(){var e=Object(c.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(u.c)((function(e){return e.isLoadingReducer})),a=Object(u.b)(),s=Object(c.useState)(!0),l=Object(d.a)(s,2),b=l[0],f=l[1],h=Object(c.useState)(""),O=Object(d.a)(h,2),x=O[0],m=O[1],p=Object(c.useState)(""),g=Object(d.a)(p,2),v=g[0],y=g[1];return Object(c.useEffect)((function(){if(navigator.geolocation?console.log("Available"):console.log("Not Available"),navigator.geolocation.getCurrentPosition((function(e){m((function(){return e.coords.longitude.toString()})),y((function(){return e.coords.latitude.toString()}))})),v&&x)fetch("/api/weather?lon=".concat(x,"&lat=").concat(v)).then((function(e){return e.json().then((function(e){i(e)})).then((function(){a(j.isLoadingActions.reverse_status()),f(o.status)}))}))}),[v,x]),b?Object(r.jsx)("div",{className:"loader-container",children:Object(r.jsx)("div",{className:"loader"})}):Object(r.jsx)("div",{style:{color:"rgba(229, 229, 234)",margin:"1em"},children:t?"".concat(t.name,"\uc758 \ub0a0\uc528 : ").concat(t.weather[0].description):"\ud604\uc7ac \ub0a0\uc528 \uc815\ubcf4 \uc54c \uc218 \uc5c6\uc74c"})}),f=t(3);function h(){var e=Object(l.a)(["\n  decoration: none;\n"]);return h=function(){return e},e}function O(){var e=Object(l.a)(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: #c7c7cc;\n"]);return O=function(){return e},e}var x=f.a.div(O()),m=f.a.li(h()),p=["\ud83d\ude91","\ud83d\udea0","\u274c","\u2757","\ud83d\udc89","\ud83d\udc8a","\ud83e\udd75","\ud83d\ude31","\ud83e\udd27","\ud83d\ude40"],g=function(){var e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(c.useEffect)((function(){var e=[];try{fetch("/api/covid").then((function(n){n.json().then((function(n){console.log(n.response.body.items.item);var t=n.response.body.items.item;console.log(t),t.length>1?i((function(){return t.slice(0,1)})):e.length||(e.push(t),i(e))}))}))}catch(n){console.log(n)}}),[]),Object(r.jsx)(x,{children:Object(r.jsx)("ul",{children:t?t.map((function(e){return Object(r.jsxs)(m,{onClick:function(){console.log("clicked!")},children:[e.stateDt,"\uc758 \ucf54\ub85c\ub098\uc18c\uc2dd,",Object(r.jsx)("br",{})," \ub204\uc801\ud655\uc9c4\uc790",p[Math.round(10*Math.random())],e.decideCnt,Object(r.jsx)("br",{}),"\ub204\uc801\uc0ac\ub9dd\uc790",p[Math.round(10*Math.random())],e.deathCnt]},e.create_dt)})):"COVID\uad00\ub828 \uc815\ubcf4 \uc5c5\ub370\uc774\ud2b8\uc911 9AM \uc608\uc815"})})},v=function(e){var n=e.updateHandle,t=e.deleteHandle,c=e.todo;return Object(r.jsxs)("li",{style:{color:"white",display:"flex",flexDirection:"column"},name:c.created_date,children:["".concat(c.author," : => ").concat(c.description," ").concat(c.created_date),Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)("button",{name:c.created_date,onClick:n,style:{margin:1},value:"test_modify_button",children:"modify"}),Object(r.jsx)("button",{onClick:t,name:c.created_date,style:{margin:1},value:"test_delete_button",children:"delete"})]})]})};function y(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n"]);return y=function(){return e},e}var w=f.a.ul(y()),k=function(e){var n=e.todo,t=e.deleteHandle,c=e.updateHandle;return Object(r.jsx)("div",{children:Object(r.jsx)(w,{children:n.map((function(e,n){return Object(r.jsx)(v,{todo:e,deleteHandle:t,updateHandle:c},n)}))})})},C=t(22);function D(){var e=Object(l.a)(["\n  background: #3a3a3a;\n  color: #84aa84;\n"]);return D=function(){return e},e}function S(){var e=Object(l.a)(["\n  color: #ffd7af;\n  margin: 0 0 0.5rem 0.5rem;\n  @media only screen and (max-width: 375px) {\n  }\n  // props\ub97c \uc774\uc6a9\ud558\uae30\n"]);return S=function(){return e},e}function _(){var e=Object(l.a)(["\n    width:200px; \n    @media only screen and (max-width: 450px) {\n        width:",";\n        margin: 0 0.5rem 0 0.5rem;\n"]);return _=function(){return e},e}function N(){var e=Object(l.a)(["\n  display: flex;\n  @media only screen and (max-width: 450px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return N=function(){return e},e}function E(){var e=Object(l.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  transition: transform 3s;\n  -webkit-transition: color 300ms linear;\n  -moz-transition: color 300ms linear;\n  -o-transition: color 300ms linear;\n  -ms-transition: color 300ms linear;\n  transition: color 300ms linear;\n  &:hover {\n    color: white;\n    text-decoration: underline wavy red;\n  }\n  @media only screen and (max-width: 450px) {\n    font-weight: 900;\n  }\n"]);return E=function(){return e},e}function H(){var e=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return H=function(){return e},e}var M=f.a.ul(H()),A=f.a.li(E()),R=f.a.form(N()),T=f.a.input(_(),(function(e){return e.inputWidth+"px"})),z=f.a.h1(S()),I=Object(f.a)(z)(D()),L=i.a.createContext({}),P=function(){var e=i.a.useContext(L);return{width:e.width,height:e.height}},F=function(e){var n=e.children,t=Object(c.useState)(window.innerWidth),i=Object(d.a)(t,2),o=i[0],a=i[1],s=Object(c.useState)(window.innerHeight),l=Object(d.a)(s,2),u=l[0],j=l[1],b=function(){a(window.innerWidth),j(window.innerHeight)};return Object(c.useEffect)((function(){return window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}}),[]),Object(r.jsx)(L.Provider,{value:{width:o,height:u},children:n})};function W(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return W=function(){return e},e}var B=f.a.div(W()),V=function(e){var n=Object(c.useState)([]),t=Object(d.a)(n,2),i=t[0],o=t[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),l=s[0],u=s[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),f=b[0],h=b[1],O=P().width;return Object(r.jsxs)(B,{children:[Object(r.jsx)(z,{children:"kandan Todo List"}),Object(r.jsx)(I,{children:"write what you need to do!!"}),Object(r.jsxs)(R,{style:{display:"flex"},onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("author",l),n.append("description",f);Object(C.post)("/api/insert",n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){o(e.data)}))},method:"POST",children:[Object(r.jsx)("div",{children:Object(r.jsx)(T,{inputWidth:O-30,type:"text",name:"author",value:l,onChange:function(e){var n=e.target.value;u(n)}})}),Object(r.jsx)("div",{children:Object(r.jsx)(T,{inputWidth:O-30,type:"text",name:"description",value:f,onChange:function(e){var n=e.target.value;h(n)}})}),Object(r.jsxs)("div",{style:{display:"flex",alignItems:"stretch"},children:[Object(r.jsx)("button",{type:"submit",children:"todo \ub4f1\ub85d\ud558\uae30"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),Object(C.get)("/api/selectAll").then((function(e){return o((function(){return e.data}))}))},children:"todos"})]})]}),Object(r.jsx)(k,{todo:i,deleteHandle:function(e){e.preventDefault();var n=e.target.getAttribute("name"),t=i.filter((function(e){return e.created_date!==n}));o((function(){return t})),fetch("/api/delete?target=".concat(n))},updateHandle:function(e){e.preventDefault()}})]})},J=t.p+"static/media/github.a95512d7.svg",q=t.p+"static/media/twitter.50c035ed.svg",G=t.p+"static/media/mail.f6a817f2.svg",K=Object(f.a)(M)({display:"flex",flexDirection:"row",backgroundColor:"rgba(255,255,153,0.2)",borderRadius:"10%",justifyContent:"space-around"}),Q=Object(f.a)(A)({margin:"1vh"}),U=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(K,{className:"contact",children:[Object(r.jsx)(Q,{children:Object(r.jsx)("a",{target:"_",href:"https://github.com/sa82trip",children:Object(r.jsx)("img",{src:J,alt:""})})}),Object(r.jsx)(Q,{children:Object(r.jsx)("a",{target:"_",href:"https://twitter.com/vim_gil",children:Object(r.jsx)("img",{src:q,alt:""})})}),Object(r.jsx)(Q,{children:Object(r.jsx)("a",{href:"mailto:sa82trip@gmail.com",children:Object(r.jsx)("img",{src:G,alt:""})})})]})})};function X(){var e=Object(l.a)(["\n  // color: #fcba03;\n  color: #bc5656;\n  font-size: 5rem;\n  padding: 0 0 1rem 0;\n  &:hover {\n    color: red;\n  }\n  @media only screen and (max-width: 430px) {\n    font-weight: 900;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(l.a)(["\n  text-decoration: none;\n  // color: rgba(94, 92, 230);\n  color: #81a681;\n  font-size: 3vh;\n  font-weight: bold;\n  font-family: monospace;\n  &:hover {\n    background: #e0eafc;\n    opacity: 30%;\n  }\n  &:active {\n    color: red;\n  }\n  @media only screen and (max-width: 430px) {\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: #81a681;\n  font-size: 3vh;\n  font-weight: bold;\n  font-family: monospace;\n  transition: background 2s;\n  &:hover {\n    transform: rotate(360deg);\n    opacity: 30%;\n  }\n"]);return Z=function(){return e},e}function $(){var e=Object(l.a)(["\n  border-bottom: 0.7rem solid #5f87af;\n  font-weight: bold;\n  margin: 0.5rem 0.5rem 0 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: space-around;\n  // position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  @media only screen and (min-width: 630px) {\n    align-items: space-around;\n  }\n"]);return $=function(){return e},e}var ee=f.a.div($()),ne=f.a.a(Z()),te=Object(f.a)(s.b)(Y()),re=f.a.div(X()),ce=function(){var e=Object(u.b)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(ee,{children:[Object(r.jsx)(re,{children:"My Biseo"}),Object(r.jsx)("div",{}),Object(r.jsxs)(M,{className:"menu",children:[Object(r.jsx)(ne,{children:Object(r.jsx)(te,{to:"/",children:Object(r.jsx)(A,{children:"MyBiseo"})})}),Object(r.jsx)(ne,{name:"TODO",onClick:function(){return e(j.setCurrentPage("TODO"))},children:Object(r.jsx)(te,{to:"/todo",children:Object(r.jsx)(A,{children:"Todo"})})}),Object(r.jsx)(ne,{name:"INFO",onClick:function(){return e(j.setCurrentPage("INFO"))},children:Object(r.jsx)(te,{to:"/info",children:Object(r.jsx)(A,{children:"info"})})}),Object(r.jsx)(U,{})]})]})})},ie=(t(69),t(5));function oe(){var e=Object(l.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  top: 0;\n  padding: none;\n  z-index: -1;\n  position: fixed; /* optional depending on what you want to do in your app */\n  filter: opacity(60%);\n"]);return oe=function(){return e},e}function ae(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-itmes: center;\n  // height: 100vh;\n  @media only screen and (max-width: 630px) {\n    background: #262626;\n    box-shadow: 3px 3px 5px black;\n    height: auto;\n  } // background: #aa4b6b; // background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) ; // background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) ;\n"]);return ae=function(){return e},e}function se(){var e=Object(l.a)(["\n  font-size: 3rem;\n  font-weight: bold;\n  color: orange;\n  padding: 1.5rem;\n  border: 2px yellow;\n"]);return se=function(){return e},e}f.a.div(se());var de=f.a.div(ae()),le=f.a.video(oe());var ue=function(){var e=Object(c.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(u.c)((function(e){return e.isLoadingReducer})),a=P().height;return Object(c.useEffect)((function(){fetch("/api/time").then((function(e){return e.json()})).then((function(e){i(e.time)}))}),[o,a]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(le,{loop:!0,autoPlay:!0,src:"https://wedistill.io/uploads/videos/processed/1716/Northernlights2_HD.mp4.mp4"}),Object(r.jsxs)("div",{className:"whole",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(r.jsx)("div",{className:"flex-left"}),Object(r.jsx)("div",{className:"app",style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},children:Object(r.jsxs)(de,{containerHeight:function(){return a-10},className:"App",children:[Object(r.jsx)(ce,{}),Object(r.jsxs)(ie.c,{children:[Object(r.jsx)(ie.a,{path:"/info",children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsxs)("p",{style:{color:"#d787af"},children:["The current time is ",t,"."]})}),Object(r.jsx)(b,{}),Object(r.jsx)(g,{})]})}),Object(r.jsx)(ie.a,{path:"/todo",children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsxs)("p",{style:{color:"#d787af"},children:["The current time is ",t,"."]})}),Object(r.jsx)(V,{})]})})]})]})}),Object(r.jsx)("div",{className:"flex-right"})]})]})})},je=function(){return Object(r.jsx)(F,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(ue,{})})})},be=t(13),fe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REVERSE":return{status:!1};default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"HOME",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HOME":return"HOME";case"TODO":return console.log("reducer todo"),"TODO";case"INFO":return"INFO";default:return e}},Oe=Object(be.combineReducers)({isLoadingReducer:fe,currentPageReducer:he}),xe=t(40),me=Object(be.createStore)(Oe,Object(xe.composeWithDevTools)(Object(be.applyMiddleware)()));a.a.render(Object(r.jsx)(u.a,{store:me,children:Object(r.jsx)(je,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.6a2bfd7f.chunk.js.map