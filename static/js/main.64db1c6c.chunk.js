(this["webpackJsonpexpense-tracker-app"]=this["webpackJsonpexpense-tracker-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),u=a(23),l=a(3),i=(a(38),function(){return r.a.createElement("h2",null,"TRACK SPENDINGS")}),s=a(8),m=a(2),p=a(10),f=a.n(p),d=a(5),b=a(15),E=a(13),O=function(e,t){switch(t.type){case"SET_USER":return Object(d.a)(Object(d.a)({},e),{},{user:t.payload});case"GET_TRANSACTIONS":return Object(d.a)(Object(d.a)({},e),{},{transactions:t.payload,loading:!1});case"DELETE_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)({transactions:[t.payload].concat(Object(E.a)(e.transactions))},e);case"FAILED":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}},h=a(12),v=a.n(h),j=(a(40),a(42),v.a.initializeApp({apiKey:"AIzaSyAdJzQOOwzf7aJUdnv5lELqifzOXaFzO9E",authDomain:"react--expense-tracker.firebaseapp.com",databaseURL:"https://react--expense-tracker.firebaseio.com",projectId:"react--expense-tracker",storageBucket:"react--expense-tracker.appspot.com",messagingSenderId:"402368774884",appId:"1:402368774884:web:a9738caa7a58412b8122f1",measurementId:"G-C5018ZXQVB"})),y=v.a.auth,x=j.firestore(),g=new v.a.auth.GoogleAuthProvider,N=new v.a.auth.GithubAuthProvider,S={user:null,transactions:[],error:null,loading:!0},T=Object(n.createContext)(S),A=function(e){var t=e.children,a=Object(n.useReducer)(O,S),c=Object(s.a)(a,2),o=c[0],u=c[1];function l(){return(l=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("expenses").where("userId","==",o.user.uid).orderBy("timeStamp","desc").onSnapshot((function(e){return u({type:"GET_TRANSACTIONS",payload:e.docs.map((function(e){var t=e.data(),a=e.id;return Object(d.a)(Object(d.a)({},t),{},{id:a})}))})}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.collection("expenses").doc(t).delete().then((function(){u({type:"DELETE_TRANSACTION",payload:t})})).catch((function(e){console.error("Error removing expense: ",e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(d.a)(Object(d.a)({},t),{},{userId:o.user.uid}),x.collection("expenses").add(a).then((function(e){u({type:"ADD_TRANSACTION",payload:a})})).catch((function(e){console.log("Error adding expense",e.message)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(T.Provider,{value:{user:o.user,transactions:o.transactions,setUser:function(e){u({type:"SET_USER",payload:e})},getTransactions:function(){return l.apply(this,arguments)},deleteTransaction:function(e){return i.apply(this,arguments)},addTransaction:function(e){return m.apply(this,arguments)},error:o.error,loading:o.loading}},t)},w=function(){var e=Object(n.useContext)(T).transactions,t=Object(n.useState)(0),a=Object(s.a)(t,2),c=a[0],o=a[1],u=e.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2),l=Object(m.c)({number:Number(u),from:{number:c}});return Object(n.useEffect)((function(){o(u)}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{className:"balance"},u<0?"-":"","\u20b9",r.a.createElement(m.a.span,null,l.number.interpolate((function(e){return Math.abs(e.toFixed(2))})))))},C=function(){var e=Object(n.useContext)(T).transactions,t=Object(n.useState)(0),a=Object(s.a)(t,1)[0],c=Object(n.useState)(0),o=Object(s.a)(c,1)[0],u=Object(n.useRef)(),l=Object(m.c)({opacity:1,from:{opacity:0},ref:u}),i=e.map((function(e){return e.amount})),p=i.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),f=Object(n.useRef)(),d=Object(m.c)({number:Number(p),from:{number:a},ref:f}),b=(-1*i.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2),E=Object(n.useRef)(),O=Object(m.c)({number:Number(b),from:{number:o},ref:E});return Object(m.b)([u,f,E]),r.a.createElement(m.a.div,{style:l},r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+ \u20b9"," ",r.a.createElement(m.a.span,null,d.number.interpolate((function(e){return Math.floor(e)}))))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"- \u20b9"," ",r.a.createElement(m.a.span,null,O.number.interpolate((function(e){return Math.floor(e)})))))))},k=function(e){var t,a=e.transaction,c=e.index,o=Object(n.useContext)(T).deleteTransaction,u=a.amount<0?"-":"+",l=Object(m.c)({number:Number(a.amount),from:{number:0},delay:150*c});return r.a.createElement("li",{className:a.amount<0?"minus":"plus"},r.a.createElement("div",{className:"transaction-text"},r.a.createElement("span",null,a.text),r.a.createElement("span",null,new Date(null===(t=a.timeStamp)||void 0===t?void 0:t.toDate()).toLocaleDateString())),r.a.createElement("span",null,u," \u20b9",r.a.createElement(m.a.span,null,l.number.interpolate((function(e){return Math.abs(e.toFixed(2))})))),r.a.createElement("button",{onClick:function(){return confirm("Are you sure you want to delete this expense")?o(a.id):null},className:"delete-btn"},r.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"}))))},I=function(){var e=Object(n.useContext)(T),t=e.transactions,a=e.getTransactions;Object(n.useEffect)((function(){a()}),[]);var c=Object(m.d)(t,(function(e){return e.id}),{from:{transform:"scale(0.9)",opacity:0},enter:{transform:"scale(1)",opacity:1},leave:{transform:"scale(0.9)",opacity:0},trail:150});return r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},c.map((function(e,t){var a=e.item,n=e.props,c=e.key;return r.a.createElement(m.a.div,{key:c,style:n},r.a.createElement(k,{key:a.id,transaction:a,index:t}))}))))},_=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),u=Object(s.a)(o,2),l=u[0],i=u[1],p=Object(n.useContext)(T).addTransaction,f=Object(m.c)({opacity:1,from:{opacity:0},delay:150}),d=Object(m.c)({opacity:1,from:{opacity:0},delay:300}),b=Object(m.c)({opacity:1,from:{opacity:0},delay:450});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={text:a,amount:+l,timeStamp:v.a.firestore.FieldValue.serverTimestamp()};p(t),c(""),i(0)}},r.a.createElement(m.a.div,{style:f},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Title"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){c(e.target.value)},placeholder:"Enter title..."}))),r.a.createElement(m.a.div,{style:d},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount (-/+)"),r.a.createElement("input",{type:"number",value:l,onChange:function(e){return i(e.target.value)},placeholder:"Enter amount..."}))),r.a.createElement(m.a.div,{style:b},r.a.createElement("button",{className:"btn"},"Add transaction"))))};var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(_,null),r.a.createElement(I,null)))};var R=function(e){var t=e.history,a=Object(n.useContext)(T).setUser,c=Object(n.useState)(!0),o=Object(s.a)(c,2),u=o[0],l=o[1],i=function(){var e=Object(b.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="GOOGLE"===n?g:N,e.next=3,y().signInWithPopup(r).then((function(e){a(e.user),t.push("/")})).catch((function(e){alert(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=y().onAuthStateChanged((function(n){n&&(a(n),t.push("/")),l(!1),e()}))}),[]),u?r.a.createElement(r.a.Fragment,null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"login__heading"},"Expense Tracker"),r.a.createElement("div",{className:"login"},r.a.createElement("button",{className:"login__button",onClick:function(){return i("GOOGLE")}},"Login"),r.a.createElement("div",{className:"login__github"},"Login with\xa0",r.a.createElement("button",{className:"login__github-button",onClick:function(){return i("GITHUB")}},r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))))))},D=a(32),G=function(e){var t=e.component,a=Object(D.a)(e,["component"]),c=Object(n.useContext)(T).user;return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/login"})}}))};var L=function(){return r.a.createElement(A,null,r.a.createElement(u.a,{basename:"/expense-tracker-react"},r.a.createElement(G,{exact:!0,path:"/",component:F}),r.a.createElement(l.b,{exact:!0,path:"/login",component:R})))};o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.64db1c6c.chunk.js.map