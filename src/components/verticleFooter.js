import React from 'react'
import styles from "./verticleFooter.module.css"
import GitHub from "../icons/iconmonstr-github-1.svg"
import LinkedIn from "../icons/iconmonstr-linkedin-1.svg"
import Twitter from "../icons/iconmonstr-twitter-1.svg"
import Medium from "../icons/iconmonstr-medium-1.svg"

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <div className={styles.decoration}></div>
                    <p className={`${styles.text} ${styles.topText}`}><a style={{color: '#000'}} href="mailto:me@maxcroy.com">me@maxcroy.com</a></p>
                </div>
                <div>
                    <p className={styles.text}>&#169; {new Date().getUTCFullYear()} Maxwell Croy</p>
                </div>
                <div>
                    <div className={styles.icons}>
                        <GitHub className={styles.icon}/>
                        <LinkedIn className={styles.icon} />
                        <Twitter className={styles.icon} />
                        <Medium className={styles.icon} />
                    </div>
                    <div className={styles.decoration}></div>
                </div>
            </div>
        )
    }
}