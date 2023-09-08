import{p as c,o as n,aO as T,aQ as S,j as s,ad as C,r as o,aj as p,c3 as v,aa as h,ab as t}from"./index.365e3ad1.js";import{A as k,m as z,b2 as R,ay as D,aa as B,ao as A,E as O,M as E,bb as F,a9 as U,ae as q,bc as L,bd as j,be as I,bf as M,bg as N,aV as g}from"./App.cc007f5c.js";import{O as P,P as G,S as H}from"./ProfitLineChart.a4e47efd.js";import{_ as Q}from"./react-apexcharts.min.6523a57f.js";import{l as V,a as w,S as W,O as _}from"./SubscribersGained.131529b5.js";import{B as $}from"./index.24adaabe.js";import{S as d}from"./StatsVertical.c4b296d3.js";import{S as m}from"./StatsHorizontal.52b99b2d.js";const u=({icon:e,color:a,stats:r,statTitle:i,series:l,options:f,type:b,height:x,...y})=>n(T,{...y,children:[n(S,{className:"align-items-start pb-0",children:[n("div",{children:[s("h2",{className:"fw-bolder",children:r}),s(C,{children:i})]}),s(k,{className:"avatar-stats p-50 m-0",color:`light-${a}`,icon:e})]}),s(Q,{options:f,series:l,type:b,height:x||100})]});u.propTypes={type:c.exports.string,height:c.exports.string,options:c.exports.object,icon:c.exports.element.isRequired,color:c.exports.string.isRequired,stats:c.exports.string.isRequired,series:c.exports.array.isRequired,statTitle:c.exports.string.isRequired};u.defaultProps={options:V,color:"primary"};const J=({warning:e})=>{const[a,r]=o.exports.useState(null);o.exports.useEffect(()=>{p.get("/card/card-statistics/newsletter").then(l=>r(l.data))},[]);const i={chart:{id:"newsletter",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[e],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#ffc085"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return a!==null?s(u,{icon:s(z,{size:21}),color:"warning",stats:"28.7k",statTitle:"Newsletter",series:a.series,type:"line",options:i}):null},K=()=>{const[e,a]=o.exports.useState(null);return o.exports.useEffect(()=>{p.get("/card/card-statistics/site-traffic").then(r=>a(r.data))},[]),e!==null?s(u,{icon:s(R,{size:21}),color:"primary",stats:"78.9k",statTitle:"Site Traffic",series:e.series,type:"line"}):null},X=({success:e})=>{const[a,r]=o.exports.useState(null);o.exports.useEffect(()=>{p.get("/card/card-statistics/active-users").then(l=>r(l.data))},[]);const i={chart:{id:"activeUsers",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[e],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#55DD92"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return a!==null?s(u,{icon:s(D,{size:21}),color:"success",stats:"659.8k",statTitle:"Active Users",series:a.series,options:i,type:"line"}):null},Y=({danger:e})=>{const[a,r]=o.exports.useState(null),i={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[e],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return o.exports.useEffect(()=>{p.get("/card/card-statistics/sales").then(l=>r(l.data))},[]),a!==null?s(w,{icon:s(B,{size:21}),color:"danger",stats:a.analyticsData.sales,statTitle:"Quarterly Sales",options:i,series:a.series,type:"area"}):null},Z=({kFormatter:e,success:a})=>{const[r,i]=o.exports.useState(null),l={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[a],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return o.exports.useEffect(()=>{p.get("/card/card-statistics/revenue").then(f=>i(f.data))},[]),r!==null?s(w,{icon:s(A,{size:21}),color:"success",stats:e(r.analyticsData.revenue),statTitle:"Revenue Generated",options:l,series:r.series,type:"area"}):null},ns=()=>{const e=o.exports.useContext(v);return n(o.exports.Fragment,{children:[s($,{title:"Statistics Cards",data:[{title:"Cards"},{title:"Statistics Cards"}]}),n(h,{children:[s(t,{lg:"2",xs:"6",children:s(P,{warning:e.colors.warning.main})}),s(t,{lg:"2",xs:"6",children:s(G,{info:e.colors.info.main})}),s(t,{lg:"8",sm:"12",children:s(H,{cols:{md:"3",sm:"6",xs:"12"}})})]}),n(h,{children:[s(t,{xl:"2",md:"4",sm:"6",children:s(d,{icon:s(O,{size:21}),color:"info",stats:"36.9k",statTitle:"Views"})}),s(t,{xl:"2",md:"4",sm:"6",children:s(d,{icon:s(E,{size:21}),color:"warning",stats:"12k",statTitle:"Comments"})}),s(t,{xl:"2",md:"4",sm:"6",children:s(d,{icon:s(F,{size:21}),color:"danger",stats:"97.8k",statTitle:"Orders"})}),s(t,{xl:"2",md:"4",sm:"6",children:s(d,{icon:s(U,{size:21}),color:"primary",stats:"26.8",statTitle:"Bookmarks"})}),s(t,{xl:"2",md:"4",sm:"6",children:s(d,{icon:s(q,{size:21}),color:"success",stats:"689",statTitle:"Reviews"})}),s(t,{xl:"2",md:"4",sm:"6",children:s(d,{icon:s(L,{size:21}),color:"danger",stats:"2.1k",statTitle:"Returns"})})]}),n(h,{children:[s(t,{lg:"3",sm:"6",children:s(m,{icon:s(j,{size:21}),color:"primary",stats:"86%",statTitle:"CPU Usage"})}),s(t,{lg:"3",sm:"6",children:s(m,{icon:s(I,{size:21}),color:"success",stats:"1.2gb",statTitle:"Memory Usage"})}),s(t,{lg:"3",sm:"6",children:s(m,{icon:s(M,{size:21}),color:"danger",stats:"0.1%",statTitle:"Downtime Ratio"})}),s(t,{lg:"3",sm:"6",children:s(m,{icon:s(N,{size:21}),color:"warning",stats:"13",statTitle:"Issues Found"})})]}),n(h,{children:[s(t,{lg:"3",sm:"6",children:s(W,{kFormatter:g})}),s(t,{lg:"3",sm:"6",children:s(Z,{kFormatter:g,success:e.colors.success.main})}),s(t,{lg:"3",sm:"6",children:s(Y,{danger:e.colors.danger.main})}),s(t,{lg:"3",sm:"6",children:s(_,{kFormatter:g,warning:e.colors.warning.main})})]}),n(h,{children:[s(t,{lg:"4",sm:"6",children:s(K,{})}),s(t,{lg:"4",sm:"6",children:s(X,{success:e.colors.success.main})}),s(t,{lg:"4",sm:"6",children:s(J,{warning:e.colors.warning.main})})]})]})};export{ns as default};