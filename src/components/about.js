import React from 'react'
import aboutStyles from './about.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Headshot from '../images/headshot.jpeg'
import Img from 'gatsby-image'

export default function About() {
  const data = useStaticQuery(graphql`
  query MyQuery {
      file(relativePath: {eq: "headshot.jpeg"}) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

    return (
      <div className={aboutStyles.container}>
        <div className={aboutStyles.contentContainer}>
          <div className={aboutStyles.content}>
            <h1 className={aboutStyles.title}><u>ABOUT</u></h1>
            <div className={aboutStyles.bio}>
              <p>I'm Max, a developer based in Brooklyn, NY.</p><br />
              <p>While my passion for programming was sparked by an interest in web design, I enjoy all aspects of building out websites, applications, and anything in between.</p><br />
              <p>My goal is to build products that solve tangible problems and look great doing it.</p><br />
              <p>Here's a list of some technologies I've been working with:</p><br />
              <div className={aboutStyles.technologies}>
                  <ul className={aboutStyles.column}>
                      <li>Ruby</li>
                      <li>Rails</li>
                      <li>JavaScript</li>
                  </ul>
                  <ul className={aboutStyles.column}>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Gatsby</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className={aboutStyles.imgContainer}>
            <div className={aboutStyles.image}>
                <Img fluid={data.file.childImageSharp.fluid} alt="Maxwell Croy headshot." />
            </div>
          </div>
        </div>
      </div>
    )
}