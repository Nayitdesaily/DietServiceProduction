import{r as d,j as e,ai as D,aj as C,o as i,ae as q,aa as E,ab as _,cv as v,af as x,ag as f,$,al as F,au as H,bb as Q,av as X,c8 as Z,bZ as J,b_ as K,b$ as Y,aO as M,aP as O,ac as z,ad as W,p as N}from"./index.365e3ad1.js";import{Q as V}from"./index.es.72966381.js";import{a0 as S,U as ee,A as U,r as te,X as ae,E as j}from"./App.cc007f5c.js";import{u as B,C as y}from"./index.esm.b088bfd3.js";import{S as T}from"./StatsVertical.c4b296d3.js";import{B as k}from"./Box.49332790.js";import{T as G,a as L,b as w,c as P,i as re}from"./Tab.2426e1b5.js";import{T as ie}from"./Typography.197d1641.js";import"./emotion-is-prop-valid.esm.22611268.js";import"./emotion-memoize.esm.06f0e458.js";import"./emotion-react.browser.esm.1eaededd.js";import"./TransitionGroup.cc68f7e1.js";function se({setTab:t,setClienteSeleccionado:l}){const[h,p]=d.exports.useState([]),[g,s]=d.exports.useState(!0);d.exports.useEffect(()=>{async function a(){await C.get("https://dietservice.bitjoins.pe/api/web/personas").then(u=>{p(u.data.data)}),s(!1)}a()},[]);async function c(a){await C.get(`https://dietservice.bitjoins.pe/api/web/personas/${a}`).then(u=>{l(u),u.status===200&&t("edicion")})}async function m(a){await C.get(`https://dietservice.bitjoins.pe/api/web/personas/${a}`).then(u=>{l(u),u.status===200&&t("perfil")})}return e("div",{children:e(V,{columns:[{name:"Item",selector:(a,u)=>u+1,center:!0,maxWidth:"2rem"},{name:"Cliente",selector:a=>`${a.nombre} ${a.apellido}`,minWidth:"12rem",sortable:!0},{name:"Usuario",selector:a=>a.email,sortable:!0,minWidth:"16rem"},{name:"Telefono",selector:a=>a.telefono,center:!0},{name:"Ocupacion",selector:a=>a.ocupacion,sortable:!0,minWidth:"14rem",wrap:!0},{name:"Talla",selector:a=>`${a.talla} cm`,center:!0,sortable:!0},{name:"Peso Ideal",selector:a=>a.peso_ideal==null||a.peso_ideal=="-"||a.peso_ideal=="."?"0 kg ":`${a.peso_ideal} kg `,center:!0,sortable:!0},{name:"Distrito",selector:a=>a.distrito,center:!0},{cell:a=>i("div",{children:[e(S,{color:"gray",onClick:()=>c(a.id),style:{cursor:"pointer"}}),e(ee,{color:"gray",onClick:()=>m(a.id),style:{cursor:"pointer"}})]})}],data:h,pagination:!0,noDataComponent:"No hay data",progressPending:g,progressComponent:e(D,{children:"Loading..."})})})}function ne({clienteSeleccionado:t}){const[l,h]=d.exports.useState([]),[p,g]=d.exports.useState([]),[s,c]=d.exports.useState([]);d.exports.useEffect(()=>{async function o(){await C.get("https://dietservice.bitjoins.pe/api/tipo-usuario").then(b=>h(b.data)),await C.get("https://dietservice.bitjoins.pe/api/consultorios").then(b=>g(b.data)),await C.get("https://dietservice.bitjoins.pe/api/empresas").then(b=>c(b.data))}o()},[]);const{handleSubmit:m,control:r,formState:{errors:a}}=B({});function u(o){async function b(){await C.put(`https://dietservice.bitjoins.pe/api/web/personas/${t.data.data.id}`,o).then(A=>{A.status===200?F(i("div",{className:"d-flex align-items-center gap-1",children:[e("div",{children:e(U,{size:"sm",color:"success",icon:e(te,{size:12})})}),e("h5",{className:"p-0 mb-0",children:A.data.message})]})):F(i("div",{className:"d-flex align-items-center gap-1",children:[e("div",{children:e(U,{size:"sm",color:"success",icon:e(ae,{size:12})})}),e("h5",{className:"p-0 mb-0",children:"Ha ocurrido un error"})]}))})}b(),console.log(o)}return e("div",{children:i(q,{onSubmit:m(u),children:[e(E,{children:e(_,{xs:"12",children:e(y,{name:"tipousuario_id",control:r,defaultValue:t.data.data.tipousuario_id,render:({field:o})=>i(v,{children:[e(x,{for:"tipousuario_id",children:"Tipo Usuario"}),i(f,{placeholder:"Ingrese tipo de usuario",type:"select",name:"tipousuario_id",...parseInt(o),children:[e("option",{value:t.data.data.tipousuario_id?t.data.data.tipousuario_id:"",selected:!0,children:t.data.data.tipo_usuario?t.data.data.tipo_usuario:"Seleccione el tipo de usuario"}),l.filter(b=>b.id!==t.data.data.tipousuario_id).map(b=>e("option",{value:Number(b.id),children:b.nombre},b.id))]})]})})})}),i(E,{children:[e(_,{xs:"6",children:e(y,{name:"email",control:r,defaultValue:t.data.data.email,render:({field:o})=>i(v,{children:[e(x,{for:"email",children:"Usuario (email)"}),e(f,{name:"email",placeholder:"Ingresa tu email",type:"email",...o})]})})}),e(_,{xs:"6",children:e(y,{name:"nombre",control:r,defaultValue:t.data.data.nombre,render:({field:o})=>i(v,{children:[e(x,{for:"nombre",children:"Nombre"}),e(f,{name:"nombre",placeholder:"Ingresa tu nombre",type:"text",...o})]})})})]}),i(E,{children:[e(_,{xs:"6",children:e(y,{name:"apellido",control:r,defaultValue:t.data.data.apellido,render:({field:o})=>i(v,{children:[e(x,{for:"apellido",children:"Apellido"}),e(f,{name:"apellido",placeholder:"Ingresa tu apellido",type:"text",...o})]})})}),e(_,{xs:"3",children:e(y,{name:"telefono",control:r,defaultValue:t.data.data.telefono,render:({field:o})=>i(v,{children:[e(x,{for:"telefono",children:"Telefono"}),e(f,{name:"telefono",placeholder:"Ingresa tu telefono",type:"text",...o})]})})}),e(_,{xs:"3",children:e(y,{name:"ocupacion",control:r,defaultValue:t.data.data.ocupacion,render:({field:o})=>i(v,{children:[e(x,{for:"ocupacion",children:"Ocupacion"}),e(f,{name:"ocupacion",placeholder:"Ingresa tu ocupacion",type:"text",...o})]})})})]}),i(E,{children:[e(_,{xs:"3",children:e(y,{name:"consultorio_id",control:r,defaultValue:t.data.data.consultorio_id,render:({field:{onChange:o,value:b,...A}})=>i(v,{children:[e(x,{for:"consultorio_id",children:"Consultorios"}),i(f,{placeholder:"Seleccione el consultorio",type:"select",name:"consultorio_id",value:b,onChange:n=>o(parseInt(n.target.value)),children:[e("option",{value:t.data.data.consultorio_id?t.data.data.consultorio_id:"",selected:!0,children:t.data.data.consultorio_id?p.filter(n=>n.id==t.data.data.consultorio_id).map(n=>n.nombre):"Seleccione el consultorio"}),p.filter(n=>n.id!==t.data.data.consultorio_id).map(n=>e("option",{value:Number(n.id),children:n.nombre},n.id))]})]})})}),e(_,{xs:"3",children:e(y,{name:"empresa_id",control:r,defaultValue:t.data.data.empresa_id,render:({field:{onChange:o,value:b,...A}})=>i(v,{children:[e(x,{for:"empresa_id",children:"Empresas"}),i(f,{placeholder:"Seleccione la empresa",type:"select",name:"empresa_id",value:b,onChange:n=>o(parseInt(n.target.value)),children:[e("option",{value:t.data.data.empresa_id?t.data.data.empresa_id:"",selected:!0,children:t.data.data.empresa_id?s.filter(n=>n.id==t.data.data.empresa_id).map(n=>n.nombre):"Seleccione la empresa"}),s.filter(n=>n.id!==t.data.data.empresa_id).map(n=>e("option",{value:Number(n.id),children:n.nombre},n.id))]})]})})})]}),i(E,{children:[e(_,{xs:"3",children:e(y,{name:"talla",control:r,defaultValue:t.data.data.talla,render:({field:o})=>i(v,{children:[e(x,{for:"talla",children:"Talla"}),e(f,{name:"talla",placeholder:"Ingresa tu talla",type:"text",...o})]})})}),e(_,{xs:"3",children:e(y,{name:"peso_ideal",control:r,defaultValue:t.data.data.peso_ideal,render:({field:o})=>i(v,{children:[e(x,{for:"peso_ideal",children:"Peso Ideal"}),e(f,{name:"peso_ideal",placeholder:"Ingresa tu peso ideal",type:"text",...o})]})})}),e(_,{xs:"3",children:e(y,{name:"p_grasa_ideal",control:r,defaultValue:t.data.data.p_grasa_ideal,render:({field:o})=>i(v,{children:[e(x,{for:"p_grasa_ideal",children:"% Grasa Ideal"}),e(f,{name:"p_grasa_ideal",placeholder:"Ingresa tu % grasa ideal",type:"text",...o})]})})}),e(_,{xs:"3",children:e(y,{name:"p_masa_muscular",control:r,defaultValue:t.data.data.p_masa_muscular,render:({field:o})=>i(v,{children:[e(x,{for:"p_masa_muscular",children:"% Masa Muscular"}),e(f,{name:"p_masa_muscular",placeholder:"Ingresa tu % grasa muscular",type:"text",...o})]})})})]}),i(E,{children:[e(_,{xs:"3",children:e(y,{name:"gustos",control:r,defaultValue:t.data.data.gustos,render:({field:o})=>i(v,{children:[e(x,{for:"gustos",children:"Alimentos que le gustan"}),e(f,{name:"gustos",placeholder:"Ingresa tu gustos",type:"text",...o})]})})}),e(_,{xs:"3",children:e(y,{name:"no_gustos",control:r,defaultValue:t.data.data.no_gustos,render:({field:o})=>i(v,{children:[e(x,{for:"no_gustos",children:"Alimentos que no le gustan"}),e(f,{name:"no_gustos",placeholder:"Ingresa tu alimentos que no gustan",type:"text",...o})]})})})]}),e($,{type:"submit",color:"success",children:"Grabar Datos"})]})})}function de({modal:t,toggle:l,clienteSeleccionado:h,setEvolucion:p}){const{handleSubmit:g,control:s,formState:{errors:c}}=B({}),[m,r]=d.exports.useState(!1),[a,u]=d.exports.useState("Registrar");async function o(n){await C.post("https://dietservice.bitjoins.pe/api/evolucion/create",n).then(I=>{I.status==200&&r(!0)})}async function b(){var n,I;await C.get(`https://dietservice.bitjoins.pe/api/evolucion/${(I=(n=h==null?void 0:h.data)==null?void 0:n.data)==null?void 0:I.usuario_id}`).then(R=>{p(R.data.data)})}async function A(n){var I,R;u("Registrando..."),n.usuario_id=(R=(I=h==null?void 0:h.data)==null?void 0:I.data)==null?void 0:R.usuario_id,n.label_otra="1",await o(n),await b(),console.log(n),m==!0&&(l(),u("Registrar"))}return e("div",{children:i(H,{isOpen:t,toggle:n=>{n.preventDefault(),l()},autoFocus:!0,size:"lg",fullscreen:"lg",children:[e(Q,{toggle:n=>{n.preventDefault(),l()},children:"Registrar Evolucion"}),e(X,{children:i("form",{onSubmit:g(A),children:[e(E,{children:e(y,{name:"fecha",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"Fecha"}),e(f,{placeholder:"Ingrese tipo de usuario",type:"date",...n})]})})}),i(E,{children:[e(_,{children:e(y,{name:"peso",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"Peso"}),e(f,{placeholder:"Ingrese el peso",type:"text",...n})]})})}),e(_,{children:e(y,{name:"imc",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"IMC"}),e(f,{placeholder:"Ingrese el % imc",type:"text",...n})]})})}),e(_,{children:e(y,{name:"p_grasa",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"% Grasa"}),e(f,{placeholder:"Ingrese % de grasa",type:"text",...n})]})})}),e(_,{children:e(y,{name:"p_masa",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"% Masa"}),e(f,{placeholder:"Ingrese % de masa",type:"text",...n})]})})})]}),i(E,{children:[e(_,{children:e(y,{name:"cintura",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"Medida Cintura"}),e(f,{placeholder:"Ingrese la medida",type:"text",...n})]})})}),e(_,{children:e(y,{name:"otramedida",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"Otra Medida"}),e(f,{placeholder:"Ingrese la medida",type:"text",...n})]})})})]}),i(E,{children:[e(_,{children:e(y,{name:"observaciones",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"Observaciones"}),e(f,{placeholder:"Ingrese las observaciones",type:"textarea",...n})]})})}),e(_,{children:e(y,{name:"actividades",control:s,render:({field:n})=>i(v,{children:[e(x,{children:"Actividades"}),e(f,{placeholder:"Ingrese las actividades",type:"textarea",...n})]})})})]}),e($,{color:"success",type:"submit",children:a}),e("span",{}),e($,{color:"secondary",onClick:l,children:"Cancel"})]})})]})})}function le({clienteSeleccionado:t,toggle:l,modal:h}){const[p,g]=d.exports.useState([]),[s,c]=d.exports.useState(!0);return d.exports.useEffect(()=>{async function r(){var a,u;await C.get(`https://dietservice.bitjoins.pe/api/evolucion/${(u=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:u.usuario_id}`).then(o=>{g(o.data.data)}),c(!1)}r()},[]),i("div",{children:[e("div",{children:e(V,{columns:[{name:"Fecha",selector:r=>r.fecha,sortable:!0,width:"8rem"},{name:"Estado Peso",selector:r=>r.fecha,sortable:!0,width:"9rem"},{name:"Peso",selector:r=>r.peso,width:"8rem"},{name:"Estado Imc",selector:r=>r.imc,sortable:!0,width:"9rem",wrap:!0},{name:"% grasa",selector:r=>r.p_grasa,sortable:!0,width:"8rem"},{name:"% Masa corporal",selector:r=>r.p_masa,sortable:!0,width:"10.8rem",center:!0},{name:"Cintura",selector:r=>r.cintura,width:"6rem"},{name:"Otra medida",selector:r=>r.otramedida,width:"8rem",center:!0},{name:"Observacion",cell:r=>e($,{color:"warning",onClick:()=>{l(),verObservacion(r.observacion)},children:"Ver Observacion"}),center:!0,width:"20rem",style:"padding: 1rem"}],data:p,pagination:!0,noDataComponent:"No hay data",progressPending:s,progressComponent:e(D,{children:"Loading..."})})}),e(de,{clienteSeleccionado:t,toggle:l,modal:h,setEvolucion:g})]})}function oe({clienteSeleccionado:t}){const[l,h]=d.exports.useState([]),[p,g]=d.exports.useState(!0),s=[{name:"Fecha",selector:c=>c.fecha,sortable:!0,width:"8rem"},{name:"Estado Peso",selector:c=>c.fecha,sortable:!0,width:"9rem"},{name:"Peso",selector:c=>c.peso,width:"8rem"}];return d.exports.useEffect(()=>{async function c(){var m,r;await C.get(`https://dietservice.bitjoins.pe/api/evolucion/${(r=(m=t==null?void 0:t.data)==null?void 0:m.data)==null?void 0:r.usuario_id}`).then(a=>{h(a.data.data)}),g(!1)}c()},[]),e("div",{children:e(V,{columns:s,data:l,pagination:!0,noDataComponent:"No hay data",progressPending:p,progressComponent:e(D,{children:"Loading..."})})})}function pe({clienteSeleccionado:t}){const[l,h]=d.exports.useState({}),[p,g]=d.exports.useState([]),[s,c]=d.exports.useState(1),[m,r]=d.exports.useState(!1);return d.exports.useEffect(()=>{var a;C.get(`https://dietservice.bitjoins.pe/api/plan_alimentacion/last/${(a=t==null?void 0:t.data)==null?void 0:a.data.usuario_id}`).then(u=>h(u.data.data)),p.length==0&&r(!1)},[]),d.exports.useEffect(()=>{C.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dietas/${l==null?void 0:l.id}`).then(a=>{g(a.data.data),r(!0)})},[l]),d.exports.useEffect(()=>{},[s]),e("div",{children:m==!1?e(D,{children:"Loading..."}):i("div",{children:[e(f,{name:"opcion",type:"select",onChange:a=>c(a.target.value),children:p==null?void 0:p.map((a,u)=>i("option",{value:a==null?void 0:a.opcion,children:["Opcion ",u+1]},u))}),e("br",{}),i("div",{style:{display:"flex",flexDirection:"column",gap:".5rem"},children:[i("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#ACE1AF",borderRadius:"1rem"},children:[e("h5",{style:{width:"10rem",padding:"1rem",fontWeight:"bold",margin:"0"},children:"Comida"}),e("h5",{style:{width:"40rem",padding:"1rem",fontWeight:"bold",margin:"0"},children:"Instrucciones"})]}),p==null?void 0:p.filter(a=>a.opcion==s).map(a=>{var u;return(u=a==null?void 0:a.comidas)==null?void 0:u.map(o=>i("div",{style:{display:"flex",alignItems:"center",borderRadius:"1rem",backgroundColor:"#F7E7CE50"},children:[e("h5",{style:{width:"10rem",padding:"1rem",verticalAlign:"middle",margin:"0"},children:o.comida==1?"Desayuno":o.comida==2?"Almuerzo":o.comida==3?"Cena":o.comida==4?"Meriendas":null}),e("h5",{style:{width:"40rem",padding:"1rem",margin:"0"},children:o.descripcion})]}))})]})]})})}function ue({clienteSeleccionado:t}){const[l,h]=d.exports.useState([]),[p,g]=d.exports.useState(1);return d.exports.useEffect(()=>{var s;C.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/recomendaciones/${(s=t==null?void 0:t.data)==null?void 0:s.data.usuario_id}`).then(c=>h(c.data.data))},[]),d.exports.useEffect(()=>{},[p]),i("div",{style:{width:"50rem"},children:[e(f,{name:"opcion",type:"select",onChange:s=>g(s.target.value),children:l==null?void 0:l.map((s,c)=>e("option",{value:s==null?void 0:s.tipo,children:(s==null?void 0:s.tipo)==1?"Pautas Generales":(s==null?void 0:s.tipo)==2?"Alimentos Permitidos":(s==null?void 0:s.tipo)==3?"Prohibidos (Consumo Mensual)":(s==null?void 0:s.tipo)==4?"No Olvidar":null},c))}),e("br",{}),l.filter(s=>s.tipo==p).map(s=>e("p",{style:{margin:"0",backgroundColor:"#EDEAE0",padding:"1.5rem",borderRadius:".5rem"},children:s==null?void 0:s.recomendacion}))]})}function he({clienteSeleccionado:t}){const[l,h]=d.exports.useState([]),[p,g]=d.exports.useState({}),[s,c]=d.exports.useState(!0);return d.exports.useEffect(()=>{var r;C.get(`https://dietservice.bitjoins.pe/api/plan_alimentacion/last/${(r=t==null?void 0:t.data)==null?void 0:r.data.usuario_id}`).then(a=>g(a==null?void 0:a.data.data))},[]),d.exports.useEffect(()=>{C.get(`https://dietservice.bitjoins.pe/api/ejercicios/${p==null?void 0:p.id}`).then(r=>r!=null&&r.data.data?h([r==null?void 0:r.data.data]):h([])),c(!1)},[p]),e("div",{children:e(V,{columns:[{name:"Ejercicio",selector:r=>r==null?void 0:r.tipoejercicio,sortable:!0,width:"20rem"},{name:"Instrucciones",selector:r=>r==null?void 0:r.observaciones,sortable:!0,width:"30rem",wrap:!0}],data:l,pagination:!0,noDataComponent:"No hay data",progressPending:s,progressComponent:e(D,{children:"Loading..."})})})}function ce({clienteSeleccionado:t}){const[l,h]=d.exports.useState("1"),[p,g]=d.exports.useState({}),[s,c]=d.exports.useState({}),m=r=>{l===r?h():h(r)};return d.exports.useEffect(()=>{var r;C.get(`https://dietservice.bitjoins.pe/api/plan_alimentacion/last/${(r=t==null?void 0:t.data)==null?void 0:r.data.usuario_id}`).then(a=>{var u;return g((u=a==null?void 0:a.data)==null?void 0:u.data)})},[]),d.exports.useEffect(()=>{p!=null&&C.get(`https://dietservice.bitjoins.pe/api/patologias/${p==null?void 0:p.id}`).then(r=>c(r==null?void 0:r.data))},[p]),console.log(s),e("div",{children:e(Z,{open:l,toggle:m,style:{width:"50rem"},children:i(J,{children:[e(K,{targetId:"1",children:s.nombre?s.nombre:"Ninguna"}),e(Y,{accordionId:"1",children:s==null?void 0:s.descripcion})]})})})}function me({clienteSeleccionado:t}){const[l,h]=d.exports.useState("1"),[p,g]=d.exports.useState([]),[s,c]=d.exports.useState({}),m=(a,u)=>{h(u)};function r(a){return a==null?void 0:a.split(`
`)}return d.exports.useEffect(()=>{var a;C.get(`https://dietservice.bitjoins.pe/api/plan_alimentacion/last/${(a=t==null?void 0:t.data)==null?void 0:a.data.usuario_id}`).then(u=>c(u.data.data))},[]),d.exports.useEffect(()=>{g(r(s==null?void 0:s.tips))},[s]),e("div",{children:i(k,{sx:{width:"100%",typography:"body1"},children:[i(G,{value:l,children:[e(k,{sx:{borderBottom:1,borderColor:"divider"},children:i(L,{onChange:m,"aria-label":"lab API tabs example",children:[e(w,{label:"Dieta",value:"1"}),e(w,{label:"Recomendaciones",value:"2"}),e(w,{label:"Ejercicios",value:"3"}),e(w,{label:"Patologias",value:"4"})]})}),e(P,{value:"1",children:e(pe,{clienteSeleccionado:t})}),e(P,{value:"2",children:e(ue,{clienteSeleccionado:t})}),e(P,{value:"3",children:e(he,{clienteSeleccionado:t})}),e(P,{value:"4",children:e(ce,{clienteSeleccionado:t})})]}),i("div",{style:{display:"flex"},children:[e(M,{className:"my-2",style:{width:"24rem"},children:i(O,{children:[e(z,{tag:"h5",style:{fontWeight:"bold"},children:"Tips"}),e(W,{children:p==null?void 0:p.map(a=>e("p",{children:a}))})]})}),e(M,{className:"my-2",style:{width:"25rem"},children:i(O,{children:[e(z,{tag:"h5",style:{fontWeight:"bold"},children:"Notas"}),e(W,{children:s==null?void 0:s.notas})]})})]})]})})}function ge({clienteSeleccionado:t}){const[l,h]=d.exports.useState(0),[p,g]=d.exports.useState(!1),s=()=>{g(!p)},c=(a,u)=>{h(u)};function m(a){const{children:u,value:o,index:b,...A}=a;return e("div",{role:"tabpanel",hidden:o!==b,id:`vertical-tabpanel-${b}`,"aria-labelledby":`vertical-tab-${b}`,...A,children:o===b&&e(k,{sx:{p:3},children:e(ie,{children:u})})})}m.propTypes={children:N.exports.node,index:N.exports.number.isRequired,value:N.exports.number.isRequired};function r(a){return{id:`vertical-tab-${a}`,"aria-controls":`vertical-tabpanel-${a}`}}return e("div",{style:{display:"flex",justifyContent:"flex-start",width:"100%",overflowX:"auto"},children:i(k,{sx:{bgcolor:"background.paper",display:"flex"},children:[i(re,{orientation:"vertical",variant:"scrollable",value:l,onChange:c,"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:[e(w,{label:"Estado",...r(0)}),e(w,{label:"Evolucion",...r(1)}),e(w,{label:"Dieta",...r(2)})]}),e(m,{value:l,index:0,children:e(oe,{clienteSeleccionado:t})}),i(m,{value:l,index:1,children:[e($,{type:"submit",onClick:a=>{a.preventDefault(),s()},children:"Nueva Evolucion"}),e("br",{}),e("br",{}),e(le,{clienteSeleccionado:t,toggle:s,modal:p})]}),e(m,{value:l,index:2,children:e(me,{clienteSeleccionado:t})})]})})}function fe({clienteSeleccionado:t}){const[l,h]=d.exports.useState({}),[p,g]=d.exports.useState({}),[s,c]=d.exports.useState([]);return d.exports.useEffect(()=>{C.get(`https://dietservice.bitjoins.pe/api/ultima-evolucion/${t==null?void 0:t.data.data.usuario_id}`).then(m=>h(m.data)),C.get("https://dietservice.bitjoins.pe/api/consultorios").then(m=>{const r=m.data.filter(a=>(a==null?void 0:a.id)===(t==null?void 0:t.data.data.consultorio_id));g(r)}),C.get("https://dietservice.bitjoins.pe/api/empresas").then(m=>c(m.data))},[]),console.log(p),i("div",{style:{display:"flex",gap:"1rem"},children:[i("div",{style:{display:"flex",flexDirection:"column",width:"30rem"},children:[i("div",{style:{display:"flex",flexDirection:"column",gap:".25rem"},children:[i("h4",{style:{textAlign:"center",fontSize:"2rem"},children:[t.data.data.nombre," ",t.data.data.apellido]}),i("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Usuario"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t.data.data.email})]}),i("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Telefono"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t.data.data.telefono})]}),i("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Ocupacion"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t.data.data.ocupacion})]}),i("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Distrito"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t.data.data.distrito})]}),i("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Consultorio"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t.data.data.consultorio_id})]}),i("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Empresa"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t.data.data.empresa_id})]}),i("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Ultima Cita"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t.data.data.distrito})]})]}),i("div",{children:[e("p",{style:{fontSize:"3rem",textAlign:"center"},children:t.data.data.talla}),e("h5",{style:{fontSize:"1.5rem",textAlign:"center"},children:"Talla"})]}),e("div",{})]}),i("div",{style:{width:"70rem",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center"},children:[i("div",{style:{display:"flex",justifyContent:"center",gap:"1rem"},children:[e(T,{icon:e(j,{size:21}),color:"info",stats:l==null?void 0:l.peso,statTitle:"Peso Actual"}),e(T,{icon:e(j,{size:21}),color:"info",stats:l==null?void 0:l.p_grasa,statTitle:"% Grasa Actual"}),e(T,{icon:e(j,{size:21}),color:"info",stats:t.data.data.peso_ideal,statTitle:"Peso Ideal"}),e(T,{icon:e(j,{size:21}),color:"info",stats:t.data.data.p_grasa_ideal,statTitle:"% Grasa Ideal"}),e(T,{icon:e(j,{size:21}),color:"info",stats:t.data.data.p_masa_muscular,statTitle:"% Masa Muscular Ideal"})]}),e(ge,{clienteSeleccionado:t})]})]})}function Te(){const[t,l]=d.exports.useState("clientes"),[h,p]=d.exports.useState({}),g=(s,c)=>{l(c)};return e(d.exports.Fragment,{children:i(G,{value:t,children:[i(L,{onChange:g,"aria-label":"simple tabs example",children:[e(w,{value:"clientes",label:"Clientes"}),e(w,{value:"perfil",label:"Perfil"}),e(w,{value:"edicion",label:"Edicion"})]}),e(P,{value:"clientes",children:e(se,{setTab:l,setClienteSeleccionado:p})}),e(P,{value:"perfil",children:e(fe,{clienteSeleccionado:h})}),e(P,{value:"edicion",children:e(ne,{clienteSeleccionado:h})})]})})}export{Te as default};