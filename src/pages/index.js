import React, { useState } from "react"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import FollowUs from "../components/followus"
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"

import "../styles/index.scss"

export default function Home() {
  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
   
    
  return (
    <div className="pageWrapper">
      <head>
      <title>JFC</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
    <Story toggleMenu={toggleMenu} menuState={menuActive}/>
    <Menu/>
    {/* <FollowUs/> */}
    
    </div>
  )
}
