import{o as t,j as e,aa as m,ab as h,bY as f,bZ as y,b_ as N,b$ as b,$ as x,ag as v,r as n,aj as A}from"./index.8ea34c3d.js";import{P as w}from"./page-pricing.df82d2c8.js";import{i as q}from"./pricing-Illustration.cc247962.js";const P=({data:r})=>t("div",{className:"pricing-faq",children:[e("h3",{className:"text-center",children:"FAQ's"}),e("p",{className:"text-center mb-0",children:"Let us help answer the most common questions."}),e(m,{className:"mt-75 mb-2",children:e(h,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:e(f,{className:"accordion-margin mt-2",defaultOpen:"0",children:r.map((a,s)=>t(y,{children:[e(N,{tag:"h2",targetId:String(s+1),children:a.question}),e(b,{accordionId:String(s+1),children:a.ans})]},s+1))})})})]}),S=()=>e("div",{className:"pricing-free-trial",children:e(m,{children:e(h,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:t("div",{className:"pricing-trial-content d-flex justify-content-between",children:[t("div",{className:"text-center text-md-start mt-3",children:[e("h3",{className:"text-primary",children:"Still not convinced? Start with a 14-day FREE trial!"}),e("h5",{children:"You will get full access to with all the features for 14 days."}),e("div",{className:"mt-2 mt-lg-3",children:e(x,{color:"primary",children:"Start 14-day FREE trial"})})]}),e("img",{className:"pricing-trial-img img-fluid",src:q,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})}),j=({duration:r,setDuration:a})=>t("div",{className:"text-center",children:[e("h1",{className:"mt-5",children:"Pricing Plans"}),e("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),t("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[e("h6",{className:"me-50 mb-0",children:"Monthly"}),e("div",{className:"form-switch",children:e(v,{id:"plan-switch",type:"switch",checked:r==="yearly",onChange:i=>{i.target.checked?a("yearly"):a("monthly")}})}),e("h6",{className:"ms-50 mb-0",children:"Annually"})]})]}),I=()=>{const[r,a]=n.exports.useState(null),[s,i]=n.exports.useState(null),[c,u]=n.exports.useState("monthly");return n.exports.useEffect(()=>{A.get("/pricing/data").then(g=>{const l=[],o=[];Object.entries(g.data).forEach(([p,d])=>{p!=="qandA"?(l.push(d),a([...l])):(o.push(d),i(o[0]))})})},[]),t("div",{id:"pricing-table",children:[e(j,{duration:c,setDuration:u}),r!==null&&s!==null?t(n.exports.Fragment,{children:[e(w,{data:r,duration:c}),e(S,{}),e(P,{data:s})]}):null]})};export{I as default};