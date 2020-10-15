import React from 'react'
import contactStyles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div className={contactStyles.container}>
            <div className={contactStyles.content}>
                <h1 className={contactStyles.title}><u>CONTACT</u></h1>
            </div>
        </div>
    )
}