import{d as ir,i as lr,f as Se,g as dr,j as cr,k as ur,l as fr,o as gr,p as br,q as pr,r as hr,w as vr,c as Y,a as Z,e as U}from"./C24b-gpi.js";import{i as yr}from"./B_2327eZ.js";import{z as L,J as ve,i as mr,P as pe,af as Je,o as wr,N as ye,S as xr,T as kr,O as ge,M as Me,w as me,q as _r,k as Ar,H as zr,a4 as Ke,a1 as Qe,ag as Cr,d as q,aP as Sr,ae as Mr,aQ as Ir,aR as Rr,aS as Er,aT as Tr,aU as Nr,aV as Pr,aw as Gr,V as Lr,aj as ae,aC as Ie,aD as Re,aE as Or,v as Fr,p as Vr,a6 as Ee,a5 as jr,l as se,a as Ur,f as $,b as Br,s as qr,m as Wr,t as Te,e as Ne}from"./CrbX4yXL.js";import{l as Pe,p as V,i as Ge,b as Le}from"./Cv7f96or.js";function Oe(e,r,t,o,s){var u;L&&ve();var n=(u=r.$$slots)==null?void 0:u[t],a=!1;n===!0&&(n=r[t==="default"?"children":t],a=!0),n===void 0?s!==null&&s(e):n(e,a?()=>o:o)}function Jt(e){const r={};e.children&&(r.default=!0);for(const t in e.$$slots)r[t]=!0;return r}function Fe(e,r,t,o,s,n){let a=L;L&&ve();var u,d,f=null;L&&pe.nodeType===1&&(f=pe,ve());var g=L?pe:e,A;mr(()=>{const _=r()||null;var C=_==="svg"?ye:null;_!==u&&(A&&(_===null?_r(A,()=>{A=null,d=null}):_===d?Ar(A):(zr(A),Se(!1))),_&&_!==d&&(A=wr(()=>{if(f=L?f:C?document.createElementNS(C,_):document.createElement(_),ir(f,f),o){L&&lr(_)&&f.append(document.createComment(""));var w=L?xr(f):f.appendChild(kr());L&&(w===null?ge(!1):Me(w)),o(f,w)}me.nodes_end=f,g.before(f)})),u=_,u&&(d=u),Se(!0))},Je),a&&(ge(!0),Me(g))}function Ve(e,r,t){Ke(()=>{var o=Qe(()=>r(e,t==null?void 0:t())||{});if(t&&(o!=null&&o.update)){var s=!1,n={};Cr(()=>{var a=t();q(a),s&&Sr(n,a)&&(n=a,o.update(a))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function Xe(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=Xe(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Dr(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=Xe(e))&&(o&&(o+=" "),o+=r);return o}function Hr(e){return typeof e=="object"?Dr(e):e??""}const je=[...` 	
\r\f \v\uFEFF`];function Jr(e,r,t){var o=e==null?"":""+e;if(r&&(o=o?o+" "+r:r),t){for(var s in t)if(t[s])o=o?o+" "+s:s;else if(o.length)for(var n=s.length,a=0;(a=o.indexOf(s,a))>=0;){var u=a+n;(a===0||je.includes(o[a-1]))&&(u===o.length||je.includes(o[u]))?o=(a===0?"":o.substring(0,a))+o.substring(u+1):a=u}}return o===""?null:o}function Kr(e,r,t,o,s,n){var a=e.__className;if(L||a!==t){var u=Jr(t,o,n);(!L||u!==e.getAttribute("class"))&&(u==null?e.removeAttribute("class"):r?e.className=u:e.setAttribute("class",u)),e.__className=t}else if(n)for(var d in n){var f=!!n[d];(s==null||f!==!!s[d])&&e.classList.toggle(d,f)}return n}const ne=Symbol("class");function Kt(e){if(L){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;we(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var s=e.checked;we(e,"checked",null),e.checked=s}}};e.__on_r=t,Er(t),pr()}}function Qr(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function we(e,r,t,o){var s=e.__attributes??(e.__attributes={});L&&(s[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||s[r]!==(s[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Ir]=t),t==null?e.removeAttribute(r):typeof t!="string"&&Ye(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function Ue(e,r,t,o,s=!1,n=!1,a=!1){let u=L&&n;u&&ge(!1);var d=r||{},f=e.tagName==="OPTION";for(var g in r)g in t||(t[g]=null);t.class?t.class=Hr(t.class):t[ne]&&(t.class=null);var A=Ye(e),_=e.__attributes??(e.__attributes={});for(const y in t){let v=t[y];if(f&&y==="value"&&v==null){e.value=e.__value="",d[y]=v;continue}if(y==="class"){var C=e.namespaceURI==="http://www.w3.org/1999/xhtml";Kr(e,C,v,o,r==null?void 0:r[ne],t[ne]),d[y]=v,d[ne]=t[ne];continue}var w=d[y];if(v!==w){d[y]=v;var h=y[0]+y[1];if(h!=="$$"){if(h==="on"){const z={},c="$$"+y;let m=y.slice(2);var x=br(m);if(dr(m)&&(m=m.slice(0,-7),z.capture=!0),!x&&w){if(v!=null)continue;e.removeEventListener(m,d[c],z),d[c]=null}if(v!=null)if(x)e[`__${m}`]=v,ur([m]);else{let W=function(T){d[y].call(this,T)};d[c]=cr(m,e,W,z)}else x&&(e[`__${m}`]=void 0)}else if(y==="style"&&v!=null)e.style.cssText=v+"";else if(y==="autofocus")fr(e,!!v);else if(!n&&(y==="__value"||y==="value"&&v!=null))e.value=e.__value=v;else if(y==="selected"&&f)Qr(e,v);else{var k=y;s||(k=gr(k));var P=k==="defaultValue"||k==="defaultChecked";if(v==null&&!n&&!P)if(_[y]=null,k==="value"||k==="checked"){let z=e;const c=r===void 0;if(k==="value"){let m=z.defaultValue;z.removeAttribute(k),z.defaultValue=m,z.value=z.__value=c?m:null}else{let m=z.defaultChecked;z.removeAttribute(k),z.defaultChecked=m,z.checked=c?m:!1}}else e.removeAttribute(y);else P||A.includes(k)&&(n||typeof v!="string")?e[k]=v:typeof v!="function"&&we(e,k,v)}y==="style"&&"__styles"in e&&(e.__styles={})}}}return u&&ge(!0),d}var Be=new Map;function Ye(e){var r=Be.get(e.nodeName);if(r)return r;Be.set(e.nodeName,r=[]);for(var t,o=e,s=Element.prototype;s!==o;){t=Rr(o);for(var n in t)t[n].set&&r.push(n);o=Mr(o)}return r}const Xr=()=>performance.now(),D={tick:e=>requestAnimationFrame(e),now:()=>Xr(),tasks:new Set};function Ze(){const e=D.now();D.tasks.forEach(r=>{r.c(e)||(D.tasks.delete(r),r.f())}),D.tasks.size!==0&&D.tick(Ze)}function Yr(e){let r;return D.tasks.size===0&&D.tick(Ze),{promise:new Promise(t=>{D.tasks.add(r={c:e,f:t})}),abort(){D.tasks.delete(r)}}}function ue(e,r){vr(()=>{e.dispatchEvent(new CustomEvent(r))})}function Zr(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const r=e.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function qe(e){const r={},t=e.split(";");for(const o of t){const[s,n]=o.split(":");if(!s||n===void 0)break;const a=Zr(s.trim());r[a]=n.trim()}return r}const $r=e=>e;function et(e,r,t,o){var s=(e&Pr)!==0,n="both",a,u=r.inert,d=r.style.overflow,f,g;function A(){var x=Or,k=me;Ie(null),Re(null);try{return a??(a=t()(r,(o==null?void 0:o())??{},{direction:n}))}finally{Ie(x),Re(k)}}var _={is_global:s,in(){r.inert=u,ue(r,"introstart"),f=xe(r,A(),g,1,()=>{ue(r,"introend"),f==null||f.abort(),f=a=void 0,r.style.overflow=d})},out(x){r.inert=!0,ue(r,"outrostart"),g=xe(r,A(),f,0,()=>{ue(r,"outroend"),x==null||x()})},stop:()=>{f==null||f.abort(),g==null||g.abort()}},C=me;if((C.transitions??(C.transitions=[])).push(_),hr){var w=s;if(!w){for(var h=C.parent;h&&(h.f&Je)!==0;)for(;(h=h.parent)&&(h.f&Tr)===0;);w=!h||(h.f&Nr)!==0}w&&Ke(()=>{Qe(()=>_.in())})}}function xe(e,r,t,o,s){var n=o===1;if(Gr(r)){var a,u=!1;return Lr(()=>{if(!u){var x=r({direction:n?"in":"out"});a=xe(e,x,t,o,s)}}),{abort:()=>{u=!0,a==null||a.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(t==null||t.deactivate(),!(r!=null&&r.duration))return s(),{abort:ae,deactivate:ae,reset:ae,t:()=>o};const{delay:d=0,css:f,tick:g,easing:A=$r}=r;var _=[];if(n&&t===void 0&&(g&&g(0,1),f)){var C=qe(f(0,1));_.push(C,C)}var w=()=>1-o,h=e.animate(_,{duration:d});return h.onfinish=()=>{var x=(t==null?void 0:t.t())??1-o;t==null||t.abort();var k=o-x,P=r.duration*Math.abs(k),y=[];if(P>0){var v=!1;if(f)for(var z=Math.ceil(P/16.666666666666668),c=0;c<=z;c+=1){var m=x+k*A(c/z),W=qe(f(m,1-m));y.push(W),v||(v=W.overflow==="hidden")}v&&(e.style.overflow="hidden"),w=()=>{var T=h.currentTime;return x+k*A(T/P)},g&&Yr(()=>{if(h.playState!=="running")return!1;var T=w();return g(T,1-T),!0})}h=e.animate(y,{duration:P,fill:"forwards"}),h.onfinish=()=>{w=()=>o,g==null||g(o,1-o),s()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=ae)},deactivate:()=>{s=ae},reset:()=>{o===0&&(g==null||g(1,0))},t:()=>w()}}function B(e,r){var n;var t=(n=e.$$events)==null?void 0:n[r.type],o=Fr(t)?t.slice():t==null?[]:[t];for(var s of o)s.call(this,r)}const ze="-",rt=e=>{const r=ot(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:a=>{const u=a.split(ze);return u[0]===""&&u.length!==1&&u.shift(),$e(u,r)||tt(a)},getConflictingClassGroupIds:(a,u)=>{const d=t[a]||[];return u&&o[a]?[...d,...o[a]]:d}}},$e=(e,r)=>{var a;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?$e(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(ze);return(a=r.validators.find(({validator:u})=>u(n)))==null?void 0:a.classGroupId},We=/^\[(.+)\]$/,tt=e=>{if(We.test(e)){const r=We.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},ot=e=>{const{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(const s in t)ke(t[s],o,s,r);return o},ke=(e,r,t,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:De(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(at(s)){ke(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,a])=>{ke(a,De(r,n),t,o)})})},De=(e,r)=>{let t=e;return r.split(ze).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},at=e=>e.isThemeGetter,st=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(n,a)=>{t.set(n,a),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let a=t.get(n);if(a!==void 0)return a;if((a=o.get(n))!==void 0)return s(n,a),a},set(n,a){t.has(n)?t.set(n,a):s(n,a)}}},_e="!",Ae=":",nt=Ae.length,it=e=>{const{prefix:r,experimentalParseClassName:t}=e;let o=s=>{const n=[];let a=0,u=0,d=0,f;for(let w=0;w<s.length;w++){let h=s[w];if(a===0&&u===0){if(h===Ae){n.push(s.slice(d,w)),d=w+nt;continue}if(h==="/"){f=w;continue}}h==="["?a++:h==="]"?a--:h==="("?u++:h===")"&&u--}const g=n.length===0?s:s.substring(d),A=lt(g),_=A!==g,C=f&&f>d?f-d:void 0;return{modifiers:n,hasImportantModifier:_,baseClassName:A,maybePostfixModifierPosition:C}};if(r){const s=r+Ae,n=o;o=a=>a.startsWith(s)?n(a.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:a,maybePostfixModifierPosition:void 0}}if(t){const s=o;o=n=>t({className:n,parseClassName:s})}return o},lt=e=>e.endsWith(_e)?e.substring(0,e.length-1):e.startsWith(_e)?e.substring(1):e,dt=e=>{const r=Object.fromEntries(e.orderSensitiveModifiers.map(o=>[o,!0]));return o=>{if(o.length<=1)return o;const s=[];let n=[];return o.forEach(a=>{a[0]==="["||r[a]?(s.push(...n.sort(),a),n=[]):n.push(a)}),s.push(...n.sort()),s}},ct=e=>({cache:st(e.cacheSize),parseClassName:it(e),sortModifiers:dt(e),...rt(e)}),ut=/\s+/,ft=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:n}=r,a=[],u=e.trim().split(ut);let d="";for(let f=u.length-1;f>=0;f-=1){const g=u[f],{isExternal:A,modifiers:_,hasImportantModifier:C,baseClassName:w,maybePostfixModifierPosition:h}=t(g);if(A){d=g+(d.length>0?" "+d:d);continue}let x=!!h,k=o(x?w.substring(0,h):w);if(!k){if(!x){d=g+(d.length>0?" "+d:d);continue}if(k=o(w),!k){d=g+(d.length>0?" "+d:d);continue}x=!1}const P=n(_).join(":"),y=C?P+_e:P,v=y+k;if(a.includes(v))continue;a.push(v);const z=s(k,x);for(let c=0;c<z.length;++c){const m=z[c];a.push(y+m)}d=g+(d.length>0?" "+d:d)}return d};function gt(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=er(r))&&(o&&(o+=" "),o+=t);return o}const er=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=er(e[o]))&&(t&&(t+=" "),t+=r);return t};function bt(e,...r){let t,o,s,n=a;function a(d){const f=r.reduce((g,A)=>A(g),e());return t=ct(f),o=t.cache.get,s=t.cache.set,n=u,u(d)}function u(d){const f=o(d);if(f)return f;const g=ft(d,t);return s(d,g),g}return function(){return n(gt.apply(null,arguments))}}const R=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},rr=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,tr=/^\((?:(\w[\w-]*):)?(.+)\)$/i,pt=/^\d+\/\d+$/,ht=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,vt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,mt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ee=e=>pt.test(e),p=e=>!!e&&!Number.isNaN(Number(e)),J=e=>!!e&&Number.isInteger(Number(e)),He=e=>e.endsWith("%")&&p(e.slice(0,-1)),H=e=>ht.test(e),xt=()=>!0,kt=e=>vt.test(e)&&!yt.test(e),Ce=()=>!1,_t=e=>mt.test(e),At=e=>wt.test(e),zt=e=>!i(e)&&!l(e),Ct=e=>re(e,sr,Ce),i=e=>rr.test(e),K=e=>re(e,nr,kt),he=e=>re(e,Ot,p),St=e=>re(e,or,Ce),Mt=e=>re(e,ar,At),It=e=>re(e,Ce,_t),l=e=>tr.test(e),fe=e=>te(e,nr),Rt=e=>te(e,Ft),Et=e=>te(e,or),Tt=e=>te(e,sr),Nt=e=>te(e,ar),Pt=e=>te(e,Vt,!0),re=(e,r,t)=>{const o=rr.exec(e);return o?o[1]?r(o[1]):t(o[2]):!1},te=(e,r,t=!1)=>{const o=tr.exec(e);return o?o[1]?r(o[1]):t:!1},or=e=>e==="position",Gt=new Set(["image","url"]),ar=e=>Gt.has(e),Lt=new Set(["length","size","percentage"]),sr=e=>Lt.has(e),nr=e=>e==="length",Ot=e=>e==="number",Ft=e=>e==="family-name",Vt=e=>e==="shadow",jt=()=>{const e=R("color"),r=R("font"),t=R("text"),o=R("font-weight"),s=R("tracking"),n=R("leading"),a=R("breakpoint"),u=R("container"),d=R("spacing"),f=R("radius"),g=R("shadow"),A=R("inset-shadow"),_=R("drop-shadow"),C=R("blur"),w=R("perspective"),h=R("aspect"),x=R("ease"),k=R("animate"),P=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],v=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],c=()=>[l,i,d],m=()=>[ee,"full","auto",...c()],W=()=>[J,"none","subgrid",l,i],T=()=>["auto",{span:["full",J,l,i]},l,i],j=()=>[J,"auto",l,i],Q=()=>["auto","min","max","fr",l,i],E=()=>["start","end","center","between","around","evenly","stretch","baseline"],O=()=>["start","end","center","stretch"],G=()=>["auto",...c()],F=()=>[ee,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...c()],b=()=>[e,l,i],M=()=>[He,K],S=()=>["","none","full",f,l,i],I=()=>["",p,fe,K],X=()=>["solid","dashed","dotted","double"],N=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ie=()=>["","none",C,l,i],oe=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l,i],le=()=>["none",p,l,i],de=()=>["none",p,l,i],be=()=>[p,l,i],ce=()=>[ee,"full",...c()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[H],breakpoint:[H],color:[xt],container:[H],"drop-shadow":[H],ease:["in","out","in-out"],font:[zt],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[H],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[H],shadow:[H],spacing:["px",p],text:[H],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ee,i,l,h]}],container:["container"],columns:[{columns:[p,i,l,u]}],"break-after":[{"break-after":P()}],"break-before":[{"break-before":P()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...y(),i,l]}],overflow:[{overflow:v()}],"overflow-x":[{"overflow-x":v()}],"overflow-y":[{"overflow-y":v()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:m()}],"inset-x":[{"inset-x":m()}],"inset-y":[{"inset-y":m()}],start:[{start:m()}],end:[{end:m()}],top:[{top:m()}],right:[{right:m()}],bottom:[{bottom:m()}],left:[{left:m()}],visibility:["visible","invisible","collapse"],z:[{z:[J,"auto",l,i]}],basis:[{basis:[ee,"full","auto",u,...c()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[p,ee,"auto","initial","none",i]}],grow:[{grow:["",p,l,i]}],shrink:[{shrink:["",p,l,i]}],order:[{order:[J,"first","last","none",l,i]}],"grid-cols":[{"grid-cols":W()}],"col-start-end":[{col:T()}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":W()}],"row-start-end":[{row:T()}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Q()}],"auto-rows":[{"auto-rows":Q()}],gap:[{gap:c()}],"gap-x":[{"gap-x":c()}],"gap-y":[{"gap-y":c()}],"justify-content":[{justify:[...E(),"normal"]}],"justify-items":[{"justify-items":[...O(),"normal"]}],"justify-self":[{"justify-self":["auto",...O()]}],"align-content":[{content:["normal",...E()]}],"align-items":[{items:[...O(),"baseline"]}],"align-self":[{self:["auto",...O(),"baseline"]}],"place-content":[{"place-content":E()}],"place-items":[{"place-items":[...O(),"baseline"]}],"place-self":[{"place-self":["auto",...O()]}],p:[{p:c()}],px:[{px:c()}],py:[{py:c()}],ps:[{ps:c()}],pe:[{pe:c()}],pt:[{pt:c()}],pr:[{pr:c()}],pb:[{pb:c()}],pl:[{pl:c()}],m:[{m:G()}],mx:[{mx:G()}],my:[{my:G()}],ms:[{ms:G()}],me:[{me:G()}],mt:[{mt:G()}],mr:[{mr:G()}],mb:[{mb:G()}],ml:[{ml:G()}],"space-x":[{"space-x":c()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":c()}],"space-y-reverse":["space-y-reverse"],size:[{size:F()}],w:[{w:[u,"screen",...F()]}],"min-w":[{"min-w":[u,"screen","none",...F()]}],"max-w":[{"max-w":[u,"screen","none","prose",{screen:[a]},...F()]}],h:[{h:["screen",...F()]}],"min-h":[{"min-h":["screen","none",...F()]}],"max-h":[{"max-h":["screen",...F()]}],"font-size":[{text:["base",t,fe,K]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,l,he]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",He,i]}],"font-family":[{font:[Rt,i,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,l,i]}],"line-clamp":[{"line-clamp":[p,"none",l,he]}],leading:[{leading:[n,...c()]}],"list-image":[{"list-image":["none",l,i]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",l,i]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:b()}],"text-color":[{text:b()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:[p,"from-font","auto",l,K]}],"text-decoration-color":[{decoration:b()}],"underline-offset":[{"underline-offset":[p,"auto",l,i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:c()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l,i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l,i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...y(),Et,St]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",Tt,Ct]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},J,l,i],radial:["",l,i],conic:[J,l,i]},Nt,Mt]}],"bg-color":[{bg:b()}],"gradient-from-pos":[{from:M()}],"gradient-via-pos":[{via:M()}],"gradient-to-pos":[{to:M()}],"gradient-from":[{from:b()}],"gradient-via":[{via:b()}],"gradient-to":[{to:b()}],rounded:[{rounded:S()}],"rounded-s":[{"rounded-s":S()}],"rounded-e":[{"rounded-e":S()}],"rounded-t":[{"rounded-t":S()}],"rounded-r":[{"rounded-r":S()}],"rounded-b":[{"rounded-b":S()}],"rounded-l":[{"rounded-l":S()}],"rounded-ss":[{"rounded-ss":S()}],"rounded-se":[{"rounded-se":S()}],"rounded-ee":[{"rounded-ee":S()}],"rounded-es":[{"rounded-es":S()}],"rounded-tl":[{"rounded-tl":S()}],"rounded-tr":[{"rounded-tr":S()}],"rounded-br":[{"rounded-br":S()}],"rounded-bl":[{"rounded-bl":S()}],"border-w":[{border:I()}],"border-w-x":[{"border-x":I()}],"border-w-y":[{"border-y":I()}],"border-w-s":[{"border-s":I()}],"border-w-e":[{"border-e":I()}],"border-w-t":[{"border-t":I()}],"border-w-r":[{"border-r":I()}],"border-w-b":[{"border-b":I()}],"border-w-l":[{"border-l":I()}],"divide-x":[{"divide-x":I()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":I()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...X(),"hidden","none"]}],"divide-style":[{divide:[...X(),"hidden","none"]}],"border-color":[{border:b()}],"border-color-x":[{"border-x":b()}],"border-color-y":[{"border-y":b()}],"border-color-s":[{"border-s":b()}],"border-color-e":[{"border-e":b()}],"border-color-t":[{"border-t":b()}],"border-color-r":[{"border-r":b()}],"border-color-b":[{"border-b":b()}],"border-color-l":[{"border-l":b()}],"divide-color":[{divide:b()}],"outline-style":[{outline:[...X(),"none","hidden"]}],"outline-offset":[{"outline-offset":[p,l,i]}],"outline-w":[{outline:["",p,fe,K]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",g,Pt,It]}],"shadow-color":[{shadow:b()}],"inset-shadow":[{"inset-shadow":["none",l,i,A]}],"inset-shadow-color":[{"inset-shadow":b()}],"ring-w":[{ring:I()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:b()}],"ring-offset-w":[{"ring-offset":[p,K]}],"ring-offset-color":[{"ring-offset":b()}],"inset-ring-w":[{"inset-ring":I()}],"inset-ring-color":[{"inset-ring":b()}],opacity:[{opacity:[p,l,i]}],"mix-blend":[{"mix-blend":[...N(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":N()}],filter:[{filter:["","none",l,i]}],blur:[{blur:ie()}],brightness:[{brightness:[p,l,i]}],contrast:[{contrast:[p,l,i]}],"drop-shadow":[{"drop-shadow":["","none",_,l,i]}],grayscale:[{grayscale:["",p,l,i]}],"hue-rotate":[{"hue-rotate":[p,l,i]}],invert:[{invert:["",p,l,i]}],saturate:[{saturate:[p,l,i]}],sepia:[{sepia:["",p,l,i]}],"backdrop-filter":[{"backdrop-filter":["","none",l,i]}],"backdrop-blur":[{"backdrop-blur":ie()}],"backdrop-brightness":[{"backdrop-brightness":[p,l,i]}],"backdrop-contrast":[{"backdrop-contrast":[p,l,i]}],"backdrop-grayscale":[{"backdrop-grayscale":["",p,l,i]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p,l,i]}],"backdrop-invert":[{"backdrop-invert":["",p,l,i]}],"backdrop-opacity":[{"backdrop-opacity":[p,l,i]}],"backdrop-saturate":[{"backdrop-saturate":[p,l,i]}],"backdrop-sepia":[{"backdrop-sepia":["",p,l,i]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":c()}],"border-spacing-x":[{"border-spacing-x":c()}],"border-spacing-y":[{"border-spacing-y":c()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",l,i]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[p,"initial",l,i]}],ease:[{ease:["linear","initial",x,l,i]}],delay:[{delay:[p,l,i]}],animate:[{animate:["none",k,l,i]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,l,i]}],"perspective-origin":[{"perspective-origin":oe()}],rotate:[{rotate:le()}],"rotate-x":[{"rotate-x":le()}],"rotate-y":[{"rotate-y":le()}],"rotate-z":[{"rotate-z":le()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:be()}],"skew-x":[{"skew-x":be()}],"skew-y":[{"skew-y":be()}],transform:[{transform:[l,i,"","none","gpu","cpu"]}],"transform-origin":[{origin:oe()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ce()}],"translate-x":[{"translate-x":ce()}],"translate-y":[{"translate-y":ce()}],"translate-z":[{"translate-z":ce()}],"translate-none":["translate-none"],accent:[{accent:b()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:b()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l,i]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":c()}],"scroll-mx":[{"scroll-mx":c()}],"scroll-my":[{"scroll-my":c()}],"scroll-ms":[{"scroll-ms":c()}],"scroll-me":[{"scroll-me":c()}],"scroll-mt":[{"scroll-mt":c()}],"scroll-mr":[{"scroll-mr":c()}],"scroll-mb":[{"scroll-mb":c()}],"scroll-ml":[{"scroll-ml":c()}],"scroll-p":[{"scroll-p":c()}],"scroll-px":[{"scroll-px":c()}],"scroll-py":[{"scroll-py":c()}],"scroll-ps":[{"scroll-ps":c()}],"scroll-pe":[{"scroll-pe":c()}],"scroll-pt":[{"scroll-pt":c()}],"scroll-pr":[{"scroll-pr":c()}],"scroll-pb":[{"scroll-pb":c()}],"scroll-pl":[{"scroll-pl":c()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l,i]}],fill:[{fill:["none",...b()]}],"stroke-w":[{stroke:[p,fe,K,he]}],stroke:[{stroke:["none",...b()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},Ut=bt(jt),Bt={gray:"bg-gray-50 dark:bg-gray-800",red:"bg-red-50 dark:bg-gray-800",yellow:"bg-yellow-50 dark:bg-gray-800 ",green:"bg-green-50 dark:bg-gray-800 ",indigo:"bg-indigo-50 dark:bg-gray-800 ",purple:"bg-purple-50 dark:bg-gray-800 ",pink:"bg-pink-50 dark:bg-gray-800 ",blue:"bg-blue-50 dark:bg-gray-800 ",light:"bg-gray-50 dark:bg-gray-700",dark:"bg-gray-50 dark:bg-gray-800",default:"bg-white dark:bg-gray-800",dropdown:"bg-white dark:bg-gray-700",navbar:"bg-white dark:bg-gray-900",navbarUl:"bg-gray-50 dark:bg-gray-800",form:"bg-gray-50 dark:bg-gray-700",primary:"bg-primary-50 dark:bg-gray-800 ",orange:"bg-orange-50 dark:bg-orange-800",none:""};function Qt(e,r){const t=Pe(r,["children","$$slots","$$events","$$legacy"]),o=Pe(t,["tag","color","rounded","border","shadow","node","use","options","role","transition","params","open"]);Vr(r,!1);const s=()=>{};Ee("background",!0);let n=V(r,"tag",24,()=>o.href?"a":"div"),a=V(r,"color",12,"default"),u=V(r,"rounded",8,!1),d=V(r,"border",8,!1),f=V(r,"shadow",8,!1),g=V(r,"node",28,()=>{}),A=V(r,"use",8,s),_=V(r,"options",24,()=>({})),C=V(r,"role",24,()=>{}),w=V(r,"transition",24,()=>{}),h=V(r,"params",24,()=>({})),x=V(r,"open",8,!0);const k=jr(),P={gray:"text-gray-800 dark:text-gray-300",red:"text-red-800 dark:text-red-400",yellow:"text-yellow-800 dark:text-yellow-300",green:"text-green-800 dark:text-green-400",indigo:"text-indigo-800 dark:text-indigo-400",purple:"text-purple-800 dark:text-purple-400",pink:"text-pink-800 dark:text-pink-400",blue:"text-blue-800 dark:text-blue-400",light:"text-gray-700 dark:text-gray-300",dark:"text-gray-700 dark:text-gray-300",default:"text-gray-500 dark:text-gray-400",dropdown:"text-gray-700 dark:text-gray-200",navbar:"text-gray-700 dark:text-gray-200",navbarUl:"text-gray-700 dark:text-gray-400",form:"text-gray-900 dark:text-white",primary:"text-primary-800 dark:text-primary-400",orange:"text-orange-800 dark:text-orange-400",none:""},y={gray:"border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",red:"border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",yellow:"border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",green:"border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",indigo:"border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",purple:"border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",pink:"border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",blue:"border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",light:"border-gray-500 divide-gray-500",dark:"border-gray-500 divide-gray-500",default:"border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",dropdown:"border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",navbar:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",navbarUl:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",form:"border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",primary:"border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",orange:"border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",none:""};let v=Wr();se(()=>q(x()),()=>{k(x()?"open":"close")}),se(()=>q(x()),()=>{k("show",x())}),se(()=>q(a()),()=>{a(a()??"default")}),se(()=>q(a()),()=>{Ee("color",a())}),se(()=>(q(a()),q(u()),q(d()),q(f()),q(t)),()=>{qr(v,Ut(Bt[a()],P[a()],u()&&"rounded-lg",d()&&"border",y[a()],f()&&"shadow-md",t.class))}),Ur(),yr();var z=Y(),c=$(z);{var m=T=>{var j=Y(),Q=$(j);Fe(Q,n,!1,(E,O)=>{Ve(E,(M,S)=>{var I;return(I=A())==null?void 0:I(M,S)},_),Le(E,M=>g(M),()=>g());let G;Te(()=>G=Ue(E,G,{role:C(),...o,class:Ne(v)},void 0,E.namespaceURI===ye,E.nodeName.includes("-"))),et(3,E,w,h),U("click",E,function(M){B.call(this,r,M)}),U("mouseenter",E,function(M){B.call(this,r,M)}),U("mouseleave",E,function(M){B.call(this,r,M)}),U("focusin",E,function(M){B.call(this,r,M)}),U("focusout",E,function(M){B.call(this,r,M)});var F=Y(),b=$(F);Oe(b,r,"default",{},null),Z(O,F)}),Z(T,j)},W=T=>{var j=Y(),Q=$(j);{var E=O=>{var G=Y(),F=$(G);Fe(F,n,!1,(b,M)=>{Ve(b,(N,ie)=>{var oe;return(oe=A())==null?void 0:oe(N,ie)},_),Le(b,N=>g(N),()=>g());let S;Te(()=>S=Ue(b,S,{role:C(),...o,class:Ne(v)},void 0,b.namespaceURI===ye,b.nodeName.includes("-"))),U("click",b,function(N){B.call(this,r,N)}),U("mouseenter",b,function(N){B.call(this,r,N)}),U("mouseleave",b,function(N){B.call(this,r,N)}),U("focusin",b,function(N){B.call(this,r,N)}),U("focusout",b,function(N){B.call(this,r,N)});var I=Y(),X=$(I);Oe(X,r,"default",{},null),Z(M,I)}),Z(O,G)};Ge(Q,O=>{x()&&O(E)},!0)}Z(T,j)};Ge(c,T=>{w()&&x()?T(m):T(W,!1)})}Z(e,z),Br()}export{ne as C,Qt as F,Ue as a,B as b,Jt as c,we as d,Fe as e,Kr as f,Hr as g,Ve as h,et as i,gt as j,Kt as r,Oe as s,Ut as t};
