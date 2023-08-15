import{o as n,aS as u,j as e,aU as c,ai as m,aT as o,am as r,r as h,E as g,ag as H,ah as s}from"./index.dfabc371.js";import{B as x}from"./index.b5cfd387.js";import{ao as l,t as a,Z as d}from"./App.bcc3a833.js";const C=()=>n(u,{children:[e(c,{children:e(m,{tag:"h4",children:"Sizes"})}),e(o,{children:n("div",{className:"d-flex flex-wrap",children:[n("div",{className:"me-2",children:[e(r,{className:"form-label",for:"lg-number-input",children:"Large Input"}),e(l,{defaultValue:10,className:"input-lg",upHandler:e(a,{}),id:"lg-number-input",downHandler:e(d,{})})]}),n("div",{children:[e(r,{className:"form-label",for:"default-number-input",children:"Default Input"}),e(l,{defaultValue:10,upHandler:e(a,{}),id:"default-number-input",downHandler:e(d,{})})]})]})})]}),v=()=>n(u,{children:[e(c,{children:e(m,{tag:"h4",children:"Basic"})}),e(o,{children:n("div",{className:"demo-inline-spacing",children:[n("div",{children:[e(r,{className:"form-label",for:"basic-number-input",children:"Basic Input"}),e(l,{id:"basic-number-input",defaultValue:10,upHandler:e(a,{}),downHandler:e(d,{})})]}),n("div",{children:[e(r,{className:"form-label",for:"disabled-number-input",children:"Disabled Input"}),e(l,{disabled:!0,defaultValue:10,upHandler:e(a,{}),downHandler:e(d,{}),id:"disabled-number-input"})]}),n("div",{children:[e(r,{className:"form-label",for:"readOnly-number-input",children:"ReadOnly Input"}),e(l,{readOnly:!0,defaultValue:10,upHandler:e(a,{}),downHandler:e(d,{}),id:"readOnly-number-input"})]})]})})]}),y=()=>n(u,{children:[e(c,{children:e(m,{tag:"h4",children:"Min Max"})}),e(o,{children:n("div",{children:[e(r,{className:"form-label",for:"min-max-number-input",children:"Min Max Input"}),e(l,{min:0,max:10,defaultValue:5,upHandler:e(a,{}),downHandler:e(d,{}),id:"min-max-number-input"})]})})]}),w=()=>{const i=t=>t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return n(u,{children:[e(c,{children:e(m,{tag:"h4",children:"Formatting"})}),e(o,{children:n("div",{children:[e(r,{className:"form-label",for:"formatting-number-input",children:"Formatting Input"}),e(l,{parser:t=>{const p=t.toString().split(" ");return p[1]?p[1].replace(/,*/g,""):t},defaultValue:5,formatter:t=>`$ ${i(t)}`,upHandler:e(a,{}),downHandler:e(d,{}),id:"formatting-number-input"})]})})]})},V=["primary","secondary","success","danger","warning","info"],S=()=>n(u,{children:[e(c,{children:e(m,{tag:"h4",children:"Colors"})}),e(o,{children:e("div",{className:"demo-inline-spacing",children:V.map(i=>n("div",{children:[n(r,{className:"form-label text-capitalize",for:`${i}-number-input`,children:[i," Input"]}),e(l,{defaultValue:10,upHandler:e(a,{}),downHandler:e(d,{}),id:`${i}-number-input`,className:`input-${i}`})]},i))})})]}),B=()=>n(u,{children:[e(c,{children:e(m,{tag:"h4",children:"Decimal"})}),e(o,{children:n("div",{children:[e(r,{className:"form-label",for:"decimal-number-input",children:"Decimal Input"}),e(l,{step:.1,defaultValue:10,upHandler:e(a,{}),downHandler:e(d,{}),id:"decimal-number-input"})]})})]}),D=()=>{const[i,b]=h.exports.useState(1),[f,t]=h.exports.useState(!1),[p,N]=h.exports.useState(!1);return n(u,{children:[e(c,{children:e(m,{tag:"h4",children:"Controlled"})}),n(o,{children:[n("div",{children:[e(r,{className:"form-label",for:"controlled-number-input",children:"Controlled Input"}),e(l,{value:i,upHandler:e(a,{}),disabled:f,readOnly:p,downHandler:e(d,{}),id:"controlled-number-input",onChange:I=>b(I)})]}),n("div",{className:"demo-inline-spacing",children:[e(g,{size:"sm",color:"primary",onClick:()=>t(!f),children:"Toggle Disabled"}),e(g,{size:"sm",color:"primary",onClick:()=>N(!p),children:"Toggle ReadOnly"}),e(g,{size:"sm",color:"primary",onClick:()=>b(10),children:"Set Value to 10"})]})]})]})},F=()=>n(h.exports.Fragment,{children:[e(x,{title:"Number Input",data:[{title:"Form Elements"},{title:"Number Input"}]}),n(H,{className:"match-height",children:[e(s,{md:"6",sm:"12",children:e(v,{})}),e(s,{md:"6",sm:"12",children:e(D,{})}),e(s,{md:"6",sm:"12",children:e(B,{})}),e(s,{md:"6",sm:"12",children:e(y,{})}),e(s,{md:"6",sm:"12",children:e(C,{})}),e(s,{md:"6",sm:"12",children:e(w,{})}),e(s,{xs:"12",children:e(S,{})})]})]});export{F as default};
