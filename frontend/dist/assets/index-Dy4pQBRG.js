import{a as R,ai as W,ah as r}from"./index-Cd0kSdaF.js";import{F as $,E as f,a1 as b,a5 as _,C as E,a0 as u}from"./IdurarOs-Vv71th3u.js";import{u as N,a as P}from"./useDate-BcaeHTEz.js";import{A as M}from"./index-ByHBXP24.js";import{D as U,S as z}from"./index-C7JjO8bM.js";import{s as d}from"./index-KrFx5yLV.js";import{S as G,c as H}from"./countryList-ChNSU-S2.js";import{T as L}from"./index-CMxyMDTc.js";import{S as l}from"./index-DHqFXhNz.js";import{T as j}from"./index-DZGkyCsu.js";function re({fields:e,isUpdateForm:y=!1}){const[i,s]=R.useState(),h=W($);return r.jsx("div",{style:{direction:h},children:Object.keys(e).map(m=>{let n=e[m];if(y&&!n.disableForUpdate||!n.disableForForm){if(n.name=m,n.label||(n.label=m),n.hasFeedback)return r.jsx(w,{feedback:i,setFeedback:s,field:n},m);if(i&&n.feedback){if(i==n.feedback)return r.jsx(w,{field:n},m)}else return r.jsx(w,{field:n},m)}})})}function w({field:e,feedback:y,setFeedback:i}){const s=f(),h=N(),{dateFormat:m}=P(),{TextArea:n}=b,V=()=>{var t;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(l,{showSearch:e.showSearch,defaultValue:e.defaultValue,style:{width:"100%"},children:(t=e.options)==null?void 0:t.map(a=>r.jsx(l.Option,{value:a.value,children:a.label},`${d.generate()}`))})})},S=()=>{var t;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(l,{defaultValue:e.defaultValue,style:{width:"100%"},children:(t=e.options)==null?void 0:t.map(a=>r.jsx(l.Option,{value:a.value,children:r.jsx(j,{bordered:!1,color:a.color,children:s(a.label)})},`${d.generate()}`))})})},q=({feedbackValue:t,lanchFeedback:a})=>{var o;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(l,{onSelect:p=>a(p),value:t,style:{width:"100%"},children:(o=e.options)==null?void 0:o.map(p=>r.jsx(l.Option,{value:p.value,children:s(p.label)},`${d.generate()}`))})})},F=()=>{var t;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(l,{showSearch:!0,defaultValue:e.defaultValue,filterOption:(a,o)=>((o==null?void 0:o.label)??"").toLowerCase().includes(a.toLowerCase()),filterSort:(a,o)=>((a==null?void 0:a.label)??"").toLowerCase().startsWith(((o==null?void 0:o.label)??"").toLowerCase()),style:{width:"100%"},children:(t=e.options)==null?void 0:t.map(a=>r.jsx(l.Option,{value:a.value,label:a.label,children:r.jsx(j,{bordered:!1,color:a.color,children:a.label})},`${d.generate()}`))})})},I=()=>{var t;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(l,{defaultValue:e.defaultValue,style:{width:"100%"},children:(t=e.options)==null?void 0:t.map(a=>r.jsx(l.Option,{value:a.value,children:r.jsx(j,{bordered:!1,color:a.color,children:s(a.label)})},`${d.generate()}`))})})},T=()=>{var t;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(l,{mode:"multiple",defaultValue:e.defaultValue,style:{width:"100%"},children:(t=e.options)==null?void 0:t.map(a=>r.jsx(l.Option,{value:a.value,children:a.label},`${d.generate()}`))})})},O=()=>r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(l,{showSearch:!0,defaultValue:e.defaultValue,optionFilterProp:"children",filterOption:(t,a)=>((a==null?void 0:a.label)??"").toLowerCase().includes(t.toLowerCase()),filterSort:(t,a)=>((t==null?void 0:t.label)??"").toLowerCase().startsWith(((a==null?void 0:a.label)??"").toLowerCase()),style:{width:"100%"},children:H.map(t=>r.jsxs(l.Option,{value:t.value,label:s(t.label),children:[(t==null?void 0:t.icon)&&(t==null?void 0:t.icon)+" ",s(t.label)]},t.value))})}),k=()=>r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],children:r.jsx(M,{entity:e.entity,displayLabels:e.displayLabels,searchFields:e.searchFields,outputValue:e.outputValue,withRedirect:e.withRedirect,urlToRedirect:e.urlToRedirect,redirectLabel:e.redirectLabel})}),D={select:r.jsx(V,{}),selectWithTranslation:r.jsx(S,{}),selectWithFeedback:r.jsx(q,{lanchFeedback:i,feedbackValue:y}),color:r.jsx(F,{}),tag:r.jsx(I,{}),array:r.jsx(T,{}),country:r.jsx(O,{}),search:r.jsx(k,{})},C={string:r.jsx(b,{autoComplete:"off",maxLength:e.maxLength,defaultValue:e.defaultValue}),url:r.jsx(b,{addonBefore:"http://",autoComplete:"off",placeholder:"www.example.com"}),textarea:r.jsx(n,{rows:4}),email:r.jsx(b,{autoComplete:"off",placeholder:"email@example.com"}),number:r.jsx(L,{style:{width:"100%"}}),phone:r.jsx(b,{style:{width:"100%"},placeholder:"+1 123 456 789"}),boolean:r.jsx(G,{checkedChildren:r.jsx(_,{}),unCheckedChildren:r.jsx(E,{}),defaultValue:!0}),date:r.jsx(U,{placeholder:s("select_date"),style:{width:"100%"},format:m}),async:r.jsx(z,{entity:e.entity,displayLabels:e.displayLabels,outputValue:e.outputValue,loadDefault:e.loadDefault,withRedirect:e.withRedirect,urlToRedirect:e.urlToRedirect,redirectLabel:e.redirectLabel}),currency:r.jsx(L,{className:"moneyInput",min:0,controls:!1,addonAfter:h.currency_position==="after"?h.currency_symbol:void 0,addonBefore:h.currency_position==="before"?h.currency_symbol:void 0})},c={string:"string",textarea:"string",number:"number",phone:"string",url:"url",website:"url",email:"email"},v=D[e.type];let x=C[e.type];return x||(x=C.string),v?r.jsx(r.Fragment,{children:v}):r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:c[e.type]??"any"}],valuePropName:e.type==="boolean"?"checked":"value",children:x})}export{re as D};
