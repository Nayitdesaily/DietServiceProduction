import{r,o,j as t,af as y,ab as I,ac as l,cv as d,F as m,ai as D,aj as p}from"./index.9f9eb0a7.js";import{Q as F}from"./index.es.8774bef4.js";import{m as u}from"./mock.5a17a06b.js";import"./emotion-is-prop-valid.esm.22611268.js";import"./emotion-memoize.esm.06f0e458.js";function L(){u.restore();const[h,n]=r.exports.useState([]),[f,g]=r.exports.useState(!0),[x,b]=r.exports.useState([]),[w,C]=r.exports.useState([]),[s,v]=r.exports.useState(""),S=[{name:"Categoria",selector:e=>e.categoria,sortable:!0,width:"15rem",center:!0},{name:"Grupo",selector:e=>e.grupo,sortable:!0,width:"16rem",center:!0},{name:"Alimento",selector:e=>e.alimento,width:"15rem",center:!0},{name:"Media Casera",selector:e=>e.mediacasera,sortable:!0,width:"15rem",center:!0},{name:"Cantidad Exacta",selector:e=>e.cantidadexacta,sortable:!0,width:"15rem",center:!0}];function j(e){return e.filter(a=>a.categoria.includes(s))}return r.exports.useEffect(()=>{async function e(){await p.get("https://dietservice.bitjoins.pe/api/intercambios").then(a=>{var c;let i=(c=a.data)==null?void 0:c.map(E=>E.categoria);i=[...new Set(i)],b(i),C(a.data)})}e()},[]),r.exports.useEffect(()=>{async function e(){await p.get("https://dietservice.bitjoins.pe/api/intercambios").then(a=>{n(a.data),console.log(a.data)}),g(!1)}e()},[]),r.exports.useEffect(()=>{let e=j(w);n(e)},[s]),o("div",{children:[t(y,{children:o(I,{children:[t(l,{md:6,children:t(d,{children:o(m,{id:"exampleEmail",name:"email",placeholder:"with a placeholder",type:"select",onChange:e=>v(e.target.value),children:[t("option",{value:"",children:"Selecciona la categoria"}),x.map((e,a)=>t("option",{value:e,children:e},a))]})})}),t(l,{md:6,children:t(d,{children:t(m,{id:"examplePassword",name:"password",placeholder:"Ejem.",type:"text"})})})]})}),t(F,{columns:S,data:h,pagination:!0,noDataComponent:"No hay data",progressPending:f,progressComponent:t(D,{children:"Loading..."})})]})}function A(){return u.restore(),o("div",{children:[t("h4",{children:"Lista Intercambio"}),t(L,{})]})}export{A as default};