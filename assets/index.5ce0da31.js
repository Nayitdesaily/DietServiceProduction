import{p as s,r as n,T as q,j as e,o as r,aO as D,k as v,aQ as E,ac as P,aa as N,ab as d,aP as i,aR as W,ad as t}from"./index.4804ad6d.js";import{B as Y}from"./index.0e0714d2.js";import{U as $}from"./index.fcd51df9.js";import{a7 as p,X as T,bh as h}from"./App.03f23521.js";const l=o=>{const{title:A,actions:a,children:I,collapseIcon:m,reloadIcon:u,removeIcon:C,endReload:k}=o,[f,x]=n.exports.useState(!1),[g,w]=n.exports.useState(!0),[z,B]=n.exports.useState(!0),R={collapse:m||p,remove:C||T,reload:u||h},y=c=>{switch(c){case"collapse":return w(!g);case"remove":return B(!1);case"reload":return x(!0)}},O=()=>{if(Array.isArray(a))return a.map((c,b)=>{const U=R[c];return e(U,{className:v("cursor-pointer",{"me-50":b<a.length-1}),size:15,onClick:()=>y(c)},b)});{const c=R[a];return e(c,{className:"cursor-pointer",size:15,onClick:()=>y(a)})}},j=()=>{x(!1)};n.exports.useEffect(()=>{f&&k(j)});const F=a==="collapse"||a.includes("collapse")?q:n.exports.Fragment,S=a==="reload"||a.includes("reload")?$:n.exports.Fragment;return e(S,{...a==="reload"||a.includes("reload")?{blocking:f}:{},children:r(D,{className:v("card-action",{"d-none":!z}),children:[r(E,{children:[e(P,{tag:"h4",children:A}),e("div",{className:"action-icons",children:O()})]}),e(F,{...a==="collapse"||a.includes("collapse")?{isOpen:g}:{},children:I})]})})};l.propTypes={removeIcon:s.exports.any,reloadIcon:s.exports.any,collapseIcon:s.exports.any,title:s.exports.string.isRequired,actions:s.exports.oneOfType([s.exports.string,s.exports.arrayOf(s.exports.string)]).isRequired,endReload(o){if(o.actions==="reload"&&o.endReload===void 0||o.actions.includes("reload")&&o.endReload===void 0)return new Error("Please provide a function to end reload!")}};const X=()=>r(n.exports.Fragment,{children:[e(Y,{title:"Card Actions",data:[{title:"Cards"},{title:"Card Actions"}]}),e(N,{children:e(d,{sm:"12",children:e(l,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:o=>{setTimeout(()=>o(),2e3)},children:e(i,{className:"pt-0",children:r(W,{responsive:!0,bordered:!0,children:[e("thead",{children:r("tr",{children:[e("th",{children:"Action"}),e("th",{children:"Icon"}),e("th",{children:"Details"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"Collapse"}),e("td",{className:"text-center",children:e(p,{className:"collapse-icon",size:15})}),e("td",{children:" Collapse card content using collapse action."})]}),r("tr",{children:[e("td",{children:"Refresh Content"}),e("td",{className:"text-center",children:e(h,{size:15})}),e("td",{children:"Refresh your card content using refresh action."})]}),r("tr",{children:[e("td",{children:"Remove Card"}),e("td",{className:"text-center",children:e(T,{size:15})}),e("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),r(N,{children:[e(d,{md:"6",sm:"12",children:e(l,{title:"Collapse",actions:"collapse",children:r(i,{className:"pt-0",children:[r(t,{children:["You can create a collapsible content by using our ",e("code",{children:"CardAction"})," component and by passing prop"," ",e("code",{children:"actions='collapse'"}),"."]}),r(t,{className:"mb-0",children:["Click on ",e(p,{size:15})," to see card collapse in action"]})]})})}),e(d,{md:"6",sm:"12",children:e(l,{title:"Reload",actions:"reload",endReload:o=>{setTimeout(()=>o(),2e3)},children:r(i,{className:"pt-0",children:[r(t,{children:["To create a re-loadable card pass prop ",e("code",{children:"actions='reload'"})," and pass prop"," ",e("code",{children:"endReload"})," to end the loading."]}),r(t,{className:"mb-0",children:["Click on ",e(h,{size:15})," to see card refresh in action"]})]})})}),e(d,{md:"6",sm:"12",children:e(l,{title:"Remove",actions:"remove",children:r(i,{className:"pt-0",children:[r(t,{children:["You can add refresh content action to card by adding class ",e("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),r(t,{className:"mb-0",children:["Click on ",e(h,{size:15})," to see card refresh in action"]})]})})})]})]});export{X as default};
