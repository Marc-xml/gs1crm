import{ah as e}from"./index-Cd0kSdaF.js";import{C as n}from"./CrudModule-CG4k2jkD.js";import{D as t}from"./index-Dy4pQBRG.js";import{c}from"./color-DHucoY0N.js";import{E as l}from"./IdurarOs-Vv71th3u.js";import"./actions-BIG0idwq.js";import"./index-CPNcZCnD.js";import"./index-D1k_-FKY.js";import"./ErpApp-DLeU0-DG.js";import"./DownOutlined-BTlj5zpM.js";import"./helpers-YOjbs1_d.js";import"./index-BTSHaKkP.js";import"./fade-Bo0QsAeU.js";import"./countryList-ChNSU-S2.js";import"./index-KrFx5yLV.js";import"./index-DZGkyCsu.js";import"./useDate-BcaeHTEz.js";import"./useDebounce-goFyg7-P.js";import"./index-DHqFXhNz.js";import"./DeleteOutlined-NBcA4Z5u.js";import"./ArrowRightOutlined-YrjynSb6.js";import"./Table-OwE06Nju.js";import"./PlusOutlined-Eme4bCvn.js";import"./index-ByHBXP24.js";import"./index-C7JjO8bM.js";import"./useFetch-BkNAQUmQ.js";import"./index-CMxyMDTc.js";const r={name:{type:"stringWithColor",required:!0},description:{type:"textarea",required:!0},color:{type:"color",options:[...c],required:!0},enabled:{type:"boolean",required:!0}};function v(){const o=l(),i="expensecategory",p={displayLabels:["name"],searchFields:"name"},m=["name"],a={PANEL_TITLE:o("Expense_Category"),DATATABLE_TITLE:o("Expense_Category_list"),ADD_NEW_ENTITY:o("add_new_Expense_Category"),ENTITY_NAME:o("Expense_Category")},s={...{entity:i,...a},fields:r,searchConfig:p,deleteModalLabels:m};return e.jsx(n,{createForm:e.jsx(t,{fields:r}),updateForm:e.jsx(t,{fields:r}),config:s})}export{v as default};