import{r as t,aj as v,o as l,j as e,ab as g,ac as i,aO as c,c0 as x,aP as m,ad as y,ae as o,U as C,D as k,x as w,y as r,af as D,F as n,ag as B,E as F,B as z,k as T}from"./index.c7086444.js";import{A as h,M as L,aW as S,aF as W,ai as j,aL as H,aN as I,F as $,aj as A,aK as M,N as U}from"./App.ac9516ab.js";import{B as E}from"./BlogSidebar.9d342310.js";import{B as G}from"./index.0bd57c96.js";/* empty css                  */import{i as P}from"./avatar-s-6.f63eadb1.js";const V=()=>{const[s,p]=t.exports.useState(null);t.exports.useEffect(()=>{v.get("/blog/list/data/detail").then(a=>p(a.data))},[]);const b={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},N=()=>s.blog.tags.map((a,d)=>e("a",{href:"/",onClick:f=>f.preventDefault(),children:e(z,{className:T({"me-50":d!==s.blog.tags.length-1}),color:b[a],pill:!0,children:a})},d)),u=()=>s.comments.map(a=>e(c,{className:"mb-3",children:e(m,{children:l("div",{className:"d-flex",children:[e("div",{children:e(h,{className:"me-75",img:a.avatar,imgHeight:"38",imgWidth:"38"})}),l("div",{children:[e("h6",{className:"fw-bolder mb-25",children:a.userFullName}),e(o,{children:a.commentedAt}),e(o,{children:a.commentText}),e("a",{href:"/",onClick:d=>d.preventDefault(),children:l("div",{className:"d-inline-flex align-items-center",children:[e(U,{size:18,className:"me-50"}),e("span",{children:"Reply"})]})})]})]})})},a.userFullName));return l(t.exports.Fragment,{children:[e(G,{title:"Blog Details",data:[{title:"Pages"},{title:"Blog"},{title:"Details"}]}),l("div",{className:"blog-wrapper",children:[e("div",{className:"content-detached content-left",children:e("div",{className:"content-body",children:s!==null?l(g,{children:[e(i,{sm:"12",children:l(c,{className:"mb-3",children:[e(x,{src:s.blog.img,className:"img-fluid",top:!0}),l(m,{children:[e(y,{tag:"h4",children:s.blog.title}),l("div",{className:"d-flex",children:[e(h,{className:"me-50",img:s.blog.avatar,imgHeight:"24",imgWidth:"24"}),l("div",{children:[e("small",{className:"text-muted me-25",children:"by"}),e("small",{children:e("a",{className:"text-body",href:"/",onClick:a=>a.preventDefault(),children:s.blog.userFullName})}),e("span",{className:"text-muted ms-50 me-25",children:"|"}),e("small",{className:"text-muted",children:s.blog.createdTime})]})]}),e("div",{className:"my-1 py-25",children:N()}),e("div",{dangerouslySetInnerHTML:{__html:s.blog.content}}),l("div",{className:"d-flex",children:[e("div",{children:e(h,{img:P,className:"me-2",imgHeight:"60",imgWidth:"60"})}),l("div",{children:[e("h6",{className:"fw-bolder",children:"Willie Clark"}),e(o,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),e("hr",{className:"my-2"}),l("div",{className:"d-flex align-items-center justify-content-between",children:[l("div",{className:"d-flex align-items-center",children:[l("div",{className:"d-flex align-items-center me-1",children:[e("a",{className:"me-50",href:"/",onClick:a=>a.preventDefault(),children:e(L,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:a=>a.preventDefault(),children:e("div",{className:"text-body align-middle",children:S(s.blog.comments)})})]}),l("div",{className:"d-flex align-items-cente",children:[e("a",{className:"me-50",href:"/",onClick:a=>a.preventDefault(),children:e(W,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:a=>a.preventDefault(),children:e("div",{className:"text-body align-middle",children:s.blog.bookmarked})})]})]}),l(C,{className:"dropdown-icon-wrapper",children:[e(k,{tag:"span",children:e(j,{size:21,className:"text-body cursor-pointer"})}),l(w,{end:!0,children:[e(r,{className:"py-50 px-1",children:e(H,{size:18})}),e(r,{className:"py-50 px-1",children:e(I,{size:18})}),e(r,{className:"py-50 px-1",children:e($,{size:18})}),e(r,{className:"py-50 px-1",children:e(A,{size:18})}),e(r,{className:"py-50 px-1",children:e(M,{size:18})})]})]})]})]})]})}),l(i,{sm:"12",id:"blogComment",children:[e("h6",{className:"section-label",children:"Comment"}),u()]}),l(i,{sm:"12",children:[e("h6",{className:"section-label",children:"Leave a Comment"}),e(c,{children:e(m,{children:e(D,{className:"form",onSubmit:a=>a.preventDefault(),children:l(g,{children:[e(i,{sm:"6",children:e("div",{className:"mb-2",children:e(n,{placeholder:"Name"})})}),e(i,{sm:"6",children:e("div",{className:"mb-2",children:e(n,{type:"email",placeholder:"Email"})})}),e(i,{sm:"6",children:e("div",{className:"mb-2",children:e(n,{type:"url",placeholder:"Website"})})}),e(i,{sm:"12",children:e("div",{className:"mb-2",children:e(n,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),e(i,{sm:"12",children:l("div",{className:"form-check mb-2",children:[e(n,{type:"checkbox",id:"save-data-checkbox"}),e(B,{className:"form-check-label",for:"save-data-checkbox",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),e(i,{sm:"12",children:e(F,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),e(E,{})]})]})};export{V as default};
