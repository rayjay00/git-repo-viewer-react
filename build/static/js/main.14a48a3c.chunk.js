(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(n,e,r){n.exports=r(56)},56:function(n,e,r){"use strict";r.r(e);var t=r(16),a=r(17),o=r(23),i=r(18),c=r(24),u=r(0),l=r.n(u),m=r(4),s=r.n(m),d=r(1),f=r(2);function h(){var n=Object(d.a)(["\n    background-color: ",";\n    border-radius: 0;\n    border: 0;\n    font-family: 'Asap', sans-serif;\n    color: white;\n    font-size: 1.5vh;\n    text-transform: capitalize;\n    margin: 0;\n    height: 2.3rem;\n    flex: 0.8;\n"]);return h=function(){return n},n}function p(){var n=Object(d.a)(["\n    margin: 1rem 0 0 0;\n    ",";\n    background-color: white;\n    color: black;\n    font-family: 'Asap', sans-serif;\n    border: 1px solid rgb(95, 106, 125);\n    transition: border 0.2s ease-in-out;\n    border-radius: 3px;\n    width auto;\n    padding: 1rem;\n    ",";\n    :hover {\n        border: 1px solid rgb(84, 114, 204);\n    }\n"]);return p=function(){return n},n}function v(){var n=Object(d.a)(["\n    font-family: 'Asap', sans-serif;\n    color: black;\n    ",";\n    ",";\n"]);return v=function(){return n},n}var b=f.a.h1(v(),function(n){return n.error&&"text-align: center;"},function(n){return n.error||"margin-bottom: 0.2rem;"}),g=f.a.div(p(),function(n){return n.card&&"display: flex;\n        justify-content: space-around;\n        margin: 0 auto;\n        margin-top: 1rem;\n        padding: 1rem 0;\n        @media screen and (min-width: 551px) {\n            width: 20%;\n        }\n    "},function(n){return n.card||"\n            @media screen and (min-width: 551px) {\n                width: 48%;\n            }\n            @media screen and (min-width: 768px) {\n                width: 30%;\n            }\n    "});f.a.button(h(),function(n){return n.error?"red":"#000000"});function w(){var n=Object(d.a)(["\n    margin: 0;\n    font-size: 1.4vh;\n    margin-bottom: 0.3rem;\n"]);return w=function(){return n},n}var E=f.a.p(w()),x=function(n){var e=n.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null,e),l.a.createElement(E,null,"Made by ",l.a.createElement("a",{href:"https://www.github.com/rayjay00",target:"_blank",rel:"noopener noreferrer"},"Ryan"),"."))};function k(){var n=Object(d.a)(["\n    height: 100%;\n    height: 2rem;\n    -webkit-appearance:none;\n    flex: 1;\n"]);return k=function(){return n},n}var y=f.a.input(k()),j=function(){return l.a.createElement(y,{type:"text",id:"user"})};function O(){var n=Object(d.a)(["\n    background-color: ",";\n    border-radius: 0;\n    border: 0;\n    font-family: 'Asap', sans-serif;\n    color: white;\n    font-size: 1.5vh;\n    text-transform: capitalize;\n    margin: 0;\n    height: 2.3rem;\n    flex: 0.6;\n"]);return O=function(){return n},n}var z=f.a.button(O(),function(n){return n.error?"red":"#000000"}),A=function(n){var e=n.error,r=n.checked,t=n.type,a=n.card,o=n.handler;return l.a.createElement(z,{onClick:o,type:t,error:e},a?"See on GitHub":r?"Search Again":"Search For a User")};function S(){var n=Object(d.a)(["\n    display: flex;\n    @media screen and (min-width: 551px) {\n        width: 70%;\n    }\n    @media screen and (min-width: 768px) {\n        width: 50%;\n    }\n    @media screen and (min-width: 1261px) {\n        width: 25%;\n    }\n"]);return S=function(){return n},n}var F=f.a.div(S()),_=function(n){var e=n.checked,r=n.error,t=n.handler;return l.a.createElement(F,null,l.a.createElement(j,null),l.a.createElement(A,{checked:e,error:r,handler:t}))};function B(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: 'Asap', sans-serif;\n"]);return B=function(){return n},n}var G=f.a.div(B()),H=function(n){var e=n.title,r=n.checked,t=n.error,a=n.handler;return l.a.createElement(G,null,l.a.createElement(x,{title:e}),l.a.createElement(_,{checked:r,error:t,handler:a}))};function U(){var n=Object(d.a)(["\n    text-align: center;\n"]);return U=function(){return n},n}function C(){var n=Object(d.a)(["\n    max-height: 20vh;\n"]);return C=function(){return n},n}function I(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return I=function(){return n},n}var J=f.a.div(I()),L=f.a.img(C()),W=f.a.p(U()),M=function(n){var e=n.avatar,r=n.username;return l.a.createElement(g,{card:!0},l.a.createElement(J,null,l.a.createElement(L,{src:e}),l.a.createElement(W,null,r)))};function N(){var n=Object(d.a)(["\n    background-color: #000000;\n    border-radius: 3px;\n    border: 0;\n    font-family: 'Asap', sans-serif;\n    color: white;\n    font-size: 1rem;\n    text-transform: capitalize;\n    margin: 0;\n    flex: 0.6;\n    padding: 0.6rem 0.5rem;\n    text-decoration: none !important;\n    float: right;\n    height: auto;\n    margin: 0.2rem 0;\n"]);return N=function(){return n},n}function R(){var n=Object(d.a)(["\n    color: black;\n    letter-spacing: 0.05rem;\n    font-weight: 400;\n"]);return R=function(){return n},n}var T=f.a.div(R()),$=f.a.a(N()),q=function(n){var e=n.name,r=n.description,t=n.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,null,l.a.createElement("h4",null,e),l.a.createElement("p",null,r),l.a.createElement($,{href:t},"See it on GitHub")))},D=r(21),K=r.n(D);function P(){var n=Object(d.a)(["\n    font-size: 1rem;\n    color: #00a1fe;\n    text-align: right;\n    text-transform: capitalize;\n    clear: both;\n    margin: 4rem 0 0 0;\n"]);return P=function(){return n},n}var Q=f.a.p(P()),V=function(n){var e=n.time;return l.a.createElement(Q,null,"Last Updated: ",K()(e).fromNow())},X=function(n){var e=n.repo;return l.a.createElement(g,null,l.a.createElement(q,{name:e.name,description:e.description,url:e.html_url}),l.a.createElement(V,{time:e.updated_at}))};function Y(){var n=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n"]);return Y=function(){return n},n}var Z=f.a.section(Y()),nn=function(n){var e=n.repos;return l.a.createElement(Z,null,e.map(function(n){return l.a.createElement(X,{key:n.id,repo:n})}))},en=r(22),rn=r.n(en);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tn=function(n){function e(n){var r;return Object(t.a)(this,e),(r=Object(o.a)(this,Object(i.a)(e).call(this,n))).state={repos:[],username:"",checked:!1,error:!1,owner:""},r}return Object(c.a)(e,n),Object(a.a)(e,[{key:"handler",value:function(){var n=this,e=document.getElementById("user").value;rn.a.get("https://api.github.com/users/".concat(e,"/repos")).then(function(r){var t=r.data;console.log("repos",t),n.setState({repos:t,username:e,checked:!0,error:!1,owner:t[0].owner,avatar:t[0].owner.avatar_url})}).catch(function(e){console.log("error",e),n.setState({error:!0})})}},{key:"render",value:function(){var n=this.state,e=n.repos,r=n.checked,t=n.error,a=n.owner,o=n.username,i=n.avatar;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{title:"Search for a GitHub User",checked:r,error:t,handler:this.handler.bind(this)}),t?l.a.createElement(b,{error:t},"Oops... Looks like that user doesn't exist. Try again!"):l.a.createElement(l.a.Fragment,null,Object.keys(a).length>0&&l.a.createElement(M,{username:o,avatar:i}),e.length>1&&l.a.createElement(nn,{repos:e})))}}]),e}(l.a.Component);s.a.render(l.a.createElement(tn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.14a48a3c.chunk.js.map