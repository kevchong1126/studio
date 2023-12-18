import React, { useEffect, useRef} from 'react'
import styles from './TextContainer.module.scss'

import { gsap, Power0 } from 'gsap'

const TextContainer = React.forwardRef((props, ref) => {
    const texts = useRef([]);

    useEffect(() => {
        gsap.from(texts.current, {
            yPercent: 100,
            delay: 0.2,
            ease: Power0.easeIn,
            stagger: {
                amount: 0.4
            }
        })
    }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
        <div className={styles.textMask}>
            <p className={styles.text} ref={el => texts.current.push(el)}>WHERE EVERY</p>
        </div>
        <div className={styles.textMask}>
            <p className={styles.text} ref={el => texts.current.push(el)}>PIXEL COUNTS:</p>
        </div>
        <div className={styles.textMask}>
            <p className={styles.text} ref={el => texts.current.push(el)}>CREATING IMPRESSIONS</p>
        </div>
        <div className={styles.textMask}>
            <p className={styles.text} ref={el => texts.current.push(el)}>THROUGH</p>
        </div>
        <div className={styles.textMask}>
            <p className={styles.text} ref={el => texts.current.push(el)}>PHOTOGRAPHY</p>
        </div>
    </div>
  )
})

export default TextContainer