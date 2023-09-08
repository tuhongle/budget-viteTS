(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var kt="top",Gt="bottom",Yt="right",Dt="left",ml="auto",Ls=[kt,Gt,Yt,Dt],Ti="start",hs="end",Lv="clippingParents",Bd="viewport",Wi="popper",Mv="reference",Ph=Ls.reduce(function(t,e){return t.concat([e+"-"+Ti,e+"-"+hs])},[]),jd=[].concat(Ls,[ml]).reduce(function(t,e){return t.concat([e,e+"-"+Ti,e+"-"+hs])},[]),Vv="beforeRead",xv="read",$v="afterRead",Fv="beforeMain",Uv="main",Bv="afterMain",jv="beforeWrite",Hv="write",qv="afterWrite",Wv=[Vv,xv,$v,Fv,Uv,Bv,jv,Hv,qv];function Fn(t){return t?(t.nodeName||"").toLowerCase():null}function Qt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ii(t){var e=Qt(t).Element;return t instanceof e||t instanceof Element}function nn(t){var e=Qt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Hd(t){if(typeof ShadowRoot>"u")return!1;var e=Qt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function ib(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},s=e.elements[n];!nn(s)||!Fn(s)||(Object.assign(s.style,r),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function sb(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],s=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!nn(i)||!Fn(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const qd={name:"applyStyles",enabled:!0,phase:"write",fn:ib,effect:sb,requires:["computeStyles"]};function Nn(t){return t.split("-")[0]}var _i=Math.max,kc=Math.min,ds=Math.round;function Oh(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Kv(){return!/^((?!chrome|android).)*safari/i.test(Oh())}function fs(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&nn(t)&&(i=t.offsetWidth>0&&ds(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&ds(r.height)/t.offsetHeight||1);var o=Ii(t)?Qt(t):window,a=o.visualViewport,c=!Kv()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/i,u=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function Wd(t){var e=fs(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function zv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Hd(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function tr(t){return Qt(t).getComputedStyle(t)}function ob(t){return["table","td","th"].indexOf(Fn(t))>=0}function Wr(t){return((Ii(t)?t.ownerDocument:t.document)||window.document).documentElement}function gl(t){return Fn(t)==="html"?t:t.assignedSlot||t.parentNode||(Hd(t)?t.host:null)||Wr(t)}function nm(t){return!nn(t)||tr(t).position==="fixed"?null:t.offsetParent}function ab(t){var e=/firefox/i.test(Oh()),n=/Trident/i.test(Oh());if(n&&nn(t)){var r=tr(t);if(r.position==="fixed")return null}var i=gl(t);for(Hd(i)&&(i=i.host);nn(i)&&["html","body"].indexOf(Fn(i))<0;){var s=tr(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function fa(t){for(var e=Qt(t),n=nm(t);n&&ob(n)&&tr(n).position==="static";)n=nm(n);return n&&(Fn(n)==="html"||Fn(n)==="body"&&tr(n).position==="static")?e:n||ab(t)||e}function Kd(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function yo(t,e,n){return _i(t,kc(e,n))}function cb(t,e,n){var r=yo(t,e,n);return r>n?n:r}function Gv(){return{top:0,right:0,bottom:0,left:0}}function Yv(t){return Object.assign({},Gv(),t)}function Qv(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var lb=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Yv(typeof e!="number"?e:Qv(e,Ls))};function ub(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Nn(n.placement),c=Kd(a),l=[Dt,Yt].indexOf(a)>=0,u=l?"height":"width";if(!(!s||!o)){var h=lb(i.padding,n),d=Wd(s),f=c==="y"?kt:Dt,_=c==="y"?Gt:Yt,g=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],y=o[c]-n.rects.reference[c],T=fa(s),R=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,A=g/2-y/2,E=h[f],F=R-d[u]-h[_],z=R/2-d[u]/2+A,Z=yo(E,z,F),D=c;n.modifiersData[r]=(e={},e[D]=Z,e.centerOffset=Z-z,e)}}function hb(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||zv(e.elements.popper,i)&&(e.elements.arrow=i))}const Xv={name:"arrow",enabled:!0,phase:"main",fn:ub,effect:hb,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ps(t){return t.split("-")[1]}var db={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fb(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:ds(n*i)/i||0,y:ds(r*i)/i||0}}function rm(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,_=o.y,g=_===void 0?0:_,y=typeof u=="function"?u({x:f,y:g}):{x:f,y:g};f=y.x,g=y.y;var T=o.hasOwnProperty("x"),R=o.hasOwnProperty("y"),A=Dt,E=kt,F=window;if(l){var z=fa(n),Z="clientHeight",D="clientWidth";if(z===Qt(n)&&(z=Wr(n),tr(z).position!=="static"&&a==="absolute"&&(Z="scrollHeight",D="scrollWidth")),z=z,i===kt||(i===Dt||i===Yt)&&s===hs){E=Gt;var L=h&&z===F&&F.visualViewport?F.visualViewport.height:z[Z];g-=L-r.height,g*=c?1:-1}if(i===Dt||(i===kt||i===Gt)&&s===hs){A=Yt;var W=h&&z===F&&F.visualViewport?F.visualViewport.width:z[D];f-=W-r.width,f*=c?1:-1}}var he=Object.assign({position:a},l&&db),B=u===!0?fb({x:f,y:g},Qt(n)):{x:f,y:g};if(f=B.x,g=B.y,c){var ee;return Object.assign({},he,(ee={},ee[E]=R?"0":"",ee[A]=T?"0":"",ee.transform=(F.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",ee))}return Object.assign({},he,(e={},e[E]=R?g+"px":"",e[A]=T?f+"px":"",e.transform="",e))}function pb(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:Nn(e.placement),variation:ps(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,rm(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,rm(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const zd={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:pb,data:{}};var Ba={passive:!0};function mb(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,c=Qt(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",n.update,Ba)}),a&&c.addEventListener("resize",n.update,Ba),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Ba)}),a&&c.removeEventListener("resize",n.update,Ba)}}const Gd={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:mb,data:{}};var gb={left:"right",right:"left",bottom:"top",top:"bottom"};function uc(t){return t.replace(/left|right|bottom|top/g,function(e){return gb[e]})}var _b={start:"end",end:"start"};function im(t){return t.replace(/start|end/g,function(e){return _b[e]})}function Yd(t){var e=Qt(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Qd(t){return fs(Wr(t)).left+Yd(t).scrollLeft}function vb(t,e){var n=Qt(t),r=Wr(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var l=Kv();(l||!l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+Qd(t),y:c}}function yb(t){var e,n=Wr(t),r=Yd(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=_i(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=_i(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Qd(t),c=-r.scrollTop;return tr(i||n).direction==="rtl"&&(a+=_i(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Xd(t){var e=tr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Jv(t){return["html","body","#document"].indexOf(Fn(t))>=0?t.ownerDocument.body:nn(t)&&Xd(t)?t:Jv(gl(t))}function Eo(t,e){var n;e===void 0&&(e=[]);var r=Jv(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=Qt(r),o=i?[s].concat(s.visualViewport||[],Xd(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Eo(gl(o)))}function Nh(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Eb(t,e){var n=fs(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function sm(t,e,n){return e===Bd?Nh(vb(t,n)):Ii(e)?Eb(e,n):Nh(yb(Wr(t)))}function Tb(t){var e=Eo(gl(t)),n=["absolute","fixed"].indexOf(tr(t).position)>=0,r=n&&nn(t)?fa(t):t;return Ii(r)?e.filter(function(i){return Ii(i)&&zv(i,r)&&Fn(i)!=="body"}):[]}function Ib(t,e,n,r){var i=e==="clippingParents"?Tb(t):[].concat(e),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(c,l){var u=sm(t,l,r);return c.top=_i(u.top,c.top),c.right=kc(u.right,c.right),c.bottom=kc(u.bottom,c.bottom),c.left=_i(u.left,c.left),c},sm(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Zv(t){var e=t.reference,n=t.element,r=t.placement,i=r?Nn(r):null,s=r?ps(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(i){case kt:c={x:o,y:e.y-n.height};break;case Gt:c={x:o,y:e.y+e.height};break;case Yt:c={x:e.x+e.width,y:a};break;case Dt:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?Kd(i):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case Ti:c[l]=c[l]-(e[u]/2-n[u]/2);break;case hs:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function ms(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,c=a===void 0?Lv:a,l=n.rootBoundary,u=l===void 0?Bd:l,h=n.elementContext,d=h===void 0?Wi:h,f=n.altBoundary,_=f===void 0?!1:f,g=n.padding,y=g===void 0?0:g,T=Yv(typeof y!="number"?y:Qv(y,Ls)),R=d===Wi?Mv:Wi,A=t.rects.popper,E=t.elements[_?R:d],F=Ib(Ii(E)?E:E.contextElement||Wr(t.elements.popper),c,u,o),z=fs(t.elements.reference),Z=Zv({reference:z,element:A,strategy:"absolute",placement:i}),D=Nh(Object.assign({},A,Z)),L=d===Wi?D:z,W={top:F.top-L.top+T.top,bottom:L.bottom-F.bottom+T.bottom,left:F.left-L.left+T.left,right:L.right-F.right+T.right},he=t.modifiersData.offset;if(d===Wi&&he){var B=he[i];Object.keys(W).forEach(function(ee){var Re=[Yt,Gt].indexOf(ee)>=0?1:-1,Ue=[kt,Gt].indexOf(ee)>=0?"y":"x";W[ee]+=B[Ue]*Re})}return W}function wb(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?jd:c,u=ps(r),h=u?a?Ph:Ph.filter(function(_){return ps(_)===u}):Ls,d=h.filter(function(_){return l.indexOf(_)>=0});d.length===0&&(d=h);var f=d.reduce(function(_,g){return _[g]=ms(t,{placement:g,boundary:i,rootBoundary:s,padding:o})[Nn(g)],_},{});return Object.keys(f).sort(function(_,g){return f[_]-f[g]})}function Ab(t){if(Nn(t)===ml)return[];var e=uc(t);return[im(t),e,im(e)]}function bb(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,_=f===void 0?!0:f,g=n.allowedAutoPlacements,y=e.options.placement,T=Nn(y),R=T===y,A=c||(R||!_?[uc(y)]:Ab(y)),E=[y].concat(A).reduce(function(ot,St){return ot.concat(Nn(St)===ml?wb(e,{placement:St,boundary:u,rootBoundary:h,padding:l,flipVariations:_,allowedAutoPlacements:g}):St)},[]),F=e.rects.reference,z=e.rects.popper,Z=new Map,D=!0,L=E[0],W=0;W<E.length;W++){var he=E[W],B=Nn(he),ee=ps(he)===Ti,Re=[kt,Gt].indexOf(B)>=0,Ue=Re?"width":"height",oe=ms(e,{placement:he,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),ge=Re?ee?Yt:Dt:ee?Gt:kt;F[Ue]>z[Ue]&&(ge=uc(ge));var be=uc(ge),lt=[];if(s&&lt.push(oe[B]<=0),a&&lt.push(oe[ge]<=0,oe[be]<=0),lt.every(function(ot){return ot})){L=he,D=!1;break}Z.set(he,lt)}if(D)for(var Q=_?3:1,ne=function(St){var Ye=E.find(function(w){var H=Z.get(w);if(H)return H.slice(0,St).every(function(U){return U})});if(Ye)return L=Ye,"break"},ye=Q;ye>0;ye--){var st=ne(ye);if(st==="break")break}e.placement!==L&&(e.modifiersData[r]._skip=!0,e.placement=L,e.reset=!0)}}const ey={name:"flip",enabled:!0,phase:"main",fn:bb,requiresIfExists:["offset"],data:{_skip:!1}};function om(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function am(t){return[kt,Yt,Gt,Dt].some(function(e){return t[e]>=0})}function Cb(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=ms(e,{elementContext:"reference"}),a=ms(e,{altBoundary:!0}),c=om(o,r),l=om(a,i,s),u=am(c),h=am(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const ty={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Cb};function Rb(t,e,n){var r=Nn(t),i=[Dt,kt].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Dt,Yt].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function Sb(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=jd.reduce(function(u,h){return u[h]=Rb(h,e.rects,s),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const ny={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Sb};function Pb(t){var e=t.state,n=t.name;e.modifiersData[n]=Zv({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Jd={name:"popperOffsets",enabled:!0,phase:"read",fn:Pb,data:{}};function Ob(t){return t==="x"?"y":"x"}function Nb(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,_=n.tetherOffset,g=_===void 0?0:_,y=ms(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),T=Nn(e.placement),R=ps(e.placement),A=!R,E=Kd(T),F=Ob(E),z=e.modifiersData.popperOffsets,Z=e.rects.reference,D=e.rects.popper,L=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,W=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),he=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,B={x:0,y:0};if(z){if(s){var ee,Re=E==="y"?kt:Dt,Ue=E==="y"?Gt:Yt,oe=E==="y"?"height":"width",ge=z[E],be=ge+y[Re],lt=ge-y[Ue],Q=f?-D[oe]/2:0,ne=R===Ti?Z[oe]:D[oe],ye=R===Ti?-D[oe]:-Z[oe],st=e.elements.arrow,ot=f&&st?Wd(st):{width:0,height:0},St=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Gv(),Ye=St[Re],w=St[Ue],H=yo(0,Z[oe],ot[oe]),U=A?Z[oe]/2-Q-H-Ye-W.mainAxis:ne-H-Ye-W.mainAxis,X=A?-Z[oe]/2+Q+H+w+W.mainAxis:ye+H+w+W.mainAxis,Se=e.elements.arrow&&fa(e.elements.arrow),p=Se?E==="y"?Se.clientTop||0:Se.clientLeft||0:0,m=(ee=he==null?void 0:he[E])!=null?ee:0,v=ge+U-m-p,I=ge+X-m,C=yo(f?kc(be,v):be,ge,f?_i(lt,I):lt);z[E]=C,B[E]=C-ge}if(a){var S,q=E==="x"?kt:Dt,M=E==="x"?Gt:Yt,$=z[F],O=F==="y"?"height":"width",te=$+y[q],G=$-y[M],J=[kt,Dt].indexOf(T)!==-1,ue=(S=he==null?void 0:he[F])!=null?S:0,Ee=J?te:$-Z[O]-D[O]-ue+W.altAxis,Le=J?$+Z[O]+D[O]-ue-W.altAxis:G,Ne=f&&J?cb(Ee,$,Le):yo(f?Ee:te,$,f?Le:G);z[F]=Ne,B[F]=Ne-$}e.modifiersData[r]=B}}const ry={name:"preventOverflow",enabled:!0,phase:"main",fn:Nb,requiresIfExists:["offset"]};function kb(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Db(t){return t===Qt(t)||!nn(t)?Yd(t):kb(t)}function Lb(t){var e=t.getBoundingClientRect(),n=ds(e.width)/t.offsetWidth||1,r=ds(e.height)/t.offsetHeight||1;return n!==1||r!==1}function Mb(t,e,n){n===void 0&&(n=!1);var r=nn(e),i=nn(e)&&Lb(e),s=Wr(e),o=fs(t,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Fn(e)!=="body"||Xd(s))&&(a=Db(e)),nn(e)?(c=fs(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=Qd(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Vb(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&i(c)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function xb(t){var e=Vb(t);return Wv.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function $b(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Fb(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var cm={placement:"bottom",modifiers:[],strategy:"absolute"};function lm(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function _l(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?cm:i;return function(a,c,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},cm,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(T){var R=typeof T=="function"?T(u.options):T;g(),u.options=Object.assign({},s,u.options,R),u.scrollParents={reference:Ii(a)?Eo(a):a.contextElement?Eo(a.contextElement):[],popper:Eo(c)};var A=xb(Fb([].concat(r,u.options.modifiers)));return u.orderedModifiers=A.filter(function(E){return E.enabled}),_(),f.update()},forceUpdate:function(){if(!d){var T=u.elements,R=T.reference,A=T.popper;if(lm(R,A)){u.rects={reference:Mb(R,fa(A),u.options.strategy==="fixed"),popper:Wd(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(W){return u.modifiersData[W.name]=Object.assign({},W.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var F=u.orderedModifiers[E],z=F.fn,Z=F.options,D=Z===void 0?{}:Z,L=F.name;typeof z=="function"&&(u=z({state:u,options:D,name:L,instance:f})||u)}}}},update:$b(function(){return new Promise(function(y){f.forceUpdate(),y(u)})}),destroy:function(){g(),d=!0}};if(!lm(a,c))return f;f.setOptions(l).then(function(y){!d&&l.onFirstUpdate&&l.onFirstUpdate(y)});function _(){u.orderedModifiers.forEach(function(y){var T=y.name,R=y.options,A=R===void 0?{}:R,E=y.effect;if(typeof E=="function"){var F=E({state:u,name:T,instance:f,options:A}),z=function(){};h.push(F||z)}})}function g(){h.forEach(function(y){return y()}),h=[]}return f}}var Ub=_l(),Bb=[Gd,Jd,zd,qd],jb=_l({defaultModifiers:Bb}),Hb=[Gd,Jd,zd,qd,ny,ey,ry,Xv,ty],Zd=_l({defaultModifiers:Hb});const iy=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Bv,afterRead:$v,afterWrite:qv,applyStyles:qd,arrow:Xv,auto:ml,basePlacements:Ls,beforeMain:Fv,beforeRead:Vv,beforeWrite:jv,bottom:Gt,clippingParents:Lv,computeStyles:zd,createPopper:Zd,createPopperBase:Ub,createPopperLite:jb,detectOverflow:ms,end:hs,eventListeners:Gd,flip:ey,hide:ty,left:Dt,main:Uv,modifierPhases:Wv,offset:ny,placements:jd,popper:Wi,popperGenerator:_l,popperOffsets:Jd,preventOverflow:ry,read:xv,reference:Mv,right:Yt,start:Ti,top:kt,variationPlacements:Ph,viewport:Bd,write:Hv},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const pr=new Map,ku={set(t,e,n){pr.has(t)||pr.set(t,new Map);const r=pr.get(t);if(!r.has(e)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(e,n)},get(t,e){return pr.has(t)&&pr.get(t).get(e)||null},remove(t,e){if(!pr.has(t))return;const n=pr.get(t);n.delete(e),n.size===0&&pr.delete(t)}},qb=1e6,Wb=1e3,kh="transitionend",sy=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),Kb=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),zb=t=>{do t+=Math.floor(Math.random()*qb);while(document.getElementById(t));return t},Gb=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),i=Number.parseFloat(n);return!r&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*Wb)},oy=t=>{t.dispatchEvent(new Event(kh))},Yn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Mr=t=>Yn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(sy(t)):null,Ms=t=>{if(!Yn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const r=t.closest("summary");if(r&&r.parentNode!==n||r===null)return!1}return e},Vr=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",ay=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?ay(t.parentNode):null},Dc=()=>{},pa=t=>{t.offsetHeight},cy=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Du=[],Yb=t=>{document.readyState==="loading"?(Du.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Du)e()}),Du.push(t)):t()},an=()=>document.documentElement.dir==="rtl",ln=t=>{Yb(()=>{const e=cy();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}})},Mt=(t,e=[],n=t)=>typeof t=="function"?t(...e):n,ly=(t,e,n=!0)=>{if(!n){Mt(t);return}const r=5,i=Gb(e)+r;let s=!1;const o=({target:a})=>{a===e&&(s=!0,e.removeEventListener(kh,o),Mt(t))};e.addEventListener(kh,o),setTimeout(()=>{s||oy(e)},i)},ef=(t,e,n,r)=>{const i=t.length;let s=t.indexOf(e);return s===-1?!n&&r?t[i-1]:t[0]:(s+=n?1:-1,r&&(s=(s+i)%i),t[Math.max(0,Math.min(s,i-1))])},Qb=/[^.]*(?=\..*)\.|.*/,Xb=/\..*/,Jb=/::\d+$/,Lu={};let um=1;const uy={mouseenter:"mouseover",mouseleave:"mouseout"},Zb=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function hy(t,e){return e&&`${e}::${um++}`||t.uidEvent||um++}function dy(t){const e=hy(t);return t.uidEvent=e,Lu[e]=Lu[e]||{},Lu[e]}function e0(t,e){return function n(r){return tf(r,{delegateTarget:t}),n.oneOff&&P.off(t,r.type,e),e.apply(t,[r])}}function t0(t,e,n){return function r(i){const s=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return tf(i,{delegateTarget:o}),r.oneOff&&P.off(t,i.type,e,n),n.apply(o,[i])}}function fy(t,e,n=null){return Object.values(t).find(r=>r.callable===e&&r.delegationSelector===n)}function py(t,e,n){const r=typeof e=="string",i=r?n:e||n;let s=my(t);return Zb.has(s)||(s=t),[r,i,s]}function hm(t,e,n,r,i){if(typeof e!="string"||!t)return;let[s,o,a]=py(e,n,r);e in uy&&(o=(_=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return _.call(this,g)})(o));const c=dy(t),l=c[a]||(c[a]={}),u=fy(l,o,s?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=hy(o,e.replace(Qb,"")),d=s?t0(t,n,o):e0(t,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,l[h]=d,t.addEventListener(a,d,s)}function Dh(t,e,n,r,i){const s=fy(e[n],r,i);s&&(t.removeEventListener(n,s,!!i),delete e[n][s.uidEvent])}function n0(t,e,n,r){const i=e[n]||{};for(const[s,o]of Object.entries(i))s.includes(r)&&Dh(t,e,n,o.callable,o.delegationSelector)}function my(t){return t=t.replace(Xb,""),uy[t]||t}const P={on(t,e,n,r){hm(t,e,n,r,!1)},one(t,e,n,r){hm(t,e,n,r,!0)},off(t,e,n,r){if(typeof e!="string"||!t)return;const[i,s,o]=py(e,n,r),a=o!==e,c=dy(t),l=c[o]||{},u=e.startsWith(".");if(typeof s<"u"){if(!Object.keys(l).length)return;Dh(t,c,o,s,i?n:null);return}if(u)for(const h of Object.keys(c))n0(t,c,h,e.slice(1));for(const[h,d]of Object.entries(l)){const f=h.replace(Jb,"");(!a||e.includes(f))&&Dh(t,c,o,d.callable,d.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const r=cy(),i=my(e),s=e!==i;let o=null,a=!0,c=!0,l=!1;s&&r&&(o=r.Event(e,n),r(t).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=tf(new Event(e,{bubbles:a,cancelable:!0}),n);return l&&u.preventDefault(),c&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function tf(t,e={}){for(const[n,r]of Object.entries(e))try{t[n]=r}catch{Object.defineProperty(t,n,{configurable:!0,get(){return r}})}return t}function dm(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Mu(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Qn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Mu(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Mu(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of n){let i=r.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=dm(t.dataset[r])}return e},getDataAttribute(t,e){return dm(t.getAttribute(`data-bs-${Mu(e)}`))}};class ma{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const r=Yn(n)?Qn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...Yn(n)?Qn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[r,i]of Object.entries(n)){const s=e[r],o=Yn(s)?"element":Kb(s);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)}}}const r0="5.3.1";class wn extends ma{constructor(e,n){super(),e=Mr(e),e&&(this._element=e,this._config=this._getConfig(n),ku.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ku.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,r=!0){ly(e,n,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return ku.get(Mr(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return r0}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Vu=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return sy(e)},se={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let r=t.parentNode.closest(e);for(;r;)n.push(r),r=r.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Vr(n)&&Ms(n))},getSelectorFromElement(t){const e=Vu(t);return e&&se.findOne(e)?e:null},getElementFromSelector(t){const e=Vu(t);return e?se.findOne(e):null},getMultipleElementsFromSelector(t){const e=Vu(t);return e?se.find(e):[]}},vl=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,r=t.NAME;P.on(document,n,`[data-bs-dismiss="${r}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Vr(this))return;const s=se.getElementFromSelector(this)||this.closest(`.${r}`);t.getOrCreateInstance(s)[e]()})},i0="alert",s0="bs.alert",gy=`.${s0}`,o0=`close${gy}`,a0=`closed${gy}`,c0="fade",l0="show";class yl extends wn{static get NAME(){return i0}close(){if(P.trigger(this._element,o0).defaultPrevented)return;this._element.classList.remove(l0);const n=this._element.classList.contains(c0);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),P.trigger(this._element,a0),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=yl.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}vl(yl,"close");ln(yl);const u0="button",h0="bs.button",d0=`.${h0}`,f0=".data-api",p0="active",fm='[data-bs-toggle="button"]',m0=`click${d0}${f0}`;class El extends wn{static get NAME(){return u0}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(p0))}static jQueryInterface(e){return this.each(function(){const n=El.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}P.on(document,m0,fm,t=>{t.preventDefault();const e=t.target.closest(fm);El.getOrCreateInstance(e).toggle()});ln(El);const g0="swipe",Vs=".bs.swipe",_0=`touchstart${Vs}`,v0=`touchmove${Vs}`,y0=`touchend${Vs}`,E0=`pointerdown${Vs}`,T0=`pointerup${Vs}`,I0="touch",w0="pen",A0="pointer-event",b0=40,C0={endCallback:null,leftCallback:null,rightCallback:null},R0={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Lc extends ma{constructor(e,n){super(),this._element=e,!(!e||!Lc.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return C0}static get DefaultType(){return R0}static get NAME(){return g0}dispose(){P.off(this._element,Vs)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Mt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=b0)return;const n=e/this._deltaX;this._deltaX=0,n&&Mt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,E0,e=>this._start(e)),P.on(this._element,T0,e=>this._end(e)),this._element.classList.add(A0)):(P.on(this._element,_0,e=>this._start(e)),P.on(this._element,v0,e=>this._move(e)),P.on(this._element,y0,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===w0||e.pointerType===I0)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const S0="carousel",P0="bs.carousel",Kr=`.${P0}`,_y=".data-api",O0="ArrowLeft",N0="ArrowRight",k0=500,eo="next",Fi="prev",Ki="left",hc="right",D0=`slide${Kr}`,xu=`slid${Kr}`,L0=`keydown${Kr}`,M0=`mouseenter${Kr}`,V0=`mouseleave${Kr}`,x0=`dragstart${Kr}`,$0=`load${Kr}${_y}`,F0=`click${Kr}${_y}`,vy="carousel",ja="active",U0="slide",B0="carousel-item-end",j0="carousel-item-start",H0="carousel-item-next",q0="carousel-item-prev",yy=".active",Ey=".carousel-item",W0=yy+Ey,K0=".carousel-item img",z0=".carousel-indicators",G0="[data-bs-slide], [data-bs-slide-to]",Y0='[data-bs-ride="carousel"]',Q0={[O0]:hc,[N0]:Ki},X0={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},J0={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ga extends wn{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=se.findOne(z0,this._element),this._addEventListeners(),this._config.ride===vy&&this.cycle()}static get Default(){return X0}static get DefaultType(){return J0}static get NAME(){return S0}next(){this._slide(eo)}nextWhenVisible(){!document.hidden&&Ms(this._element)&&this.next()}prev(){this._slide(Fi)}pause(){this._isSliding&&oy(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){P.one(this._element,xu,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){P.one(this._element,xu,()=>this.to(e));return}const r=this._getItemIndex(this._getActive());if(r===e)return;const i=e>r?eo:Fi;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&P.on(this._element,L0,e=>this._keydown(e)),this._config.pause==="hover"&&(P.on(this._element,M0,()=>this.pause()),P.on(this._element,V0,()=>this._maybeEnableCycle())),this._config.touch&&Lc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of se.find(K0,this._element))P.on(r,x0,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Ki)),rightCallback:()=>this._slide(this._directionToOrder(hc)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),k0+this._config.interval))}};this._swipeHelper=new Lc(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=Q0[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=se.findOne(yy,this._indicatorsElement);n.classList.remove(ja),n.removeAttribute("aria-current");const r=se.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);r&&(r.classList.add(ja),r.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const r=this._getActive(),i=e===eo,s=n||ef(this._getItems(),r,i,this._config.wrap);if(s===r)return;const o=this._getItemIndex(s),a=f=>P.trigger(this._element,f,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(r),to:o});if(a(D0).defaultPrevented||!r||!s)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const u=i?j0:B0,h=i?H0:q0;s.classList.add(h),pa(s),r.classList.add(u),s.classList.add(u);const d=()=>{s.classList.remove(u,h),s.classList.add(ja),r.classList.remove(ja,h,u),this._isSliding=!1,a(xu)};this._queueCallback(d,r,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(U0)}_getActive(){return se.findOne(W0,this._element)}_getItems(){return se.find(Ey,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return an()?e===Ki?Fi:eo:e===Ki?eo:Fi}_orderToDirection(e){return an()?e===Fi?Ki:hc:e===Fi?hc:Ki}static jQueryInterface(e){return this.each(function(){const n=ga.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}P.on(document,F0,G0,function(t){const e=se.getElementFromSelector(this);if(!e||!e.classList.contains(vy))return;t.preventDefault();const n=ga.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to");if(r){n.to(r),n._maybeEnableCycle();return}if(Qn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});P.on(window,$0,()=>{const t=se.find(Y0);for(const e of t)ga.getOrCreateInstance(e)});ln(ga);const Z0="collapse",eC="bs.collapse",_a=`.${eC}`,tC=".data-api",nC=`show${_a}`,rC=`shown${_a}`,iC=`hide${_a}`,sC=`hidden${_a}`,oC=`click${_a}${tC}`,$u="show",Ji="collapse",Ha="collapsing",aC="collapsed",cC=`:scope .${Ji} .${Ji}`,lC="collapse-horizontal",uC="width",hC="height",dC=".collapse.show, .collapse.collapsing",Lh='[data-bs-toggle="collapse"]',fC={parent:null,toggle:!0},pC={parent:"(null|element)",toggle:"boolean"};class xo extends wn{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const r=se.find(Lh);for(const i of r){const s=se.getSelectorFromElement(i),o=se.find(s).filter(a=>a===this._element);s!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return fC}static get DefaultType(){return pC}static get NAME(){return Z0}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(dC).filter(a=>a!==this._element).map(a=>xo.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||P.trigger(this._element,nC).defaultPrevented)return;for(const a of e)a.hide();const r=this._getDimension();this._element.classList.remove(Ji),this._element.classList.add(Ha),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Ha),this._element.classList.add(Ji,$u),this._element.style[r]="",P.trigger(this._element,rC)},o=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[r]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||P.trigger(this._element,iC).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,pa(this._element),this._element.classList.add(Ha),this._element.classList.remove(Ji,$u);for(const i of this._triggerArray){const s=se.getElementFromSelector(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Ha),this._element.classList.add(Ji),P.trigger(this._element,sC)};this._element.style[n]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains($u)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Mr(e.parent),e}_getDimension(){return this._element.classList.contains(lC)?uC:hC}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Lh);for(const n of e){const r=se.getElementFromSelector(n);r&&this._addAriaAndCollapsedClass([n],this._isShown(r))}}_getFirstLevelChildren(e){const n=se.find(cC,this._config.parent);return se.find(e,this._config.parent).filter(r=>!n.includes(r))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const r of e)r.classList.toggle(aC,!n),r.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const r=xo.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e]()}})}}P.on(document,oC,Lh,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of se.getMultipleElementsFromSelector(this))xo.getOrCreateInstance(e,{toggle:!1}).toggle()});ln(xo);const pm="dropdown",mC="bs.dropdown",Ri=`.${mC}`,nf=".data-api",gC="Escape",mm="Tab",_C="ArrowUp",gm="ArrowDown",vC=2,yC=`hide${Ri}`,EC=`hidden${Ri}`,TC=`show${Ri}`,IC=`shown${Ri}`,Ty=`click${Ri}${nf}`,Iy=`keydown${Ri}${nf}`,wC=`keyup${Ri}${nf}`,zi="show",AC="dropup",bC="dropend",CC="dropstart",RC="dropup-center",SC="dropdown-center",ui='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',PC=`${ui}.${zi}`,dc=".dropdown-menu",OC=".navbar",NC=".navbar-nav",kC=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",DC=an()?"top-end":"top-start",LC=an()?"top-start":"top-end",MC=an()?"bottom-end":"bottom-start",VC=an()?"bottom-start":"bottom-end",xC=an()?"left-start":"right-start",$C=an()?"right-start":"left-start",FC="top",UC="bottom",BC={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},jC={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class kn extends wn{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=se.next(this._element,dc)[0]||se.prev(this._element,dc)[0]||se.findOne(dc,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return BC}static get DefaultType(){return jC}static get NAME(){return pm}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Vr(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!P.trigger(this._element,TC,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(NC))for(const r of[].concat(...document.body.children))P.on(r,"mouseover",Dc);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(zi),this._element.classList.add(zi),P.trigger(this._element,IC,e)}}hide(){if(Vr(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!P.trigger(this._element,yC,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))P.off(r,"mouseover",Dc);this._popper&&this._popper.destroy(),this._menu.classList.remove(zi),this._element.classList.remove(zi),this._element.setAttribute("aria-expanded","false"),Qn.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,EC,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Yn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${pm.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof iy>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:Yn(this._config.reference)?e=Mr(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Zd(e,this._menu,n)}_isShown(){return this._menu.classList.contains(zi)}_getPlacement(){const e=this._parent;if(e.classList.contains(bC))return xC;if(e.classList.contains(CC))return $C;if(e.classList.contains(RC))return FC;if(e.classList.contains(SC))return UC;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(AC)?n?LC:DC:n?VC:MC}_detectNavbar(){return this._element.closest(OC)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Qn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Mt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const r=se.find(kC,this._menu).filter(i=>Ms(i));r.length&&ef(r,n,e===gm,!r.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=kn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===vC||e.type==="keyup"&&e.key!==mm)return;const n=se.find(PC);for(const r of n){const i=kn.getInstance(r);if(!i||i._config.autoClose===!1)continue;const s=e.composedPath(),o=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===mm||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),r=e.key===gC,i=[_C,gm].includes(e.key);if(!i&&!r||n&&!r)return;e.preventDefault();const s=this.matches(ui)?this:se.prev(this,ui)[0]||se.next(this,ui)[0]||se.findOne(ui,e.delegateTarget.parentNode),o=kn.getOrCreateInstance(s);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),s.focus())}}P.on(document,Iy,ui,kn.dataApiKeydownHandler);P.on(document,Iy,dc,kn.dataApiKeydownHandler);P.on(document,Ty,kn.clearMenus);P.on(document,wC,kn.clearMenus);P.on(document,Ty,ui,function(t){t.preventDefault(),kn.getOrCreateInstance(this).toggle()});ln(kn);const wy="backdrop",HC="fade",_m="show",vm=`mousedown.bs.${wy}`,qC={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},WC={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ay extends ma{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return qC}static get DefaultType(){return WC}static get NAME(){return wy}show(e){if(!this._config.isVisible){Mt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&pa(n),n.classList.add(_m),this._emulateAnimation(()=>{Mt(e)})}hide(e){if(!this._config.isVisible){Mt(e);return}this._getElement().classList.remove(_m),this._emulateAnimation(()=>{this.dispose(),Mt(e)})}dispose(){this._isAppended&&(P.off(this._element,vm),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(HC),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Mr(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),P.on(e,vm,()=>{Mt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){ly(e,this._getElement(),this._config.isAnimated)}}const KC="focustrap",zC="bs.focustrap",Mc=`.${zC}`,GC=`focusin${Mc}`,YC=`keydown.tab${Mc}`,QC="Tab",XC="forward",ym="backward",JC={autofocus:!0,trapElement:null},ZC={autofocus:"boolean",trapElement:"element"};class by extends ma{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return JC}static get DefaultType(){return ZC}static get NAME(){return KC}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,Mc),P.on(document,GC,e=>this._handleFocusin(e)),P.on(document,YC,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,Mc))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const r=se.focusableChildren(n);r.length===0?n.focus():this._lastTabNavDirection===ym?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===QC&&(this._lastTabNavDirection=e.shiftKey?ym:XC)}}const Em=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Tm=".sticky-top",qa="padding-right",Im="margin-right";class Mh{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,qa,n=>n+e),this._setElementAttributes(Em,qa,n=>n+e),this._setElementAttributes(Tm,Im,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,qa),this._resetElementAttributes(Em,qa),this._resetElementAttributes(Tm,Im)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,r){const i=this.getWidth(),s=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${r(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,s)}_saveInitialAttribute(e,n){const r=e.style.getPropertyValue(n);r&&Qn.setDataAttribute(e,n,r)}_resetElementAttributes(e,n){const r=i=>{const s=Qn.getDataAttribute(i,n);if(s===null){i.style.removeProperty(n);return}Qn.removeDataAttribute(i,n),i.style.setProperty(n,s)};this._applyManipulationCallback(e,r)}_applyManipulationCallback(e,n){if(Yn(e)){n(e);return}for(const r of se.find(e,this._element))n(r)}}const eR="modal",tR="bs.modal",cn=`.${tR}`,nR=".data-api",rR="Escape",iR=`hide${cn}`,sR=`hidePrevented${cn}`,Cy=`hidden${cn}`,Ry=`show${cn}`,oR=`shown${cn}`,aR=`resize${cn}`,cR=`click.dismiss${cn}`,lR=`mousedown.dismiss${cn}`,uR=`keydown.dismiss${cn}`,hR=`click${cn}${nR}`,wm="modal-open",dR="fade",Am="show",Fu="modal-static",fR=".modal.show",pR=".modal-dialog",mR=".modal-body",gR='[data-bs-toggle="modal"]',_R={backdrop:!0,focus:!0,keyboard:!0},vR={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class gs extends wn{constructor(e,n){super(e,n),this._dialog=se.findOne(pR,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Mh,this._addEventListeners()}static get Default(){return _R}static get DefaultType(){return vR}static get NAME(){return eR}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||P.trigger(this._element,Ry,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||P.trigger(this._element,iR).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Am),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){P.off(window,cn),P.off(this._dialog,cn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ay({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new by({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=se.findOne(mR,this._dialog);n&&(n.scrollTop=0),pa(this._element),this._element.classList.add(Am);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,oR,{relatedTarget:e})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,uR,e=>{if(e.key===rR){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),P.on(window,aR,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),P.on(this._element,lR,e=>{P.one(this._element,cR,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(wm),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Cy)})}_isAnimated(){return this._element.classList.contains(dR)}_triggerBackdropTransition(){if(P.trigger(this._element,sR).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(Fu)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Fu),this._queueCallback(()=>{this._element.classList.remove(Fu),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),r=n>0;if(r&&!e){const i=an()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!r&&e){const i=an()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const r=gs.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e](n)}})}}P.on(document,hR,gR,function(t){const e=se.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,Ry,i=>{i.defaultPrevented||P.one(e,Cy,()=>{Ms(this)&&this.focus()})});const n=se.findOne(fR);n&&gs.getInstance(n).hide(),gs.getOrCreateInstance(e).toggle(this)});vl(gs);ln(gs);const yR="offcanvas",ER="bs.offcanvas",ur=`.${ER}`,Sy=".data-api",TR=`load${ur}${Sy}`,IR="Escape",bm="show",Cm="showing",Rm="hiding",wR="offcanvas-backdrop",Py=".offcanvas.show",AR=`show${ur}`,bR=`shown${ur}`,CR=`hide${ur}`,Sm=`hidePrevented${ur}`,Oy=`hidden${ur}`,RR=`resize${ur}`,SR=`click${ur}${Sy}`,PR=`keydown.dismiss${ur}`,OR='[data-bs-toggle="offcanvas"]',NR={backdrop:!0,keyboard:!0,scroll:!1},kR={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class xr extends wn{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return NR}static get DefaultType(){return kR}static get NAME(){return yR}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||P.trigger(this._element,AR,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Mh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Cm);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(bm),this._element.classList.remove(Cm),P.trigger(this._element,bR,{relatedTarget:e})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||P.trigger(this._element,CR).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Rm),this._backdrop.hide();const n=()=>{this._element.classList.remove(bm,Rm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Mh().reset(),P.trigger(this._element,Oy)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){P.trigger(this._element,Sm);return}this.hide()},n=!!this._config.backdrop;return new Ay({className:wR,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new by({trapElement:this._element})}_addEventListeners(){P.on(this._element,PR,e=>{if(e.key===IR){if(this._config.keyboard){this.hide();return}P.trigger(this._element,Sm)}})}static jQueryInterface(e){return this.each(function(){const n=xr.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}P.on(document,SR,OR,function(t){const e=se.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Vr(this))return;P.one(e,Oy,()=>{Ms(this)&&this.focus()});const n=se.findOne(Py);n&&n!==e&&xr.getInstance(n).hide(),xr.getOrCreateInstance(e).toggle(this)});P.on(window,TR,()=>{for(const t of se.find(Py))xr.getOrCreateInstance(t).show()});P.on(window,RR,()=>{for(const t of se.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&xr.getOrCreateInstance(t).hide()});vl(xr);ln(xr);const DR=/^aria-[\w-]*$/i,Ny={"*":["class","dir","id","lang","role",DR],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},LR=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),MR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,VR=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?LR.has(n)?!!MR.test(t.nodeValue):!0:e.filter(r=>r instanceof RegExp).some(r=>r.test(n))};function xR(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const o of s){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(e["*"]||[],e[a]||[]);for(const u of c)VR(u,l)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const $R="TemplateFactory",FR={allowList:Ny,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},UR={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},BR={entry:"(string|element|function|null)",selector:"(string|element)"};class jR extends ma{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return FR}static get DefaultType(){return UR}static get NAME(){return $R}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(e,s,i);const n=e.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&n.classList.add(...r.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,r]of Object.entries(e))super._typeCheckConfig({selector:n,entry:r},BR)}_setContent(e,n,r){const i=se.findOne(r,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Yn(n)){this._putElementInTemplate(Mr(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?xR(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Mt(e,[this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const HR="tooltip",qR=new Set(["sanitize","allowList","sanitizeFn"]),Uu="fade",WR="modal",Wa="show",KR=".tooltip-inner",Pm=`.${WR}`,Om="hide.bs.modal",to="hover",Bu="focus",zR="click",GR="manual",YR="hide",QR="hidden",XR="show",JR="shown",ZR="inserted",eS="click",tS="focusin",nS="focusout",rS="mouseenter",iS="mouseleave",sS={AUTO:"auto",TOP:"top",RIGHT:an()?"left":"right",BOTTOM:"bottom",LEFT:an()?"right":"left"},oS={allowList:Ny,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},aS={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class xs extends wn{constructor(e,n){if(typeof iy>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return oS}static get DefaultType(){return aS}static get NAME(){return HR}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(Pm),Om,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=P.trigger(this._element,this.constructor.eventName(XR)),r=(ay(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!r)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),P.trigger(this._element,this.constructor.eventName(ZR))),this._popper=this._createPopper(i),i.classList.add(Wa),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))P.on(a,"mouseover",Dc);const o=()=>{P.trigger(this._element,this.constructor.eventName(JR)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||P.trigger(this._element,this.constructor.eventName(YR)).defaultPrevented)return;if(this._getTipElement().classList.remove(Wa),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))P.off(i,"mouseover",Dc);this._activeTrigger[zR]=!1,this._activeTrigger[Bu]=!1,this._activeTrigger[to]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName(QR)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(Uu,Wa),n.classList.add(`bs-${this.constructor.NAME}-auto`);const r=zb(this.constructor.NAME).toString();return n.setAttribute("id",r),this._isAnimated()&&n.classList.add(Uu),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new jR({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[KR]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Uu)}_isShown(){return this.tip&&this.tip.classList.contains(Wa)}_createPopper(e){const n=Mt(this._config.placement,[this,e,this._element]),r=sS[n.toUpperCase()];return Zd(this._element,e,this._getPopperConfig(r))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return Mt(e,[this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...n,...Mt(this._config.popperConfig,[n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")P.on(this._element,this.constructor.eventName(eS),this._config.selector,r=>{this._initializeOnDelegatedTarget(r).toggle()});else if(n!==GR){const r=n===to?this.constructor.eventName(rS):this.constructor.eventName(tS),i=n===to?this.constructor.eventName(iS):this.constructor.eventName(nS);P.on(this._element,r,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusin"?Bu:to]=!0,o._enter()}),P.on(this._element,i,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusout"?Bu:to]=o._element.contains(s.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(Pm),Om,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=Qn.getDataAttributes(this._element);for(const r of Object.keys(n))qR.has(r)&&delete n[r];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Mr(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,r]of Object.entries(this._config))this.constructor.Default[n]!==r&&(e[n]=r);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=xs.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ln(xs);const cS="popover",lS=".popover-header",uS=".popover-body",hS={...xs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},dS={...xs.DefaultType,content:"(null|string|element|function)"};class rf extends xs{static get Default(){return hS}static get DefaultType(){return dS}static get NAME(){return cS}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[lS]:this._getTitle(),[uS]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=rf.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ln(rf);const fS="scrollspy",pS="bs.scrollspy",sf=`.${pS}`,mS=".data-api",gS=`activate${sf}`,Nm=`click${sf}`,_S=`load${sf}${mS}`,vS="dropdown-item",Ui="active",yS='[data-bs-spy="scroll"]',ju="[href]",ES=".nav, .list-group",km=".nav-link",TS=".nav-item",IS=".list-group-item",wS=`${km}, ${TS} > ${km}, ${IS}`,AS=".dropdown",bS=".dropdown-toggle",CS={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},RS={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Tl extends wn{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return CS}static get DefaultType(){return RS}static get NAME(){return fS}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Mr(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,Nm),P.on(this._config.target,Nm,ju,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const r=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:i,behavior:"smooth"});return}r.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),r=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(r(o),!i)return;continue}!s&&!a&&r(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=se.find(ju,this._config.target);for(const n of e){if(!n.hash||Vr(n))continue;const r=se.findOne(decodeURI(n.hash),this._element);Ms(r)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,r))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Ui),this._activateParents(e),P.trigger(this._element,gS,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(vS)){se.findOne(bS,e.closest(AS)).classList.add(Ui);return}for(const n of se.parents(e,ES))for(const r of se.prev(n,wS))r.classList.add(Ui)}_clearActiveClass(e){e.classList.remove(Ui);const n=se.find(`${ju}.${Ui}`,e);for(const r of n)r.classList.remove(Ui)}static jQueryInterface(e){return this.each(function(){const n=Tl.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}P.on(window,_S,()=>{for(const t of se.find(yS))Tl.getOrCreateInstance(t)});ln(Tl);const SS="tab",PS="bs.tab",Si=`.${PS}`,OS=`hide${Si}`,NS=`hidden${Si}`,kS=`show${Si}`,DS=`shown${Si}`,LS=`click${Si}`,MS=`keydown${Si}`,VS=`load${Si}`,xS="ArrowLeft",Dm="ArrowRight",$S="ArrowUp",Lm="ArrowDown",Hu="Home",Mm="End",hi="active",Vm="fade",qu="show",FS="dropdown",US=".dropdown-toggle",BS=".dropdown-menu",Wu=":not(.dropdown-toggle)",jS='.list-group, .nav, [role="tablist"]',HS=".nav-item, .list-group-item",qS=`.nav-link${Wu}, .list-group-item${Wu}, [role="tab"]${Wu}`,ky='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ku=`${qS}, ${ky}`,WS=`.${hi}[data-bs-toggle="tab"], .${hi}[data-bs-toggle="pill"], .${hi}[data-bs-toggle="list"]`;class _s extends wn{constructor(e){super(e),this._parent=this._element.closest(jS),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,MS,n=>this._keydown(n)))}static get NAME(){return SS}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),r=n?P.trigger(n,OS,{relatedTarget:e}):null;P.trigger(e,kS,{relatedTarget:n}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(hi),this._activate(se.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(qu);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),P.trigger(e,DS,{relatedTarget:n})};this._queueCallback(r,e,e.classList.contains(Vm))}_deactivate(e,n){if(!e)return;e.classList.remove(hi),e.blur(),this._deactivate(se.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(qu);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),P.trigger(e,NS,{relatedTarget:n})};this._queueCallback(r,e,e.classList.contains(Vm))}_keydown(e){if(![xS,Dm,$S,Lm,Hu,Mm].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(i=>!Vr(i));let r;if([Hu,Mm].includes(e.key))r=n[e.key===Hu?0:n.length-1];else{const i=[Dm,Lm].includes(e.key);r=ef(n,e.target,i,!0)}r&&(r.focus({preventScroll:!0}),_s.getOrCreateInstance(r).show())}_getChildren(){return se.find(Ku,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const r of n)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),r=this._getOuterElement(e);e.setAttribute("aria-selected",n),r!==e&&this._setAttributeIfNotExists(r,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=se.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const r=this._getOuterElement(e);if(!r.classList.contains(FS))return;const i=(s,o)=>{const a=se.findOne(s,r);a&&a.classList.toggle(o,n)};i(US,hi),i(BS,qu),r.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,r){e.hasAttribute(n)||e.setAttribute(n,r)}_elemIsActive(e){return e.classList.contains(hi)}_getInnerElement(e){return e.matches(Ku)?e:se.findOne(Ku,e)}_getOuterElement(e){return e.closest(HS)||e}static jQueryInterface(e){return this.each(function(){const n=_s.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}P.on(document,LS,ky,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Vr(this)&&_s.getOrCreateInstance(this).show()});P.on(window,VS,()=>{for(const t of se.find(WS))_s.getOrCreateInstance(t)});ln(_s);const KS="toast",zS="bs.toast",zr=`.${zS}`,GS=`mouseover${zr}`,YS=`mouseout${zr}`,QS=`focusin${zr}`,XS=`focusout${zr}`,JS=`hide${zr}`,ZS=`hidden${zr}`,eP=`show${zr}`,tP=`shown${zr}`,nP="fade",xm="hide",Ka="show",za="showing",rP={animation:"boolean",autohide:"boolean",delay:"number"},iP={animation:!0,autohide:!0,delay:5e3};class Il extends wn{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return iP}static get DefaultType(){return rP}static get NAME(){return KS}show(){if(P.trigger(this._element,eP).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(nP);const n=()=>{this._element.classList.remove(za),P.trigger(this._element,tP),this._maybeScheduleHide()};this._element.classList.remove(xm),pa(this._element),this._element.classList.add(Ka,za),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||P.trigger(this._element,JS).defaultPrevented)return;const n=()=>{this._element.classList.add(xm),this._element.classList.remove(za,Ka),P.trigger(this._element,ZS)};this._element.classList.add(za),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ka),super.dispose()}isShown(){return this._element.classList.contains(Ka)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const r=e.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,GS,e=>this._onInteraction(e,!0)),P.on(this._element,YS,e=>this._onInteraction(e,!1)),P.on(this._element,QS,e=>this._onInteraction(e,!0)),P.on(this._element,XS,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Il.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}vl(Il);ln(Il);function of(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Be={},ts=[],_n=()=>{},sP=()=>!1,oP=/^on[^a-z]/,wl=t=>oP.test(t),af=t=>t.startsWith("onUpdate:"),Ze=Object.assign,cf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},aP=Object.prototype.hasOwnProperty,Oe=(t,e)=>aP.call(t,e),re=Array.isArray,ns=t=>va(t)==="[object Map]",Al=t=>va(t)==="[object Set]",$m=t=>va(t)==="[object Date]",_e=t=>typeof t=="function",et=t=>typeof t=="string",$o=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Dy=t=>xe(t)&&_e(t.then)&&_e(t.catch),Ly=Object.prototype.toString,va=t=>Ly.call(t),cP=t=>va(t).slice(8,-1),My=t=>va(t)==="[object Object]",lf=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fc=of(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lP=/-(\w)/g,Un=bl(t=>t.replace(lP,(e,n)=>n?n.toUpperCase():"")),uP=/\B([A-Z])/g,$s=bl(t=>t.replace(uP,"-$1").toLowerCase()),Cl=bl(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=bl(t=>t?`on${Cl(t)}`:""),Fo=(t,e)=>!Object.is(t,e),mc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},hP=t=>{const e=et(t)?Number(t):NaN;return isNaN(e)?t:e};let Fm;const Vh=()=>Fm||(Fm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jt(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=et(r)?mP(r):jt(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(et(t))return t;if(xe(t))return t}}const dP=/;(?![^(]*\))/g,fP=/:([^]+)/,pP=/\/\*[^]*?\*\//g;function mP(t){const e={};return t.replace(pP,"").split(dP).forEach(n=>{if(n){const r=n.split(fP);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $r(t){let e="";if(et(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=$r(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_P=of(gP);function Vy(t){return!!t||t===""}function vP(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Rl(t[r],e[r]);return n}function Rl(t,e){if(t===e)return!0;let n=$m(t),r=$m(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$o(t),r=$o(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?vP(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Rl(t[o],e[o]))return!1}}return String(t)===String(e)}function yP(t,e){return t.findIndex(n=>Rl(n,e))}const Wt=t=>et(t)?t:t==null?"":re(t)||xe(t)&&(t.toString===Ly||!_e(t.toString))?JSON.stringify(t,xy,2):String(t),xy=(t,e)=>e&&e.__v_isRef?xy(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Al(e)?{[`Set(${e.size})`]:[...e.values()]}:xe(e)&&!re(e)&&!My(e)?String(e):e;let Bt;class $y{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Fy(t){return new $y(t)}function EP(t,e=Bt){e&&e.active&&e.effects.push(t)}function Uy(){return Bt}function TP(t){Bt&&Bt.cleanups.push(t)}const uf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},By=t=>(t.w&Fr)>0,jy=t=>(t.n&Fr)>0,IP=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fr},wP=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];By(i)&&!jy(i)?i.delete(t):e[n++]=i,i.w&=~Fr,i.n&=~Fr}e.length=n}},$c=new WeakMap;let co=0,Fr=1;const xh=30;let fn;const vi=Symbol(""),$h=Symbol("");class hf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,EP(this,r)}run(){if(!this.active)return this.fn();let e=fn,n=Or;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,Or=!0,Fr=1<<++co,co<=xh?IP(this):Um(this),this.fn()}finally{co<=xh&&wP(this),Fr=1<<--co,fn=this.parent,Or=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Um(this),this.onStop&&this.onStop(),this.active=!1)}}function Um(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Or=!0;const Hy=[];function Fs(){Hy.push(Or),Or=!1}function Us(){const t=Hy.pop();Or=t===void 0?!0:t}function Ft(t,e,n){if(Or&&fn){let r=$c.get(t);r||$c.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=uf()),qy(i)}}function qy(t,e){let n=!1;co<=xh?jy(t)||(t.n|=Fr,n=!By(t)):n=!t.has(fn),n&&(t.add(fn),fn.deps.push(t))}function nr(t,e,n,r,i,s){const o=$c.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?lf(n)&&a.push(o.get("length")):(a.push(o.get(vi)),ns(t)&&a.push(o.get($h)));break;case"delete":re(t)||(a.push(o.get(vi)),ns(t)&&a.push(o.get($h)));break;case"set":ns(t)&&a.push(o.get(vi));break}if(a.length===1)a[0]&&Fh(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Fh(uf(c))}}function Fh(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&Bm(r);for(const r of n)r.computed||Bm(r)}function Bm(t,e){(t!==fn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function AP(t,e){var n;return(n=$c.get(t))==null?void 0:n.get(e)}const bP=of("__proto__,__v_isRef,__isVue"),Wy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($o)),CP=df(),RP=df(!1,!0),SP=df(!0),jm=PP();function PP(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ae(this);for(let s=0,o=this.length;s<o;s++)Ft(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Ae)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fs();const r=Ae(this)[e].apply(this,n);return Us(),r}}),t}function OP(t){const e=Ae(this);return Ft(e,"has",t),e.hasOwnProperty(t)}function df(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?KP:Qy:e?Yy:Gy).get(r))return r;const o=re(r);if(!t){if(o&&Oe(jm,i))return Reflect.get(jm,i,s);if(i==="hasOwnProperty")return OP}const a=Reflect.get(r,i,s);return($o(i)?Wy.has(i):bP(i))||(t||Ft(r,"get",i),e)?a:De(a)?o&&lf(i)?a:a.value:xe(a)?t?Jy(a):ya(a):a}}const NP=Ky(),kP=Ky(!0);function Ky(t=!1){return function(n,r,i,s){let o=n[r];if(vs(o)&&De(o)&&!De(i))return!1;if(!t&&(!Fc(i)&&!vs(i)&&(o=Ae(o),i=Ae(i)),!re(n)&&De(o)&&!De(i)))return o.value=i,!0;const a=re(n)&&lf(r)?Number(r)<n.length:Oe(n,r),c=Reflect.set(n,r,i,s);return n===Ae(s)&&(a?Fo(i,o)&&nr(n,"set",r,i):nr(n,"add",r,i)),c}}function DP(t,e){const n=Oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&nr(t,"delete",e,void 0),r}function LP(t,e){const n=Reflect.has(t,e);return(!$o(e)||!Wy.has(e))&&Ft(t,"has",e),n}function MP(t){return Ft(t,"iterate",re(t)?"length":vi),Reflect.ownKeys(t)}const zy={get:CP,set:NP,deleteProperty:DP,has:LP,ownKeys:MP},VP={get:SP,set(t,e){return!0},deleteProperty(t,e){return!0}},xP=Ze({},zy,{get:RP,set:kP}),ff=t=>t,Sl=t=>Reflect.getPrototypeOf(t);function Ga(t,e,n=!1,r=!1){t=t.__v_raw;const i=Ae(t),s=Ae(e);n||(e!==s&&Ft(i,"get",e),Ft(i,"get",s));const{has:o}=Sl(i),a=r?ff:n?gf:Uo;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Ya(t,e=!1){const n=this.__v_raw,r=Ae(n),i=Ae(t);return e||(t!==i&&Ft(r,"has",t),Ft(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Qa(t,e=!1){return t=t.__v_raw,!e&&Ft(Ae(t),"iterate",vi),Reflect.get(t,"size",t)}function Hm(t){t=Ae(t);const e=Ae(this);return Sl(e).has.call(e,t)||(e.add(t),nr(e,"add",t,t)),this}function qm(t,e){e=Ae(e);const n=Ae(this),{has:r,get:i}=Sl(n);let s=r.call(n,t);s||(t=Ae(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Fo(e,o)&&nr(n,"set",t,e):nr(n,"add",t,e),this}function Wm(t){const e=Ae(this),{has:n,get:r}=Sl(e);let i=n.call(e,t);i||(t=Ae(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&nr(e,"delete",t,void 0),s}function Km(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&nr(t,"clear",void 0,void 0),n}function Xa(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Ae(o),c=e?ff:t?gf:Uo;return!t&&Ft(a,"iterate",vi),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Ja(t,e,n){return function(...r){const i=this.__v_raw,s=Ae(i),o=ns(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?ff:e?gf:Uo;return!e&&Ft(s,"iterate",c?$h:vi),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function mr(t){return function(...e){return t==="delete"?!1:this}}function $P(){const t={get(s){return Ga(this,s)},get size(){return Qa(this)},has:Ya,add:Hm,set:qm,delete:Wm,clear:Km,forEach:Xa(!1,!1)},e={get(s){return Ga(this,s,!1,!0)},get size(){return Qa(this)},has:Ya,add:Hm,set:qm,delete:Wm,clear:Km,forEach:Xa(!1,!0)},n={get(s){return Ga(this,s,!0)},get size(){return Qa(this,!0)},has(s){return Ya.call(this,s,!0)},add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear"),forEach:Xa(!0,!1)},r={get(s){return Ga(this,s,!0,!0)},get size(){return Qa(this,!0)},has(s){return Ya.call(this,s,!0)},add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear"),forEach:Xa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ja(s,!1,!1),n[s]=Ja(s,!0,!1),e[s]=Ja(s,!1,!0),r[s]=Ja(s,!0,!0)}),[t,n,e,r]}const[FP,UP,BP,jP]=$P();function pf(t,e){const n=e?t?jP:BP:t?UP:FP;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Oe(n,i)&&i in r?n:r,i,s)}const HP={get:pf(!1,!1)},qP={get:pf(!1,!0)},WP={get:pf(!0,!1)},Gy=new WeakMap,Yy=new WeakMap,Qy=new WeakMap,KP=new WeakMap;function zP(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GP(t){return t.__v_skip||!Object.isExtensible(t)?0:zP(cP(t))}function ya(t){return vs(t)?t:mf(t,!1,zy,HP,Gy)}function Xy(t){return mf(t,!1,xP,qP,Yy)}function Jy(t){return mf(t,!0,VP,WP,Qy)}function mf(t,e,n,r,i){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=GP(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Xn(t){return vs(t)?Xn(t.__v_raw):!!(t&&t.__v_isReactive)}function vs(t){return!!(t&&t.__v_isReadonly)}function Fc(t){return!!(t&&t.__v_isShallow)}function Zy(t){return Xn(t)||vs(t)}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Pl(t){return Vc(t,"__v_skip",!0),t}const Uo=t=>xe(t)?ya(t):t,gf=t=>xe(t)?Jy(t):t;function eE(t){Or&&fn&&(t=Ae(t),qy(t.dep||(t.dep=uf())))}function tE(t,e){t=Ae(t);const n=t.dep;n&&Fh(n)}function De(t){return!!(t&&t.__v_isRef===!0)}function Xe(t){return nE(t,!1)}function YP(t){return nE(t,!0)}function nE(t,e){return De(t)?t:new QP(t,e)}class QP{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:Uo(e)}get value(){return eE(this),this._value}set value(e){const n=this.__v_isShallow||Fc(e)||vs(e);e=n?e:Ae(e),Fo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Uo(e),tE(this))}}function le(t){return De(t)?t.value:t}const XP={get:(t,e,n)=>le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function rE(t){return Xn(t)?t:new Proxy(t,XP)}function JP(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=iE(t,n);return e}class ZP{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return AP(Ae(this._object),this._key)}}class eO{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function tO(t,e,n){return De(t)?t:_e(t)?new eO(t):xe(t)&&arguments.length>1?iE(t,e,n):Xe(t)}function iE(t,e,n){const r=t[e];return De(r)?r:new ZP(t,e,n)}class nO{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new hf(e,()=>{this._dirty||(this._dirty=!0,tE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ae(this);return eE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rO(t,e,n=!1){let r,i;const s=_e(t);return s?(r=t,i=_n):(r=t.get,i=t.set),new nO(r,i,s||!i,n)}function Nr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Ol(s,e,n)}return i}function rn(t,e,n,r){if(_e(t)){const s=Nr(t,e,n,r);return s&&Dy(s)&&s.catch(o=>{Ol(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(rn(t[s],e,n,r));return i}function Ol(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Nr(c,null,10,[t,o,a]);return}}iO(t,n,i,r)}function iO(t,e,n,r=!0){console.error(t)}let Bo=!1,Uh=!1;const It=[];let Rn=0;const rs=[];let qn=null,oi=0;const sE=Promise.resolve();let _f=null;function Nl(t){const e=_f||sE;return t?e.then(this?t.bind(this):t):e}function sO(t){let e=Rn+1,n=It.length;for(;e<n;){const r=e+n>>>1;jo(It[r])<t?e=r+1:n=r}return e}function vf(t){(!It.length||!It.includes(t,Bo&&t.allowRecurse?Rn+1:Rn))&&(t.id==null?It.push(t):It.splice(sO(t.id),0,t),oE())}function oE(){!Bo&&!Uh&&(Uh=!0,_f=sE.then(cE))}function oO(t){const e=It.indexOf(t);e>Rn&&It.splice(e,1)}function aO(t){re(t)?rs.push(...t):(!qn||!qn.includes(t,t.allowRecurse?oi+1:oi))&&rs.push(t),oE()}function zm(t,e=Bo?Rn+1:0){for(;e<It.length;e++){const n=It[e];n&&n.pre&&(It.splice(e,1),e--,n())}}function aE(t){if(rs.length){const e=[...new Set(rs)];if(rs.length=0,qn){qn.push(...e);return}for(qn=e,qn.sort((n,r)=>jo(n)-jo(r)),oi=0;oi<qn.length;oi++)qn[oi]();qn=null,oi=0}}const jo=t=>t.id==null?1/0:t.id,cO=(t,e)=>{const n=jo(t)-jo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cE(t){Uh=!1,Bo=!0,It.sort(cO);const e=_n;try{for(Rn=0;Rn<It.length;Rn++){const n=It[Rn];n&&n.active!==!1&&Nr(n,null,14)}}finally{Rn=0,It.length=0,aE(),Bo=!1,_f=null,(It.length||rs.length)&&cE()}}function lO(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Be;d&&(i=n.map(f=>et(f)?f.trim():f)),h&&(i=n.map(xc))}let a,c=r[a=pc(e)]||r[a=pc(Un(e))];!c&&s&&(c=r[a=pc($s(e))]),c&&rn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rn(l,t,6,i)}}function lE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!_e(t)){const c=l=>{const u=lE(l,e,!0);u&&(a=!0,Ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(xe(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):Ze(o,s),xe(t)&&r.set(t,o),o)}function kl(t,e){return!t||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,$s(e))||Oe(t,e))}let ht=null,Dl=null;function Uc(t){const e=ht;return ht=t,Dl=t&&t.type.__scopeId||null,e}function uE(t){Dl=t}function hE(){Dl=null}function Vt(t,e=ht,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&sg(-1);const s=Uc(e);let o;try{o=t(...i)}finally{Uc(s),r._d&&sg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zu(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:_,inheritAttrs:g}=t;let y,T;const R=Uc(t);try{if(n.shapeFlag&4){const E=i||r;y=Cn(u.call(E,E,h,s,f,d,_)),T=c}else{const E=e;y=Cn(E.length>1?E(s,{attrs:c,slots:a,emit:l}):E(s,null)),T=e.props?c:uO(c)}}catch(E){Co.length=0,Ol(E,t,1),y=Fe(sn)}let A=y;if(T&&g!==!1){const E=Object.keys(T),{shapeFlag:F}=A;E.length&&F&7&&(o&&E.some(af)&&(T=hO(T,o)),A=Ur(A,T))}return n.dirs&&(A=Ur(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),y=A,Uc(R),y}const uO=t=>{let e;for(const n in t)(n==="class"||n==="style"||wl(n))&&((e||(e={}))[n]=t[n]);return e},hO=(t,e)=>{const n={};for(const r in t)(!af(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dO(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Gm(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!kl(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Gm(r,o,l):!0:!!o;return!1}function Gm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!kl(n,s))return!0}return!1}function fO({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pO=t=>t.__isSuspense;function mO(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):aO(t)}function gO(t,e){return yf(t,null,e)}const Za={};function To(t,e,n){return yf(t,e,n)}function yf(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Be){var a;const c=Uy()===((a=at)==null?void 0:a.scope)?at:null;let l,u=!1,h=!1;if(De(t)?(l=()=>t.value,u=Fc(t)):Xn(t)?(l=()=>t,r=!0):re(t)?(h=!0,u=t.some(E=>Xn(E)||Fc(E)),l=()=>t.map(E=>{if(De(E))return E.value;if(Xn(E))return di(E);if(_e(E))return Nr(E,c,2)})):_e(t)?e?l=()=>Nr(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),rn(t,c,3,[f])}:l=_n,e&&r){const E=l;l=()=>di(E())}let d,f=E=>{d=R.onStop=()=>{Nr(E,c,4)}},_;if(zo)if(f=_n,e?n&&rn(e,c,3,[l(),h?[]:void 0,f]):l(),i==="sync"){const E=cN();_=E.__watcherHandles||(E.__watcherHandles=[])}else return _n;let g=h?new Array(t.length).fill(Za):Za;const y=()=>{if(R.active)if(e){const E=R.run();(r||u||(h?E.some((F,z)=>Fo(F,g[z])):Fo(E,g)))&&(d&&d(),rn(e,c,3,[E,g===Za?void 0:h&&g[0]===Za?[]:g,f]),g=E)}else R.run()};y.allowRecurse=!!e;let T;i==="sync"?T=y:i==="post"?T=()=>Lt(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),T=()=>vf(y));const R=new hf(l,T);e?n?y():g=R.run():i==="post"?Lt(R.run.bind(R),c&&c.suspense):R.run();const A=()=>{R.stop(),c&&c.scope&&cf(c.scope.effects,R)};return _&&_.push(A),A}function _O(t,e,n){const r=this.proxy,i=et(t)?t.includes(".")?dE(r,t):()=>r[t]:t.bind(r,r);let s;_e(e)?s=e:(s=e.handler,n=e);const o=at;ys(this);const a=yf(i,s.bind(r),n);return o?ys(o):yi(),a}function dE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function di(t,e){if(!xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))di(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)di(t[n],e);else if(Al(t)||ns(t))t.forEach(n=>{di(n,e)});else if(My(t))for(const n in t)di(t[n],e);return t}function Zr(t,e){const n=ht;if(n===null)return t;const r=Ul(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Be]=e[s];o&&(_e(o)&&(o={mounted:o,updated:o}),o.deep&&di(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ei(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Fs(),rn(c,n,8,[t.el,a,t,e]),Us())}}function fE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _E(()=>{t.isMounted=!0}),yE(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],pE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},vO={name:"BaseTransition",props:pE,setup(t,{slots:e}){const n=bf(),r=fE();let i;return()=>{const s=e.default&&Ef(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const g of s)if(g.type!==sn){o=g;break}}const a=Ae(t),{mode:c}=a;if(r.isLeaving)return Gu(o);const l=Ym(o);if(!l)return Gu(o);const u=Ho(l,a,r,n);qo(l,u);const h=n.subTree,d=h&&Ym(h);let f=!1;const{getTransitionKey:_}=l.type;if(_){const g=_();i===void 0?i=g:g!==i&&(i=g,f=!0)}if(d&&d.type!==sn&&(!ai(l,d)||f)){const g=Ho(d,a,r,n);if(qo(d,g),c==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Gu(o);c==="in-out"&&l.type!==sn&&(g.delayLeave=(y,T,R)=>{const A=mE(r,d);A[String(d.key)]=d,y._leaveCb=()=>{T(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=R})}return o}}},yO=vO;function mE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ho(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:_,onBeforeAppear:g,onAppear:y,onAfterAppear:T,onAppearCancelled:R}=e,A=String(t.key),E=mE(n,t),F=(D,L)=>{D&&rn(D,r,9,L)},z=(D,L)=>{const W=L[1];F(D,L),re(D)?D.every(he=>he.length<=1)&&W():D.length<=1&&W()},Z={mode:s,persisted:o,beforeEnter(D){let L=a;if(!n.isMounted)if(i)L=g||a;else return;D._leaveCb&&D._leaveCb(!0);const W=E[A];W&&ai(t,W)&&W.el._leaveCb&&W.el._leaveCb(),F(L,[D])},enter(D){let L=c,W=l,he=u;if(!n.isMounted)if(i)L=y||c,W=T||l,he=R||u;else return;let B=!1;const ee=D._enterCb=Re=>{B||(B=!0,Re?F(he,[D]):F(W,[D]),Z.delayedLeave&&Z.delayedLeave(),D._enterCb=void 0)};L?z(L,[D,ee]):ee()},leave(D,L){const W=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return L();F(h,[D]);let he=!1;const B=D._leaveCb=ee=>{he||(he=!0,L(),ee?F(_,[D]):F(f,[D]),D._leaveCb=void 0,E[W]===t&&delete E[W])};E[W]=t,d?z(d,[D,B]):B()},clone(D){return Ho(D,e,n,r)}};return Z}function Gu(t){if(Ll(t))return t=Ur(t),t.children=null,t}function Ym(t){return Ll(t)?t.children?t.children[0]:void 0:t}function qo(t,e){t.shapeFlag&6&&t.component?qo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ef(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Je?(o.patchFlag&128&&i++,r=r.concat(Ef(o.children,e,a))):(e||o.type!==sn)&&r.push(a!=null?Ur(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Jt(t,e){return _e(t)?(()=>Ze({name:t.name},e,{setup:t}))():t}const Io=t=>!!t.type.__asyncLoader,Ll=t=>t.type.__isKeepAlive;function EO(t,e){gE(t,"a",e)}function TO(t,e){gE(t,"da",e)}function gE(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ml(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ll(i.parent.vnode)&&IO(r,e,n,i),i=i.parent}}function IO(t,e,n,r){const i=Ml(e,t,r,!0);EE(()=>{cf(r[e],i)},n)}function Ml(t,e,n=at,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fs(),ys(n);const a=rn(e,n,t,o);return yi(),Us(),a});return r?i.unshift(s):i.push(s),s}}const hr=t=>(e,n=at)=>(!zo||t==="sp")&&Ml(t,(...r)=>e(...r),n),wO=hr("bm"),_E=hr("m"),AO=hr("bu"),vE=hr("u"),yE=hr("bum"),EE=hr("um"),bO=hr("sp"),CO=hr("rtg"),RO=hr("rtc");function SO(t,e=at){Ml("ec",t,e)}const Tf="components";function wo(t,e){return IE(Tf,t,!0,e)||t}const TE=Symbol.for("v-ndc");function Vl(t){return et(t)?IE(Tf,t,!1)||t:t||TE}function IE(t,e,n=!0,r=!1){const i=ht||at;if(i){const s=i.type;if(t===Tf){const a=sN(s,!1);if(a&&(a===e||a===Un(e)||a===Cl(Un(e))))return s}const o=Qm(i[t]||s[t],e)||Qm(i.appContext[t],e);return!o&&r?s:o}}function Qm(t,e){return t&&(t[e]||t[Un(e)]||t[Cl(Un(e))])}function Ao(t,e,n,r){let i;const s=n&&n[r];if(re(t)||et(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(xe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function PO(t,e,n={},r,i){if(ht.isCE||ht.parent&&Io(ht.parent)&&ht.parent.isCE)return e!=="default"&&(n.name=e),Fe("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),ce();const o=s&&wE(s(n)),a=mn(Je,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function wE(t){return t.some(e=>jc(e)?!(e.type===sn||e.type===Je&&!wE(e.children)):!0)?t:null}function OO(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:pc(r)]=t[r];return n}const Bh=t=>t?LE(t)?Ul(t)||t.proxy:Bh(t.parent):null,bo=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bh(t.parent),$root:t=>Bh(t.root),$emit:t=>t.emit,$options:t=>If(t),$forceUpdate:t=>t.f||(t.f=()=>vf(t.update)),$nextTick:t=>t.n||(t.n=Nl.bind(t.proxy)),$watch:t=>_O.bind(t)}),Yu=(t,e)=>t!==Be&&!t.__isScriptSetup&&Oe(t,e),NO={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Yu(r,e))return o[e]=1,r[e];if(i!==Be&&Oe(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Oe(l,e))return o[e]=3,s[e];if(n!==Be&&Oe(n,e))return o[e]=4,n[e];jh&&(o[e]=0)}}const u=bo[e];let h,d;if(u)return e==="$attrs"&&Ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Be&&Oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Oe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Yu(i,e)?(i[e]=n,!0):r!==Be&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Be&&Oe(t,o)||Yu(e,o)||(a=s[0])&&Oe(a,o)||Oe(r,o)||Oe(bo,o)||Oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xm(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jh=!0;function kO(t){const e=If(t),n=t.proxy,r=t.ctx;jh=!1,e.beforeCreate&&Jm(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:g,deactivated:y,beforeDestroy:T,beforeUnmount:R,destroyed:A,unmounted:E,render:F,renderTracked:z,renderTriggered:Z,errorCaptured:D,serverPrefetch:L,expose:W,inheritAttrs:he,components:B,directives:ee,filters:Re}=e;if(l&&DO(l,r,null),o)for(const ge in o){const be=o[ge];_e(be)&&(r[ge]=be.bind(n))}if(i){const ge=i.call(n,n);xe(ge)&&(t.data=ya(ge))}if(jh=!0,s)for(const ge in s){const be=s[ge],lt=_e(be)?be.bind(n,n):_e(be.get)?be.get.bind(n,n):_n,Q=!_e(be)&&_e(be.set)?be.set.bind(n):_n,ne=en({get:lt,set:Q});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>ne.value,set:ye=>ne.value=ye})}if(a)for(const ge in a)AE(a[ge],r,n,ge);if(c){const ge=_e(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(be=>{gc(be,ge[be])})}u&&Jm(u,t,"c");function oe(ge,be){re(be)?be.forEach(lt=>ge(lt.bind(n))):be&&ge(be.bind(n))}if(oe(wO,h),oe(_E,d),oe(AO,f),oe(vE,_),oe(EO,g),oe(TO,y),oe(SO,D),oe(RO,z),oe(CO,Z),oe(yE,R),oe(EE,E),oe(bO,L),re(W))if(W.length){const ge=t.exposed||(t.exposed={});W.forEach(be=>{Object.defineProperty(ge,be,{get:()=>n[be],set:lt=>n[be]=lt})})}else t.exposed||(t.exposed={});F&&t.render===_n&&(t.render=F),he!=null&&(t.inheritAttrs=he),B&&(t.components=B),ee&&(t.directives=ee)}function DO(t,e,n=_n){re(t)&&(t=Hh(t));for(const r in t){const i=t[r];let s;xe(i)?"default"in i?s=zt(i.from||r,i.default,!0):s=zt(i.from||r):s=zt(i),De(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Jm(t,e,n){rn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function AE(t,e,n,r){const i=r.includes(".")?dE(n,r):()=>n[r];if(et(t)){const s=e[t];_e(s)&&To(i,s)}else if(_e(t))To(i,t.bind(n));else if(xe(t))if(re(t))t.forEach(s=>AE(s,e,n,r));else{const s=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(s)&&To(i,s,t)}}function If(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Bc(c,l,o,!0)),Bc(c,e,o)),xe(e)&&s.set(e,c),c}function Bc(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Bc(t,s,n,!0),i&&i.forEach(o=>Bc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=LO[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const LO={data:Zm,props:eg,emits:eg,methods:lo,computed:lo,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:lo,directives:lo,watch:VO,provide:Zm,inject:MO};function Zm(t,e){return e?t?function(){return Ze(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function MO(t,e){return lo(Hh(t),Hh(e))}function Hh(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function lo(t,e){return t?Ze(Object.create(null),t,e):e}function eg(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ze(Object.create(null),Xm(t),Xm(e??{})):e}function VO(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function bE(){return{app:null,config:{isNativeTag:sP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xO=0;function $O(t,e){return function(r,i=null){_e(r)||(r=Ze({},r)),i!=null&&!xe(i)&&(i=null);const s=bE(),o=new Set;let a=!1;const c=s.app={_uid:xO++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:lN,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&_e(l.install)?(o.add(l),l.install(c,...u)):_e(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=Fe(r,i);return d.appContext=s,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ul(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Wo=c;try{return l()}finally{Wo=null}}};return c}}let Wo=null;function gc(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=at||ht;if(r||Wo){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wo._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function FO(){return!!(at||ht||Wo)}function UO(t,e,n,r=!1){const i={},s={};Vc(s,$l,1),t.propsDefaults=Object.create(null),CE(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Xy(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function BO(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Ae(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(kl(t.emitsOptions,d))continue;const f=e[d];if(c)if(Oe(s,d))f!==s[d]&&(s[d]=f,l=!0);else{const _=Un(d);i[_]=qh(c,a,_,f,t,!1)}else f!==s[d]&&(s[d]=f,l=!0)}}}else{CE(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Oe(e,h)&&((u=$s(h))===h||!Oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=qh(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Oe(e,h))&&(delete s[h],l=!0)}l&&nr(t,"set","$attrs")}function CE(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fc(c))continue;const l=e[c];let u;i&&Oe(i,u=Un(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:kl(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Ae(n),l=a||Be;for(let u=0;u<s.length;u++){const h=s[u];n[h]=qh(i,c,h,l[h],t,!Oe(l,h))}}return o}function qh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(ys(i),r=l[n]=c.call(null,e),yi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===$s(n))&&(r=!0))}return r}function RE(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!_e(t)){const u=h=>{c=!0;const[d,f]=RE(h,e,!0);Ze(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return xe(t)&&r.set(t,ts),ts;if(re(s))for(let u=0;u<s.length;u++){const h=Un(s[u]);tg(h)&&(o[h]=Be)}else if(s)for(const u in s){const h=Un(u);if(tg(h)){const d=s[u],f=o[h]=re(d)||_e(d)?{type:d}:Ze({},d);if(f){const _=ig(Boolean,f.type),g=ig(String,f.type);f[0]=_>-1,f[1]=g<0||_<g,(_>-1||Oe(f,"default"))&&a.push(h)}}}const l=[o,a];return xe(t)&&r.set(t,l),l}function tg(t){return t[0]!=="$"}function ng(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function rg(t,e){return ng(t)===ng(e)}function ig(t,e){return re(e)?e.findIndex(n=>rg(n,t)):_e(e)&&rg(e,t)?0:-1}const SE=t=>t[0]==="_"||t==="$stable",wf=t=>re(t)?t.map(Cn):[Cn(t)],jO=(t,e,n)=>{if(e._n)return e;const r=Vt((...i)=>wf(e(...i)),n);return r._c=!1,r},PE=(t,e,n)=>{const r=t._ctx;for(const i in t){if(SE(i))continue;const s=t[i];if(_e(s))e[i]=jO(i,s,r);else if(s!=null){const o=wf(s);e[i]=()=>o}}},OE=(t,e)=>{const n=wf(e);t.slots.default=()=>n},HO=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ae(e),Vc(e,"_",n)):PE(e,t.slots={})}else t.slots={},e&&OE(t,e);Vc(t.slots,$l,1)},qO=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ze(i,e),!n&&a===1&&delete i._):(s=!e.$stable,PE(e,i)),o=e}else e&&(OE(t,e),o={default:1});if(s)for(const a in i)!SE(a)&&!(a in o)&&delete i[a]};function Wh(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>Wh(d,e&&(re(e)?e[f]:e),n,r,i));return}if(Io(r)&&!i)return;const s=r.shapeFlag&4?Ul(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(et(l)?(u[l]=null,Oe(h,l)&&(h[l]=null)):De(l)&&(l.value=null)),_e(c))Nr(c,a,12,[o,u]);else{const d=et(c),f=De(c);if(d||f){const _=()=>{if(t.f){const g=d?Oe(h,c)?h[c]:u[c]:c.value;i?re(g)&&cf(g,s):re(g)?g.includes(s)||g.push(s):d?(u[c]=[s],Oe(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Oe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Lt(_,n)):_()}}}const Lt=mO;function WO(t){return KO(t)}function KO(t,e){const n=Vh();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=_n,insertStaticContent:_}=t,g=(p,m,v,I=null,C=null,S=null,q=!1,M=null,$=!!m.dynamicChildren)=>{if(p===m)return;p&&!ai(p,m)&&(I=w(p),ye(p,C,S,!0),p=null),m.patchFlag===-2&&($=!1,m.dynamicChildren=null);const{type:O,ref:te,shapeFlag:G}=m;switch(O){case xl:y(p,m,v,I);break;case sn:T(p,m,v,I);break;case Qu:p==null&&R(m,v,I,q);break;case Je:B(p,m,v,I,C,S,q,M,$);break;default:G&1?F(p,m,v,I,C,S,q,M,$):G&6?ee(p,m,v,I,C,S,q,M,$):(G&64||G&128)&&O.process(p,m,v,I,C,S,q,M,$,U)}te!=null&&C&&Wh(te,p&&p.ref,S,m||p,!m)},y=(p,m,v,I)=>{if(p==null)r(m.el=a(m.children),v,I);else{const C=m.el=p.el;m.children!==p.children&&l(C,m.children)}},T=(p,m,v,I)=>{p==null?r(m.el=c(m.children||""),v,I):m.el=p.el},R=(p,m,v,I)=>{[p.el,p.anchor]=_(p.children,m,v,I,p.el,p.anchor)},A=({el:p,anchor:m},v,I)=>{let C;for(;p&&p!==m;)C=d(p),r(p,v,I),p=C;r(m,v,I)},E=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),i(p),p=v;i(m)},F=(p,m,v,I,C,S,q,M,$)=>{q=q||m.type==="svg",p==null?z(m,v,I,C,S,q,M,$):L(p,m,C,S,q,M,$)},z=(p,m,v,I,C,S,q,M)=>{let $,O;const{type:te,props:G,shapeFlag:J,transition:ue,dirs:Ee}=p;if($=p.el=o(p.type,S,G&&G.is,G),J&8?u($,p.children):J&16&&D(p.children,$,null,I,C,S&&te!=="foreignObject",q,M),Ee&&ei(p,null,I,"created"),Z($,p,p.scopeId,q,I),G){for(const Ne in G)Ne!=="value"&&!fc(Ne)&&s($,Ne,null,G[Ne],S,p.children,I,C,Ye);"value"in G&&s($,"value",null,G.value),(O=G.onVnodeBeforeMount)&&bn(O,I,p)}Ee&&ei(p,null,I,"beforeMount");const Le=(!C||C&&!C.pendingBranch)&&ue&&!ue.persisted;Le&&ue.beforeEnter($),r($,m,v),((O=G&&G.onVnodeMounted)||Le||Ee)&&Lt(()=>{O&&bn(O,I,p),Le&&ue.enter($),Ee&&ei(p,null,I,"mounted")},C)},Z=(p,m,v,I,C)=>{if(v&&f(p,v),I)for(let S=0;S<I.length;S++)f(p,I[S]);if(C){let S=C.subTree;if(m===S){const q=C.vnode;Z(p,q,q.scopeId,q.slotScopeIds,C.parent)}}},D=(p,m,v,I,C,S,q,M,$=0)=>{for(let O=$;O<p.length;O++){const te=p[O]=M?Ir(p[O]):Cn(p[O]);g(null,te,m,v,I,C,S,q,M)}},L=(p,m,v,I,C,S,q)=>{const M=m.el=p.el;let{patchFlag:$,dynamicChildren:O,dirs:te}=m;$|=p.patchFlag&16;const G=p.props||Be,J=m.props||Be;let ue;v&&ti(v,!1),(ue=J.onVnodeBeforeUpdate)&&bn(ue,v,m,p),te&&ei(m,p,v,"beforeUpdate"),v&&ti(v,!0);const Ee=C&&m.type!=="foreignObject";if(O?W(p.dynamicChildren,O,M,v,I,Ee,S):q||be(p,m,M,null,v,I,Ee,S,!1),$>0){if($&16)he(M,m,G,J,v,I,C);else if($&2&&G.class!==J.class&&s(M,"class",null,J.class,C),$&4&&s(M,"style",G.style,J.style,C),$&8){const Le=m.dynamicProps;for(let Ne=0;Ne<Le.length;Ne++){const tt=Le[Ne],hn=G[tt],$i=J[tt];($i!==hn||tt==="value")&&s(M,tt,hn,$i,C,p.children,v,I,Ye)}}$&1&&p.children!==m.children&&u(M,m.children)}else!q&&O==null&&he(M,m,G,J,v,I,C);((ue=J.onVnodeUpdated)||te)&&Lt(()=>{ue&&bn(ue,v,m,p),te&&ei(m,p,v,"updated")},I)},W=(p,m,v,I,C,S,q)=>{for(let M=0;M<m.length;M++){const $=p[M],O=m[M],te=$.el&&($.type===Je||!ai($,O)||$.shapeFlag&70)?h($.el):v;g($,O,te,null,I,C,S,q,!0)}},he=(p,m,v,I,C,S,q)=>{if(v!==I){if(v!==Be)for(const M in v)!fc(M)&&!(M in I)&&s(p,M,v[M],null,q,m.children,C,S,Ye);for(const M in I){if(fc(M))continue;const $=I[M],O=v[M];$!==O&&M!=="value"&&s(p,M,O,$,q,m.children,C,S,Ye)}"value"in I&&s(p,"value",v.value,I.value)}},B=(p,m,v,I,C,S,q,M,$)=>{const O=m.el=p?p.el:a(""),te=m.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:J,slotScopeIds:ue}=m;ue&&(M=M?M.concat(ue):ue),p==null?(r(O,v,I),r(te,v,I),D(m.children,v,te,C,S,q,M,$)):G>0&&G&64&&J&&p.dynamicChildren?(W(p.dynamicChildren,J,v,C,S,q,M),(m.key!=null||C&&m===C.subTree)&&NE(p,m,!0)):be(p,m,v,te,C,S,q,M,$)},ee=(p,m,v,I,C,S,q,M,$)=>{m.slotScopeIds=M,p==null?m.shapeFlag&512?C.ctx.activate(m,v,I,q,$):Re(m,v,I,C,S,q,$):Ue(p,m,$)},Re=(p,m,v,I,C,S,q)=>{const M=p.component=eN(p,I,C);if(Ll(p)&&(M.ctx.renderer=U),tN(M),M.asyncDep){if(C&&C.registerDep(M,oe),!p.el){const $=M.subTree=Fe(sn);T(null,$,m,v)}return}oe(M,p,m,v,C,S,q)},Ue=(p,m,v)=>{const I=m.component=p.component;if(dO(p,m,v))if(I.asyncDep&&!I.asyncResolved){ge(I,m,v);return}else I.next=m,oO(I.update),I.update();else m.el=p.el,I.vnode=m},oe=(p,m,v,I,C,S,q)=>{const M=()=>{if(p.isMounted){let{next:te,bu:G,u:J,parent:ue,vnode:Ee}=p,Le=te,Ne;ti(p,!1),te?(te.el=Ee.el,ge(p,te,q)):te=Ee,G&&mc(G),(Ne=te.props&&te.props.onVnodeBeforeUpdate)&&bn(Ne,ue,te,Ee),ti(p,!0);const tt=zu(p),hn=p.subTree;p.subTree=tt,g(hn,tt,h(hn.el),w(hn),p,C,S),te.el=tt.el,Le===null&&fO(p,tt.el),J&&Lt(J,C),(Ne=te.props&&te.props.onVnodeUpdated)&&Lt(()=>bn(Ne,ue,te,Ee),C)}else{let te;const{el:G,props:J}=m,{bm:ue,m:Ee,parent:Le}=p,Ne=Io(m);if(ti(p,!1),ue&&mc(ue),!Ne&&(te=J&&J.onVnodeBeforeMount)&&bn(te,Le,m),ti(p,!0),G&&Se){const tt=()=>{p.subTree=zu(p),Se(G,p.subTree,p,C,null)};Ne?m.type.__asyncLoader().then(()=>!p.isUnmounted&&tt()):tt()}else{const tt=p.subTree=zu(p);g(null,tt,v,I,p,C,S),m.el=tt.el}if(Ee&&Lt(Ee,C),!Ne&&(te=J&&J.onVnodeMounted)){const tt=m;Lt(()=>bn(te,Le,tt),C)}(m.shapeFlag&256||Le&&Io(Le.vnode)&&Le.vnode.shapeFlag&256)&&p.a&&Lt(p.a,C),p.isMounted=!0,m=v=I=null}},$=p.effect=new hf(M,()=>vf(O),p.scope),O=p.update=()=>$.run();O.id=p.uid,ti(p,!0),O()},ge=(p,m,v)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,BO(p,m.props,I,v),qO(p,m.children,v),Fs(),zm(),Us()},be=(p,m,v,I,C,S,q,M,$=!1)=>{const O=p&&p.children,te=p?p.shapeFlag:0,G=m.children,{patchFlag:J,shapeFlag:ue}=m;if(J>0){if(J&128){Q(O,G,v,I,C,S,q,M,$);return}else if(J&256){lt(O,G,v,I,C,S,q,M,$);return}}ue&8?(te&16&&Ye(O,C,S),G!==O&&u(v,G)):te&16?ue&16?Q(O,G,v,I,C,S,q,M,$):Ye(O,C,S,!0):(te&8&&u(v,""),ue&16&&D(G,v,I,C,S,q,M,$))},lt=(p,m,v,I,C,S,q,M,$)=>{p=p||ts,m=m||ts;const O=p.length,te=m.length,G=Math.min(O,te);let J;for(J=0;J<G;J++){const ue=m[J]=$?Ir(m[J]):Cn(m[J]);g(p[J],ue,v,null,C,S,q,M,$)}O>te?Ye(p,C,S,!0,!1,G):D(m,v,I,C,S,q,M,$,G)},Q=(p,m,v,I,C,S,q,M,$)=>{let O=0;const te=m.length;let G=p.length-1,J=te-1;for(;O<=G&&O<=J;){const ue=p[O],Ee=m[O]=$?Ir(m[O]):Cn(m[O]);if(ai(ue,Ee))g(ue,Ee,v,null,C,S,q,M,$);else break;O++}for(;O<=G&&O<=J;){const ue=p[G],Ee=m[J]=$?Ir(m[J]):Cn(m[J]);if(ai(ue,Ee))g(ue,Ee,v,null,C,S,q,M,$);else break;G--,J--}if(O>G){if(O<=J){const ue=J+1,Ee=ue<te?m[ue].el:I;for(;O<=J;)g(null,m[O]=$?Ir(m[O]):Cn(m[O]),v,Ee,C,S,q,M,$),O++}}else if(O>J)for(;O<=G;)ye(p[O],C,S,!0),O++;else{const ue=O,Ee=O,Le=new Map;for(O=Ee;O<=J;O++){const Ut=m[O]=$?Ir(m[O]):Cn(m[O]);Ut.key!=null&&Le.set(Ut.key,O)}let Ne,tt=0;const hn=J-Ee+1;let $i=!1,Zp=0;const Zs=new Array(hn);for(O=0;O<hn;O++)Zs[O]=0;for(O=ue;O<=G;O++){const Ut=p[O];if(tt>=hn){ye(Ut,C,S,!0);continue}let An;if(Ut.key!=null)An=Le.get(Ut.key);else for(Ne=Ee;Ne<=J;Ne++)if(Zs[Ne-Ee]===0&&ai(Ut,m[Ne])){An=Ne;break}An===void 0?ye(Ut,C,S,!0):(Zs[An-Ee]=O+1,An>=Zp?Zp=An:$i=!0,g(Ut,m[An],v,null,C,S,q,M,$),tt++)}const em=$i?zO(Zs):ts;for(Ne=em.length-1,O=hn-1;O>=0;O--){const Ut=Ee+O,An=m[Ut],tm=Ut+1<te?m[Ut+1].el:I;Zs[O]===0?g(null,An,v,tm,C,S,q,M,$):$i&&(Ne<0||O!==em[Ne]?ne(An,v,tm,2):Ne--)}}},ne=(p,m,v,I,C=null)=>{const{el:S,type:q,transition:M,children:$,shapeFlag:O}=p;if(O&6){ne(p.component.subTree,m,v,I);return}if(O&128){p.suspense.move(m,v,I);return}if(O&64){q.move(p,m,v,U);return}if(q===Je){r(S,m,v);for(let G=0;G<$.length;G++)ne($[G],m,v,I);r(p.anchor,m,v);return}if(q===Qu){A(p,m,v);return}if(I!==2&&O&1&&M)if(I===0)M.beforeEnter(S),r(S,m,v),Lt(()=>M.enter(S),C);else{const{leave:G,delayLeave:J,afterLeave:ue}=M,Ee=()=>r(S,m,v),Le=()=>{G(S,()=>{Ee(),ue&&ue()})};J?J(S,Ee,Le):Le()}else r(S,m,v)},ye=(p,m,v,I=!1,C=!1)=>{const{type:S,props:q,ref:M,children:$,dynamicChildren:O,shapeFlag:te,patchFlag:G,dirs:J}=p;if(M!=null&&Wh(M,null,v,p,!0),te&256){m.ctx.deactivate(p);return}const ue=te&1&&J,Ee=!Io(p);let Le;if(Ee&&(Le=q&&q.onVnodeBeforeUnmount)&&bn(Le,m,p),te&6)St(p.component,v,I);else{if(te&128){p.suspense.unmount(v,I);return}ue&&ei(p,null,m,"beforeUnmount"),te&64?p.type.remove(p,m,v,C,U,I):O&&(S!==Je||G>0&&G&64)?Ye(O,m,v,!1,!0):(S===Je&&G&384||!C&&te&16)&&Ye($,m,v),I&&st(p)}(Ee&&(Le=q&&q.onVnodeUnmounted)||ue)&&Lt(()=>{Le&&bn(Le,m,p),ue&&ei(p,null,m,"unmounted")},v)},st=p=>{const{type:m,el:v,anchor:I,transition:C}=p;if(m===Je){ot(v,I);return}if(m===Qu){E(p);return}const S=()=>{i(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:q,delayLeave:M}=C,$=()=>q(v,S);M?M(p.el,S,$):$()}else S()},ot=(p,m)=>{let v;for(;p!==m;)v=d(p),i(p),p=v;i(m)},St=(p,m,v)=>{const{bum:I,scope:C,update:S,subTree:q,um:M}=p;I&&mc(I),C.stop(),S&&(S.active=!1,ye(q,p,m,v)),M&&Lt(M,m),Lt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ye=(p,m,v,I=!1,C=!1,S=0)=>{for(let q=S;q<p.length;q++)ye(p[q],m,v,I,C)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),H=(p,m,v)=>{p==null?m._vnode&&ye(m._vnode,null,null,!0):g(m._vnode||null,p,m,null,null,null,v),zm(),aE(),m._vnode=p},U={p:g,um:ye,m:ne,r:st,mt:Re,mc:D,pc:be,pbc:W,n:w,o:t};let X,Se;return e&&([X,Se]=e(U)),{render:H,hydrate:X,createApp:$O(H,X)}}function ti({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function NE(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Ir(i[s]),a.el=o.el),n||NE(o,a)),a.type===xl&&(a.el=o.el)}}function zO(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const GO=t=>t.__isTeleport,Je=Symbol.for("v-fgt"),xl=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),Qu=Symbol.for("v-stc"),Co=[];let pn=null;function ce(t=!1){Co.push(pn=t?null:[])}function YO(){Co.pop(),pn=Co[Co.length-1]||null}let Ko=1;function sg(t){Ko+=t}function kE(t){return t.dynamicChildren=Ko>0?pn||ts:null,YO(),Ko>0&&pn&&pn.push(t),t}function Te(t,e,n,r,i,s){return kE(k(t,e,n,r,i,s,!0))}function mn(t,e,n,r,i){return kE(Fe(t,e,n,r,i,!0))}function jc(t){return t?t.__v_isVNode===!0:!1}function ai(t,e){return t.type===e.type&&t.key===e.key}const $l="__vInternal",DE=({key:t})=>t??null,_c=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||De(t)||_e(t)?{i:ht,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,i=null,s=t===Je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&DE(e),ref:e&&_c(e),scopeId:Dl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ht};return a?(Af(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Ko>0&&!o&&pn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&pn.push(c),c}const Fe=QO;function QO(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===TE)&&(t=sn),jc(t)){const a=Ur(t,e,!0);return n&&Af(a,n),Ko>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(t)]=a:pn.push(a)),a.patchFlag|=-2,a}if(oN(t)&&(t=t.__vccOpts),e){e=XO(e);let{class:a,style:c}=e;a&&!et(a)&&(e.class=$r(a)),xe(c)&&(Zy(c)&&!re(c)&&(c=Ze({},c)),e.style=jt(c))}const o=et(t)?1:pO(t)?128:GO(t)?64:xe(t)?4:_e(t)?2:0;return k(t,e,n,r,i,o,s,!0)}function XO(t){return t?Zy(t)||$l in t?Ze({},t):t:null}function Ur(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Fl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&DE(a),ref:e&&e.ref?n&&i?re(i)?i.concat(_c(e)):[i,_c(e)]:_c(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function mt(t=" ",e=0){return Fe(xl,null,t,e)}function Ot(t="",e=!1){return e?(ce(),mn(sn,null,t)):Fe(sn,null,t)}function Cn(t){return t==null||typeof t=="boolean"?Fe(sn):re(t)?Fe(Je,null,t.slice()):typeof t=="object"?Ir(t):Fe(xl,null,String(t))}function Ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function Af(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Af(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!($l in e)?e._ctx=ht:i===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),r&64?(n=16,e=[mt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=$r([e.class,r.class]));else if(i==="style")e.style=jt([e.style,r.style]);else if(wl(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function bn(t,e,n,r=null){rn(t,e,7,[n,r])}const JO=bE();let ZO=0;function eN(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||JO,s={uid:ZO++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $y(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:RE(r,i),emitsOptions:lE(r,i),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=lO.bind(null,s),t.ce&&t.ce(s),s}let at=null;const bf=()=>at||ht;let Cf,Bi,og="__VUE_INSTANCE_SETTERS__";(Bi=Vh()[og])||(Bi=Vh()[og]=[]),Bi.push(t=>at=t),Cf=t=>{Bi.length>1?Bi.forEach(e=>e(t)):Bi[0](t)};const ys=t=>{Cf(t),t.scope.on()},yi=()=>{at&&at.scope.off(),Cf(null)};function LE(t){return t.vnode.shapeFlag&4}let zo=!1;function tN(t,e=!1){zo=e;const{props:n,children:r}=t.vnode,i=LE(t);UO(t,n,i,e),HO(t,r);const s=i?nN(t,e):void 0;return zo=!1,s}function nN(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pl(new Proxy(t.ctx,NO));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?iN(t):null;ys(t),Fs();const s=Nr(r,t,0,[t.props,i]);if(Us(),yi(),Dy(s)){if(s.then(yi,yi),e)return s.then(o=>{ag(t,o,e)}).catch(o=>{Ol(o,t,0)});t.asyncDep=s}else ag(t,s,e)}else ME(t,e)}function ag(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=rE(e)),ME(t,n)}let cg;function ME(t,e,n){const r=t.type;if(!t.render){if(!e&&cg&&!r.render){const i=r.template||If(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ze(Ze({isCustomElement:s,delimiters:a},o),c);r.render=cg(i,l)}}t.render=r.render||_n}ys(t),Fs(),kO(t),Us(),yi()}function rN(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}}))}function iN(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rN(t)},slots:t.slots,emit:t.emit,expose:e}}function Ul(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rE(Pl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bo)return bo[n](t)},has(e,n){return n in e||n in bo}}))}function sN(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function oN(t){return _e(t)&&"__vccOpts"in t}const en=(t,e)=>rO(t,e,zo);function Rf(t,e,n){const r=arguments.length;return r===2?xe(e)&&!re(e)?jc(e)?Fe(t,null,[e]):Fe(t,e):Fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jc(n)&&(n=[n]),Fe(t,e,n))}const aN=Symbol.for("v-scx"),cN=()=>zt(aN),lN="3.3.4",uN="http://www.w3.org/2000/svg",ci=typeof document<"u"?document:null,lg=ci&&ci.createElement("template"),hN={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?ci.createElementNS(uN,t):ci.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>ci.createTextNode(t),createComment:t=>ci.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ci.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{lg.innerHTML=r?`<svg>${t}</svg>`:t;const a=lg.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dN(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fN(t,e,n){const r=t.style,i=et(n);if(n&&!i){if(e&&!et(e))for(const s in e)n[s]==null&&Kh(r,s,"");for(const s in n)Kh(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const ug=/\s*!important$/;function Kh(t,e,n){if(re(n))n.forEach(r=>Kh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pN(t,e);ug.test(n)?t.setProperty($s(r),n.replace(ug,""),"important"):t[r]=n}}const hg=["Webkit","Moz","ms"],Xu={};function pN(t,e){const n=Xu[e];if(n)return n;let r=Un(e);if(r!=="filter"&&r in t)return Xu[e]=r;r=Cl(r);for(let i=0;i<hg.length;i++){const s=hg[i]+r;if(s in t)return Xu[e]=s}return e}const dg="http://www.w3.org/1999/xlink";function mN(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dg,e.slice(6,e.length)):t.setAttributeNS(dg,e,n);else{const s=_P(e);n==null||s&&!Vy(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function gN(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vy(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function li(t,e,n,r){t.addEventListener(e,n,r)}function _N(t,e,n,r){t.removeEventListener(e,n,r)}function vN(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=yN(e);if(r){const l=s[e]=IN(r,i);li(t,a,l,c)}else o&&(_N(t,a,o,c),s[e]=void 0)}}const fg=/(?:Once|Passive|Capture)$/;function yN(t){let e;if(fg.test(t)){e={};let r;for(;r=t.match(fg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$s(t.slice(2)),e]}let Ju=0;const EN=Promise.resolve(),TN=()=>Ju||(EN.then(()=>Ju=0),Ju=Date.now());function IN(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rn(wN(r,n.value),e,5,[r])};return n.value=t,n.attached=TN(),n}function wN(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const pg=/^on[a-z]/,AN=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?dN(t,r,i):e==="style"?fN(t,n,r):wl(e)?af(e)||vN(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bN(t,e,r,i))?gN(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mN(t,e,r,i))};function bN(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&pg.test(e)&&_e(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||pg.test(e)&&et(n)?!1:e in t}const gr="transition",no="animation",is=(t,{slots:e})=>Rf(yO,xE(t),e);is.displayName="Transition";const VE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},CN=is.props=Ze({},pE,VE),ni=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},mg=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function xE(t){const e={};for(const B in t)B in VE||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,_=RN(i),g=_&&_[0],y=_&&_[1],{onBeforeEnter:T,onEnter:R,onEnterCancelled:A,onLeave:E,onLeaveCancelled:F,onBeforeAppear:z=T,onAppear:Z=R,onAppearCancelled:D=A}=e,L=(B,ee,Re)=>{Er(B,ee?u:a),Er(B,ee?l:o),Re&&Re()},W=(B,ee)=>{B._isLeaving=!1,Er(B,h),Er(B,f),Er(B,d),ee&&ee()},he=B=>(ee,Re)=>{const Ue=B?Z:R,oe=()=>L(ee,B,Re);ni(Ue,[ee,oe]),gg(()=>{Er(ee,B?c:s),Hn(ee,B?u:a),mg(Ue)||_g(ee,r,g,oe)})};return Ze(e,{onBeforeEnter(B){ni(T,[B]),Hn(B,s),Hn(B,o)},onBeforeAppear(B){ni(z,[B]),Hn(B,c),Hn(B,l)},onEnter:he(!1),onAppear:he(!0),onLeave(B,ee){B._isLeaving=!0;const Re=()=>W(B,ee);Hn(B,h),FE(),Hn(B,d),gg(()=>{B._isLeaving&&(Er(B,h),Hn(B,f),mg(E)||_g(B,r,y,Re))}),ni(E,[B,Re])},onEnterCancelled(B){L(B,!1),ni(A,[B])},onAppearCancelled(B){L(B,!0),ni(D,[B])},onLeaveCancelled(B){W(B),ni(F,[B])}})}function RN(t){if(t==null)return null;if(xe(t))return[Zu(t.enter),Zu(t.leave)];{const e=Zu(t);return[e,e]}}function Zu(t){return hP(t)}function Hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Er(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function gg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let SN=0;function _g(t,e,n,r){const i=t._endId=++SN,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=$E(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),s()},d=f=>{f.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function $E(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),i=r(`${gr}Delay`),s=r(`${gr}Duration`),o=vg(i,s),a=r(`${no}Delay`),c=r(`${no}Duration`),l=vg(a,c);let u=null,h=0,d=0;e===gr?o>0&&(u=gr,h=o,d=s.length):e===no?l>0&&(u=no,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?gr:no:null,d=u?u===gr?s.length:c.length:0);const f=u===gr&&/\b(transform|all)(,|$)/.test(r(`${gr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function vg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yg(n)+yg(t[r])))}function yg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function FE(){return document.body.offsetHeight}const UE=new WeakMap,BE=new WeakMap,jE={name:"TransitionGroup",props:Ze({},CN,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=bf(),r=fE();let i,s;return vE(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!DN(i[0].el,n.vnode.el,o))return;i.forEach(ON),i.forEach(NN);const a=i.filter(kN);FE(),a.forEach(c=>{const l=c.el,u=l.style;Hn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Er(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=Ae(t),a=xE(o);let c=o.tag||Je;i=s,s=e.default?Ef(e.default()):[];for(let l=0;l<s.length;l++){const u=s[l];u.key!=null&&qo(u,Ho(u,a,r,n))}if(i)for(let l=0;l<i.length;l++){const u=i[l];qo(u,Ho(u,a,r,n)),UE.set(u,u.el.getBoundingClientRect())}return Fe(c,null,s)}}},PN=t=>delete t.mode;jE.props;const zh=jE;function ON(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function NN(t){BE.set(t,t.el.getBoundingClientRect())}function kN(t){const e=UE.get(t),n=BE.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function DN(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=$E(r);return i.removeChild(r),s}const Hc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>mc(e,n):e};function LN(t){t.target.composing=!0}function Eg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ji={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Hc(i);const s=r||i.props&&i.props.type==="number";li(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=xc(a)),t._assign(a)}),n&&li(t,"change",()=>{t.value=t.value.trim()}),e||(li(t,"compositionstart",LN),li(t,"compositionend",Eg),li(t,"change",Eg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Hc(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&xc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},MN={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Al(e);li(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xc(qc(o)):qc(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=Hc(r)},mounted(t,{value:e}){Tg(t,e)},beforeUpdate(t,e,n){t._assign=Hc(n)},updated(t,{value:e}){Tg(t,e)}};function Tg(t,e){const n=t.multiple;if(!(n&&!re(e)&&!Al(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=qc(s);if(n)re(e)?s.selected=yP(e,o)>-1:s.selected=e.has(o);else if(Rl(qc(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qc(t){return"_value"in t?t._value:t.value}const VN=["ctrl","shift","alt","meta"],xN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VN.some(n=>t[`${n}Key`]&&!e.includes(n))},vc=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=xN[e[i]];if(s&&s(n,e))return}return t(n,...r)},$N=Ze({patchProp:AN},hN);let Ig;function FN(){return Ig||(Ig=WO($N))}const HE=(...t)=>{const e=FN().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=UN(r);if(!i)return;const s=e._component;!_e(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function UN(t){return et(t)?document.querySelector(t):t}var BN=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let qE;const Bl=t=>qE=t,WE=Symbol();function Gh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ro;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ro||(Ro={}));function jN(){const t=Fy(!0),e=t.run(()=>Xe({}));let n=[],r=[];const i=Pl({install(s){Bl(i),i._a=s,s.provide(WE,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!BN?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const KE=()=>{};function wg(t,e,n,r=KE){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Uy()&&TP(i),i}function Hi(t,...e){t.slice().forEach(n=>{n(...e)})}const HN=t=>t();function Yh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Gh(i)&&Gh(r)&&t.hasOwnProperty(n)&&!De(r)&&!Xn(r)?t[n]=Yh(i,r):t[n]=r}return t}const qN=Symbol();function WN(t){return!Gh(t)||!t.hasOwnProperty(qN)}const{assign:Tr}=Object;function KN(t){return!!(De(t)&&t.effect)}function zN(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=JP(n.state.value[t]);return Tr(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=Pl(en(()=>{Bl(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=zE(t,l,e,n,r,!0),c}function zE(t,e,n={},r,i,s){let o;const a=Tr({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const _=r.state.value[t];!s&&!_&&(r.state.value[t]={}),Xe({});let g;function y(D){let L;l=u=!1,typeof D=="function"?(D(r.state.value[t]),L={type:Ro.patchFunction,storeId:t,events:f}):(Yh(r.state.value[t],D),L={type:Ro.patchObject,payload:D,storeId:t,events:f});const W=g=Symbol();Nl().then(()=>{g===W&&(l=!0)}),u=!0,Hi(h,L,r.state.value[t])}const T=s?function(){const{state:L}=n,W=L?L():{};this.$patch(he=>{Tr(he,W)})}:KE;function R(){o.stop(),h=[],d=[],r._s.delete(t)}function A(D,L){return function(){Bl(r);const W=Array.from(arguments),he=[],B=[];function ee(oe){he.push(oe)}function Re(oe){B.push(oe)}Hi(d,{args:W,name:D,store:F,after:ee,onError:Re});let Ue;try{Ue=L.apply(this&&this.$id===t?this:F,W)}catch(oe){throw Hi(B,oe),oe}return Ue instanceof Promise?Ue.then(oe=>(Hi(he,oe),oe)).catch(oe=>(Hi(B,oe),Promise.reject(oe))):(Hi(he,Ue),Ue)}}const E={_p:r,$id:t,$onAction:wg.bind(null,d),$patch:y,$reset:T,$subscribe(D,L={}){const W=wg(h,D,L.detached,()=>he()),he=o.run(()=>To(()=>r.state.value[t],B=>{(L.flush==="sync"?u:l)&&D({storeId:t,type:Ro.direct,events:f},B)},Tr({},c,L)));return W},$dispose:R},F=ya(E);r._s.set(t,F);const z=r._a&&r._a.runWithContext||HN,Z=r._e.run(()=>(o=Fy(),z(()=>o.run(e))));for(const D in Z){const L=Z[D];if(De(L)&&!KN(L)||Xn(L))s||(_&&WN(L)&&(De(L)?L.value=_[D]:Yh(L,_[D])),r.state.value[t][D]=L);else if(typeof L=="function"){const W=A(D,L);Z[D]=W,a.actions[D]=L}}return Tr(F,Z),Tr(Ae(F),Z),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:D=>{y(L=>{Tr(L,D)})}}),r._p.forEach(D=>{Tr(F,o.run(()=>D({store:F,app:r._a,pinia:r,options:a})))}),_&&s&&n.hydrate&&n.hydrate(F.$state,_),l=!0,u=!0,F}function GN(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const l=FO();return a=a||(l?zt(WE,null):null),a&&Bl(a),a=qE,a._s.has(r)||(s?zE(r,e,i,a):zN(r,i,a)),a._s.get(r)}return o.$id=r,o}function YN(t){{t=Ae(t);const e={};for(const n in t){const r=t[n];(De(r)||Xn(r))&&(e[n]=tO(t,n))}return e}}const QN="/budget-viteTS/logo.png";/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gi=typeof window<"u";function XN(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Me=Object.assign;function eh(t,e){const n={};for(const r in e){const i=e[r];n[r]=yn(i)?i.map(t):t(i)}return n}const So=()=>{},yn=Array.isArray,JN=/\/$/,ZN=t=>t.replace(JN,"");function th(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=r1(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function e1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ag(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function t1(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Es(e.matched[r],n.matched[i])&&GE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function GE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!n1(t[n],e[n]))return!1;return!0}function n1(t,e){return yn(t)?bg(t,e):yn(e)?bg(e,t):t===e}function bg(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function r1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Go;(function(t){t.pop="pop",t.push="push"})(Go||(Go={}));var Po;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Po||(Po={}));function i1(t){if(!t)if(Gi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZN(t)}const s1=/^[^#]+#/;function o1(t,e){return t.replace(s1,"#")+e}function a1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jl=()=>({left:window.pageXOffset,top:window.pageYOffset});function c1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=a1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cg(t,e){return(history.state?history.state.position-e:-1)+t}const Qh=new Map;function l1(t,e){Qh.set(t,e)}function u1(t){const e=Qh.get(t);return Qh.delete(t),e}let h1=()=>location.protocol+"//"+location.host;function YE(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ag(c,"")}return Ag(n,t)+r+i}function d1(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=YE(t,location),_=n.value,g=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===_){o=null;return}y=g?d.position-g.position:0}else r(f);i.forEach(T=>{T(n.value,_,{delta:y,type:Go.pop,direction:y?y>0?Po.forward:Po.back:Po.unknown})})};function c(){o=n.value}function l(d){i.push(d);const f=()=>{const _=i.indexOf(d);_>-1&&i.splice(_,1)};return s.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Me({},d.state,{scroll:jl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Rg(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?jl():null}}function f1(t){const{history:e,location:n}=window,r={value:YE(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:h1()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Me({},e.state,Rg(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Me({},i.value,e.state,{forward:c,scroll:jl()});s(u.current,u,!0);const h=Me({},Rg(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function p1(t){t=i1(t);const e=f1(t),n=d1(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Me({location:"",base:t,go:r,createHref:o1.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function m1(t){return typeof t=="string"||t&&typeof t=="object"}function QE(t){return typeof t=="string"||typeof t=="symbol"}const _r={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},XE=Symbol("");var Sg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sg||(Sg={}));function Ts(t,e){return Me(new Error,{type:t,[XE]:!0},e)}function jn(t,e){return t instanceof Error&&XE in t&&(e==null||!!(t.type&e))}const Pg="[^/]+?",g1={sensitive:!1,strict:!1,start:!0,end:!0},_1=/[.+*?^${}()[\]/\\]/g;function v1(t,e){const n=Me({},g1,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(_1,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:g,optional:y,regexp:T}=d;s.push({name:_,repeatable:g,optional:y});const R=T||Pg;if(R!==Pg){f+=10;try{new RegExp(`(${R})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+E.message)}}let A=g?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(A=y&&l.length<2?`(?:/${A})`:"/"+A),y&&(A+="?"),i+=A,f+=20,y&&(f+=-8),g&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",_=s[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:g,optional:y}=f,T=_ in l?l[_]:"";if(yn(T)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=yn(T)?T.join("/"):T;if(!R)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function y1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function E1(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=y1(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Og(r))return 1;if(Og(i))return-1}return i.length-r.length}function Og(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const T1={type:0,value:""},I1=/[a-zA-Z0-9_]/;function w1(t){if(!t)return[[]];if(t==="/")return[[T1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:I1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function A1(t,e,n){const r=v1(w1(t.path),n),i=Me(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function b1(t,e){const n=[],r=new Map;e=Dg({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,_=C1(u);_.aliasOf=d&&d.record;const g=Dg(e,u),y=[_];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)y.push(Me({},_,{components:d?d.record.components:_.components,path:E,aliasOf:d?d.record:_}))}let T,R;for(const A of y){const{path:E}=A;if(h&&E[0]!=="/"){const F=h.record.path,z=F[F.length-1]==="/"?"":"/";A.path=h.record.path+(E&&z+E)}if(T=A1(A,h,g),d?d.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),f&&u.name&&!kg(T)&&o(u.name)),_.children){const F=_.children;for(let z=0;z<F.length;z++)s(F[z],T,d&&d.children[z])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return R?()=>{o(R)}:So}function o(u){if(QE(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&E1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!JE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!kg(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},_,g;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Ts(1,{location:u});g=d.record.name,f=Me(Ng(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Ng(u.params,d.keys.map(R=>R.name))),_=d.stringify(f)}else if("path"in u)_=u.path,d=n.find(R=>R.re.test(_)),d&&(f=d.parse(_),g=d.record.name);else{if(d=h.name?r.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw Ts(1,{location:u,currentLocation:h});g=d.record.name,f=Me({},h.params,u.params),_=d.stringify(f)}const y=[];let T=d;for(;T;)y.unshift(T.record),T=T.parent;return{name:g,path:_,params:f,matched:y,meta:S1(y)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ng(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function C1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:R1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function R1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function kg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function S1(t){return t.reduce((e,n)=>Me(e,n.meta),{})}function Dg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function JE(t,e){return e.children.some(n=>n===t||JE(t,n))}const ZE=/#/g,P1=/&/g,O1=/\//g,N1=/=/g,k1=/\?/g,eT=/\+/g,D1=/%5B/g,L1=/%5D/g,tT=/%5E/g,M1=/%60/g,nT=/%7B/g,V1=/%7C/g,rT=/%7D/g,x1=/%20/g;function Sf(t){return encodeURI(""+t).replace(V1,"|").replace(D1,"[").replace(L1,"]")}function $1(t){return Sf(t).replace(nT,"{").replace(rT,"}").replace(tT,"^")}function Xh(t){return Sf(t).replace(eT,"%2B").replace(x1,"+").replace(ZE,"%23").replace(P1,"%26").replace(M1,"`").replace(nT,"{").replace(rT,"}").replace(tT,"^")}function F1(t){return Xh(t).replace(N1,"%3D")}function U1(t){return Sf(t).replace(ZE,"%23").replace(k1,"%3F")}function B1(t){return t==null?"":U1(t).replace(O1,"%2F")}function Wc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function j1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(eT," "),o=s.indexOf("="),a=Wc(o<0?s:s.slice(0,o)),c=o<0?null:Wc(s.slice(o+1));if(a in e){let l=e[a];yn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lg(t){let e="";for(let n in t){const r=t[n];if(n=F1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(s=>s&&Xh(s)):[r&&Xh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function H1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const q1=Symbol(""),Mg=Symbol(""),Hl=Symbol(""),Pf=Symbol(""),Jh=Symbol("");function ro(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ts(4,{from:n,to:e})):h instanceof Error?a(h):m1(h)?a(Ts(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function nh(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(W1(a)){const l=(a.__vccOpts||a)[e];l&&i.push(wr(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=XN(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&wr(d,n,r,s,o)()}))}}return i}function W1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vg(t){const e=zt(Hl),n=zt(Pf),r=en(()=>e.resolve(le(t.to))),i=en(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Es.bind(null,u));if(d>-1)return d;const f=xg(c[l-2]);return l>1&&xg(u)===f&&h[h.length-1].path!==f?h.findIndex(Es.bind(null,c[l-2])):d}),s=en(()=>i.value>-1&&G1(n.params,r.value.params)),o=en(()=>i.value>-1&&i.value===n.matched.length-1&&GE(n.params,r.value.params));function a(c={}){return z1(c)?e[le(t.replace)?"replace":"push"](le(t.to)).catch(So):Promise.resolve()}return{route:r,href:en(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const K1=Jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vg,setup(t,{slots:e}){const n=ya(Vg(t)),{options:r}=zt(Hl),i=en(()=>({[$g(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$g(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Rf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Of=K1;function z1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function G1(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!yn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function xg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $g=(t,e,n)=>t??e??n,Y1=Jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(Jh),i=en(()=>t.route||r.value),s=zt(Mg,0),o=en(()=>{let l=le(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=en(()=>i.value.matched[o.value]);gc(Mg,en(()=>o.value+1)),gc(q1,a),gc(Jh,i);const c=Xe();return To(()=>[c.value,a.value,t.name],([l,u,h],[d,f,_])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Es(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Fg(n.default,{Component:d,route:l});const f=h.props[u],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,y=Rf(d,Me({},_,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Fg(n.default,{Component:y,route:l})||y}}});function Fg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iT=Y1;function Q1(t){const e=b1(t.routes,t),n=t.parseQuery||j1,r=t.stringifyQuery||Lg,i=t.history,s=ro(),o=ro(),a=ro(),c=YP(_r);let l=_r;Gi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=eh.bind(null,w=>""+w),h=eh.bind(null,B1),d=eh.bind(null,Wc);function f(w,H){let U,X;return QE(w)?(U=e.getRecordMatcher(w),X=H):X=w,e.addRoute(X,U)}function _(w){const H=e.getRecordMatcher(w);H&&e.removeRoute(H)}function g(){return e.getRoutes().map(w=>w.record)}function y(w){return!!e.getRecordMatcher(w)}function T(w,H){if(H=Me({},H||c.value),typeof w=="string"){const v=th(n,w,H.path),I=e.resolve({path:v.path},H),C=i.createHref(v.fullPath);return Me(v,I,{params:d(I.params),hash:Wc(v.hash),redirectedFrom:void 0,href:C})}let U;if("path"in w)U=Me({},w,{path:th(n,w.path,H.path).path});else{const v=Me({},w.params);for(const I in v)v[I]==null&&delete v[I];U=Me({},w,{params:h(v)}),H.params=h(H.params)}const X=e.resolve(U,H),Se=w.hash||"";X.params=u(d(X.params));const p=e1(r,Me({},w,{hash:$1(Se),path:X.path})),m=i.createHref(p);return Me({fullPath:p,hash:Se,query:r===Lg?H1(w.query):w.query||{}},X,{redirectedFrom:void 0,href:m})}function R(w){return typeof w=="string"?th(n,w,c.value.path):Me({},w)}function A(w,H){if(l!==w)return Ts(8,{from:H,to:w})}function E(w){return Z(w)}function F(w){return E(Me(R(w),{replace:!0}))}function z(w){const H=w.matched[w.matched.length-1];if(H&&H.redirect){const{redirect:U}=H;let X=typeof U=="function"?U(w):U;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=R(X):{path:X},X.params={}),Me({query:w.query,hash:w.hash,params:"path"in X?{}:w.params},X)}}function Z(w,H){const U=l=T(w),X=c.value,Se=w.state,p=w.force,m=w.replace===!0,v=z(U);if(v)return Z(Me(R(v),{state:typeof v=="object"?Me({},Se,v.state):Se,force:p,replace:m}),H||U);const I=U;I.redirectedFrom=H;let C;return!p&&t1(r,X,U)&&(C=Ts(16,{to:I,from:X}),ne(X,X,!0,!1)),(C?Promise.resolve(C):W(I,X)).catch(S=>jn(S)?jn(S,2)?S:Q(S):be(S,I,X)).then(S=>{if(S){if(jn(S,2))return Z(Me({replace:m},R(S.to),{state:typeof S.to=="object"?Me({},Se,S.to.state):Se,force:p}),H||I)}else S=B(I,X,!0,m,Se);return he(I,X,S),S})}function D(w,H){const U=A(w,H);return U?Promise.reject(U):Promise.resolve()}function L(w){const H=ot.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(w):w()}function W(w,H){let U;const[X,Se,p]=X1(w,H);U=nh(X.reverse(),"beforeRouteLeave",w,H);for(const v of X)v.leaveGuards.forEach(I=>{U.push(wr(I,w,H))});const m=D.bind(null,w,H);return U.push(m),Ye(U).then(()=>{U=[];for(const v of s.list())U.push(wr(v,w,H));return U.push(m),Ye(U)}).then(()=>{U=nh(Se,"beforeRouteUpdate",w,H);for(const v of Se)v.updateGuards.forEach(I=>{U.push(wr(I,w,H))});return U.push(m),Ye(U)}).then(()=>{U=[];for(const v of p)if(v.beforeEnter)if(yn(v.beforeEnter))for(const I of v.beforeEnter)U.push(wr(I,w,H));else U.push(wr(v.beforeEnter,w,H));return U.push(m),Ye(U)}).then(()=>(w.matched.forEach(v=>v.enterCallbacks={}),U=nh(p,"beforeRouteEnter",w,H),U.push(m),Ye(U))).then(()=>{U=[];for(const v of o.list())U.push(wr(v,w,H));return U.push(m),Ye(U)}).catch(v=>jn(v,8)?v:Promise.reject(v))}function he(w,H,U){a.list().forEach(X=>L(()=>X(w,H,U)))}function B(w,H,U,X,Se){const p=A(w,H);if(p)return p;const m=H===_r,v=Gi?history.state:{};U&&(X||m?i.replace(w.fullPath,Me({scroll:m&&v&&v.scroll},Se)):i.push(w.fullPath,Se)),c.value=w,ne(w,H,U,m),Q()}let ee;function Re(){ee||(ee=i.listen((w,H,U)=>{if(!St.listening)return;const X=T(w),Se=z(X);if(Se){Z(Me(Se,{replace:!0}),X).catch(So);return}l=X;const p=c.value;Gi&&l1(Cg(p.fullPath,U.delta),jl()),W(X,p).catch(m=>jn(m,12)?m:jn(m,2)?(Z(m.to,X).then(v=>{jn(v,20)&&!U.delta&&U.type===Go.pop&&i.go(-1,!1)}).catch(So),Promise.reject()):(U.delta&&i.go(-U.delta,!1),be(m,X,p))).then(m=>{m=m||B(X,p,!1),m&&(U.delta&&!jn(m,8)?i.go(-U.delta,!1):U.type===Go.pop&&jn(m,20)&&i.go(-1,!1)),he(X,p,m)}).catch(So)}))}let Ue=ro(),oe=ro(),ge;function be(w,H,U){Q(w);const X=oe.list();return X.length?X.forEach(Se=>Se(w,H,U)):console.error(w),Promise.reject(w)}function lt(){return ge&&c.value!==_r?Promise.resolve():new Promise((w,H)=>{Ue.add([w,H])})}function Q(w){return ge||(ge=!w,Re(),Ue.list().forEach(([H,U])=>w?U(w):H()),Ue.reset()),w}function ne(w,H,U,X){const{scrollBehavior:Se}=t;if(!Gi||!Se)return Promise.resolve();const p=!U&&u1(Cg(w.fullPath,0))||(X||!U)&&history.state&&history.state.scroll||null;return Nl().then(()=>Se(w,H,p)).then(m=>m&&c1(m)).catch(m=>be(m,w,H))}const ye=w=>i.go(w);let st;const ot=new Set,St={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,hasRoute:y,getRoutes:g,resolve:T,options:t,push:E,replace:F,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:lt,install(w){const H=this;w.component("RouterLink",Of),w.component("RouterView",iT),w.config.globalProperties.$router=H,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>le(c)}),Gi&&!st&&c.value===_r&&(st=!0,E(i.location).catch(Se=>{}));const U={};for(const Se in _r)Object.defineProperty(U,Se,{get:()=>c.value[Se],enumerable:!0});w.provide(Hl,H),w.provide(Pf,Xy(U)),w.provide(Jh,c);const X=w.unmount;ot.add(w),w.unmount=function(){ot.delete(w),ot.size<1&&(l=_r,ee&&ee(),ee=null,c.value=_r,st=!1,ge=!1),X()}}};function Ye(w){return w.reduce((H,U)=>H.then(()=>L(U)),Promise.resolve())}return St}function X1(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Es(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Es(l,c))||i.push(c))}return[n,r,i]}function sT(){return zt(Hl)}function QB(){return zt(Pf)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},J1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},aT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new Z1;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Z1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ek=function(t){const e=oT(t);return aT.encodeByteArray(e,!0)},Kc=function(t){return ek(t).replace(/\./g,"")},Nf=function(t){try{return aT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=()=>tk().__FIREBASE_DEFAULTS__,rk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ik=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nf(t[1]);return e&&JSON.parse(e)},kf=()=>{try{return nk()||rk()||ik()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cT=t=>{var e,n;return(n=(e=kf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sk=t=>{const e=cT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lT=()=>{var t;return(t=kf())===null||t===void 0?void 0:t.config},uT=t=>{var e;return(e=kf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Kc(JSON.stringify(n)),Kc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function dT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pT(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ck(){try{return typeof indexedDB=="object"}catch{return!1}}function lk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uk,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,r)}}function hk(t,e){return t.replace(dk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dk=/\{\$([^}]+)}/g;function fk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ug(s)&&Ug(o)){if(!zc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ug(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mT(t,e){const n=new pk(t,e);return n.subscribe.bind(n)}class pk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rh),i.error===void 0&&(i.error=rh),i.complete===void 0&&(i.complete=rh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ok;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vk(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_k(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _k(t){return t===ri?void 0:t}function vk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Ek={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Tk=we.INFO,Ik={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},wk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ik[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=Tk,this._logHandler=wk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Ak=(t,e)=>e.some(n=>t instanceof n);let Bg,jg;function bk(){return Bg||(Bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ck(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,Zh=new WeakMap,_T=new WeakMap,ih=new WeakMap,Df=new WeakMap;function Rk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gT.set(n,t)}).catch(()=>{}),Df.set(e,t),e}function Sk(t){if(Zh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zh.set(t,e)}let ed={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_T.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pk(t){ed=t(ed)}function Ok(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return _T.set(r,e.sort?e.sort():[e]),kr(r)}:Ck().includes(t)?function(...e){return t.apply(sh(this),e),kr(gT.get(this))}:function(...e){return kr(t.apply(sh(this),e))}}function Nk(t){return typeof t=="function"?Ok(t):(t instanceof IDBTransaction&&Sk(t),Ak(t,bk())?new Proxy(t,ed):t)}function kr(t){if(t instanceof IDBRequest)return Rk(t);if(ih.has(t))return ih.get(t);const e=Nk(t);return e!==t&&(ih.set(t,e),Df.set(e,t)),e}const sh=t=>Df.get(t);function kk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kr(o.result),c.oldVersion,c.newVersion,kr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Dk=["get","getKey","getAll","getAllKeys","count"],Lk=["put","add","delete","clear"],oh=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dk.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return oh.set(e,s),s}Pk(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const td="@firebase/app",qg="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new ql("@firebase/app"),xk="@firebase/app-compat",$k="@firebase/analytics-compat",Fk="@firebase/analytics",Uk="@firebase/app-check-compat",Bk="@firebase/app-check",jk="@firebase/auth",Hk="@firebase/auth-compat",qk="@firebase/database",Wk="@firebase/database-compat",Kk="@firebase/functions",zk="@firebase/functions-compat",Gk="@firebase/installations",Yk="@firebase/installations-compat",Qk="@firebase/messaging",Xk="@firebase/messaging-compat",Jk="@firebase/performance",Zk="@firebase/performance-compat",eD="@firebase/remote-config",tD="@firebase/remote-config-compat",nD="@firebase/storage",rD="@firebase/storage-compat",iD="@firebase/firestore",sD="@firebase/firestore-compat",oD="firebase",aD="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="[DEFAULT]",cD={[td]:"fire-core",[xk]:"fire-core-compat",[Fk]:"fire-analytics",[$k]:"fire-analytics-compat",[Bk]:"fire-app-check",[Uk]:"fire-app-check-compat",[jk]:"fire-auth",[Hk]:"fire-auth-compat",[qk]:"fire-rtdb",[Wk]:"fire-rtdb-compat",[Kk]:"fire-fn",[zk]:"fire-fn-compat",[Gk]:"fire-iid",[Yk]:"fire-iid-compat",[Qk]:"fire-fcm",[Xk]:"fire-fcm-compat",[Jk]:"fire-perf",[Zk]:"fire-perf-compat",[eD]:"fire-rc",[tD]:"fire-rc-compat",[nD]:"fire-gcs",[rD]:"fire-gcs-compat",[iD]:"fire-fst",[sD]:"fire-fst-compat","fire-js":"fire-js",[oD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Map,rd=new Map;function lD(t,e){try{t.container.addComponent(e)}catch(n){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(rd.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;rd.set(e,t);for(const n of Gc.values())lD(n,t);return!0}function Lf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dr=new Gr("app","Firebase",uD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=aD;function vT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dr.create("bad-app-name",{appName:String(i)});if(n||(n=lT()),!n)throw Dr.create("no-options");const s=Gc.get(i);if(s){if(zc(n,s.options)&&zc(r,s.config))return s;throw Dr.create("duplicate-app",{appName:i})}const o=new yk(i);for(const c of rd.values())o.addComponent(c);const a=new hD(n,r,o);return Gc.set(i,a),a}function yT(t=nd){const e=Gc.get(t);if(!e&&t===nd&&lT())return vT();if(!e)throw Dr.create("no-app",{appName:t});return e}function Dn(t,e,n){var r;let i=(r=cD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}Br(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="firebase-heartbeat-database",fD=1,Yo="firebase-heartbeat-store";let ah=null;function ET(){return ah||(ah=kk(dD,fD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yo)}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function pD(t){try{return await(await ET()).transaction(Yo).objectStore(Yo).get(TT(t))}catch(e){if(e instanceof un)wi.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(n.message)}}}async function Wg(t,e){try{const r=(await ET()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,TT(t)),await r.done}catch(n){if(n instanceof un)wi.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wi.warn(r.message)}}}function TT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=1024,gD=30*24*60*60*1e3;class _D{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kg(),{heartbeatsToSend:n,unsentEntries:r}=vD(this._heartbeatsCache.heartbeats),i=Kc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kg(){return new Date().toISOString().substring(0,10)}function vD(t,e=mD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ck()?lk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zg(t){return Kc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){Br(new rr("platform-logger",e=>new Mk(e),"PRIVATE")),Br(new rr("heartbeat",e=>new _D(e),"PRIVATE")),Dn(td,qg,t),Dn(td,qg,"esm2017"),Dn("fire-js","")}ED("");var TD="firebase",ID="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(TD,ID,"app");var wD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,Mf=Mf||{},pe=wD||self;function Wl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ea(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AD(t){return Object.prototype.hasOwnProperty.call(t,ch)&&t[ch]||(t[ch]=++bD)}var ch="closure_uid_"+(1e9*Math.random()>>>0),bD=0;function CD(t,e,n){return t.call.apply(t.bind,arguments)}function RD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=CD:At=RD,At.apply(null,arguments)}function ec(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ft(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Qr(){this.s=this.s,this.o=this.o}var SD=0;Qr.prototype.s=!1;Qr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SD!=0)&&AD(this)};Qr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const IT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var PD=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",()=>{},e),pe.removeEventListener("test",()=>{},e)}catch{}return t}();function Qo(t){return/^[\s\xa0]*$/.test(t)}function Kl(){var t=pe.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return Kl().indexOf(t)!=-1}function xf(t){return xf[" "](t),t}xf[" "]=function(){};function OD(t,e){var n=IL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ND=Sn("Opera"),Is=Sn("Trident")||Sn("MSIE"),wT=Sn("Edge"),id=wT||Is,AT=Sn("Gecko")&&!(Kl().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),kD=Kl().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function bT(){var t=pe.document;return t?t.documentMode:void 0}var sd;e:{var lh="",uh=function(){var t=Kl();if(AT)return/rv:([^\);]+)(\)|;)/.exec(t);if(wT)return/Edge\/([\d\.]+)/.exec(t);if(Is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kD)return/WebKit\/(\S+)/.exec(t);if(ND)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uh&&(lh=uh?uh[1]:""),Is){var hh=bT();if(hh!=null&&hh>parseFloat(lh)){sd=String(hh);break e}}sd=lh}var od;if(pe.document&&Is){var Yg=bT();od=Yg||parseInt(sd,10)||void 0}else od=void 0;var DD=od;function Xo(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(AT){e:{try{xf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:LD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xo.$.h.call(this)}}ft(Xo,bt);var LD={2:"touch",3:"pen",4:"mouse"};Xo.prototype.h=function(){Xo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ta="closure_listenable_"+(1e6*Math.random()|0),MD=0;function VD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++MD,this.fa=this.ia=!1}function zl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $f(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function CT(t){const e={};for(const n in t)e[n]=t[n];return e}const Qg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function RT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Qg.length;s++)n=Qg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gl(t){this.src=t,this.g={},this.h=0}Gl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new VD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function ad(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=IT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ff="closure_lm_"+(1e6*Math.random()|0),dh={};function ST(t,e,n,r,i){if(r&&r.once)return OT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ST(t,e[s],n,r,i);return null}return n=jf(n),t&&t[Ta]?t.O(e,n,Ea(r)?!!r.capture:!!r,i):PT(t,e,n,!1,r,i)}function PT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ea(i)?!!i.capture:!!i,a=Bf(t);if(a||(t[Ff]=a=new Gl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=$D(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(kT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $D(){function t(n){return e.call(t.src,t.listener,n)}const e=FD;return t}function OT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)OT(t,e[s],n,r,i);return null}return n=jf(n),t&&t[Ta]?t.P(e,n,Ea(r)?!!r.capture:!!r,i):PT(t,e,n,!0,r,i)}function NT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)NT(t,e[s],n,r,i);else r=Ea(r)?!!r.capture:!!r,n=jf(n),t&&t[Ta]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cd(s,n,r,i),-1<n&&(zl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cd(e,n,r,i)),(n=-1<t?e[t]:null)&&Uf(n))}function Uf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ta])ad(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bf(e))?(ad(n,t),n.h==0&&(n.src=null,e[Ff]=null)):zl(t)}}}function kT(t){return t in dh?dh[t]:dh[t]="on"+t}function FD(t,e){if(t.fa)t=!0;else{e=new Xo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Uf(t),t=n.call(r,e)}return t}function Bf(t){return t=t[Ff],t instanceof Gl?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function jf(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function dt(){Qr.call(this),this.i=new Gl(this),this.S=this,this.J=null}ft(dt,Qr);dt.prototype[Ta]=!0;dt.prototype.removeEventListener=function(t,e,n,r){NT(this,t,e,n,r)};function _t(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var i=e;e=new bt(r,t),RT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=tc(o,r,!0,e)&&i}if(o=e.g=t,i=tc(o,r,!0,e)&&i,i=tc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=tc(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zl(n[r]);delete t.g[e],t.h--}}this.J=null};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function tc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ad(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hf=pe.JSON.stringify;class UD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function BD(){var t=qf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jD{constructor(){this.h=this.g=null}add(e,n){const r=DT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var DT=new UD(()=>new HD,t=>t.reset());class HD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function WD(t){pe.setTimeout(()=>{throw t},0)}let Jo,Zo=!1,qf=new jD,LT=()=>{const t=pe.Promise.resolve(void 0);Jo=()=>{t.then(KD)}};var KD=()=>{for(var t;t=BD();){try{t.h.call(t.g)}catch(n){WD(n)}var e=DT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zo=!1};function Yl(t,e){dt.call(this),this.h=t||1,this.g=e||pe,this.j=At(this.qb,this),this.l=Date.now()}ft(Yl,dt);j=Yl.prototype;j.ga=!1;j.T=null;j.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_t(this,"tick"),this.ga&&(Wf(this),this.start()))}};j.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}j.N=function(){Yl.$.N.call(this),Wf(this),delete this.g};function Kf(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function MT(t){t.g=Kf(()=>{t.g=null,t.i&&(t.i=!1,MT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zD extends Qr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:MT(this)}N(){super.N(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ea(t){Qr.call(this),this.h=t,this.g={}}ft(ea,Qr);var Xg=[];function VT(t,e,n,r){Array.isArray(n)||(n&&(Xg[0]=n.toString()),n=Xg);for(var i=0;i<n.length;i++){var s=ST(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function xT(t){$f(t.g,function(e,n){this.g.hasOwnProperty(n)&&Uf(e)},t),t.g={}}ea.prototype.N=function(){ea.$.N.call(this),xT(this)};ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ql(){this.g=!0}Ql.prototype.Ea=function(){this.g=!1};function GD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function YD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Zi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XD(t,n)+(r?" "+r:"")})}function QD(t,e){t.info(function(){return"TIMEOUT: "+e})}Ql.prototype.info=function(){};function XD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hf(n)}catch{return e}}var Pi={},Jg=null;function Xl(){return Jg=Jg||new dt}Pi.Ta="serverreachability";function $T(t){bt.call(this,Pi.Ta,t)}ft($T,bt);function ta(t){const e=Xl();_t(e,new $T(e))}Pi.STAT_EVENT="statevent";function FT(t,e){bt.call(this,Pi.STAT_EVENT,t),this.stat=e}ft(FT,bt);function Nt(t){const e=Xl();_t(e,new FT(e,t))}Pi.Ua="timingevent";function UT(t,e){bt.call(this,Pi.Ua,t),this.size=e}ft(UT,bt);function Ia(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var Jl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zf(){}zf.prototype.h=null;function Zg(t){return t.h||(t.h=t.i())}function jT(){}var wa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gf(){bt.call(this,"d")}ft(Gf,bt);function Yf(){bt.call(this,"c")}ft(Yf,bt);var ld;function Zl(){}ft(Zl,zf);Zl.prototype.g=function(){return new XMLHttpRequest};Zl.prototype.i=function(){return{}};ld=new Zl;function Aa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ea(this),this.P=JD,t=id?125:void 0,this.V=new Yl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new HT}function HT(){this.i=null,this.g="",this.h=!1}var JD=45e3,ud={},Yc={};j=Aa.prototype;j.setTimeout=function(t){this.P=t};function hd(t,e,n){t.L=1,t.v=tu(ir(e)),t.s=n,t.S=!0,qT(t,null)}function qT(t,e){t.G=Date.now(),ba(t),t.A=ir(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),JT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new HT,t.g=yI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zD(At(t.Pa,t,t.g),t.O)),VT(t.U,t.g,"readystatechange",t.nb),e=t.I?CT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ta(),GD(t.j,t.u,t.A,t.m,t.W,t.s)}j.nb=function(t){t=t.target;const e=this.M;e&&Pn(t)==3?e.l():this.Pa(t)};j.Pa=function(t){try{if(t==this.g)e:{const u=Pn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||id||this.g&&(this.h.h||this.g.ja()||r_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ta(3):ta(2)),eu(this);var n=this.g.da();this.ca=n;t:if(WT(this)){var r=r_(this.g);t="";var i=r.length,s=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),Oo(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YD(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qo(a)){var l=a;break t}}l=null}if(n=l)Zi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dd(this,n);else{this.i=!1,this.o=3,Nt(12),fi(this),Oo(this);break e}}this.S?(KT(this,u,o),id&&this.i&&u==3&&(VT(this.U,this.V,"tick",this.mb),this.V.start())):(Zi(this.j,this.m,o,null),dd(this,o)),u==4&&fi(this),this.i&&!this.J&&(u==4?mI(this.l,this):(this.i=!1,ba(this)))}else yL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Nt(12)):(this.o=0,Nt(13)),fi(this),Oo(this)}}}catch{}finally{}};function WT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function KT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ZD(t,n),i==Yc){e==4&&(t.o=4,Nt(14),r=!1),Zi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ud){t.o=4,Nt(15),Zi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Zi(t.j,t.m,i,null),dd(t,i);WT(t)&&i!=Yc&&i!=ud&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tp(e),e.M=!0,Nt(11))):(Zi(t.j,t.m,n,"[Invalid Chunked Response]"),fi(t),Oo(t))}j.mb=function(){if(this.g){var t=Pn(this.g),e=this.g.ja();this.C<e.length&&(eu(this),KT(this,t,e),this.i&&t!=4&&ba(this))}};function ZD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Yc:(n=Number(e.substring(n,r)),isNaN(n)?ud:(r+=1,r+n>e.length?Yc:(e=e.slice(r,r+n),t.C=r+n,e)))}j.cancel=function(){this.J=!0,fi(this)};function ba(t){t.Y=Date.now()+t.P,zT(t,t.P)}function zT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ia(At(t.lb,t),e)}function eu(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}j.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(QD(this.j,this.A),this.L!=2&&(ta(),Nt(17)),fi(this),this.o=2,Oo(this)):zT(this,this.Y-t)};function Oo(t){t.l.H==0||t.J||mI(t.l,t)}function fi(t){eu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wf(t.V),xT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function dd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fd(n.i,t))){if(!t.K&&fd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jc(n),su(n);else break e;ep(n),Nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ia(At(n.ib,n),6e3));if(1>=tI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else pi(n,11)}else if((t.K||n.g==t)&&Jc(n),!Qo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Qf(s,s.h),s.h=null))}if(r.F){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,He(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=vI(r,r.J?r.pa:null,r.Y),o.K){nI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(eu(a),ba(a)),r.g=o}else fI(r);0<n.j.length&&ou(n)}else l[0]!="stop"&&l[0]!="close"||pi(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?pi(n,7):Zf(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ta(4)}catch{}}function eL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function GT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tL(t),r=eL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var YT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ei){this.h=t.h,Qc(this,t.j),this.s=t.s,this.g=t.g,Xc(this,t.m),this.l=t.l;var e=t.i,n=new na;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),e_(this,n),this.o=t.o}else t&&(e=String(t).match(YT))?(this.h=!1,Qc(this,e[1]||"",!0),this.s=fo(e[2]||""),this.g=fo(e[3]||"",!0),Xc(this,e[4]),this.l=fo(e[5]||"",!0),e_(this,e[6]||"",!0),this.o=fo(e[7]||"")):(this.h=!1,this.i=new na(null,this.h))}Ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(po(e,t_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(po(e,t_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(po(n,n.charAt(0)=="/"?sL:iL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",po(n,aL)),t.join("")};function ir(t){return new Ei(t)}function Qc(t,e,n){t.j=n?fo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function e_(t,e,n){e instanceof na?(t.i=e,cL(t.i,t.h)):(n||(e=po(e,oL)),t.i=new na(e,t.h))}function He(t,e,n){t.i.set(e,n)}function tu(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function po(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var t_=/[#\/\?@]/g,iL=/[#\?:]/g,sL=/[#\?]/g,oL=/[#\?@]/g,aL=/#/g;function na(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xr(t){t.g||(t.g=new Map,t.h=0,t.i&&nL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=na.prototype;j.add=function(t,e){Xr(this),this.i=null,t=Bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function QT(t,e){Xr(t),e=Bs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function XT(t,e){return Xr(t),e=Bs(t,e),t.g.has(e)}j.forEach=function(t,e){Xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};j.ta=function(){Xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};j.Z=function(t){Xr(this);let e=[];if(typeof t=="string")XT(this,t)&&(e=e.concat(this.g.get(Bs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Xr(this),this.i=null,t=Bs(this,t),XT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function JT(t,e,n){QT(t,e),0<n.length&&(t.i=null,t.g.set(Bs(t,e),Vf(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cL(t,e){e&&!t.j&&(Xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(QT(this,r),JT(this,i,n))},t)),t.j=e}var lL=class{constructor(t,e){this.g=t,this.map=e}};function ZT(t){this.l=t||uL,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ka&&pe.g.Ka()&&pe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uL=10;function eI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tI(t){return t.h?1:t.g?t.g.size:0}function fd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qf(t,e){t.g?t.g.add(e):t.h=e}function nI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ZT.prototype.cancel=function(){if(this.i=rI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vf(t.i)}var hL=class{stringify(t){return pe.JSON.stringify(t,void 0)}parse(t){return pe.JSON.parse(t,void 0)}};function dL(){this.g=new hL}function fL(t,e,n){const r=n||"";try{GT(t,function(i,s){let o=i;Ea(i)&&(o=Hf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pL(t,e){const n=new Ql;if(pe.Image){const r=new Image;r.onload=ec(nc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ec(nc,n,r,"TestLoadImage: error",!1,e),r.onabort=ec(nc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ec(nc,n,r,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function nc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function nu(t){this.l=t.fc||null,this.j=t.ob||!1}ft(nu,zf);nu.prototype.g=function(){return new ru(this.l,this.j)};nu.prototype.i=function(t){return function(){return t}}({});function ru(t,e){dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(ru,dt);var Xf=0;j=ru.prototype;j.open=function(t,e){if(this.readyState!=Xf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ra(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||pe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ca(this)),this.readyState=Xf};j.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function iI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}j.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ca(this):ra(this),this.readyState==3&&iI(this)}};j.Za=function(t){this.g&&(this.response=this.responseText=t,Ca(this))};j.Ya=function(t){this.g&&(this.response=t,Ca(this))};j.ka=function(){this.g&&Ca(this)};function Ca(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ra(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ra(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mL=pe.JSON.parse;function Qe(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sI,this.L=this.M=!1}ft(Qe,dt);var sI="",gL=/^https?$/i,_L=["POST","PUT"];j=Qe.prototype;j.Oa=function(t){this.M=t};j.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ld.g(),this.C=this.u?Zg(this.u):Zg(ld),this.g.onreadystatechange=At(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){n_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=pe.FormData&&t instanceof pe.FormData,!(0<=IT(_L,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cI(this),0<this.B&&((this.L=vL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.ua,this)):this.A=Kf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){n_(this,s)}};function vL(t){return Is&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.ua=function(){typeof Mf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function n_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,oI(t),iu(t)}function oI(t){t.F||(t.F=!0,_t(t,"complete"),_t(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),iu(this))};j.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),iu(this,!0)),Qe.$.N.call(this)};j.La=function(){this.s||(this.G||this.v||this.l?aI(this):this.kb())};j.kb=function(){aI(this)};function aI(t){if(t.h&&typeof Mf<"u"&&(!t.C[1]||Pn(t)!=4||t.da()!=2)){if(t.v&&Pn(t)==4)Kf(t.La,0,t);else if(_t(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(YT)[1]||null;!i&&pe.self&&pe.self.location&&(i=pe.self.location.protocol.slice(0,-1)),r=!gL.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var s=2<Pn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",oI(t)}}finally{iu(t)}}}}function iu(t,e){if(t.g){cI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function cI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}j.isActive=function(){return!!this.g};function Pn(t){return t.g?t.g.readyState:0}j.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};j.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mL(e)}};function r_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yL(t){const e={};t=(t.g&&2<=Pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Qo(t[r]))continue;var n=qD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}xD(e,function(r){return r.join(", ")})}j.Ia=function(){return this.m};j.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lI(t){let e="";return $f(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Jf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):He(t,e,n))}function io(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uI(t){this.Ga=0,this.j=[],this.l=new Ql,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=io("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=io("baseRetryDelayMs",5e3,t),this.hb=io("retryDelaySeedMs",1e4,t),this.eb=io("forwardChannelMaxRetries",2,t),this.xa=io("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ZT(t&&t.concurrentRequestLimit),this.Ja=new dL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}j=uI.prototype;j.ra=8;j.H=1;function Zf(t){if(hI(t),t.H==3){var e=t.W++,n=ir(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),Ra(t,n),e=new Aa(t,t.l,e),e.L=2,e.v=tu(ir(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon)try{n=pe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=yI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ba(e)}_I(t)}function su(t){t.g&&(tp(t),t.g.cancel(),t.g=null)}function hI(t){su(t),t.u&&(pe.clearTimeout(t.u),t.u=null),Jc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function ou(t){if(!eI(t.i)&&!t.m){t.m=!0;var e=t.Na;Jo||LT(),Zo||(Jo(),Zo=!0),qf.add(e,t),t.C=0}}function EL(t,e){return tI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ia(At(t.Na,t,e),gI(t,t.C)),t.C++,!0)}j.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Aa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=CT(s),RT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dI(this,i,e),n=ir(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),Ra(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(lI(s)))+"&"+e:this.o&&Jf(n,this.o,s)),Qf(this.i,i),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),i.aa=!0,hd(i,n,null)):hd(i,n,e),this.H=2}}else this.H==3&&(t?i_(this,t):this.j.length==0||eI(this.i)||i_(this))};function i_(t,e){var n;e?n=e.m:n=t.W++;const r=ir(t.I);He(r,"SID",t.K),He(r,"RID",n),He(r,"AID",t.V),Ra(t,r),t.o&&t.s&&Jf(r,t.o,t.s),n=new Aa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=dI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qf(t.i,n),hd(n,r,e)}function Ra(t,e){t.na&&$f(t.na,function(n,r){He(e,r,n)}),t.h&&GT({},function(n,r){He(e,r,n)})}function dI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?At(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{fL(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function fI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Jo||LT(),Zo||(Jo(),Zo=!0),qf.add(e,t),t.A=0}}function ep(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ia(At(t.Ma,t),gI(t,t.A)),t.A++,!0)}j.Ma=function(){if(this.u=null,pI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ia(At(this.jb,this),t)}};j.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Nt(10),su(this),pI(this))};function tp(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function pI(t){t.g=new Aa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ir(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),Ra(t,e),t.o&&t.s&&Jf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=tu(ir(e)),n.s=null,n.S=!0,qT(n,t)}j.ib=function(){this.v!=null&&(this.v=null,su(this),ep(this),Nt(19))};function Jc(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function mI(t,e){var n=null;if(t.g==e){Jc(t),tp(t),t.g=null;var r=2}else if(fd(t.i,e))n=e.F,nI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Xl(),_t(r,new UT(r,n)),ou(t)}else fI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&EL(t,e)||r==2&&ep(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:pi(t,5);break;case 4:pi(t,10);break;case 3:pi(t,6);break;default:pi(t,2)}}}function gI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function pi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=At(t.pb,t);n||(n=new Ei("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||Qc(n,"https"),tu(n)),pL(n.toString(),r)}else Nt(2);t.H=0,t.h&&t.h.za(e),_I(t),hI(t)}j.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Nt(2)):(this.l.info("Failed to ping google.com"),Nt(1))};function _I(t){if(t.H=0,t.ma=[],t.h){const e=rI(t.i);(e.length!=0||t.j.length!=0)&&(Gg(t.ma,e),Gg(t.ma,t.j),t.i.i.length=0,Vf(t.j),t.j.length=0),t.h.ya()}}function vI(t,e,n){var r=n instanceof Ei?ir(n):new Ei(n);if(r.g!="")e&&(r.g=e+"."+r.g),Xc(r,r.m);else{var i=pe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ei(null);r&&Qc(s,r),e&&(s.g=e),i&&Xc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&He(r,n,e),He(r,"VER",t.ra),Ra(t,r),r}function yI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Qe(new nu({ob:!0})):new Qe(t.va),e.Oa(t.J),e}j.isActive=function(){return!!this.h&&this.h.isActive(this)};function EI(){}j=EI.prototype;j.Ba=function(){};j.Aa=function(){};j.za=function(){};j.ya=function(){};j.isActive=function(){return!0};j.Va=function(){};function Zc(){if(Is&&!(10<=Number(DD)))throw Error("Environmental error: no available transport.")}Zc.prototype.g=function(t,e){return new Xt(t,e)};function Xt(t,e){dt.call(this),this.g=new uI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Qo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}ft(Xt,dt);Xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=vI(t,null,t.Y),ou(t)};Xt.prototype.close=function(){Zf(this.g)};Xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hf(t),t=n);e.j.push(new lL(e.fb++,t)),e.H==3&&ou(e)};Xt.prototype.N=function(){this.g.h=null,delete this.j,Zf(this.g),delete this.g,Xt.$.N.call(this)};function TI(t){Gf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ft(TI,Gf);function II(){Yf.call(this),this.status=1}ft(II,Yf);function js(t){this.g=t}ft(js,EI);js.prototype.Ba=function(){_t(this.g,"a")};js.prototype.Aa=function(t){_t(this.g,new TI(t))};js.prototype.za=function(t){_t(this.g,new II)};js.prototype.ya=function(){_t(this.g,"b")};function TL(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(En,TL);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ph(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ph(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ph(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ph(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ve(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var IL={};function np(t){return-128<=t&&128>t?OD(t,function(e){return new Ve([e|0],0>e?-1:0)}):new Ve([t|0],0>t?-1:0)}function On(t){if(isNaN(t)||!isFinite(t))return ss;if(0>t)return gt(On(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=pd;return new Ve(e,0)}function wI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return gt(wI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=On(Math.pow(e,8)),r=ss,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=On(Math.pow(e,s)),r=r.R(s).add(On(o))):(r=r.R(n),r=r.add(On(o)))}return r}var pd=4294967296,ss=np(0),md=np(1),s_=np(16777216);j=Ve.prototype;j.ea=function(){if(tn(this))return-gt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:pd+r)*e,e*=pd}return t};j.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(tn(this))return"-"+gt(this).toString(t);for(var e=On(Math.pow(t,6)),n=this,r="";;){var i=tl(n,e).g;n=el(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Wn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};j.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}j.X=function(t){return t=el(this,t),tn(t)?-1:Wn(t)?0:1};function gt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ve(n,~t.h).add(md)}j.abs=function(){return tn(this)?gt(this):this};j.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ve(n,n[n.length-1]&-2147483648?-1:0)};function el(t,e){return t.add(gt(e))}j.R=function(t){if(Wn(this)||Wn(t))return ss;if(tn(this))return tn(t)?gt(this).R(gt(t)):gt(gt(this).R(t));if(tn(t))return gt(this.R(gt(t)));if(0>this.X(s_)&&0>t.X(s_))return On(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,rc(n,2*r+2*i),n[2*r+2*i+1]+=s*c,rc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,rc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,rc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ve(n,0)};function rc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function so(t,e){this.g=t,this.h=e}function tl(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new so(ss,ss);if(tn(t))return e=tl(gt(t),e),new so(gt(e.g),gt(e.h));if(tn(e))return e=tl(t,gt(e)),new so(gt(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=md,r=e;0>=r.X(t);)n=o_(n),r=o_(r);var i=qi(n,1),s=qi(r,1);for(r=qi(r,2),n=qi(n,2);!Wn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=qi(r,1),n=qi(n,1)}return e=el(t,i.R(e)),new so(i,e)}for(i=ss;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=On(n),o=s.R(e);tn(o)||0<o.X(t);)n-=r,s=On(n),o=s.R(e);Wn(s)&&(s=md),i=i.add(s),t=el(t,o)}return new so(i,t)}j.gb=function(t){return tl(this,t).h};j.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ve(n,this.h&t.h)};j.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ve(n,this.h|t.h)};j.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ve(n,this.h^t.h)};function o_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ve(n,t.h)}function qi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ve(i,t.h)}Zc.prototype.createWebChannel=Zc.prototype.g;Xt.prototype.send=Xt.prototype.u;Xt.prototype.open=Xt.prototype.m;Xt.prototype.close=Xt.prototype.close;Jl.NO_ERROR=0;Jl.TIMEOUT=8;Jl.HTTP_ERROR=6;BT.COMPLETE="complete";jT.EventType=wa;wa.OPEN="a";wa.CLOSE="b";wa.ERROR="c";wa.MESSAGE="d";dt.prototype.listen=dt.prototype.O;Qe.prototype.listenOnce=Qe.prototype.P;Qe.prototype.getLastError=Qe.prototype.Sa;Qe.prototype.getLastErrorCode=Qe.prototype.Ia;Qe.prototype.getStatus=Qe.prototype.da;Qe.prototype.getResponseJson=Qe.prototype.Wa;Qe.prototype.getResponseText=Qe.prototype.ja;Qe.prototype.send=Qe.prototype.ha;Qe.prototype.setWithCredentials=Qe.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;Ve.prototype.add=Ve.prototype.add;Ve.prototype.multiply=Ve.prototype.R;Ve.prototype.modulo=Ve.prototype.gb;Ve.prototype.compare=Ve.prototype.X;Ve.prototype.toNumber=Ve.prototype.ea;Ve.prototype.toString=Ve.prototype.toString;Ve.prototype.getBits=Ve.prototype.D;Ve.fromNumber=On;Ve.fromString=wI;var wL=function(){return new Zc},AL=function(){return Xl()},mh=Jl,bL=BT,CL=Pi,a_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ic=jT,RL=Qe,SL=En,os=Ve;const c_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="10.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new ql("@firebase/firestore");function oo(){return Ai.logLevel}function Y(t,...e){if(Ai.logLevel<=we.DEBUG){const n=e.map(rp);Ai.debug(`Firestore (${Hs}): ${t}`,...n)}}function sr(t,...e){if(Ai.logLevel<=we.ERROR){const n=e.map(rp);Ai.error(`Firestore (${Hs}): ${t}`,...n)}}function ws(t,...e){if(Ai.logLevel<=we.WARN){const n=e.map(rp);Ai.warn(`Firestore (${Hs}): ${t}`,...n)}}function rp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw sr(e),new Error(e)}function We(t,e){t||fe()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class OL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NL{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new AI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Et(e)}}class kL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ML{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new LL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new ct(0,0))}static max(){return new me(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends ia{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const xL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends ia{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return xL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(qe.fromString(e))}static fromName(e){return new ie(qe.fromString(e).popFirst(5))}static empty(){return new ie(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new qe(e.slice()))}}function $L(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new jr(i,ie.empty(),e)}function FL(t){return new jr(t.readTime,t.key,-1)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(me.min(),ie.empty(),-1)}static max(){return new jr(me.max(),ie.empty(),-1)}}function UL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==BL)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Pa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ip.ae=-1;function au(t){return t==null}function nl(t){return t===0&&1/t==-1/0}function HL(t){return typeof t=="number"&&Number.isInteger(t)&&!nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function CI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sc(this.root,e,this.comparator,!0)}}class sc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u_(this.data.getIterator())}getIteratorFrom(e){return new u_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class u_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new Ct(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new RI("Invalid base64 string: "+s):s}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const qL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(We(!!t),typeof t=="string"){let e=0;const n=qL.exec(t);if(We(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bi(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function op(t){const e=t.mapValue.fields.__previous_value__;return sp(e)?op(e):e}function sa(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sp(t)?4:KL(t)?9007199254740991:10:fe()}function Bn(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),a=Hr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return bi(i.bytesValue).isEqual(bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return rt(i.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return rt(i.integerValue)===rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=rt(i.doubleValue),a=rt(s.doubleValue);return o===a?nl(o)===nl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(l_(o)!==l_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Bn(o[c],a[c])))return!1;return!0}(t,e);default:return fe()}}function aa(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=Ci(t),r=Ci(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=rt(s.integerValue||s.doubleValue),c=rt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(sa(t),sa(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(s,o){const a=bi(s),c=bi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ke(a[l],c[l]);if(u!==0)return u}return ke(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ke(rt(s.latitude),rt(o.latitude));return a!==0?a:ke(rt(s.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=bs(a[l],c[l]);if(u)return u}return ke(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===oc.mapValue&&o===oc.mapValue)return 0;if(s===oc.mapValue)return 1;if(o===oc.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ke(c[h],u[h]);if(d!==0)return d;const f=bs(a[c[h]],l[u[h]]);if(f!==0)return f}return ke(c.length,u.length)}(t.mapValue,e.mapValue);default:throw fe()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Hr(t),r=Hr(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function Cs(t){return gd(t)}function gd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gd(n.fields[o])}`;return i+"}"}(t.mapValue):fe()}function d_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _d(t){return!!t&&"integerValue"in t}function ap(t){return!!t&&"arrayValue"in t}function f_(t){return!!t&&"nullValue"in t}function p_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yc(t){return!!t&&"mapValue"in t}function No(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=No(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=No(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=No(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=No(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];yc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(No(this.value))}}function SI(t){const e=[];return Oi(t.fields,(n,r)=>{const i=new wt([n]);if(yc(r)){const s=SI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Tt(e,0,me.min(),me.min(),me.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,me.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,me.min(),me.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,me.min(),me.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.position=e,this.inclusive=n}}function m_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function g_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n="asc"){this.field=e,this.dir=n}}function zL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{}class it extends PI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YL(e,n,r):n==="array-contains"?new JL(e,r):n==="in"?new ZL(e,r):n==="not-in"?new eM(e,r):n==="array-contains-any"?new tM(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QL(e,r):new XL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bs(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tn extends PI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Tn(e,n)}matches(e){return OI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function OI(t){return t.op==="and"}function NI(t){return GL(t)&&OI(t)}function GL(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function vd(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(NI(t))return t.filters.map(e=>vd(e)).join(",");{const e=t.filters.map(n=>vd(n)).join(",");return`${t.op}(${e})`}}function kI(t,e){return t instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&Bn(r.value,i.value)}(t,e):t instanceof Tn?function(r,i){return i instanceof Tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kI(o,i.filters[a]),!0):!1}(t,e):void fe()}function DI(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(DI).join(" ,")+"}"}(t):"Filter"}class YL extends it{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class QL extends it{constructor(e,n){super(e,"in",n),this.keys=LI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XL extends it{constructor(e,n){super(e,"not-in",n),this.keys=LI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class JL extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ap(n)&&aa(n.arrayValue,this.value)}}class ZL extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class eM extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class tM extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ap(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function __(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nM(t,e,n,r,i,s,o)}function cp(t){const e=ve(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.he=n}return e.he}function lp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!g_(t.startAt,e.startAt)&&g_(t.endAt,e.endAt)}function yd(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function rM(t,e,n,r,i,s,o,a){return new qs(t,e,n,r,i,s,o,a)}function up(t){return new qs(t)}function v_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function cu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function MI(t){return t.collectionGroup!==null}function ko(t){const e=ve(t);if(e.Pe===null){e.Pe=[];const n=cu(e),r=hp(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new as(n)),e.Pe.push(new as(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new as(wt.keyField(),s))}}}return e.Pe}function Ln(t){const e=ve(t);return e.Ie||(e.Ie=iM(e,ko(t))),e.Ie}function iM(t,e){if(t.limitType==="F")return __(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new as(i.field,s)});const n=t.endAt?new rl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new rl(t.startAt.position,t.startAt.inclusive):null;return __(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ed(t,e){e.getFirstInequalityField(),cu(t);const n=t.filters.concat([e]);return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Td(t,e,n){return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lu(t,e){return lp(Ln(t),Ln(e))&&t.limitType===e.limitType}function VI(t){return`${cp(Ln(t))}|lt:${t.limitType}`}function Yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>DI(i)).join(", ")}]`),au(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Cs(i)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ko(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=m_(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ko(r),i)||r.endAt&&!function(o,a,c){const l=m_(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ko(r),i))}(t,e)}function sM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xI(t){return(e,n)=>{let r=!1;for(const i of ko(t)){const s=oM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function oM(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?bs(c,l):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return CI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=new Ge(ie.comparator);function or(){return aM}const $I=new Ge(ie.comparator);function mo(...t){let e=$I;for(const n of t)e=e.insert(n.key,n);return e}function FI(t){let e=$I;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mi(){return Do()}function UI(){return Do()}function Do(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const cM=new Ge(ie.comparator),lM=new Ct(ie.comparator);function Ce(...t){let e=lM;for(const n of t)e=e.add(n);return e}const uM=new Ct(ke);function hM(){return uM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nl(e)?"-0":e}}function jI(t){return{integerValue:""+t}}function dM(t,e){return HL(e)?jI(e):BI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this._=void 0}}function fM(t,e,n){return t instanceof ca?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sp(s)&&(s=op(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Rs?qI(t,e):t instanceof Ss?WI(t,e):function(i,s){const o=HI(i,s),a=y_(o)+y_(i.Te);return _d(o)&&_d(i.Te)?jI(a):BI(i.serializer,a)}(t,e)}function pM(t,e,n){return t instanceof Rs?qI(t,e):t instanceof Ss?WI(t,e):n}function HI(t,e){return t instanceof il?function(r){return _d(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ca extends hu{}class Rs extends hu{constructor(e){super(),this.elements=e}}function qI(t,e){const n=KI(e);for(const r of t.elements)n.some(i=>Bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ss extends hu{constructor(e){super(),this.elements=e}}function WI(t,e){let n=KI(e);for(const r of t.elements)n=n.filter(i=>!Bn(i,r));return{arrayValue:{values:n}}}class il extends hu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function y_(t){return rt(t.integerValue||t.doubleValue)}function KI(t){return ap(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){this.field=e,this.transform=n}}function mM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Rs&&i instanceof Rs||r instanceof Ss&&i instanceof Ss?As(r.elements,i.elements,Bn):r instanceof il&&i instanceof il?Bn(r.Te,i.Te):r instanceof ca&&i instanceof ca}(t.transform,e.transform)}class gM{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class du{}function zI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fp(t.key,vn.none()):new Oa(t.key,t.data,vn.none());{const n=t.data,r=xt.empty();let i=new Ct(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jr(t.key,r,new Kt(i.toArray()),vn.none())}}function _M(t,e,n){t instanceof Oa?function(i,s,o){const a=i.value.clone(),c=T_(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(i,s,o){if(!Ec(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=T_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(GI(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Lo(t,e,n,r){return t instanceof Oa?function(s,o,a,c){if(!Ec(s.precondition,o))return a;const l=s.value.clone(),u=I_(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(s,o,a,c){if(!Ec(s.precondition,o))return a;const l=I_(s.fieldTransforms,c,o),u=o.data;return u.setAll(GI(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ec(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function vM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HI(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&As(r,i,(s,o)=>mM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends du{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends du{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function GI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function T_(t,e,n){const r=new Map;We(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pM(o,a,n[i]))}return r}function I_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fM(s,o,e))}return r}class fp extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yM extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_M(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=UI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=zI(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>E_(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>E_(n,r))}}class pp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){We(e.mutations.length===r.length);let i=function(){return cM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,Pe;function wM(t){switch(t){default:return fe();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function YI(t){if(t===void 0)return sr("GRPC error has no .code"),b.UNKNOWN;switch(t){case nt.OK:return b.OK;case nt.CANCELLED:return b.CANCELLED;case nt.UNKNOWN:return b.UNKNOWN;case nt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case nt.INTERNAL:return b.INTERNAL;case nt.UNAVAILABLE:return b.UNAVAILABLE;case nt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case nt.NOT_FOUND:return b.NOT_FOUND;case nt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case nt.ABORTED:return b.ABORTED;case nt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case nt.DATA_LOSS:return b.DATA_LOSS;default:return fe()}}(Pe=nt||(nt={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=new os([4294967295,4294967295],0);function w_(t){const e=AM().encode(t),n=new SL;return n.update(e),new Uint8Array(n.digest())}function A_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new os([n,r],0),new os([i,s],0)]}class mp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=os.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(os.fromNumber(r)));return i.compare(bM)===1&&(i=new os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=w_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=w_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fu(me.min(),i,new Ge(ke),or(),Ce())}}class Na{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class QI{constructor(e,n){this.targetId=e,this.ye=n}}class XI{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class b_{constructor(){this.we=0,this.Se=R_(),this.be=Rt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=Ce(),n=Ce(),r=Ce();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:fe()}}),new Na(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=R_()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class CM{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=or(),this.Ue=C_(),this.We=new Ge(ke)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(yd(s))if(r===0){const o=new ie(s.path);this.je(n,o,Tt.newNoDocument(o,me.min()))}else We(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=bi(r).toUint8Array()}catch(c){if(c instanceof RI)return ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new mp(o,i,s)}catch(c){return ws(c instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&yd(a.target)){const c=new ie(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Tt.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=Ce();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new fu(e,n,this.We,this.$e,r);return this.$e=or(),this.Ue=C_(),this.We=new Ge(ke),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new b_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Ct(ke),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new b_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function C_(){return new Ge(ie.comparator)}function R_(){return new Ge(ie.comparator)}const RM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),SM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),PM=(()=>({and:"AND",or:"OR"}))();class OM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Id(t,e){return t.useProto3Json||au(e)?e:{value:e}}function sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NM(t,e){return sl(t,e.toTimestamp())}function Mn(t){return We(!!t),me.fromTimestamp(function(n){const r=Hr(n);return new ct(r.seconds,r.nanos)}(t))}function gp(t,e){return function(r){return new qe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function ZI(t){const e=qe.fromString(t);return We(rw(e)),e}function wd(t,e){return gp(t.databaseId,e.path)}function gh(t,e){const n=ZI(e);if(n.get(1)!==t.databaseId.projectId)throw new K(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(ew(n))}function Ad(t,e){return gp(t.databaseId,e)}function kM(t){const e=ZI(t);return e.length===4?qe.emptyPath():ew(e)}function bd(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ew(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function S_(t,e,n){return{name:wd(t,e),fields:n.value.mapValue.fields}}function DM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(We(u===void 0||typeof u=="string"),Rt.fromBase64String(u||"")):(We(u===void 0||u instanceof Uint8Array),Rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:YI(l.code);return new K(u,l.message||"")}(o);n=new XI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gh(t,r.document.name),s=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):me.min(),a=new xt({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Tc(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gh(t,r.document),s=r.readTime?Mn(r.readTime):me.min(),o=Tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gh(t,r.document),s=r.removedTargetIds||[];n=new Tc([],s,i,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IM(i,s),a=r.targetId;n=new QI(a,o)}}return n}function LM(t,e){let n;if(e instanceof Oa)n={update:S_(t,e.key,e.value)};else if(e instanceof fp)n={delete:wd(t,e.key)};else if(e instanceof Jr)n={update:S_(t,e.key,e.data),updateMask:HM(e.fieldMask)};else{if(!(e instanceof yM))return fe();n={verify:wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Rs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ss)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof il)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:NM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:fe()}(t,e.precondition)),n}function MM(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Mn(i.updateTime):Mn(s);return o.isEqual(me.min())&&(o=Mn(s)),new gM(o,i.transformResults||[])}(n,e))):[]}function VM(t,e){return{documents:[Ad(t,e.path)]}}function xM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ad(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ad(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return nw(Tn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Qi(h.field),direction:UM(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Id(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function $M(t){let e=kM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){We(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=tw(h);return d instanceof Tn&&NI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new as(Xi(_.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,au(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new rl(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new rl(f,d)}(n.endAt)),rM(e,i,o,s,a,"F",c,l)}function FM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xi(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xi(n.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xi(n.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xi(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Xi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>tw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function UM(t){return RM[t]}function BM(t){return SM[t]}function jM(t){return PM[t]}function Qi(t){return{fieldPath:t.canonicalString()}}function Xi(t){return wt.fromServerFormat(t.fieldPath)}function nw(t){return t instanceof it?function(n){if(n.op==="=="){if(p_(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NAN"}};if(f_(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(p_(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NOT_NAN"}};if(f_(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(n.field),op:BM(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(i=>nw(i));return r.length===1?r[0]:{compositeFilter:{op:jM(n.op),filters:r}}}(t):fe()}function HM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r,i,s=me.min(),o=me.min(),a=Rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.ht=e}}function WM(t){const e=$M({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Td(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(){this.an=new zM}addToCollectionParentIndex(e,n){return this.an.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(jr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class zM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ct(qe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ct(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ps(0)}static Ln(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Lo(r.mutation,i,Kt.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const i=mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=or();const o=Do(),a=function(){return Do()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Jr)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Lo(u.mutation,l,u.mutation.getFieldMask(),ct.now())):o.set(l.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new YM(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Do();let i=new Ge((o,a)=>o-a),s=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Kt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||Ce()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=UI();u.forEach(d=>{if(!s.has(d)){const f=zI(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(mi());let a=-1,c=s;return o.next(l=>N.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,Ce())).next(u=>({batchId:a,changes:FI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,c=>{const l=function(h,d){return new qs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Tt.newInvalidDocument(u)))});let a=mo();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&Lo(u.mutation,l,Kt.empty(),ct.now()),uu(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return N.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:WM(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(){this.overlays=new Ge(ie.comparator),this.Pr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mi();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=mi(),s=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=mi(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=mi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return N.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TM(n,r));let s=this.Pr.get(n);s===void 0&&(s=Ce(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.Ir=new Ct(ut.dr),this.Tr=new Ct(ut.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new ut(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ie(new qe([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new ie(new qe([])),r=new ut(n,e),i=new ut(n,e+1);let s=Ce();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return ie.comparator(e.key,n.key)||ke(e.yr,n.yr)}static Er(e,n){return ke(e.yr,n.yr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Ct(ut.dr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new ut(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(ke);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new ut(new ie(s),0);let a=new Ct(ke);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.yr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){We(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return N.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new ut(n,0),i=this.Sr.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e){this.Fr=e,this.docs=function(){return new Ge(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,a=new ie(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||UL(FL(u),r)<=0||(i.has(u.key)||uu(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){fe()}Mr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tV(this)}getSize(e){return N.resolve(this.size)}}class tV extends GM{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e){this.persistence=e,this.Or=new Ws(n=>cp(n),lp),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Nr=0,this.Br=new _p,this.targetCount=0,this.Lr=Ps.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),N.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Qn(n),N.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n){this.kr={},this.overlays={},this.qr=new ip(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new nV(this),this.indexManager=new KM,this.remoteDocumentCache=function(i){return new eV(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new qM(n),this.Ur=new XM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new ZM(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new iV(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return N.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class iV extends jL{constructor(e){super(),this.currentSequenceNumber=e}}class vp{constructor(e){this.persistence=e,this.jr=new _p,this.Hr=null}static Jr(e){return new vp(e)}get Yr(){if(this.Hr)return this.Hr;throw fe()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),N.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Yr,r=>{const i=ie.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,me.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return N.or([()=>N.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=Ce(),i=Ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sV;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(oo()<=we.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),N.resolve()):(oo()<=we.DEBUG&&Y("QueryEngine","Query:",Yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(oo()<=we.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):N.resolve())}Hi(e,n){if(v_(n))return N.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Td(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ce(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Td(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,i){return v_(n)||i.isEqual(me.min())?N.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?N.resolve(null):(oo()<=we.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yi(n)),this.ts(e,o,n,$L(i,-1)).next(a=>a))})}Xi(e,n){let r=new Ct(xI(e));return n.forEach((i,s)=>{uu(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return oo()<=we.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Yi(n)),this.ji.getDocumentsMatchingQuery(e,n,jr.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Ge(ke),this.ss=new Ws(s=>cp(s),lp),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QM(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function cV(t,e,n,r){return new aV(t,e,n,r)}async function iw(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ce();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function lV(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=N.resolve();return d.forEach(_=>{f=f.next(()=>u.getEntry(c,_)).next(g=>{const y=l.docVersions.get(_);We(y!==null),g.version.compareTo(y)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ce();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sw(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function uV(t,e){const n=ve(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Rt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(g,y,T){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.Kr.updateTargetData(s,f))});let c=or(),l=Ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(hV(s,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(me.min())){const u=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.rs=i,s))}function hV(t,e,n){let r=Ce(),i=Ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:i}})}function dV(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fV(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new Sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=ve(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pa(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function P_(t,e,n){const r=ve(t);let i=me.min(),s=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ve(c),d=h.ss.get(u);return d!==void 0?N.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,Ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:me.min(),n?s:Ce())).next(a=>(pV(r,sM(e),a),{documents:a,Ps:s})))}function pV(t,e,n){let r=t.os.get(e)||me.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class O_{constructor(){this.activeTargetIds=hM()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mV{constructor(){this.ro=new O_,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new O_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac=null;function _h(){return ac===null?ac=function(){return 268435456+Math.round(2147483648*Math.random())}():ac++,"0x"+ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class yV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=_h(),c=this.Do(n,r);Y("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,s,o),this.vo(n,c,l,i).then(u=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ws("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=_V[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=_h();return new Promise((o,a)=>{const c=new RL;c.setWithCredentials(!0),c.listenOnce(bL.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mh.NO_ERROR:const u=c.getResponseJson();Y(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case mh.TIMEOUT:Y(yt,`RPC '${e}' ${s} timed out`),a(new K(b.DEADLINE_EXCEEDED,"Request time out"));break;case mh.HTTP_ERROR:const h=c.getStatus();if(Y(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(T)>=0?T:b.UNKNOWN}(f.status);a(new K(_,f.message))}else a(new K(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(b.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{Y(yt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);Y(yt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const i=_h(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wL(),a=AL(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");Y(yt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const _=new vV({ho:y=>{f?Y(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(Y(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),Y(yt,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},Po:()=>h.close()}),g=(y,T,R)=>{y.listen(T,A=>{try{R(A)}catch(E){setTimeout(()=>{throw E},0)}})};return g(h,ic.EventType.OPEN,()=>{f||Y(yt,`RPC '${e}' stream ${i} transport opened.`)}),g(h,ic.EventType.CLOSE,()=>{f||(f=!0,Y(yt,`RPC '${e}' stream ${i} transport closed`),_.mo())}),g(h,ic.EventType.ERROR,y=>{f||(f=!0,ws(yt,`RPC '${e}' stream ${i} transport errored:`,y),_.mo(new K(b.UNAVAILABLE,"The operation could not be completed")))}),g(h,ic.EventType.MESSAGE,y=>{var T;if(!f){const R=y.data[0];We(!!R);const A=R,E=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(E){Y(yt,`RPC '${e}' stream ${i} received error:`,E);const F=E.status;let z=function(L){const W=nt[L];if(W!==void 0)return YI(W)}(F),Z=E.message;z===void 0&&(z=b.INTERNAL,Z="Unknown error status: "+F+" with message "+E.message),f=!0,_.mo(new K(z,Z)),h.close()}else Y(yt,`RPC '${e}' stream ${i} received:`,R),_.fo(R)}}),g(a,CL.STAT_EVENT,y=>{y.stat===a_.PROXY?Y(yt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===a_.NOPROXY&&Y(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Vo()},0),_}}function vh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return new OM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,r,i,s,o,a,c){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new ow(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new K(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EV extends aw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=DM(this.serializer,e),r=function(s){if(!("targetChange"in s))return me.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?Mn(o.readTime):me.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=bd(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=yd(c)?{documents:VM(s,c)}:{query:xM(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=JI(s,o.resumeToken);const l=Id(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=sl(s,o.snapshotVersion.toTimestamp());const l=Id(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=FM(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=bd(this.serializer),n.removeTarget=e,this.n_(n)}}class TV extends aw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=MM(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.T_(r,n)}return We(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=bd(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>LM(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new K(b.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(b.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(b.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class wV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(sr(n),this.p_=!1):Y("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ve(c);l.F_.add(4),await ka(l),l.O_.set("Unknown"),l.F_.delete(4),await mu(l)}(this))})}),this.O_=new wV(r,i)}}async function mu(t){if(Ni(t))for(const e of t.M_)await e(!0)}async function ka(t){for(const e of t.M_)await e(!1)}function cw(t,e){const n=ve(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Ip(n)?Tp(n):Ks(n).Yo()&&Ep(n,e))}function lw(t,e){const n=ve(t),r=Ks(n);n.v_.delete(e),r.Yo()&&uw(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ni(n)&&n.O_.set("Unknown"))}function Ep(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ks(t).l_(e)}function uw(t,e){t.N_.Le(e),Ks(t).h_(e)}function Tp(t){t.N_=new CM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ks(t).start(),t.O_.y_()}function Ip(t){return Ni(t)&&!Ks(t).Jo()&&t.v_.size>0}function Ni(t){return ve(t).F_.size===0}function hw(t){t.N_=void 0}async function bV(t){t.v_.forEach((e,n)=>{Ep(t,e)})}async function CV(t,e){hw(t),Ip(t)?(t.O_.b_(e),Tp(t)):t.O_.set("Unknown")}async function RV(t,e,n){if(t.O_.set("Online"),e instanceof XI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ol(t,r)}else if(e instanceof Tc?t.N_.Ge(e):e instanceof QI?t.N_.Xe(e):t.N_.He(e),!n.isEqual(me.min()))try{const r=await sw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.v_.get(l);u&&s.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.v_.get(c);if(!u)return;s.v_.set(c,u.withResumeToken(Rt.EMPTY_BYTE_STRING,u.snapshotVersion)),uw(s,c);const h=new Sr(u.target,c,l,u.sequenceNumber);Ep(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await ol(t,r)}}async function ol(t,e,n){if(!Pa(e))throw e;t.F_.add(1),await ka(t),t.O_.set("Offline"),n||(n=()=>sw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await mu(t)})}function dw(t,e){return e().catch(n=>ol(t,n,e))}async function gu(t){const e=ve(t),n=qr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;SV(e);)try{const i=await dV(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,PV(e,i)}catch(i){await ol(e,i)}fw(e)&&pw(e)}function SV(t){return Ni(t)&&t.C_.length<10}function PV(t,e){t.C_.push(e);const n=qr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function fw(t){return Ni(t)&&!qr(t).Jo()&&t.C_.length>0}function pw(t){qr(t).start()}async function OV(t){qr(t).A_()}async function NV(t){const e=qr(t);for(const n of t.C_)e.d_(n.mutations)}async function kV(t,e,n){const r=t.C_.shift(),i=pp.from(r,e,n);await dw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gu(t)}async function DV(t,e){e&&qr(t).I_&&await async function(r,i){if(function(o){return wM(o)&&o!==b.ABORTED}(i.code)){const s=r.C_.shift();qr(r).Xo(),await dw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gu(r)}}(t,e),fw(t)&&pw(t)}async function k_(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Ni(n);n.F_.add(3),await ka(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await mu(n)}async function LV(t,e){const n=ve(t);e?(n.F_.delete(2),await mu(n)):e||(n.F_.add(2),await ka(n),n.O_.set("Unknown"))}function Ks(t){return t.B_||(t.B_=function(n,r,i){const s=ve(n);return s.V_(),new EV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:bV.bind(null,t),Eo:CV.bind(null,t),c_:RV.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Ip(t)?Tp(t):t.O_.set("Unknown")):(await t.B_.stop(),hw(t))})),t.B_}function qr(t){return t.L_||(t.L_=function(n,r,i){const s=ve(n);return s.V_(),new TV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:OV.bind(null,t),Eo:DV.bind(null,t),E_:NV.bind(null,t),T_:kV.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await gu(t)):(await t.L_.stop(),t.C_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new wp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ap(t,e){if(sr("AsyncQueue",`${e}: ${t}`),Pa(t))return new K(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.k_=new Ge(ie.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):fe():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Os{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Os(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.Q_=void 0,this.listeners=[]}}class VV{constructor(){this.queries=new Ws(e=>VI(e),lu),this.onlineState="Unknown",this.K_=new Set}}async function mw(t,e){const n=ve(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new MV),i)try{s.Q_=await n.onListen(r)}catch(o){const a=Ap(o,`Initialization of query '${Yi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&bp(n)}async function gw(t,e){const n=ve(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xV(t,e){const n=ve(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&bp(n)}function $V(t,e,n){const r=ve(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function bp(t){t.K_.forEach(e=>{e.next()})}class _w{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.key=e}}class yw{constructor(e){this.key=e}}class FV{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Ce(),this.mutatedKeys=Ce(),this.ua=xI(e),this.ca=new cs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new D_,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=uu(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?_!==g&&(r.track({type:3,doc:f}),y=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.ua(f,c)>0||l&&this.ua(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(f?(o=o.add(f),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((l,u)=>function(d,f){const _=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return _(d)-_(f)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,s.length!==0||c?{snapshot:new Os(this.query,e.ca,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new D_,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=Ce(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new yw(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new vw(r))}),n}Ra(e){this.oa=e.Ps,this.aa=Ce();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Os.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class UV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BV{constructor(e){this.key=e,this.ma=!1}}class jV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ws(a=>VI(a),lu),this.pa=new Map,this.ya=new Set,this.wa=new Ge(ie.comparator),this.Sa=new Map,this.ba=new _p,this.Da={},this.Ca=new Map,this.va=Ps.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function HV(t,e){const n=ZV(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await fV(n.localStore,Ln(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await qV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&cw(n.remoteStore,o)}return i}async function qV(t,e,n,r,i){t.Ma=(h,d,f)=>async function(g,y,T,R){let A=y.view.ha(T);A.es&&(A=await P_(g.localStore,y.query,!1).then(({documents:z})=>y.view.ha(z,A)));const E=R&&R.targetChanges.get(y.targetId),F=y.view.applyChanges(A,g.isPrimaryClient,E);return M_(g,y.targetId,F.Ea),F.snapshot}(t,h,d,f);const s=await P_(t.localStore,e,!0),o=new FV(e,s.Ps),a=o.ha(s.documents),c=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);M_(t,n,l.Ea);const u=new UV(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function WV(t,e){const n=ve(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!lu(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),lw(n.remoteStore,r.targetId),Rd(n,r.targetId)}).catch(Sa)):(Rd(n,r.targetId),await Cd(n.localStore,r.targetId,!0))}async function KV(t,e,n){const r=ex(t);try{const i=await function(o,a){const c=ve(o),l=ct.now(),u=a.reduce((f,_)=>f.add(_.key),Ce());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=or(),g=Ce();return c._s.getEntries(f,u).next(y=>{_=y,_.forEach((T,R)=>{R.isValidDocument()||(g=g.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,_)).next(y=>{h=y;const T=[];for(const R of a){const A=vM(R,h.get(R.key).overlayedDocument);A!=null&&T.push(new Jr(R.key,A,SI(A.value.mapValue),vn.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,T,a)}).next(y=>{d=y;const T=y.applyToLocalDocumentSet(h,g);return c.documentOverlayCache.saveOverlays(f,y.batchId,T)})}).then(()=>({batchId:d.batchId,changes:FI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Ge(ke)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,i.batchId,n),await Da(r,i.changes),await gu(r.remoteStore)}catch(i){const s=Ap(i,"Failed to persist write");n.reject(s)}}async function Ew(t,e){const n=ve(t);try{const r=await uV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(We(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?We(o.ma):i.removedDocuments.size>0&&(We(o.ma),o.ma=!1))}),await Da(n,r,e)}catch(r){await Sa(r)}}function L_(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ve(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&bp(c)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zV(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new Ge(ie.comparator);o=o.insert(s,Tt.newNoDocument(s,me.min()));const a=Ce().add(s),c=new fu(me.min(),new Map,new Ge(ke),o,a);await Ew(r,c),r.wa=r.wa.remove(s),r.Sa.delete(e),Cp(r)}else await Cd(r.localStore,e,!1).then(()=>Rd(r,e,n)).catch(Sa)}async function GV(t,e){const n=ve(t),r=e.batch.batchId;try{const i=await lV(n.localStore,e);Iw(n,r,null),Tw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Da(n,i)}catch(i){await Sa(i)}}async function YV(t,e,n){const r=ve(t);try{const i=await function(o,a){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(We(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Iw(r,e,n),Tw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Da(r,i)}catch(i){await Sa(i)}}function Tw(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Iw(t,e,n){const r=ve(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||ww(t,r)})}function ww(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(lw(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Cp(t))}function M_(t,e,n){for(const r of n)r instanceof vw?(t.ba.addReference(r.key,e),QV(t,r)):r instanceof yw?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||ww(t,r.key)):fe()}function QV(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.ya.add(r),Cp(t))}function Cp(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new ie(qe.fromString(e)),r=t.va.next();t.Sa.set(r,new BV(n)),t.wa=t.wa.insert(n,r),cw(t.remoteStore,new Sr(Ln(up(n.path)),r,"TargetPurposeLimboResolution",ip.ae))}}async function Da(t,e,n){const r=ve(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=yp.$i(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.fa.c_(i),await async function(c,l){const u=ve(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(l,d=>N.forEach(d.Qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>N.forEach(d.Ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Pa(h))throw h;Y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.rs.get(d),_=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(_);u.rs=u.rs.insert(d,g)}}}(r.localStore,s))}async function XV(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await iw(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new K(b.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Da(n,r.cs)}}function JV(t,e){const n=ve(t),r=n.Sa.get(e);if(r&&r.ma)return Ce().add(r.key);{let i=Ce();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function ZV(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zV.bind(null,e),e.fa.c_=xV.bind(null,e.eventManager),e.fa.xa=$V.bind(null,e.eventManager),e}function ex(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YV.bind(null,e),e}class V_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cV(this.persistence,new oV,e.initialUser,this.serializer)}createPersistence(e){return new rV(vp.Jr,this.serializer)}createSharedClientState(e){return new mV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>L_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XV.bind(null,this.syncEngine),await LV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VV}()}createDatastore(e){const n=pu(e.databaseInfo.databaseId),r=function(s){return new yV(s)}(e.databaseInfo);return function(s,o,a,c){return new IV(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new AV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>L_(this.syncEngine,n,0),function(){return N_.C()?new N_:new gV}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new jV(i,s,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ve(n);Y("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await ka(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=bI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ap(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function x_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ix(t);Y("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>k_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>k_(e.remoteStore,s)),t._onlineComponents=e}function rx(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ix(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rx(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await yh(t,new V_)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await yh(t,new V_);return t._offlineComponents}async function bw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await x_(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await x_(t,new tx))),t._onlineComponents}function sx(t){return bw(t).then(e=>e.syncEngine)}async function Cw(t){const e=await bw(t),n=e.eventManager;return n.onListen=HV.bind(null,e.syncEngine),n.onUnlisten=WV.bind(null,e.syncEngine),n}function ox(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Aw({next:d=>{o.enqueueAndForget(()=>gw(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new K(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new K(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new _w(up(a.path),u,{includeMetadataChanges:!0,Z_:!0});return mw(s,h)}(await Cw(t),t.asyncQueue,e,n,r)),r.promise}function ax(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Aw({next:d=>{o.enqueueAndForget(()=>gw(s,h)),d.fromCache&&c.source==="server"?l.reject(new K(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new _w(a,u,{includeMetadataChanges:!0,Z_:!0});return mw(s,h)}(await Cw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e,n){if(!n)throw new K(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cx(t,e,n,r){if(e===!0&&r===!0)throw new K(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function F_(t){if(!ie.isDocumentKey(t))throw new K(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U_(t){if(ie.isDocumentKey(t))throw new K(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new K(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PL;switch(r.type){case"firstParty":return new DL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$_.get(n);r&&(Y("ComponentProvider","Removing Datastore"),$_.delete(n),r.terminate())}(this),Promise.resolve()}}function lx(t,e,n,r={}){var i;const s=(t=ar(t,vu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Et.MOCK_USER;else{a=ak(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new K(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Et(l)}t._authCredentials=new OL(new AI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ki(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Lr extends ki{constructor(e,n,r){super(e,n,up(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new ie(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function ux(t,e,...n){if(t=ze(t),Sw("collection","path",e),t instanceof vu){const r=qe.fromString(e,...n);return U_(r),new Lr(t,null,r)}{if(!(t instanceof $t||t instanceof Lr))throw new K(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return U_(r),new Lr(t.firestore,null,r)}}function ii(t,e,...n){if(t=ze(t),arguments.length===1&&(e=bI.V()),Sw("doc","path",e),t instanceof vu){const r=qe.fromString(e,...n);return F_(r),new $t(t,null,new ie(r))}{if(!(t instanceof $t||t instanceof Lr))throw new K(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return F_(r),new $t(t.firestore,t instanceof Lr?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new ow(this,"async_queue_retry"),this.ou=()=>{const n=vh();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=vh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Jn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Pa(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=wp.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&fe()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class zs extends vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new hx}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pw(this),this._firestoreClient.terminate()}}function dx(t,e){const n=typeof t=="object"?t:yT(),r=typeof t=="string"?t:e||"(default)",i=Lf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sk("firestore");s&&lx(i,...s)}return i}function Rp(t){return t._firestoreClient||Pw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pw(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new WL(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Rw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nx(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ns(Rt.fromBase64String(e))}catch(n){throw new K(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ns(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=/^__.*__$/;class px{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}class Ow{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Eu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Eu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return al(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Nw(this.Tu)&&fx.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class mx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pu(e)}wu(e,n,r,i=!1){return new Eu({Tu:e,methodName:n,yu:r,path:wt.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pp(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new mx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gx(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);Np("Data must be an object, but it was:",o,r);const a=Dw(r,o);let c,l;if(s.merge)c=new Kt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Sd(e,h,n);if(!o.contains(d))throw new K(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mw(u,d)||u.push(d)}c=new Kt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new px(new xt(a),c,l)}class Tu extends Gs{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tu}}function kw(t,e,n){return new Eu({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Op extends Gs{_toFieldTransform(e){return new dp(e.path,new ca)}isEqual(e){return e instanceof Op}}class _x extends Gs{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=kw(this,e,!0),r=this.Su.map(s=>Di(s,n)),i=new Rs(r);return new dp(e.path,i)}isEqual(e){return this===e}}class vx extends Gs{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=kw(this,e,!0),r=this.Su.map(s=>Di(s,n)),i=new Ss(r);return new dp(e.path,i)}isEqual(e){return this===e}}function yx(t,e,n,r){const i=t.wu(1,e,n);Np("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();Oi(r,(c,l)=>{const u=kp(e,c,n);l=ze(l);const h=i.mu(u);if(l instanceof Tu)s.push(u);else{const d=Di(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Kt(s);return new Ow(o,a,i.fieldTransforms)}function Ex(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[Sd(e,r,n)],c=[i];if(s.length%2!=0)throw new K(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Sd(e,s[d])),c.push(s[d+1]);const l=[],u=xt.empty();for(let d=a.length-1;d>=0;--d)if(!Mw(l,a[d])){const f=a[d];let _=c[d];_=ze(_);const g=o.mu(f);if(_ instanceof Tu)l.push(f);else{const y=Di(_,g);y!=null&&(l.push(f),u.set(f,y))}}const h=new Kt(l);return new Ow(u,h,o.fieldTransforms)}function Tx(t,e,n,r=!1){return Di(n,t.wu(r?4:3,e))}function Di(t,e){if(Lw(t=ze(t)))return Np("Unsupported field value:",e,t),Dw(t,e);if(t instanceof Gs)return function(r,i){if(!Nw(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Di(a,i.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ct.fromDate(r);return{timestampValue:sl(i.serializer,s)}}if(r instanceof ct){const s=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sl(i.serializer,s)}}if(r instanceof Sp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ns)return{bytesValue:JI(i.serializer,r._byteString)};if(r instanceof $t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${_u(r)}`)}(t,e)}function Dw(t,e){const n={};return CI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oi(t,(r,i)=>{const s=Di(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Lw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof Sp||t instanceof Ns||t instanceof $t||t instanceof Gs)}function Np(t,e,n){if(!Lw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_u(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Sd(t,e,n){if((e=ze(e))instanceof yu)return e._internalPath;if(typeof e=="string")return kp(t,e);throw al("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ix=new RegExp("[~\\*/\\[\\]]");function kp(t,e,n){if(e.search(Ix)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yu(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new K(b.INVALID_ARGUMENT,a+t+c)}function Mw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wx extends Vw{data(){return super.data()}}function Dp(t,e){return typeof e=="string"?kp(t,e):e instanceof yu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}class xw extends Lp{}function bx(t,e,...n){let r=[];e instanceof Lp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Vp).length,a=s.filter(c=>c instanceof Mp).length;if(o>1||o>0&&a>0)throw new K(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mp extends xw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mp(e,n,r)}_apply(e){const n=this._parse(e);return $w(e._query,n),new ki(e.firestore,e.converter,Ed(e._query,n))}_parse(e){const n=Pp(e.firestore);return function(s,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new K(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){H_(h,u);const f=[];for(const _ of h)f.push(j_(c,s,_));d={arrayValue:{values:f}}}else d=j_(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||H_(h,u),d=Tx(a,o,h,u==="in"||u==="not-in");return it.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Vp extends Lp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)$w(o,c),o=Ed(o,c)}(e._query,n),new ki(e.firestore,e.converter,Ed(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xp extends xw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new as(s,o);return function(l,u){if(hp(l)===null){const h=cu(l);h!==null&&Fw(l,h,u.field)}}(i,a),a}(e._query,this._field,this._direction);return new ki(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new qs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Cx(t,e="asc"){const n=e,r=Dp("orderBy",t);return xp._create(r,n)}function j_(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new K(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!MI(e)&&n.indexOf("/")!==-1)throw new K(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!ie.isDocumentKey(r))throw new K(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return d_(t,new ie(r))}if(n instanceof $t)return d_(t,n._key);throw new K(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_u(n)}.`)}function H_(t,e){if(!Array.isArray(t)||t.length===0)throw new K(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $w(t,e){if(e.isInequality()){const r=cu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new K(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=hp(t);s!==null&&Fw(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Fw(t,e,n){if(!n.isEqual(e))throw new K(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Rx{convertValue(e,n="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Oi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sp(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=op(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);We(rw(r));const i=new oa(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uw extends Vw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ic extends Uw{data(e={}){return super.data(e)}}class Px{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _o(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ic(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Ic(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _o(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ic(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _o(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Ox(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ox(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t){t=ar(t,$t);const e=ar(t.firestore,zs);return ox(Rp(e),t._key).then(n=>Mx(e,t,n))}class Bw extends Rx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function kx(t){t=ar(t,ki);const e=ar(t.firestore,zs),n=Rp(e),r=new Bw(e);return Ax(t._query),ax(n,t._query).then(i=>new Px(e,r,t,i))}function cc(t,e,n,...r){t=ar(t,$t);const i=ar(t.firestore,zs),s=Pp(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof yu?Ex(s,"updateDoc",t._key,e,n,r):yx(s,"updateDoc",t._key,e),$p(i,[o.toMutation(t._key,vn.exists(!0))])}function Dx(t){return $p(ar(t.firestore,zs),[new fp(t._key,vn.none())])}function Lx(t,e){const n=ar(t.firestore,zs),r=ii(t),i=Sx(t.converter,e);return $p(n,[gx(Pp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function $p(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>KV(await sx(r),i,s)),s.promise}(Rp(t),e)}function Mx(t,e,n){const r=n.docs.get(e._key),i=new Bw(t);return new Uw(t,i,e._key,r,new _o(n.hasPendingWrites,n.fromCache),e.converter)}function Vx(){return new Op("serverTimestamp")}function q_(...t){return new _x("arrayUnion",t)}function W_(...t){return new vx("arrayRemove",t)}(function(e,n=!0){(function(i){Hs=i})(dr),Br(new rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zs(new NL(r.getProvider("auth-internal")),new ML(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new K(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Dn(c_,"4.1.3",e),Dn(c_,"4.1.3","esm2017")})();var Pd=function(t,e){return Pd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Pd(t,e)};function Ke(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Pd(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var je=function(){return je=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},je.apply(this,arguments)};function Ys(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function V(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{l(r.next(u))}catch(h){o(h)}}function c(u){try{l(r.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function x(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(n=0)),n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function on(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function K_(t){return t!==void 0&&t.enterprise!==void 0}let xx=class{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}};function jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $x=jw,Hw=new Gr("auth","Firebase",jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new ql("@firebase/auth");function Fx(t,...e){cl.logLevel<=we.WARN&&cl.warn(`Auth (${dr}): ${t}`,...e)}function wc(t,...e){cl.logLevel<=we.ERROR&&cl.error(`Auth (${dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw Fp(t,...e)}function Vn(t,...e){return Fp(t,...e)}function Ux(t,e,n){const r=Object.assign(Object.assign({},$x()),{[e]:n});return new Gr("auth","Firebase",r).create(e,{appName:t.name})}function Fp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hw.create(t,...e)}function de(t,e,...n){if(!t)throw Fp(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wc(e),new Error(e)}function cr(t,e){t||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bx(){return z_()==="http:"||z_()==="https:"}function z_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bx()||dT()||"connection"in navigator)?navigator.onLine:!0}function Hx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=hT()||fT()}get(){return jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qw=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new La(3e4,6e4);function Li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,r,i={}){return Ww(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),qw.fetch()(Kw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ww(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qx),e);try{const i=new Kx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw lc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw lc(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ux(t,u,l);In(t,u)}}catch(i){if(i instanceof un)throw i;In(t,"network-request-failed",{message:String(i)})}}async function Ma(t,e,n,r,i={}){const s=await Mi(t,e,n,r,i);return"mfaPendingCredential"in s&&In(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Kw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Up(t.config,i):`${t.config.apiScheme}://${i}`}let Kx=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),Wx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function lc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vn(t,e,r);return i.customData._tokenResponse=n,i}async function zx(t,e){return Mi(t,"GET","/v2/recaptchaConfig",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function Yx(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qx(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=Bp(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mo(Eh(i.auth_time)),issuedAtTime:Mo(Eh(i.iat)),expirationTime:Mo(Eh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Eh(t){return Number(t)*1e3}function Bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nf(n);return i?JSON.parse(i):(wc("Failed to decode base64 JWT payload"),null)}catch(i){return wc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xx(t){const e=Bp(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&Jx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zx=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zw=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await la(t,Yx(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?n2(s.providerUserInfo):[],a=t2(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zw(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function e2(t){const e=ze(t);await ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function n2(t){return t.map(e=>{var{providerId:n}=e,r=Ys(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(t,e){const n=await Ww(t,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Kw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_=class Nd{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return de(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await r2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Nd;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(de(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nd,this.toJSON())}_performRefresh(){return Kn("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let kd=class Ac{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ys(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await la(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qx(this,e)}reload(){return e2(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ac(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await la(this,Gx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:E,isAnonymous:F,providerData:z,stsTokenManager:Z}=n;de(A&&Z,e,"internal-error");const D=G_.fromJSON(this.name,Z);de(typeof A=="string",e,"internal-error"),vr(h,e.name),vr(d,e.name),de(typeof E=="boolean",e,"internal-error"),de(typeof F=="boolean",e,"internal-error"),vr(f,e.name),vr(_,e.name),vr(g,e.name),vr(y,e.name),vr(T,e.name),vr(R,e.name);const L=new Ac({uid:A,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:F,photoURL:_,phoneNumber:f,tenantId:g,stsTokenManager:D,createdAt:T,lastLoginAt:R});return z&&Array.isArray(z)&&(L.providerData=z.map(W=>Object.assign({},W))),y&&(L._redirectEventId=y),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new G_;i.updateFromServerResponse(n);const s=new Ac({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ll(s),s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Map;function zn(t){cr(t instanceof Function,"Expected a class definition");let e=Y_.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Y_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gw=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};Gw.type="NONE";const Q_=Gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e,n){return`firebase:${t}:${e}:${n}`}let X_=class Cc{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bc(this.userKey,i.apiKey,s),this.fullPersistenceKey=bc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cc(zn(Q_),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||zn(Q_);const o=bc(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=kd._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Cc(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Cc(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zw(e))return"Blackberry";if(eA(e))return"Webos";if(jp(e))return"Safari";if((e.includes("chrome/")||Qw(e))&&!e.includes("edge/"))return"Chrome";if(Jw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yw(t=$e()){return/firefox\//i.test(t)}function jp(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qw(t=$e()){return/crios\//i.test(t)}function Xw(t=$e()){return/iemobile/i.test(t)}function Jw(t=$e()){return/android/i.test(t)}function Zw(t=$e()){return/blackberry/i.test(t)}function eA(t=$e()){return/webos/i.test(t)}function Iu(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function i2(t=$e()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s2(){return pT()&&document.documentMode===10}function tA(t=$e()){return Iu(t)||Jw(t)||eA(t)||Zw(t)||/windows phone/i.test(t)||Xw(t)}function o2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e=[]){let n;switch(t){case"Browser":n=J_($e());break;case"Worker":n=`${J_($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a2=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2(t,e={}){return Mi(t,"GET","/v2/passwordPolicy",Li(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=6;let u2=class{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:l2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h2=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Z_(this),this.idTokenSubscription=new Z_(this),this.beforeStateQueue=new a2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await X_.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await c2(this),n=new u2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await X_.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function Vi(t){return ze(t)}let Z_=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=mT(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",d2().appendChild(r)})}function f2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const p2="https://www.google.com/recaptcha/enterprise.js?render=",m2="recaptcha-enterprise",g2="NO_RECAPTCHA";let _2=class{constructor(e){this.type=m2,this.auth=Vi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new xx(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;K_(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(g2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&K_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rA(p2+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}};async function ul(t,e,n,r=!1){const i=new _2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(t,e){const n=Lf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zc(s,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function y2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function E2(t,e,n){const r=Vi(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=iA(e),{host:o,port:a}=T2(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||I2()}function iA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function T2(t){const e=iA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ev(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ev(o)}}}function ev(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hp=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}};async function w2(t,e){return Mi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t,e){return Ma(t,"POST","/v1/accounts:signInWithPassword",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}async function b2(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Hp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ul(e,r,"signInWithPassword");return Th(e,i)}else return Th(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ul(e,r,"signInWithPassword");return Th(e,s)}else return Promise.reject(i)});case"emailLink":return A2(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return w2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return b2(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return Ma(t,"POST","/v1/accounts:signInWithIdp",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="http://localhost";let wu=class Dd extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dd(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ys(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dd(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:C2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yr(n)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S2(t){const e=uo(ho(t)).link,n=e?uo(ho(e)).deep_link_id:null,r=uo(ho(t)).deep_link_id;return(r?uo(ho(r)).link:null)||r||n||e||t}class qp{constructor(e){var n,r,i,s,o,a;const c=uo(ho(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=R2((i=c.mode)!==null&&i!==void 0?i:null);de(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=S2(e);try{return new qp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return de(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sA=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va=class extends sA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Va{constructor(){super("facebook.com")}static credential(e){return wu._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wu._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Va{constructor(){super("github.com")}static credential(e){return wu._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Va{constructor(){super("twitter.com")}static credential(e,n){return wu._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(t,e){return Ma(t,"POST","/v1/accounts:signUp",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au=class Ld{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kd._fromIdTokenResponse(e,r,i),o=tv(r);return new Ld({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tv(r);return new Ld({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function tv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P2=class Md extends un{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Md.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Md(e,n,r,i)}};function oA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?P2._fromErrorAndOperation(t,s,e,r):s})}async function O2(t,e,n=!1){const r=await la(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Au._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await la(t,oA(r,i,e,t),n);de(s.idToken,r,"internal-error");const o=Bp(s.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Au._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&In(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e,n=!1){const r="signIn",i=await oA(t,r,e),s=await Au._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function k2(t,e){return aA(Vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t){const e=Vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function D2(t,e,n){var r;const i=Vi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ul(i,s,"signUpPassword");o=Ih(i,l)}else o=Ih(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ul(i,s,"signUpPassword");return Ih(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cA(t),l}),c=await Au._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function L2(t,e,n){return k2(ze(t),Qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cA(t),r})}function M2(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function V2(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function x2(t){return ze(t).signOut()}async function $2(t){return ze(t).delete()}const hl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lA=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hl,"1"),this.storage.removeItem(hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(){const t=$e();return jp(t)||Iu(t)}const U2=1e3,B2=10;class uA extends lA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=F2()&&o2(),this.fallbackToPolling=tA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,B2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uA.type="LOCAL";const j2=uA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA extends lA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hA.type="SESSION";const dA=hA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await H2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Wp("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function W2(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function K2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function G2(){return fA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="firebaseLocalStorageDb",Y2=1,dl="firebaseLocalStorage",mA="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([dl],e?"readwrite":"readonly").objectStore(dl)}function Q2(){const t=indexedDB.deleteDatabase(pA);return new xa(t).toPromise()}function Vd(){const t=indexedDB.open(pA,Y2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dl,{keyPath:mA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dl)?e(r):(r.close(),await Q2(),e(await Vd()))})})}async function nv(t,e,n){const r=Cu(t,!0).put({[mA]:e,value:n});return new xa(r).toPromise()}async function X2(t,e){const n=Cu(t,!1).get(e),r=await new xa(n).toPromise();return r===void 0?null:r.value}function rv(t,e){const n=Cu(t,!0).delete(e);return new xa(n).toPromise()}const J2=800,Z2=3;class gA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bu._getInstance(G2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await K2(),!this.activeServiceWorker)return;this.sender=new q2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vd();return await nv(e,hl,"1"),await rv(e,hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>X2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cu(i,!1).getAll();return new xa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gA.type="LOCAL";const e$=gA;new La(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t$(t,e){return e?zn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp=class extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function n$(t){return aA(t.auth,new Kp(t),t.bypassAuthState)}function r$(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),N2(n,new Kp(t),t.bypassAuthState)}async function i$(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),O2(n,new Kp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _A=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n$;case"linkViaPopup":case"linkViaRedirect":return i$;case"reauthViaPopup":case"reauthViaRedirect":return r$;default:In(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s$=new La(2e3,1e4);class es extends _A{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s$.get())};e()}}es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$="pendingRedirect",Rc=new Map;class a$ extends _A{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rc.get(this.auth._key());if(!e){try{const r=await c$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rc.set(this.auth._key(),e)}return this.bypassAuthState||Rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c$(t,e){const n=h$(e),r=u$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function l$(t,e){Rc.set(t._key(),e)}function u$(t){return zn(t._redirectPersistence)}function h$(t){return bc(o$,t.config.apiKey,t.name)}async function d$(t,e,n=!1){const r=Vi(t),i=t$(r,e),o=await new a$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f$=10*60*1e3;let p$=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f$&&this.cachedEventUids.clear(),this.cachedEventUids.has(iv(e))}saveEventToCache(e){this.cachedEventUids.add(iv(e)),this.lastProcessedEventTime=Date.now()}};function iv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g$(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v$=/^https?/;async function y$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g$(t);for(const n of e)try{if(E$(n))return}catch{}In(t,"unauthorized-domain")}function E$(t){const e=Od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v$.test(n))return!1;if(_$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T$=new La(3e4,6e4);function sv(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I$(t){return new Promise((e,n)=>{var r,i,s;function o(){sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sv(),n(Vn(t,"network-request-failed"))},timeout:T$.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const a=f2("iframefcb");return xn()[a]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},rA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sc=null,e})}let Sc=null;function w$(t){return Sc=Sc||I$(t),Sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A$=new La(5e3,15e3),b$="__/auth/iframe",C$="emulator/auth/iframe",R$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P$(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Up(e,C$):`https://${t.config.authDomain}/${b$}`,r={apiKey:e.apiKey,appName:t.name,v:dr},i=S$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yr(r).slice(1)}`}async function O$(t){const e=await w$(t),n=xn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:P$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),a=xn().setTimeout(()=>{s(o)},A$.get());function c(){xn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k$=500,D$=600,L$="_blank",M$="http://localhost";class ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V$(t,e,n,r=k$,i=D$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},N$),{width:r.toString(),height:i.toString(),top:s,left:o}),l=$e().toLowerCase();n&&(a=Qw(l)?L$:n),Yw(l)&&(e=e||M$,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(i2(l)&&a!=="_self")return x$(e||"",a),new ov(null);const h=window.open(e||"",a,u);de(h,t,"popup-blocked");try{h.focus()}catch{}return new ov(h)}function x$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $$="__/auth/handler",F$="emulator/auth/handler",U$=encodeURIComponent("fac");async function av(t,e,n,r,i,s){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:dr,eventId:i};if(e instanceof sA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Va){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${U$}=${encodeURIComponent(c)}`:"";return`${B$(t)}?${Yr(a).slice(1)}${l}`}function B$({config:t}){return t.emulator?Up(t,F$):`https://${t.authDomain}/${$$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="webStorageSupport";class j${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dA,this._completeRedirectFn=d$,this._overrideRedirectResult=l$}async _openPopup(e,n,r,i){var s;cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await av(e,n,r,Od(),i);return V$(e,o,Wp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await av(e,n,r,Od(),i);return W2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await O$(e),r=new p$(e);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wh,{type:wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wh];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tA()||jp()||Iu()}}const H$=j$;var cv="@firebase/auth",lv="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q$=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function K$(t){Br(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nA(t)},l=new h2(r,i,s,c);return y2(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new rr("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(r=>new q$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(cv,lv,W$(t)),Dn(cv,lv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z$=5*60,G$=uT("authIdTokenMaxAge")||z$;let uv=null;const Y$=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>G$)return;const i=n==null?void 0:n.token;uv!==i&&(uv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q$(t=yT()){const e=Lf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=v2(t,{popupRedirectResolver:H$,persistence:[e$,j2,dA]}),r=uT("authTokenSyncURL");if(r){const s=Y$(r);V2(n,s,()=>s(n.currentUser)),M2(n,o=>s(o))}const i=cT("auth");return i&&E2(n,`http://${i}`),n}K$("Browser");const X$={apiKey:"AIzaSyAXkS6Z-RZT1hWQl5HYmwmMgToTPQw1b6o",authDomain:"budget-1989d.firebaseapp.com",projectId:"budget-1989d",storageBucket:"budget-1989d.appspot.com",messagingSenderId:"38010155706",appId:"1:38010155706:web:28226ce2d814a431084883"},J$=vT(X$),si=dx(J$),hv=ux(si,"budgets"),ao=Q$();var Z$=Object.defineProperty,dv=Object.getOwnPropertySymbols,eF=Object.prototype.hasOwnProperty,tF=Object.prototype.propertyIsEnumerable,fv=(t,e,n)=>e in t?Z$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,yA=(t,e)=>{for(var n in e||(e={}))eF.call(e,n)&&fv(t,n,e[n]);if(dv)for(var n of dv(e))tF.call(e,n)&&fv(t,n,e[n]);return t},Ru=t=>typeof t=="function",Su=t=>typeof t=="string",EA=t=>Su(t)&&t.trim().length>0,nF=t=>typeof t=="number",gi=t=>typeof t>"u",ha=t=>typeof t=="object"&&t!==null,rF=t=>$n(t,"tag")&&EA(t.tag),TA=t=>window.TouchEvent&&t instanceof TouchEvent,IA=t=>$n(t,"component")&&wA(t.component),iF=t=>Ru(t)||ha(t),wA=t=>!gi(t)&&(Su(t)||iF(t)||IA(t)),pv=t=>ha(t)&&["height","width","right","left","top","bottom"].every(e=>nF(t[e])),$n=(t,e)=>(ha(t)||Ru(t))&&e in t,sF=(t=>()=>t++)(0);function Ah(t){return TA(t)?t.targetTouches[0].clientX:t.clientX}function mv(t){return TA(t)?t.targetTouches[0].clientY:t.clientY}var oF=t=>{gi(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},$a=t=>IA(t)?$a(t.component):rF(t)?Jt({render(){return t}}):typeof t=="string"?t:Ae(le(t)),aF=t=>{if(typeof t=="string")return t;const e=$n(t,"props")&&ha(t.props)?t.props:{},n=$n(t,"listeners")&&ha(t.listeners)?t.listeners:{};return{component:$a(t),props:e,listeners:n}},cF=()=>typeof window<"u",zp=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(r=>r(e))}},lF=t=>["on","off","emit"].every(e=>$n(t,e)&&Ru(t[e])),Ht;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Ht||(Ht={}));var fl;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(fl||(fl={}));var qt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(qt||(qt={}));var gn="Vue-Toastification",dn={type:{type:String,default:Ht.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},AA={type:dn.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Pc={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:dn.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},xd={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},bA={transition:{type:[Object,String],default:`${gn}__bounce`}},uF={position:{type:String,default:fl.TOP_RIGHT},draggable:dn.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:dn.trueBoolean,pauseOnHover:dn.trueBoolean,closeOnClick:dn.trueBoolean,timeout:xd.timeout,hideProgressBar:xd.hideProgressBar,toastClassName:dn.classNames,bodyClassName:dn.classNames,icon:AA.customIcon,closeButton:Pc.component,closeButtonClassName:Pc.classNames,showCloseButtonOnHover:Pc.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new zp}},hF={id:{type:[String,Number],required:!0,default:0},type:dn.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},dF={container:{type:[Object,Function],default:()=>document.body},newestOnTop:dn.trueBoolean,maxToasts:{type:Number,default:20},transition:bA.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:dn.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Zn={CORE_TOAST:uF,TOAST:hF,CONTAINER:dF,PROGRESS_BAR:xd,ICON:AA,TRANSITION:bA,CLOSE_BUTTON:Pc},CA=Jt({name:"VtProgressBar",props:Zn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${gn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function fF(t,e){return ce(),Te("div",{style:jt(t.style),class:$r(t.cpClass)},null,6)}CA.render=fF;var pF=CA,RA=Jt({name:"VtCloseButton",props:Zn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?$a(this.component):"button"},classes(){const t=[`${gn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),mF=mt(" × ");function gF(t,e){return ce(),mn(Vl(t.buttonComponent),Fl({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Vt(()=>[mF]),_:1},16,["aria-label","class"])}RA.render=gF;var _F=RA,SA={},vF={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},yF=k("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),EF=[yF];function TF(t,e){return ce(),Te("svg",vF,EF)}SA.render=TF;var IF=SA,PA={},wF={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},AF=k("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),bF=[AF];function CF(t,e){return ce(),Te("svg",wF,bF)}PA.render=CF;var gv=PA,OA={},RF={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},SF=k("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),PF=[SF];function OF(t,e){return ce(),Te("svg",RF,PF)}OA.render=OF;var NF=OA,NA={},kF={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},DF=k("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),LF=[DF];function MF(t,e){return ce(),Te("svg",kF,LF)}NA.render=MF;var VF=NA,kA=Jt({name:"VtIcon",props:Zn.ICON,computed:{customIconChildren(){return $n(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Su(this.customIcon)?this.trimValue(this.customIcon):$n(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return $n(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:wA(this.customIcon)?$a(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Ht.DEFAULT]:gv,[Ht.INFO]:gv,[Ht.SUCCESS]:IF,[Ht.ERROR]:VF,[Ht.WARNING]:NF}[this.type]},iconClasses(){const t=[`${gn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return EA(t)?t.trim():e}}});function xF(t,e){return ce(),mn(Vl(t.component),{class:$r(t.iconClasses)},{default:Vt(()=>[mt(Wt(t.customIconChildren),1)]),_:1},8,["class"])}kA.render=xF;var $F=kA,DA=Jt({name:"VtToast",components:{ProgressBar:pF,CloseButton:_F,Icon:$F},inheritAttrs:!1,props:Object.assign({},Zn.CORE_TOAST,Zn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${gn}__toast`,`${gn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${gn}__toast--rtl`),t},bodyClasses(){return[`${gn}__toast-${Su(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return pv(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:$n,getVueComponentFromObj:$a,closeToast(){this.eventBus.emit(qt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:Ah(t),y:mv(t)},this.dragStart=Ah(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Ah(t),y:mv(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,pv(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),FF=["role"];function UF(t,e){const n=wo("Icon"),r=wo("CloseButton"),i=wo("ProgressBar");return ce(),Te("div",{class:$r(t.classes),style:jt(t.draggableStyle),onClick:e[0]||(e[0]=(...s)=>t.clickHandler&&t.clickHandler(...s)),onMouseenter:e[1]||(e[1]=(...s)=>t.hoverPause&&t.hoverPause(...s)),onMouseleave:e[2]||(e[2]=(...s)=>t.hoverPlay&&t.hoverPlay(...s))},[t.icon?(ce(),mn(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Ot("v-if",!0),k("div",{role:t.accessibility.toastRole||"alert",class:$r(t.bodyClasses)},[typeof t.content=="string"?(ce(),Te(Je,{key:0},[mt(Wt(t.content),1)],2112)):(ce(),mn(Vl(t.getVueComponentFromObj(t.content)),Fl({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},OO(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,FF),t.closeButton?(ce(),mn(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:vc(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Ot("v-if",!0),t.timeout?(ce(),mn(i,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Ot("v-if",!0)],38)}DA.render=UF;var BF=DA,LA=Jt({name:"VtTransition",props:Zn.TRANSITION,emits:["leave"],methods:{hasProp:$n,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function jF(t,e){return ce(),mn(zh,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Vt(()=>[PO(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}LA.render=jF;var HF=LA,MA=Jt({name:"VueToastification",devtools:{hide:!0},components:{Toast:BF,VtTransition:HF},props:Object.assign({},Zn.CORE_TOAST,Zn.CONTAINER,Zn.TRANSITION),data(){return{count:0,positions:Object.values(fl),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(qt.ADD,this.addToast),t.on(qt.CLEAR,this.clearToasts),t.on(qt.DISMISS,this.dismissToast),t.on(qt.UPDATE,this.updateToast),t.on(qt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){Ru(t)&&(t=await t()),oF(this.$el),t.appendChild(this.$el)},setToast(t){gi(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=aF(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!gi(e)&&!gi(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){gi(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${gn}__container`,t].concat(this.defaults.containerClassName)}}});function qF(t,e){const n=wo("Toast"),r=wo("VtTransition");return ce(),Te("div",null,[(ce(!0),Te(Je,null,Ao(t.positions,i=>(ce(),Te("div",{key:i},[Fe(r,{transition:t.defaults.transition,class:$r(t.getClasses(i))},{default:Vt(()=>[(ce(!0),Te(Je,null,Ao(t.getPositionToasts(i),s=>(ce(),mn(n,Fl({key:s.id},s),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}MA.render=qF;var WF=MA,_v=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new zp;e&&Nl(()=>{const s=HE(WF,yA({},t)),o=s.mount(document.createElement("div")),a=t.onMounted;if(gi(a)||a(o,s),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${gn}] App to share context with was not provided.`):(s._context.components=c._context.components,s._context.directives=c._context.directives,s._context.mixins=c._context.mixins,s._context.provides=c._context.provides,s.config.globalProperties=c.config.globalProperties)}});const r=(s,o)=>{const a=Object.assign({},{id:sF(),type:Ht.DEFAULT},o,{content:s});return n.emit(qt.ADD,a),a.id};r.clear=()=>n.emit(qt.CLEAR,void 0),r.updateDefaults=s=>{n.emit(qt.UPDATE_DEFAULTS,s)},r.dismiss=s=>{n.emit(qt.DISMISS,s)};function i(s,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(qt.UPDATE,{id:s,options:l,create:c})}return r.update=i,r.success=(s,o)=>r(s,Object.assign({},o,{type:Ht.SUCCESS})),r.info=(s,o)=>r(s,Object.assign({},o,{type:Ht.INFO})),r.error=(s,o)=>r(s,Object.assign({},o,{type:Ht.ERROR})),r.warning=(s,o)=>r(s,Object.assign({},o,{type:Ht.WARNING})),r},KF=()=>{const t=()=>console.warn(`[${gn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function $d(t){return cF()?lF(t)?_v({eventBus:t},!1):_v(t,!0):KF()}var VA=Symbol("VueToastification"),xA=new zp,zF=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=$d(yA({eventBus:xA},e));t.provide(VA,n)},GF=t=>{if(t)return $d(t);const e=bf()?zt(VA,void 0):void 0;return e||$d(xA)},YF=zF,vv="__sak";function yv(t){return t!==void 0&&t.enterprise!==void 0}var QF=function(){function t(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(function(n){return n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF"})}return t}();function $A(){var t;return t={},t["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",t}var XF=$A,Fd=new Gr("auth","Firebase",$A());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var us=new ql("@firebase/auth");function JF(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];us.logLevel<=we.WARN&&us.warn.apply(us,on(["Auth (".concat(dr,"): ").concat(t)],e,!1))}function Oc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];us.logLevel<=we.ERROR&&us.error.apply(us,on(["Auth (".concat(dr,"): ").concat(t)],e,!1))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];throw Gp.apply(void 0,on([t],e,!1))}function Pu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Gp.apply(void 0,on([t],e,!1))}function ZF(t,e,n){var r,i=je(je({},XF()),(r={},r[e]=n,r)),s=new Gr("auth","Firebase",i);return s.create(e,{appName:t.name})}function Gp(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t!="string"){var i=n[0],s=on([],n.slice(1),!0);return s[0]&&(s[0].appName=t.name),(e=t._errorFactory).create.apply(e,on([i],s,!1))}return Fd.create.apply(Fd,on([t],n,!1))}function Ie(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!t)throw Gp.apply(void 0,on([e],n,!1))}function Gn(t){var e="INTERNAL ASSERTION FAILED: "+t;throw Oc(e),new Error(e)}function ks(t,e){t||Gn(e)}function eU(){return Ev()==="http:"||Ev()==="https:"}function Ev(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eU()||dT()||"connection"in navigator)?navigator.onLine:!0}function nU(){if(typeof navigator>"u")return null;var t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rU=function(){function t(e,n){this.shortDelay=e,this.longDelay=n,ks(n>e,"Short delay should be less than long delay!"),this.isMobile=hT()||fT()}return t.prototype.get=function(){return tU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(t,e){ks(t.emulator,"Emulator should always be set here");var n=t.emulator.url;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var FA=function(){function t(){}return t.initialize=function(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)},t.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,sU=(ae={},ae.CREDENTIAL_MISMATCH="custom-token-mismatch",ae.MISSING_CUSTOM_TOKEN="internal-error",ae.INVALID_IDENTIFIER="invalid-email",ae.MISSING_CONTINUE_URI="internal-error",ae.INVALID_PASSWORD="wrong-password",ae.MISSING_PASSWORD="missing-password",ae.EMAIL_EXISTS="email-already-in-use",ae.PASSWORD_LOGIN_DISABLED="operation-not-allowed",ae.INVALID_IDP_RESPONSE="invalid-credential",ae.INVALID_PENDING_TOKEN="invalid-credential",ae.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",ae.MISSING_REQ_TYPE="internal-error",ae.EMAIL_NOT_FOUND="user-not-found",ae.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",ae.EXPIRED_OOB_CODE="expired-action-code",ae.INVALID_OOB_CODE="invalid-action-code",ae.MISSING_OOB_CODE="internal-error",ae.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",ae.INVALID_ID_TOKEN="invalid-user-token",ae.TOKEN_EXPIRED="user-token-expired",ae.USER_NOT_FOUND="user-token-expired",ae.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",ae.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",ae.INVALID_CODE="invalid-verification-code",ae.INVALID_SESSION_INFO="invalid-verification-id",ae.INVALID_TEMPORARY_PROOF="invalid-credential",ae.MISSING_SESSION_INFO="missing-verification-id",ae.SESSION_EXPIRED="code-expired",ae.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",ae.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",ae.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",ae.ADMIN_ONLY_OPERATION="admin-restricted-operation",ae.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",ae.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",ae.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",ae.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",ae.SECOND_FACTOR_EXISTS="second-factor-already-in-use",ae.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",ae.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",ae.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",ae.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",ae.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",ae.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",ae.MISSING_CLIENT_TYPE="missing-client-type",ae.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",ae.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",ae.INVALID_REQ_TYPE="invalid-req-type",ae);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oU=new rU(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?je(je({},e),{tenantId:t.tenantId}):e}function Xs(t,e,n,r,i){return i===void 0&&(i={}),V(this,void 0,void 0,function(){var s=this;return x(this,function(o){return[2,UA(t,i,function(){return V(s,void 0,void 0,function(){var a,c,l,u;return x(this,function(h){switch(h.label){case 0:return a={},c={},r&&(e==="GET"?c=r:a={body:JSON.stringify(r)}),l=Yr(je({key:t.config.apiKey},c)).slice(1),[4,t._getAdditionalHeaders()];case 1:return u=h.sent(),u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),[2,FA.fetch()(BA(t,t.config.apiHost,n,l),je({method:e,headers:u,referrerPolicy:"no-referrer"},a))]}})})})]})})}function UA(t,e,n){return V(this,void 0,void 0,function(){var r,i,s,o,a,c,l,u,h,d;return x(this,function(f){switch(f.label){case 0:t._canInitEmulator=!1,r=je(je({},sU),e),f.label=1;case 1:return f.trys.push([1,4,,5]),i=new aU(t),[4,Promise.race([n(),i.promise])];case 2:return s=f.sent(),i.clearNetworkTimeout(),[4,s.json()];case 3:if(o=f.sent(),"needConfirmation"in o)throw vo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return[2,o];if(a=s.ok?o.errorMessage:o.error.message,c=a.split(" : "),l=c[0],u=c[1],l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vo(t,"user-disabled",o);if(h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),u)throw ZF(t,h,u);return lr(t,h),[3,5];case 4:if(d=f.sent(),d instanceof un)throw d;return lr(t,"network-request-failed",{message:String(d)}),[3,5];case 5:return[2]}})})}function xi(t,e,n,r,i){return i===void 0&&(i={}),V(this,void 0,void 0,function(){var s;return x(this,function(o){switch(o.label){case 0:return[4,Xs(t,e,n,r,i)];case 1:return s=o.sent(),"mfaPendingCredential"in s&&lr(t,"multi-factor-auth-required",{_serverResponse:s}),[2,s]}})})}function BA(t,e,n,r){var i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?iU(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}var aU=function(){function t(e){var n=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){n.timer=setTimeout(function(){return i(Pu(n.auth,"network-request-failed"))},oU.get())})}return t.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},t}();function vo(t,e,n){var r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Pu(t,e,r);return i.customData._tokenResponse=n,i}function cU(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,Xs(t,"GET","/v2/recaptchaConfig",fr(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lU(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,Xs(t,"POST","/v1/accounts:delete",e)]})})}function uU(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,Xs(t,"POST","/v1/accounts:lookup",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){if(t)try{var e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function hU(t,e){return e===void 0&&(e=!1),V(this,void 0,void 0,function(){var n,r,i,s,o;return x(this,function(a){switch(a.label){case 0:return n=ze(t),[4,n.getIdToken(e)];case 1:return r=a.sent(),i=Yp(r),Ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider,[2,{claims:i,token:r,authTime:Vo(bh(i.auth_time)),issuedAtTime:Vo(bh(i.iat)),expirationTime:Vo(bh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}]}})})}function bh(t){return Number(t)*1e3}function Yp(t){var e=t.split("."),n=e[0],r=e[1],i=e[2];if(n===void 0||r===void 0||i===void 0)return Oc("JWT malformed, contained fewer than 3 sections"),null;try{var s=Nf(r);return s?JSON.parse(s):(Oc("Failed to decode base64 JWT payload"),null)}catch(o){return Oc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function dU(t){var e=Yp(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t,e,n){return n===void 0&&(n=!1),V(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:if(n)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof un&&fU(r)?t.auth.currentUser!==t?[3,5]:[4,t.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function fU(t){var e=t.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pU=function(){function t(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},t.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},t.prototype.getInterval=function(e){var n;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0,r=i-Date.now()-3e5;return Math.max(0,r)}},t.prototype.schedule=function(e){var n=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return V(n,void 0,void 0,function(){return x(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},t.prototype.iteration=function(){return V(this,void 0,void 0,function(){var e;return x(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jA=function(){function t(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}return t.prototype._initializeTime=function(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)},t.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){var e;return V(this,void 0,void 0,function(){var n,r,i,s,o,a,c,l,u,h;return x(this,function(d){switch(d.label){case 0:return n=t.auth,[4,t.getIdToken()];case 1:return r=d.sent(),[4,da(t,uU(n,{idToken:r}))];case 2:return i=d.sent(),Ie(i==null?void 0:i.users.length,n,"internal-error"),s=i.users[0],t._notifyReloadListener(s),o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_U(s.providerUserInfo):[],a=gU(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jA(s.createdAt,s.lastLoginAt),isAnonymous:u},Object.assign(t,h),[2]}})})}function mU(t){return V(this,void 0,void 0,function(){var e;return x(this,function(n){switch(n.label){case 0:return e=ze(t),[4,pl(e)];case 1:return n.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return n.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function gU(t,e){var n=t.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return on(on([],n,!0),e,!0)}function _U(t){return t.map(function(e){var n=e.providerId,r=Ys(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(t,e){return V(this,void 0,void 0,function(){var n,r=this;return x(this,function(i){switch(i.label){case 0:return[4,UA(t,{},function(){return V(r,void 0,void 0,function(){var s,o,a,c,l,u;return x(this,function(h){switch(h.label){case 0:return s=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),o=t.config,a=o.tokenApiHost,c=o.apiKey,l=BA(t,a,"/v1/token","key=".concat(c)),[4,t._getAdditionalHeaders()];case 1:return u=h.sent(),u["Content-Type"]="application/x-www-form-urlencoded",[2,FA.fetch()(l,{method:"POST",headers:u,body:s})]}})})})];case 1:return n=i.sent(),[2,{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tv=function(){function t(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(t.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),t.prototype.updateFromServerResponse=function(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");var n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dU(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},t.prototype.getToken=function(e,n){return n===void 0&&(n=!1),V(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return Ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?[2,this.accessToken]:this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2];case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},t.prototype.clearRefreshToken=function(){this.refreshToken=null},t.prototype.refresh=function(e,n){return V(this,void 0,void 0,function(){var r,i,s,o;return x(this,function(a){switch(a.label){case 0:return[4,vU(e,n)];case 1:return r=a.sent(),i=r.accessToken,s=r.refreshToken,o=r.expiresIn,this.updateTokensAndExpiration(i,s,Number(o)),[2]}})})},t.prototype.updateTokensAndExpiration=function(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},t.fromJSON=function(e,n){var r=n.refreshToken,i=n.accessToken,s=n.expirationTime,o=new t;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o},t.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},t.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},t.prototype._clone=function(){return Object.assign(new t,this.toJSON())},t.prototype._performRefresh=function(){return Gn("not implemented")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var Ud=function(){function t(e){var n=e.uid,r=e.auth,i=e.stsTokenManager,s=Ys(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?on([],s.providerData,!0):[],this.metadata=new jA(s.createdAt||void 0,s.lastLoginAt||void 0)}return t.prototype.getIdToken=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:return[4,da(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return n=r.sent(),Ie(n,this.auth,"internal-error"),this.accessToken===n?[3,3]:(this.accessToken=n,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,n]}})})},t.prototype.getIdTokenResult=function(e){return hU(this,e)},t.prototype.reload=function(){return mU(this)},t.prototype._assign=function(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(n){return je({},n)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},t.prototype._clone=function(e){var n=new t(je(je({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n},t.prototype._onReload=function(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},t.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},t.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},t.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},t.prototype._updateTokensIfNecessary=function(e,n){return n===void 0&&(n=!1),V(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n?[4,pl(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},t.prototype.delete=function(){return V(this,void 0,void 0,function(){var e;return x(this,function(n){switch(n.label){case 0:return[4,this.getIdToken()];case 1:return e=n.sent(),[4,da(this,lU(this.auth,{idToken:e}))];case 2:return n.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},t.prototype.toJSON=function(){return je(je({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return je({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(t.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),t._fromJSON=function(e,n){var r,i,s,o,a,c,l,u,h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,A=n.uid,E=n.emailVerified,F=n.isAnonymous,z=n.providerData,Z=n.stsTokenManager;Ie(A&&Z,e,"internal-error");var D=Tv.fromJSON(this.name,Z);Ie(typeof A=="string",e,"internal-error"),yr(h,e.name),yr(d,e.name),Ie(typeof E=="boolean",e,"internal-error"),Ie(typeof F=="boolean",e,"internal-error"),yr(f,e.name),yr(_,e.name),yr(g,e.name),yr(y,e.name),yr(T,e.name),yr(R,e.name);var L=new t({uid:A,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:F,photoURL:_,phoneNumber:f,tenantId:g,stsTokenManager:D,createdAt:T,lastLoginAt:R});return z&&Array.isArray(z)&&(L.providerData=z.map(function(W){return je({},W)})),y&&(L._redirectEventId=y),L},t._fromIdTokenResponse=function(e,n,r){return r===void 0&&(r=!1),V(this,void 0,void 0,function(){var i,s;return x(this,function(o){switch(o.label){case 0:return i=new Tv,i.updateFromServerResponse(n),s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,pl(s)];case 1:return o.sent(),[2,s]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Iv=new Map;function Pr(t){ks(t instanceof Function,"Expected a class definition");var e=Iv.get(t);return e?(ks(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Iv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yU=function(){function t(){this.type="NONE",this.storage={}}return t.prototype._isAvailable=function(){return V(this,void 0,void 0,function(){return x(this,function(e){return[2,!0]})})},t.prototype._set=function(e,n){return V(this,void 0,void 0,function(){return x(this,function(r){return this.storage[e]=n,[2]})})},t.prototype._get=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){return n=this.storage[e],[2,n===void 0?null:n]})})},t.prototype._remove=function(e){return V(this,void 0,void 0,function(){return x(this,function(n){return delete this.storage[e],[2]})})},t.prototype._addListener=function(e,n){},t.prototype._removeListener=function(e,n){},t.type="NONE",t}(),wv=yU;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e,n){return"".concat("firebase",":").concat(t,":").concat(e,":").concat(n)}var Av=function(){function t(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;var i=this.auth,s=i.config,o=i.name;this.fullUserKey=Nc(this.userKey,s.apiKey,o),this.fullPersistenceKey=Nc("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},t.prototype.getCurrentUser=function(){return V(this,void 0,void 0,function(){var e;return x(this,function(n){switch(n.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=n.sent(),[2,e?Ud._fromJSON(this.auth,e):null]}})})},t.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},t.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},t.prototype.setPersistence=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return n=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,n?[2,this.setCurrentUser(n)]:[2]}})})},t.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},t.create=function(e,n,r){return r===void 0&&(r="authUser"),V(this,void 0,void 0,function(){var i,s,o,a,c,l,u,h,d,f,_=this;return x(this,function(g){switch(g.label){case 0:return n.length?[4,Promise.all(n.map(function(y){return V(_,void 0,void 0,function(){return x(this,function(T){switch(T.label){case 0:return[4,y._isAvailable()];case 1:return T.sent()?[2,y]:[2,void 0]}})})}))]:[2,new t(Pr(wv),e,r)];case 1:i=g.sent().filter(function(y){return y}),s=i[0]||Pr(wv),o=Nc(r,e.config.apiKey,e.name),a=null,c=0,l=n,g.label=2;case 2:if(!(c<l.length))return[3,7];u=l[c],g.label=3;case 3:return g.trys.push([3,5,,6]),[4,u._get(o)];case 4:return h=g.sent(),h?(d=Ud._fromJSON(e,h),u!==s&&(a=d),s=u,[3,7]):[3,6];case 5:return g.sent(),[3,6];case 6:return c++,[3,2];case 7:return f=i.filter(function(y){return y._shouldAllowMigration}),!s._shouldAllowMigration||!f.length?[2,new t(s,e,r)]:(s=f[0],a?[4,s._set(o,a.toJSON())]:[3,9]);case 8:g.sent(),g.label=9;case 9:return[4,Promise.all(n.map(function(y){return V(_,void 0,void 0,function(){return x(this,function(T){switch(T.label){case 0:if(y===s)return[3,4];T.label=1;case 1:return T.trys.push([1,3,,4]),[4,y._remove(o)];case 2:return T.sent(),[3,4];case 3:return T.sent(),[3,4];case 4:return[2]}})})}))];case 10:return g.sent(),[2,new t(s,e,r)]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){var e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EU(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KA(e))return"Blackberry";if(zA(e))return"Webos";if(HA(e))return"Safari";if((e.includes("chrome/")||TU(e))&&!e.includes("edge/"))return"Chrome";if(WA(e))return"Android";var n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);return(r==null?void 0:r.length)===2?r[1]:"Other"}function EU(t){return t===void 0&&(t=$e()),/firefox\//i.test(t)}function HA(t){t===void 0&&(t=$e());var e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TU(t){return t===void 0&&(t=$e()),/crios\//i.test(t)}function qA(t){return t===void 0&&(t=$e()),/iemobile/i.test(t)}function WA(t){return t===void 0&&(t=$e()),/android/i.test(t)}function KA(t){return t===void 0&&(t=$e()),/blackberry/i.test(t)}function zA(t){return t===void 0&&(t=$e()),/webos/i.test(t)}function GA(t){return t===void 0&&(t=$e()),/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IU(){return pT()&&document.documentMode===10}function wU(t){return t===void 0&&(t=$e()),GA(t)||WA(t)||zA(t)||KA(t)||/windows phone/i.test(t)||qA(t)}function AU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t,e){e===void 0&&(e=[]);var n;switch(t){case"Browser":n=bv($e());break;case"Worker":n="".concat(bv($e()),"-").concat(t);break;default:n=t}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/").concat("JsCore","/").concat(dr,"/").concat(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bU=function(){function t(e){this.auth=e,this.queue=[]}return t.prototype.pushCallback=function(e,n){var r=this,i=function(o){return new Promise(function(a,c){try{var l=e(o);a(l)}catch(u){c(u)}})};i.onAbort=n,this.queue.push(i);var s=this.queue.length-1;return function(){r.queue[s]=function(){return Promise.resolve()}}},t.prototype.runMiddleware=function(e){return V(this,void 0,void 0,function(){var n,r,i,s,o,a,c,l;return x(this,function(u){switch(u.label){case 0:if(this.auth.currentUser===e)return[2];n=[],u.label=1;case 1:u.trys.push([1,6,,7]),r=0,i=this.queue,u.label=2;case 2:return r<i.length?(s=i[r],[4,s(e)]):[3,5];case 3:u.sent(),s.onAbort&&n.push(s.onAbort),u.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(o=u.sent(),n.reverse(),a=0,c=n;a<c.length;a++){l=c[a];try{l()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message});case 7:return[2]}})})},t}();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CU(t,e){return e===void 0&&(e={}),V(this,void 0,void 0,function(){return x(this,function(n){return[2,Xs(t,"GET","/v2/passwordPolicy",fr(t,e))]})})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var RU=6,SU=function(){function t(e){var n,r,i,s,o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RU,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}return t.prototype.validatePassword=function(e){var n,r,i,s,o,a,c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c},t.prototype.validatePasswordLengthOptions=function(e,n){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)},t.prototype.validatePasswordCharacterOptions=function(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},t.prototype.updatePasswordCharacterOptionsStatuses=function(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var PU=function(){function t(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cv(this),this.idTokenSubscription=new Cv(this),this.beforeStateQueue=new bU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return t.prototype._initializeWithPersistence=function(e,n){var r=this;return n&&(this._popupRedirectResolver=Pr(n)),this._initializationPromise=this.queue(function(){return V(r,void 0,void 0,function(){var i,s,o;return x(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,Av.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(n)];case 6:return a.sent(),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},t.prototype._onStorageEvent=function(){return V(this,void 0,void 0,function(){var e;return x(this,function(n){switch(n.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=n.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return n.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return n.sent(),[2]}})})},t.prototype.initializeCurrentUser=function(e){var n;return V(this,void 0,void 0,function(){var r,i,s,o,a,c,l;return x(this,function(u){switch(u.label){case 0:return[4,this.assertedPersistence.getCurrentUser()];case 1:return r=u.sent(),i=r,s=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return u.sent(),o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:c=u.sent(),(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0),u.label=4;case 4:if(!i)return[2,this.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!s)return[3,8];u.label=5;case 5:return u.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(i)];case 6:return u.sent(),[3,8];case 7:return l=u.sent(),i=r,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(l)}),[3,8];case 8:return i?[2,this.reloadAndSetCurrentUserOrClear(i)]:[2,this.directlySetCurrentUser(null)];case 9:return Ie(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return u.sent(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?[2,this.directlySetCurrentUser(i)]:[2,this.reloadAndSetCurrentUserOrClear(i)]}})})},t.prototype.tryRedirectSignIn=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}})})},t.prototype.reloadAndSetCurrentUserOrClear=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,pl(e)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),(n==null?void 0:n.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},t.prototype.useDeviceLanguage=function(){this.languageCode=nU()},t.prototype._delete=function(){return V(this,void 0,void 0,function(){return x(this,function(e){return this._deleted=!0,[2]})})},t.prototype.updateCurrentUser=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){return n=e?ze(e):null,n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(n&&n._clone(this))]})})},t.prototype._updateCurrentUser=function(e,n){return n===void 0&&(n=!1),V(this,void 0,void 0,function(){var r=this;return x(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return V(r,void 0,void 0,function(){return x(this,function(s){switch(s.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return s.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},t.prototype.signOut=function(){return V(this,void 0,void 0,function(){return x(this,function(e){switch(e.label){case 0:return[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},t.prototype.setPersistence=function(e){var n=this;return this.queue(function(){return V(n,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(Pr(e))];case 1:return r.sent(),[2]}})})})},t.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},t.prototype.validatePassword=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return n=this._getPasswordPolicyInternal(),n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,n.validatePassword(e)]}})})},t.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},t.prototype._updatePasswordPolicy=function(){return V(this,void 0,void 0,function(){var e,n;return x(this,function(r){switch(r.label){case 0:return[4,CU(this)];case 1:return e=r.sent(),n=new SU(e),this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n,[2]}})})},t.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},t.prototype._updateErrorMap=function(e){this._errorFactory=new Gr("auth","Firebase",e())},t.prototype.onAuthStateChanged=function(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)},t.prototype.beforeAuthStateChanged=function(e,n){return this.beforeStateQueue.pushCallback(e,n)},t.prototype.onIdTokenChanged=function(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)},t.prototype.authStateReady=function(){var e=this;return new Promise(function(n,r){if(e.currentUser)n();else var i=e.onAuthStateChanged(function(){i(),n()},r)})},t.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},t.prototype._setRedirectUser=function(e,n){return V(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(n)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},t.prototype.getOrInitRedirectPersistenceManager=function(e){return V(this,void 0,void 0,function(){var n,r,i;return x(this,function(s){switch(s.label){case 0:return this.redirectPersistenceManager?[3,3]:(n=e&&Pr(e)||this._popupRedirectResolver,Ie(n,this,"argument-error"),r=this,[4,Av.create(this,[Pr(n._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=s.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=s.sent(),s.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},t.prototype._redirectUserForId=function(e){var n,r;return V(this,void 0,void 0,function(){var i=this;return x(this,function(s){switch(s.label){case 0:return this._isInitialized?[4,this.queue(function(){return V(i,void 0,void 0,function(){return x(this,function(o){return[2]})})})]:[3,2];case 1:s.sent(),s.label=2;case 2:return((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},t.prototype._persistUserIfCurrent=function(e){return V(this,void 0,void 0,function(){var n=this;return x(this,function(r){return e===this.currentUser?[2,this.queue(function(){return V(n,void 0,void 0,function(){return x(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},t.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},t.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},t.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},t.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(t.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),t.prototype.notifyAuthListeners=function(){var e,n;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},t.prototype.registerStateListener=function(e,n,r,i){var s=this;if(this._deleted)return function(){};var o=typeof n=="function"?n:n.next.bind(n),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(c,this,"internal-error"),c.then(function(){a||o(s.currentUser)}),typeof n=="function"){var l=e.addObserver(n,r,i);return function(){a=!0,l()}}else{var u=e.addObserver(n);return function(){a=!0,u()}}},t.prototype.directlySetCurrentUser=function(e){return V(this,void 0,void 0,function(){return x(this,function(n){switch(n.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}})})},t.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(t.prototype,"assertedPersistence",{get:function(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),t.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YA(this.config.clientPlatform,this._getFrameworks()))},t.prototype._getFrameworks=function(){return this.frameworks},t.prototype._getAdditionalHeaders=function(){var e;return V(this,void 0,void 0,function(){var n,r,i,s;return x(this,function(o){switch(o.label){case 0:return n=(s={},s["X-Client-Version"]=this.clientVersion,s),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=o.sent(),r&&(n["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=o.sent(),i&&(n["X-Firebase-AppCheck"]=i),[2,n]}})})},t.prototype._getAppCheckToken=function(){var e;return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return n=r.sent(),n!=null&&n.error&&JF("Error while retrieving App Check token: ".concat(n.error)),[2,n==null?void 0:n.token]}})})},t}();function QA(t){return ze(t)}var Cv=function(){function t(e){var n=this;this.auth=e,this.observer=null,this.addObserver=mT(function(r){return n.observer=r})}return Object.defineProperty(t.prototype,"next",{get:function(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function NU(t){return new Promise(function(e,n){var r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=function(i){var s=Pu("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OU().appendChild(r)})}var kU="https://www.google.com/recaptcha/enterprise.js?render=",DU="recaptcha-enterprise",LU="NO_RECAPTCHA",MU=function(){function t(e){this.type=DU,this.auth=QA(e)}return t.prototype.verify=function(e,n){return e===void 0&&(e="verify"),n===void 0&&(n=!1),V(this,void 0,void 0,function(){function r(o){return V(this,void 0,void 0,function(){var a=this;return x(this,function(c){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return[2,o._agentRecaptchaConfig.siteKey];if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return[2,o._tenantRecaptchaConfigs[o.tenantId].siteKey]}return[2,new Promise(function(l,u){return V(a,void 0,void 0,function(){return x(this,function(h){return cU(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(d){if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{var f=new QF(d);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,l(f.siteKey)}}).catch(function(d){u(d)}),[2]})})})]})})}function i(o,a,c){var l=window.grecaptcha;yv(l)?l.enterprise.ready(function(){l.enterprise.execute(o,{action:e}).then(function(u){a(u)}).catch(function(){a(LU)})}):c(Error("No reCAPTCHA enterprise script loaded."))}var s=this;return x(this,function(o){return[2,new Promise(function(a,c){r(s.auth).then(function(l){if(!n&&yv(window.grecaptcha))i(l,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}NU(kU+l).then(function(){i(l,a,c)}).catch(function(u){c(u)})}}).catch(function(l){c(l)})})]})})},t}();function Rv(t,e,n,r){return r===void 0&&(r=!1),V(this,void 0,void 0,function(){var i,s,o;return x(this,function(a){switch(a.label){case 0:i=new MU(t),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(n)];case 2:return s=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(n,!0)];case 4:return s=a.sent(),[3,5];case 5:return o=je({},e),r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,o]}})})}function VU(t,e){var n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fa=function(){function t(e,n){this.providerId=e,this.signInMethod=n}return t.prototype.toJSON=function(){return Gn("not implemented")},t.prototype._getIdTokenResponse=function(e){return Gn("not implemented")},t.prototype._linkToIdToken=function(e,n){return Gn("not implemented")},t.prototype._getReauthenticationResolver=function(e){return Gn("not implemented")},t}();function xU(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,Xs(t,"POST","/v1/accounts:update",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,xi(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $U(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,xi(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))]})})}function FU(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,xi(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Ke(e,t);function e(n,r,i,s){s===void 0&&(s=null);var o=t.call(this,"password",i)||this;return o._email=n,o._password=r,o._tenantId=s,o}return e._fromEmailAndPassword=function(n,r){return new e(n,r,"password")},e._fromEmailAndCode=function(n,r,i){return i===void 0&&(i=null),new e(n,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(n){var r;return V(this,void 0,void 0,function(){var i,s,o,a=this;return x(this,function(c){switch(c.label){case 0:switch(i=this.signInMethod,i){case"password":return[3,1];case"emailLink":return[3,4]}return[3,5];case 1:return s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled?[4,Rv(n,s,"signInWithPassword")]:[3,3];case 2:return o=c.sent(),[2,Ch(n,o)];case 3:return[2,Ch(n,s).catch(function(l){return V(a,void 0,void 0,function(){var u;return x(this,function(h){switch(h.label){case 0:return l.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),[4,Rv(n,s,"signInWithPassword")]);case 1:return u=h.sent(),[2,Ch(n,u)];case 2:return[2,Promise.reject(l)]}})})})];case 4:return[2,$U(n,{email:this._email,oobCode:this._password})];case 5:lr(n,"internal-error"),c.label=6;case 6:return[2]}})})},e.prototype._linkToIdToken=function(n,r){return V(this,void 0,void 0,function(){return x(this,function(i){switch(this.signInMethod){case"password":return[2,xU(n,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password})];case"emailLink":return[2,FU(n,{idToken:r,email:this._email,oobCode:this._password})];default:lr(n,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(n){return this._getIdTokenResponse(n)},e})(Fa);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,xi(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var UU="http://localhost",Ds=function(t){Ke(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.pendingToken=null,n}return e._fromParams=function(n){var r=new e(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(r.idToken=n.idToken),n.accessToken&&(r.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(r.nonce=n.nonce),n.pendingToken&&(r.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(r.accessToken=n.oauthToken,r.secret=n.oauthTokenSecret):lr("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=Ys(r,["providerId","signInMethod"]);if(!i||!s)return null;var a=new e(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a},e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return er(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,er(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,er(n,r)},e.prototype.buildRequest=function(){var n={requestUri:UU,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),n.postBody=Yr(r)}return n},e}(Fa);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rh;function BU(t,e){return V(this,void 0,void 0,function(){return x(this,function(n){return[2,xi(t,"POST","/v1/accounts:signInWithPhoneNumber",fr(t,e))]})})}function jU(t,e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:return[4,xi(t,"POST","/v1/accounts:signInWithPhoneNumber",fr(t,e))];case 1:if(n=r.sent(),n.temporaryProof)throw vo(t,"account-exists-with-different-credential",n);return[2,n]}})})}var HU=(Rh={},Rh.USER_NOT_FOUND="user-not-found",Rh);function qU(t,e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){return n=je(je({},e),{operation:"REAUTH"}),[2,xi(t,"POST","/v1/accounts:signInWithPhoneNumber",fr(t,n),HU)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Ke(e,t);function e(n){var r=t.call(this,"phone","phone")||this;return r.params=n,r}return e._fromVerification=function(n,r){return new e({verificationId:n,verificationCode:r})},e._fromTokenResponse=function(n,r){return new e({phoneNumber:n,temporaryProof:r})},e.prototype._getIdTokenResponse=function(n){return BU(n,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(n,r){return jU(n,je({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(n){return qU(n,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var n=this.params,r=n.temporaryProof,i=n.phoneNumber,s=n.verificationId,o=n.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:s,code:o}},e.prototype.toJSON=function(){var n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n},e.fromJSON=function(n){typeof n=="string"&&(n=JSON.parse(n));var r=n,i=r.verificationId,s=r.verificationCode,o=r.phoneNumber,a=r.temporaryProof;return!s&&!i&&!o&&!a?null:new e({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:a})},e})(Fa);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var XA=function(){function t(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return t.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.prototype.setCustomParameters=function(e){return this.customParameters=e,this},t.prototype.getCustomParameters=function(){return this.customParameters},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ua=function(t){Ke(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.scopes=[],n}return e.prototype.addScope=function(n){return this.scopes.includes(n)||this.scopes.push(n),this},e.prototype.getScopes=function(){return on([],this.scopes,!0)},e}(XA);(function(t){Ke(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.credentialFromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;return Ie("providerId"in r&&"signInMethod"in r,"argument-error"),Ds._fromParams(r)},e.prototype.credential=function(n){return this._credential(je(je({},n),{nonce:n.rawNonce}))},e.prototype._credential=function(n){return Ie(n.idToken||n.accessToken,"argument-error"),Ds._fromParams(je(je({},n),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(n){return e.oauthCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.oauthCredentialFromTaggedObject(n.customData||{})},e.oauthCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken,a=i.oauthTokenSecret,c=i.pendingToken,l=i.nonce,u=i.providerId;if(!o&&!a&&!s&&!c||!u)return null;try{return new e(u)._credential({idToken:s,accessToken:o,nonce:l,pendingToken:c})}catch{return null}},e})(Ua);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Ke(e,t);function e(){return t.call(this,"facebook.com")||this}return e.credential=function(n){return Ds._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(Ua);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Ke(e,t);function e(){var n=t.call(this,"google.com")||this;return n.addScope("profile"),n}return e.credential=function(n,r){return Ds._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken;if(!s&&!o)return null;try{return e.credential(s,o)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(Ua);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Ke(e,t);function e(){return t.call(this,"github.com")||this}return e.credential=function(n){return Ds._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(Ua);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var WU="http://localhost",Sv=function(t){Ke(e,t);function e(n,r){var i=t.call(this,n,n)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return er(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,er(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,er(n,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=r.pendingToken;return!i||!s||!o||i!==s?null:new e(i,o)},e._create=function(n,r){return new e(n,r)},e.prototype.buildRequest=function(){return{requestUri:WU,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(Fa);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var KU="saml.";(function(t){Ke(e,t);function e(n){return Ie(n.startsWith(KU),"argument-error"),t.call(this,n)||this}return e.credentialFromResult=function(n){return e.samlCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.samlCredentialFromTaggedObject(n.customData||{})},e.credentialFromJSON=function(n){var r=Sv.fromJSON(n);return Ie(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.pendingToken,o=i.providerId;if(!s||!o)return null;try{return Sv._create(o,s)}catch{return null}},e})(XA);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Ke(e,t);function e(){return t.call(this,"twitter.com")||this}return e.credential=function(n,r){return Ds._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthAccessToken,o=i.oauthTokenSecret;if(!s||!o)return null;try{return e.credential(s,o)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(Ua);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qp=function(){function t(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return t._fromIdTokenResponse=function(e,n,r,i){return i===void 0&&(i=!1),V(this,void 0,void 0,function(){var s,o,a;return x(this,function(c){switch(c.label){case 0:return[4,Ud._fromIdTokenResponse(e,r,i)];case 1:return s=c.sent(),o=Pv(r),a=new t({user:s,providerId:o,_tokenResponse:r,operationType:n}),[2,a]}})})},t._forOperation=function(e,n,r){return V(this,void 0,void 0,function(){var i;return x(this,function(s){switch(s.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return s.sent(),i=Pv(r),[2,new t({user:e,providerId:i,_tokenResponse:r,operationType:n})]}})})},t}();function Pv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zU=function(t){Ke(e,t);function e(n,r,i,s){var o=this,a;return o=t.call(this,r.code,r.message)||this,o.operationType=i,o.user=s,Object.setPrototypeOf(o,e.prototype),o.customData={appName:n.name,tenantId:(a=n.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return e._fromErrorAndOperation=function(n,r,i,s){return new e(n,r,i,s)},e}(un);function JA(t,e,n,r){var i=e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(function(s){throw s.code==="auth/".concat("multi-factor-auth-required")?zU._fromErrorAndOperation(t,s,e,r):s})}function GU(t,e,n){return n===void 0&&(n=!1),V(this,void 0,void 0,function(){var r,i,s,o,a,c;return x(this,function(l){switch(l.label){case 0:return i=da,s=[t],a=(o=e)._linkToIdToken,c=[t.auth],[4,t.getIdToken()];case 1:return[4,i.apply(void 0,s.concat([a.apply(o,c.concat([l.sent()])),n]))];case 2:return r=l.sent(),[2,Qp._forOperation(t,"link",r)]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(t,e,n){return n===void 0&&(n=!1),V(this,void 0,void 0,function(){var r,i,s,o,a,c;return x(this,function(l){switch(l.label){case 0:r=t.auth,i="reauthenticate",l.label=1;case 1:return l.trys.push([1,3,,4]),[4,da(t,JA(r,i,e,t),n)];case 2:return s=l.sent(),Ie(s.idToken,r,"internal-error"),o=Yp(s.idToken),Ie(o,r,"internal-error"),a=o.sub,Ie(t.uid===a,r,"user-mismatch"),[2,Qp._forOperation(t,i,s)];case 3:throw c=l.sent(),(c==null?void 0:c.code)==="auth/".concat("user-not-found")&&lr(r,"user-mismatch"),c;case 4:return[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(t,e,n){return n===void 0&&(n=!1),V(this,void 0,void 0,function(){var r,i,s;return x(this,function(o){switch(o.label){case 0:return r="signIn",[4,JA(t,r,e)];case 1:return i=o.sent(),[4,Qp._fromIdTokenResponse(t,r,i)];case 2:return s=o.sent(),n?[3,4]:[4,t._updateCurrentUser(s.user)];case 3:o.sent(),o.label=4;case 4:return[2,s]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ZA=function(){function t(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}return t._fromServerResponse=function(e,n){return"phoneInfo"in n?XU._fromServerResponse(e,n):"totpInfo"in n?JU._fromServerResponse(e,n):lr(e,"internal-error")},t}(),XU=function(t){Ke(e,t);function e(n){var r=t.call(this,"phone",n)||this;return r.phoneNumber=n.phoneInfo,r}return e._fromServerResponse=function(n,r){return new e(r)},e}(ZA),JU=function(t){Ke(e,t);function e(n){return t.call(this,"totp",n)||this}return e._fromServerResponse=function(n,r){return new e(r)},e}(ZA),Xp=function(){function t(e,n,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=n,this.profile=r}return t}(),eb=function(t){Ke(e,t);function e(n,r,i,s){var o=t.call(this,n,r,i)||this;return o.username=s,o}return e}(Xp);(function(t){Ke(e,t);function e(n,r){return t.call(this,n,"facebook.com",r)||this}return e})(Xp);(function(t){Ke(e,t);function e(n,r){return t.call(this,n,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(eb);(function(t){Ke(e,t);function e(n,r){return t.call(this,n,"google.com",r)||this}return e})(Xp);(function(t){Ke(e,t);function e(n,r,i){return t.call(this,n,"twitter.com",r,i)||this}return e})(eb);function ZU(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}var Ov="@firebase/auth",Nv="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e4=function(){function t(e){this.auth=e,this.internalListeners=new Map}return t.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},t.prototype.getToken=function(e){return V(this,void 0,void 0,function(){var n;return x(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return n=r.sent(),[2,{accessToken:n}]}})})},t.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var n=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}},t.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())},t.prototype.assertAuthConfigured=function(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},t.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function n4(t){Br(new rr("auth",function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),a=i.options,c=a.apiKey,l=a.authDomain;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});var u={apiKey:c,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YA(t)},h=new PU(i,s,o,u);return VU(h,r),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,n,r){var i=e.getProvider("auth-internal");i.initialize()})),Br(new rr("auth-internal",function(e){var n=QA(e.getProvider("auth").getImmediate());return function(r){return new e4(r)}(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Ov,Nv,t4(t)),Dn(Ov,Nv,"esm5")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tb=function(){function t(e,n){this.storageRetriever=e,this.type=n}return t.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(vv,"1"),this.storage.removeItem(vv),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},t.prototype._set=function(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()},t.prototype._get=function(e){var n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)},t.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(t.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(){var t=$e();return HA(t)||GA(t)}var i4=1e3,s4=10;(function(t){Ke(e,t);function e(){var n=t.call(this,function(){return window.localStorage},"LOCAL")||this;return n.boundEventHandler=function(r,i){return n.onStorageEvent(r,i)},n.listeners={},n.localCache={},n.pollTimer=null,n.safariLocalStorageNotSynced=r4()&&AU(),n.fallbackToPolling=wU(),n._shouldAllowMigration=!0,n}return e.prototype.forAllChangedKeys=function(n){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var s=i[r],o=this.storage.getItem(s),a=this.localCache[s];o!==a&&n(s,a,o)}},e.prototype.onStorageEvent=function(n,r){var i=this;if(r===void 0&&(r=!1),!n.key){this.forAllChangedKeys(function(l,u,h){i.notifyListeners(l,h)});return}var s=n.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var o=this.storage.getItem(s);if(n.newValue!==o)n.newValue!==null?this.storage.setItem(s,n.newValue):this.storage.removeItem(s);else if(this.localCache[s]===n.newValue&&!r)return}var a=function(){var l=i.storage.getItem(s);!r&&i.localCache[s]===l||i.notifyListeners(s,l)},c=this.storage.getItem(s);IU()&&c!==n.newValue&&n.newValue!==n.oldValue?setTimeout(a,s4):a()},e.prototype.notifyListeners=function(n,r){this.localCache[n]=r;var i=this.listeners[n];if(i)for(var s=0,o=Array.from(i);s<o.length;s++){var a=o[s];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var n=this;this.stopPolling(),this.pollTimer=setInterval(function(){n.forAllChangedKeys(function(r,i,s){n.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:s}),!0)})},i4)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(n,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(r)},e.prototype._removeListener=function(n,r){this.listeners[n]&&(this.listeners[n].delete(r),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(n,r){return V(this,void 0,void 0,function(){return x(this,function(i){switch(i.label){case 0:return[4,t.prototype._set.call(this,n,r)];case 1:return i.sent(),this.localCache[n]=JSON.stringify(r),[2]}})})},e.prototype._get=function(n){return V(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return[4,t.prototype._get.call(this,n)];case 1:return r=i.sent(),this.localCache[n]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(n){return V(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return[4,t.prototype._remove.call(this,n)];case 1:return r.sent(),delete this.localCache[n],[2]}})})},e.type="LOCAL",e})(tb);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Ke(e,t);function e(){return t.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(n,r){},e.prototype._removeListener=function(n,r){},e.type="SESSION",e})(tb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jp=function(t){Ke(e,t);function e(n){var r=t.call(this,"custom","custom")||this;return r.params=n,r}return e.prototype._getIdTokenResponse=function(n){return er(n,this._buildIdpRequest())},e.prototype._linkToIdToken=function(n,r){return er(n,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(n){return er(n,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(n){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(r.idToken=n),r},e}(Fa);function o4(t){return QU(t.auth,new Jp(t),t.bypassAuthState)}function a4(t){var e=t.auth,n=t.user;return Ie(n,e,"internal-error"),YU(n,new Jp(t),t.bypassAuthState)}function c4(t){return V(this,void 0,void 0,function(){var e,n;return x(this,function(r){return e=t.auth,n=t.user,Ie(n,e,"internal-error"),[2,GU(n,new Jp(t),t.bypassAuthState)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l4=function(){function t(e,n,r,i,s){s===void 0&&(s=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t.prototype.execute=function(){var e=this;return new Promise(function(n,r){return V(e,void 0,void 0,function(){var i,s;return x(this,function(o){switch(o.label){case 0:this.pendingPromise={resolve:n,reject:r},o.label=1;case 1:return o.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=o.sent(),[4,this.onExecution()];case 3:return o.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return s=o.sent(),this.reject(s),[3,5];case 5:return[2]}})})})},t.prototype.onAuthEvent=function(e){return V(this,void 0,void 0,function(){var n,r,i,s,o,a,c,l,u;return x(this,function(h){switch(h.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,s=e.tenantId,o=e.error,a=e.type,o)return this.reject(o),[2];c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},h.label=1;case 1:return h.trys.push([1,3,,4]),l=this.resolve,[4,this.getIdpTask(a)(c)];case 2:return l.apply(this,[h.sent()]),[3,4];case 3:return u=h.sent(),this.reject(u),[3,4];case 4:return[2]}})})},t.prototype.onError=function(e){this.reject(e)},t.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o4;case"linkViaPopup":case"linkViaRedirect":return c4;case"reauthViaPopup":case"reauthViaRedirect":return a4;default:lr(this.auth,"internal-error")}},t.prototype.resolve=function(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},t.prototype.reject=function(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},t.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u4="pendingRedirect",Sh=new Map;(function(t){Ke(e,t);function e(n,r,i){i===void 0&&(i=!1);var s=t.call(this,n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return s.eventId=null,s}return e.prototype.execute=function(){return V(this,void 0,void 0,function(){var n,r,i,s,o;return x(this,function(a){switch(a.label){case 0:if(n=Sh.get(this.auth._key()),n)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,h4(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,t.prototype.execute.call(this)]:[3,4];case 3:return s=a.sent(),[3,5];case 4:s=null,a.label=5;case 5:return i=s,n=function(){return Promise.resolve(i)},[3,7];case 6:return o=a.sent(),n=function(){return Promise.reject(o)},[3,7];case 7:Sh.set(this.auth._key(),n),a.label=8;case 8:return this.bypassAuthState||Sh.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,n()]}})})},e.prototype.onAuthEvent=function(n){return V(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return n.type==="signInViaRedirect"?[2,t.prototype.onAuthEvent.call(this,n)]:n.type==="unknown"?(this.resolve(null),[2]):n.eventId?[4,this.auth._redirectUserForId(n.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,t.prototype.onAuthEvent.call(this,n)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return V(this,void 0,void 0,function(){return x(this,function(n){return[2]})})},e.prototype.cleanUp=function(){},e})(l4);function h4(t,e){return V(this,void 0,void 0,function(){var n,r,i;return x(this,function(s){switch(s.label){case 0:return n=f4(e),r=d4(t),[4,r._isAvailable()];case 1:return s.sent()?[4,r._get(n)]:[2,!1];case 2:return i=s.sent()==="true",[4,r._remove(n)];case 3:return s.sent(),[2,i]}})})}function d4(t){return Pr(t._redirectPersistence)}function f4(t){return Nc(u4,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p4=10*60*1e3,m4=function(){function t(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},t.prototype.onEvent=function(e){var n=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){n.isEventForConsumer(e,i)&&(r=!0,n.sendToConsumer(e,i),n.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g4(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.prototype.sendToConsumer=function(e,n){var r;if(e.error&&!nb(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pu(this.auth,i))}else n.onAuthEvent(e)},t.prototype.isEventForConsumer=function(e,n){var r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r},t.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=p4&&this.cachedEventUids.clear(),this.cachedEventUids.has(kv(e))},t.prototype.saveEventToCache=function(e){this.cachedEventUids.add(kv(e)),this.lastProcessedEventTime=Date.now()},t}();function kv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(function(e){return e}).join("-")}function nb(t){var e=t.type,n=t.error;return e==="unknown"&&(n==null?void 0:n.code)==="auth/".concat("no-auth-event")}function g4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nb(t);default:return!1}}(function(t){Ke(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.passiveListeners=new Set,n.initPromise=new Promise(function(r){n.resolveInialized=r}),n}return e.prototype.addPassiveListener=function(n){this.passiveListeners.add(n)},e.prototype.removePassiveListener=function(n){this.passiveListeners.delete(n)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(n){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(n)}),t.prototype.onEvent.call(this,n)},e.prototype.initialized=function(){return V(this,void 0,void 0,function(){return x(this,function(n){switch(n.label){case 0:return[4,this.initPromise];case 1:return n.sent(),[2]}})})},e})(m4);n4("Cordova");const Ou=GN("budget",()=>{const t=GF(),e=sT(),n=Xe(!1),r=Xe(!1),i=Xe(!1),s=Xe(!1),o=Xe(""),a=Xe(""),c=Xe(""),l=Xe(!0),u=async()=>{try{await D2(ao,o.value,a.value),l.value=!1,t.success(`Welcome, ${o.value}`)}catch(Q){console.log(Q)}},h=async()=>{try{await L2(ao,o.value,a.value),l.value=!0,t.success(`Welcome, ${o.value}`)}catch(Q){Q.code==="auth/user-not-found"?(n.value=!0,r.value=!1):Q.code==="auth/wrong-password"&&(n.value=!1,r.value=!0)}},d=async()=>{try{confirm("You wanna sign out?"),await x2(ao),t.error("You have signed out!")}catch(Q){console.log(Q)}},f=async()=>{try{confirm("Delete user and all data?");const Q=ao.currentUser;await $2(Q),t.error("You've delete your account!")}catch(Q){Q.code==="auth/requires-recent-login"?i.value=!0:console.log(Q)}};ZU(ao,Q=>{Q?(s.value=!0,c.value=Q.email):(c.value="",_())});const _=()=>{o.value="",a.value="",s.value=!1,l.value=!0,r.value=!1,n.value=!1,i.value=!1},g=Xe([]),y=Xe([]),T=Xe(""),R=Xe(null),A=Xe(""),E=Xe(),F=()=>{const Q="ABCDEF0123456789";let ne="#";for(let ye=0;ye<6;ye++){const st=Math.floor(Math.random()*(Q.length-1));ne+=Q[st]}return ne},z=()=>{R.value=null,T.value="",Re.value=null,ee.value=""},Z=async Q=>{try{await Lx(hv,{color:F(),name:T.value,amount:R.value,spent:0,expenses:[],createdAt:Vx()}),await L(),R.value=null,T.value="",Q.target.reset(),t.info("Budget created!")}catch(ne){console.log(ne)}},D=bx(hv,Cx("createdAt")),L=async()=>{try{const Q=await kx(D),ne=[];Q.forEach(ye=>{ne.push({...ye.data(),id:ye.id})}),g.value=ne,y.value=ne.map(ye=>ye.name),A.value=y.value[y.value.length-1]}catch(Q){console.log(Q)}},W=async Q=>{try{const ne=ii(si,"budgets",Q),ye=await Nx(ne);ye.exists()&&(E.value={...ye.data(),id:Q})}catch(ne){console.log(ne)}},he=async Q=>{try{confirm("Are you sure you want to permanently delete this budget?");const ne=ii(si,"budgets",Q);await Dx(ne),e.push("/"),R.value=null,T.value="",t.error("Budget deleted successfully!")}catch(ne){console.log(ne)}},B=Xe([]),ee=Xe(""),Re=Xe(null),Ue=async Q=>{try{const ne=g.value.find(St=>St.name===A.value),ye=ne==null?void 0:ne.id,st=ne.spent+Re.value,ot=ii(si,"budgets",ye);await cc(ot,{expenses:q_({name:ee.value,amount:Re.value,createdAt:new Date().toLocaleDateString("en-US"),budgetID:ne.id,budgetName:ne.name,budgetColor:ne.color}),spent:st}),await L(),ge(),t.info(`Expense ${ee.value} created!`),Re.value=null,ee.value="",Q.target.reset()}catch(ne){console.log(ne)}},oe=async(Q,ne)=>{try{const ye=ne==null?void 0:ne.id,st=ne.spent+Re.value,ot=ii(si,"budgets",ye);await cc(ot,{expenses:q_({name:ee.value,amount:Re.value,createdAt:new Date().toLocaleDateString("en-US"),budgetID:ne.id,budgetName:ne.name,budgetColor:ne.color}),spent:st}),await W(ye),t.info(`Expense ${ee.value} created!`),Re.value=null,ee.value="",Q.target.reset()}catch(ye){console.log(ye)}},ge=()=>{const Q=[];g.value.forEach(ne=>{Q.unshift(...ne.expenses)}),B.value=Q};return{isNewAccount:n,isWrongPass:r,needLogInAgain:i,isAuth:s,mail:o,pass:a,currentUser:c,oldUser:l,createAccount:u,logIn:h,deleteAccount:f,logOut:d,budgets:g,budgetAmount:R,budgetName:T,budgetsNameList:y,budgetChoose:A,budgetDetail:E,createBudget:Z,getBudgets:L,getBudget:W,deleteBudget:he,resetInput:z,expenses:B,expenseAmount:Re,expenseName:ee,addExpense:Ue,getExpenses:ge,deleteExpense:async Q=>{const ne=ii(si,"budgets",Q.budgetID),st=g.value.find(ot=>ot.id===Q.budgetID).spent-Q.amount;await cc(ne,{expenses:W_(Q),spent:st}),await L(),await W(Q.budgetID),ge(),t.warning("Expense deleted!")},addExpenseOnDetail:oe,deleteExpenseOnDetail:async Q=>{const ne=ii(si,"budgets",Q.budgetID),ye=E.value.spent-Q.amount;await cc(ne,{expenses:W_(Q),spent:ye}),await W(Q.budgetID),t.warning("Expense deleted!")}}}),Js=t=>(uE("data-v-fc567afc"),t=t(),hE(),t),_4={class:"navbar shadow-sm"},v4={class:"container-xl py-3"},y4=Js(()=>k("img",{src:QN,alt:"logo",class:"img-fluid",width:"50"},null,-1)),E4=Js(()=>k("h1",{class:"ms-1 mb-0 fw-bolder text-info display-4"},"Budget App",-1)),T4={key:0,class:"mt-3 mt-md-0"},I4=Js(()=>k("p",{class:"lead mb-0 me-2"},"Sign Out",-1)),w4=Js(()=>k("i",{class:"bi bi-box-arrow-right"},null,-1)),A4=[I4,w4],b4=Js(()=>k("p",{class:"lead mb-0 me-2"},"Delete User",-1)),C4=Js(()=>k("i",{class:"bi bi-trash3-fill"},null,-1)),R4=[b4,C4],S4=Jt({__name:"App",setup(t){const e=Ou();return(n,r)=>(ce(),Te(Je,null,[k("nav",_4,[k("div",v4,[Fe(le(Of),{to:{name:"home"},class:"navbar-brand d-inline-flex align-items-center"},{default:Vt(()=>[y4,E4]),_:1}),le(e).isAuth?(ce(),Te("div",T4,[k("button",{class:"btn btn-outline-warning border-2 d-inline-flex align-items-center me-3",onClick:r[0]||(r[0]=(...i)=>le(e).logOut&&le(e).logOut(...i))},A4),k("button",{class:"btn btn-outline-danger border-2 d-inline-flex align-items-center",onClick:r[1]||(r[1]=(...i)=>le(e).deleteAccount&&le(e).deleteAccount(...i))},R4)])):Ot("",!0)])]),Fe(le(iT),null,{default:Vt(({Component:i})=>[Fe(is,{name:"route",mode:"out-in"},{default:Vt(()=>[(ce(),mn(Vl(i)))]),_:2},1024)]),_:1})],64))}});const rb=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},P4=rb(S4,[["__scopeId","data-v-fc567afc"]]),O4="modulepreload",N4=function(t){return"/budget-viteTS/"+t},Dv={},k4=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=N4(s),s in Dv)return;Dv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":O4,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},D4="/budget-viteTS/chart.jpg",L4={class:"card-body px-4"},M4={class:"d-flex justify-content-between align-items-center mb-3"},V4={class:"progress mb-3",role:"progressbar","aria-label":"Info example","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},x4={class:"d-flex justify-content-between align-items-center mb-3"},$4={class:"opacity-50 text-end"},F4={class:"text-center"},U4=k("i",{class:"bi bi-cash-coin ms-1"},null,-1),B4=k("i",{class:"bi bi-trash3"},null,-1),j4=Jt({__name:"BudgetPage",props:{budget:{},wantDelete:{type:Boolean}},setup(t){const e=Ou(),n=sT();return(r,i)=>(ce(),Te("div",{class:"card rounded-4 border-2",style:jt({borderColor:r.budget.color})},[k("div",L4,[k("div",M4,[k("h3",{class:"card-title fw-bold fs-1",style:jt({color:r.budget.color})},Wt(r.budget.name),5),k("p",{class:"lead text-end fw-medium",style:jt({color:r.budget.color})},"$"+Wt(r.budget.amount)+" Budgeted",5)]),k("div",V4,[k("div",{class:"progress-bar",style:jt({backgroundColor:r.budget.color,width:`${r.budget.spent/r.budget.amount*100}%`})},null,4)]),k("div",x4,[k("p",{style:jt({color:r.budget.color})},"$"+Wt(r.budget.spent)+" spent",5),k("p",$4,"$"+Wt(r.budget.amount-r.budget.spent)+" remaining",1)]),k("div",F4,[r.wantDelete?(ce(),Te("button",{key:1,class:"style btn text-light btn-lg py-2",style:jt({backgroundColor:r.budget.color}),onClick:i[1]||(i[1]=s=>le(e).deleteBudget(r.budget.id))},[mt(" Delete Budget "),B4],4)):(ce(),Te("button",{key:0,class:"style btn btn-lg py-2 text-light",style:jt({backgroundColor:r.budget.color}),onClick:i[0]||(i[0]=s=>le(n).push({name:"budget",params:{id:r.budget.id}}))},[mt(" View Details "),U4],4))])])],4))}}),H4={key:0},q4=k("i",{class:"bi bi-trash3-fill"},null,-1),W4=[q4],K4=Jt({__name:"ExpensePage",props:{expense:{},wantDelete:{type:Boolean}},setup(t){const e=Ou();return(n,r)=>(ce(),Te(Je,null,[k("td",null,Wt(n.expense.name),1),k("td",null,"$"+Wt(n.expense.amount),1),k("td",null,Wt(n.expense.createdAt),1),n.wantDelete?Ot("",!0):(ce(),Te("td",H4,[Fe(le(Of),{to:{name:"budget",params:{id:n.expense.budgetID}},type:"button",class:"style btn rounded-pill text-light",style:jt({backgroundColor:n.expense.budgetColor})},{default:Vt(()=>[mt(Wt(n.expense.budgetName),1)]),_:1},8,["to","style"])])),k("td",null,[k("button",{class:"btn btn-outline-danger",onClick:r[0]||(r[0]=i=>{n.wantDelete?le(e).deleteExpenseOnDetail(n.expense):le(e).deleteExpense(n.expense)})},W4)])],64))}}),vt=t=>(uE("data-v-af27a21b"),t=t(),hE(),t),z4={class:"home"},G4={key:0,class:"container-xl py-4"},Y4={class:"row pt-0 pt-md-5 flex-column-reverse flex-md-row"},Q4={class:"col-12 col-md-6 pt-0 pt-md-5"},X4=vt(()=>k("h1",{class:"fw-bolder display-4"},[mt("Take Control of "),k("span",{class:"text-info"},"Your Money")],-1)),J4=vt(()=>k("p",{class:"lead"},"Personal budgeting is the secret to financial freedom. Start your journey today.",-1)),Z4={key:0,class:"small text-danger"},eB=vt(()=>k("span",{class:"lead"},"Want to create new account?",-1)),tB={key:1,class:"small text-danger"},nB={key:2,class:"small text-danger"},rB={class:"d-flex justify-content-between"},iB=vt(()=>k("i",{class:"bi bi-box-arrow-in-left ms-1"},null,-1)),sB=vt(()=>k("i",{class:"bi bi-person-add ms-1"},null,-1)),oB=vt(()=>k("div",{class:"col-12 col-md-6 mb-3 mb-md-0"},[k("img",{src:D4,alt:"chart",class:"img-fluid object-fit-cover object-fit-md-contain h-100"})],-1)),aB={key:1,class:"container-xl py-4"},cB={class:"row mb-3"},lB={class:"fw-bold display-5"},uB={key:0},hB={class:"text-info"};const dB={class:"row mb-4"},fB={class:"col-12 col-md-6 mb-3 mb-md-0"},pB={class:"card shadow p-3 rounded-3"},mB={class:"card-body p-3 border-2 border-dark rounded-3",style:{border:"dashed"}},gB=vt(()=>k("h3",{class:"card-title fw-bolder mb-4"},"Create budget",-1)),_B={class:"form-group mb-3"},vB=vt(()=>k("label",{for:"budgetName",class:"form-label fw-bold mb-2"},"Budget Name",-1)),yB={class:"form-group mb-3"},EB=vt(()=>k("label",{for:"budgetAmount",class:"form-label fw-bold mb-2"},"Amount",-1)),TB=vt(()=>k("button",{class:"btn btn-dark px-4 py-2"},[mt(" Create budget "),k("i",{class:"bi bi-coin ms-1"})],-1)),IB={key:0,class:"col-12 col-md-6"},wB={class:"card shadow p-3 rounded-3"},AB={class:"card-body p-3 border-2 border-dark rounded-3",style:{border:"dashed"}},bB={class:"card-title fw-bolder mb-4"},CB={key:0,class:"text-info"},RB={class:"row"},SB={class:"col-12 col-md-6 mb-3"},PB=vt(()=>k("label",{for:"expenseName",class:"form-label fw-bold mb-2"},"Expense Name",-1)),OB={class:"col-12 col-md-6 mb-3"},NB=vt(()=>k("label",{for:"expenseAmount",class:"form-label fw-bold mb-2"},"Amount",-1)),kB={key:0,class:"row mb-3"},DB={class:"col"},LB=vt(()=>k("label",{for:"category",class:"form-label fw-bold mb-2"},"Budget Category",-1)),MB=["value"],VB=vt(()=>k("button",{class:"btn btn-dark px-4 py-2"},[mt(" Add Expense "),k("i",{class:"bi bi-plus-circle-fill ms-1"})],-1)),xB={key:0,class:"row flex-wrap mb-4"},$B=vt(()=>k("h2",{class:"fw-bold display-5 mb-4"},"Existing Budgets",-1)),FB={key:0,class:"row mb-4"},UB=vt(()=>k("h2",{class:"fw-bold display-5 mb-4"},"Recent Expenses",-1)),BB={class:"col px-0 px-md-5"},jB={class:"card border-0 overflow-auto"},HB={class:"table table-striped table-hover table-borderless text-center"},qB=vt(()=>k("thead",null,[k("tr",{class:"fs-3"},[k("th",{scope:"col"},"Name"),k("th",{scope:"col"},"Amount"),k("th",{scope:"col"},"Date"),k("th",{scope:"col"},"Budget"),k("th",{scope:"col"})])],-1)),WB={class:"align-middle"},KB=Jt({__name:"HomeView",setup(t){const e=Ou(),{oldUser:n,isNewAccount:r,isWrongPass:i,needLogInAgain:s,isAuth:o,mail:a,pass:c,currentUser:l,budgetAmount:u,budgetName:h,budgets:d,budgetsNameList:f,budgetChoose:_,expenses:g,expenseAmount:y,expenseName:T}=YN(e);return e.resetInput(),gO(async()=>{await e.getBudgets(),await e.getExpenses()}),(R,A)=>(ce(),Te("main",z4,[Fe(is,{name:"auth",appear:""},{default:Vt(()=>[le(o)?(ce(),Te("div",aB,[k("div",cB,[k("h2",lB,[mt("Welcome"),le(n)?(ce(),Te("span",uB," back")):Ot("",!0),mt(", "),k("span",hB,Wt(le(l)),1)]),Ot("",!0)]),k("div",dB,[k("div",fB,[k("div",pB,[k("div",mB,[gB,k("form",{onSubmit:A[7]||(A[7]=vc(E=>le(e).createBudget(E),["prevent"]))},[k("div",_B,[vB,Zr(k("input",{type:"text",id:"budgetName",class:"form-control py-2",placeholder:"e.g., Groceries","onUpdate:modelValue":A[5]||(A[5]=E=>De(h)?h.value=E:null),required:""},null,512),[[ji,le(h)]])]),k("div",yB,[EB,Zr(k("input",{type:"number",id:"budgetAmount",class:"form-control py-2",step:"0.1",placeholder:"e.g., $300","onUpdate:modelValue":A[6]||(A[6]=E=>De(u)?u.value=E:null),required:""},null,512),[[ji,le(u)]])]),TB],32)])])]),Fe(is,{name:"app",appear:""},{default:Vt(()=>[le(d).length?(ce(),Te("div",IB,[k("div",wB,[k("div",AB,[k("h3",bB,[mt("Add New "),le(f).length===1?(ce(),Te("span",CB,Wt(le(_)),1)):Ot("",!0),mt(" Expense")]),k("form",{onSubmit:A[11]||(A[11]=vc(E=>le(e).addExpense(E),["prevent"]))},[k("div",RB,[k("div",SB,[PB,Zr(k("input",{type:"text",id:"expenseName",class:"form-control py-2",placeholder:"e.g., Coffee","onUpdate:modelValue":A[8]||(A[8]=E=>De(T)?T.value=E:null),required:""},null,512),[[ji,le(T)]])]),k("div",OB,[NB,Zr(k("input",{type:"number",id:"expenseAmount",class:"form-control py-2",step:"0.01",placeholder:"e.g., $3.00","onUpdate:modelValue":A[9]||(A[9]=E=>De(y)?y.value=E:null),required:""},null,512),[[ji,le(y)]])])]),le(f).length>1?(ce(),Te("div",kB,[k("div",DB,[LB,Zr(k("select",{name:"category",id:"category",class:"form-select","onUpdate:modelValue":A[10]||(A[10]=E=>De(_)?_.value=E:null)},[(ce(!0),Te(Je,null,Ao(le(f),E=>(ce(),Te("option",{value:E,key:E},Wt(E),9,MB))),128))],512),[[MN,le(_)]])])])):Ot("",!0),VB],32)])])])):Ot("",!0)]),_:1})]),Fe(is,{name:"app",appear:""},{default:Vt(()=>[le(d).length?(ce(),Te("div",xB,[$B,Fe(zh,{appear:"",name:"budget"},{default:Vt(()=>[(ce(!0),Te(Je,null,Ao(le(d),E=>(ce(),Te("div",{class:"col-12 col-md-6 col-lg-4 mb-3",key:E.id},[Fe(j4,{budget:E,wantDelete:!1},null,8,["budget"])]))),128))]),_:1})])):Ot("",!0)]),_:1}),le(g).length?(ce(),Te("div",FB,[UB,k("div",BB,[k("div",jB,[k("table",HB,[qB,k("tbody",WB,[Fe(zh,{appear:"",name:"expense"},{default:Vt(()=>[(ce(!0),Te(Je,null,Ao(le(g),(E,F)=>(ce(),Te("tr",{class:"lead",key:F,tag:"tr"},[Fe(K4,{expense:E,wantDelete:!1},null,8,["expense"])]))),128))]),_:1})])])])])])):Ot("",!0)])):(ce(),Te("div",G4,[k("div",Y4,[k("div",Q4,[X4,J4,k("form",{onSubmit:A[4]||(A[4]=vc(()=>{},["prevent"]))},[Zr(k("input",{type:"email",class:"form-control mb-3 py-3",placeholder:"Your Email...","onUpdate:modelValue":A[0]||(A[0]=E=>De(a)?a.value=E:null),required:""},null,512),[[ji,le(a)]]),Zr(k("input",{type:"password",class:"form-control mb-3 py-3",placeholder:"Your Password","onUpdate:modelValue":A[1]||(A[1]=E=>De(c)?c.value=E:null),required:""},null,512),[[ji,le(c)]]),le(r)?(ce(),Te("p",Z4,[mt("Couldn't find your account. "),eB])):Ot("",!0),le(i)?(ce(),Te("p",tB,"Wrong Password.")):Ot("",!0),le(s)?(ce(),Te("p",nB,"You need to ReAuthen before delete account.")):Ot("",!0),k("div",rB,[le(r)?(ce(),Te("button",{key:1,class:"btn btn-dark px-4 py-3",onClick:A[3]||(A[3]=(...E)=>le(e).createAccount&&le(e).createAccount(...E))},[mt(" Create Account "),sB])):(ce(),Te("button",{key:0,class:"btn btn-dark px-5 py-3",onClick:A[2]||(A[2]=(...E)=>le(e).logIn&&le(e).logIn(...E))},[mt(" Log In "),iB]))])],32)]),oB])]))]),_:1})]))}});const zB=rb(KB,[["__scopeId","data-v-af27a21b"]]),GB=Q1({history:p1("/budget-viteTS/"),routes:[{path:"/",name:"home",component:zB},{path:"/budget/:id",name:"budget",component:()=>k4(()=>import("./BudgetView-76d4df94.js"),[])}]});const Nu=HE(P4),YB={position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1};Nu.use(jN());Nu.use(GB);Nu.use(YF,YB);Nu.mount("#app");export{Je as F,zh as T,j4 as _,Ou as a,k as b,Te as c,Jt as d,Fe as e,le as f,mt as g,Zr as h,De as i,Vt as j,K4 as k,ce as o,Ao as r,YN as s,Wt as t,QB as u,ji as v,vc as w};
