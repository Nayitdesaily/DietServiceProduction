import{p as e,j as s,aS as c,aT as d,o as i,k as p}from"./index.dfabc371.js";const b=({icon:n,color:r,stats:l,renderStats:t,statTitle:m,className:o,statsMargin:a})=>s(c,{children:s(d,{className:o,children:i("div",{className:"d-flex justify-content-between align-items-center",children:[i("div",{children:[t||s("h2",{className:p("fw-bolder",{"mb-0":!a,[a]:a}),children:l}),s("p",{className:"card-text",children:m})]}),s("div",{className:`avatar avatar-stats p-50 m-0 ${r?`bg-light-${r}`:"bg-light-primary"}`,children:s("div",{className:"avatar-content",children:n})})]})})});b.propTypes={stats:e.exports.string,renderStats:e.exports.any,className:e.exports.string,icon:e.exports.element.isRequired,color:e.exports.string.isRequired,statTitle:e.exports.string.isRequired,statsMargin:e.exports.oneOf(["mb-0","mb-25","mb-50","mb-75","mb-1","mb-2","mb-3","mb-4","mb-5"])};export{b as S};
