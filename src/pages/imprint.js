import React, { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import CookieConsent from "react-cookie-consent"

import "semantic-ui-css/semantic.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/index.scss"
export default function Home() {
  let [menuActive, setmenuActive] = useState(false)
  const toggleMenu = () => {
    setmenuActive(!menuActive)
  }

  return (
    <div className="pageWrapper">
      <head>
        <title>JFC</title>
      </head>
      <Header toggleMenu={toggleMenu} menuState={menuActive} />
      <div className="legalInfo-div">
        <h1>Imprint</h1>
        <h2>Editorial Responsibility</h2>
        <p>
          Delivery Hero SE <br />
          Information according to § 5 TMG (Telekommunikationsgesetz) <br />
          Oranienburger Straße 70
          <br />
          10117 Berlin
          <br />
          Germany
        </p>
        <h3>Management Board</h3>
        <ul>
          <li>
            Niklas Östberg (CEO) <br />
          </li>
          <li>
            Emmanuel Thomassin (CFO) <br />
          </li>
        </ul>
        <h3>Supervisory Board</h3>
        <ul>
          <li>Dr. Martin Enderle (Chairman)</li>
        </ul>
        <h3>Contact</h3>
        <p>
          Phone: +49 (30) 54 44 59 000 <br />
          Email: hello@jacksons-fried-chicken.com
        </p>
        <p>
          Registergericht/district court: Amtsgericht Berlin-Charlottenburg /
          Local Court Charlottenburg Berlin <br />
          Handelsregister/Commercial Register: HRB 198015 B<br />
          Umsatzsteuer-Identifikationsnummer/ VAT–ID No.: DE 815294913 <br />
          Responsible for the content according to § 55 RStV
          (Rundfunkstaatsvertrag / Interstate Broadcasting Agreement): Niklas
          Östberg
        </p>
      </div>
      <Footer/>
      <CookieConsent
        location="bottom"
        buttonText="I AGREE"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        // debug={true}
      >
        <span className="cookie_consent">
          {" "}
          We use cookies needed to run the website and for analytical purposes.{" "}
          <a href="/">More information</a>
        </span>
      </CookieConsent>
    </div>
  )
}
