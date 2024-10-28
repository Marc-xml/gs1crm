import{a as i,h as D,aq as _,ap as R,ai as f,ah as e,ar as S,aw as O}from"./index-Cd0kSdaF.js";import{I as B,E as w,B as l,W as M,V as k,Z as j,Y as T,X as n,a3 as F}from"./IdurarOs-Vv71th3u.js";import"./index-CPNcZCnD.js";import{c as v,b as W,E as Y}from"./selectors-CaHUuIKE.js";import{P as H}from"./index-D1k_-FKY.js";import{e as g}from"./actions-BiJ_6wdU.js";import{s as y}from"./index-KrFx5yLV.js";import{u as V}from"./useDate-BcaeHTEz.js";import{t as z}from"./statusTagColor-DxbKI3gy.js";import{u as q,S as d}from"./useMail-DJ4qEEWM.js";import{T as U}from"./index-DZGkyCsu.js";import{D as u}from"./index-BSUnYqS5.js";import{C as X}from"./CloseCircleOutlined-BhBCd0r7.js";import{F as Z}from"./FilePdfOutlined-DEQ3xdwW.js";import"./ErpApp-DLeU0-DG.js";import"./DownOutlined-BTlj5zpM.js";var G={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},J=function(o,s){return i.createElement(B,D({},o,{ref:s,icon:G}))};const K=i.forwardRef(J);function Q({config:a,selectedItem:o}){var E;const s=w(),{entity:r,ENTITY_NAME:m}=a,$=_(),{moneyFormatter:c}=V();q({entity:r});const p=R(),{result:x}=f(v),C={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[t,I]=i.useState(o??C),[h,N]=i.useState({});return i.useEffect(()=>{const P=new AbortController;if(x){const{invoice:b,_id:A,...L}=x;I({...L,...b,_id:A})}return()=>P.abort()},[x]),i.useEffect(()=>{t!=null&&t.client&&N(t.client[t.client.type])},[t]),e.jsxs(e.Fragment,{children:[e.jsx(H,{onBack:()=>{p(`/${r.toLowerCase()}`)},title:`${m} # ${t.number}/${t.year||""}`,ghost:!1,tags:e.jsx(U,{color:(E=z(t.paymentStatus))==null?void 0:E.color,children:t.paymentStatus}),extra:[e.jsx(l,{onClick:()=>{p(`/${r.toLowerCase()}`)},icon:e.jsx(X,{}),children:s("Close")},`${y.generate()}`),e.jsx(l,{onClick:()=>{window.open(`${M}${r}/${r}-${t._id}.pdf`,"_blank")},icon:e.jsx(Z,{}),children:s("Download PDF")},`${y.generate()}`),e.jsx(l,{onClick:()=>{$(g.currentAction({actionType:"update",data:t})),p(`/${r.toLowerCase()}/update/${t._id}`)},type:"primary",icon:e.jsx(k,{}),children:s("Edit")},`${y.generate()}`)],style:{padding:"20px 0px"},children:e.jsxs(j,{children:[e.jsx(d,{title:"Status",value:t.status}),e.jsx(d,{title:s("Paid"),value:c({amount:t.amount,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(d,{title:s("SubTotal"),value:c({amount:t.subTotal,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(d,{title:s("Total"),value:c({amount:t.total,currency_code:t.currency}),style:{margin:"0 32px"}})]})}),e.jsx(T,{dashed:!0}),e.jsxs(u,{title:`${s("Client")} : ${t.client.name}`,children:[e.jsx(u.Item,{label:s("Address"),children:h.address}),e.jsx(u.Item,{label:s("email"),children:h.email}),e.jsx(u.Item,{label:s("Phone"),children:h.phone})]}),e.jsx(T,{}),e.jsxs(j,{children:[e.jsx(n,{sm:24,md:12,children:e.jsxs(F.Title,{level:5,children:[s("Payment Information")," :"]})}),e.jsx(n,{sm:24,md:12,style:{textAlign:"right"},children:e.jsx(l,{icon:e.jsx(K,{}),children:s("Show invoice")})})]}),e.jsx("div",{style:{width:"300px",float:"left",textAlign:"right",fontWeight:"700"},children:e.jsxs(j,{gutter:[12,-5],children:[e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Paid")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.amount,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.total,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Paid")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.credit,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Remaining")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.total-t.credit,currency_code:t.currency})})})]})})]})}function ee({config:a}){const o=_(),{id:s}=S();let r=f(W(s));i.useEffect(()=>{o(r?g.currentItem({data:r}):g.read({entity:a.entity,id:s}))},[r]);const{result:m}=f(v);return r=m,e.jsx(Y,{children:r?e.jsx(Q,{config:a,selectedItem:r}):e.jsx(O,{})})}function ye(){const a=w(),o="payment",s={PANEL_TITLE:a("payment"),DATATABLE_TITLE:a("payment_list"),ADD_NEW_ENTITY:a("add_new_payment"),ENTITY_NAME:a("payment")},r={entity:o,...s};return e.jsx(ee,{config:r})}export{ye as default};