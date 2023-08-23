import{r as o,aj as d,j as t,o as m,k as f,bX as S,aa as h,ab as i}from"./index.8ea34c3d.js";import{C as l}from"./index.dfd28a03.js";import{B as C}from"./index.7e655635.js";import{bj as a}from"./App.420b7a59.js";import{i as x}from"./avatar-s-1.e06db07a.js";import{a as A,i as j}from"./avatar-s-2.a635d485.js";import{i as y}from"./avatar-s-3.2b17fa22.js";import{i as v}from"./avatar-s-5.7a42c289.js";import{i as T}from"./avatar-s-6.f63eadb1.js";const L=()=>{const[e,s]=o.exports.useState([]);return o.exports.useEffect(()=>{d.get("/api/autocomplete/data").then(r=>s(r.data.autoComplete))},[]),e.length?t(a,{suggestions:e,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"}):null},H=()=>{const[e]=o.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return t(a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",suggestions:e,className:"form-control"})},N=()=>{const[e]=o.exports.useState([{name:"Jake Shelton",img:x},{name:"Edith Baldwin",img:A},{name:"Jennifer Wolfe",img:y},{name:"Emily Washington",img:j},{name:"Heather Green",img:T},{name:"Brian Moore",img:v}]);return t(a,{filterKey:"name",placeholder:"Type 'a'",className:"form-control",suggestions:e,customRender:(s,r,n,c,g,u)=>m("li",{onMouseEnter:()=>u(n.indexOf(s)),className:f("suggestion-item",{active:n.indexOf(s)===c}),onClick:p=>{g(null,p)},children:[t("img",{src:s.img,alt:s.name,height:"32",width:"32",className:"me-1"}),t("span",{children:s.name})]},r)})},R=()=>{const[e]=o.exports.useState([{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]);return t(a,{grouped:!0,filterKey:"title",placeholder:"Type 'c'",className:"form-control",suggestions:e,filterHeaderKey:"groupTitle"})},P=()=>{const[e]=o.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return t(a,{suggestions:e,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})},E=()=>{const[e]=o.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return t(a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",className:"form-control",suggestions:e,defaultSuggestions:!0})},J=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteBasic = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteBasic
`})}),K=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteSections = () => {
  const [suggestions] = useState([
    {
      groupTitle: '1970s',
      data: [
        {
          title: 'C'
        }
      ]
    },
    {
      groupTitle: '1980s',
      data: [
        {
          title: 'C++'
        },
        {
          title: 'Perl'
        }
      ]
    },
    {
      groupTitle: '1990s',
      data: [
        {
          title: 'Haskell'
        },
        {
          title: 'Python'
        },
        {
          title: 'Java'
        },
        {
          title: 'Javascript'
        },
        {
          title: 'PHP'
        },
        {
          title: 'Ruby'
        }
      ]
    },
    {
      groupTitle: '2000s',
      data: [
        {
          title: 'C#'
        },
        {
          title: 'Scala'
        },
        {
          title: 'Clojure'
        },
        {
          title: 'Go'
        }
      ]
    },
    {
      groupTitle: '2010s',
      data: [
        {
          title: 'Elm'
        }
      ]
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      filterHeaderKey='groupTitle'
      grouped={true}
      placeholder="Type 'c'"
    />
  )
}
export default AutoCompleteSections
`})}),B=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AutoComplete from '@components/autocomplete'

const AutoCompleteAjax = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    axios
      .get('/api/autocomplete/data')
      .then(response => setSuggestions(response.data.autoComplete))
  }, [])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder='Search for any of the top 250 IMDB movies'
    />
  )
}
export default AutoCompleteAjax
`})}),M=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import classnames from 'classnames'
import AutoComplete from '@components/autocomplete'
import img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'

const AutoCompleteRender = () => {
  const [suggestions] = useState([
    {
      name: 'Jake Shelton',
      img: img1
    },
    {
      name: 'Edith Baldwin',
      img: img2
    },
    {
      name: 'Jennifer Wolfe',
      img: img3
    },
    {
      name: 'Emily Washington',
      img: img4
    },
    {
      name: 'Heather Green',
      img: img6
    },
    {
      name: 'Brian Moore',
      img: img5
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='name'
      placeholder="Type 'a'"
      customRender={(
        suggestion,
        i,
        filteredData,
        activeSuggestion,
        onSuggestionItemClick,
        onSuggestionItemHover
      ) => (
        <li
          className={classnames('suggestion-item', {
            active: filteredData.indexOf(suggestion) === activeSuggestion
          })}
          key={i}
          onMouseEnter={() =>
            onSuggestionItemHover(filteredData.indexOf(suggestion))
          }
          onClick={e => {
            onSuggestionItemClick(null, e)
          }}
        >
          <img
            src={suggestion.img}
            alt={suggestion.name}
            height='32'
            width='32'
            className='me-1'
          />
          <span>{suggestion.name}</span>
        </li>
      )}
    />
  )
}
export default AutoCompleteRender
`})}),k=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteDefaultSuggestions = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      defaultSuggestions={true}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteDefaultSuggestions
`})}),D=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteSearchLimit = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={2}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteSearchLimit
`})}),q=()=>(o.exports.useEffect(()=>{S.highlightAll()},[]),m(o.exports.Fragment,{children:[t(C,{title:"Auto Complete",data:[{title:"Components"},{title:"Auto Complete"}]}),m(h,{children:[t(i,{xl:"6",lg:"12",children:t(l,{title:"Basic",code:J,children:t(H,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Sections",code:K,children:t(R,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Ajax",code:B,children:t(L,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Custom Render",code:M,children:t(N,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Default Suggestions",code:k,children:t(E,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Search Limit",code:D,children:t(P,{})})})]})]}));export{q as default};
