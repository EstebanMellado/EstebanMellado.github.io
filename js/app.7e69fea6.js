(function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],c=0,f=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);g&&g(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"adc82405"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"c923332a"}[t]+".css",a=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],c=u.getAttribute("data-href");if(c===r||c===a)return e()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=e,g.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],g.parentNode.removeChild(g),n(i)},g.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t);var f=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(g);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var g=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0331":function(t,e,n){"use strict";var r=n("21f0"),o=n.n(r);o.a},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0614":function(t,e,n){t.exports=n.p+"img/azureLogo.75d8a709.png"},"1ac0":function(t,e,n){t.exports=n.p+"img/vueLogo.82b9c7a5.png"},"21f0":function(t,e,n){},"2c86":function(t,e,n){t.exports=n.p+"img/steve.53610360.png"},"2e03":function(t,e,n){t.exports=n.p+"img/dockerLogo.84295f96.png"},"411a":function(t,e,n){},4389:function(t,e,n){t.exports=n.p+"img/sqlLogo.3ad7d462.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("English Version")]),t._v(" | "),n("router-link",{attrs:{to:"/es"}},[t._v("Versión Castellano")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,o,a,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("b-alert",{attrs:{show:""}},[r("b-icon",{staticClass:"mx-2",attrs:{icon:"info-fill",scale:"2",variant:"info"}}),t._v(" Site under construction! "),r("b-icon",{staticClass:"mx-2",attrs:{icon:"tools",scale:"1.5"}})],1),r("b-img",{attrs:{src:n("2c86"),fluid:"",alt:"Esteban image profile",rounded:"circle",width:"300",height:"300"}}),r("HelloWorld",{attrs:{msg:"Welcome to Esteban's profile"}})],1)},g=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("p",[t._v("Born in the 90's and coding since 2017. Always worked in IT. My motivation are new challenges, always wants to learn new technologies.")]),n("p",[t._v("When I am not coding I'm doing some sports or hanging out with friends or going to meetups to make networking and meet other developers.")]),n("p",[t._v("In 2018 I became a speaker in some national and international tech events, this turns up something new in me and gave me lovely experiences on a stage sharing my knowledge.")]),n("h3",[t._v("Some of my skills")]),n("Skills"),n("h3",[t._v("Essential Links")]),n("SocialNetworks")],1)},d=[],h=n("9086"),m=n("7431"),b={name:"HelloWorld",props:{msg:String},components:{Skills:h["a"],SocialNetworks:m["a"]}},v=b,w=(n("8fea"),Object(i["a"])(v,p,d,!1,null,"3ab0696a",null)),k=w.exports,_={name:"Home",components:{HelloWorld:k}},y=_,L=Object(i["a"])(y,f,g,!1,null,null,null),x=L.exports;r["default"].use(c["a"]);var S=[{path:"/",name:"Home",component:x},{path:"/es",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],j=new c["a"]({mode:"history",base:"/",routes:S}),E=j,O=n("2f62");r["default"].use(O["a"]);var C=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("5f5b"),N=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(A["a"]),r["default"].use(N["a"]),r["default"].config.productionTip=!1,new r["default"]({router:E,store:C,render:function(t){return t(u)}}).$mount("#app")},"62cb":function(t,e,n){"use strict";var r=n("411a"),o=n.n(r);o.a},7107:function(t,e,n){t.exports=n.p+"img/awsLogo.svg.dcf4eb25.png"},7431:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",[r("li",[r("a",{attrs:{href:"https://ar.linkedin.com/in/estebanmellado",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("d2ff"),fluid:"",alt:"Linkedin Logo",width:"70",height:"70"}})],1)]),r("li",[r("a",{attrs:{href:"https://twitter.com/m_esteban90",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("7932"),fluid:"",alt:"Twitter Logo",width:"75",height:"75"}})],1)]),r("li",[r("a",{attrs:{href:"https://github.com/EstebanMellado",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("899f"),fluid:"",alt:"Github Logo",width:"70",height:"70"}})],1)])])])},o=[],a={name:"SocialNetworks"},i=a,s=(n("0331"),n("2877")),l=Object(s["a"])(i,r,o,!1,null,"0ea774c8",null);e["a"]=l.exports},7921:function(t,e,n){t.exports=n.p+"img/netCoreLogo.svg.da339832.png"},7932:function(t,e,n){t.exports=n.p+"img/twitterLogo.00803bd1.png"},"85ec":function(t,e,n){},"899f":function(t,e,n){t.exports=n.p+"img/githubLogo.3e54ed15.png"},"8e57":function(t,e,n){t.exports=n.p+"img/mongodbLogo.4fc05b49.png"},"8fea":function(t,e,n){"use strict";var r=n("ffae"),o=n.n(r);o.a},9086:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",[r("li",[r("a",{attrs:{href:"https://dotnet.microsoft.com/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("7921"),fluid:"",alt:"Net Core Logo",width:"50",height:"50"}})],1)]),r("li",[r("a",{attrs:{href:"https://nodejs.org/es/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("c693"),fluid:"",alt:"Node.js Logo",width:"70",height:"70"}})],1)]),r("li",[r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("1ac0"),fluid:"",alt:"Vue.js Logo",width:"50",height:"50"}})],1)]),r("li",[r("a",{attrs:{href:"https://angular.io/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("ea29"),fluid:"",alt:"Angular Logo",width:"70",height:"70"}})],1)]),r("li",[r("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("8e57"),fluid:"",alt:"Mongodb Logo",width:"70",height:"70"}})],1)]),r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/SQL",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("4389"),fluid:"",alt:"SQL Logo",width:"80",height:"80"}})],1)]),r("li",[r("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("2e03"),fluid:"",alt:"Docker Logo",width:"70",height:"70"}})],1)]),r("li",[r("a",{attrs:{href:"https://azure.microsoft.com/es-es/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("0614"),fluid:"",alt:"Azure Logo",width:"70",height:"70"}})],1)]),r("li",[r("a",{attrs:{href:"https://aws.amazon.com/",target:"_blank",rel:"noopener"}},[r("b-img",{attrs:{src:n("7107"),fluid:"",alt:"AWS Logo",width:"70",height:"70"}})],1)])])])},o=[],a={name:"Skills"},i=a,s=(n("62cb"),n("2877")),l=Object(s["a"])(i,r,o,!1,null,"2d8519b4",null);e["a"]=l.exports},c693:function(t,e,n){t.exports=n.p+"img/nodeLogo.58548a9c.jpg"},d2ff:function(t,e,n){t.exports=n.p+"img/linkedinLogo.9d3f835d.png"},ea29:function(t,e,n){t.exports=n.p+"img/angularLogo.svg.1a632d2b.png"},ffae:function(t,e,n){}});
//# sourceMappingURL=app.7e69fea6.js.map