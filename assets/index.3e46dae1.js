import{r as a,o as t,aO as o,j as r,aQ as i,ac as s,aP as d,aa as p,ab as e}from"./index.30301496.js";import{D as E}from"./Draft.82a73708.js";import{r as n}from"./editor.272d8638.js";import{E as m}from"./index.df713f82.js";const u=()=>{const[l,c]=a.exports.useState(E.EditorState.createEmpty());return t(o,{children:[r(i,{children:r(s,{tag:"h4",children:"Controlled Editor"})}),r(d,{children:r(n.exports.Editor,{editorState:l,onEditorStateChange:h=>c(h)})})]})},f=()=>t(o,{children:[r(i,{children:r(s,{tag:"h4",children:"Uncontrolled Editor"})}),r(d,{children:r(n.exports.Editor,{})})]}),w=()=>t(a.exports.Fragment,{children:[r(m,{title:"React Draft Wysiwyg",subTitle:"A Wysiwyg Built on ReactJS and DraftJS",link:"https://jpuri.github.io/react-draft-wysiwyg/#/docs"}),t(p,{children:[r(e,{sm:12,children:r(f,{})}),r(e,{sm:12,children:r(u,{})})]})]});export{w as default};