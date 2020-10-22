import React from 'react'
import contactStyles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div className={contactStyles.container}>
            <div className={contactStyles.content}>
                <h1 className={contactStyles.title}><u>CONTACT</u></h1>
                <p className={contactStyles.blurb}>I'm currently looking for freelance and full-time opportunities.</p> 
                <p className={contactStyles.blurb}>Whether you think I'm a good fit for your team, or just want to say hi, my inbox is always open. I'll try my best to get back to you as soon as possible.</p>
                <span className={contactStyles.makeBlock}>
                    <a href="mailto:me@maxcroy.com" className={contactStyles.contact}>
                        GET IN TOUCH
                    </a>
                </span>
            </div>
        </div>
    )
}