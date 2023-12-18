import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.texts}>
                <p>Let pictures</p>
                <p>be a</p>
                <p className={styles.padding}>portrait</p>
                <p>of your </p>
                <p className={styles.padding}>legacy</p>
                <p>contact us</p>
            </div>
            <div className={styles.footer}>
                <p>copyright 2023</p>
                <p>Developed by : kevin chong</p>
            </div>
        </div>
    </div>
  )
}

export default Footer