import{ap as A,aq as D,ai as I,a as i,ah as t,ar as U,aw as B}from"./index-Cd0kSdaF.js";import{E as C,a0 as b,a2 as M,B as L,Z as F,X as _,Y as P,$ as R}from"./IdurarOs-Vv71th3u.js";import"./index-CPNcZCnD.js";import{d as Y,s as k,E as S}from"./selectors-CaHUuIKE.js";import{e as h}from"./actions-BiJ_6wdU.js";import{d as v,P as O}from"./index-D1k_-FKY.js";import{s as N}from"./index-KrFx5yLV.js";import{u as q}from"./useDate-BcaeHTEz.js";import{c as g}from"./calculate-BDnin_T9.js";import{P as H,F as W}from"./PaymentForm-CN92rl74.js";import{t as $}from"./statusTagColor-DxbKI3gy.js";import{T as w}from"./index-DZGkyCsu.js";import{D as l}from"./index-BSUnYqS5.js";import{C as X}from"./CloseCircleOutlined-BhBCd0r7.js";import"./ErpApp-DLeU0-DG.js";import"./DownOutlined-BTlj5zpM.js";import"./index-C7JjO8bM.js";import"./index-DHqFXhNz.js";import"./useFetch-BkNAQUmQ.js";import"./color-DHucoY0N.js";import"./index-CMxyMDTc.js";function Z({config:n,currentInvoice:s}){const a=C(),o=A();let{entity:m}=n;const r=D(),{isLoading:u,isSuccess:e}=I(Y),[p]=b.useForm(),[j,E]=i.useState(0);i.useEffect(()=>{if(s){const{credit:c,total:x,discount:y,amount:T}=s;E(g.sub(g.sub(x,y),g.sub(g.sub(c,T))));const d={...s};d.date&&(d.date=v(d.date)),p.setFieldsValue(d)}},[s]),i.useEffect(()=>{e&&(p.resetFields(),r(h.resetAction({actionType:"recordPayment"})),r(h.list({entity:m})),o(`/${m.toLowerCase()}/read/${s._id}`))},[e]);const f=c=>{if(s){const{_id:x}=s,y=s.client&&s.client._id;c={...c,invoice:x,client:y}}r(h.update({entity:m,id:s._id,jsonData:c}))};return t.jsx(t.Fragment,{children:t.jsx(M,{isLoading:u,children:t.jsxs(b,{form:p,layout:"vertical",onFinish:f,children:[t.jsx(H,{maxAmount:j}),t.jsx(b.Item,{children:t.jsx(L,{type:"primary",htmlType:"submit",children:a("Update")})})]})})})}function z({config:n,currentItem:s}){var f,c;const a=C(),{entity:o,ENTITY_NAME:m}=n,r=q(),u=A(),[e,p]=i.useState(s);i.useEffect(()=>{const x=new AbortController;if(s){const{invoice:y,_id:T,...d}=s;p({...d,...y,_id:T})}return()=>x.abort()},[s]);const[j,E]=i.useState({});return i.useEffect(()=>{e!=null&&e.client&&E(e.client[e.client.type])},[e]),t.jsxs(t.Fragment,{children:[t.jsx(F,{gutter:[12,12],children:t.jsxs(_,{className:"gutter-row",xs:{span:24},sm:{span:24},md:{span:24},lg:{span:20,push:2},children:[t.jsx(O,{onBack:()=>u(`/${o.toLowerCase()}`),title:`Update  ${m} # ${e.number}/${e.year||""}`,ghost:!1,tags:t.jsx(w,{color:(f=$(e.paymentStatus))==null?void 0:f.color,children:e.paymentStatus}),extra:[t.jsx(L,{onClick:()=>{u(`/${o.toLowerCase()}`)},icon:t.jsx(X,{}),children:a("Cancel")},`${N.generate()}`),t.jsx(L,{onClick:()=>u(`/invoice/read/${e._id}`),icon:t.jsx(W,{}),children:a("Show invoice")},`${N.generate()}`)],style:{padding:"20px 0px"}}),t.jsx(P,{dashed:!0})]})}),t.jsxs(F,{gutter:[12,12],children:[t.jsxs(_,{className:"gutter-row",xs:{span:24,order:2},sm:{span:24,order:2},md:{span:10,order:2,push:2},lg:{span:10,order:2,push:4},children:[t.jsx("div",{className:"space50"}),t.jsxs(l,{title:`${a("Client")} : ${e.client.name}`,column:1,children:[t.jsx(l.Item,{label:a("email"),children:j.email}),t.jsx(l.Item,{label:a("Phone"),children:j.phone}),t.jsx(P,{dashed:!0}),t.jsx(l.Item,{label:a("Payment Status"),children:t.jsx(w,{color:(c=$(e.paymentStatus))==null?void 0:c.color,children:e.paymentStatus})}),t.jsx(l.Item,{label:a("SubTotal"),children:r.moneyFormatter({amount:e.subTotal,currency_code:e.currency})}),t.jsx(l.Item,{label:a("Total"),children:r.moneyFormatter({amount:e.total,currency_code:e.currency})}),t.jsx(l.Item,{label:"Discount",children:r.moneyFormatter({amount:e.discount,currency_code:e.currency})}),t.jsx(l.Item,{label:"Balance",children:r.moneyFormatter({amount:e.credit,currency_code:e.currency})})]})]}),t.jsx(_,{className:"gutter-row",xs:{span:24,order:1},sm:{span:24,order:1},md:{span:12,order:1},lg:{span:10,order:1,push:2},children:t.jsx(Z,{config:n,currentInvoice:e})})]})]})}function G({config:n}){const s=D(),{id:a}=U();i.useLayoutEffect(()=>{s(h.read({entity:n.entity,id:a}))},[a]);const{result:o,isSuccess:m,isLoading:r=!0}=I(k);return i.useLayoutEffect(()=>{o&&s(h.currentAction({actionType:"update",id:a,data:o}))},[o]),r?t.jsx(S,{children:t.jsx(B,{})}):t.jsx(S,{children:m?t.jsx(z,{config:n,currentItem:o}):t.jsx(R,{entity:n.entity})})}function jt(){const n=C(),s="payment",a={PANEL_TITLE:n("payment"),DATATABLE_TITLE:n("payment_list"),ADD_NEW_ENTITY:n("add_new_payment"),ENTITY_NAME:n("payment")},o={entity:s,...a};return t.jsx(G,{config:o})}export{jt as default};
