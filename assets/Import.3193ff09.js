import{r as c,o as a,j as e,aa as x,ab as p,aO as y,aP as O,aQ as W,ac as _,af as z,ag as R,aR as A,al as B}from"./index.4804ad6d.js";import{r as E,u as H}from"./xlsx.8087b80f.js";import{u as I}from"./file-uploader.49b2bbcf.js";import{E as P}from"./index.769de4ef.js";import{W as X}from"./App.03f23521.js";import"./tslib.439001b8.js";const G=()=>{const[w,S]=c.exports.useState(""),[d,f]=c.exports.useState(""),[l,C]=c.exports.useState([]),[N,D]=c.exports.useState([]),j=(t,r)=>{C(t),S(r)},{getRootProps:v,getInputProps:k}=I({multiple:!1,onDrop:t=>{const r=new FileReader;r.onload=function(){const i=r.result,n=E(i,{type:"binary"});n.SheetNames.forEach(function(s){const o=H.sheet_to_row_object_array(n.Sheets[s]);j(o,t[0].name)})},t.length&&t[0].name.endsWith("xlsx")?r.readAsBinaryString(t[0]):B.error(()=>a("p",{className:"mb-0",children:["You can only upload ",e("span",{className:"fw-bolder",children:".xlsx"}),", ",e("span",{className:"fw-bolder",children:".xls"})," &"," ",e("span",{className:"fw-bolder",children:".csv"})," Files!."]}),{style:{minWidth:"380px"}})}}),T=t=>{const r=l;let i=[];const n=t.target.value;if(f(n),n.length)i=r.filter(s=>{const o=Object.keys(s),u=o.filter(m=>s[m].toString().toLowerCase().startsWith(n.toLowerCase())),g=o.filter(m=>s[m].toString().toLowerCase().includes(n.toLowerCase()));return u.length?s[u]:!u&&g.length?s[g]:null}),D(i),f(n);else return null},b=l.length?l.map((t,r)=>r===0?[...Object.keys(t)]:null):[],h=d.length?N:l.length&&!d.length?l:null,F=()=>h!==null&&h.length?h.map((t,r)=>{const n=Object.keys(t).map((s,o)=>e("td",{children:t[s]},o));return e("tr",{children:n},r)}):null,L=()=>b.length?b[0].map((t,r)=>e("th",{children:t},r)):null;return a(c.exports.Fragment,{children:[e(P,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),a(x,{className:"import-component",children:[e(p,{sm:"12",children:e(y,{children:e(O,{children:e(x,{children:e(p,{sm:"12",children:a("div",{...v({className:"dropzone"}),children:[e("input",{...k()}),a("div",{className:"d-flex align-items-center justify-content-center flex-column",children:[e(X,{size:64}),e("h5",{children:"Drop Files here or click to upload"}),a("p",{className:"text-secondary",children:["Drop files here or click"," ",e("a",{href:"/",onClick:t=>t.preventDefault(),children:"browse"})," ","thorough your machine"]})]})]})})})})})}),l.length?e(p,{sm:"12",children:a(y,{children:[a(W,{className:"justify-content-between flex-wrap",children:[e(_,{tag:"h4",children:w}),a("div",{className:"d-flex align-items-center justify-content-end",children:[e(z,{for:"search-input",className:"me-1",children:"Search"}),e(R,{id:"search-input",type:"text",bsSize:"sm",value:d,onChange:t=>T(t)})]})]}),a(A,{className:"table-hover-animation",responsive:!0,children:[e("thead",{children:e("tr",{children:L()})}),e("tbody",{children:F()})]})]})}):null]})]})};export{G as default};