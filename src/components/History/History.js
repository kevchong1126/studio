import React from 'react'
import styles from './History.module.scss'

/*Components*/
import Header from '../Header'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'

const History = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Header first="Exposure's" second="Biography" subheader="Founded in 2015"/>
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
        </div>
    </div>
  )
}

export default History