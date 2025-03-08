(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function w(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(o){if(o.ep)return;o.ep=!0;const t=w(o);fetch(o.href,t)}})();var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function re(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var oe={exports:{}};(function(v,y){(function(w,u){v.exports=u()})(ne,function(){return function(w){function u(t){if(o[t])return o[t].exports;var a=o[t]={exports:{},id:t,loaded:!1};return w[t].call(a.exports,a,a.exports,u),a.loaded=!0,a.exports}var o={};return u.m=w,u.c=o,u.p="dist/",u(0)}([function(w,u,o){function t(s){return s&&s.__esModule?s:{default:s}}var a=Object.assign||function(s){for(var j=1;j<arguments.length;j++){var A=arguments[j];for(var Y in A)Object.prototype.hasOwnProperty.call(A,Y)&&(s[Y]=A[Y])}return s},p=o(1),k=(t(p),o(6)),n=t(k),d=o(7),i=t(d),c=o(8),l=t(c),b=o(9),E=t(b),L=o(10),K=t(L),Q=o(11),R=t(Q),U=o(14),G=t(U),_=[],J=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},T=function(){var s=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(s&&(J=!0),J)return _=(0,R.default)(_,g),(0,K.default)(_,g.once),_},I=function(){_=(0,G.default)(),T()},r=function(){_.forEach(function(s,j){s.node.removeAttribute("data-aos"),s.node.removeAttribute("data-aos-easing"),s.node.removeAttribute("data-aos-duration"),s.node.removeAttribute("data-aos-delay")})},e=function(s){return s===!0||s==="mobile"&&E.default.mobile()||s==="phone"&&E.default.phone()||s==="tablet"&&E.default.tablet()||typeof s=="function"&&s()===!0},f=function(s){g=a(g,s),_=(0,G.default)();var j=document.all&&!window.atob;return e(g.disable)||j?r():(g.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?T(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){T(!0)}):document.addEventListener(g.startEvent,function(){T(!0)}),window.addEventListener("resize",(0,i.default)(T,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,i.default)(T,g.debounceDelay,!0)),window.addEventListener("scroll",(0,n.default)(function(){(0,K.default)(_,g.once)},g.throttleDelay)),g.disableMutationObserver||l.default.ready("[data-aos]",I),_)};w.exports={init:f,refresh:T,refreshHard:I}},function(w,u){},,,,,function(w,u){(function(o){function t(e,f,s){function j(m){var S=z,W=P;return z=P=void 0,H=m,O=e.apply(W,S)}function A(m){return H=m,x=setTimeout(F,f),B?j(m):O}function Y(m){var S=m-M,W=m-H,ee=f-S;return D?I(ee,q-W):ee}function C(m){var S=m-M,W=m-H;return M===void 0||S>=f||S<0||D&&W>=q}function F(){var m=r();return C(m)?X(m):void(x=setTimeout(F,Y(m)))}function X(m){return x=void 0,h&&z?j(m):(z=P=void 0,O)}function Z(){x!==void 0&&clearTimeout(x),H=0,z=M=P=x=void 0}function V(){return x===void 0?O:X(r())}function N(){var m=r(),S=C(m);if(z=arguments,P=this,M=m,S){if(x===void 0)return A(M);if(D)return x=setTimeout(F,f),j(M)}return x===void 0&&(x=setTimeout(F,f)),O}var z,P,q,O,x,M,H=0,B=!1,D=!1,h=!0;if(typeof e!="function")throw new TypeError(c);return f=d(f)||0,p(s)&&(B=!!s.leading,D="maxWait"in s,q=D?T(d(s.maxWait)||0,f):q,h="trailing"in s?!!s.trailing:h),N.cancel=Z,N.flush=V,N}function a(e,f,s){var j=!0,A=!0;if(typeof e!="function")throw new TypeError(c);return p(s)&&(j="leading"in s?!!s.leading:j,A="trailing"in s?!!s.trailing:A),t(e,f,{leading:j,maxWait:f,trailing:A})}function p(e){var f=typeof e>"u"?"undefined":i(e);return!!e&&(f=="object"||f=="function")}function k(e){return!!e&&(typeof e>"u"?"undefined":i(e))=="object"}function n(e){return(typeof e>"u"?"undefined":i(e))=="symbol"||k(e)&&g.call(e)==b}function d(e){if(typeof e=="number")return e;if(n(e))return l;if(p(e)){var f=typeof e.valueOf=="function"?e.valueOf():e;e=p(f)?f+"":f}if(typeof e!="string")return e===0?e:+e;e=e.replace(E,"");var s=K.test(e);return s||Q.test(e)?R(e.slice(2),s?2:8):L.test(e)?l:+e}var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,b="[object Symbol]",E=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,R=parseInt,U=(typeof o>"u"?"undefined":i(o))=="object"&&o&&o.Object===Object&&o,G=(typeof self>"u"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self,_=U||G||Function("return this")(),J=Object.prototype,g=J.toString,T=Math.max,I=Math.min,r=function(){return _.Date.now()};w.exports=a}).call(u,function(){return this}())},function(w,u){(function(o){function t(r,e,f){function s(h){var m=N,S=z;return N=z=void 0,M=h,q=r.apply(S,m)}function j(h){return M=h,O=setTimeout(C,e),H?s(h):q}function A(h){var m=h-x,S=h-M,W=e-m;return B?T(W,P-S):W}function Y(h){var m=h-x,S=h-M;return x===void 0||m>=e||m<0||B&&S>=P}function C(){var h=I();return Y(h)?F(h):void(O=setTimeout(C,A(h)))}function F(h){return O=void 0,D&&N?s(h):(N=z=void 0,q)}function X(){O!==void 0&&clearTimeout(O),M=0,N=x=z=O=void 0}function Z(){return O===void 0?q:F(I())}function V(){var h=I(),m=Y(h);if(N=arguments,z=this,x=h,m){if(O===void 0)return j(x);if(B)return O=setTimeout(C,e),s(x)}return O===void 0&&(O=setTimeout(C,e)),q}var N,z,P,q,O,x,M=0,H=!1,B=!1,D=!0;if(typeof r!="function")throw new TypeError(i);return e=n(e)||0,a(f)&&(H=!!f.leading,B="maxWait"in f,P=B?g(n(f.maxWait)||0,e):P,D="trailing"in f?!!f.trailing:D),V.cancel=X,V.flush=Z,V}function a(r){var e=typeof r>"u"?"undefined":d(r);return!!r&&(e=="object"||e=="function")}function p(r){return!!r&&(typeof r>"u"?"undefined":d(r))=="object"}function k(r){return(typeof r>"u"?"undefined":d(r))=="symbol"||p(r)&&J.call(r)==l}function n(r){if(typeof r=="number")return r;if(k(r))return c;if(a(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=a(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=r.replace(b,"");var f=L.test(r);return f||K.test(r)?Q(r.slice(2),f?2:8):E.test(r)?c:+r}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},i="Expected a function",c=NaN,l="[object Symbol]",b=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt,R=(typeof o>"u"?"undefined":d(o))=="object"&&o&&o.Object===Object&&o,U=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,G=R||U||Function("return this")(),_=Object.prototype,J=_.toString,g=Math.max,T=Math.min,I=function(){return G.Date.now()};w.exports=t}).call(u,function(){return this}())},function(w,u){function o(d){var i=void 0,c=void 0;for(i=0;i<d.length;i+=1)if(c=d[i],c.dataset&&c.dataset.aos||c.children&&o(c.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!t()}function p(d,i){var c=window.document,l=t(),b=new l(k);n=i,b.observe(c.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function k(d){d&&d.forEach(function(i){var c=Array.prototype.slice.call(i.addedNodes),l=Array.prototype.slice.call(i.removedNodes),b=c.concat(l);if(o(b))return n()})}Object.defineProperty(u,"__esModule",{value:!0});var n=function(){};u.default={isSupported:a,ready:p}},function(w,u){function o(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(u,"__esModule",{value:!0});var a=function(){function c(l,b){for(var E=0;E<b.length;E++){var L=b[E];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(l,L.key,L)}}return function(l,b,E){return b&&c(l.prototype,b),E&&c(l,E),l}}(),p=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,k=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=function(){function c(){o(this,c)}return a(c,[{key:"phone",value:function(){var l=t();return!(!p.test(l)&&!k.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=t();return!(!n.test(l)&&!d.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),c}();u.default=new i},function(w,u){Object.defineProperty(u,"__esModule",{value:!0});var o=function(a,p,k){var n=a.node.getAttribute("data-aos-once");p>a.position?a.node.classList.add("aos-animate"):typeof n<"u"&&(n==="false"||!k&&n!=="true")&&a.node.classList.remove("aos-animate")},t=function(a,p){var k=window.pageYOffset,n=window.innerHeight;a.forEach(function(d,i){o(d,n+k,p)})};u.default=t},function(w,u,o){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(u,"__esModule",{value:!0});var a=o(12),p=t(a),k=function(n,d){return n.forEach(function(i,c){i.node.classList.add("aos-init"),i.position=(0,p.default)(i.node,d.offset)}),n};u.default=k},function(w,u,o){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(u,"__esModule",{value:!0});var a=o(13),p=t(a),k=function(n,d){var i=0,c=0,l=window.innerHeight,b={offset:n.getAttribute("data-aos-offset"),anchor:n.getAttribute("data-aos-anchor"),anchorPlacement:n.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(c=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(n=document.querySelectorAll(b.anchor)[0]),i=(0,p.default)(n).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=n.offsetHeight/2;break;case"bottom-bottom":i+=n.offsetHeight;break;case"top-center":i+=l/2;break;case"bottom-center":i+=l/2+n.offsetHeight;break;case"center-center":i+=l/2+n.offsetHeight/2;break;case"top-top":i+=l;break;case"bottom-top":i+=n.offsetHeight+l;break;case"center-top":i+=n.offsetHeight/2+l}return b.anchorPlacement||b.offset||isNaN(d)||(c=d),i+c};u.default=k},function(w,u){Object.defineProperty(u,"__esModule",{value:!0});var o=function(t){for(var a=0,p=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)a+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),p+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:p,left:a}};u.default=o},function(w,u){Object.defineProperty(u,"__esModule",{value:!0});var o=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(a){return{node:a}})};u.default=o}])})})(oe);var ie=oe.exports;const ae=re(ie);$("button#form-btn").click(function(v){if(v.preventDefault(),$("#email").val().length<3||$("#message").val().length<10){$("#form-error").text("Please fill both fields.");return}$("#contact-form").submit()});document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&(window.scrollTo(0,0),setTimeout(()=>{window.location.hash=""},1));const v=document.getElementById("main-nav"),y=document.getElementById("profile-photo"),w=30,u=30,o=400,t=30,a=window.innerWidth>=768?320:256,p=a*.2;window.addEventListener("scroll",()=>{if(window.scrollY>t?(y==null||y.classList.add("behind"),v==null||v.classList.add("transparent")):(y==null||y.classList.remove("behind"),v==null||v.classList.remove("transparent")),window.scrollY>w?v==null||v.classList.add("scrolled"):v==null||v.classList.remove("scrolled"),window.scrollY>u){const i=Math.min((window.scrollY-u)/(o-u),1);if(y){const c=a-(a-p)*i;y.style.opacity=Math.max(1-i*.8,.2),y.style.transform=`translateY(${-40*i}px)`,y.style.filter=`blur(${4*i}px)`,y.style.width=`${c}px`,y.style.height=`${c}px`}}else y&&(y.style.opacity=1,y.style.transform="translateY(0)",y.style.filter="blur(0)",y.style.width=`${a}px`,y.style.height=`${a}px`)}),ae.init({duration:800,easing:"ease-out-quad",once:!1,mirror:!1,offset:120,delay:100});const k=document.getElementById("mobile-menu-button"),n=document.getElementById("mobile-menu");k==null||k.addEventListener("click",()=>{n==null||n.classList.toggle("open")});const d=n==null?void 0:n.querySelectorAll("a");d==null||d.forEach(i=>{i.addEventListener("click",()=>{n==null||n.classList.remove("open")})})});var te;(te=document.getElementById("back-to-top"))==null||te.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.getElementById("year").textContent=new Date().getFullYear();
