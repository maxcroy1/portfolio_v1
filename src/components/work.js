import React from 'react'
import workStyles from './work.module.css'

export default function Work() {
    return (
        <div>
            <div>
                <div className={workStyles.container}>
                    <div className={workStyles.content}>
                        <h1 className={workStyles.title}><u>WORK</u></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}