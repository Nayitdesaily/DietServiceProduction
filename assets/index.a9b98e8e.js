import{p as e,r as a,o as t,aO as g,aQ as y,j as s,ad as u,W as f,aP as n}from"./index.c7086444.js";import{aR as j}from"./App.ac9516ab.js";const B=d=>{const{title:p,children:i,noBody:c,code:l,iconCode:o}=d,[r,C]=a.exports.useState(!1),x=o||s(j,{size:15}),h=()=>C(!r),m=c?a.exports.Fragment:n;return t(g,{className:"card-snippet",children:[t(y,{children:[s(u,{tag:"h4",children:p}),s("div",{className:"views cursor-pointer",onClick:h,children:x})]}),s(m,{children:i}),s(f,{isOpen:r,children:s(n,{children:l})})]})};B.propTypes={code:e.exports.node,noBody:e.exports.bool,children:e.exports.any,iconCode:e.exports.node,className:e.exports.string,title:e.exports.string.isRequired};export{B as C};
