import React from 'react'
import styles from './TextCard.module.scss'

const TextCard = ({index, year, array}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.indexContainer}>
            <p className={styles.index}>{index}</p>
        </div>
        <div className={styles.yearContainer}>
            <p className={styles.year}>{year}</p>
        </div>
        <div className={styles.arrayContainer}>
            {
                array.map( (el, idx) => <p className={styles.text} key={idx}>{el}</p>)
            }
        </div>
    </div>
  )
}

export default TextCard