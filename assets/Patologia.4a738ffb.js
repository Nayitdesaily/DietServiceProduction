import{j as e,o as i,au as P,bb as w,av as M,aa as v,cv as x,af as C,ag as y,$ as u,aj as b,r as c,ai as E}from"./index.365e3ad1.js";import{Q as I}from"./index.es.72966381.js";import{u as N,C as j}from"./index.esm.b088bfd3.js";import"./emotion-is-prop-valid.esm.22611268.js";import"./emotion-memoize.esm.06f0e458.js";function $({toggle:l,modal:h,patologiaSelec:n,setPatologiaSelec:a}){const{handleSubmit:f,control:m,reset:s}=N({defaultValues:{nombre:"",descripcion:""}});function g(o){n!=null?b.post(`https://dietservice.bitjoins.pe/api/actualizar-patologia/${n==null?void 0:n.id}`,n).then(t=>console.log(t.data)):b.post("https://dietservice.bitjoins.pe/api/crear-patologia-web-configuracion",o).then(t=>console.log(t.data)),l(),a(null),s()}function p(o){if(n!=null){let t=o.target.name;a(r=>({...r,[t]:o.target.value}))}}return e("div",{children:i(P,{isOpen:h,toggle:()=>{l(),s(),a(null)},scrollable:!0,children:[e(w,{toggle:()=>{l(),s(),a(null)},children:"Nueva Patologia"}),e(M,{children:i("form",{onSubmit:f(g),children:[e(v,{children:e(j,{name:"nombre",control:m,render:({field:{value:o,onChange:t,...r}})=>i(x,{children:[e(C,{children:"Nombre"}),e(y,{placeholder:"Ingrese el nombre de la categoria",type:"text",...r,defaultValue:n==null?void 0:n.nombre,onChange:d=>{t(d.target.value),p(d)}})]})})}),e(v,{children:e(j,{name:"descripcion",control:m,render:({field:{value:o,onChange:t,...r}})=>i(x,{children:[e(C,{children:"Descripcion"}),e(y,{placeholder:"Ingrese el nombre de la categoria",type:"textarea",...r,defaultValue:n==null?void 0:n.descripcion,onChange:d=>{t(d.target.value),p(d)}})]})})}),e(u,{color:"success",type:"submit",children:"Ok"}),e(u,{color:"secondary",children:"Cancel"})]})})]})})}function B(){const[l,h]=c.exports.useState(!0),n=()=>f(!a),[a,f]=c.exports.useState(!1),[m,s]=c.exports.useState(null),[g,p]=c.exports.useState([]);c.exports.useEffect(()=>{b.get("https://dietservice.bitjoins.pe/api/patologias").then(r=>{p(r.data),h(!1)})},[]);function o(r){n(),s(r)}return i("div",{children:[e(u,{onClick:n,color:"success",children:"Nuevo"}),e(I,{columns:[{name:"Id",selector:r=>r.id,width:"12rem",center:!0},{name:"Descripcion",selector:r=>r.nombre,width:"60rem",sortable:!0},{name:"Acciones",cell:r=>i("div",{style:{display:"flex",gap:"1rem"},children:[e(u,{onClick:()=>o(r),color:"warning",children:"Editar"}),e(u,{color:"danger",children:"Eliminar"})]}),center:!0,width:"20rem"},{}],data:g,pagination:!0,noDataComponent:"No hay data",progressPending:l,progressComponent:e(E,{children:"Loading..."})}),e($,{patologiaSelec:m,toggle:n,modal:a,setPatologiaSelec:s})]})}export{B as default};
