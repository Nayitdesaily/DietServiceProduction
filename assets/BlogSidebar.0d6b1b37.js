import{r as i,K as u,j as e,o as s,aq as b,S as N,ar as p,k as c,L as n}from"./index.dfabc371.js";import{S as v,aT as f,A as x}from"./App.bcc3a833.js";const S=()=>{const[t,d]=i.exports.useState(null);i.exports.useEffect(()=>{u.get("/blog/list/data/sidebar").then(a=>d(a.data))},[]);const o={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},h=()=>t.recentPosts.map((a,r)=>s("div",{className:c("d-flex",{"mb-2":r!==t.recentPosts.length-1}),children:[e(n,{className:"me-2",to:`/pages/blog/detail/${a.id}`,children:e("img",{className:"rounded",src:a.img,alt:a.title,width:"100",height:"70"})}),s("div",{children:[e("h6",{className:"blog-recent-post-title",children:e(n,{className:"text-body-heading",to:`/pages/blog/detail/${a.id}`,children:a.title})}),e("div",{className:"text-muted mb-0",children:a.createdTime})]})]},r)),m=()=>t.categories.map((a,r)=>{const g=f[a.icon];return s("div",{className:c("d-flex justify-content-start align-items-center",{"mb-75":r!==t.categories.length-1}),children:[e("a",{className:"me-75",href:"/",onClick:l=>l.preventDefault(),children:e(x,{className:"rounded",color:o[a.category],icon:e(g,{size:15})})}),e("a",{href:"/",onClick:l=>l.preventDefault(),children:e("div",{className:"blog-category-title text-body",children:a.category})})]},r)});return e("div",{className:"sidebar-detached sidebar-right",children:e("div",{className:"sidebar",children:e("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:s("div",{className:"right-sidebar-content",children:[e("div",{className:"blog-search",children:s(b,{className:"input-group-merge",children:[e(N,{placeholder:"Search here"}),e(p,{children:e(v,{size:14})})]})}),t!==null?s(i.exports.Fragment,{children:[s("div",{className:"blog-recent-posts mt-3",children:[e("h6",{className:"section-label",children:"Recent Posts"}),e("div",{className:"mt-75",children:h()})]}),s("div",{className:"blog-categories mt-3",children:[e("h6",{className:"section-label",children:"Categories"}),e("div",{className:"mt-1",children:m()})]})]}):null]})})})})};export{S as B};