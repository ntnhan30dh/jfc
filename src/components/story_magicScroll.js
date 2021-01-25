import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import chikenTender from "../images/chicken-tender_gif.gif"

// import Plx from "react-plx"
//import ScrollAnimation from "react-animate-on-scroll"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

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
        <div className="text">
          <h1>
            Honestly <br /> good fried <br /> chicken
          </h1>
          <h4>That brings out the honesty in you.</h4>
        </div>
      </BackgroundImage>

      <Controller>
        <Scene triggerHook="onLeave" duration={1200} pin offset={"-150px"}>
          {progress => (
            <div className="storyDiv" id="story">
              <Timeline totalProgress={progress} paused>
                <div className="left">
                  <div className="story-text">
                    <span>our story</span>
                  </div>
                  <div className="red" id="scrolly-div">
                    <Timeline
                      target={
                        <div>
                          <h1>chicken.</h1>
                        </div>
                      }
                    >
                      <Tween
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        duration={1}
                        delay={delayTime.one}
                      />
                    </Timeline>

                    <div className="main-div">
                      <Timeline
                        target={
                          <div>
                            <h4>NO SECRET HERBS OR SPICES</h4>
                          </div>
                        }
                      >
                        <Tween
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                          duration={100}
                          // delay={delayTime.three}
                        />
                      </Timeline>

                      <div className="main-text">
                        <span>JUST Jackson’s</span>
                      </div>
                      <Timeline
                        target={
                          <div>
                            <h4>No confidential buttermilk recipes.</h4>
                          </div>
                        }
                      >
                        <Tween
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                          duration={50}
                          // delay={delayTime.three}
                        />
                      </Timeline>
                    </div>

                    <Timeline
                      target={
                        <div>
                          <h1>fried.</h1>
                        </div>
                      }
                    >
                      <Tween
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        duration={10}
                        //delay={delayTime.two}
                      />
                    </Timeline>
                  </div>
                </div>
                <div className="right">
                  <div className="main-div">
                    <Timeline
                      target={
                        <div>
                          <h3>
                            Not born in Louisiana. <br /> Neither Kentucky. Nor
                            Texas.{" "}
                          </h3>
                        </div>
                      }
                    >
                      <Tween
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        duration={100}
                        // delay={delayTime.three}
                      />
                    </Timeline>

                    <div className="img-div">
                      <img src={chikenTender} alt="tender" />
                    </div>

                    <Timeline
                      target={
                        <div>
                          <h3>
                            {" "}
                            NO MAJOR OF COLONELS. <br /> WITH HONEST ingredients{" "}
                          </h3>
                        </div>
                      }
                    >
                      <Tween
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        duration={100}
                        // delay={delayTime.three}
                      />
                    </Timeline>

                    {/* </div> */}
                  </div>
                  <Timeline
                    target={
                      <div className="hot-spicy">
                        <span>hot & spicy</span>
                      </div>
                    }
                  >
                    <Tween
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      duration={100}
                      // delay={delayTime.three}
                    />
                  </Timeline>
                </div>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
    </section>
  )
}

export default Story
