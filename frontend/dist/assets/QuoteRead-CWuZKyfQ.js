import{aq as m,ar as n,a as p,ai as c,ah as e,aw as d}from"./index-Cd0kSdaF.js";import{$ as E,E as l}from"./IdurarOs-Vv71th3u.js";import"./index-CPNcZCnD.js";import{s as f,E as a}from"./selectors-CaHUuIKE.js";import{R as x}from"./ReadItem-Ct-tJ8z3.js";import{e as L}from"./actions-BiJ_6wdU.js";import"./index-D1k_-FKY.js";import"./ErpApp-DLeU0-DG.js";import"./DownOutlined-BTlj5zpM.js";import"./index-KrFx5yLV.js";import"./useDate-BcaeHTEz.js";import"./useMail-DJ4qEEWM.js";import"./statusTagColor-DxbKI3gy.js";import"./index-DZGkyCsu.js";import"./RetweetOutlined-BcHIyFHS.js";import"./index-BSUnYqS5.js";import"./CloseCircleOutlined-BhBCd0r7.js";import"./FilePdfOutlined-DEQ3xdwW.js";function T({config:t}){const s=m(),{id:o}=n();p.useLayoutEffect(()=>{s(L.read({entity:t.entity,id:o}))},[o]);const{result:r,isSuccess:i,isLoading:u=!0}=c(f);return u?e.jsx(a,{children:e.jsx(d,{})}):e.jsx(a,{children:i?e.jsx(x,{config:t,selectedItem:r}):e.jsx(E,{entity:t.entity})})}function B(){const t=l(),s="quote",o={PANEL_TITLE:t("quote"),DATATABLE_TITLE:t("quote_list"),ADD_NEW_ENTITY:t("add_new_quote"),ENTITY_NAME:t("quote")},r={entity:s,...o};return e.jsx(T,{config:r})}export{B as default};
