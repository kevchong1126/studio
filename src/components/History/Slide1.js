import React, { useEffect, useRef } from 'react'
import styles from "./Slide1.module.scss"

/*Components*/
import TextCard from './TextCard'
import { bioImage } from '../../Gsap'

/*Images*/
import image1 from "../../images/bio1.png"
import bg from "../../images/bggif.gif"

const Slide1 = () => {
    const array = ["Exposure was created", "in lisbon (portugal)", "in 2015, the idea", "for an agency", "was first conceived"];
    const img1Ref = useRef();
    const bg1Ref = useRef();

    useEffect(() => {
        bioImage(img1Ref.current, bg1Ref.current, 30)
    }, []);

  return (
    <div className={styles.wrapper}>
        <TextCard index="01" year="2015" array={array} />

        <div className={styles.imgContainer}>
            <img src={image1} alt='castle' ref={img1Ref}/>
            <img src={bg} alt='bg' ref={bg1Ref} className={styles.bg}/>
        </div>
    </div>
  )
}

export default Slide1