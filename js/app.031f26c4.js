(function(){"use strict";var e={1818:function(e,t,n){var r=n(9242),i=n(3396);function s(e,t,n,r,s,a){const o=(0,i.up)("Barra"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o),(0,i.Wm)(u)],64)}const a={class:"Link_nav"},o=(0,i.Uk)("Home"),u=(0,i.Uk)("Characters");function l(e,t,n,r,s,l){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("nav",a,[(0,i.Wm)(c,{class:"Link_cor",to:"/"},{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(c,{class:"Link_cor",to:"/Personagens"},{default:(0,i.w5)((()=>[u])),_:1})])])}var c={},d=n(89);const h=(0,d.Z)(c,[["render",l]]);var f=h,m={name:"App",components:{Barra:f}};const p=(0,d.Z)(m,[["render",s]]);var _=p,g=n(2483),v=n(7139);const w={class:"area"},y={class:"area_Procurar"},b={class:"area_info"},k=(0,i.Uk)("Nome: "),D=["src"],C=(0,i.Uk)("Origem: "),S=(0,i.Uk)("Genero: "),R=(0,i.Uk)("Status: "),E=(0,i.Uk)("Specie: "),O={class:"area_total_consulta"},N=["onClick"],T={class:"area_residents"},j={class:"area_residents_button"},A=(0,i._)("h5",{class:"area_residents_titulo"},[(0,i.Uk)("Residents / Moradores "),(0,i._)("span",null,"/ Nomes(ID)")],-1),H={class:"area_residents_titulo"},P={class:"area_total_consulta"},U={class:"area_consulta"};function z(e,t,n,s,a,o){const u=(0,i.up)("Exibir_Residents");return(0,i.wg)(),(0,i.iD)("main",null,[(0,i._)("section",w,[(0,i._)("div",y,[(0,i.wy)((0,i._)("input",{class:"area_input",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.Digitos=e),onKeyup:t[1]||(t[1]=(0,r.D2)(((...e)=>o.Digicted&&o.Digicted(...e)),["enter"]))},null,544),[[r.nr,a.Digitos]]),(0,i._)("input",{type:"submit",class:"area_button",value:"Concluir",onClick:t[2]||(t[2]=(...e)=>o.Digicted&&o.Digicted(...e))}),(0,i.wy)((0,i._)("div",b,[(0,i._)("h1",null,[k,(0,i._)("span",null,(0,v.zw)(a.name),1)]),(0,i._)("img",{src:a.image},null,8,D),(0,i._)("p",null,[C,(0,i._)("span",null,(0,v.zw)(a.location),1)]),(0,i._)("p",null,[S,(0,i._)("span",null,(0,v.zw)(a.gender),1)]),(0,i._)("p",null,[R,(0,i._)("span",null,(0,v.zw)(a.status),1)]),(0,i._)("p",null,[E,(0,i._)("span",null,(0,v.zw)(a.specie),1)]),(0,i._)("button",{onClick:t[3]||(t[3]=e=>o.Testando())},"Residentes")],512),[[r.F8,a.Show]]),(0,i._)("div",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.nomes,((e,t)=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{key:t,class:"area_consulta"},[(0,i._)("button",{onClick:t=>o.Teste(e.id)},(0,v.zw)(e.name)+" ("+(0,v.zw)(e.id)+")",9,N)])),[[r.F8,a.Hide]]))),128))])]),(0,i.wy)((0,i._)("section",T,[(0,i._)("div",j,[(0,i._)("button",{onClick:t[4]||(t[4]=(...e)=>o.hide_residents&&o.hide_residents(...e))},"X")]),A,(0,i._)("h5",H,(0,v.zw)(a.name),1),(0,i._)("div",P,[(0,i._)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.nomes,((e,t)=>((0,i.wg)(),(0,i.j4)(u,{key:t,testi:e,name:a.name},null,8,["testi","name"])))),128))])])],512),[[r.F8,a.Show_residents]])])])}var M=n(6265),x=n.n(M);const L=x().create({baseURL:"https://rickandmortyapi.com/api",timeout:1e4});var F=L;function I(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("button",null,[(0,i._)("p",null,(0,v.zw)(s.Residents_Names)+" ("+(0,v.zw)(s.Residents_ID)+")",1)])}var B={name:"Exibir_Residents",data(){return{Residents_Names:null,Residents_ID:null}},props:{testi:String,name:String},methods:{testando2(){F.get(`${this.testi}`).then((e=>{this.Residents_Names=e.data.name,this.Residents_ID=e.data.id}))}},mounted(){this.testando2()}};const W=(0,d.Z)(B,[["render",I]]);var K=W,Z={name:"HelloWorld",props:{msg:String},data(){return{Digitos:null,Show:null,Hide:null,name:null,image:null,location:null,gender:null,status:null,specie:null,Residents:null,arr:[],Resultados_arrays:null,nomes:null,teste:null,Show_residents:null}},methods:{Teste(e){this.Digitos=e,this.CharacterNAME()},Digicted(){this.arrays_residents=[],this.Show_residents=!1,this.Digitos>0?this.CharacterNAME():this.CharacterID()},CharacterNAME(){this.Show=!0,this.Hide=!1,this.Show_residents=!1,F.get(`/character/${this.Digitos}`).then((e=>{this.Digitos=null,this.nomes=null,this.name=e.data.name,this.image=e.data.image,this.location=e.data.location.name,this.gender=e.data.gender,this.status=e.data.status,this.specie=e.data.species,this.Residents=e.data.location.url}))},CharacterID(){this.Show_residents=!1,this.Show=!1,this.Hide=!0,F.get(`/character/?name=${this.Digitos}`).then((e=>{this.Digitos=null,this.nomes=e.data.results}))},Testando(){this.Show_residents=!0,F.get(`${this.Residents}`).then((e=>{this.nomes=e.data.residents}))},hide_residents(){this.Show_residents=!1}},components:{Exibir_Residents:K,Headers:Headers}};const $=(0,d.Z)(Z,[["render",z]]);var Y=$;const q=[{path:"/",name:"home",component:Y},{path:"/Personagens",name:"about",component:()=>n.e(130).then(n.bind(n,130))}],G=(0,g.p7)({history:(0,g.PO)("/Rick-and-Morty/"),routes:q});var V=G,X=n(65),J=(0,X.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(_).use(J).use(V).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,s){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],s=e[c][2];for(var o=!0,u=0;u<r.length;u++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(o=!1,s<a&&(a=s));if(o){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".584b8e34.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".a27acc0a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-app:";n.l=function(r,i,s,a){if(e[r])e[r].push(i);else{var o,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+s),o.src=r),e[r]=[i];var h=function(t,n){o.onerror=o.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Rick-and-Morty/"}(),function(){var e=function(e,t,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(s){if(i.onerror=i.onload=null,"load"===s.type)n();else{var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=o,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=s,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===e||s===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],s=i.getAttribute("data-href");if(s===e||s===t)return i}},r=function(r){return new Promise((function(i,s){var a=n.miniCssF(r),o=n.p+a;if(t(a,o))return i();e(r,o,i,s)}))},i={143:0};n.f.miniCss=function(e,t){var n={130:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var s=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=s);var a=n.p+n.u(t),o=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",o.name="ChunkLoadError",o.type=s,o.request=a,i[1](o)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,a=r[0],o=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(u)var c=u(n)}for(t&&t(r);l<a.length;l++)s=a[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},r=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1818)}));r=n.O(r)})();
//# sourceMappingURL=app.031f26c4.js.map