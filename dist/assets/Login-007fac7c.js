import{r as x,t as c,P as a,j as n,B as u}from"./index-09831358.js";import{F as l,u as h,R as j,C as d}from"./useMutation-e6a1004b.js";import{k as y}from"./react-toastify.esm-cdfe1485.js";import{I as p,L as v}from"./actions-53774f65.js";import{A as b}from"./index-5c3f76de.js";function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},m.apply(this,arguments)}function w(e,r){if(e==null)return{};var s=O(e,r),t,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function O(e,r){if(e==null)return{};var s={},t=Object.keys(e),i,o;for(o=0;o<t.length;o++)i=t[o],!(r.indexOf(i)>=0)&&(s[i]=e[i]);return s}var f=x.forwardRef(function(e,r){var s=e.color,t=s===void 0?"currentColor":s,i=e.size,o=i===void 0?24:i,g=w(e,["color","size"]);return c.createElement("svg",m({ref:r,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},g),c.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),c.createElement("circle",{cx:"12",cy:"7",r:"4"}))});f.propTypes={color:a.string,size:a.oneOfType([a.string,a.number])};f.displayName="User";const P=f;const I="/assets/signIn-d3a4fd7c.png",L=()=>{const[e]=l.useForm(),r=h({mutationFn:async t=>await v(t)}),s=async t=>{await r.mutateAsync(t)};return n.jsxs("main",{className:"login",children:[n.jsxs(j,{justify:"space-between",children:[n.jsx(d,{xs:0,sm:0,md:18,lg:16,xl:16,xxl:16,children:n.jsx("section",{className:"img-part d-flex justify-center align-center",children:n.jsx("img",{src:I,alt:"sign",width:"auto",height:500})})}),n.jsx(d,{xs:24,sm:24,md:6,lg:8,xl:8,xxl:8,children:n.jsx("section",{className:"form-part d-flex justify-center flex-column",children:n.jsxs(l,{onFinish:s,form:e,layout:"vertical",id:"login-form",children:[n.jsxs("div",{className:"sign-logo d-flex flex-column align-center justify-center",children:[n.jsx(b,{className:"",size:"large",icon:n.jsx(P,{color:"#fff"}),style:{background:"green"}}),n.jsx("h1",{children:"Войти"})]}),n.jsx(l.Item,{label:"Логин",name:"name",children:n.jsx(p,{disabled:r.isPending})}),n.jsx(l.Item,{label:"Пароль",name:"password",children:n.jsx(p,{type:"password",disabled:r.isPending})}),n.jsx(u,{loading:r.isPending,htmlType:"submit",form:"login-form",type:"primary",className:"w-100 m-t-2",children:"Войти"})]})})})]}),n.jsx(y,{})]})};export{L as default};