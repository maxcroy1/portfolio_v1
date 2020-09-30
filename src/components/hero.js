import React from 'react'
import { Link } from "gatsby"
import scrollToElement from "scroll-to-element"
import heroStyles from './hero.module.css'

export default function Hero() {
    return (
        <div className={heroStyles.container}>
            <div className={heroStyles.content}>
                <h1 className={heroStyles.name}>MAXWELL<br /><span className={heroStyles.underline}>CROY</span></h1>
                <h2 className={heroStyles.title}>SOFTWARE ENGINEER<br />// FULL STACK DEVELOPER</h2>
                <Link to="/#contact" onClick={ e => handleLinkClick(e, '#contact')} className={heroStyles.contact}>
                    GET IN TOUCH
                </Link>
            </div>
        </div>
    )
}

const handleLinkClick = (e, target) => {

    if (typeof window !== 'undefined') {
      if (e) e.preventDefault()
      scrollToElement(target, {
        offset: -95,
        duration: 1000,
      })
    }
  
  }