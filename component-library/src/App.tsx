import React from 'react'
import './App.css'
import Banner from './Components/Banner'

function App() {

  return (
    <>
      <Banner style="success" title="Congratulations!" text="Your file has been saved!"></Banner>
      <Banner style="warning" title="Attention" text="That was kind of silly."></Banner>
      <Banner style="error" title="There is a problem with your application" text="It's simply all messed up."></Banner>
      <Banner style="info" title="Update Available" text="Just wanted to let you know that I love you."></Banner>
      <Banner style="success" title="Everything's Good"></Banner>
      <Banner style="warning" title="Uh Oh"></Banner>
      <Banner style="error" title="Womp Womp"></Banner>
      <Banner style="info" title="You're all up to date"></Banner>
    </>
  )
}

export default App
