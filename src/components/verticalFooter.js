import React from 'react'
import styles from "../styles/verticalFooter.module.css"
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
                    <p className={`${styles.text} ${styles.midText}`}>&#169; {new Date().getUTCFullYear()} Maxwell Croy</p>
                </div>
                <div>
                    <div className={styles.icons}>
                        <a href="https://github.com/maxcroy1">
                            <GitHub className={styles.icon}/>
                        </a>
                        <a href="https://www.linkedin.com/in/maxwellhcroy/">
                            <LinkedIn className={styles.icon} />
                        </a>
                        <a href="https://twitter.com/MaxCroy1">
                            <Twitter className={styles.icon} />
                        </a>
                        <a href="https://medium.com/@MaxCroy1">
                            <Medium className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.decoration}></div>
                </div>
            </div>
        )
    }
}