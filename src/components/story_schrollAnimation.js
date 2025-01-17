import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import chikenTender from "../images/chicken-tender_gif.gif"
import useSound from 'use-sound';
import fanfareSfx from '../sounds/eating-sound.m4a';

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
  const [play, { stop }] = useSound(fanfareSfx);
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
          <h1>Honestly <br/> good fried <br/> chicken</h1>
          <h4>That brings out the honesty in you.</h4>
        </div>
      </BackgroundImage>

   
       <div className="storyDiv"id="story"id='scrolly-div'onMouseEnter={play} onMouseLeave={stop} >
        <div className="left">
          <div className="story-text" >
            <span>our story</span>
          </div>
          <div className="red"  >
            <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.one}
              duration={0.5}
            >
              <h1>chicken.</h1>
            </ScrollAnimation>
            <div className="main-div">
              <ScrollAnimation
                animateIn="bounceInRight"
                delay={delayTime.three}
                duration={0.5}
                initiallyVisible={true}
              >
                <h4>NO SECRET HERBS OR SPICES.
                  <br/>
                  No confidential buttermilk recipes.
                </h4>
              </ScrollAnimation>    
              {/* <div className="main-text"> */}
              <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.four}
              duration={0.5}
             // initiallyVisible={true}
              className="main-text"
            >
                <h3>
                  JUST
                  Jackson’s
                </h3>
              </ScrollAnimation>

              {/* </div> */}
              <ScrollAnimation
                animateIn="bounceInRight"
                delay={delayTime.five}
                duration={0.5}
             
              >
                <h4>WITH HONEST ingredients</h4>
              </ScrollAnimation>
            </div>

            <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.six}
              duration={0.5}
            >
              <h1 style={{fontStyle: "italic"}}>fried.</h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className="right">
          <div className="main-div">
            <ScrollAnimation
              animateIn="bounceInRight"
              delay={delayTime.five}
              duration={0.5}
              initiallyVisible={true}
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
              initiallyVisible={true}
            >
            {/* <div> */}
            <h3>
              {" "}
              NO MAJOR OR COLONELS.
            </h3>
            {/* </div> */}
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={delayTime.three}
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
