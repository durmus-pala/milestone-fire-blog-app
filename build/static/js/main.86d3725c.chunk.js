(this["webpackJsonpmilestone-fireblog-app"]=this["webpackJsonpmilestone-fireblog-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(13),c=n.n(o),r=(n(100),n(101),n(14)),l=n(164),s=n(153),j=n.p+"static/media/blok.7e6674a5.png",d=n.p+"static/media/google.d1e31f45.png",u=n(45),b=n(36),h=n.n(b),O=n(59),p=n(23),m=(n(103),n(105),n(116),p.a.initializeApp({apiKey:"AIzaSyBwkPKfnKESFcHWF9bmVV7IydqnpN2ddLU",authDomain:"milestone-fire-blog-app.firebaseapp.com",projectId:"milestone-fire-blog-app",storageBucket:"milestone-fire-blog-app.appspot.com",messagingSenderId:"137726194070",appId:"1:137726194070:web:5b64402a9066308b67adb7",databaseURL:"https://milestone-fire-blog-app-default-rtdb.europe-west1.firebasedatabase.app"}),function(){var e=Object(O.a)(h.a.mark((function e(t,n,a,i,o){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.auth().createUserWithEmailAndPassword(t,n).then((function(e){var t=e.user;console.log(":rocket: REGISTER USER",t),o.push("/")})).catch((function(e){e.code,e.message}));case 3:p.a.auth().currentUser.updateProfile({displayName:a,photoURL:i}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("The email address is already in use by another account!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,i,o){return e.apply(this,arguments)}}()),g=function(){var e=Object(O.a)(h.a.mark((function e(t,n,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signInWithEmailAndPassword(t,n).then((function(e){var t=e.user;console.log(":rocket: LOGIN USER",t),a.push("/")})).catch((function(e){e.code;var t=e.message;alert(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().onAuthStateChanged((function(e){t(e||null)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=new p.a.auth.GoogleAuthProvider;e.setCustomParameters({promt:"select_account"}),p.a.auth().signInWithPopup(e)},v=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(!1),c=Object(r.a)(o,2),l=c[0],s=c[1];return Object(a.useEffect)((function(){s(!0),p.a.database().ref("blog").on("value",(function(e){var t=e.val(),n=[];for(var a in t)n.push(Object(u.a)({id:a},t[a]));i(n),s(!1)}))}),[]),{blogList:n,isLoading:l}},y=n(15),V=n(4),U=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),c=Object(r.a)(o,2),u=c[0],b=c[1],h=Object(y.g)();return Object(V.jsxs)("div",{className:"login",children:[Object(V.jsx)("img",{src:j,alt:"login",className:"login-img"}),Object(V.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-email",type:"email",id:"outlined-basic",variant:"outlined",placeholder:"Enter Your E-mail Please...",onChange:function(e){return i(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-password",type:"password",id:"outlined-basic",variant:"outlined",placeholder:"Enter Your Password Please...",onChange:function(e){return b(e.target.value)}})]}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(s.a,{onClick:function(e){e.preventDefault(),g(n,u,h),h.push("/")},variant:"contained",color:"primary",children:"Login"}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsxs)(s.a,{onClick:function(e){e.preventDefault(),x(),h.push("/")},style:{width:"70%",display:"block",textAlign:"center",margin:"auto"},children:[Object(V.jsx)("p",{children:"Continue With Google"}),Object(V.jsx)("img",{src:d,alt:"google",style:{width:"15%"}})]})]})},C=function(){var e=Object(y.g)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(""),u=Object(r.a)(c,2),b=u[0],h=u[1],O=Object(a.useState)(""),p=Object(r.a)(O,2),g=p[0],f=p[1],v=Object(a.useState)(""),U=Object(r.a)(v,2),C=U[0],S=U[1],q=Object(a.useState)(""),R=Object(r.a)(q,2),z=R[0],A=R[1];return Object(V.jsxs)("div",{className:"login",children:[Object(V.jsx)("img",{src:j,alt:"login",className:"login-img"}),Object(V.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-email",type:"text",id:"outlined-basic",variant:"outlined",placeholder:"Enter Your First Name Please...",onChange:function(e){return o(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-email",type:"text",id:"outlined-basic",variant:"outlined",placeholder:"Enter Your Last Name Please...",onChange:function(e){return h(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-email",type:"email",id:"outlined-basic",variant:"outlined",placeholder:"Enter Your E-mail Please...",onChange:function(e){return f(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-password",type:"password",id:"outlined-basic",variant:"outlined",placeholder:"Enter Your Password Please...",onChange:function(e){return S(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-password",type:"text",id:"outlined-basic",variant:"outlined",placeholder:"Enter Your Photo URL here...",onChange:function(e){return A(e.target.value)}})]}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(s.a,{variant:"contained",color:"primary",onClick:function(t){t.preventDefault();var n="".concat(i," ").concat(b);m(g,C,n,z,e),e.push("/")},children:"Register"}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsxs)(s.a,{onClick:function(t){t.preventDefault(),x(),e.push("/")},style:{width:"70%",display:"block",textAlign:"center",margin:"auto"},children:[Object(V.jsx)("p",{children:"Continue With Google"}),Object(V.jsx)("img",{src:d,alt:"google",style:{width:"15%"}})]})]})},S=n(154),q=n(155),R=n(156),z=n(157),A=n(158),P=n(159),w=n(60),E=n(82),k=n.n(E),L="data:image/png;base64,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",K=n.p+"static/media/loading.91319f38.gif",X=Object(a.createContext)(),N=function(e){var t=Object(a.useState)({displayName:"",email:"",date:"",uid:""}),n=Object(r.a)(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){f(o)}),[]),Object(V.jsx)(X.Provider,{value:{currentUser:i},children:e.children})},Q=function(){var e=v(),t=e.blogList,n=e.isLoading,i=Object(a.useContext)(X),o=Object(y.g)(),c=function(e){"red"===e.target.style.color?e.target.style.color="gray":e.target.style.color="red"};return Object(V.jsx)("div",{children:n?Object(V.jsx)("img",{src:K,alt:"loading"}):null===t||void 0===t?void 0:t.map((function(e,t){return Object(V.jsxs)(S.a,{style:{width:"20%",height:"20rem",display:"inline-block",marginRight:"5%",marginBottom:"5%",overflowY:"auto"},onDoubleClick:function(){return function(e){var t;(null===i||void 0===i||null===(t=i.currentUser)||void 0===t?void 0:t.uid)?o.push({pathname:"/details/".concat(e)}):alert("Please Login To See Details!!!")}(e.id)},children:[Object(V.jsx)(q.a,{title:e.info.title}),Object(V.jsx)(R.a,{component:"img",image:e.info.url||L,title:"Post image",style:{width:"100%"}}),Object(V.jsx)(z.a,{children:Object(V.jsx)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:e.info.content})}),Object(V.jsx)(A.a,{disableSpacing:!0,children:Object(V.jsx)(P.a,{"aria-label":"add to favorites",onClick:c,children:Object(V.jsx)(k.a,{})})})]},t)}))})},W=function(){return Object(V.jsxs)("div",{children:[Object(V.jsx)("h1",{style:{color:"Purple",fontFamily:"fantasy"},children:"DASHBOARD"}),Object(V.jsx)(Q,{})]})},F=n.p+"static/media/spinner.46f1ece5.gif",Z=function(){var e,t,n,a=Object(y.h)().id,i=v(),o=i.blogList,c=i.isLoading,r=Object(y.g)(),l=function(e){return null===o||void 0===o?void 0:o.filter((function(t){return t.id===e}))}(a),j=function(e){!function(e){p.a.database().ref("blog").child(e).remove()}(e),r.push("/")};return Object(V.jsx)("div",{children:c?Object(V.jsx)("img",{src:F,alt:"loading"}):Object(V.jsxs)(S.a,{children:[Object(V.jsx)(q.a,{title:null===(e=l[0])||void 0===e?void 0:e.info.title}),Object(V.jsx)(R.a,{component:"img",image:(null===(t=l[0])||void 0===t?void 0:t.info.url)||L,title:"Post image",style:{width:"20%",margin:"auto"}}),Object(V.jsx)(z.a,{children:Object(V.jsx)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:null===(n=l[0])||void 0===n?void 0:n.info.content})}),Object(V.jsxs)("div",{style:{marginBottom:"1%"},children:[Object(V.jsx)(s.a,{onClick:function(){return j(l[0].id)},variant:"contained",color:"secondary",style:{marginRight:"5%"},children:"DELETE"}),Object(V.jsx)(s.a,{onClick:function(){return function(e){r.push({pathname:"/edit/".concat(e),blog:l})}(l[0].id)},variant:"contained",color:"primary",children:"UPDATE"})]})]})})},M=n(160),D=n.p+"static/media/no-data.a03fc88a.png",T=function(){var e=Object(a.useContext)(X).currentUser;return Object(V.jsxs)(S.a,{children:[Object(V.jsxs)(M.a,{children:[Object(V.jsx)(R.a,{component:"img",alt:"profile Picture",height:"400",image:e.photoURL||D,title:"Profile picture",style:{width:"30%",margin:"auto",marginTop:"2%"}}),Object(V.jsxs)(z.a,{children:[Object(V.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.displayName}),Object(V.jsx)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:e.email})]})]}),Object(V.jsx)(A.a,{})]})},B=n(149),I=function(e){var t,n,i,o,c,j,d=e.location.blog,u=Object(a.useState)(null===(t=d[0])||void 0===t||null===(n=t.info)||void 0===n?void 0:n.title),b=Object(r.a)(u,2),h=b[0],O=b[1],m=Object(a.useState)(null===(i=d[0])||void 0===i||null===(o=i.info)||void 0===o?void 0:o.url),g=Object(r.a)(m,2),f=g[0],x=g[1],v=Object(a.useState)(null===(c=d[0])||void 0===c||null===(j=c.info)||void 0===j?void 0:j.content),U=Object(r.a)(v,2),C=U[0],S=U[1],q=Object(y.g)(),R=function(e){var t,n=e;n.info.title=h,n.info.url=f,n.info.content=C,t=n,p.a.database().ref("blog").child(t.id).update(t),q.push("/")};return Object(V.jsx)("div",{className:"blog-container",children:Object(V.jsxs)("div",{className:"login",children:[Object(V.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-email",type:"text",id:"outlined-basic",variant:"outlined",placeholder:"Title",value:h,onChange:function(e){return O(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-password",type:"text",id:"outlined-basic",variant:"outlined",placeholder:"image Url",value:f,onChange:function(e){return x(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(B.a,{className:"content",rows:10,rowsMax:10,"aria-label":"maximum height",placeholder:"Enter Your Content Here",value:C,onChange:function(e){return S(e.target.value)}})]}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(s.a,{variant:"contained",color:"primary",onClick:function(){return R(d[0])},children:"Update Content"})]})})},G=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),c=Object(r.a)(o,2),j=c[0],d=c[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),h=b[0],O=b[1],m=Object(y.g)();return Object(V.jsx)("div",{className:"blog-container",children:Object(V.jsxs)("div",{className:"login",children:[Object(V.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-email",type:"text",id:"outlined-basic",variant:"outlined",placeholder:"Title",onChange:function(e){return i(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(l.a,{className:"login-password",type:"text",id:"outlined-basic",variant:"outlined",placeholder:"image Url",onChange:function(e){return d(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(B.a,{className:"content",rows:10,rowsMax:10,"aria-label":"maximum height",placeholder:"Enter Your Content Here",onChange:function(e){return O(e.target.value)}})]}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(s.a,{variant:"contained",color:"primary",onClick:function(e){!function(e){p.a.database().ref("blog").push(e)}({info:{title:n,content:h,url:j}}),m.push("/")},children:"Add Content"})]})})},Y=n(18),H=n(161),J=n(162),_=n(163),$=n(83),ee=n.n($),te=n(84),ne=n.n(te),ae=n(165),ie=n(85),oe=Object(H.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),ce=function(){var e,t,n,o=oe(),c=i.a.useState(null),l=Object(r.a)(c,2),j=l[0],d=l[1],u=Boolean(j),b=Object(a.useContext)(X),h=Object(y.g)(),O=function(){d(null)};return Object(V.jsx)("div",{className:o.root,children:Object(V.jsx)(J.a,{position:"static",children:Object(V.jsxs)(_.a,{children:[Object(V.jsx)(P.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"menu",children:Object(V.jsx)(ee.a,{})}),Object(V.jsx)(w.a,{variant:"h6",className:o.title,children:Object(V.jsxs)("i",{children:["WELCOME TO PALA'S PALACE - ",null===b||void 0===b||null===(e=b.currentUser)||void 0===e?void 0:e.displayName]})}),Object(V.jsxs)("div",{children:[Object(V.jsx)(P.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(V.jsx)(ne.a,{})}),(null===b||void 0===b||null===(t=b.currentUser)||void 0===t?void 0:t.displayName)?Object(V.jsx)(s.a,{onClick:function(){!function(e){p.a.auth().signOut(),e.push("/login")}(h)},style:{color:"white"},children:"Logout"}):"",Object(V.jsx)(ie.a,{id:"menu-appbar",anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:O,children:(null===b||void 0===b||null===(n=b.currentUser)||void 0===n?void 0:n.displayName)?Object(V.jsxs)("div",{children:[Object(V.jsxs)(Y.b,{to:"/profile",children:[Object(V.jsx)(Y.b,{to:"/",children:Object(V.jsx)(ae.a,{onClick:O,children:"Dashboard"})}),Object(V.jsx)(ae.a,{onClick:O,children:"Profile"})]}),Object(V.jsx)(Y.b,{to:"/upload",children:Object(V.jsx)(ae.a,{onClick:O,children:"new Post"})})]}):Object(V.jsxs)("div",{children:[Object(V.jsx)(Y.b,{to:"/",children:Object(V.jsx)(ae.a,{onClick:O,children:"Dashboard"})}),Object(V.jsx)(Y.b,{to:"/login",children:Object(V.jsx)(ae.a,{onClick:O,children:"Login"})}),Object(V.jsx)(Y.b,{to:"/register",children:Object(V.jsx)(ae.a,{onClick:O,children:"Register"})})]})})]})]})})})},re=n(86),le=function(e){var t=e.component,n=Object(re.a)(e,["component"]),i=Object(a.useContext)(X).currentUser;return Object(V.jsx)(y.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return(null===i||void 0===i?void 0:i.displayName)?Object(V.jsx)(t,Object(u.a)({},e)):Object(V.jsx)(y.a,{to:{pathname:"/",state:{from:e.location}}})}}))},se=function(){return Object(V.jsx)("div",{children:Object(V.jsxs)(Y.a,{children:[Object(V.jsx)(ce,{}),Object(V.jsxs)(y.d,{children:[Object(V.jsx)(y.b,{exact:!0,path:"/",component:W}),Object(V.jsx)(y.b,{path:"/login",component:U}),Object(V.jsx)(y.b,{path:"/register",component:C}),Object(V.jsx)(y.b,{path:"/details/:id",component:Z}),Object(V.jsx)(le,{component:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(y.b,{path:"/profile",component:T}),Object(V.jsx)(y.b,{path:"/edit/:id",component:I}),Object(V.jsx)(y.b,{path:"/upload",component:G})]})}})]})]})})};var je=function(){return Object(V.jsx)("div",{className:"App",children:Object(V.jsx)(N,{children:Object(V.jsx)(se,{})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(V.jsx)(i.a.StrictMode,{children:Object(V.jsx)(je,{})}),document.getElementById("root")),de()}},[[114,1,2]]]);
//# sourceMappingURL=main.86d3725c.chunk.js.map