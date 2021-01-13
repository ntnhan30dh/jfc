import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import Slider from "react-slick"

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
      tender1: file(relativePath: { eq: "tender-1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sides1: file(relativePath: { eq: "sides-1.png" }) {
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
    <section className="menuContainer">
      <div className="top-text">
        <h4>
          Crunchy, juicy and tender - Jackson's fried chicken and burgers tick
          all the boxes.
        </h4>
        <div className="text-div">Browse and order your favourites today</div>
      </div>
      <div className="main-div">
        <div className="left">
          <span>MENU MENU MENU MENU MENU MENU MENU</span>
        </div>
        <div className="main-menu">
          <div className="top menu-item">
            <div className="left">
              <h1>FRIED CHICKEN</h1>
              <h4>
                Jackson’s Wings <br />
                Jackson’s Tenders
              </h4>
            </div>
            <div className="right">
              <div className="carousel">
                <Slider {...settings}>
                  <div>
                    <Img fluid={data.friedChicken1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.tender1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.sides1.childImageSharp.fluid} />
                  </div>
                </Slider>
              </div>
            </div>
            <span> juicy</span>
          </div>
          <div className="middle menu-item">
            <div className="left">
              <h1>BURGERS</h1>
              <h4>
                Jackson’s Crunchy Burger <br />
                Jackson’s Cheezy Burger <br />
                Hot’n'Cheezy Burger <br />
                Double Crunchy Burger <br />
              </h4>
            </div>
            <div className="right">
              <div className="carousel">
                <Slider {...settings}>
                  <div>
                    <Img fluid={data.friedChicken1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.tender1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.sides1.childImageSharp.fluid} />
                  </div>
                </Slider>
              </div>
            </div>
            <span> tender</span>
          </div>
          <div className="bottom menu-item">
            <div className="left">
              <h1>SIDES</h1>
              <h4>
                Criss Cross Fries <br />
                Steakhouse Fries <br />
                Onion Rings <br />
                Mixed Green Salad
              </h4>
            </div>
            <div className="right">
              <div className="carousel">
                <Slider {...settings}>
                  <div>
                    <Img fluid={data.friedChicken1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.tender1.childImageSharp.fluid} />
                  </div>
                  <div>
                    <Img fluid={data.sides1.childImageSharp.fluid} />
                  </div>
                </Slider>
              </div>
            </div>
            <span> crunchy</span>
          </div>
        </div>
        <div className="right">
          <span>MENU MENU MENU MENU MENU MENU MENU</span>
        </div>
      </div>
    </section>
  )
}

export default Menu
