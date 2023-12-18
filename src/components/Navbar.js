import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <a href="/" className={styles.title} >
                Exposure Studios
            </a>
            <p className={styles.author}>
                Developed by: kevin chong
            </p>
        </div>
    </div>
  )
}

export default Navbar