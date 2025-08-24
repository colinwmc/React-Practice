import React from 'react'
import { FaCircleCheck, FaCircleXmark, FaCircleInfo, FaTriangleExclamation, FaCat, FaFrog, FaRocket } from "react-icons/fa6";
import './App.css'
import Banner from './Components/Banner'
import Badge from './Components/Badge'
import Card from './Components/Card'

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
        <Badge style='square'><FaCircleInfo style={{ marginRight: "4px" }} />Badge with other element in it</Badge>
      </div>
      <div className='display-box'>
        <div className='display-title'>Cards</div>
        <div className='flex'>
          <Card>
            <h2 className='title1'>Title of Your Card</h2>
            <p className='text1'>The text is easy to display here.</p>
          </Card>
          <Card icon={<FaRocket />} slotColor='navy' iconColor='goldenrod'>
            <div className='flex'>
              <h2 className='title2'>Title</h2>
              <p className='text2'>Simply as much as you want to put in here. No matter the layout or how many lines it takes up. It could go on forever, honestly. The card will just keep getting bigger, and bigger, and even bigger than that. Don't believe me? Go on. Try it for yourself.</p>
            </div>
          </Card>

          <Card icon={<FaFrog />} slotColor='forestgreen' iconColor='pink'>
            <h2 className='title3'>This is a #FrogBox</h2>
            <div className='frogBox'><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /><FaFrog /></div>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default App
