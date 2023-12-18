import React, { useEffect, useRef} from 'react'
import styles from './ImageCollection.module.scss'

/*Images*/
import image1 from '../../images/hero1.jpg'
import image2 from '../../images/hero2.jpg'
import image3 from '../../images/hero3.jpg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const ImageCollection = () => {
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  useEffect(() => {
    gsap.to(img1.current, {
      yPercent: -60,
      ease: "none",
      scrollTrigger: {
        trigger: img1.current,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.5
      }
    })

    gsap.to(img2.current, {
      yPercent: -65,
      ease: "none",
      scrollTrigger: {
        trigger: img2.current,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.5
      }
    })

    gsap.to(img3.current, {
      yPercent: -80,
      scrollTrigger: {
        trigger: img3.current,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.5
      }
    })
  }, [])

  return (
    <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
            <img src={image1} alt='friends' ref={img1} className={styles.image1}/>
        </div>
        <div className={styles.imgContainer}>
            <img src={image2} alt='grandfather' ref={img2} className={styles.image2}/>
        </div>
        <div className={styles.imgContainer}>
            <img src={image3} alt='smile' ref={img3} className={styles.image3}/>
        </div>
        
    </div>
  )
}

export default ImageCollection