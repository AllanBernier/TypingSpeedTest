"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{7818:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(551),o=r.n(n)},551:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(9920);r(7437),r(2265);let o=n._(r(148));function l(e,t){var r;let n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let l={...n,...t};return(0,o.default)({...l,modules:null==(r=l.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(5592);function o(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},148:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(7437),o=r(2265),l=r(912),i=r(1481);function a(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},d=function(e){let t={...s,...e},r=(0,o.lazy)(()=>t.loader().then(a)),d=t.loading;function u(e){let a=d?(0,n.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,s=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(i.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(o.Suspense,{fallback:a,children:s})}return u.displayName="LoadableComponent",u}},1481:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let n=r(7437),o=r(8512);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,o.getExpectedRequestStore)("next/dynamic css"),l=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,n.jsx)(n.Fragment,{children:l.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},2988:function(e,t,r){r.d(t,{Z:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},1584:function(e,t,r){r.d(t,{F:function(){return o},e:function(){return l}});var n=r(2265);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,n.useCallback)(o(...e),e)}},4968:function(e,t,r){r.d(t,{e6:function(){return H},fC:function(){return K},bU:function(){return L},fQ:function(){return G}});var n=r(2988),o=r(2265);function l(e,[t,r]){return Math.min(r,Math.max(t,e))}function i(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}var a=r(1584);function s(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,o.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,o.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let l=(0,o.createContext)(n),i=r.length;function a(t){let{scope:r,children:n,...a}=t,s=(null==r?void 0:r[e][i])||l,d=(0,o.useMemo)(()=>a,Object.values(a));return(0,o.createElement)(s.Provider,{value:d},n)}return r=[...r,n],a.displayName=t+"Provider",[a,function(r,a){let s=(null==a?void 0:a[e][i])||l,d=(0,o.useContext)(s);if(d)return d;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return(0,o.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}function d(e){let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}let u=(0,o.createContext)(void 0),c=(null==globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{};r(4887);var f=r(1538);let p=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:l,...i}=e,a=l?f.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(a,(0,n.Z)({},i,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),m=["PageUp","PageDown"],b=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],g={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},h="Slider",[v,y,w]=function(e){let t=e+"CollectionProvider",[r,n]=s(t),[l,i]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",u=o.forwardRef((e,t)=>{let{scope:r,children:n}=e,l=i(d,r),s=(0,a.e)(t,l.collectionRef);return o.createElement(f.g7,{ref:s},n)}),c=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,n=o.useRef(null),i=o.useRef(new Map).current;return o.createElement(l,{scope:t,itemMap:i,collectionRef:n},r)},Slot:u,ItemSlot:o.forwardRef((e,t)=>{let{scope:r,children:n,...l}=e,s=o.useRef(null),d=(0,a.e)(t,s),u=i(c,r);return o.useEffect(()=>(u.itemMap.set(s,{ref:s,...l}),()=>void u.itemMap.delete(s))),o.createElement(f.g7,{[p]:"",ref:d},n)})},function(t){let r=i(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},n]}(h),[x,S]=s(h,[w]),[k,E]=x(h),C=(0,o.forwardRef)((e,t)=>{let{name:r,min:s=0,max:u=100,step:c=1,orientation:f="horizontal",disabled:p=!1,minStepsBetweenThumbs:g=0,defaultValue:h=[s],value:y,onValueChange:w=()=>{},onValueCommit:x=()=>{},inverted:S=!1,...E}=e,[C,z]=(0,o.useState)(null),P=(0,a.e)(t,e=>z(e)),R=(0,o.useRef)(new Set),_=(0,o.useRef)(0),D="horizontal"===f,O=!C||!!C.closest("form"),[A=[],N]=function({prop:e,defaultProp:t,onChange:r=()=>{}}){let[n,l]=function({defaultProp:e,onChange:t}){let r=(0,o.useState)(e),[n]=r,l=(0,o.useRef)(n),i=d(t);return(0,o.useEffect)(()=>{l.current!==n&&(i(n),l.current=n)},[n,l,i]),r}({defaultProp:t,onChange:r}),i=void 0!==e,a=i?e:n,s=d(r);return[a,(0,o.useCallback)(t=>{if(i){let r="function"==typeof t?t(e):t;r!==e&&s(r)}else l(t)},[i,e,l,s])]}({prop:y,defaultProp:h,onChange:e=>{var t;null===(t=[...R.current][_.current])||void 0===t||t.focus(),w(e)}}),I=(0,o.useRef)(A);function T(e,t,{commit:r}={commit:!1}){let n=(String(c).split(".")[1]||"").length,o=l(function(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}(Math.round((e-s)/c)*c+s,n),[s,u]);N((e=[])=>{var n,l;let i=function(e=[],t,r){let n=[...e];return n[r]=t,n.sort((e,t)=>e-t)}(e,o,t);if(n=i,!(!((l=g*c)>0)||Math.min(...n.slice(0,-1).map((e,t)=>n[t+1]-e))>=l))return e;{_.current=i.indexOf(o);let t=String(i)!==String(e);return t&&r&&x(i),t?i:e}})}return(0,o.createElement)(k,{scope:e.__scopeSlider,disabled:p,min:s,max:u,valueIndexToChangeRef:_,thumbs:R.current,values:A,orientation:f},(0,o.createElement)(v.Provider,{scope:e.__scopeSlider},(0,o.createElement)(v.Slot,{scope:e.__scopeSlider},(0,o.createElement)(D?j:M,(0,n.Z)({"aria-disabled":p,"data-disabled":p?"":void 0},E,{ref:P,onPointerDown:i(E.onPointerDown,()=>{p||(I.current=A)}),min:s,max:u,inverted:S,onSlideStart:p?void 0:function(e){let t=function(e,t){if(1===e.length)return 0;let r=e.map(e=>Math.abs(e-t));return r.indexOf(Math.min(...r))}(A,e);T(e,t)},onSlideMove:p?void 0:function(e){T(e,_.current)},onSlideEnd:p?void 0:function(){let e=I.current[_.current];A[_.current]!==e&&x(A)},onHomeKeyDown:()=>!p&&T(s,0,{commit:!0}),onEndKeyDown:()=>!p&&T(u,A.length-1,{commit:!0}),onStepKeyDown:({event:e,direction:t})=>{if(!p){let r=m.includes(e.key)||e.shiftKey&&b.includes(e.key),n=_.current;T(A[n]+c*(r?10:1)*t,n,{commit:!0})}}})))),O&&A.map((e,t)=>(0,o.createElement)($,{key:t,name:r?r+(A.length>1?"[]":""):void 0,value:e})))}),[z,P]=x(h,{startEdge:"left",endEdge:"right",size:"width",direction:1}),j=(0,o.forwardRef)((e,t)=>{let{min:r,max:l,dir:i,inverted:s,onSlideStart:d,onSlideMove:c,onSlideEnd:f,onStepKeyDown:p,...m}=e,[b,h]=(0,o.useState)(null),v=(0,a.e)(t,e=>h(e)),y=(0,o.useRef)(),w=function(e){let t=(0,o.useContext)(u);return e||t||"ltr"}(i),x="ltr"===w,S=x&&!s||!x&&s;function k(e){let t=y.current||b.getBoundingClientRect(),n=Z([0,t.width],S?[r,l]:[l,r]);return y.current=t,n(e-t.left)}return(0,o.createElement)(z,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width"},(0,o.createElement)(R,(0,n.Z)({dir:w,"data-orientation":"horizontal"},m,{ref:v,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=k(e.clientX);null==d||d(t)},onSlideMove:e=>{let t=k(e.clientX);null==c||c(t)},onSlideEnd:()=>{y.current=void 0,null==f||f()},onStepKeyDown:e=>{let t=g[S?"from-left":"from-right"].includes(e.key);null==p||p({event:e,direction:t?-1:1})}})))}),M=(0,o.forwardRef)((e,t)=>{let{min:r,max:l,inverted:i,onSlideStart:s,onSlideMove:d,onSlideEnd:u,onStepKeyDown:c,...f}=e,p=(0,o.useRef)(null),m=(0,a.e)(t,p),b=(0,o.useRef)(),h=!i;function v(e){let t=b.current||p.current.getBoundingClientRect(),n=Z([0,t.height],h?[l,r]:[r,l]);return b.current=t,n(e-t.top)}return(0,o.createElement)(z,{scope:e.__scopeSlider,startEdge:h?"bottom":"top",endEdge:h?"top":"bottom",size:"height",direction:h?1:-1},(0,o.createElement)(R,(0,n.Z)({"data-orientation":"vertical"},f,{ref:m,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=v(e.clientY);null==s||s(t)},onSlideMove:e=>{let t=v(e.clientY);null==d||d(t)},onSlideEnd:()=>{b.current=void 0,null==u||u()},onStepKeyDown:e=>{let t=g[h?"from-bottom":"from-top"].includes(e.key);null==c||c({event:e,direction:t?-1:1})}})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeSlider:r,onSlideStart:l,onSlideMove:a,onSlideEnd:s,onHomeKeyDown:d,onEndKeyDown:u,onStepKeyDown:c,...f}=e,g=E(h,r);return(0,o.createElement)(p.span,(0,n.Z)({},f,{ref:t,onKeyDown:i(e.onKeyDown,e=>{"Home"===e.key?(d(e),e.preventDefault()):"End"===e.key?(u(e),e.preventDefault()):m.concat(b).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:i(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),g.thumbs.has(t)?t.focus():l(e)}),onPointerMove:i(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&a(e)}),onPointerUp:i(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),s(e))})}))}),_=(0,o.forwardRef)((e,t)=>{let{__scopeSlider:r,...l}=e,i=E("SliderTrack",r);return(0,o.createElement)(p.span,(0,n.Z)({"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation},l,{ref:t}))}),D="SliderRange",O=(0,o.forwardRef)((e,t)=>{let{__scopeSlider:r,...l}=e,i=E(D,r),s=P(D,r),d=(0,o.useRef)(null),u=(0,a.e)(t,d),c=i.values.length,f=i.values.map(e=>T(e,i.min,i.max));return(0,o.createElement)(p.span,(0,n.Z)({"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0},l,{ref:u,style:{...e.style,[s.startEdge]:(c>1?Math.min(...f):0)+"%",[s.endEdge]:100-Math.max(...f)+"%"}}))}),A="SliderThumb",N=(0,o.forwardRef)((e,t)=>{let r=y(e.__scopeSlider),[l,i]=(0,o.useState)(null),s=(0,a.e)(t,e=>i(e)),d=(0,o.useMemo)(()=>l?r().findIndex(e=>e.ref.current===l):-1,[r,l]);return(0,o.createElement)(I,(0,n.Z)({},e,{ref:s,index:d}))}),I=(0,o.forwardRef)((e,t)=>{var r;let{__scopeSlider:l,index:s,...d}=e,u=E(A,l),f=P(A,l),[m,b]=(0,o.useState)(null),g=(0,a.e)(t,e=>b(e)),h=function(e){let[t,r]=(0,o.useState)(void 0);return c(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,o;if(!Array.isArray(t)||!t.length)return;let l=t[0];if("borderBoxSize"in l){let e=l.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,o=t.blockSize}else n=e.offsetWidth,o=e.offsetHeight;r({width:n,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(m),y=u.values[s],w=void 0===y?0:T(y,u.min,u.max),x=(r=u.values.length)>2?`Value ${s+1} of ${r}`:2===r?["Minimum","Maximum"][s]:void 0,S=null==h?void 0:h[f.size],k=S?function(e,t,r){let n=e/2,o=Z([0,50],[0,n]);return(n-o(t)*r)*r}(S,w,f.direction):0;return(0,o.useEffect)(()=>{if(m)return u.thumbs.add(m),()=>{u.thumbs.delete(m)}},[m,u.thumbs]),(0,o.createElement)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[f.startEdge]:`calc(${w}% + ${k}px)`}},(0,o.createElement)(v.ItemSlot,{scope:e.__scopeSlider},(0,o.createElement)(p.span,(0,n.Z)({role:"slider","aria-label":e["aria-label"]||x,"aria-valuemin":u.min,"aria-valuenow":y,"aria-valuemax":u.max,"aria-orientation":u.orientation,"data-orientation":u.orientation,"data-disabled":u.disabled?"":void 0,tabIndex:u.disabled?void 0:0},d,{ref:g,style:void 0===y?{display:"none"}:e.style,onFocus:i(e.onFocus,()=>{u.valueIndexToChangeRef.current=s})}))))}),$=e=>{let{value:t,...r}=e,l=(0,o.useRef)(null),i=function(e){let t=(0,o.useRef)({value:e,previous:e});return(0,o.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(t);return(0,o.useEffect)(()=>{let e=l.current,r=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;if(i!==t&&r){let n=new Event("input",{bubbles:!0});r.call(e,t),e.dispatchEvent(n)}},[i,t]),(0,o.createElement)("input",(0,n.Z)({style:{display:"none"}},r,{ref:l,defaultValue:t}))};function T(e,t,r){return l(100/(r-t)*(e-t),[0,100])}function Z(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}let K=C,G=_,H=O,L=N},1538:function(e,t,r){r.d(t,{g7:function(){return i}});var n=r(2988),o=r(2265),l=r(1584);let i=(0,o.forwardRef)((e,t)=>{let{children:r,...l}=e,i=o.Children.toArray(r),s=i.find(d);if(s){let e=s.props.children,r=i.map(t=>t!==s?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(a,(0,n.Z)({},l,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,r):null)}return(0,o.createElement)(a,(0,n.Z)({},l,{ref:t}),r)});i.displayName="Slot";let a=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],l=t[n];/^on[A-Z]/.test(n)?o&&l?r[n]=(...e)=>{l(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...l}:"className"===n&&(r[n]=[o,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,l.F)(t,r.ref):r.ref}):o.Children.count(r)>1?o.Children.only(null):null});a.displayName="SlotClone";let s=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function d(e){return(0,o.isValidElement)(e)&&e.type===s}},2218:function(e,t,r){r.d(t,{j:function(){return l}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n},l=(e,t)=>r=>{var l;if((null==t?void 0:t.variants)==null)return o(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],o=null==a?void 0:a[e];if(null===t)return null;let l=n(t)||n(o);return i[e][l]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return o(e,s,null==t?void 0:null===(l=t.compoundVariants)||void 0===l?void 0:l.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...d}[t]):({...a,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},4839:function(e,t,r){function n(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{W:function(){return n}}),t.Z=n},6164:function(e,t,r){r.d(t,{m6:function(){return I}});let n=/^\[(.+)\]$/;function o(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let l=/\s+/;function i(){let e,t,r=0,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let n="";for(let o=0;o<t.length;o++)t[o]&&(r=e(t[o]))&&(n&&(n+=" "),n+=r);return n}(e))&&(n&&(n+=" "),n+=t);return n}function a(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let s=/^\[(?:([a-z-]+):)?(.+)\]$/i,d=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),c=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,m=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,b=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return v(e)||u.has(e)||d.test(e)}function h(e){return _(e,"length",D)}function v(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return _(e,"number",v)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&v(e.slice(0,-1))}function S(e){return s.test(e)}function k(e){return c.test(e)}let E=new Set(["length","size","percentage"]);function C(e){return _(e,E,O)}function z(e){return _(e,"position",O)}let P=new Set(["image","url"]);function j(e){return _(e,P,N)}function M(e){return _(e,"",A)}function R(){return!0}function _(e,t,r){let n=s.exec(e);return!!n&&(n[1]?"string"==typeof t?n[1]===t:t.has(n[1]):r(n[2]))}function D(e){return f.test(e)&&!p.test(e)}function O(){return!1}function A(e){return m.test(e)}function N(e){return b.test(e)}let I=function(e,...t){let r,a,s;let d=function(l){var i;return a=(r={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,n=new Map;function o(o,l){r.set(o,l),++t>e&&(t=0,n=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=n.get(e))?(o(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):o(e,t)}}}((i=t.reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,n=t[0],o=t.length;return function(e){let l;let i=[],a=0,s=0;for(let d=0;d<e.length;d++){let u=e[d];if(0===a){if(u===n&&(r||e.slice(d,d+o)===t)){i.push(e.slice(s,d)),s=d+o;continue}if("/"===u){l=d;continue}}"["===u?a++:"]"===u&&a--}let d=0===i.length?e:e.substring(s),u=d.startsWith("!"),c=u?d.substring(1):d;return{modifiers:i,hasImportantModifier:u,baseClassName:c,maybePostfixModifierPosition:l&&l>s?l-s:void 0}}}(i),...function(e){let t=function(e){var t;let{theme:r,prefix:n}=e,l={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),n?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?n+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[n+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,n,l){t.forEach(t=>{if("string"==typeof t){(""===t?r:o(r,t)).classGroupId=n;return}if("function"==typeof t){if(t.isThemeGetter){e(t(l),r,n,l);return}r.validators.push({validator:t,classGroupId:n});return}Object.entries(t).forEach(([t,i])=>{e(i,o(r,t),n,l)})})})(t,l,e,r)}),l}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let n=t[0],o=r.nextPart.get(n),l=o?e(t.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let i=t.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId}(r,t)||function(e){if(n.test(e)){let t=n.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let n=r[e]||[];return t&&l[e]?[...n,...l[e]]:n}}}(i)}).cache.get,s=r.cache.set,d=u,u(l)};function u(e){let t=a(e);if(t)return t;let n=function(e,t){let{splitModifiers:r,getClassGroupId:n,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:t,hasImportantModifier:o,baseClassName:l,maybePostfixModifierPosition:i}=r(e),a=n(i?l.substring(0,i):l),s=!!i;if(!a){if(!i||!(a=n(l)))return{isTailwindClass:!1,originalClassName:e};s=!1}let d=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:o?d+"!":d,classGroupId:a,originalClassName:e,hasPostfixModifier:s}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:n}=e,l=t+r;return!i.has(l)&&(i.add(l),o(r,n).forEach(e=>i.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,r);return s(e,n),n}return function(){return d(i.apply(null,arguments))}}(function(){let e=a("colors"),t=a("spacing"),r=a("blur"),n=a("brightness"),o=a("borderColor"),l=a("borderRadius"),i=a("borderSpacing"),s=a("borderWidth"),d=a("contrast"),u=a("grayscale"),c=a("hueRotate"),f=a("invert"),p=a("gap"),m=a("gradientColorStops"),b=a("gradientColorStopPositions"),E=a("inset"),P=a("margin"),_=a("opacity"),D=a("padding"),O=a("saturate"),A=a("scale"),N=a("sepia"),I=a("skew"),$=a("space"),T=a("translate"),Z=()=>["auto","contain","none"],K=()=>["auto","hidden","clip","visible","scroll"],G=()=>["auto",S,t],H=()=>[S,t],L=()=>["",g,h],V=()=>["auto",v,S],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],F=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",S],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[v,y],Q=()=>[v,S];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[g,h],blur:["none","",k,S],brightness:Y(),borderColor:[e],borderRadius:["none","","full",k,S],borderSpacing:H(),borderWidth:L(),contrast:Y(),grayscale:q(),hueRotate:Q(),invert:q(),gap:H(),gradientColorStops:[e],gradientColorStopPositions:[x,h],inset:G(),margin:G(),opacity:Y(),padding:H(),saturate:Y(),scale:Y(),sepia:q(),skew:Q(),space:H(),translate:H()},classGroups:{aspect:[{aspect:["auto","square","video",S]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),S]}],overflow:[{overflow:K()}],"overflow-x":[{"overflow-x":K()}],"overflow-y":[{"overflow-y":K()}],overscroll:[{overscroll:Z()}],"overscroll-x":[{"overscroll-x":Z()}],"overscroll-y":[{"overscroll-y":Z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,S]}],basis:[{basis:G()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",S]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",w,S]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",w,S]},S]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[w,S]},S]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",S]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",S]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[D]}],px:[{px:[D]}],py:[{py:[D]}],ps:[{ps:[D]}],pe:[{pe:[D]}],pt:[{pt:[D]}],pr:[{pr:[D]}],pb:[{pb:[D]}],pl:[{pl:[D]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",S,t]}],"min-w":[{"min-w":[S,t,"min","max","fit"]}],"max-w":[{"max-w":[S,t,"none","full","min","max","fit","prose",{screen:[k]},k]}],h:[{h:[S,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[S,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[S,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[S,t,"auto","min","max","fit"]}],"font-size":[{text:["base",k,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",S]}],"line-clamp":[{"line-clamp":["none",v,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,S]}],"list-image":[{"list-image":["none",S]}],"list-style-type":[{list:["none","disc","decimal",S]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...F(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,h]}],"underline-offset":[{"underline-offset":["auto",g,S]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),z]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",C]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},j]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...F(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:F()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...F()]}],"outline-offset":[{"outline-offset":[g,S]}],"outline-w":[{outline:[g,h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:L()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[g,h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",k,M]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...W(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",k,S]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[f]}],saturate:[{saturate:[O]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",S]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",S]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",S]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[w,S]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[I]}],"skew-y":[{"skew-y":[I]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",S]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,h,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);