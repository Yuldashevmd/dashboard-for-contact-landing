import{r as n,j as e,B as x,q as y}from"./index-77416aa9.js";import{u as T,T as C}from"./index-d1ec4b0d.js";import{F as i,u as N}from"./useMutation-030d6ef5.js";import{I as r,n as D,o as K,p as E,f as P,T as j,q as Q}from"./actions-5b814d08.js";import{I as g}from"./constants-0162285d.js";import{D as z,P as A,T as L}from"./index-fc034bb5.js";import{A as R}from"./index-3ac41cdc.js";import"./Sider-03914fe4.js";import"./react-toastify.esm-5034558b.js";const J=()=>{const[a]=i.useForm(),[h,o]=n.useState(null),[_,c]=n.useState(null),[v,d]=n.useState(!1),[m,f]=n.useState(null),{data:p,isPending:w}=T({queryKey:["services"],queryFn:Q,refetchOnWindowFocus:!1}),F=N({mutationFn:s=>D(s)}),k=async s=>{F.mutate(s.id),y.invalidateQueries({queryKey:["services"]})},I=async s=>{const t=new FormData;t.append("title",s.title),t.append("title_ru",s.title_ru),t.append("title_en",s.title_en),t.append("servise_image",h);const u=await K(m.id,t);y.invalidateQueries({queryKey:["services"]}),l(),console.log(u,"res")},S=async s=>{const t=new FormData;t.append("title",s.title),t.append("title_ru",s.title_ru),t.append("title_en",s.title_en),t.append("servise_image",h);const u=await E(t);y.invalidateQueries({queryKey:["services"]}),l(),console.log(u,"res")},b=async s=>{const t=await P(s.target.files[0]);o(s.target.files[0]),c(t)},l=()=>{n.startTransition(()=>{o(null),c(null),d(!1),f(null),a.resetFields()})},q=[{title:"Название",dataIndex:"title",key:"title",flex:1},{title:"Фото",dataIndex:"image_link",key:"image_link",render:s=>e.jsx(R,{src:g+""+s,size:80,shape:"square",style:{boxShadow:"0 0 10px 1px lightgrey"}}),align:"center"},{title:"Дата создания",dataIndex:"create_data",key:"create_data",flex:1,align:"center"},{title:"Дейтсвия",dataIndex:"action",key:"action",flex:1,align:"center",render:(s,t)=>e.jsxs("div",{className:"d-flex align-center justify-center gap-x-1",children:[e.jsx(j,{title:"Изменить",placement:"top",children:e.jsx(A,{cursor:"pointer",size:20,color:"#252525",onClick:()=>{d(!0),f(t),a.setFieldValue("title",t.title),a.setFieldValue("title_ru",t.title_ru),a.setFieldValue("title_en",t.title_en),o(t.image_link),c(g+""+t.image_link)}})}),e.jsx(j,{title:"Удалить",placement:"top",children:e.jsx(L,{cursor:"pointer",size:20,color:"#252525",onClick:()=>k(t)})})]})}];return e.jsxs("main",{className:"services",children:[e.jsx("h1",{children:"Services"}),e.jsxs("div",{className:"services-table m-t-2",children:[e.jsx("div",{className:"w-100 d-flex align-center justify-end",children:e.jsx(x,{className:"m-y-1",type:"primary",onClick:()=>d(!0),children:"Создать +"})}),e.jsx(C,{loading:w,column:q,row:p==null?void 0:p.map(s=>({...s,key:s.id}))})]}),e.jsx(z,{history:{record:m,open:v,closeDrawer:l,preview:_,title:"Добавить",footer:e.jsxs("div",{className:"d-flex align-center gap-x-2",children:[e.jsx(x,{type:"primary",form:"history-form",htmlType:"submit",children:"Сохранить"}),e.jsx(x,{danger:!0,onClick:l,children:"Отмена"})]})},children:e.jsxs(i,{typeof:"form-data",onFinish:m?I:S,form:a,id:"history-form",layout:"vertical",children:[e.jsx(i.Item,{name:"title",label:"Название UZ",children:e.jsx(r,{type:"text"})}),e.jsx(i.Item,{name:"title_ru",label:"Название РУ",children:e.jsx(r,{type:"text"})}),e.jsx(i.Item,{name:"title_en",label:"Название EN",children:e.jsx(r,{type:"text"})}),e.jsx(i.Item,{name:"image",label:"Картинка",children:e.jsx(r,{type:"file",onChange:b})})]})})]})};export{J as default};