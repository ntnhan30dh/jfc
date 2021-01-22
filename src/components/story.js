import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import chikenTender from "../images/chicken-tender_gif.gif"

// import Plx from "react-plx"
import ScrollAnimation from "react-animate-on-scroll"

const delayTime = {
  one: 250,
  two: 500,
  three: 750,
  four: 1000,
  five: 1250,
  six: 1500,
  seven: 1750,
  eight: 2000,
}

const Story = props => {
  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      chickenTender: file(relativePath: { eq: "chicken-tender.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 380) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  let nudge = props.menuState ? "nudge" : ""
  const imageData = data.bgBig.childImageSharp.fluid
  return (
    <section className={`storyContainer ${nudge}`}>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        //  backgroundColor={`#040e18`}
        className="bgContainer"
      >
        <div className="text" >
          <h1>Honestly <br/> good fried <br/> chicken.</h1>
          <h4>That brings out the honesty in you.</h4>
        </div>
      </BackgroundImage>
      
      <div className="storyDiv"id="story" >
        <div className="left">
          <div className="story-text">
            <span>our story</span>
          </div>
          <div className="red" id='scrolly-div'>
            <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.one}
              duration={0.5}
            >
              <h1>chicken</h1>
            </ScrollAnimation>
            <div className="main-div">
              <ScrollAnimation
                animateIn="bounceInRight"
                delay={delayTime.three}
                duration={0.5}
              >
                <h4>NO SECRET HERBS OR SPICES</h4>
              </ScrollAnimation>

              <div className="main-text">
                <span>
                  JUST
                  Jackson’s
                </span>
              </div>

              <ScrollAnimation
                animateIn="bounceInRight"
                delay={delayTime.four}
                duration={0.5}
              >
                <h4>No confidential buttermilk recipes.</h4>
              </ScrollAnimation>
            </div>

            <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.two}
              duration={0.5}
            >
              <h1>fried.</h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className="right">
          <div className="main-div">
            <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.five}
              duration={0.5}
            >
              <h3>
                Not born in Louisiana. <br /> Neither Kentucky. Nor Texas.{" "}
              </h3>
            </ScrollAnimation>
            <div className="img-div">
              {/* <Img fluid={data.chickenTender.childImageSharp.fluid} /> */}
              <img src={chikenTender} alt="tender" />
            </div>
            <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.six}
              duration={0.5}
            >
            {/* <div> */}
            <h3>
              {" "}
              NO MAJOR OF COLONELS. <br /> WITH HONEST ingredients{" "}
            </h3>
            {/* </div> */}
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={delayTime.seven}
            duration={0.5}
            className="hot-spicy"
          >
            <span>hot & spicy</span>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Story
