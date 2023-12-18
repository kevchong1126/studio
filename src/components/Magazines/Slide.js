import React, { useEffect} from 'react'
import styles from "./Slide.module.scss"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Slide = React.forwardRef( ({image, small, big1, big2, subheader}, ref) => {

    useEffect(() => {
        
    }, [])
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.bigContainer}>
                <img src={image} alt={big1} className={styles.bigImage} ref={el => ref.current.push(el)}/>
            </div>
            <div className={styles.smallContainer}>
                <img className={styles.smallImage} src={small} alt={big1} ref={el => ref.current.push(el)}/>
            </div>
            
            <div className={styles.textContainer}>
                <div className={styles.top}>
                    <p className={styles.big} ref={el => ref.current.push(el)}>{big1}</p>
                    <p className={styles.small} ref={el => ref.current.push(el)}>{subheader}</p>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.big} ref={el => ref.current.push(el)}>
                        {big2}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Slide