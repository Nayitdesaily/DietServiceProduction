import{r as h,o as n,j as e,$ as ee,c8 as K,bZ as X,b_ as Y,b$ as S,aa as q,cv as O,af as H,ag as z,aj as f,ab as U,au as he,bb as ce,av as ge,p as ie,aO as ae,ac as oe,ad as de,ai as me,bW as ve,D as be,x as ye,y as re}from"./index.8ebe918d.js";import{T as te,a as ne,b as N,c as W,i as fe}from"./Tab.4d32f9e0.js";import{Q as ue}from"./index.es.ea894507.js";import{u as pe,C as G}from"./index.esm.f890ea54.js";import{T as se,E as Z,bI as xe,bN as Ce}from"./App.a419ef53.js";import{B as Q}from"./Box.6d522f17.js";import{S as J}from"./StatsVertical.fd43dcb9.js";import{D as _e,T as we}from"./Dietas.74f85452.js";import"./emotion-react.browser.esm.b8f6e64a.js";import"./emotion-memoize.esm.06f0e458.js";import"./emotion-is-prop-valid.esm.22611268.js";import"./TransitionGroup.7800fe6d.js";function Ie({dietas:t,setDietas:c,editarCopiar:l,plan_id:D}){const[u,P]=h.exports.useState("1"),_=v=>{u===v?P():P(v)};function r(v,x){if(l=="Copiar"){const b=[...t];b.splice(v,1),c(b)}if(l=="Editar"){const b=[...t];x!=""?(f.delete(`https://dietservice.bitjoins.pe/api/dieta/eliminar/${D}/${v+1}`).then(k=>{console.log(k.data)}),b.splice(v,1),c(b)):(b.splice(v,1),c(b))}}function E(){c(v=>[...v,[{comida:"1",descripcion:"",id:"",opcion:(v.length+1).toString(),planalimentacion_id:""},{comida:"2",descripcion:"",id:"",opcion:(v.length+1).toString(),planalimentacion_id:""},{comida:"3",descripcion:"",id:"",opcion:(v.length+1).toString(),planalimentacion_id:""},{comida:"4",descripcion:"",id:"",opcion:(v.length+1).toString(),planalimentacion_id:""}]])}const[$,F]=h.exports.useState(null),j=v=>{F(v)},I=()=>{F(null)},V=(v,x,b)=>{const{value:k}=v.target;c(A=>A.map((L,R)=>R===x?L.map((C,p)=>p===b?{...C,descripcion:k}:C):L))};return n("div",{children:[e(ee,{color:"success",onClick:()=>E(),children:"Agregar opcion"}),e("ul",{children:t.map((v,x)=>e("li",{style:{listStyle:"none"},children:e(K,{open:u,toggle:_,style:{padding:0,margin:0},children:n(X,{children:[n("div",{style:{display:"flex",alignItems:"center"},children:[e(se,{size:20,onClick:()=>{var b;return r(x,(b=v==null?void 0:v[0])==null?void 0:b.id)},style:{color:$===x?"red":"black",cursor:"pointer"},onMouseEnter:()=>j(x),onMouseLeave:I}),n(Y,{targetId:x,children:[" Opcion # ",x+1]})]}),e(S,{accordionId:x,children:v.map((b,k)=>e(q,{children:n(O,{children:[e(H,{children:b.comida==1?"Desayuno":b.comida==2?"Almuerzo":b.comida==3?"Cena":b.comida==4?"Merienda":null}),e(z,{name:"descripcion",placeholder:"Ingrese la comida",type:"textarea",defaultValue:b==null?void 0:b.descripcion,onChange:A=>V(A,x,k)})]})},k))})]})})},x))})]})}function Ae({planSeleccionado:t,dietas:c,setDietas:l,recomendaciones:D,setRecomendaciones:u,ejercicios:P,setEjercicios:_,patologia:r,setPatologia:E,editarCopiar:$}){const[F,j]=h.exports.useState("dieta"),{control:I}=pe({}),[V,v]=h.exports.useState(null),[x,b]=h.exports.useState("1"),k=(i,s)=>{j(s)};h.exports.useEffect(()=>{async function i(){await f.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dietas/web/${t==null?void 0:t.planalimentacion_id}`).then(s=>{l(s.data)}),await f.get(`https://dietservice.bitjoins.pe/api/recomendaciones-web/${t==null?void 0:t.planalimentacion_id}`).then(s=>{u(s.data)}),await f.get(`https://dietservice.bitjoins.pe/api/ejercicios-web/${t==null?void 0:t.planalimentacion_id}`).then(s=>{_(s.data)}),await f.get(`https://dietservice.bitjoins.pe/api/patologias-web/${t==null?void 0:t.planalimentacion_id}`).then(s=>{E(s.data)})}i()},[]),h.exports.useEffect(()=>{$=="Copiar"&&(r==null||r.map(i=>{i.patologia_por_plan_id=""}))},r);const A=i=>{x===i?b():b(i)},L=i=>{v(i)},R=()=>{v(null)},C=(i,s)=>{const{value:g}=i.target;u(M=>M.map((y,B)=>B===s?{...y,recomendacion:g}:y))},p=(i,s)=>{const{value:g}=i.target;u(M=>M.map((y,B)=>B===s?{...y,tipo:g}:y))};function d(){u(i=>[...i,{recomendacion:"",id:"",tipo:"",planalimentacion_id:""}])}const o=(i,s)=>{const{value:g}=i.target;_(M=>M.map((y,B)=>B===s?{...y,tipoejercicio:g}:y))},m=(i,s)=>{const{value:g}=i.target;_(M=>M.map((y,B)=>B===s?{...y,tiempo:g}:y))},w=(i,s)=>{const{value:g}=i.target;_(M=>M.map((y,B)=>B===s?{...y,observaciones:g}:y))};function a(){_(i=>[...i,{tipoejercicio:"",id:"",tiempo:"",planalimentacion_id:"",observaciones:""}])}console.log(r);function T(i,s){const g=[...D];$=="Copiar"&&(g.splice(i,1),u(g)),$=="Editar"&&(s!=""?(f.delete(`https://dietservice.bitjoins.pe/api/recomendaciones/eliminar/${s}`).then(M=>{console.log(M.data)}),g.splice(i,1),u(g)):(g.splice(i,1),u(g)))}function le(i,s){const g=[...P];$=="Copiar"&&(g.splice(i,1),_(g)),$=="Editar"&&(s!=""?(f.delete(`https://dietservice.bitjoins.pe/api/ejercicios/eliminar/${s}`).then(M=>{console.log(M.data)}),g.splice(i,1),_(g)):(g.splice(i,1),_(g)))}return e("div",{children:e(Q,{sx:{width:"100%",typography:"body1"},children:n(te,{value:F,children:[e(Q,{sx:{borderBottom:1,borderColor:"divider"},children:n(ne,{onChange:k,"aria-label":"lab API tabs example",children:[e(N,{label:"Dieta",value:"dieta"}),e(N,{label:"Recomendaciones",value:"recomendaciones"}),e(N,{label:"Ejercicios",value:"ejercicios"}),e(N,{label:"Patologia",value:"patologia"})]})}),e(W,{value:"dieta",children:e(Ie,{dietas:c,setDietas:l,editarCopiar:$,plan_id:t==null?void 0:t.planalimentacion_id})}),n(W,{value:"recomendaciones",children:[e(ee,{color:"success",onClick:()=>d(),children:"Agregar opcion"}),e("ul",{children:D.map((i,s)=>e("li",{style:{listStyle:"none"},children:e(K,{open:x,toggle:A,style:{padding:0,margin:0},children:n(X,{children:[n("div",{style:{display:"flex",alignItems:"center"},children:[e(se,{size:20,onClick:()=>T(s,i==null?void 0:i.id),style:{color:V===s?"red":"black",cursor:"pointer"},onMouseEnter:()=>L(s),onMouseLeave:R}),n(Y,{targetId:s,children:[" Opcion ",s+1]})]}),e(S,{accordionId:s,children:n(q,{children:[e(U,{children:e(G,{name:"tipo",control:I,render:({field:{onChange:g,value:M}})=>n(O,{children:[e(H,{children:"Tipo"}),n(z,{placeholder:"Ingrese el tipo",type:"select",defaultValue:i==null?void 0:i.tipo,onChange:y=>{p(y,s),g(y.target.value)},children:[e("option",{value:"",children:"Seleccione el tipo"}),e("option",{value:"1",children:"Pautas Generales"}),e("option",{value:"2",children:"Alimentos Prohibidos"}),e("option",{value:"3",children:"Prohibidos (Consumo Mensual)"}),e("option",{value:"4",children:"No olvidar"})]})]})})}),e(U,{children:e(G,{name:"recomendacion",control:I,render:({field:{onChange:g,value:M}})=>e(O,{children:e(z,{placeholder:"Ingrese la recomendacion",type:"textarea",onChange:y=>{C(y,s),g(y.target.value)},defaultValue:i==null?void 0:i.recomendacion})})})})]})})]})})},s))})]}),n(W,{value:"ejercicios",children:[e(ee,{color:"success",onClick:()=>a(),children:"Agregar opcion"}),e("ul",{children:P.map((i,s)=>e("li",{style:{listStyle:"none"},children:e(K,{open:x,toggle:A,style:{padding:0,margin:0},children:n(X,{children:[n("div",{style:{display:"flex",alignItems:"center"},children:[e(se,{size:20,onClick:()=>le(s,i==null?void 0:i.id),style:{color:V===s?"red":"black",cursor:"pointer"},onMouseEnter:()=>L(s),onMouseLeave:R}),n(Y,{targetId:s,children:[" Opcion ",s+1]})]}),e(S,{accordionId:s,children:n(q,{children:[e(U,{children:e(G,{name:"tipoejercicio",control:I,render:({field:{onChange:g,value:M}})=>n(O,{children:[e(H,{children:"Tipo Ejercicio"}),e(z,{placeholder:"Ingrese el tipo",type:"text",defaultValue:i==null?void 0:i.tipoejercicio,onChange:y=>{o(y,s),g(y.target.value)}})]})})}),e(U,{children:e(G,{name:"tiempo",control:I,render:({field:{onChange:g,value:M}})=>n(O,{children:[e(H,{children:"Tiempo"}),e(z,{placeholder:"Ingrese la recomendacion",type:"textarea",onChange:y=>{m(y,s),g(y.target.value)},defaultValue:i==null?void 0:i.tiempo})]})})}),e(U,{children:e(G,{name:"observaciones",control:I,render:({field:{onChange:g,value:M}})=>n(O,{children:[e(H,{children:"Observaciones"}),e(z,{placeholder:"Ingrese la recomendacion",type:"textarea",onChange:y=>{w(y,s),g(y.target.value)},defaultValue:i==null?void 0:i.observaciones})]})})})]})})]})})},s))})]}),e(W,{value:"patologia",children:r.length<1?"No tiene patologias":e("ul",{children:r==null?void 0:r.map((i,s)=>e("li",{style:{listStyle:"none"},children:e(K,{open:x,toggle:A,style:{padding:0,margin:0},children:n(X,{children:[n(Y,{targetId:s,children:[" ",i.nombre]}),e(S,{accordionId:s,children:e("div",{dangerouslySetInnerHTML:{__html:i.descripcion}})})]})})},s))})})]})})})}function Te({modal:t,toggle:c,filaSeleccionada:l,setFilaSeleccionada:D,editarCopiar:u}){const{handleSubmit:P,control:_,reset:r}=pe({}),[E,$]=h.exports.useState([]),[F,j]=h.exports.useState([]),[I,V]=h.exports.useState([]),[v,x]=h.exports.useState([]),[b,k]=h.exports.useState([]),[A,L]=h.exports.useState([]);async function R(C){u=="Copiar"&&await f.post("https://dietservice.bitjoins.pe/api/plan_alimentacion/create_web",C).then(p=>{var d,o;if(p.status=200){console.log(p);const m=(o=(d=p==null?void 0:p.data)==null?void 0:d.data)==null?void 0:o.id;E.map(w=>{w.map(a=>{a.planalimentacion_id=m.toString(),f.post("https://dietservice.bitjoins.pe/api/dieta/create",a).then(T=>console.log(T))})}),F.map(w=>{w.planalimentacion_id=m.toString(),f.post("https://dietservice.bitjoins.pe/api/recomendaciones/create",w).then(a=>console.log(a))}),I.map(w=>{w.planalimentacion_id=m.toString(),f.post("https://dietservice.bitjoins.pe/api/ejercicios/create",w).then(a=>console.log(a))}),A==null||A.map(w=>{w.planalimentacion_id=m.toString(),f.post("https://dietservice.bitjoins.pe/api/crear-patologia-web",w).then(a=>{console.log(a)})})}}),u=="Editar"&&await f.put(`https://dietservice.bitjoins.pe/api/plan_alimentacion/actualizar/${l==null?void 0:l.planalimentacion_id}`,C).then(p=>{if(p.status=200){console.log(p.data);const d=l==null?void 0:l.planalimentacion_id;E.map(o=>{o.map(m=>{m.planalimentacion_id=d.toString(),(m==null?void 0:m.id)!==""?f.put(`https://dietservice.bitjoins.pe/api/dieta/actualizar/${m==null?void 0:m.id}`,m).then(w=>console.log(w.data.message)):f.post("https://dietservice.bitjoins.pe/api/dieta/create",m).then(w=>console.log(w.data.message))})}),F.map(o=>{o.planalimentacion_id=d.toString(),(o==null?void 0:o.id)!=""?f.put(`https://dietservice.bitjoins.pe/api/recomendaciones/actualizar/${o==null?void 0:o.id}`,o).then(m=>console.log(m.data)):f.post("https://dietservice.bitjoins.pe/api/recomendaciones/create",o).then(m=>console.log(m.data.message))}),I.map(o=>{o.planalimentacion_id=d.toString(),(o==null?void 0:o.id)!=""?f.put(`https://dietservice.bitjoins.pe/api/ejercicios/actualizar/${o==null?void 0:o.id}`,o).then(m=>console.log(m.data.message)):f.post("https://dietservice.bitjoins.pe/api/ejercicios/create",o).then(m=>console.log(m.data.message))}),A==null||A.map(o=>{o.planalimentacion_id=d.toString(),o.patologia_por_plan_id==""&&f.post("https://dietservice.bitjoins.pe/api/crear-patologia-web",o).then(m=>{console.log(m)})})}}),c()}return h.exports.useEffect(()=>{async function C(){await f.get("https://dietservice.bitjoins.pe/api/nutricionistas").then(p=>{x(p.data)}),await f.get("https://dietservice.bitjoins.pe/api/usuarios-web").then(p=>{k(p.data)})}C()},[]),e("div",{children:n(he,{isOpen:t,toggle:()=>{c(),$([]),j([]),V([]),L([]),r(),D({})},fullscreen:!0,scrollable:!0,children:[e(ce,{toggle:()=>{c(),$([]),j([]),V([]),L([]),r(),D({})},children:"Nuevo Plan"}),e(ge,{children:n("form",{onSubmit:P(R),children:[e(q,{children:e(G,{name:"fecultimaact",control:_,render:({field:{value:C,...p}})=>n(O,{children:[e(H,{children:"Fecha"}),e(z,{placeholder:"Ingrese la fecha de inicio",type:"date",...p})]})})}),e(q,{children:e(G,{name:"nombre",control:_,defaultValue:l==null?void 0:l.plan,render:({field:C})=>n(O,{children:[e(H,{children:"Plan"}),e(z,{placeholder:"Ingrese el nombre del plan",type:"text",...C})]})})}),n(q,{children:[e(U,{children:e(G,{name:"usuario_id",control:_,defaultValue:l==null?void 0:l.usuario_id,render:({field:{onChange:C,value:p}})=>n(O,{children:[e(H,{children:"Cliente"}),n(z,{placeholder:"Seleccione el cliente",type:"select",onChange:d=>C(d.target.value),children:[n("option",{value:l==null?void 0:l.usuario_id,children:[l==null?void 0:l.nombre," ",l==null?void 0:l.apellido]}),b==null?void 0:b.filter(d=>d.usuario_id!=(l==null?void 0:l.usuario_id)).map((d,o)=>n("option",{value:d==null?void 0:d.usuario_id,children:[d==null?void 0:d.nombre," ",d==null?void 0:d.apellido]},o))]})]})})}),e(U,{children:e(G,{name:"nutricionista_id",control:_,defaultValue:l==null?void 0:l.nutricionista_id,render:({field:{onChange:C,value:p}})=>n(O,{children:[e(H,{children:"Nutricionista"}),n(z,{placeholder:"Seleccione el nutricionista",type:"select",onChange:d=>C(d.target.value),children:[e("option",{value:l==null?void 0:l.nutricionista_id,children:l==null?void 0:l.nutricionista_nombres}),v==null?void 0:v.map((d,o)=>e("option",{value:d==null?void 0:d.id,children:d==null?void 0:d.nombres},o))]})]})})})]}),n(q,{children:[e(U,{children:e(G,{name:"tips",control:_,defaultValue:l==null?void 0:l.tips,render:({field:C})=>n(O,{children:[e(H,{children:"Tips"}),e(z,{placeholder:"Ingrese el tip",type:"textarea",...C})]})})}),e(U,{children:e(G,{name:"notas",control:_,defaultValue:l==null?void 0:l.notas,render:({field:C})=>n(O,{children:[e(H,{children:"Notas"}),e(z,{placeholder:"Ingresa las notas",type:"textarea",...C})]})})})]}),e(Ae,{planSeleccionado:l,dietas:E,setDietas:$,recomendaciones:F,setRecomendaciones:j,ejercicios:I,setEjercicios:V,patologia:A,setPatologia:L,editarCopiar:u}),e(ee,{color:"success",type:"submit",children:"Ok"}),e(ee,{color:"secondary",onClick:()=>{c(),r(),D({})},children:"Cancel"})]})})]})})}function Pe({plan:t}){const[c,l]=h.exports.useState([]),[D,u]=h.exports.useState("1"),P=(r,E)=>{u(E)};h.exports.useEffect(()=>{f.get(`https://dietservice.bitjoins.pe/api/recomendaciones-web/${t}`).then(r=>{Array.isArray(r.data)?l(r.data):l([r.data])})},[t]),h.exports.useEffect(()=>{var r;u((r=c==null?void 0:c[0])==null?void 0:r.tipo)},[c]);function _(r){return r.split(`
`).filter(j=>j.trim()!==".").map((j,I)=>e("p",{children:j},I))}return e(h.exports.Fragment,{children:n(te,{value:D,children:[e(ne,{onChange:P,"aria-label":"simple tabs example",scrollButtons:"auto",children:c==null?void 0:c.map((r,E)=>e(N,{value:r==null?void 0:r.tipo,label:(r==null?void 0:r.tipo)==1?"Pautas Generales":(r==null?void 0:r.tipo)==2?"Alimentos Permitidos":(r==null?void 0:r.tipo)==3?"Prohibidos (Consumo Mensual)":(r==null?void 0:r.tipo)==4?"No Olvidar":null},E))}),c==null?void 0:c.map((r,E)=>e(W,{value:r==null?void 0:r.tipo,children:_(r==null?void 0:r.recomendacion)},E))]})})}function Ee({ejercicios:t}){return e("div",{children:t.map((c,l)=>e("ul",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:e("li",{style:{listStyle:"none"},children:n("div",{style:{display:"flex",alignItems:"center",gap:"2rem",justifyContent:"flex-start"},children:[e("h5",{style:{minWidth:"7rem"},children:c.tipoejercicio}),e("p",{style:{width:"30rem",padding:"1rem",backgroundColor:"#48a38a",color:"white",borderRadius:"1rem"},children:c.observaciones})]})},l)}))})}function De({patologia:t}){const[c,l]=h.exports.useState("1"),D=u=>{c===u?l():l(u)};return console.log(t),e("div",{children:t.length==0?e("p",{children:"Ninguna"}):e(K,{open:c,toggle:D,children:t==null?void 0:t.map((u,P)=>e("li",{style:{listStyle:"none"},children:n(X,{children:[n(Y,{targetId:P,children:[" ",u.nombre]}),e(S,{accordionId:P,children:e("div",{dangerouslySetInnerHTML:{__html:u.descripcion}})})]})},P))})})}function $e({usuario:t}){var R,C;const[c,l]=h.exports.useState({}),[D,u]=h.exports.useState({}),[P,_]=h.exports.useState([]),[r,E]=h.exports.useState("dieta"),[$,F]=h.exports.useState([]),[j,I]=h.exports.useState([]),[V,v]=h.exports.useState(0),x=(p,d)=>{v(d)};h.exports.useEffect(()=>{f.get(`https://dietservice.bitjoins.pe/api/ultima-evolucion/${t==null?void 0:t.usuario_id}`).then(p=>l(p.data)),f.get("https://dietservice.bitjoins.pe/api/consultorios").then(p=>{const d=p.data.filter(o=>(o==null?void 0:o.id)==t.consultorio_id);u(d)}),f.get("https://dietservice.bitjoins.pe/api/empresas").then(p=>{const d=p.data.filter(o=>(o==null?void 0:o.id)==t.empresa_id);_(d)}),f.get(`https://dietservice.bitjoins.pe/api/ejercicios-web/${t==null?void 0:t.planalimentacion_id}`).then(p=>{F(p.data)}),f.get(`https://dietservice.bitjoins.pe/api/patologias-web/${t==null?void 0:t.planalimentacion_id}`).then(p=>{I(p.data)})},[]);function b(p){const{children:d,value:o,index:m,...w}=p;return e("div",{role:"tabpanel",hidden:o!==m,id:`vertical-tabpanel-${m}`,"aria-labelledby":`vertical-tab-${m}`,...w,children:o===m&&e(Q,{sx:{p:3},children:e(we,{children:d})})})}W.propTypes={children:ie.exports.node,index:ie.exports.number.isRequired,value:ie.exports.number.isRequired};function k(p){return{id:`vertical-tab-${p}`,"aria-controls":`vertical-tabpanel-${p}`}}const A=(p,d)=>{E(d)};function L(p){return p.split(".").map((m,w)=>e("p",{children:m},w))}return console.log(t),n("div",{style:{display:"flex",gap:"1rem"},children:[n("div",{style:{display:"flex",flexDirection:"column",width:"30rem"},children:[n("div",{style:{display:"flex",flexDirection:"column",gap:".25rem"},children:[n("h4",{style:{textAlign:"center",fontSize:"2rem"},children:[t==null?void 0:t.nombre," ",t==null?void 0:t.apellido]}),n("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Usuario"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t==null?void 0:t.email})]}),n("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Telefono"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t==null?void 0:t.contacto})]}),n("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Ocupacion"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t==null?void 0:t.ocupacion})]}),n("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Consultorio"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:(R=D==null?void 0:D[0])==null?void 0:R.nombre})]}),n("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Empresa"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:(C=P==null?void 0:P[0])==null?void 0:C.nombre})]}),n("div",{style:{display:"flex"},children:[e("p",{style:{width:"8rem",textAlign:"right",fontWeight:700,backgroundColor:"#ACE1AF",margin:0,padding:".5rem",borderRadius:".25rem"},children:"Ultima Cita"}),e("p",{style:{width:"15rem",textAlign:"riht",margin:0,padding:".5rem"},children:t==null?void 0:t.distrito})]})]}),e("br",{}),n("div",{children:[e("p",{style:{fontSize:"3rem",textAlign:"center"},children:t==null?void 0:t.talla}),e("h5",{style:{fontSize:"1.5rem",textAlign:"center"},children:"Talla"})]}),e("br",{}),n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"flex-start"},children:[n("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem"},children:[e("h6",{style:{padding:0,margin:0,fontSize:"1.25rem",width:"8rem"},children:"Gustos"}),e("p",{style:{padding:0,margin:0},children:(t==null?void 0:t.gustos)==null&&"No hay informaci\xF3n"})]}),n("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem"},children:[e("h6",{style:{padding:0,margin:0,fontSize:"1.25rem",width:"8rem"},children:"No Gustos"}),e("p",{style:{padding:0,margin:0},children:(t==null?void 0:t.no_gustos)==null&&"No hay informaci\xF3n"})]})]})]}),n("div",{style:{width:"70rem",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[n("div",{style:{display:"flex",justifyContent:"center",gap:"1rem"},children:[e(J,{icon:e(Z,{size:21}),color:"info",stats:c==null?void 0:c.peso,statTitle:"Peso Actual"}),e(J,{icon:e(Z,{size:21}),color:"info",stats:c==null?void 0:c.p_grasa,statTitle:"% Grasa Actual"}),e(J,{icon:e(Z,{size:21}),color:"info",stats:t==null?void 0:t.peso_ideal,statTitle:"Peso Ideal"}),e(J,{icon:e(Z,{size:21}),color:"info",stats:t==null?void 0:t.p_grasa_ideal,statTitle:"% Grasa Ideal"}),e(J,{icon:e(Z,{size:21}),color:"info",stats:t==null?void 0:t.p_masa_muscular,statTitle:"% Masa Muscular Ideal"})]}),n(Q,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex",width:"100%%"},children:[n(fe,{orientation:"vertical",variant:"scrollable",value:V,onChange:x,"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider",width:"30%"},children:[e(N,{label:"Dietas",...k(0)}),e(N,{label:"Historial",...k(1)})]}),e(b,{value:V,index:0,children:n(Q,{sx:{width:"100%",overflow:"hidden"},children:[n(te,{value:r,children:[e(Q,{sx:{borderBottom:1,borderColor:"divider"},children:n(ne,{onChange:A,"aria-label":"lab API tabs example",children:[e(N,{label:"Dieta",value:"dieta"}),e(N,{label:"Recomendaciones",value:"recomendaciones"}),e(N,{label:"Ejercicios",value:"ejercicios"}),e(N,{label:"Patologia",value:"patologia"})]})}),e(W,{value:"dieta",children:e(_e,{plan:t==null?void 0:t.planalimentacion_id})}),e(W,{value:"recomendaciones",children:e(Pe,{plan:t==null?void 0:t.planalimentacion_id})}),e(W,{value:"ejercicios",children:e(Ee,{ejercicios:$})}),e(W,{value:"patologia",children:e(De,{patologia:j})})]}),n("div",{style:{display:"flex",gap:"2rem"},children:[n(ae,{body:!0,className:"my-2",style:{width:"10rem"},children:[e(oe,{tag:"h5",children:"Tips"}),e(de,{children:L(t==null?void 0:t.tips)})]}),n(ae,{body:!0,className:"my-2",style:{width:"10rem"},children:[e(oe,{tag:"h5",children:"Notas"}),e(de,{children:t==null?void 0:t.notas})]})]})]})}),e(b,{value:V,index:1,children:"Historial"})]})]})]})}function Me({direction:t}){const[c,l]=h.exports.useState("historico"),[D,u]=h.exports.useState([]),[P,_]=h.exports.useState(!0),[r,E]=h.exports.useState(!1),[$,F]=h.exports.useState(null),[j,I]=h.exports.useState({}),[V,v]=h.exports.useState(!1),x=()=>v(!V),[b,k]=h.exports.useState(""),[A,L]=h.exports.useState([]),[R,C]=h.exports.useState(""),p=a=>{$===a?E(!r):(E(!0),F(a))};h.exports.useEffect(()=>{async function a(){await f.get("https://dietservice.bitjoins.pe/api/plan_alimentacion").then(T=>{u(T.data),L(T.data)}),_(!1)}a()},[]);const d=(a,T)=>{l(T)},m=[{cell:a=>n(ve,{isOpen:r&&$===a,toggle:()=>p(a),direction:"start",children:[e(be,{caret:!0,children:e(xe,{icon:Ce})}),n(ye,{children:[e(re,{onClick:()=>{I(a),l("plan")},children:"Detalle"}),e(re,{onClick:()=>{x(),k("Editar"),I(a)},children:"Editar"}),e(re,{onClick:()=>{x(),I(a),k("Copiar")},children:"Copiar"})]})]}),right:!0,width:"15rem"},{name:"Item",selector:(a,T)=>a.planalimentacion_id,center:!0,width:"6rem"},{name:"Plan",selector:a=>a.plan,minWidth:"12rem"},{name:"Estado",selector:a=>a.estado==1?"Activo":"No Activo",width:"12rem"},{name:"Cliente",selector:a=>`${a.nombre} ${a.apellido}`,minWidth:"12rem"},{name:"Usuario",selector:a=>a.email,minWidth:"12rem"},{name:"Fecha",selector:a=>a.fecultimaact,minWidth:"12rem",sortable:!0,sortFunction:(a,T)=>{let le=a==null?void 0:a.fecultimaact,i=T==null?void 0:T.fecultimaact;const s=new Date(le).getTime(),g=new Date(i).getTime();return s>g?-1:g>s?1:0}},{name:"Nutricionista",selector:a=>a.nutricionista_nombres,minWidth:"12rem",sortable:!0},{name:"Contacto",selector:a=>a.contacto,minWidth:"12rem",sortable:!0}];function w(a){return a.filter(T=>(T.nombre+" "+T.apellido).toLowerCase().includes(R.toLowerCase())||T.contacto.includes(R)||T.email.includes(R)||T.nutricionista_nombres.toLowerCase().includes(R.toLocaleLowerCase())||T.plan.toLowerCase().includes(R.toLowerCase()))}return h.exports.useEffect(()=>{let a=w(A);u(a)},[R]),console.log(A),e("div",{children:e(h.exports.Fragment,{children:n(te,{value:c,children:[n(ne,{onChange:d,"aria-label":"simple tabs example",children:[e(N,{value:"historico",label:"Historico"}),e(N,{value:"plan",label:"Plan"})]}),n(W,{value:"historico",children:[n("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"},children:[e("p",{style:{padding:0,margin:0},children:"Buscar:"}),e(z,{type:"text",style:{width:"25rem"},onChange:a=>C(a.target.value)})]}),e("br",{}),e(ue,{columns:m,data:D,pagination:!0,noDataComponent:"No hay data",progressPending:P,progressComponent:e(me,{children:"Loading..."}),defaultSortFieldId:-1}),e(Te,{modal:V,toggle:x,filaSeleccionada:j,setFilaSeleccionada:I,editarCopiar:b})]}),e(W,{value:"plan",children:e($e,{usuario:j})})]})})})}Me.propTypes={direction:"down"};export{Me as default};
