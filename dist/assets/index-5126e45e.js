import{j as e}from"./index-77416aa9.js";import{u as l,T as o}from"./index-d1ec4b0d.js";import{g as r}from"./actions-5b814d08.js";import"./Sider-03914fe4.js";import"./react-toastify.esm-5034558b.js";const x=()=>{const{data:t,isPending:n}=l({queryKey:["application"],queryFn:r,refetchOnWindowFocus:!1}),i=[{title:"Наименования",dataIndex:"name",key:"name",flex:1},{title:"Услуга",dataIndex:"type_of_service",key:"type_of_service",flex:1,align:"center"},{title:"Название",dataIndex:"organization_name",key:"organization_name",flex:1,align:"center"},{title:"Номер",dataIndex:"number",key:"number",flex:1,align:"center"},{title:"Комментария",dataIndex:"comment",key:"comment",flex:1,align:"center"},{title:"Дата создания",dataIndex:"create_data",key:"create_data",flex:1,align:"center"}];return e.jsxs("main",{className:"application",children:[e.jsx("h1",{children:"Application"}),e.jsx("div",{className:"application-table m-t-2",children:e.jsx(o,{loading:n,column:i,row:t==null?void 0:t.map(a=>({...a,key:a.id}))})})]})};export{x as default};