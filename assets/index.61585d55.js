import{o as a,aO as v,j as e,aQ as g,ac as S,aP as w,ae as F,af as i,ag as m,$ as o,al as B,ah as p,r as R,k as f,am as O,an as P,aa as z,ab as b}from"./index.30301496.js";import{B as j}from"./index.26a93516.js";import{u as k,C as c}from"./index.esm.c2f7552f.js";import{A,r as x,t as I}from"./App.58188f50.js";import{c as T,a as y,o as E}from"./yup.module.b4e322e2.js";import{S as H}from"./react-select.esm.1e09b9ff.js";import{C as q}from"./react.c9f00f4c.js";import{F as L}from"./index.f5774aaa.js";import"./cleave-phone.us.f7d0c7c3.js";/* empty css                  */import"./upperFirst.9d61b781.js";import"./emotion-react.browser.esm.81023f96.js";import"./emotion-memoize.esm.06f0e458.js";const W=()=>{const{reset:s,control:n,setError:d,handleSubmit:h,formState:{errors:r}}=k(),u=l=>{if(Object.values(l).every(t=>t.length>0))B(a("div",{className:"d-flex",children:[e("div",{className:"me-1",children:e(A,{size:"sm",color:"success",icon:e(x,{size:12})})}),a("div",{className:"d-flex flex-column",children:[e("h6",{children:"Form Submitted!"}),a("ul",{className:"list-unstyled mb-0",children:[a("li",{children:[e("strong",{children:"firstName"}),": ",l.firstNameBasic]}),a("li",{children:[e("strong",{children:"lastName"}),": ",l.lastNameBasic]}),a("li",{children:[e("strong",{children:"email"}),": ",l.emailBasic]})]})]})]}));else for(const t in l)l[t].length===0&&d(t,{type:"manual"})},N=()=>{s({emailBasic:"",firstNameBasic:"",lastNameBasic:""})};return a(v,{children:[e(g,{children:e(S,{tag:"h4",children:"Basic"})}),e(w,{children:a(F,{onSubmit:h(u),children:[a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"firstNameBasic",children:"First Name"}),e(c,{defaultValue:"",control:n,id:"firstNameBasic",name:"firstNameBasic",render:({field:l})=>e(m,{placeholder:"Bruce",invalid:r.firstNameBasic&&!0,...l})})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"lastNameBasic",children:"Last Name"}),e(c,{defaultValue:"",control:n,id:"lastNameBasic",name:"lastNameBasic",render:({field:l})=>e(m,{placeholder:"Wayne",invalid:r.lastNameBasic&&!0,...l})})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"emailBasic",children:"Email"}),e(c,{defaultValue:"",control:n,id:"emailBasic",name:"emailBasic",render:({field:l})=>e(m,{type:"email",placeholder:"bruce.wayne@email.com",invalid:r.emailBasic&&!0,...l})})]}),a("div",{className:"d-flex",children:[e(o,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(o,{outline:!0,color:"secondary",type:"reset",onClick:N,children:"Reset"})]})]})})]})},$=()=>{const s=T().shape({email:y().email().required(),lastName:y().min(3).required(),firstName:y().min(3).required(),password:y().min(6).required()}),{reset:n,control:d,handleSubmit:h,formState:{errors:r}}=k({mode:"onChange",resolver:E(s)}),u=l=>{Object.values(l).every(t=>t.length>0)&&B(a("div",{className:"d-flex",children:[e("div",{className:"me-1",children:e(A,{size:"sm",color:"success",icon:e(x,{size:12})})}),a("div",{className:"d-flex flex-column",children:[e("h6",{children:"Form Submitted!"}),a("ul",{className:"list-unstyled mb-0",children:[a("li",{children:[e("strong",{children:"firstName"}),": ",l.firstName]}),a("li",{children:[e("strong",{children:"lastName"}),": ",l.lastName]}),a("li",{children:[e("strong",{children:"email"}),": ",l.email]}),a("li",{children:[e("strong",{children:"password"}),": ",l.password]})]})]})]}))},N=()=>{n({email:"",password:"",firstName:"",lastName:""})};return a(v,{children:[e(g,{children:e(S,{tag:"h4",children:"Validation Schema With OnChange"})}),e(w,{children:a(F,{onSubmit:h(u),children:[a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"firstName",children:"First Name"}),e(c,{id:"firstName",name:"firstName",defaultValue:"",control:d,render:({field:l})=>e(m,{...l,placeholder:"Bruce",invalid:r.firstName&&!0})}),r.firstName&&e(p,{children:r.firstName.message})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"lastName",children:"Last Name"}),e(c,{id:"lastName",name:"lastName",defaultValue:"",control:d,render:({field:l})=>e(m,{...l,placeholder:"Wayne",invalid:r.lastName&&!0})}),r.lastName&&e(p,{children:r.lastName.message})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"email",children:"Email"}),e(c,{id:"email",name:"email",defaultValue:"",control:d,render:({field:l})=>e(m,{...l,type:"email",placeholder:"bruce.wayne@email.com",invalid:r.email&&!0})}),r.email&&e(p,{children:r.email.message})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"password",children:"Password"}),e(c,{id:"password",name:"password",defaultValue:"",control:d,render:({field:l})=>e(m,{...l,type:"password",placeholder:"Password",invalid:r.password&&!0})}),r.password&&e(p,{children:r.password.message})]}),a("div",{className:"d-flex",children:[e(o,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(o,{outline:!0,color:"secondary",type:"reset",onClick:N,children:"Reset"})]})]})})]})},D=()=>{const{reset:s,control:n,setError:d,handleSubmit:h,formState:{errors:r}}=k(),u=async l=>{if(Object.values(l).every(t=>t.length>0))await(C=>new Promise(V=>setTimeout(V,C)))(1e3),Object.values(l).every(C=>C.length>0)&&B(a("div",{className:"d-flex",children:[e("div",{className:"me-1",children:e(A,{size:"sm",color:"success",icon:e(x,{size:12})})}),a("div",{className:"d-flex flex-column",children:[e("h6",{children:"Form Submitted!"}),e("div",{children:a("ul",{className:"list-unstyled mb-0",children:[a("li",{children:[e("strong",{children:"firstName"}),": ",l.firstNameAsync]}),a("li",{children:[e("strong",{children:"lastName"}),": ",l.lastNameAsync]}),a("li",{children:[e("strong",{children:"email"}),": ",l.email]}),a("li",{children:[e("strong",{children:"password"}),": ",l.passwordAsync]})]})})]})]}));else for(const t in l)l[t].length===0&&d(t,{type:"manual"})},N=()=>{s({email:"",lastNameAsync:"",passwordAsync:"",firstNameAsync:""})};return a(v,{children:[e(g,{children:e(S,{tag:"h4",children:"Async Submit"})}),e(w,{children:a(F,{onSubmit:h(u),children:[a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"firstNameAsync",children:"First Name"}),e(c,{defaultValue:"",control:n,id:"firstNameAsync",name:"firstNameAsync",render:({field:l})=>e(m,{...l,placeholder:"Bruce",invalid:r.firstNameAsync&&!0})})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"lastNameAsync",children:"Last Name"}),e(c,{defaultValue:"",control:n,id:"lastNameAsync",name:"lastNameAsync",render:({field:l})=>e(m,{...l,placeholder:"Wayne",invalid:r.lastNameAsync&&!0})})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"emailAsync",children:"Email"}),e(c,{name:"email",id:"emailAsync",defaultValue:"",control:n,render:({field:l})=>e(m,{...l,type:"email",placeholder:"bruce.wayne@email.com",invalid:r.email&&!0})})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"passwordAsync",children:"Password"}),e(c,{defaultValue:"",control:n,id:"passwordAsync",name:"passwordAsync",render:({field:l})=>e(m,{...l,type:"password",placeholder:"Password",invalid:r.passwordAsync&&!0})})]}),a("div",{className:"d-flex",children:[e(o,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(o,{outline:!0,color:"secondary",type:"reset",onClick:N,children:"Reset"})]})]})})]})};const G=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"}],M={phoneNumber:"",ReactSelect:null,reactFlatpickr:null},U=()=>{const[s,n]=R.exports.useState(null),{reset:d,handleSubmit:h,control:r}=k({defaultValues:M}),u=l=>{n(l),l.ReactSelect!==null&&l.reactFlatpickr!==null&&l.phoneNumber.length&&B(a("div",{className:"d-flex",children:[e("div",{className:"me-1",children:e(A,{size:"sm",color:"success",icon:e(x,{size:12})})}),a("div",{className:"d-flex flex-column",children:[e("h6",{children:"Form Submitted!"}),a("ul",{className:"list-unstyled mb-0",children:[a("li",{children:[e("strong",{children:"React Select"}),": ",l.ReactSelect.value]}),a("li",{children:[e("strong",{children:"Flatpickr"}),": ",String(new Date(l.reactFlatpickr[0]))]}),a("li",{children:[e("strong",{children:"Input Mask"}),": ",l.phoneNumber]})]})]})]}))},N=()=>{d({phoneNumber:"",ReactSelect:"",reactFlatpickr:""})};return a(v,{children:[e(g,{children:e(S,{tag:"h4",children:"Third Party Components"})}),e(w,{children:a(F,{onSubmit:h(u),children:[a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"react-select",children:"React Select"}),e(c,{id:"react-select",control:r,name:"ReactSelect",render:({field:l})=>e(H,{isClearable:!0,options:G,classNamePrefix:"select",theme:I,className:f("react-select",{"is-invalid":s!==null&&s.ReactSelect===null}),...l})})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"react-flatpickr",children:"React Flatpickr"}),e(c,{control:r,id:"react-flatpickr",name:"reactFlatpickr",render:({field:l})=>e(L,{...l,options:{allowInput:!0},className:f("form-control",{"is-invalid":s!==null&&s.reactFlatpickr===null})})})]}),a("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"phone-number",children:"Input Mask"}),a(O,{className:"input-group-merge",children:[e(P,{className:f({"is-invalid":s!==null&&(s.phoneNumber===null||!s.phoneNumber.length)}),children:"US (+1)"}),e(c,{id:"phone-number",name:"phoneNumber",control:r,placeholder:"1 234 567 8900",render:({field:l})=>e(q,{...l,className:f("form-control",{"is-invalid":s!==null&&(s.phoneNumber===null||!s.phoneNumber.length)}),options:{phone:!0,phoneRegionCode:"US"}})})]})]}),a("div",{className:"d-flex",children:[e(o,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(o,{outline:!0,color:"secondary",type:"reset",onClick:N,children:"Reset"})]})]})})]})},ce=()=>a(R.exports.Fragment,{children:[e(j,{title:"React Hook Form",data:[{title:"Form"},{title:"React Hook Form"}]}),a(z,{className:"match-height",children:[e(b,{lg:"6",md:"12",children:e(W,{})}),e(b,{lg:"6",md:"12",children:e(U,{})}),e(b,{lg:"6",md:"12",children:e($,{})}),e(b,{lg:"6",md:"12",children:e(D,{})})]})]});export{ce as default};