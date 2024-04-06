import{r as a,l as H,m as L,n as M,o as ae,p as T,u as se,s as le,t as N,v as ie,w as ce,x as pe,y as de,z as ge,h as ue,A as me,D as fe,E as ve}from"./index-f1df9dd1.js";const he=a.createContext({size:"default",shape:void 0}),B=he,ye=e=>{const{antCls:r,componentCls:o,iconCls:t,avatarBg:n,avatarColor:i,containerSize:l,containerSizeLG:s,containerSizeSM:c,textFontSize:p,textFontSizeLG:u,textFontSizeSM:h,borderRadius:d,borderRadiusLG:g,borderRadiusSM:b,lineWidth:x,lineType:P}=e,C=($,y,z)=>({width:$,height:$,lineHeight:`${$-x*2}px`,borderRadius:"50%",[`&${o}-square`]:{borderRadius:z},[`${o}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${o}-icon`]:{fontSize:y,[`> ${t}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},M(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:i,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:n,border:`${x}px ${P} transparent`,"&-image":{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),C(l,p,d)),{"&-lg":Object.assign({},C(s,u,g)),"&-sm":Object.assign({},C(c,h,b)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},xe=e=>{const{componentCls:r,groupBorderColor:o,groupOverlapping:t,groupSpace:n}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:o},"> *:not(:first-child)":{marginInlineStart:t}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:n}}}},F=H("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:o}=e,t=L(e,{avatarBg:o,avatarColor:r});return[ye(t),xe(t)]},e=>{const{controlHeight:r,controlHeightLG:o,controlHeightSM:t,fontSize:n,fontSizeLG:i,fontSizeXL:l,fontSizeHeading3:s,marginXS:c,marginXXS:p,colorBorderBg:u}=e;return{containerSize:r,containerSizeLG:o,containerSizeSM:t,textFontSize:Math.round((i+l)/2),textFontSizeLG:s,textFontSizeSM:n,groupSpace:p,groupOverlapping:-c,groupBorderColor:u}});var Se=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const be=(e,r)=>{const[o,t]=a.useState(1),[n,i]=a.useState(!1),[l,s]=a.useState(!0),c=a.useRef(null),p=a.useRef(null),u=ae(r,c),{getPrefixCls:h,avatar:d}=a.useContext(T),g=a.useContext(B),b=()=>{if(!p.current||!c.current)return;const m=p.current.offsetWidth,v=c.current.offsetWidth;if(m!==0&&v!==0){const{gap:E=4}=e;E*2<v&&t(v-E*2<m?(v-E*2)/m:1)}};a.useEffect(()=>{i(!0)},[]),a.useEffect(()=>{s(!0),t(1)},[e.src]),a.useEffect(b,[e.gap]);const x=()=>{const{onError:m}=e;(m==null?void 0:m())!==!1&&s(!1)},{prefixCls:P,shape:C,size:$="default",src:y,srcSet:z,icon:S,className:j,rootClassName:U,alt:Y,draggable:Z,children:I,crossOrigin:J}=e,k=Se(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),f=$==="default"?g==null?void 0:g.size:$,Q=Object.keys(typeof f=="object"?f||{}:{}).some(m=>["xs","sm","md","lg","xl","xxl"].includes(m)),_=se(Q),V=a.useMemo(()=>{if(typeof f!="object")return{};const m=le.find(E=>_[E]),v=f[m];return v?{width:v,height:v,lineHeight:`${v}px`,fontSize:S?v/2:18}:{}},[_,f]),O=h("avatar",P),[K,ee]=F(O),te=N({[`${O}-lg`]:f==="large",[`${O}-sm`]:f==="small"}),A=a.isValidElement(y),re=C||(g==null?void 0:g.shape)||"circle",oe=N(O,te,d==null?void 0:d.className,`${O}-${re}`,{[`${O}-image`]:A||y&&l,[`${O}-icon`]:!!S},j,U,ee),ne=typeof f=="number"?{width:f,height:f,lineHeight:`${f}px`,fontSize:S?f/2:18}:{};let w;if(typeof y=="string"&&l)w=a.createElement("img",{src:y,draggable:Z,srcSet:z,onError:x,alt:Y,crossOrigin:J});else if(A)w=y;else if(S)w=S;else if(n||o!==1){const m=`scale(${o}) translateX(-50%)`,v={msTransform:m,WebkitTransform:m,transform:m},E=typeof f=="number"?{lineHeight:`${f}px`}:{};w=a.createElement(ie,{onResize:b},a.createElement("span",{className:`${O}-string`,ref:p,style:Object.assign(Object.assign({},E),v)},I))}else w=a.createElement("span",{className:`${O}-string`,style:{opacity:0},ref:p},I);return delete k.onError,delete k.gap,K(a.createElement("span",Object.assign({},k,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ne),V),d==null?void 0:d.style),k.style),className:oe,ref:u}),w))},Ce=a.forwardRef(be),G=Ce,R=e=>e?typeof e=="function"?e():e:null,$e=e=>{const{componentCls:r,popoverColor:o,minWidth:t,fontWeightStrong:n,popoverPadding:i,boxShadowSecondary:l,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:p,marginXS:u,colorBgElevated:h,popoverBg:d}=e;return[{[r]:Object.assign(Object.assign({},M(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":h,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:d,backgroundClip:"padding-box",borderRadius:c,boxShadow:l,padding:i},[`${r}-title`]:{minWidth:t,marginBottom:u,color:s,fontWeight:n},[`${r}-inner-content`]:{color:o}})},pe(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},Oe=e=>{const{componentCls:r}=e;return{[r]:de.map(o=>{const t=e[`${o}6`];return{[`&${r}-${o}`]:{"--antd-arrow-background-color":t,[`${r}-inner`]:{backgroundColor:t},[`${r}-arrow`]:{background:"transparent"}}}})}},Pe=e=>{const{componentCls:r,lineWidth:o,lineType:t,colorSplit:n,paddingSM:i,controlHeight:l,fontSize:s,lineHeight:c,padding:p}=e,u=l-Math.round(s*c),h=u/2,d=u/2-o,g=p;return{[r]:{[`${r}-inner`]:{padding:0},[`${r}-title`]:{margin:0,padding:`${h}px ${g}px ${d}px`,borderBottom:`${o}px ${t} ${n}`},[`${r}-inner-content`]:{padding:`${i}px ${g}px`}}}},D=H("Popover",e=>{const{colorBgElevated:r,colorText:o,wireframe:t}=e,n=L(e,{popoverPadding:12,popoverBg:r,popoverColor:o});return[$e(n),Oe(n),t&&Pe(n),ce(n,"zoom-big")]},e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]});var ze=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const Ee=(e,r,o)=>{if(!(!r&&!o))return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:`${e}-title`},R(r)),a.createElement("div",{className:`${e}-inner-content`},R(o)))},we=e=>{const{hashId:r,prefixCls:o,className:t,style:n,placement:i="top",title:l,content:s,children:c}=e;return a.createElement("div",{className:N(r,o,`${o}-pure`,`${o}-placement-${i}`,t),style:n},a.createElement("div",{className:`${o}-arrow`}),a.createElement(ge,Object.assign({},e,{className:r,prefixCls:o}),c||Ee(o,l,s)))},je=e=>{const{prefixCls:r}=e,o=ze(e,["prefixCls"]),{getPrefixCls:t}=a.useContext(T),n=t("popover",r),[i,l]=D(n);return i(a.createElement(we,Object.assign({},o,{prefixCls:n,hashId:l})))},Ne=je;var ke=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const Re=e=>{let{title:r,content:o,prefixCls:t}=e;return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:`${t}-title`},R(r)),a.createElement("div",{className:`${t}-inner-content`},R(o)))},X=a.forwardRef((e,r)=>{const{prefixCls:o,title:t,content:n,overlayClassName:i,placement:l="top",trigger:s="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:p=.1,overlayStyle:u={}}=e,h=ke(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:d}=a.useContext(T),g=d("popover",o),[b,x]=D(g),P=d(),C=N(i,x);return b(a.createElement(ue,Object.assign({placement:l,trigger:s,mouseEnterDelay:c,mouseLeaveDelay:p,overlayStyle:u},h,{prefixCls:g,overlayClassName:C,ref:r,overlay:t||n?a.createElement(Re,{prefixCls:g,title:t,content:n}):null,transitionName:me(P,"zoom-big",h.transitionName),"data-popover-inject":!0})))});X._InternalPanelDoNotUseOrYouWillBeFired=Ne;const Te=X,W=e=>{const{size:r,shape:o}=a.useContext(B),t=a.useMemo(()=>({size:e.size||r,shape:e.shape||o}),[e.size,e.shape,r,o]);return a.createElement(B.Provider,{value:t},e.children)},Be=e=>{const{getPrefixCls:r,direction:o}=a.useContext(T),{prefixCls:t,className:n,rootClassName:i,style:l,maxCount:s,maxStyle:c,size:p,shape:u,maxPopoverPlacement:h="top",maxPopoverTrigger:d="hover",children:g}=e,b=r("avatar",t),x=`${b}-group`,[P,C]=F(b),$=N(x,{[`${x}-rtl`]:o==="rtl"},n,i,C),y=fe(g).map((S,j)=>ve(S,{key:`avatar-key-${j}`})),z=y.length;if(s&&s<z){const S=y.slice(0,s),j=y.slice(s,z);return S.push(a.createElement(Te,{key:"avatar-popover-key",content:j,trigger:d,placement:h,overlayClassName:`${x}-popover`},a.createElement(G,{style:c},`+${z-s}`))),P(a.createElement(W,{shape:u,size:p},a.createElement("div",{className:$,style:l},S)))}return P(a.createElement(W,{shape:u,size:p},a.createElement("div",{className:$,style:l},y)))},Ie=Be,q=G;q.Group=Ie;const Ae=q;export{Ae as A};