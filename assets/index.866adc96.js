import{r,o,j as e,ag as y,ai as M,aj as V,bW as $,D as E,x as _,y as P,aa as j,cv as F,af as R,$ as O,au as Q,bb as A,av as q}from"./index.8ebe918d.js";import{Q as k}from"./index.es.ea894507.js";import{bI as B,bN as W,bO as z}from"./App.a419ef53.js";import{u as J,C as L}from"./index.esm.f890ea54.js";import{T as K,a as U,b,c as w}from"./Tab.4d32f9e0.js";import"./emotion-is-prop-valid.esm.22611268.js";import"./emotion-memoize.esm.06f0e458.js";import"./emotion-react.browser.esm.b8f6e64a.js";import"./TransitionGroup.7800fe6d.js";function X({setTab:s}){const[n,d]=r.exports.useState([]),[h,i]=r.exports.useState([]),[m,p]=r.exports.useState(!0),[c,f]=r.exports.useState(!1),[x,C]=r.exports.useState(null),[g,S]=r.exports.useState(""),T=t=>{x===t?f(!c):(f(!0),C(t))};r.exports.useEffect(()=>{async function t(){await V.get("https://dietservice.bitjoins.pe/api/canal_tags").then(u=>{d(u.data.data),i(u.data.data)}),p(!1)}t()},[]);function v(t){return t.filter(u=>u.titulo.toLowerCase().includes(g))}return r.exports.useEffect(()=>{let t=v(h);d(t)},[g]),o("div",{children:[e("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:o("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"},children:[e("p",{style:{padding:0,margin:0},children:"Buscar:"}),e(y,{type:"text",style:{width:"25rem"},onChange:t=>S(t.target.value)})]})}),e(k,{columns:[{cell:t=>o($,{isOpen:c&&x===t,toggle:()=>T(t),direction:"start",children:[e(E,{caret:!0,children:e(B,{icon:W})}),e(_,{children:e(P,{onClick:()=>s("reg-temas"),children:"Editar"})})]}),right:!0,width:"15rem"},{name:"Item",selector:(t,u)=>u+1,center:!0,maxWidth:"2rem"},{name:"Titulo",selector:t=>t.titulo,minWidth:"12rem",sortable:!0},{name:"Fecha",selector:t=>t.fechareg,sortable:!0,minWidth:"16rem"},{name:"Imagen",selector:t=>e("img",{src:`https://intranet.dietservice.pe/appdiet/images/${t.foto}`,alt:"",style:{width:"4rem",height:"3rem",objectFit:"cover"}}),width:"10rem",sortable:!0}],data:n,pagination:!0,noDataComponent:"No hay data",progressPending:m,progressComponent:e(M,{children:"Loading..."})})]})}function Y(){const{handleSubmit:s,control:n,reset:d}=J({defaultValues:{}});function h(i){console.log(i)}return e("div",{children:o("form",{onSubmit:s(h),children:[e(j,{children:e(L,{name:"titulo",control:n,render:({field:{value:i,onChange:m,...p}})=>o(F,{children:[e(R,{children:"Titulo"}),e(y,{placeholder:"Ingrese el titulo",type:"text",...p,onChange:c=>{m(c.target.value)}})]})})}),e(j,{children:e(L,{name:"descripcion",control:n,render:({field:{value:i,onChange:m,...p}})=>o(F,{children:[e(R,{children:"Imagen"}),e(y,{placeholder:"Ingrese la descripcion",type:"textarea",...p,onChange:c=>{m(c.target.value)}})]})})}),e(O,{color:"success",type:"submit",children:"Ok"}),e(O,{color:"secondary",children:"Cancel"})]})})}function Z({toggle:s,modal:n}){return e("div",{children:o(Q,{isOpen:n,toggle:()=>{s(),reset(),setCategoriaSelec(null)},scrollable:!0,children:[e(A,{toggle:()=>{s(),reset(),setCategoriaSelec(null)},children:"Video"}),e(q,{})]})})}function ee({setTab:s}){const[n,d]=r.exports.useState([]),[h,i]=r.exports.useState([]),[m,p]=r.exports.useState(!0),[c,f]=r.exports.useState(!1),[x,C]=r.exports.useState(null),[g,S]=r.exports.useState(""),T=a=>{x===a?f(!c):(f(!0),C(a))},v=()=>t(!D),[D,t]=r.exports.useState(!1),[u,I]=r.exports.useState(null);r.exports.useEffect(()=>{async function a(){await V.get("https://dietservice.bitjoins.pe/api/canal_videos-web").then(l=>{d(l.data),i(l.data)}),p(!1)}a()},[]);function N(a){return a.filter(l=>l.titulo.toLowerCase().includes(g)||l.canal_tag_titulo.toLowerCase().includes(g))}r.exports.useEffect(()=>{let a=N(h);d(a)},[g]);const G={color:"blue    ",cursor:"pointer"},H={cursor:"pointer"};return o("div",{children:[e("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:o("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"},children:[e("p",{style:{padding:0,margin:0},children:"Buscar:"}),e(y,{type:"text",style:{width:"25rem"},onChange:a=>S(a.target.value)})]})}),e(k,{columns:[{cell:a=>o($,{isOpen:c&&x===a,toggle:()=>T(a),direction:"start",children:[e(E,{caret:!0,children:e(B,{icon:W})}),e(_,{children:e(P,{onClick:()=>s("reg-videos"),children:"Editar"})})]}),right:!0,width:"15rem"},{name:"Item",selector:(a,l)=>l+1,center:!0,width:"6rem"},{name:"Tema",selector:a=>a.canal_tag_titulo,width:"20rem",sortable:!0,center:!0},{name:"Titulo",selector:a=>a.titulo,sortable:!0,width:"20rem",center:!0},{name:"Fecha",selector:a=>a.fechareg,sortable:!0,width:"16rem",center:!0},{name:"Video",cell:(a,l)=>e("div",{children:e(z,{onClick:v,onMouseEnter:()=>I(l),onMouseLeave:()=>I(null),style:u===l?G:H})}),right:!0,width:"15rem"}],data:n,pagination:!0,noDataComponent:"No hay data",progressPending:m,progressComponent:e(M,{children:"Loading..."})}),e(Z,{toggle:v,modal:D})]})}function ue(){const[s,n]=r.exports.useState("temas"),d=(h,i)=>{n(i)};return e(r.exports.Fragment,{children:o(K,{value:s,children:[o(U,{onChange:d,"aria-label":"simple tabs example",children:[e(b,{value:"temas",label:"Temas"}),e(b,{value:"reg-temas",label:"Reg.Temas"}),e(b,{value:"videos",label:"Videos"}),e(b,{value:"reg-videos",label:"Reg.Videos"})]}),e(w,{value:"temas",children:e(X,{setTab:n})}),e(w,{value:"reg-temas",children:e(Y,{})}),e(w,{value:"videos",children:e(ee,{setTab:n})}),e(w,{value:"reg-videos"})]})})}export{ue as default};
