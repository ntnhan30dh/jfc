import React from "react"

import logo from "../images/logo_big.png"
import ig from "../images/ig.png"
import facebook from "../images/facebook.png"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FollowUs = () => {
  const data = useStaticQuery(graphql`
    {
      soMe1: file(relativePath: { eq: "soMe1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe2: file(relativePath: { eq: "soMe2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe3: file(relativePath: { eq: "soMe3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      soMe4: file(relativePath: { eq: "soMe4.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe5: file(relativePath: { eq: "soMe5.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe6: file(relativePath: { eq: "soMe6.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      soMe7: file(relativePath: { eq: "soMe7.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe8: file(relativePath: { eq: "soMe8.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe9: file(relativePath: { eq: "soMe9.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="followUsContainer" id="follow">
      <h2>
        Feeling tender? Or longing for burgers? <br /> Whatever your chicken
        choice, make it Jackson's.
      </h2>
      <div className="soMe-container">
        <Link
          to="https://www.instagram.com/jacksons_fried_chicken/"
          className=""
          target="_blank"
        >
          <div className="left">
            <span className="menu-sidebar">FOLLOW US</span>
          </div>
        </Link>

        <div className="main-soMe">
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe1.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe2.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe3.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe4.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe5.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe6.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe7.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe8.childImageSharp.fluid} />
            </Link>
          </div>
          <div className="pic">
            <Link
              to="https://www.instagram.com/jacksons_fried_chicken/"
              className=""
              target="_blank"
            >
              <Img fluid={data.soMe9.childImageSharp.fluid} />
            </Link>
          </div>
        </div>
        <Link
          to="https://www.instagram.com/jacksons_fried_chicken/"
          className=""
          target="_blank"
        >
          <div className="right">
            <span className="menu-sidebar">FOLLOW US</span>
          </div>
        </Link>
      </div>
      <div className="redDiv">
        {/* <div className="followUsText">
          <h4>follow us</h4>
          <div className="icons">
            <div className="img_div">
            <Link to="https://www.instagram.com/jacksons_fried_chicken/" target="_blank">
              <img src={ig} alt="logo" />
            </Link>
            </div>
            <div className="img_div">
              <img src={facebook} alt="logo" />
            </div>
          </div>
        </div> */}
        {/* <div className="soMe">
        <div className="pic">
          <Link to="https://www.instagram.com/jacksons_fried_chicken/" className="" target="_blank">
            <Img fluid={data.soMe2.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="pic">
          <Link to="https://www.instagram.com/jacksons_fried_chicken/" className="" target="_blank">
            <Img fluid={data.soMe1.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="pic">
          <Link to="https://www.instagram.com/jacksons_fried_chicken/" className="" target="_blank">
            <Img fluid={data.soMe3.childImageSharp.fluid} />
          </Link>
        </div>
      </div> */}
        <div className="top">
          <div className="right">
            {/* <h2>
            Feeling tender?<br/> Or longing for burgers? <br/>  Whatever your chicken <br/>
            choice, make it Jackson's.
            </h2> */}
          </div>
          <div className="left">
            <div className="img_div">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="bottom">
            {/* <h4>follow us</h4>
          <div className="icons">
            <div className="img_div">
            <Link to="https://www.instagram.com/jacksons_fried_chicken/" target="_blank">
              <img src={ig} alt="logo" />
            </Link>
            </div>
            <div className="img_div">
              <img src={facebook} alt="logo" />
            </div>
          </div> */}

            <ul>
              <li>
                <Link to="/imprint">Imprint</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy </Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="blackDiv">
        <ul>
          <li>
            <Link to="/imprint">Imprint</Link>
            </li>
            <li>
            <Link to="/privacy">Privacy Policy </Link>
            </li>
            <li>
            <Link to="/disclaimer">Disclaimer</Link>
            </li>
        </ul>
      </div> */}
    </section>
  )
}

export default FollowUs
