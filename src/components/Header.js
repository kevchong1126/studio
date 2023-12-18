import React, { useEffect, useRef } from 'react'
import styles from './Header.module.scss'

import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Header = ({first, second, subheader}) => {
    const firstRef = useRef();
    const secondRef = useRef();
    const subheaderRef = useRef();

    useEffect(() => {
        gsap.from([firstRef.current, subheaderRef.current], {
            yPercent: 100,
            ease: Power0.easeIn,
            duration:  0.4,
            scrollTrigger: {
                trigger: firstRef.current,
                start: 'top 95%'
            }
        })
        gsap.from(secondRef.current, {
            yPercent: 100,
            ease: Power0.easeIn,
            duration: 0.4,
            scrollTrigger: {
                trigger: secondRef.current,
                start: '-30% 95%'
            }
        })
    
    }, [])
  return (
    <div className={styles.wrapper}>

        <div className={styles.top}>
            <div className={styles.mask}>
                <p className={styles.big} ref={firstRef}>{first}</p>
            </div>

            <div className={styles.mask}>
                <p className={styles.small} ref={subheaderRef}>{subheader}</p>
            </div>
            
        </div>
        <div className={styles.bottom}>
            <div className={styles.mask}>
                <p className={styles.big} ref={secondRef}>{second}</p>
            </div>
        </div>
    
    </div>
  )
}

export default Header