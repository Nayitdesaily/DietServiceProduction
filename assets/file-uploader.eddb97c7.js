import{p as f,r as l,j as sr}from"./index.dfabc371.js";import{t as v}from"./tslib.439001b8.js";var ur=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function $(e,r){var t=cr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function cr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=ur.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var lr=[".DS_Store","Thumbs.db"];function fr(e){return v.exports.__awaiter(this,void 0,void 0,function(){return v.exports.__generator(this,function(r){return J(e)&&pr(e.dataTransfer)?[2,vr(e.dataTransfer,e.type)]:dr(e)?[2,gr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,mr(e)]:[2,[]]})})}function pr(e){return J(e)}function dr(e){return J(e)&&J(e.target)}function J(e){return typeof e=="object"&&e!==null}function gr(e){return de(e.target.files).map(function(r){return $(r)})}function mr(e){return v.exports.__awaiter(this,void 0,void 0,function(){var r;return v.exports.__generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return $(n)})]}})})}function vr(e,r){return v.exports.__awaiter(this,void 0,void 0,function(){var t,n;return v.exports.__generator(this,function(i){switch(i.label){case 0:return e.items?(t=de(e.items).filter(function(s){return s.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(yr))]):[3,2];case 1:return n=i.sent(),[2,Re(Ue(n))];case 2:return[2,Re(de(e.files).map(function(s){return $(s)}))]}})})}function Re(e){return e.filter(function(r){return lr.indexOf(r.name)===-1})}function de(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function yr(e){if(typeof e.webkitGetAsEntry!="function")return ze(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Ye(r):ze(e)}function Ue(e){return e.reduce(function(r,t){return v.exports.__spreadArray(v.exports.__spreadArray([],v.exports.__read(r),!1),v.exports.__read(Array.isArray(t)?Ue(t):[t]),!1)},[])}function ze(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=$(r);return Promise.resolve(t)}function br(e){return v.exports.__awaiter(this,void 0,void 0,function(){return v.exports.__generator(this,function(r){return[2,e.isDirectory?Ye(e):xr(e)]})})}function Ye(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function s(){var c=this;r.readEntries(function(u){return v.exports.__awaiter(c,void 0,void 0,function(){var m,A,_;return v.exports.__generator(this,function(h){switch(h.label){case 0:if(u.length)return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=h.sent(),t(m),[3,4];case 3:return A=h.sent(),n(A),[3,4];case 4:return[3,6];case 5:_=Promise.all(u.map(br)),i.push(_),s(),h.label=6;case 6:return[2]}})})},function(u){n(u)})}s()})}function xr(e){return v.exports.__awaiter(this,void 0,void 0,function(){return v.exports.__generator(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var s=$(i,e.fullPath);t(s)},function(i){n(i)})})]})})}var hr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),s=i.replace(/\/.*$/,"");return t.some(function(c){var u=c.trim().toLowerCase();return u.charAt(0)==="."?n.toLowerCase().endsWith(u):u.endsWith("/*")?s===u.replace(/\/.*$/,""):i===u})}return!0};function Me(e){return Ar(e)||wr(e)||qe(e)||Dr()}function Dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ar(e){if(Array.isArray(e))return ge(e)}function Le(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ke(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Le(Object(t),!0).forEach(function(n){Ge(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Le(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ge(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function K(e,r){return Er(e)||Or(e,r)||qe(e,r)||_r()}function _r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qe(e,r){if(!!e){if(typeof e=="string")return ge(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ge(e,r)}}function ge(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Or(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,s=!1,c,u;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(m){s=!0,u=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw u}}return n}}function Er(e){if(Array.isArray(e))return e}var Fr="file-invalid-type",jr="file-too-large",Cr="file-too-small",Pr="too-many-files",Sr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Fr,message:"File type must be ".concat(t)}},$e=function(r){return{code:jr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},He=function(r){return{code:Cr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Tr={code:Pr,message:"Too many files"};function Je(e,r){var t=e.type==="application/x-moz-file"||hr(e,r);return[t,t?null:Sr(r)]}function Ve(e,r,t){if(F(e.size))if(F(r)&&F(t)){if(e.size>t)return[!1,$e(t)];if(e.size<r)return[!1,He(r)]}else{if(F(r)&&e.size<r)return[!1,He(r)];if(F(t)&&e.size>t)return[!1,$e(t)]}return[!0,null]}function F(e){return e!=null}function Ir(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,s=e.multiple,c=e.maxFiles,u=e.validator;return!s&&r.length>1||s&&c>=1&&r.length>c?!1:r.every(function(m){var A=Je(m,t),_=K(A,1),h=_[0],T=Ve(m,n,i),I=K(T,1),k=I[0],R=u?u(m):null;return h&&k&&!R})}function V(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function q(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function We(e){e.preventDefault()}function kr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Rr(e){return e.indexOf("Edge/")!==-1}function zr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return kr(e)||Rr(e)}function w(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,s=new Array(i>1?i-1:0),c=1;c<i;c++)s[c-1]=arguments[c];return r.some(function(u){return!V(n)&&u&&u.apply(void 0,[n].concat(s)),V(n)})}}function Mr(){return"showOpenFilePicker"in window}function Lr(e){if(F(e)){var r=Object.entries(e).filter(function(t){var n=K(t,2),i=n[0],s=n[1],c=!0;return Qe(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(s)||!s.every(Xe))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,n){var i=K(n,2),s=i[0],c=i[1];return Ke(Ke({},t),{},Ge({},s,c))},{});return[{description:"Files",accept:r}]}return e}function Kr(e){if(F(e))return Object.entries(e).reduce(function(r,t){var n=K(t,2),i=n[0],s=n[1];return[].concat(Me(r),[i],Me(s))},[]).filter(function(r){return Qe(r)||Xe(r)}).join(",")}function $r(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Hr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Qe(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Xe(e){return/^.*\.[\w]+$/.test(e)}var Wr=["children"],Br=["open"],Nr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Ur=["refKey","onChange","onClick"];function Yr(e){return Jr(e)||qr(e)||Ze(e)||Gr()}function Gr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jr(e){if(Array.isArray(e))return me(e)}function pe(e,r){return Xr(e)||Qr(e,r)||Ze(e,r)||Vr()}function Vr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(e,r){if(!!e){if(typeof e=="string")return me(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return me(e,r)}}function me(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Qr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,s=!1,c,u;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(m){s=!0,u=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw u}}return n}}function Xr(e){if(Array.isArray(e))return e}function Be(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Be(Object(t),!0).forEach(function(n){ve(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Be(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ve(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Q(e,r){if(e==null)return{};var t=Zr(e,r),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(t[n]=e[n]))}return t}function Zr(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var be=l.exports.forwardRef(function(e,r){var t=e.children,n=Q(e,Wr),i=et(n),s=i.open,c=Q(i,Br);return l.exports.useImperativeHandle(r,function(){return{open:s}},[s]),sr(l.exports.Fragment,{children:t(p(p({},c),{},{open:s}))})});be.displayName="Dropzone";var er={disabled:!1,getFilesFromEvent:fr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};be.defaultProps=er;be.propTypes={children:f.exports.func,accept:f.exports.objectOf(f.exports.arrayOf(f.exports.string)),multiple:f.exports.bool,preventDropOnDocument:f.exports.bool,noClick:f.exports.bool,noKeyboard:f.exports.bool,noDrag:f.exports.bool,noDragEventsBubbling:f.exports.bool,minSize:f.exports.number,maxSize:f.exports.number,maxFiles:f.exports.number,disabled:f.exports.bool,getFilesFromEvent:f.exports.func,onFileDialogCancel:f.exports.func,onFileDialogOpen:f.exports.func,useFsAccessApi:f.exports.bool,autoFocus:f.exports.bool,onDragEnter:f.exports.func,onDragLeave:f.exports.func,onDragOver:f.exports.func,onDrop:f.exports.func,onDropAccepted:f.exports.func,onDropRejected:f.exports.func,onError:f.exports.func,validator:f.exports.func};var ye={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function et(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=p(p({},er),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,s=r.maxSize,c=r.minSize,u=r.multiple,m=r.maxFiles,A=r.onDragEnter,_=r.onDragLeave,h=r.onDragOver,T=r.onDrop,I=r.onDropAccepted,k=r.onDropRejected,R=r.onFileDialogCancel,X=r.onFileDialogOpen,xe=r.useFsAccessApi,he=r.autoFocus,Z=r.preventDropOnDocument,De=r.noClick,ee=r.noKeyboard,we=r.noDrag,O=r.noDragEventsBubbling,re=r.onError,z=r.validator,M=l.exports.useMemo(function(){return Kr(t)},[t]),Ae=l.exports.useMemo(function(){return Lr(t)},[t]),te=l.exports.useMemo(function(){return typeof X=="function"?X:Ne},[X]),H=l.exports.useMemo(function(){return typeof R=="function"?R:Ne},[R]),y=l.exports.useRef(null),D=l.exports.useRef(null),rr=l.exports.useReducer(rt,ye),_e=pe(rr,2),ne=_e[0],b=_e[1],tr=ne.isFocused,Oe=ne.isFileDialogActive,W=l.exports.useRef(typeof window<"u"&&window.isSecureContext&&xe&&Mr()),Ee=function(){!W.current&&Oe&&setTimeout(function(){if(D.current){var a=D.current.files;a.length||(b({type:"closeDialog"}),H())}},300)};l.exports.useEffect(function(){return window.addEventListener("focus",Ee,!1),function(){window.removeEventListener("focus",Ee,!1)}},[D,Oe,H,W]);var j=l.exports.useRef([]),Fe=function(a){y.current&&y.current.contains(a.target)||(a.preventDefault(),j.current=[])};l.exports.useEffect(function(){return Z&&(document.addEventListener("dragover",We,!1),document.addEventListener("drop",Fe,!1)),function(){Z&&(document.removeEventListener("dragover",We),document.removeEventListener("drop",Fe))}},[y,Z]),l.exports.useEffect(function(){return!n&&he&&y.current&&y.current.focus(),function(){}},[y,he,n]);var E=l.exports.useCallback(function(o){re?re(o):console.error(o)},[re]),je=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o),j.current=[].concat(Yr(j.current),[o.target]),q(o)&&Promise.resolve(i(o)).then(function(a){if(!(V(o)&&!O)){var d=a.length,g=d>0&&Ir({files:a,accept:M,minSize:c,maxSize:s,multiple:u,maxFiles:m,validator:z}),x=d>0&&!g;b({isDragAccept:g,isDragReject:x,isDragActive:!0,type:"setDraggedFiles"}),A&&A(o)}}).catch(function(a){return E(a)})},[i,A,E,O,M,c,s,u,m,z]),Ce=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o);var a=q(o);if(a&&o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return a&&h&&h(o),!1},[h,O]),Pe=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o);var a=j.current.filter(function(g){return y.current&&y.current.contains(g)}),d=a.indexOf(o.target);d!==-1&&a.splice(d,1),j.current=a,!(a.length>0)&&(b({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),q(o)&&_&&_(o))},[y,_,O]),B=l.exports.useCallback(function(o,a){var d=[],g=[];o.forEach(function(x){var L=Je(x,M),S=pe(L,2),ie=S[0],ae=S[1],se=Ve(x,c,s),G=pe(se,2),ue=G[0],ce=G[1],le=z?z(x):null;if(ie&&ue&&!le)d.push(x);else{var fe=[ae,ce];le&&(fe=fe.concat(le)),g.push({file:x,errors:fe.filter(function(ar){return ar})})}}),(!u&&d.length>1||u&&m>=1&&d.length>m)&&(d.forEach(function(x){g.push({file:x,errors:[Tr]})}),d.splice(0)),b({acceptedFiles:d,fileRejections:g,type:"setFiles"}),T&&T(d,g,a),g.length>0&&k&&k(g,a),d.length>0&&I&&I(d,a)},[b,u,M,c,s,m,T,I,k,z]),N=l.exports.useCallback(function(o){o.preventDefault(),o.persist(),Y(o),j.current=[],q(o)&&Promise.resolve(i(o)).then(function(a){V(o)&&!O||B(a,o)}).catch(function(a){return E(a)}),b({type:"reset"})},[i,B,E,O]),C=l.exports.useCallback(function(){if(W.current){b({type:"openDialog"}),te();var o={multiple:u,types:Ae};window.showOpenFilePicker(o).then(function(a){return i(a)}).then(function(a){B(a,null),b({type:"closeDialog"})}).catch(function(a){$r(a)?(H(a),b({type:"closeDialog"})):Hr(a)?(W.current=!1,D.current?(D.current.value=null,D.current.click()):E(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):E(a)});return}D.current&&(b({type:"openDialog"}),te(),D.current.value=null,D.current.click())},[b,te,H,xe,B,E,Ae,u]),Se=l.exports.useCallback(function(o){!y.current||!y.current.isEqualNode(o.target)||(o.key===" "||o.key==="Enter"||o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),C())},[y,C]),Te=l.exports.useCallback(function(){b({type:"focus"})},[]),Ie=l.exports.useCallback(function(){b({type:"blur"})},[]),ke=l.exports.useCallback(function(){De||(zr()?setTimeout(C,0):C())},[De,C]),P=function(a){return n?null:a},oe=function(a){return ee?null:P(a)},U=function(a){return we?null:P(a)},Y=function(a){O&&a.stopPropagation()},nr=l.exports.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.refKey,d=a===void 0?"ref":a,g=o.role,x=o.onKeyDown,L=o.onFocus,S=o.onBlur,ie=o.onClick,ae=o.onDragEnter,se=o.onDragOver,G=o.onDragLeave,ue=o.onDrop,ce=Q(o,Nr);return p(p(ve({onKeyDown:oe(w(x,Se)),onFocus:oe(w(L,Te)),onBlur:oe(w(S,Ie)),onClick:P(w(ie,ke)),onDragEnter:U(w(ae,je)),onDragOver:U(w(se,Ce)),onDragLeave:U(w(G,Pe)),onDrop:U(w(ue,N)),role:typeof g=="string"&&g!==""?g:"presentation"},d,y),!n&&!ee?{tabIndex:0}:{}),ce)}},[y,Se,Te,Ie,ke,je,Ce,Pe,N,ee,we,n]),or=l.exports.useCallback(function(o){o.stopPropagation()},[]),ir=l.exports.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.refKey,d=a===void 0?"ref":a,g=o.onChange,x=o.onClick,L=Q(o,Ur),S=ve({accept:M,multiple:u,type:"file",style:{display:"none"},onChange:P(w(g,N)),onClick:P(w(x,or)),tabIndex:-1},d,D);return p(p({},S),L)}},[D,t,u,N,n]);return p(p({},ne),{},{isFocused:tr&&!n,getRootProps:nr,getInputProps:ir,rootRef:y,inputRef:D,open:P(C)})}function rt(e,r){switch(r.type){case"focus":return p(p({},e),{},{isFocused:!0});case"blur":return p(p({},e),{},{isFocused:!1});case"openDialog":return p(p({},ye),{},{isFileDialogActive:!0});case"closeDialog":return p(p({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return p(p({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return p(p({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return p({},ye);default:return e}}function Ne(){}export{et as u};
