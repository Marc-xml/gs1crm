import{ah as a}from"./index-Cd0kSdaF.js";import{d as u}from"./index-D1k_-FKY.js";import{E as c}from"./IdurarOs-Vv71th3u.js";import"./index-CPNcZCnD.js";import{E as y}from"./selectors-CaHUuIKE.js";import{E as f}from"./index-CGufHpc3.js";import{a as x,u as E}from"./useDate-BcaeHTEz.js";import"./ErpApp-DLeU0-DG.js";import"./DownOutlined-BTlj5zpM.js";import"./index-ByHBXP24.js";import"./useDebounce-goFyg7-P.js";import"./index-DHqFXhNz.js";import"./actions-BiJ_6wdU.js";import"./index-KrFx5yLV.js";import"./Table-OwE06Nju.js";import"./FilePdfOutlined-DEQ3xdwW.js";import"./DeleteOutlined-NBcA4Z5u.js";import"./ArrowRightOutlined-YrjynSb6.js";import"./helpers-YOjbs1_d.js";import"./PlusOutlined-Eme4bCvn.js";import"./index-BTSHaKkP.js";import"./fade-Bo0QsAeU.js";function b({config:t}){return a.jsx(y,{children:a.jsx(f,{config:t})})}function q(){const t=c(),{dateFormat:n}=x(),{moneyFormatter:r}=E(),o={entity:"client",displayLabels:["number"],searchFields:"number",outputValue:"_id"},i=["number"],m=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Amount"),dataIndex:"amount",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,l)=>r({amount:e,currency_code:l.currency})},{title:t("Date"),dataIndex:"date",render:e=>u(e).format(n)},{title:t("Number"),dataIndex:["invoice","number"]},{title:t("year"),dataIndex:["invoice","year"]},{title:t("Payment Mode"),dataIndex:["paymentMode","name"]}],s="payment",d={PANEL_TITLE:t("payment"),DATATABLE_TITLE:t("payment_list"),ADD_NEW_ENTITY:t("add_new_payment"),ENTITY_NAME:t("payment")},p={...{entity:s,...d},disableAdd:!0,dataTableColumns:m,searchConfig:o,deleteModalLabels:i};return a.jsx(b,{config:p})}export{q as default};