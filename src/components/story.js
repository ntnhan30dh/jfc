import React from "react"


import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import chikenTender from "../images/chicken-tender_gif.gif"

import Plx from "react-plx"

const parallaxData = [
  {
    start: "self",
    duration: 800,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
]

// const parallaxMoveUp = [
//   {
//     start: "self",
//     duration: 500,
//     properties: [
//       {
//         startValue: 50,
//         endValue: 0,
//         property: "translateY",
//       },
//       {
//         startValue: 0.5,
//         endValue: 1,
//         property: "scale",
//       },
//     ],
//   },
// ]

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
          <h1>Honestly good fried chicken</h1>
          <h4>That brings out the honesty in you.</h4>
        </div>
      </BackgroundImage>

      <div className="storyDiv">
        <div className="left">
          <div className="story-text">
            <span>
           our story
            </span>
            </div>
          <div className="red">
          <Plx parallaxData={parallaxData}>
            <h1>chicken</h1>
          </Plx>
            <h4>NO SECRET HERBS OR SPICES</h4>
            <div className="main-text">
              <span>
              JUST <br />
              Jackson’s
              </span>
            </div>
            <h4>No confidential buttermilk recipes.</h4>
            <h1>fried.</h1>
          </div>
        </div>
        <div className="right">
          <div className="main-div">
            <h3>Not born in Louisiana. <br/> Neither Kentucky. Nor Texas. </h3>
          <div className="img-div">
            {/* <Img fluid={data.chickenTender.childImageSharp.fluid} /> */}
            <img src={chikenTender} alt="tender"/>
          </div>
            <h3> NO MAJOR OF COLONELS. <br/> WITH HONEST ingredients </h3>
          </div>
          <div className="hot-spicy">
            <span>
            hot & spicy
            </span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Story
