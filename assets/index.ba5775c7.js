import{r as l,j as e,ca as T,o as t,cb as y,cc as b,cd as x,ce as A,cf as I,bX as H,ab as U,ac as o,bo as P,ae as u}from"./index.58424139.js";import{C as n}from"./index.011246cd.js";import{B as $}from"./index.b050f178.js";import{e as j,s as C,c as k,a as B,b as K,d as w}from"./02.a9eab6ae.js";import{c as R}from"./08.f1bba1b6.js";import{c as E}from"./06.93dcff5f.js";import{a as N}from"./04.2383cb01.js";import{J as z}from"./App.10c79363.js";const p=[{src:j,id:1},{src:C,id:2},{src:k,id:3}],J=()=>{const[r,c]=l.exports.useState(0),[a,i]=l.exports.useState(0),h=()=>{c(!0)},f=()=>{c(!1)},d=()=>{if(r)return;const s=a===p.length-1?0:a+1;i(s)},m=()=>{if(r)return;const s=a===0?p.length-1:a-1;i(s)},v=s=>{r||i(s)},S=p.map(s=>e(T,{onExiting:h,onExited:f,children:e("img",{src:s.src,className:"img-fluid",alt:s.id})},s.id));return t(y,{activeIndex:a,next:d,previous:m,keyboard:!1,children:[e(b,{items:p,activeIndex:a,onClickHandler:v}),S,e(x,{direction:"prev",directionText:"Previous",onClickHandler:m}),e(x,{direction:"next",directionText:"Next",onClickHandler:d})]})},g=[{src:B,id:1,header:"Slide 1",caption:"Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."},{src:R,id:2,header:"Slide 2",caption:"Tart macaroon marzipan I love souffl\xE9 apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."},{src:K,id:3,header:"Slide 3",caption:"Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin Marshmallow cake powder icing."}],D=()=>{const[r,c]=l.exports.useState(0),[a,i]=l.exports.useState(0),h=()=>{c(!0)},f=()=>{c(!1)},d=()=>{if(r)return;const s=a===g.length-1?0:a+1;i(s)},m=()=>{if(r)return;const s=a===0?g.length-1:a-1;i(s)},v=s=>{r||i(s)},S=g.map(s=>t(T,{onExiting:h,onExited:f,children:[e("img",{src:s.src,className:"img-fluid",alt:s.id}),e(A,{captionText:s.caption,captionHeader:e("span",{className:"text-white",children:s.header})})]},s.id));return t(y,{activeIndex:a,next:d,previous:m,keyboard:!1,interval:5e5,children:[e(b,{items:g,activeIndex:a,onClickHandler:v}),S,e(x,{direction:"prev",directionText:"Previous",onClickHandler:m}),e(x,{direction:"next",directionText:"Next",onClickHandler:d})]})},F=[{key:1,src:j,caption:"",altText:"Slide 1"},{key:2,src:C,caption:"",altText:"Slide 2"},{key:3,src:k,caption:"",altText:"Slide 3"}],M=()=>e(I,{items:F,keyboard:!1}),X=[{src:E,key:1,caption:"",altText:"Slide 1"},{src:N,key:2,caption:"",altText:"Slide 2"},{src:w,key:3,caption:"",altText:"Slide 3"}],Y=()=>e(I,{items:X,interval:"500",keyboard:!1}),q=[{src:C,key:1,caption:"",altText:"Slide 1"},{src:E,key:2,caption:"",altText:"Slide 2"},{src:k,key:3,caption:"",altText:"Slide 3"}],G=()=>e(I,{items:q,keyboard:!0}),L=[{src:N,key:1,caption:"",altText:"Slide 1"},{src:C,key:2,caption:"",altText:"Slide 2"},{src:w,key:3,caption:"",altText:"Slide 3"}],O=()=>e(I,{items:L,pause:"hover",keyboard:!1}),Q=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import sliderImage2 from '@src/assets/images/slider/02.jpg'
import sliderImage3 from '@src/assets/images/slider/03.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1
  },
  {
    src: sliderImage2,
    id: 2
  },
  {
    src: sliderImage3,
    id: 3
  }
]

const CarouselBasic = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img src={item.src} className='img-fluid' alt={item.id} />
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default CarouselBasic
    `})}),V=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/03.jpg'
import sliderImage2 from '@src/assets/images/slider/04.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    header: <span className="text-white">Slide 1 Header</span>
    caption: 'Cupcake ipsum dolor sit amet toffee lemon drops bonbon.'
  },
  {
    src: sliderImage2,
    id: 2,
    header: <span className="text-white">Slide 2 Header</span>
    caption: 'Cheesecake caramels wafer pie lollipop.'
  },
  {
    src: sliderImage3,
    id: 3,
    header: <span className="text-white">Slide 3 Header</span>
    caption: 'Candy canes toffee gummies souffl\xE9 fruitcake drag\xE9e icing.'
  }
]

const CarouselCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img src={item.src} className='img-fluid' alt={item.id} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={<span className="text-center">item.header</span>}
        />
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default CarouselCaptions
    `})}),W=e("pre",{children:e("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/06.jpg'
import sliderImage2 from '@src/assets/images/slider/02.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const items = [
  {
    src: sliderImage1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    altText: 'Slide 3',
  }
]

const CarouselUncontrolled = () => {
  return <UncontrolledCarousel items={items} />
}
export default CarouselUncontrolled
        `})}),Z=e("pre",{children:e("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/05.jpg'
import sliderImage2 from '@src/assets/images/slider/04.jpg'
import sliderImage3 from '@src/assets/images/slider/01.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
  }
]

const CarouselInterval = () => {
  return <UncontrolledCarousel items={images} interval='500' />
}
export default CarouselInterval`})}),_=e("pre",{children:e("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import { carouselKeyboard } from './CarouselSourceCode'
import sliderImage1 from '@src/assets/images/slider/04.jpg'
import sliderImage2 from '@src/assets/images/slider/01.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
  }
]

const CarouselKeyboard = () => {
  return <UncontrolledCarousel items={images} keyboard={false} />
}
export default CarouselKeyboard
            `})}),ee=e("pre",{children:e("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/02.jpg'
import sliderImage2 from '@src/assets/images/slider/06.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: <span className="text-white">Slide 1 Header</span>
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: <span className="text-white">Slide 2 Header</span>
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: <span className="text-white">Slide 3 Header</span>
  }
]

const CarouselPause = () => {
  return <UncontrolledCarousel items={images} pause='hover' />
}
export default CarouselPause
`})}),ce=()=>(l.exports.useEffect(()=>{H.highlightAll()},[]),t(l.exports.Fragment,{children:[e($,{title:"Carousel",data:[{title:"Components"},{title:"Carousel"}]}),t(U,{children:[e(o,{className:"mb-1",sm:"12",children:e(P,{color:"info",children:e("div",{className:"alert-body",children:t("p",{children:[e(z,{className:"me-1",size:14}),"Nested carousels are not supported."]})})})}),e(o,{md:"6",sm:"12",children:e(n,{title:"Basic Example",code:Q,children:e(J,{})})}),e(o,{md:"6",sm:"12",children:e(n,{title:"Captions Example",code:V,children:e(D,{})})}),e(o,{md:"6",sm:"12",children:t(n,{title:"Uncontrolled Example",code:W,children:[t(u,{children:["You don't have to manage state with ",e("code",{children:"UncontrolledCarousel"})," all you have to do is return it with your content."]}),e(M,{})]})}),e(o,{md:"6",sm:"12",children:t(n,{title:"Interval Example",code:Z,children:[t(u,{children:["Use ",e("code",{children:"Interval"})," prop to set interval between slides. default interval is ",e("strong",{children:"5000"}),"."]}),e(Y,{})]})}),e(o,{md:"6",sm:"12",children:t(n,{title:"Keyboard Example",code:_,children:[t(u,{children:["Use ",e("code",{children:"Keyboard"})," prop to control carousel with keyboard default is ",e("code",{children:"false"}),"."]}),e(G,{})]})}),e(o,{md:"6",sm:"12",children:t(n,{title:"Pause Example",code:ee,children:[t(u,{children:["Use ",e("code",{children:"pause"})," prop to pause carousel on hover."]}),e(O,{})]})})]})]}));export{ce as default};
