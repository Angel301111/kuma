import{c as B,P as $,A,S as O,a as P}from"./pagination-BgwqZfac.js";import{_ as C,o as S,e as L,w as _,b as y,a as p,r as m}from"./index-7BM7UR7_.js";function D(f){let{swiper:e,extendParams:v,on:r,emit:l}=f;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const o=n=>(Array.isArray(n)?n:[n]).filter(a=>!!a);function d(n){let a;return n&&typeof n=="string"&&e.isElement&&(a=e.el.querySelector(n),a)?a:(n&&(typeof n=="string"&&(a=[...document.querySelectorAll(n)]),e.params.uniqueNavElements&&typeof n=="string"&&a.length>1&&e.el.querySelectorAll(n).length===1&&(a=e.el.querySelector(n))),n&&!a?n:a)}function g(n,a){const i=e.params.navigation;n=o(n),n.forEach(t=>{t&&(t.classList[a?"add":"remove"](...i.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=a),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass))})}function c(){const{nextEl:n,prevEl:a}=e.navigation;if(e.params.loop){g(a,!1),g(n,!1);return}g(a,e.isBeginning&&!e.params.rewind),g(n,e.isEnd&&!e.params.rewind)}function w(n){n.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),l("navigationPrev"))}function x(n){n.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),l("navigationNext"))}function E(){const n=e.params.navigation;if(e.params.navigation=B(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let a=d(n.nextEl),i=d(n.prevEl);Object.assign(e.navigation,{nextEl:a,prevEl:i}),a=o(a),i=o(i);const t=(s,u)=>{s&&s.addEventListener("click",u==="next"?x:w),!e.enabled&&s&&s.classList.add(...n.lockClass.split(" "))};a.forEach(s=>t(s,"next")),i.forEach(s=>t(s,"prev"))}function b(){let{nextEl:n,prevEl:a}=e.navigation;n=o(n),a=o(a);const i=(t,s)=>{t.removeEventListener("click",s==="next"?x:w),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};n.forEach(t=>i(t,"next")),a.forEach(t=>i(t,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?k():(E(),c())}),r("toEdge fromEdge lock unlock",()=>{c()}),r("destroy",()=>{b()}),r("enable disable",()=>{let{nextEl:n,prevEl:a}=e.navigation;if(n=o(n),a=o(a),e.enabled){c();return}[...n,...a].filter(i=>!!i).forEach(i=>i.classList.add(e.params.navigation.lockClass))}),r("click",(n,a)=>{let{nextEl:i,prevEl:t}=e.navigation;i=o(i),t=o(t);const s=a.target;if(e.params.navigation.hideOnClick&&!t.includes(s)&&!i.includes(s)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===s||e.pagination.el.contains(s)))return;let u;i.length?u=i[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(u=t[0].classList.contains(e.params.navigation.hiddenClass)),l(u===!0?"navigationShow":"navigationHide"),[...i,...t].filter(h=>!!h).forEach(h=>h.classList.toggle(e.params.navigation.hiddenClass))}});const N=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),E(),c()},k=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),b()};Object.assign(e.navigation,{enable:N,disable:k,update:c,init:E,destroy:b})}const H={data(){return{modules:[$,A,D]}},components:{Swiper:O,SwiperSlide:P}},q=p("main",{class:"d-flex justify-content-center",style:{"background-image":"url('/images/home01.png')",height:"100vh","background-size":"cover","background-position":"center center","background-repeat":"no-repeat"}},[p("div",{class:"text-center text-white mt-10",style:{position:"relative"}},[p("h1",{class:"display-3 mt-5"},"卓越品質 歷久不衰"),p("p",{class:"display-5 mt-3"},"讓經營成為享受"),p("p",{class:"",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}," 酷碼 期待與您合作 ")])],-1),j=p("main",{class:"d-flex justify-content-center",style:{"background-image":"url('/images/home02.png')",height:"100vh","background-size":"cover","background-position":"center center","background-repeat":"no-repeat"}},null,-1),V=p("button",{class:"swiper-button-next d-none d-lg-block"},null,-1);function z(f,e,v,r,l,o){const d=m("Swiper-Slide"),g=m("swiper-slide"),c=m("Swiper");return S(),L(c,{modules:l.modules,class:"mySwiper",pagination:{dynamicBullets:!0,clickable:!0},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},autoplay:{delay:3e3,disableOnInteraction:!1}},{default:_(()=>[y(d,null,{default:_(()=>[q]),_:1}),y(g,null,{default:_(()=>[j]),_:1}),V]),_:1},8,["modules"])}const I=C(H,[["render",z]]),T={components:{HomeSwiper:I},data(){return{}}};function U(f,e,v,r,l,o){const d=m("HomeSwiper");return S(),L(d)}const J=C(T,[["render",U]]);export{J as default};
