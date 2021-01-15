import React from "react"

import logo from "../images/logo.png"
import ig from "../images/ig.png"
import facebook from "../images/facebook.png"

const FollowUs = () => {
  return (
    <section className="followUsContainer">
      <div className="redDiv">
        <div className="top">
          <div className="left">
            <div className="img_div">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="right">
            <h2>
            Feeling tender? Or longing for burgers? Whatever your chicken
            choice, make it Jackson's
            </h2>
          </div>
        </div>
        <div className="bottom">
          <h4>follow us</h4>
          <div className="icons">
            <div className="img_div">
              <img src={ig} alt="logo" />
            </div>
            <div className="img_div">
              <img src={facebook} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="blackDiv">
        <ul>
          <li>Impressum</li>
          <li>Privacy Policy</li>
          <li>Terms & conditions</li>
        </ul>
      </div>
    </section>
  )
}

export default FollowUs
