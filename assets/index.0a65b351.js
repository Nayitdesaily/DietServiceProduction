import{o as t,j as a,r as n,bX as v,aa as h,ab as o,ad as e}from"./index.30301496.js";import{C as i}from"./index.3133ed02.js";import{B as u}from"./index.26a93516.js";import{A as r,ad as A,aK as c,bk as f,bl as I,ae as x,p as y,v as l}from"./App.58188f50.js";import{a as s}from"./avatar-s-20.3ee3e4a2.js";import{A as m}from"./index.2592f73b.js";import{i as g}from"./avatar-s-5.7a42c289.js";import{i as d}from"./avatar-s-7.0afb05bc.js";import{u as p}from"./avatar-s-10.277c264e.js";const P=()=>t("div",{className:"demo-inline-spacing",children:[a(r,{img:s,size:"sm"}),a(r,{img:s}),a(r,{img:s,size:"lg"}),a(r,{img:s,size:"xl"})]}),z=()=>t("div",{className:"demo-inline-spacing",children:[a(r,{color:"primary",icon:a(A,{size:14})}),a(r,{color:"secondary",icon:a(c,{size:14})}),a(r,{color:"success",icon:a(f,{size:14})}),a(r,{color:"light-danger",icon:a(I,{size:14})}),a(r,{color:"light-warning",icon:a(x,{size:14})}),a(r,{color:"light-info",icon:a(y,{size:14})})]}),N=[{img:g},{img:d},{img:p},{img:l},{img:s}],C=()=>a(m,{data:N}),b=()=>t("div",{className:"demo-inline-spacing",children:[a(r,{color:"primary",content:"PI"}),a(r,{color:"secondary",content:"PI"}),a(r,{color:"success",content:"PI"}),a(r,{color:"danger",content:"PI"}),a(r,{color:"warning",content:"PI"}),a(r,{color:"info",content:"PI"})]}),j=()=>t("div",{className:"demo-inline-spacing",children:[a(r,{img:s,status:"offline"}),a(r,{color:"info",content:"LD",status:"busy"}),a(r,{color:"light-primary",icon:a(c,{size:14}),status:"away"}),a(r,{color:"light-success",content:"AB",status:"online"})]}),w=()=>t("div",{className:"demo-inline-spacing",children:[a(r,{color:"light-primary",content:"Peter Ingraham",size:"sm",initials:!0}),a(r,{color:"light-secondary",content:"Peter Ingraham",initials:!0}),a(r,{color:"light-success",content:"Peter Ingraham",size:"lg",initials:!0}),a(r,{color:"light-danger",content:"Peter Ingraham",size:"xl",initials:!0})]}),G=()=>t("div",{className:"demo-inline-spacing",children:[a(r,{color:"light-primary",content:"PI"}),a(r,{color:"light-secondary",content:"PI"}),a(r,{color:"light-success",content:"PI"}),a(r,{color:"light-danger",content:"PI"}),a(r,{color:"light-warning",content:"PI"}),a(r,{color:"light-info",content:"PI"})]}),S=[{title:"Vinnie Mostowy",img:g},{title:"Elicia Rieske",img:d},{title:"Julee Rossignol",img:p},{title:"Darcey Nooner",img:l},{title:"Jenny Looper",img:s}],q=()=>a(m,{data:S}),L=a("pre",{children:a("code",{className:"language-jsx",children:`

import Avatar from '@components/avatar'
import avatarImg from '@src/assets/images/portrait/small/avatar-s-20.jpg'

const AvatarSizes = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar img={avatarImg} size='sm' />
      <Avatar img={avatarImg} />
      <Avatar img={avatarImg} size='lg' />
      <Avatar img={avatarImg} size='xl' />
    </div>
  )
}
export default AvatarSizes
`})}),k=a("pre",{children:a("code",{className:"language-jsx",children:`

import Avatar from '@components/avatar'

const AvatarInitials = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='light-primary' content='Peter Ingraham' initials />
      <Avatar color='light-secondary' content='Peter Ingraham' initials />
      <Avatar color='light-success' content='Peter Ingraham' initials />
      <Avatar color='light-danger' content='Peter Ingraham' initials />
    </div>
  )
}
export default AvatarInitials
`})}),U=a("pre",{children:a("code",{className:"language-jsx",children:`

import Avatar from '@components/avatar'

const AvatarColors = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='primary' content='PI' />
      <Avatar color='secondary' content='PI' />
      <Avatar color='success' content='PI' />
      <Avatar color='danger' content='PI' />
      <Avatar color='warning' content='PI' />
      <Avatar color='info' content='PI' />
    </div>
  )
}
export default AvatarColors
`})}),D=a("pre",{children:a("code",{className:"language-jsx",children:`

import Avatar from '@components/avatar'

const AvatarLightColors = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='light-primary' content='PI' />
      <Avatar color='light-secondary' content='PI' />
      <Avatar color='light-success' content='PI' />
      <Avatar color='light-danger' content='PI' />
      <Avatar color='light-warning' content='PI' />
      <Avatar color='light-info' content='PI' />
    </div>
  )
}
export default AvatarLightColors
`})}),H=a("pre",{children:a("code",{className:"language-jsx",children:`

import Avatar from '@components/avatar'
import { GitHub, Calendar, Inbox, Camera, Award, Star } from 'react-feather'

const AvatarIcons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='primary' icon={<Calendar size={14} />} />
      <Avatar color='secondary' icon={<GitHub size={14} />} />
      <Avatar color='success' icon={<Inbox size={14} />} />
      <Avatar color='light-danger' icon={<Camera size={14} />} />
      <Avatar color='light-warning' icon={<Award size={14} />} />
      <Avatar color='light-info' icon={<Star size={14} />} />
    </div>
  )
}
export default AvatarIcons
`})}),R=a("pre",{children:a("code",{className:"language-jsx",children:`

import Avatar from '@components/avatar'
import { GitHub } from 'react-feather'
import avatarImg from '@src/assets/images/portrait/small/avatar-s-20.jpg'

const AvatarStatus = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar img={avatarImg} status='offline' />
      <Avatar color='info' content='LD' status='busy' />
      <Avatar color='light-primary' icon={<GitHub size={14} />} status='away' />
      <Avatar color='light-success' content='AB' status='online' />
    </div>
  )
}
export default AvatarStatus
`})}),B=a("pre",{children:a("code",{className:"language-jsx",children:`

import AvatarGroup from '@components/avatar-group'

const data = [
  {
    img: require('@src/assets/images/portrait/small/avatar-s-5.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-7.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-10.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-11.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-20.jpg')
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
`})}),J=a("pre",{children:a("code",{className:"language-jsx",children:`

import AvatarGroup from '@components/avatar-group'

const data = [
  {
    title: 'Vinnie Mostowy',
    img: require('@src/assets/images/portrait/small/avatar-s-5.jpg')
  },
  {
    title: 'Elicia Rieske',
    img: require('@src/assets/images/portrait/small/avatar-s-7.jpg')
  },
  {
    title: 'Julee Rossignol',
    img: require('@src/assets/images/portrait/small/avatar-s-10.jpg')
  },
  {
    title: 'Darcey Nooner',
    img: require('@src/assets/images/portrait/small/avatar-s-11.jpg')
  },
  {
    title: 'Jenny Looper',
    img: require('@src/assets/images/portrait/small/avatar-s-20.jpg')
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
`})}),O=()=>(n.exports.useEffect(()=>{v.highlightAll()},[]),t(n.exports.Fragment,{children:[a(u,{title:"Avatar",data:[{title:"Components"},{title:"Avatar"}]}),t(h,{className:"match-height",children:[a(o,{xl:"6",lg:"12",children:t(i,{title:"Sizes",code:L,children:[t(e,{className:"mb-0",children:["Use ",a("code",{children:"size=[sm | lg | xl]"})," prop to change avatar's size. You can also use ",a("code",{children:"height"})," &"," ",a("code",{children:"width"})," prop for a custom size"]}),a(P,{})]})}),a(o,{xl:"6",lg:"12",children:t(i,{title:"Intials",code:k,children:[t(e,{className:"mb-0",children:["Use prop ",a("code",{children:"initials"})," to show only Initials of content."]}),a(w,{})]})}),a(o,{xl:"6",lg:"12",children:t(i,{title:"Colors",code:U,children:[t(e,{className:"mb-0",children:["Use prop ",a("code",{children:"color=[primary | success | danger | info | warning | dark]"})," to change background color of your avatar."]}),a(b,{})]})}),a(o,{xl:"6",lg:"12",children:t(i,{title:"Light Colors",code:D,children:[t(e,{className:"mb-0",children:["Use prop"," ",a("code",{children:"color=[light-primary | light-success | light-danger | light-info | light-warning | light-dark]"})," ","to change background color of your avatar."]}),a(G,{})]})}),a(o,{xl:"6",lg:"12",children:t(i,{title:"Icons",code:H,children:[t(e,{className:"mb-0",children:["Use prop ",a("code",{children:"icon"})," to create avatar with icon."]}),a(z,{})]})}),a(o,{xl:"6",sm:"12",children:t(i,{title:"Status",code:R,children:[t(e,{className:"mb-0",children:["Use prop ",a("code",{children:"status=[online | offline | away | busy]"})," to create avatar with status."]}),a(j,{})]})}),a(o,{xl:"6",sm:"12",children:t(i,{title:"Avatar Group",code:B,children:[t(e,{children:["Use ",a("code",{children:"<AvatarGroup />"})," component and pass ",a("code",{children:"data"})," prop to create a grouped avatar."]}),a(e,{children:"Data prop must be an array of object which contains props to be passed on avatar."}),a(C,{})]})}),a(o,{xl:"6",sm:"12",children:t(i,{title:"Avatar Group Tooltip",code:J,children:[t(e,{children:["Add an extra property of ",a("code",{children:"title"})," in the data you pass in ",a("code",{children:"<AvatarGroup />"})," to create avatar group with tooltip."]}),a(q,{})]})})]})]}));export{O as default};
