import{a as u,h as S,ai as y,ah as e}from"./index-Cd0kSdaF.js";import{I,E as c,a0 as s,a1 as r,a5 as h,C as b,B as f}from"./IdurarOs-Vv71th3u.js";import{s as _,C as v}from"./CrudModule-CG4k2jkD.js";import{S as g}from"./index-DHqFXhNz.js";import{S as C}from"./countryList-ChNSU-S2.js";import{f as T}from"./ErpApp-DLeU0-DG.js";import{P as E}from"./PlusOutlined-Eme4bCvn.js";import"./actions-BIG0idwq.js";import"./index-CPNcZCnD.js";import"./index-D1k_-FKY.js";import"./DownOutlined-BTlj5zpM.js";import"./helpers-YOjbs1_d.js";import"./index-BTSHaKkP.js";import"./fade-Bo0QsAeU.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-DZGkyCsu.js";import"./useDate-BcaeHTEz.js";import"./useDebounce-goFyg7-P.js";import"./DeleteOutlined-NBcA4Z5u.js";import"./ArrowRightOutlined-YrjynSb6.js";import"./Table-OwE06Nju.js";var k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},V=function(n,l){return u.createElement(I,S({},n,{ref:l,icon:k}))};const F=u.forwardRef(V);function L(){const t=c();return e.jsx(s.List,{name:"settingValue",initialValue:[{Label:"",Value:""}],children:(n,{add:l,remove:i})=>e.jsxs(e.Fragment,{children:[n.map(a=>e.jsxs(T,{align:"center",children:[e.jsx(s.Item,{...a,label:t("Label"),name:[a.name,"label"],rules:[{required:!0}],children:e.jsx(r,{})}),e.jsx(s.Item,{...a,label:t("Value"),name:[a.name,"Value"],rules:[{required:!0}],children:e.jsx(r,{})}),e.jsx(F,{onClick:()=>i(a.name)})]},a.key)),e.jsx(s.Item,{children:e.jsx(f,{type:"dashed",onClick:()=>l(),block:!0,icon:e.jsx(E,{}),children:"Add Select Options"})})]})})}function x({isUpdateForm:t=!1}){const n=c(),{result:l}=y(_),[i,a]=u.useState(null),o=d=>{a(d)};return e.jsxs(e.Fragment,{children:[e.jsx(s.Item,{label:n("Setting Category"),name:"settingCategory",rules:[{required:!0}],children:e.jsx(g,{placeholder:n("Select"),options:[{value:"app_settings",label:n("App Settings")},{value:"crm_settings",label:n("CRM Settings")},{value:"finance_settings",label:n("Finance Settings")},{value:"company_settings",label:n("Company Settings")},{value:"money_format_settings",label:n("Money Format Settings")}]})}),e.jsx(s.Item,{label:n("Setting Name"),name:"settingKey",rules:[{required:!0}],children:e.jsx(r,{type:"text"})}),e.jsx(s.Item,{label:n("type"),name:"settingType",rules:[{required:!0}],children:e.jsx(g,{placeholder:n("Select"),onChange:o,options:[{value:"text",label:"Text"},{value:"number",label:"Number"},{value:"date",label:"Date"},{value:"select",label:"Select"}]})}),i?i==="select"?e.jsx(L,{}):e.jsx(s.Item,{label:"Value",name:"settingValue",rules:[{required:!0}],children:e.jsx(r,{type:i})}):null,e.jsx(s.Item,{label:n("enabled"),name:"enabled",style:{display:"inline-block",width:"100%",paddingRight:"5px"},valuePropName:"checked",initialValue:!0,children:e.jsx(C,{disabled:l?l.isCoreSetting:!1,checkedChildren:e.jsx(h,{}),unCheckedChildren:e.jsx(b,{})})})]})}function te(){const t=c(),n="setting",l={displayLabels:["name"],searchFields:"name",outputValue:"_id"},i=["name"],a=[{title:t("Setting"),dataIndex:"settingKey"},{title:t("Value"),dataIndex:"settingValue"},{title:t("enabled"),dataIndex:"enabled"},{title:t("Core Setting"),dataIndex:"isCoreSetting"}],o=[{title:t("Setting"),dataIndex:"settingKey"},{title:t("Value"),dataIndex:"settingValue",render:m=>`${m}`},{title:t("enabled"),dataIndex:"enabled",key:"enabled",onCell:()=>({props:{style:{width:"60px"}}}),render:(m,p)=>e.jsx(C,{disabled:p.isCoreSetting,checked:p.enabled,checkedChildren:e.jsx(h,{}),unCheckedChildren:e.jsx(b,{})})}],d={PANEL_TITLE:t("settings"),DATATABLE_TITLE:t("settings_list"),ADD_NEW_ENTITY:t("add_new_settings"),ENTITY_NAME:t("setting"),RECORD_ENTITY:t("record_payment")},j={...{entity:n,...d},readColumns:a,dataTableColumns:o,searchConfig:l,deleteModalLabels:i};return e.jsx(v,{createForm:e.jsx(x,{}),updateForm:e.jsx(x,{isUpdateForm:!0}),config:j})}export{te as default};
