import{o as r,aO as h,aQ as m,j as e,ac as u,aP as g,c2 as S,r as y,B as W,bp as P,$ as C,U as M,D as I,x as $,y as k,c3 as E,aa as U,ab as c}from"./index.8ea34c3d.js";import{B as O}from"./index.7e655635.js";import{B as R,L as D,R as G,a as J,S as Y,D as V,P as L,C as Q,r as X}from"./index.8c8ef4d0.js";import{F as w}from"./index.1dada4a4.js";import{ad as v,b1 as A,b2 as _,b3 as B,b4 as N,f as q,u as K}from"./App.420b7a59.js";/* empty css                  */const Z=({success:o,gridLineColor:a,labelColor:t})=>{const s={responsive:!0,maintainAspectRatio:!1,animation:{duration:500},scales:{x:{grid:{color:a,borderColor:a},ticks:{color:t}},y:{min:0,max:400,grid:{color:a,borderColor:a},ticks:{stepSize:100,color:t}}},plugins:{legend:{display:!1}}},n={labels:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12"],datasets:[{maxBarThickness:15,backgroundColor:o,borderColor:"transparent",borderRadius:{topRight:15,topLeft:15},data:[275,90,190,205,125,85,55,87,127,150,230,280,190]}]};return r(h,{children:[r(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[e(u,{tag:"h4",children:"Latest Statistics"}),r("div",{className:"d-flex align-items-center",children:[e(v,{size:14}),e(w,{className:"form-control flat-picker bg-transparent border-0 shadow-none",options:{mode:"range",defaultDate:[new Date,new Date(new Date().getTime()+5*24*60*60*1e3)]}})]})]}),e(g,{children:e("div",{style:{height:"400px"},children:e(R,{data:n,options:s,height:400})})})]})},ee=({labelColor:o,gridLineColor:a,warningColorShade:t,lineChartDanger:s,lineChartPrimary:n})=>r(h,{children:[e(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:r("div",{children:[e(u,{className:"mb-75",tag:"h4",children:"Statistics"}),e(S,{children:"Commercial networks and enterprises"})]})}),e(g,{children:e("div",{style:{height:"450px"},children:e(D,{data:{labels:[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140],datasets:[{data:[80,150,180,270,210,160,160,202,265,210,270,255,290,360,375],fill:!1,tension:.5,pointRadius:1,label:"Europe",pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:s,pointBorderColor:"transparent",backgroundColor:s,pointHoverBackgroundColor:s},{data:[80,125,105,130,215,195,140,160,230,300,220,170,210,200,280],fill:!1,tension:.5,label:"Asia",pointRadius:1,pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:n,pointBorderColor:"transparent",backgroundColor:n,pointHoverBackgroundColor:n},{data:[80,99,82,90,115,115,74,75,130,155,125,90,140,130,180],fill:!1,tension:.5,pointRadius:1,label:"Africa",pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:t,backgroundColor:t,pointBorderColor:t,pointHoverBackgroundColor:t}]},options:{responsive:!0,backgroundColor:!1,maintainAspectRatio:!1,scales:{x:{ticks:{color:o},grid:{borderColor:a,color:a}},y:{min:0,max:400,scaleLabel:{display:!0},ticks:{stepSize:100,color:o},grid:{borderColor:a,color:a}}},plugins:{legend:{align:"start",position:"top",labels:{boxWidth:10,marginBottom:25,color:o,usePointStyle:!0}}}},height:450,plugins:[{beforeInit(p){p.legend.afterFit=function(){this.height+=20}}}]})})})]}),re=({labelColor:o,gridLineColor:a,blueColor:t,blueLightColor:s,greyLightColor:n})=>{const l={responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:-20}},scales:{x:{grid:{color:"transparent",borderColor:a},ticks:{color:o}},y:{min:0,max:400,grid:{color:"transparent",borderColor:a},ticks:{stepSize:100,color:o}}},plugins:{legend:{align:"start",position:"top",labels:{padding:30,boxWidth:9,color:o,usePointStyle:!0}}}},d={labels:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12",""],datasets:[{fill:!0,tension:0,label:"Africa",pointRadius:.5,pointHoverRadius:5,pointStyle:"circle",backgroundColor:t,pointHoverBorderWidth:5,borderColor:"transparent",pointHoverBorderColor:"#fff",pointBorderColor:"transparent",pointHoverBackgroundColor:t,data:[40,55,45,75,65,55,70,60,100,98,90,120,125,140,155]},{fill:!0,tension:0,label:"Asia",pointRadius:.5,pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:"transparent",pointHoverBorderColor:"#fff",pointBorderColor:"transparent",backgroundColor:s,pointHoverBackgroundColor:s,data:[70,85,75,150,100,140,110,105,160,150,125,190,200,240,275]},{fill:!0,tension:0,label:"Europe",pointRadius:.5,pointHoverRadius:5,pointStyle:"circle",pointHoverBorderWidth:5,borderColor:"transparent",pointHoverBorderColor:"#fff",pointBorderColor:"transparent",backgroundColor:n,pointHoverBackgroundColor:n,data:[240,195,160,215,185,215,185,200,250,210,195,250,235,300,315]}]};return r(h,{children:[r(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[e(u,{tag:"h4",children:"Data Science"}),r("div",{className:"d-flex align-items-center",children:[e(v,{size:14}),e(w,{className:"form-control flat-picker bg-transparent border-0 shadow-none",options:{mode:"range",defaultDate:[new Date,new Date(new Date().getTime()+5*24*60*60*1e3)]}})]})]}),e(g,{children:e("div",{style:{height:"450px"},children:e(D,{data:d,options:l,height:450})})})]})},te=({gridLineColor:o,labelColor:a})=>{const[t,s]=y.exports.useState({datasets:[]}),n=y.exports.useRef(null),l={responsive:!0,maintainAspectRatio:!1,animation:{duration:500},layout:{padding:{top:-20}},scales:{r:{ticks:{display:!1,maxTicksLimit:1,color:a},grid:{color:o},pointLabels:{color:a},angleLines:{color:o}}},plugins:{legend:{position:"top",labels:{padding:25,color:a}}}};return y.exports.useEffect(()=>{if(n.current){const i=n.current.ctx.createLinearGradient(0,0,0,150);i.addColorStop(0,"rgba(155,136,250, 0.9)"),i.addColorStop(1,"rgba(155,136,250, 0.8)");const p=n.current.ctx.createLinearGradient(0,0,0,150);p.addColorStop(0,"rgba(255,161,161, 0.9)"),p.addColorStop(1,"rgba(255,161,161, 0.8)"),s({labels:["STA","STR","AGI","VIT","CHA","INT"],datasets:[{fill:!0,label:"Dont\xE9 Panlin",borderColor:"transparent",backgroundColor:p,data:[25,59,90,81,60,82],pointBorderColor:"transparent",pointBackgroundColor:"transparent"},{fill:!0,label:"Mireska Sunbreeze",borderColor:"transparent",backgroundColor:i,data:[40,100,40,90,40,90],pointBorderColor:"transparent",pointBackgroundColor:"transparent"}]})}},[]),r(h,{children:[e(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:e(u,{tag:"h4",children:"Radar Chart"})}),e(g,{children:e("div",{style:{height:"355px"},children:e(G,{ref:n,data:t,options:l,height:355,plugins:[{beforeInit(i){i.legend.afterFit=function(){this.height+=20}}}]})})})]})},ae=({labelColor:o,primaryColorShade:a,yellowColor:t,gridLineColor:s})=>r(h,{children:[r(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[e(u,{tag:"h4",children:"Bubble Chart"}),r("div",{className:"d-flex align-items-center flex-wrap",children:[e("h5",{className:"fw-bolder mb-0 me-1",children:"$ 100,000"}),r(W,{color:"light-secondary",children:[e(A,{size:13,className:"text-danger"}),e("span",{className:"align-middle ms-25",children:"20%"})]})]})]}),e(g,{children:e("div",{style:{height:"500px"},children:e(J,{data:{animation:{duration:1e4},datasets:[{label:"Dataset 1",borderColor:a,backgroundColor:a,data:[{x:20,y:74,r:10},{x:10,y:110,r:5},{x:30,y:165,r:7},{x:40,y:200,r:20},{x:90,y:185,r:7},{x:50,y:240,r:7},{x:60,y:275,r:10},{x:70,y:305,r:5},{x:80,y:325,r:4},{x:100,y:310,r:5},{x:110,y:240,r:5},{x:120,y:270,r:7},{x:130,y:300,r:6}]},{label:"Dataset 2",borderColor:t,backgroundColor:t,data:[{x:30,y:72,r:5},{x:40,y:110,r:7},{x:20,y:135,r:6},{x:10,y:160,r:12},{x:50,y:285,r:5},{x:60,y:235,r:5},{x:70,y:275,r:7},{x:80,y:290,r:4},{x:90,y:250,r:10},{x:100,y:220,r:7},{x:120,y:230,r:4},{x:110,y:320,r:15},{x:130,y:330,r:7}]}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{min:0,max:140,grid:{color:s,borderColor:s},ticks:{stepSize:10,color:o}},y:{min:0,max:400,grid:{color:s,borderColor:s},ticks:{stepSize:100,color:o}}},plugins:{legend:{display:!1}}},height:500})})})]}),oe=({labelColor:o,gridLineColor:a,primary:t,yellowColor:s,successColorShade:n})=>{const[l,d]=y.exports.useState("daily");return r(h,{children:[r(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[e(u,{tag:"h4",children:"New Product Data"}),r(P,{className:"mt-md-0 mt-1",children:[e(C,{active:l==="daily",color:"primary",outline:!0,onClick:()=>d("daily"),children:"Daily"}),e(C,{active:l==="monthly",color:"primary",outline:!0,onClick:()=>d("monthly"),children:"Monthly"}),e(C,{active:l==="yearly",color:"primary",outline:!0,onClick:()=>d("yearly"),children:"Yearly"})]})]}),e(g,{children:e("div",{style:{height:"415px"},children:e(Y,{data:{datasets:[{pointRadius:5,label:"iPhone",pointBorderWidth:2,backgroundColor:t,pointHoverBorderWidth:2,borderColor:"transparent",data:[{x:72,y:225},{x:81,y:270},{x:90,y:230},{x:103,y:305},{x:103,y:245},{x:108,y:275},{x:110,y:290},{x:111,y:315},{x:109,y:350},{x:116,y:340},{x:113,y:260},{x:117,y:275},{x:117,y:295},{x:126,y:280},{x:127,y:340},{x:133,y:330}]},{pointRadius:5,pointBorderWidth:2,label:"Samsung Note",pointHoverBorderWidth:2,borderColor:"transparent",backgroundColor:s,data:[{x:13,y:95},{x:22,y:105},{x:17,y:115},{x:19,y:130},{x:21,y:125},{x:35,y:125},{x:13,y:155},{x:21,y:165},{x:25,y:155},{x:18,y:190},{x:26,y:180},{x:43,y:180},{x:53,y:202},{x:61,y:165},{x:67,y:225}]},{pointRadius:5,label:"OnePlus",pointBorderWidth:2,pointHoverBorderWidth:2,borderColor:"transparent",backgroundColor:n,data:[{x:70,y:195},{x:72,y:270},{x:98,y:255},{x:100,y:215},{x:87,y:240},{x:94,y:280},{x:99,y:300},{x:102,y:290},{x:110,y:275},{x:111,y:250},{x:94,y:280},{x:92,y:340},{x:100,y:335},{x:108,y:330}]}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:800},layout:{padding:{top:-20}},scales:{x:{min:0,max:140,grid:{drawTicks:!1,color:a,borderColor:a},ticks:{stepSize:10,color:o}},y:{min:0,max:400,grid:{drawTicks:!1,color:a,borderColor:a},ticks:{stepSize:100,color:o}}},plugins:{legend:{align:"start",position:"top",labels:{padding:30,boxWidth:9,color:o,usePointStyle:!0}}}},height:415,plugins:[{beforeInit(f){f.legend.afterFit=function(){this.height+=20}}}]})})})]})},ne=({tooltipShadow:o,successColorShade:a,warningLightColor:t,primary:s})=>r(h,{children:[e(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:e(u,{tag:"h4",children:"Sessions By Device"})}),r(g,{children:[e("div",{style:{height:"275px"},children:e(V,{data:{datasets:[{labels:["Tablet","Mobile","Desktop"],data:[10,10,80],backgroundColor:[a,t,s],borderWidth:0,pointStyle:"rectRounded"}]},options:{maintainAspectRatio:!1,cutout:60,animation:{resize:{duration:500}},plugins:{legend:{display:!1},tooltips:{callbacks:{label(d){console.log(d);let i=d.label||"";return i&&(i+="Ronak: "),d.parsed.y!==null&&(i+=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(d.parsed.y)),i}},shadowOffsetX:1,shadowOffsetY:1,shadowBlur:8,shadowColor:o,backgroundColor:"#fff",titleFontColor:"#000",bodyFontColor:"#000"}}},height:275})}),r("div",{className:"d-flex justify-content-between mt-3 mb-1",children:[r("div",{className:"d-flex align-items-center",children:[e(_,{size:17,className:"text-primary"}),e("span",{className:"fw-bold ms-75 me-25",children:"Desktop"}),e("span",{children:"- 80%"})]}),r("div",{children:[e("span",{children:"2%"})," ",e(B,{className:"text-success",size:14})]})]}),r("div",{className:"d-flex justify-content-between mb-1",children:[r("div",{className:"d-flex align-items-center",children:[e(N,{size:17,className:"text-warning"}),e("span",{className:"fw-bold ms-75 me-25",children:"Mobile"}),e("span",{children:"- 10%"})]}),r("div",{children:[e("span",{children:"8%"})," ",e(B,{className:"text-success",size:14})]})]}),r("div",{className:"d-flex justify-content-between",children:[r("div",{className:"d-flex align-items-center",children:[e(N,{size:17,className:"text-success"}),e("span",{className:"fw-bold ms-75 me-25",children:"Tablet"}),e("span",{children:"- 10%"})]}),r("div",{children:[e("span",{children:"-5%"})," ",e(A,{className:"text-danger",size:14})]})]})]})]}),se=o=>{const{primary:a,greyColor:t,labelColor:s,yellowColor:n,infoColorShade:l,warningColorShade:d,successColorShade:i}=o;return r(h,{children:[r(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[e(u,{tag:"h4",children:"Average Skills"}),r(M,{children:[e(I,{className:"cursor-pointer",tag:"span",children:e(q,{size:14})}),r($,{end:!0,children:[e(k,{className:"w-100",children:"Last 28 days"}),e(k,{className:"w-100",children:"Last Month"}),e(k,{className:"w-100",children:"Last Year"})]})]})]}),e(g,{children:e("div",{style:{height:"350px"},children:e(L,{data:{labels:["Africa","Asia","Europe","America","Antarctica","Australia"],datasets:[{borderWidth:0,label:"Population (millions)",data:[19,17.5,15,13.5,11,9],backgroundColor:[a,n,d,l,t,i]}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},layout:{padding:{top:-5,bottom:-45}},scales:{r:{grid:{display:!1},ticks:{display:!1}}},plugins:{legend:{position:"right",labels:{padding:25,boxWidth:9,color:s,usePointStyle:!0}}}},height:350})})})]})},ie=({warning:o,gridLineColor:a,labelColor:t,info:s})=>{const n={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,animation:{duration:500},elements:{bar:{borderRadius:{topRight:15,bottomRight:15}}},layout:{padding:{top:-4}},scales:{x:{min:0,grid:{drawTicks:!1,color:a,borderColor:"transparent"},ticks:{color:t}},y:{grid:{display:!1,borderColor:a},ticks:{color:t}}},plugins:{legend:{align:"end",position:"top",labels:{color:t}}}},l={labels:["MON","TUE","WED ","THU","FRI"],datasets:[{maxBarThickness:15,label:"Market Data",backgroundColor:o,borderColor:"transparent",data:[710,350,580,460,120]},{maxBarThickness:15,backgroundColor:s,label:"Personal Data",borderColor:"transparent",data:[430,590,510,240,360]}]};return r(h,{children:[r(m,{className:"d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column",children:[r("div",{children:[e(S,{className:"text-muted mb-25",children:"Balance"}),e(u,{tag:"h4",children:"$74,123"})]}),r("div",{className:"d-flex align-items-center",children:[e(v,{size:14}),e(w,{className:"form-control flat-picker bg-transparent border-0 shadow-none",options:{mode:"range",defaultDate:[new Date,new Date(new Date().getTime()+5*24*60*60*1e3)]}})]})]}),e(g,{children:e("div",{style:{height:"400px"},children:e(R,{data:l,options:n,height:400})})})]})};Q.register(...X);const ue=()=>{const{colors:o}=y.exports.useContext(E),{skin:a}=K(),t=a==="dark"?"#b4b7bd":"#6e6b7b",s="rgba(0, 0, 0, 0.25)",n="rgba(200, 200, 200, 0.2)",l="#666ee8",d="#ff4961",i="#ffbd1f",p="#FDAC34",x="#28dac6",f="#836AF9",H="#299AFF",b="#ffe800",j="#4F5D70",T="#2c9aff",z="#84D0FF",F="#EDF1F4";return r(y.exports.Fragment,{children:[e(O,{title:"React ChartJS 2",data:[{title:"Charts"},{title:"ChartJS"}]}),r(U,{className:"match-height",children:[e(c,{sm:"12",children:r("p",{children:["React wrapper for Chart.js. Click"," ",e("a",{href:"https://github.com/jerairrest/react-chartjs-2",target:"_blank",rel:"noopener noreferrer",children:"here"})," ","for github repo."]})}),e(c,{xl:"6",sm:"12",children:e(Z,{success:x,labelColor:t,gridLineColor:n})}),e(c,{xl:"6",sm:"12",children:e(ie,{info:o.info.main,labelColor:t,warning:o.warning.main,gridLineColor:n})}),e(c,{sm:"12",children:e(ee,{labelColor:t,gridLineColor:n,lineChartDanger:d,lineChartPrimary:l,warningColorShade:i})}),e(c,{lg:"6",sm:"12",children:e(te,{labelColor:t,gridLineColor:n})}),e(c,{lg:"6",sm:"12",children:e(se,{greyColor:j,labelColor:t,yellowColor:b,primary:o.primary.main,infoColorShade:H,warningColorShade:i,successColorShade:x})}),e(c,{sm:"12",children:e(ae,{labelColor:t,yellowColor:b,gridLineColor:n,primaryColorShade:f})}),e(c,{lg:"4",sm:"12",children:e(ne,{tooltipShadow:s,successColorShade:x,warningLightColor:p,primary:o.primary.main})}),e(c,{lg:"8",sm:"12",children:e(oe,{labelColor:t,yellowColor:b,gridLineColor:n,primary:o.primary.main,successColorShade:x})}),e(c,{sm:"12",children:e(re,{blueColor:T,labelColor:t,gridLineColor:n,blueLightColor:z,greyLightColor:F})})]})]})};export{ue as default};