import{r as o,o as s,j as e,ag as y,ai as L,aj as O,bW as P,D as k,x as E,y as $,aa as I,cv as R,af as j,$ as F}from"./index.30301496.js";import{Q as _}from"./index.es.6151ffaa.js";import{bI as N,bN as W,bO as z}from"./App.58188f50.js";import{u as J,C as V}from"./index.esm.c2f7552f.js";import{R as K}from"./index.f90a1683.js";import{T as U,a as X,b as v,c as w}from"./Tab.947c8b76.js";import"./emotion-is-prop-valid.esm.22611268.js";import"./emotion-memoize.esm.06f0e458.js";import"./emotion-react.browser.esm.81023f96.js";import"./TransitionGroup.152774b2.js";function Y({setTab:u}){const[a,d]=o.exports.useState([]),[h,l]=o.exports.useState([]),[m,p]=o.exports.useState(!0),[i,f]=o.exports.useState(!1),[x,b]=o.exports.useState(null),[g,C]=o.exports.useState(""),S=n=>{x===n?f(!i):(f(!0),b(n))};o.exports.useEffect(()=>{async function n(){await O.get("https://dietservice.bitjoins.pe/api/canal_tags").then(c=>{d(c.data.data),l(c.data.data)}),p(!1)}n()},[]);function T(n){return n.filter(c=>c.titulo.toLowerCase().includes(g))}return o.exports.useEffect(()=>{let n=T(h);d(n)},[g]),s("div",{children:[e("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:s("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"},children:[e("p",{style:{padding:0,margin:0},children:"Buscar:"}),e(y,{type:"text",style:{width:"25rem"},onChange:n=>C(n.target.value)})]})}),e(_,{columns:[{cell:n=>s(P,{isOpen:i&&x===n,toggle:()=>S(n),direction:"start",children:[e(k,{caret:!0,children:e(N,{icon:W})}),e(E,{children:e($,{onClick:()=>u("reg-temas"),children:"Editar"})})]}),right:!0,width:"15rem"},{name:"Item",selector:(n,c)=>c+1,center:!0,maxWidth:"2rem"},{name:"Titulo",selector:n=>n.titulo,minWidth:"12rem",sortable:!0},{name:"Fecha",selector:n=>n.fechareg,sortable:!0,minWidth:"16rem"},{name:"Imagen",selector:n=>e("img",{src:`https://intranet.dietservice.pe/assets/uploads/tags/${n.foto}`,alt:"",style:{width:"4rem",height:"3rem",objectFit:"cover"}}),width:"10rem",sortable:!0}],data:a,pagination:!0,noDataComponent:"No hay data",progressPending:m,progressComponent:e(L,{children:"Loading..."})})]})}function Z(){const{handleSubmit:u,control:a,reset:d}=J({defaultValues:{}});function h(l){console.log(l)}return e("div",{children:s("form",{onSubmit:u(h),children:[e(I,{children:e(V,{name:"titulo",control:a,render:({field:{value:l,onChange:m,...p}})=>s(R,{children:[e(j,{children:"Titulo"}),e(y,{placeholder:"Ingrese el titulo",type:"text",...p,onChange:i=>{m(i.target.value)}})]})})}),e(I,{children:e(V,{name:"descripcion",control:a,render:({field:{value:l,onChange:m,...p}})=>s(R,{children:[e(j,{children:"Imagen"}),e(y,{placeholder:"Ingrese la descripcion",type:"textarea",...p,onChange:i=>{m(i.target.value)}})]})})}),e(F,{color:"success",type:"submit",children:"Ok"}),e(F,{color:"secondary",children:"Cancel"})]})})}function ee({setTab:u}){const[a,d]=o.exports.useState([]),[h,l]=o.exports.useState([]),[m,p]=o.exports.useState(!0),[i,f]=o.exports.useState(!1),[x,b]=o.exports.useState(null),[g,C]=o.exports.useState(""),S=t=>{x===t?f(!i):(f(!0),b(t))};o.exports.useState(!1);const[T,D]=o.exports.useState(null),[n,c]=o.exports.useState(!1),B=()=>{c(!0)};o.exports.useEffect(()=>{async function t(){await O.get("https://dietservice.bitjoins.pe/api/canal_videos-web").then(r=>{d(r.data),l(r.data)}),p(!1)}t()},[]);function M(t){return t.filter(r=>r.titulo.toLowerCase().includes(g)||r.canal_tag_titulo.toLowerCase().includes(g))}console.log(a),o.exports.useEffect(()=>{let t=M(h);d(t)},[g]);const G={color:"blue    ",cursor:"pointer"},Q={cursor:"pointer"},[A,H]=o.exports.useState("");function q(t){H(t)}return s("div",{children:[e("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:s("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"},children:[e("p",{style:{padding:0,margin:0},children:"Buscar:"}),e(y,{type:"text",style:{width:"25rem"},onChange:t=>C(t.target.value)})]})}),e(_,{columns:[{cell:t=>s(P,{isOpen:i&&x===t,toggle:()=>S(t),direction:"start",children:[e(k,{caret:!0,children:e(N,{icon:W})}),e(E,{children:e($,{onClick:()=>u("reg-videos"),children:"Editar"})})]}),right:!0,width:"15rem"},{name:"Item",selector:(t,r)=>r+1,center:!0,width:"6rem"},{name:"Tema",selector:t=>t.canal_tag_titulo,width:"20rem",sortable:!0,center:!0},{name:"Titulo",selector:t=>t.titulo,sortable:!0,width:"20rem",center:!0},{name:"Fecha",selector:t=>t.fechareg,sortable:!0,width:"16rem",center:!0},{name:"Video",cell:(t,r)=>e("div",{children:e(z,{onClick:()=>{q(t.urlvideo),B()},onMouseEnter:()=>D(r),onMouseLeave:()=>D(null),style:T===r?G:Q})}),right:!0,width:"15rem"}],data:a,pagination:!0,noDataComponent:"No hay data",progressPending:m,progressComponent:e(L,{children:"Loading..."})}),n?e("div",{className:"modal",onClick:()=>{c(!1)},children:e("div",{className:"modal-content",onClick:t=>t.stopPropagation(),children:e(K,{url:A,controls:!0,width:"100%",height:"100%"})})}):null]})}function pe(){const[u,a]=o.exports.useState("temas"),d=(h,l)=>{a(l)};return e(o.exports.Fragment,{children:s(U,{value:u,children:[s(X,{onChange:d,"aria-label":"simple tabs example",children:[e(v,{value:"temas",label:"Temas"}),e(v,{value:"reg-temas",label:"Reg.Temas"}),e(v,{value:"videos",label:"Videos"}),e(v,{value:"reg-videos",label:"Reg.Videos"})]}),e(w,{value:"temas",children:e(Y,{setTab:a})}),e(w,{value:"reg-temas",children:e(Z,{})}),e(w,{value:"videos",children:e(ee,{setTab:a})}),e(w,{value:"reg-videos"})]})})}export{pe as default};
