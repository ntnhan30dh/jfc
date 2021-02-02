import React from "react"
import logo from "../images/logo_big.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"
 import Sticky from "react-sticky-el"
//import { StickyContainer, Sticky } from 'react-sticky';

const Header = props => {
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  return (
    <Sticky  className="sticky">
    <nav className="nav">
      <div className="leftDiv">
        <Link to="/" >
        <div className="img_div">

          <img src={logo} alt="logo" />
        </div>
        </Link>
        <div className={`burgerMenu  ${change}`} onClick={props.toggleMenu} onKeyDown={props.toggleMenu} role = "button" tabIndex={-1}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <div className={`rightDiv row ${menuActive}`}>
        <ul>
          <li>
            <Link to="/#story">Our Story</Link>
          </li>
          <li>
            <Link to="/#menu">Menu</Link>
          </li>
          <li>
            <Link to="/#follow">Follow Us</Link>
          </li>
        </ul>
        <OrderNow />
      </div>
    </nav>
    </Sticky> 
  )
}

export default Header
