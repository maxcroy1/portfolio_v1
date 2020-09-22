import React from 'react'
import styles from "./verticleFooter.module.css"

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <p className={styles.text}>max.croy1@gmail.com</p>
                <p className={styles.text}>&#169; {new Date().getUTCFullYear()} Maxwell Croy</p>
                <div></div>
            </div>
        )
    }
}