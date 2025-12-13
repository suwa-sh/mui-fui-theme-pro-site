var Bt=Object.defineProperty;var wt=(t,e,n)=>e in t?Bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>wt(t,typeof e!="symbol"?e+"":e,n);import{r as a,G as Dt,R as X,S as jt,m as x,j as N,u as ct,q as tt}from"./iframe-CaydQ_kE.js";import{g as pt,a as Lt}from"./Box-DhaEmPq3.js";import{s as et,c as kt}from"./Typography-CmUh-s7f.js";import{_ as Nt}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";function G(t){const e=a.useRef(t);return Dt(()=>{e.current=t}),a.useRef((...n)=>(0,e.current)(...n)).current}function it(...t){const e=a.useRef(void 0),n=a.useCallback(s=>{const o=t.map(r=>{if(r==null)return null;if(typeof r=="function"){const i=r,c=i(s);return typeof c=="function"?c:()=>{i(null)}}return r.current=s,()=>{r.current=null}});return()=>{o.forEach(r=>r==null?void 0:r())}},t);return a.useMemo(()=>t.every(s=>s==null)?null:s=>{e.current&&(e.current(),e.current=void 0),s!=null&&(e.current=n(s))},t)}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},J(t,e)}function vt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,J(t,e)}const ut=X.createContext(null);function Ot(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,e){var n=function(r){return e&&a.isValidElement(r)?e(r):r},s=Object.create(null);return t&&a.Children.map(t,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function $t(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var s=Object.create(null),o=[];for(var r in t)r in e?o.length&&(s[r]=o,o=[]):o.push(r);var i,c={};for(var l in e){if(s[l])for(i=0;i<s[l].length;i++){var f=s[l][i];c[s[l][i]]=n(f)}c[l]=n(l)}for(i=0;i<o.length;i++)c[o[i]]=n(o[i]);return c}function k(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ft(t,e){return nt(t.children,function(n){return a.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:k(n,"appear",t),enter:k(n,"enter",t),exit:k(n,"exit",t)})})}function Ut(t,e,n){var s=nt(t.children),o=$t(e,s);return Object.keys(o).forEach(function(r){var i=o[r];if(a.isValidElement(i)){var c=r in e,l=r in s,f=e[r],d=a.isValidElement(f)&&!f.props.in;l&&(!c||d)?o[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:k(i,"exit",t),enter:k(i,"enter",t)}):!l&&c&&!d?o[r]=a.cloneElement(i,{in:!1}):l&&c&&a.isValidElement(f)&&(o[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:k(i,"exit",t),enter:k(i,"enter",t)}))}}),o}var zt=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},At={component:"div",childFactory:function(e){return e}},rt=(function(t){vt(e,t);function e(s,o){var r;r=t.call(this,s,o)||this;var i=r.handleExited.bind(Ot(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,r){var i=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Ft(o,c):Ut(o,i,c),firstRender:!1}},n.handleExited=function(o,r){var i=nt(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var l=jt({},c.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,c=Nt(o,["component","childFactory"]),l=this.state.contextValue,f=zt(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?X.createElement(ut.Provider,{value:l},f):X.createElement(ut.Provider,{value:l},X.createElement(r,c,f))},e})(X.Component);rt.propTypes={};rt.defaultProps=At;const at={};function ft(t,e){const n=a.useRef(at);return n.current===at&&(n.current=t(e)),n}const _t=[];function Yt(t){a.useEffect(t,_t)}class ot{constructor(){Y(this,"currentId",null);Y(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Y(this,"disposeEffect",()=>this.clear)}static create(){return new ot}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Xt(){const t=ft(ot.create).current;return Yt(t.disposeEffect),t}function lt(t){try{return t.matches(":focus-visible")}catch{}return!1}class q{constructor(){Y(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=ft(q.create).current,[n,s]=a.useState(!1);return e.shouldMount=n,e.setShouldMount=s,a.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Wt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Kt(){return q.use()}function Wt(){let t,e;const n=new Promise((s,o)=>{t=s,e=o});return n.resolve=t,n.reject=e,n}function Ht(t){const{className:e,classes:n,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:c,onExited:l,timeout:f}=t,[d,h]=a.useState(!1),M=x(e,n.ripple,n.rippleVisible,s&&n.ripplePulsate),V={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},b=x(n.child,d&&n.childLeaving,s&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const w=setTimeout(l,f);return()=>{clearTimeout(w)}}},[l,c,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:b})})}const g=pt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Gt=80,qt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Zt=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Jt=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qt=et("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),te=et(Ht,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${qt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Zt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ee=a.forwardRef(function(e,n){const s=ct({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...c}=s,[l,f]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),V=Xt(),b=a.useRef(null),w=a.useRef(null),T=a.useCallback(p=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:D,cb:U}=p;f(E=>[...E,N.jsx(te,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:Q,pulsate:y,rippleX:R,rippleY:$,rippleSize:D},d.current)]),d.current+=1,h.current=U},[r]),v=a.useCallback((p={},y={},R=()=>{})=>{const{pulsate:$=!1,center:D=o||y.pulsate,fakeElement:U=!1}=y;if((p==null?void 0:p.type)==="mousedown"&&M.current){M.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(M.current=!0);const E=U?null:w.current,I=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,C,B;if(D||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)S=Math.round(I.width/2),C=Math.round(I.height/2);else{const{clientX:z,clientY:j}=p.touches&&p.touches.length>0?p.touches[0]:p;S=Math.round(z-I.left),C=Math.round(j-I.top)}if(D)B=Math.sqrt((2*I.width**2+I.height**2)/3),B%2===0&&(B+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-C),C)*2+2;B=Math.sqrt(z**2+j**2)}p!=null&&p.touches?b.current===null&&(b.current=()=>{T({pulsate:$,rippleX:S,rippleY:C,rippleSize:B,cb:R})},V.start(Gt,()=>{b.current&&(b.current(),b.current=null)})):T({pulsate:$,rippleX:S,rippleY:C,rippleSize:B,cb:R})},[o,T,V]),K=a.useCallback(()=>{v({},{pulsate:!0})},[v]),O=a.useCallback((p,y)=>{if(V.clear(),(p==null?void 0:p.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{O(p,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return a.useImperativeHandle(n,()=>({pulsate:K,start:v,stop:O}),[K,v,O]),N.jsx(Qt,{className:x(g.root,r.root,i),ref:w,...c,children:N.jsx(rt,{component:null,exit:!0,children:l})})});function ne(t){return Lt("MuiButtonBase",t)}const re=pt("MuiButtonBase",["root","disabled","focusVisible"]),oe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:s,classes:o}=t,i=kt({root:["root",e&&"disabled",n&&"focusVisible"]},ne,o);return n&&s&&(i.root+=` ${s}`),i},se=et("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${re.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),pe=a.forwardRef(function(e,n){const s=ct({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:c,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:w,onClick:T,onContextMenu:v,onDragLeave:K,onFocus:O,onFocusVisible:p,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:D,onMouseUp:U,onTouchEnd:E,onTouchMove:I,onTouchStart:S,tabIndex:C=0,TouchRippleProps:B,touchRippleRef:z,type:j,...F}=s,A=a.useRef(null),m=Kt(),dt=it(m.ref,z),[L,W]=a.useState(!1);f&&L&&W(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const ht=m.shouldMount&&!d&&!f;a.useEffect(()=>{L&&M&&!d&&m.pulsate()},[d,M,L,m]);const mt=P(m,"start",$,h),bt=P(m,"stop",v,h),gt=P(m,"stop",K,h),Mt=P(m,"stop",U,h),Rt=P(m,"stop",u=>{L&&u.preventDefault(),D&&D(u)},h),yt=P(m,"start",S,h),Et=P(m,"stop",E,h),xt=P(m,"stop",I,h),Tt=P(m,"stop",u=>{lt(u.target)||W(!1),w&&w(u)},!1),Ct=G(u=>{A.current||(A.current=u.currentTarget),lt(u.target)&&(W(!0),p&&p(u)),O&&O(u)}),Z=()=>{const u=A.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},Pt=G(u=>{M&&!u.repeat&&L&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&Z()&&u.key===" "&&u.preventDefault(),y&&y(u),u.target===u.currentTarget&&Z()&&u.key==="Enter"&&!f&&(u.preventDefault(),T&&T(u))}),Vt=G(u=>{M&&u.key===" "&&L&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),R&&R(u),T&&u.target===u.currentTarget&&Z()&&u.key===" "&&!u.defaultPrevented&&T(u)});let H=l;H==="button"&&(F.href||F.to)&&(H=b);const _={};if(H==="button"){const u=!!F.formAction;_.type=j===void 0&&!u?"button":j,_.disabled=f}else!F.href&&!F.to&&(_.role="button"),f&&(_["aria-disabled"]=f);const It=it(n,A),st={...s,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:C,focusVisible:L},St=oe(st);return N.jsxs(se,{as:H,className:x(St.root,c),ownerState:st,onBlur:Tt,onClick:T,onContextMenu:bt,onFocus:Ct,onKeyDown:Pt,onKeyUp:Vt,onMouseDown:mt,onMouseLeave:Rt,onMouseUp:Mt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:xt,onTouchStart:yt,ref:It,tabIndex:f?-1:C,type:j,..._,...F,children:[i,ht?N.jsx(ee,{ref:dt,center:r,...B}):null]})});function P(t,e,n,s=!1){return G(o=>(n&&n(o),s||t[e](o),!0))}export{pe as B,ut as T,vt as _,G as a,Xt as b,ot as c,lt as i,it as u};
