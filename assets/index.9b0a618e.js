import{r as i,aj as b,o as l,j as e,ab as o,ac as h,bq as v,br as t,bs as r,aO as N,L as s,c0 as C,aP as x,ad as k,ae as y,B as D,k as B}from"./index.9f9eb0a7.js";import{B as w}from"./BlogSidebar.adc84ed3.js";import{A as L,M as j}from"./App.402f00db.js";import{B as P}from"./index.21807bba.js";/* empty css                  */const S=()=>{const[c,m]=i.exports.useState(null);i.exports.useEffect(()=>{b.get("/blog/list/data").then(a=>m(a.data))},[]);const g={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},f=()=>c.map(a=>{const u=()=>a.tags.map((n,d)=>e("a",{href:"/",onClick:p=>p.preventDefault(),children:e(D,{className:B({"me-50":d!==a.tags.length-1}),color:g[n],pill:!0,children:n})},d));return e(h,{md:"6",children:l(N,{children:[e(s,{to:`/pages/blog/detail/${a.id}`,children:e(C,{className:"img-fluid",src:a.img,alt:a.title,top:!0})}),l(x,{children:[e(k,{tag:"h4",children:e(s,{className:"blog-title-truncate text-body-heading",to:`/pages/blog/detail/${a.id}`,children:a.title})}),l("div",{className:"d-flex",children:[e(L,{className:"me-50",img:a.avatar,imgHeight:"24",imgWidth:"24"}),l("div",{children:[e("small",{className:"text-muted me-25",children:"by"}),e("small",{children:e("a",{className:"text-body",href:"/",onClick:n=>n.preventDefault(),children:a.userFullName})}),e("span",{className:"text-muted ms-50 me-25",children:"|"}),e("small",{className:"text-muted",children:a.blogPosted})]})]}),e("div",{className:"my-1 py-25",children:u()}),e(y,{className:"blog-content-truncate",children:a.excerpt}),e("hr",{}),l("div",{className:"d-flex justify-content-between align-items-center",children:[l(s,{to:`/pages/blog/detail/${a.id}`,children:[e(j,{size:15,className:"text-body me-50"}),l("span",{className:"text-body fw-bold",children:[a.comment," Comments"]})]}),e(s,{className:"fw-bold",to:`/pages/blog/detail/${a.id}`,children:"Read More"})]})]})]})},a.title)});return l(i.exports.Fragment,{children:[e(P,{title:"Blog List",data:[{title:"Pages"},{title:"Blog"},{title:"List"}]}),l("div",{className:"blog-wrapper",children:[e("div",{className:"content-detached content-left",children:e("div",{className:"content-body",children:c!==null?l("div",{className:"blog-list-wrapper",children:[e(o,{children:f()}),e(o,{children:e(h,{sm:"12",children:l(v,{className:"d-flex justify-content-center mt-2",children:[e(t,{className:"prev-item",children:e(r,{href:"#",onClick:a=>a.preventDefault()})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"1"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"2"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"3"})}),e(t,{active:!0,children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"4"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"5"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"6"})}),e(t,{children:e(r,{href:"#",onClick:a=>a.preventDefault(),children:"7"})}),e(t,{className:"next-item",children:e(r,{href:"#",onClick:a=>a.preventDefault()})})]})})})]}):null})}),e(w,{})]})]})};export{S as default};