import{r as i,o as f,j as o,af as y,am as v,k as b,ag as F,an as E,p as e}from"./index.4804ad6d.js";import{E as T,c as j}from"./App.03f23521.js";const B=i.exports.forwardRef((s,r)=>{const{label:a,hideIcon:n,showIcon:p,visible:w,className:c,htmlFor:l,placeholder:x,iconSize:d,inputClassName:m,invalid:u,...I}=s,[t,N]=i.exports.useState(w),g=()=>{const h=d||14;return t===!1?n||o(T,{size:h}):p||o(j,{size:h})};return f(i.exports.Fragment,{children:[a?o(y,{className:"form-label",for:l,children:a}):null,f(v,{className:b({[c]:c,"is-invalid":u}),children:[o(F,{ref:r,invalid:u,type:t===!1?"password":"text",placeholder:x||"\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",className:b({[m]:m}),...a&&l?{id:l}:{},...I}),o(E,{className:"cursor-pointer",onClick:()=>N(!t),children:g()})]})]})});B.propTypes={invalid:e.exports.bool,hideIcon:e.exports.node,showIcon:e.exports.node,visible:e.exports.bool,className:e.exports.string,placeholder:e.exports.string,iconSize:e.exports.number,inputClassName:e.exports.string,label(s,r){if(s[r]&&s.htmlFor==="undefined")throw new Error("htmlFor prop is required when label prop is present")},htmlFor(s,r){if(s[r]&&s.label==="undefined")throw new Error("label prop is required when htmlFor prop is present")}};B.defaultProps={visible:!1};export{B as I};
