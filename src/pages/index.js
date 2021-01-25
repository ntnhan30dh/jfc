import React, { useState } from "react"
import Header from "../components/header"
import Story from "../components/story_schrollAnimation"
import Menu from "../components/menu"
import FollowUs from "../components/followus"
import CookieConsent from "react-cookie-consent"

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
    <FollowUs/>
    <CookieConsent
        location="bottom"
        buttonText="I AGREE"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
       // debug={true}
      >
        <span className="cookie_consent"> We use cookies needed to run the website and for analytical purposes.{" "}
          <a href="/">  
          More information
          </a>
          </span>
      </CookieConsent>
    </div>
  )
}
