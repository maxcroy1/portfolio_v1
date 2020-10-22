import React from 'react'
import heroStyles from '../styles/hero.module.css'

export default function Hero() {
    return (
        <div className={heroStyles.container}>
            <div className={heroStyles.content}>
                <h1 className={heroStyles.name}>MAXWELL<br /><span className={heroStyles.underline}>CROY</span></h1>
                <h2 className={heroStyles.title}>SOFTWARE ENGINEER<br />// FULL STACK DEVELOPER</h2>
                <a href="mailto:me@maxcroy.com" className={heroStyles.contact}>
                    GET IN TOUCH
                </a>
            </div>
        </div>
    )
}