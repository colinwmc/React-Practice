import React from 'react'
import { FaCircleCheck, FaCircleXmark, FaCircleInfo, FaTriangleExclamation } from "react-icons/fa6";
import './App.css'
import Banner from './Components/Banner'
import Badge from './Components/Badge'

function App() {

  return (
    <div className='showcase'>
    <div className='display-box'>
      <div className='display-title'>Banners with variations</div>
      <Banner style="success" title="Congratulations!" text="Your file has been saved!"></Banner>
      <Banner style="warning" title="Attention" text="That was kind of silly."></Banner>
      <Banner style="error" title="There is a problem with your application" text="It's simply all messed up."></Banner>
      <Banner style="info" title="Update Available" text="Just wanted to let you know that I love you."></Banner>
      <Banner style="success" title="Everything's Good"></Banner>
      <Banner style="warning" title="Uh Oh"></Banner>
      <Banner style="error" title="Womp Womp"></Banner>
      <Banner style="info" title="You're all up to date"></Banner>
      </div>
      <div className='display-box'>
      <div className='display-title'>Badges with variations</div>
      <Badge style='square'>Square Badge</Badge>
      <Badge style='pill'>Pill Badge</Badge>
      <Badge style='pill' color='indigo'>Badge where I specifiy the color</Badge>
      <Badge style='pill' color='yellow'>Badge where I specifiy the color</Badge>
      <Badge style='square' color='purple'>Badge where I specifiy the color</Badge>
      <Badge style='pill' color='green'>Badge where I specifiy the color</Badge>
      <Badge style='square' color='pink'>Badge where I specifiy the color</Badge>
      <Badge style='pill'>Badge where the color is randomly selected</Badge>
      <Badge style='square'><FaCircleInfo style={{marginRight: "4px"}} />Badge with other element in it</Badge>
      </div>
    </div>
  )
}

export default App
