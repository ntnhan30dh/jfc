import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"

import good from "../images/badge_good.png"
import goodness from "../images/badge_goodness.png"
import tender from "../images/badge_tender.png"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      friedChicken1: file(relativePath: { eq: "fried-chicken-1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      friedChicken2: file(relativePath: { eq: "friedChicken2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      friedChicken3: file(relativePath: { eq: "friedChicken3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      tender1: file(relativePath: { eq: "tender-1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burger1: file(relativePath: { eq: "burger1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burger2: file(relativePath: { eq: "burger2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burger3: file(relativePath: { eq: "burger3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burger4: file(relativePath: { eq: "burger4.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sides1: file(relativePath: { eq: "sides1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sides2: file(relativePath: { eq: "sides2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sides3: file(relativePath: { eq: "sides3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sides4: file(relativePath: { eq: "sides4.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <div
        className="dot"
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: "1px solid white",
        }}
      >
        {/* {i + 1} */}
      </div>
    ),
  }
  return (
    <section className="menuContainer" id="menu">
      <div className="top-text">
        <h4>
          Crunchy, juicy and tender - Jackson's fried chicken and burgers tick
          all the boxes.
        </h4>
        <div className="text-div">
          <span>Browse and order your favourites today</span>
        </div>
      </div>
      <div className="main-div">
        {" "}
        <div className="left">
          <span className="menu-sidebar">
            MENU 
          </span>
        </div>
        <div className="main-menu">
          <div className="top menu-item">
            <div className="badgeDiv">
              <img src={tender} alt="logo" />
            </div>
            <div className="left">
              <div className="text-container">
                <h1>FRIED CHICKEN</h1>
                <div className="border">
                  <h1>FRIED CHICKEN</h1>
                </div>
                <h4>Jackson’s Tenders</h4>
                <h4>Jackson’s Wings</h4>
              </div>
            </div>
            <div className="right">
              <div className="carousel">
                <Slider {...settings}>
                  {/* <div>
                    <Img fluid={data.friedChicken1.childImageSharp.fluid} />
                  </div> */}
                  <div>
                    <Img fluid={data.friedChicken2.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.friedChicken3.childImageSharp.fluid} />
                  </div>
                </Slider>
                <span> juicy</span>
              </div>
            </div>
          </div>
          <div className="middle menu-item">
          <div className="badgeDiv_middle">
              <img src={goodness} alt="logo" />
            </div>
            <div className="left">
              <div className="text-container">
                <h1>BURGERS</h1>
                <div className="border">
                  <h1>BURGERS</h1>
                </div>
                <h4>Jackson’s Crunchy Burger</h4>
                <h4>Jackson’s Cheezy Burger</h4>
                <h4>Double Crunchy Burger</h4>
                <h4>Hot’n'Cheezy Burger</h4>
              </div>
            </div>
            <div className="right">
              <div className="carousel">
                <Slider {...settings}>
                  <div>
                    <Img fluid={data.burger1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.burger2.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.burger3.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.burger4.childImageSharp.fluid} />
                  </div>
                </Slider>
                <span> tender</span>
              </div>
            </div>
          </div>
          <div className="bottom menu-item">
            <div className="badgeDiv">
              <img src={good} alt="logo" />
            </div>
            <div className="left">
              <div className="text-container">
                <h1>SIDES</h1>
                <div className="border">
                  <h1>SIDES</h1>
                </div>
                <h4>Mixed Green Salad</h4>
                <h4>Steakhouse Fries</h4>
                <h4>Criss Cross Fries</h4>
                <h4>Onion Rings</h4>
              </div>
            </div>
            <div className="right">
              <div className="carousel">
                <Slider {...settings}>
                  <div>
                    <Img fluid={data.sides1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.sides2.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.sides3.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.sides4.childImageSharp.fluid} />
                  </div>
                </Slider>
                <span className="crunchy-text"> crunchy</span>
              </div>
            </div>
          </div>
        </div>
        {/* <Sticky> */}
        <div className="right">
          <span className="menu-sidebar">
            MENU 
          </span>
        </div>
        {/* </Sticky> */}
      </div>
    </section>
  )
}

export default Menu
