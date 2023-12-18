import React from 'react'
import styles from './Bg.module.scss'

import image1 from '../images/bg.png'
import image2 from '../images/bggif.gif'

const Bg = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img className={styles.image} src={image1} alt='background' />
        </div>
        <div className={styles.gifContainer}>
            <img className={styles.gif} src={image2} alt='gif'/>
        </div>
    </div>
  )
}

export default Bg