import{p as e,o as C,au as f,k as a,j as s,bb as u,av as w}from"./index.38f8a247.js";import{P as y,X as S}from"./App.20b3a878.js";const q=c=>{const{open:g,size:o,title:x,width:l,children:N,closeBtn:t,className:i,toggleSidebar:r,bodyClassName:n,contentClassName:d,wrapperClassName:p,headerClassName:m,...h}=c,b=t||s(S,{className:"cursor-pointer",size:15,onClick:r});return C(f,{isOpen:g,toggle:r,contentClassName:a("overflow-hidden",{[d]:d}),modalClassName:a("modal-slide-in",{[p]:p}),className:a({[i]:i,"sidebar-lg":o==="lg","sidebar-sm":o==="sm"}),...l!==void 0?{style:{width:String(l)+"px"}}:{},...h,children:[s(u,{className:a({[m]:m}),toggle:r,close:b,tag:"div",children:s("h5",{className:"modal-title",children:s("span",{className:"align-middle",children:x})})}),s(y,{options:{wheelPropagation:!1},children:s(w,{className:a("flex-grow-1",{[n]:n}),children:N})})]})};q.propTypes={className:e.exports.string,bodyClassName:e.exports.string,open:e.exports.bool.isRequired,title:e.exports.string.isRequired,contentClassName:e.exports.string,wrapperClassName:e.exports.string,children:e.exports.any.isRequired,size:e.exports.oneOf(["sm","lg"]),toggleSidebar:e.exports.func.isRequired,width:e.exports.oneOfType([e.exports.number,e.exports.string])};export{q as S};