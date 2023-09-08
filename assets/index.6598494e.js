import{r as u,j as e,o as l,ae as re,af as p,ag as N,b4 as ie,k as ce,$ as z,bD as oe,L as O,bj as j,bE as B,B as me,U as M,D as V,x as W,y,bF as de,h as ue,bG as he,bH as C,aO as L,aQ as pe,ac as be,aP as ve,aa as R,ab as f}from"./index.365e3ad1.js";import{S as ge}from"./index.e850958f.js";import{a as G,t as E,f as Ne,ap as J,aq as fe,O as xe,A as $,G as q,U as K,ar as Ce,as as ye,at as Se,a7 as Pe,au as we,av as Ue,ab as ke,aw as Te,a2 as De,ax as Fe,ay as Ee,az as Ae}from"./App.cc007f5c.js";import{S as A}from"./react-select.esm.b5de0b87.js";import{u as je,C as k}from"./index.esm.b088bfd3.js";import{R as ze}from"./react-paginate.1094b6d4.js";import{Q as Re}from"./index.es.72966381.js";/* empty css                                  */import{S as F}from"./StatsHorizontal.52b99b2d.js";/* empty css                  */import"./emotion-react.browser.esm.1eaededd.js";import"./emotion-memoize.esm.06f0e458.js";import"./emotion-is-prop-valid.esm.22611268.js";const H={email:"",contact:"",company:"",fullName:"",username:"",country:null},Ie=[{label:"Australia",value:"Australia"},{label:"Bangladesh",value:"Bangladesh"},{label:"Belarus",value:"Belarus"},{label:"Brazil",value:"Brazil"},{label:"Canada",value:"Canada"},{label:"China",value:"China"},{label:"France",value:"France"},{label:"Germany",value:"Germany"},{label:"India",value:"India"},{label:"Indonesia",value:"Indonesia"},{label:"Israel",value:"Israel"},{label:"Italy",value:"Italy"},{label:"Japan",value:"Japan"},{label:"Korea",value:"Korea"},{label:"Mexico",value:"Mexico"},{label:"Philippines",value:"Philippines"},{label:"Russia",value:"Russia"},{label:"South",value:"South"},{label:"Thailand",value:"Thailand"},{label:"Turkey",value:"Turkey"},{label:"Ukraine",value:"Ukraine"},{label:"United Arab Emirates",value:"United Arab Emirates"},{label:"United Kingdom",value:"United Kingdom"},{label:"United States",value:"United States"}],Oe=a=>Object.values(a).every(t=>typeof t=="object"?t!==null:t.length>0),Be=({open:a,toggleSidebar:t})=>{const[o,T]=u.exports.useState(null),[d,P]=u.exports.useState("basic"),[m,w]=u.exports.useState("subscriber"),c=G(),{control:i,setValue:r,setError:b,handleSubmit:S,formState:{errors:v}}=je({defaultValues:H});return e(ge,{size:"lg",open:a,title:"New User",headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:t,onClosed:()=>{for(const s in H)r(s,"");w("subscriber"),P("basic")},children:l(re,{onSubmit:S(s=>{if(T(s),Oe(s))t(),c(oe({role:m,avatar:"",status:"active",email:s.email,currentPlan:d,billing:"auto debit",company:s.company,contact:s.contact,fullName:s.fullName,username:s.username,country:s.country.value}));else for(const U in s)s[U]===null&&b("country",{type:"manual"}),s[U]!==null&&s[U].length===0&&b(U,{type:"manual"})}),children:[l("div",{className:"mb-1",children:[l(p,{className:"form-label",for:"fullName",children:["Full Name ",e("span",{className:"text-danger",children:"*"})]}),e(k,{name:"fullName",control:i,render:({field:s})=>e(N,{id:"fullName",placeholder:"John Doe",invalid:v.fullName&&!0,...s})})]}),l("div",{className:"mb-1",children:[l(p,{className:"form-label",for:"username",children:["Username ",e("span",{className:"text-danger",children:"*"})]}),e(k,{name:"username",control:i,render:({field:s})=>e(N,{id:"username",placeholder:"johnDoe99",invalid:v.username&&!0,...s})})]}),l("div",{className:"mb-1",children:[l(p,{className:"form-label",for:"userEmail",children:["Email ",e("span",{className:"text-danger",children:"*"})]}),e(k,{name:"email",control:i,render:({field:s})=>e(N,{type:"email",id:"userEmail",placeholder:"john.doe@example.com",invalid:v.email&&!0,...s})}),e(ie,{color:"muted",children:"You can use letters, numbers & periods"})]}),l("div",{className:"mb-1",children:[l(p,{className:"form-label",for:"contact",children:["Contact ",e("span",{className:"text-danger",children:"*"})]}),e(k,{name:"contact",control:i,render:({field:s})=>e(N,{id:"contact",placeholder:"(397) 294-5153",invalid:v.contact&&!0,...s})})]}),l("div",{className:"mb-1",children:[l(p,{className:"form-label",for:"company",children:["Company ",e("span",{className:"text-danger",children:"*"})]}),e(k,{name:"company",control:i,render:({field:s})=>e(N,{id:"company",placeholder:"Company Pvt Ltd",invalid:v.company&&!0,...s})})]}),l("div",{className:"mb-1",children:[l(p,{className:"form-label",for:"country",children:["Country ",e("span",{className:"text-danger",children:"*"})]}),e(k,{name:"country",control:i,render:({field:s})=>e(A,{isClearable:!1,classNamePrefix:"select",options:Ie,theme:E,className:ce("react-select",{"is-invalid":o!==null&&o.country===null}),...s})})]}),l("div",{className:"mb-1",children:[e(p,{className:"form-label",for:"user-role",children:"User Role"}),l(N,{type:"select",id:"user-role",name:"user-role",value:m,onChange:s=>w(s.target.value),children:[e("option",{value:"subscriber",children:"Subscriber"}),e("option",{value:"editor",children:"Editor"}),e("option",{value:"maintainer",children:"Maintainer"}),e("option",{value:"author",children:"Author"}),e("option",{value:"admin",children:"Admin"})]})]}),l("div",{className:"mb-1",value:d,onChange:s=>P(s.target.value),children:[e(p,{className:"form-label",for:"select-plan",children:"Select Plan"}),l(N,{type:"select",id:"select-plan",name:"select-plan",children:[e("option",{value:"basic",children:"Basic"}),e("option",{value:"enterprise",children:"Enterprise"}),e("option",{value:"company",children:"Company"}),e("option",{value:"team",children:"Team"})]})]}),e(z,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),e(z,{type:"reset",color:"secondary",outline:!0,onClick:t,children:"Cancel"})]})})},Le=a=>a.avatar.length?e($,{className:"me-1",img:a.avatar,width:"32",height:"32"}):e($,{initials:!0,className:"me-1",color:a.avatarColor||"light-primary",content:a.fullName||"John Doe"}),$e=a=>{const t={subscriber:{class:"text-primary",icon:K},maintainer:{class:"text-success",icon:Ce},editor:{class:"text-info",icon:q},author:{class:"text-warning",icon:ye},admin:{class:"text-danger",icon:Se}},o=t[a.role]?t[a.role].icon:q;return l("span",{className:"text-truncate text-capitalize align-middle",children:[e(o,{size:18,className:`${t[a.role]?t[a.role].class:""} me-50`}),a.role]})},qe={pending:"light-warning",active:"light-success",inactive:"light-secondary"},He=[{name:"User",sortable:!0,minWidth:"300px",sortField:"fullName",selector:a=>a.fullName,cell:a=>l("div",{className:"d-flex justify-content-left align-items-center",children:[Le(a),l("div",{className:"d-flex flex-column",children:[e(O,{to:`/apps/user/view/${a.id}`,className:"user_name text-truncate text-body",onClick:()=>j.dispatch(B(a.id)),children:e("span",{className:"fw-bolder",children:a.fullName})}),e("small",{className:"text-truncate text-muted mb-0",children:a.email})]})]})},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:a=>a.role,cell:a=>$e(a)},{name:"Plan",minWidth:"138px",sortable:!0,sortField:"currentPlan",selector:a=>a.currentPlan,cell:a=>e("span",{className:"text-capitalize",children:a.currentPlan})},{name:"Billing",minWidth:"230px",sortable:!0,sortField:"billing",selector:a=>a.billing,cell:a=>e("span",{className:"text-capitalize",children:a.billing})},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:a=>a.status,cell:a=>e(me,{className:"text-capitalize",color:qe[a.status],pill:!0,children:a.status})},{name:"Actions",minWidth:"100px",cell:a=>e("div",{className:"column-action",children:l(M,{children:[e(V,{tag:"div",className:"btn btn-sm",children:e(Ne,{size:14,className:"cursor-pointer"})}),l(W,{children:[l(y,{tag:O,className:"w-100",to:`/apps/user/view/${a.id}`,onClick:()=>j.dispatch(B(a.id)),children:[e(J,{size:14,className:"me-50"}),e("span",{className:"align-middle",children:"Details"})]}),l(y,{tag:"a",href:"/",className:"w-100",onClick:t=>t.preventDefault(),children:[e(fe,{size:14,className:"me-50"}),e("span",{className:"align-middle",children:"Edit"})]}),l(y,{tag:"a",href:"/",className:"w-100",onClick:t=>{t.preventDefault(),j.dispatch(de(a.id))},children:[e(xe,{size:14,className:"me-50"}),e("span",{className:"align-middle",children:"Delete"})]})]})]})})}],Me=({store:a,toggleSidebar:t,handlePerPage:o,rowsPerPage:T,handleFilter:d,searchTerm:P})=>{function m(c){let i;const r=",",b=`
`,S=Object.keys(a.data[0]);return i="",i+=S.join(r),i+=b,c.forEach(v=>{let h=0;S.forEach(D=>{h>0&&(i+=r),i+=v[D],h++}),i+=b}),i}function w(c){const i=document.createElement("a");let r=m(c);if(r===null)return;const b="export.csv";r.match(/^data:text\/csv/i)||(r=`data:text/csv;charset=utf-8,${r}`),i.setAttribute("href",encodeURI(r)),i.setAttribute("download",b),i.click()}return e("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:l(R,{children:[e(f,{xl:"6",className:"d-flex align-items-center p-0",children:l("div",{className:"d-flex align-items-center w-100",children:[e("label",{htmlFor:"rows-per-page",children:"Show"}),l(N,{className:"mx-50",type:"select",id:"rows-per-page",value:T,onChange:o,style:{width:"5rem"},children:[e("option",{value:"10",children:"10"}),e("option",{value:"25",children:"25"}),e("option",{value:"50",children:"50"})]}),e("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),l(f,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[l("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[e("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),e(N,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:P,onChange:c=>d(c.target.value)})]}),l("div",{className:"d-flex align-items-center table-header-actions",children:[l(M,{className:"me-1",children:[l(V,{color:"secondary",caret:!0,outline:!0,children:[e(we,{className:"font-small-4 me-50"}),e("span",{className:"align-middle",children:"Export"})]}),l(W,{children:[l(y,{className:"w-100",children:[e(Ue,{className:"font-small-4 me-50"}),e("span",{className:"align-middle",children:"Print"})]}),l(y,{className:"w-100",onClick:()=>w(a.data),children:[e(J,{className:"font-small-4 me-50"}),e("span",{className:"align-middle",children:"CSV"})]}),l(y,{className:"w-100",children:[e(ke,{className:"font-small-4 me-50"}),e("span",{className:"align-middle",children:"Excel"})]}),l(y,{className:"w-100",children:[e(Te,{className:"font-small-4 me-50"}),e("span",{className:"align-middle",children:"PDF"})]}),l(y,{className:"w-100",children:[e(De,{className:"font-small-4 me-50"}),e("span",{className:"align-middle",children:"Copy"})]})]})]}),e(z,{className:"add-new-user",color:"primary",onClick:t,children:"Add New User"})]})]})]})})},Ve=()=>{const a=G(),t=ue(n=>n.users),[o,T]=u.exports.useState("desc"),[d,P]=u.exports.useState(""),[m,w]=u.exports.useState(1),[c,i]=u.exports.useState("id"),[r,b]=u.exports.useState(10),[S,v]=u.exports.useState(!1),[h,D]=u.exports.useState({value:"",label:"Select Role"}),[s,U]=u.exports.useState({value:"",label:"Select Plan"}),[g,Q]=u.exports.useState({value:"",label:"Select Status",number:0}),I=()=>v(!S);u.exports.useEffect(()=>{a(he()),a(C({sort:o,sortColumn:c,q:d,page:m,perPage:r,role:h.value,status:g.value,currentPlan:s.value}))},[a,t.data.length,o,c,m]);const X=[{value:"",label:"Select Role"},{value:"admin",label:"Admin"},{value:"author",label:"Author"},{value:"editor",label:"Editor"},{value:"maintainer",label:"Maintainer"},{value:"subscriber",label:"Subscriber"}],Y=[{value:"",label:"Select Plan"},{value:"basic",label:"Basic"},{value:"company",label:"Company"},{value:"enterprise",label:"Enterprise"},{value:"team",label:"Team"}],_=[{value:"",label:"Select Status",number:0},{value:"pending",label:"Pending",number:1},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],Z=n=>{a(C({sort:o,sortColumn:c,q:d,perPage:r,page:n.selected+1,role:h.value,status:g.value,currentPlan:s.value})),w(n.selected+1)},ee=n=>{const x=parseInt(n.currentTarget.value);a(C({sort:o,sortColumn:c,q:d,perPage:x,page:m,role:h.value,currentPlan:s.value,status:g.value})),b(x)},ae=n=>{P(n),a(C({sort:o,q:n,sortColumn:c,page:m,perPage:r,role:h.value,status:g.value,currentPlan:s.value}))},le=()=>{const n=Number(Math.ceil(t.total/r));return e(ze,{previousLabel:"",nextLabel:"",pageCount:n||1,activeClassName:"active",forcePage:m!==0?m-1:0,onPageChange:x=>Z(x),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},se=()=>{const n={role:h.value,currentPlan:s.value,status:g.value,q:d},x=Object.keys(n).some(function(ne){return n[ne].length>0});return t.data.length>0?t.data:t.data.length===0&&x?[]:t.allData.slice(0,r)},te=(n,x)=>{T(x),i(n.sortField),a(C({sort:o,sortColumn:c,q:d,page:m,perPage:r,role:h.value,status:g.value,currentPlan:s.value}))};return l(u.exports.Fragment,{children:[l(L,{children:[e(pe,{children:e(be,{tag:"h4",children:"Filters"})}),e(ve,{children:l(R,{children:[l(f,{md:"4",children:[e(p,{for:"role-select",children:"Role"}),e(A,{isClearable:!1,value:h,options:X,className:"react-select",classNamePrefix:"select",theme:E,onChange:n=>{D(n),a(C({sort:o,sortColumn:c,q:d,role:n.value,page:m,perPage:r,status:g.value,currentPlan:s.value}))}})]}),l(f,{className:"my-md-0 my-1",md:"4",children:[e(p,{for:"plan-select",children:"Plan"}),e(A,{theme:E,isClearable:!1,className:"react-select",classNamePrefix:"select",options:Y,value:s,onChange:n=>{U(n),a(C({sort:o,sortColumn:c,q:d,page:m,perPage:r,role:h.value,currentPlan:n.value,status:g.value}))}})]}),l(f,{md:"4",children:[e(p,{for:"status-select",children:"Status"}),e(A,{theme:E,isClearable:!1,className:"react-select",classNamePrefix:"select",options:_,value:g,onChange:n=>{Q(n),a(C({sort:o,sortColumn:c,q:d,page:m,status:n.value,perPage:r,role:h.value,currentPlan:s.value}))}})]})]})})]}),e(L,{className:"overflow-hidden",children:e("div",{className:"react-dataTable",children:e(Re,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:He,onSort:te,sortIcon:e(Pe,{}),className:"react-dataTable",paginationComponent:le,data:se(),subHeaderComponent:e(Me,{store:t,searchTerm:d,rowsPerPage:r,handleFilter:ae,handlePerPage:ee,toggleSidebar:I})})})}),e(Be,{open:S,toggleSidebar:I})]})},ta=()=>l("div",{className:"app-user-list",children:[l(R,{children:[e(f,{lg:"3",sm:"6",children:e(F,{color:"primary",statTitle:"Total Users",icon:e(K,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:"21,459"})})}),e(f,{lg:"3",sm:"6",children:e(F,{color:"danger",statTitle:"Paid Users",icon:e(Fe,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:"4,567"})})}),e(f,{lg:"3",sm:"6",children:e(F,{color:"success",statTitle:"Active Users",icon:e(Ee,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:"19,860"})})}),e(f,{lg:"3",sm:"6",children:e(F,{color:"warning",statTitle:"Pending Users",icon:e(Ae,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:"237"})})})]}),e(Ve,{})]});export{ta as default};