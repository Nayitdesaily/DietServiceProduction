import{o as a,k,j as e,S as q,am as O,r as C,U as I,D as z,t as D,v as c,ag as A,ah as B,aS as se,aT as ie,B as E,aU as ue,aV as fe,aW as ge,ay as Ne,az as be,al as ve,aX as Ce,E as me,aq as xe,ar as ke,aA as de,aw as te,ax as y,L as S,h as Me,aY as Q,aZ as ne,a_ as ye,a$ as Se,b0 as we,b1 as ze,b2 as De,b3 as Pe}from"./index.dfabc371.js";import{A as X,q as Y,z as Z,D as Te,J as ce,K as oe,L as K,N as ee,m as F,p as he,M as ae,O as Oe,P as le,Q as Ie,h as pe,R as Re,W as Ue,Y as Le,Z as Fe,$ as $e,X as V,w as _,v as Ae,x as Be,e as Ge,S as Ee,n as re,j as qe,a as We}from"./App.bcc3a833.js";import{r as je}from"./editor.2e9e8ec9.js";import{S as J,c as He}from"./react-select.esm.3fd05d29.js";import{i as Qe}from"./avatar-s-1.e06db07a.js";import{i as Ve,a as _e}from"./avatar-s-2.a635d485.js";import{i as Je}from"./avatar-s-6.f63eadb1.js";import"./emotion-react.browser.esm.25185a13.js";import"./emotion-memoize.esm.06f0e458.js";const Xe=b=>{const{mail:l,dispatch:u,selectMail:f,labelColors:g,updateMails:n,selectedMails:v,handleMailClick:N,handleMailReadUpdate:o,formatDateToMonthShort:h}=b,r=i=>{if(i&&i.length)return i.map(d=>e("span",{className:`bullet bullet-${g[d]} bullet-sm mx-50`},d))},m=()=>{N(l.id),o([l.id],!0)};return a("li",{onClick:()=>m(l.id),className:k("d-flex user-mail",{"mail-read":l.isRead}),children:[a("div",{className:"mail-left pe-50",children:[e(X,{img:l.from.avatar}),a("div",{className:"user-action",children:[a("div",{className:"form-check",children:[e(q,{type:"checkbox",id:`${l.from.name}-${l.id}`,onChange:i=>i.stopPropagation(),checked:v.includes(l.id),onClick:i=>{u(f(l.id)),i.stopPropagation()}}),e(O,{onClick:i=>i.stopPropagation(),for:`${l.from.name}-${l.id}`})]}),e("div",{className:"email-favorite",onClick:i=>{i.stopPropagation(),u(n({emailIds:[l.id],dataToUpdate:{isStarred:!l.isStarred}}))},children:e(Y,{size:14,className:k({favorite:l.isStarred})})})]})]}),a("div",{className:"mail-body",children:[a("div",{className:"mail-details",children:[a("div",{className:"mail-items",children:[e("h5",{className:"mb-25",children:l.from.name}),e("span",{className:"text-truncate",children:l.subject})]}),a("div",{className:"mail-meta-item",children:[l.attachments&&l.attachments.length?e(Z,{size:14}):null,r(l.labels),e("span",{className:"mail-date",children:h(l.time)})]})]}),e("div",{className:"mail-message",children:e("p",{className:"text-truncate mb-0",children:Te(l.message)})})]})]})},Ye=b=>{const{mail:l,openMail:u,dispatch:f,labelColors:g,setOpenMail:n,updateMails:v,paginateMail:N,handleMailToTrash:o,handleFolderUpdate:h,handleLabelsUpdate:r,handleMailReadUpdate:m,formatDateToMonthShort:i}=b,[d,x]=C.exports.useState(!1),R=s=>{if(s&&s.length)return s.map(p=>e(E,{color:`light-${g[p]}`,className:"me-50 text-capitalize",pill:!0,children:p},p))},W=s=>s.map((p,w)=>a("a",{href:"/",onClick:j=>j.preventDefault(),className:k({"mb-50":w+1!==s.length}),children:[e("img",{src:p.thumbnail,alt:p.fileName,width:"16",className:"me-50"}),e("span",{className:"text-muted fw-bolder align-text-top",children:p.fileName}),e("span",{className:"text-muted font-small-2 ms-25",children:`(${p.size})`})]},p.fileName)),P=s=>a(se,{children:[a(ue,{className:"email-detail-head",children:[a("div",{className:"user-details d-flex justify-content-between align-items-center flex-wrap",children:[e(X,{img:s.from.avatar,className:"me-75",imgHeight:"48",imgWidth:"48"}),a("div",{className:"mail-items",children:[e("h5",{className:"mb-0",children:s.from.name}),a(I,{className:"email-info-dropup",children:[e(z,{className:"font-small-3 text-muted cursor-pointer",tag:"span",caret:!0,children:e("span",{className:"me-25",children:s.from.email})}),e(D,{children:e(fe,{className:"font-small-3",size:"sm",borderless:!0,children:a("tbody",{children:[a("tr",{children:[e("td",{className:"text-end text-muted align-top",children:"From:"}),e("td",{children:s.from.email})]}),a("tr",{children:[e("td",{className:"text-end text-muted align-top",children:"To:"}),e("td",{children:s.to[0].email})]}),a("tr",{children:[e("td",{className:"text-end text-muted align-top",children:"Date:"}),a("td",{children:[i(s.time),", ",i(s.time,!1)]})]})]})})})]})]})]}),a("div",{className:"mail-meta-item d-flex align-items-center",children:[e("small",{className:"mail-date-time text-muted",children:Ie(s.time)}),a(I,{className:"ms-50",children:[e(z,{className:"cursor-pointer",tag:"span",children:e(pe,{size:14})}),a(D,{end:!0,children:[a(c,{className:"d-flex align-items-center w-100",children:[e(Re,{className:"me-50",size:14}),"Reply"]}),a(c,{className:"d-flex align-items-center w-100",children:[e(Ue,{className:"me-50",size:14}),"Forward"]}),a(c,{className:"d-flex align-items-center w-100",children:[e(Le,{className:"me-50",size:14}),"Delete"]})]})]})]})]}),e(ie,{className:"mail-message-wrapper pt-2",children:e("div",{className:"mail-message",dangerouslySetInnerHTML:{__html:s.message}})}),s.attachments&&s.attachments.length?e(ge,{children:a("div",{className:"mail-attachments",children:[a("div",{className:"d-flex align-items-center mb-1",children:[e(Z,{size:16}),a("h5",{className:"fw-bolder text-body mb-0 ms-50",children:[s.attachments.length," Attachment"]})]}),e("div",{className:"d-flex flex-column",children:W(s.attachments)})]})}):null]}),M=s=>{if(s.length&&d===!0)return s.map((p,w)=>e(A,{children:e(B,{sm:"12",children:P(p)})},w))},G=s=>{s.preventDefault(),x(!0)},U=()=>{n(!1)},$=(s,p,w)=>{h(s,p,[w]),U()},L=()=>{m([l.id],!1),U()};return e("div",{className:k("email-app-details",{show:u}),children:l!=null?a(C.exports.Fragment,{children:[a("div",{className:"email-detail-header",children:[a("div",{className:"email-header-left d-flex align-items-center",children:[e("span",{className:"go-back me-1",onClick:U,children:e(ce,{size:20})}),e("h4",{className:"email-subject mb-0",children:l.subject})]}),e("div",{className:"email-header-right ms-2 ps-1",children:a("ul",{className:"list-inline m-0",children:[e("li",{className:"list-inline-item me-1",children:e("span",{className:"action-icon favorite",onClick:()=>{f(v({emailIds:[l.id],dataToUpdate:{isStarred:!l.isStarred}}))},children:e(Y,{size:18,className:k({"text-warning fill-current":l.isStarred})})})}),e("li",{className:"list-inline-item me-1",children:a(I,{children:[e(z,{tag:"span",children:e(oe,{size:18})}),a(D,{end:!0,children:[a(c,{tag:"a",href:"/",onClick:s=>$(s,"draft",l.id),className:"d-flex align-items-center",children:[e(K,{className:"me-50",size:18}),e("span",{children:"Draft"})]}),a(c,{tag:"a",href:"/",onClick:s=>$(s,"spam",l.id),className:"d-flex align-items-center",children:[e(ee,{className:"me-50",size:18}),e("span",{children:"Spam"})]}),a(c,{tag:"a",href:"/",onClick:s=>$(s,"trash",l.id),className:"d-flex align-items-center",children:[e(F,{className:"me-50",size:18}),e("span",{children:"Trash"})]})]})]})}),e("li",{className:"list-inline-item me-1",children:a(I,{children:[e(z,{tag:"span",children:e(he,{size:18})}),a(D,{end:!0,children:[a(c,{tag:"a",href:"/",onClick:s=>r(s,"personal",[l.id]),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-success bullet-sm me-50"}),e("span",{children:"Personal"})]}),a(c,{tag:"a",href:"/",onClick:s=>r(s,"company",[l.id]),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-primary bullet-sm me-50"}),e("span",{children:"Company"})]}),a(c,{tag:"a",href:"/",onClick:s=>r(s,"important",[l.id]),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-warning bullet-sm me-50"}),e("span",{children:"Important"})]}),a(c,{tag:"a",href:"/",onClick:s=>r(s,"private",[l.id]),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-danger bullet-sm me-50"}),e("span",{children:"Private"})]})]})]})}),e("li",{className:"list-inline-item me-1",children:e("span",{className:"action-icon",onClick:L,children:e(ae,{size:18})})}),e("li",{className:"list-inline-item me-1",children:e("span",{className:"action-icon",onClick:()=>{o([l.id]),U()},children:e(F,{size:18})})}),e("li",{className:"list-inline-item email-prev",children:e("span",{className:k({"action-icon":l.hasPreviousMail}),onClick:()=>l.hasPreviousMail?f(N({dir:"next",emailId:l.id})):null,children:e(ce,{size:18,className:k({"text-muted":!l.hasPreviousMail})})})}),e("li",{className:"list-inline-item email-next",children:e("span",{className:k({"action-icon":l.hasNextMail}),onClick:()=>l.hasNextMail?f(N({dir:"previous",emailId:l.id})):null,children:e(Oe,{size:18,className:k({"text-muted":!l.hasNextMail})})})})]})})]}),a(le,{className:"email-scroll-area",options:{wheelPropagation:!1},children:[e(A,{children:e(B,{sm:"12",children:e("div",{className:"email-label",children:R(l.labels)})})}),l.replies&&l.replies.length?a(C.exports.Fragment,{children:[d===!1?e(A,{className:"mb-1",children:e(B,{sm:"12",children:a("a",{className:"fw-bold",href:"/",onClick:G,children:["View ",l.replies.length," Earlier Messages"]})})}):null,M(l.replies)]}):null,e(A,{children:e(B,{sm:"12",children:P(l)})}),e(A,{children:e(B,{sm:"12",children:e(se,{children:e(ie,{children:a("h5",{className:"mb-0",children:["Click here to"," ",e("a",{href:"/",onClick:s=>s.preventDefault(),children:"Reply"})," ","or"," ",e("a",{href:"/",onClick:s=>s.preventDefault(),children:"Forward"})]})})})})})]})]}):null})},Ze=b=>{const{composeOpen:l,toggleCompose:u}=b,[f,g]=C.exports.useState(!1),[n,v]=C.exports.useState(!1),N=[{value:"pheobe",label:"Pheobe Buffay",img:Ae},{value:"chandler",label:"Chandler Bing",img:Qe},{value:"ross",label:"Ross Geller",img:Ve},{value:"monica",label:"Monica Geller",img:Je},{value:"joey",label:"Joey Tribbiani",img:_e},{value:"Rachel",label:"Rachel Green",img:Be}],o=({data:i,...d})=>e(He.Option,{...d,children:a("div",{className:"d-flex flex-wrap align-items-center",children:[e(X,{className:"my-0 me-50",size:"sm",img:i.img}),i.label]})}),h=i=>{i.preventDefault(),g(!f)},r=i=>{i.preventDefault(),v(!n)},m=i=>{i.preventDefault(),u()};return a(Ne,{scrollable:!0,fade:!1,keyboard:!1,backdrop:!1,id:"compose-mail",container:".content-body",className:"modal-lg",isOpen:l,contentClassName:"p-0",toggle:u,modalClassName:"modal-sticky",children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",children:"Compose Mail"}),a("div",{className:"modal-actions",children:[e("a",{href:"/",className:"text-body me-75",onClick:m,children:e(Fe,{size:14})}),e("a",{href:"/",className:"text-body me-75",onClick:i=>i.preventDefault(),children:e($e,{size:14})}),e("a",{href:"/",className:"text-body",onClick:m,children:e(V,{size:14})})]})]}),e(be,{className:"flex-grow-1 p-0",children:a(ve,{className:"compose-form",onSubmit:i=>i.preventDefault(),children:[a("div",{className:"compose-mail-form-field",children:[e(O,{for:"email-to",className:"form-label",children:"To:"}),e("div",{className:"flex-grow-1",children:e(J,{isMulti:!0,id:"email-to",isClearable:!1,theme:_,options:N,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:o}})}),a("div",{children:[e("a",{href:"/",className:"toggle-cc text-body me-1",onClick:h,children:"Cc"}),e("a",{href:"/",className:"toggle-cc text-body",onClick:r,children:"Bcc"})]})]}),f===!0?a("div",{className:"compose-mail-form-field cc-wrapper",children:[e(O,{for:"email-cc",className:"form-label",children:"Cc:"}),e("div",{className:"flex-grow-1",children:e(J,{isMulti:!0,id:"email-cc",isClearable:!1,theme:_,options:N,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:o}})}),e("div",{children:e("a",{href:"/",className:"toggle-cc text-body",onClick:h,children:e(V,{size:14})})})]}):null,n===!0?a("div",{className:"compose-mail-form-field cc-wrapper",children:[e(O,{for:"email-bcc",className:"form-label",children:"Bcc:"}),e("div",{className:"flex-grow-1",children:e(J,{isMulti:!0,id:"email-bcc",isClearable:!1,theme:_,options:N,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:o}})}),e("div",{children:e("a",{href:"/",className:"toggle-cc text-body",onClick:r,children:e(V,{size:14})})})]}):null,a("div",{className:"compose-mail-form-field",children:[e(O,{for:"email-subject",className:"form-label",children:"Subject:"}),e(q,{id:"email-subject",placeholder:"Subject"})]}),e("div",{id:"message-editor",children:e(je.exports.Editor,{placeholder:"Message",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",editorClassName:"rounded-0 border-0",toolbar:{options:["inline","textAlign"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})}),a("div",{className:"compose-footer-wrapper",children:[a("div",{className:"btn-wrapper d-flex align-items-center",children:[a(Ce,{direction:"up",className:"me-1",children:[e(me,{color:"primary",onClick:u,children:"Send"}),e(z,{className:"dropdown-toggle-split",color:"primary",caret:!0}),e(D,{end:!0,children:e(c,{href:"/",tag:"a",onClick:m,children:"Schedule Send"})})]}),e("div",{className:"email-attachement",children:a(O,{className:"mb-0",for:"attach-email-item",children:[e(Z,{className:"cursor-pointer ms-50",size:18}),e("input",{type:"file",name:"attach-email-item",id:"attach-email-item",hidden:!0})]})})]}),a("div",{className:"footer-action d-flex align-items-center",children:[a(I,{className:"me-50",direction:"up",children:[e(z,{tag:"span",children:e(pe,{className:"cursor-pointer",size:18})}),a(D,{end:!0,children:[e(c,{href:"/",tag:"a",onClick:i=>i.preventDefault(),children:"Add Label"}),e(c,{href:"/",tag:"a",onClick:i=>i.preventDefault(),children:"Plain text mode"}),e(c,{divider:!0}),e(c,{href:"/",tag:"a",onClick:i=>i.preventDefault(),children:"Print"}),e(c,{href:"/",tag:"a",onClick:i=>i.preventDefault(),children:"Check Spelling"})]})]}),e(F,{className:"cursor-pointer",size:18,onClick:u})]})]})]})})]})},Ke=b=>{const{query:l,store:u,openMail:f,setQuery:g,dispatch:n,selectMail:v,composeOpen:N,updateMails:o,setOpenMail:h,paginateMail:r,selectAllMail:m,toggleCompose:i,setSidebarOpen:d,updateMailLabel:x,resetSelectedMail:R,selectCurrentMail:W}=b,{mails:P,selectedMails:M}=u,G={personal:"success",company:"primary",important:"warning",private:"danger"},U=t=>{n(W(t)),h(!0)},$=t=>{n(m(t.target.checked))},L=(t,T,H=M)=>{t.preventDefault(),n(o({emailIds:H,dataToUpdate:{folder:T}})),n(R())},s=(t,T,H=M)=>{t.preventDefault(),n(x({emailIds:H,label:T})),n(R())},p=(t,T)=>{n(o({emailIds:t,dataToUpdate:{isRead:T}})).then(()=>n(R())),n(m(!1))},w=t=>{n(o({emailIds:t,dataToUpdate:{folder:"trash"}})),n(R())},j=()=>{if(P.length)return P.map((t,T)=>e(Xe,{mail:t,dispatch:n,selectMail:v,updateMails:o,labelColors:G,selectedMails:M,handleMailClick:U,handleMailReadUpdate:p,formatDateToMonthShort:re},T))};return a(C.exports.Fragment,{children:[a("div",{className:"email-app-list",children:[a("div",{className:"app-fixed-search d-flex align-items-center",children:[e("div",{className:"sidebar-toggle d-block d-lg-none ms-1",onClick:()=>d(!0),children:e(Ge,{size:"21"})}),e("div",{className:"d-flex align-content-center justify-content-between w-100",children:a(xe,{className:"input-group-merge",children:[e(ke,{children:e(Ee,{className:"text-muted",size:14})}),e(q,{id:"email-search",placeholder:"Search email",value:l,onChange:t=>g(t.target.value)})]})})]}),a("div",{className:"app-action",children:[a("div",{className:"action-left form-check",children:[e(q,{type:"checkbox",id:"select-all",onChange:$,checked:M.length&&M.length===P.length}),e(O,{className:"form-check-label fw-bolder ps-25 mb-0",for:"select-all",children:"Select All"})]}),M.length?e("div",{className:"action-right",children:a("ul",{className:"list-inline m-0",children:[e("li",{className:"list-inline-item me-1",children:a(I,{children:[e(z,{tag:"span",children:e(oe,{size:18})}),a(D,{end:!0,children:[a(c,{tag:"a",href:"/",onClick:t=>L(t,"draft"),className:"d-flex align-items-center",children:[e(K,{className:"me-50",size:18}),e("span",{children:"Draft"})]}),a(c,{tag:"a",href:"/",onClick:t=>L(t,"spam"),className:"d-flex align-items-center",children:[e(ee,{className:"me-50",size:18}),e("span",{children:"Spam"})]}),a(c,{tag:"a",href:"/",onClick:t=>L(t,"trash"),className:"d-flex align-items-center",children:[e(F,{className:"me-50",size:18}),e("span",{children:"Trash"})]})]})]})}),e("li",{className:"list-inline-item me-1",children:a(I,{children:[e(z,{tag:"span",children:e(he,{size:18})}),a(D,{end:!0,children:[a(c,{tag:"a",href:"/",onClick:t=>s(t,"personal"),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-success bullet-sm me-50"}),e("span",{children:"Personal"})]}),a(c,{tag:"a",href:"/",onClick:t=>s(t,"company"),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-primary bullet-sm me-50"}),e("span",{children:"Company"})]}),a(c,{tag:"a",href:"/",onClick:t=>s(t,"important"),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-warning bullet-sm me-50"}),e("span",{children:"Important"})]}),a(c,{tag:"a",href:"/",onClick:t=>s(t,"private"),className:"d-flex align-items-center",children:[e("span",{className:"bullet bullet-danger bullet-sm me-50"}),e("span",{children:"Private"})]})]})]})}),e("li",{className:"list-inline-item me-1",children:e("span",{className:"action-icon",onClick:()=>p(M,!1),children:e(ae,{size:18})})}),e("li",{className:"list-inline-item",children:e("span",{className:"action-icon",onClick:()=>w(M),children:e(F,{size:18})})})]})}):null]}),e(le,{className:"email-user-list",options:{wheelPropagation:!1},children:P.length?e("ul",{className:"email-media-list",children:j()}):e("div",{className:"no-results d-block",children:e("h5",{children:"No Items Found"})})})]}),e(Ye,{openMail:f,dispatch:n,mail:u.currentMail,labelColors:G,setOpenMail:h,updateMails:o,paginateMail:r,updateMailLabel:x,handleMailToTrash:w,handleFolderUpdate:L,handleLabelsUpdate:s,handleMailReadUpdate:p,formatDateToMonthShort:re}),e(Ze,{composeOpen:N,toggleCompose:i})]})},ea=b=>{const{store:l,sidebarOpen:u,toggleCompose:f,dispatch:g,getMails:n,resetSelectedMail:v,setSidebarOpen:N,setOpenMail:o}=b,h=de(),r=x=>{o(!1),g(n({...l.params,folder:x})),g(v())},m=x=>{o(!1),g(n({...l.params,label:x})),g(v())},i=()=>{f(),N(!1)},d=x=>!!(h.folder&&h.folder===x||h.label&&h.label===x);return e("div",{className:k("sidebar-left",{show:u}),children:e("div",{className:"sidebar",children:e("div",{className:"sidebar-content email-app-sidebar",children:a("div",{className:"email-app-menu",children:[e("div",{className:"form-group-compose text-center compose-btn",children:e(me,{className:"compose-email",color:"primary",block:!0,onClick:i,children:"Compose"})}),a(le,{className:"sidebar-menu-list",options:{wheelPropagation:!1},children:[a(te,{tag:"div",className:"list-group-messages",children:[a(y,{tag:S,to:"/apps/email/inbox",onClick:()=>r("inbox"),action:!0,active:!Object.keys(h).length||d("inbox"),children:[e(ae,{size:18,className:"me-75"}),e("span",{className:"align-middle",children:"Inbox"}),l.emailsMeta.inbox?e(E,{className:"float-end",color:"light-primary",pill:!0,children:l.emailsMeta.inbox}):null]}),a(y,{tag:S,to:"/apps/email/sent",onClick:()=>r("sent"),action:!0,active:d("sent"),children:[e(qe,{size:18,className:"me-75"}),e("span",{className:"align-middle",children:"Sent"})]}),a(y,{tag:S,to:"/apps/email/draft",onClick:()=>r("draft"),action:!0,active:d("draft"),children:[e(K,{size:18,className:"me-75"}),e("span",{className:"align-middle",children:"Draft"}),l.emailsMeta.draft?e(E,{className:"float-end",color:"light-warning",pill:!0,children:l.emailsMeta.draft}):null]}),a(y,{tag:S,to:"/apps/email/starred",onClick:()=>r("starred"),action:!0,active:d("starred"),children:[e(Y,{size:18,className:"me-75"}),e("span",{className:"align-middle",children:"Starred"})]}),a(y,{tag:S,to:"/apps/email/spam",onClick:()=>r("spam"),action:!0,active:d("spam"),children:[e(ee,{size:18,className:"me-75"}),e("span",{className:"align-middle",children:"Spam"}),l.emailsMeta.spam?e(E,{className:"float-end",color:"light-danger",pill:!0,children:l.emailsMeta.spam}):null]}),a(y,{tag:S,to:"/apps/email/trash",onClick:()=>r("trash"),action:!0,active:d("trash"),children:[e(F,{size:18,className:"me-75"}),e("span",{className:"align-middle",children:"Trash"})]})]}),e("h6",{className:"section-label mt-3 mb-1 px-2",children:"Labels"}),a(te,{tag:"div",className:"list-group-labels",children:[a(y,{tag:S,to:"/apps/email/label/personal",onClick:()=>m("personal"),active:d("personal"),action:!0,children:[e("span",{className:"bullet bullet-sm bullet-success me-1"}),"Personal"]}),a(y,{tag:S,to:"/apps/email/label/company",onClick:()=>m("company"),active:d("company"),action:!0,children:[e("span",{className:"bullet bullet-sm bullet-primary me-1"}),"Company"]}),a(y,{tag:S,to:"/apps/email/label/important",onClick:()=>m("important"),active:d("important"),action:!0,children:[e("span",{className:"bullet bullet-sm bullet-warning me-1"}),"Important"]}),a(y,{tag:S,to:"/apps/email/label/private",onClick:()=>m("private"),active:d("private"),action:!0,children:[e("span",{className:"bullet bullet-sm bullet-danger me-1"}),"Private"]})]})]})]})})})})};const da=()=>{const[b,l]=C.exports.useState(""),[u,f]=C.exports.useState(!1),[g,n]=C.exports.useState(!1),[v,N]=C.exports.useState(!1),o=()=>N(!v),h=We(),r=Me(i=>i.email),m=de();return C.exports.useEffect(()=>{h(Q({q:b||"",folder:m.folder||"inbox",label:m.label||""}))},[b,m.folder,m.label]),a(C.exports.Fragment,{children:[e(ea,{store:r,dispatch:h,getMails:Q,setOpenMail:f,sidebarOpen:g,toggleCompose:o,setSidebarOpen:n,resetSelectedMail:ne}),e("div",{className:"content-right",children:a("div",{className:"content-body",children:[e("div",{className:k("body-content-overlay",{show:g}),onClick:()=>n(!1)}),e(Ke,{store:r,query:b,setQuery:l,dispatch:h,getMails:Q,openMail:u,selectMail:ye,setOpenMail:f,updateMails:Se,composeOpen:v,paginateMail:we,selectAllMail:ze,toggleCompose:o,setSidebarOpen:n,updateMailLabel:De,selectCurrentMail:Pe,resetSelectedMail:ne})]})})]})};export{da as default};
