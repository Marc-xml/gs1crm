import{ah as e}from"./index-Cd0kSdaF.js";import{C as s}from"./CrudModule-CG4k2jkD.js";import{D as r}from"./index-Dy4pQBRG.js";import{E as c}from"./IdurarOs-Vv71th3u.js";import"./actions-BIG0idwq.js";import"./index-CPNcZCnD.js";import"./index-D1k_-FKY.js";import"./ErpApp-DLeU0-DG.js";import"./DownOutlined-BTlj5zpM.js";import"./helpers-YOjbs1_d.js";import"./index-BTSHaKkP.js";import"./fade-Bo0QsAeU.js";import"./countryList-ChNSU-S2.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-DZGkyCsu.js";import"./useDate-BcaeHTEz.js";import"./useDebounce-goFyg7-P.js";import"./index-DHqFXhNz.js";import"./DeleteOutlined-NBcA4Z5u.js";import"./ArrowRightOutlined-YrjynSb6.js";import"./Table-OwE06Nju.js";import"./PlusOutlined-Eme4bCvn.js";import"./index-ByHBXP24.js";import"./index-C7JjO8bM.js";import"./useFetch-BkNAQUmQ.js";import"./index-CMxyMDTc.js";const o={name:{type:"string",required:!0},mainContact:{type:"search",renderAsTag:!0,label:"Contact",entity:"people",redirectLabel:"Add New Person",withRedirect:!0,urlToRedirect:"/people",displayLabels:["firstname","lastname"],searchFields:"firstname,lastname",dataIndex:["mainContact","firstname"]},country:{type:"country"},phone:{type:"phone"},email:{type:"email",required:!0},website:{type:"url"}};function k(){const t=c(),a="company",i={displayLabels:["name"],searchFields:"name,phone,eamil"},m=["name"],n={PANEL_TITLE:t("company"),DATATABLE_TITLE:t("company_list"),ADD_NEW_ENTITY:t("add_new_company"),ENTITY_NAME:t("company")},p={...{entity:a,...n},fields:o,searchConfig:i,deleteModalLabels:m};return e.jsx(s,{createForm:e.jsx(r,{fields:o}),updateForm:e.jsx(r,{fields:o}),config:p})}export{k as default};
