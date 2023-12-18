import React, { useEffect, useRef } from 'react'
import styles from './Slide4.module.scss'

/*Components*/
import TextCard from './TextCard'
import { bioImage } from '../../Gsap'

/*Images*/
import image1 from "../../images/bio5.jpg"
import image2 from "../../images/bio6.jpg"
import bg from "../../images/bggif.gif"

const Slide4 = () => {
    const array = ["Through mentorship programs", "we have actively", "contributed to the growth", "of emerging photographers", "in their voices"];
    const img1Ref = useRef();
    const bg1Ref = useRef();
    const img2Ref = useRef();
    const bg2Ref = useRef();

    useEffect(() => {
        bioImage(img1Ref.current, bg1Ref.current, 15)
        bioImage(img2Ref.current, bg2Ref.current, 20)
    }, []);

  return (
    <div className={styles.wrapper}>
        <TextCard index="04" year="2020" array={array} />

        <div className={styles.imgContainer1}>
            <img src={image1} alt='i5' ref={img1Ref}/>
            <img src={bg} alt='bg' ref={bg1Ref} className={styles.bg}/>
        </div>
        <div className={styles.imgContainer2}>
            <img src={image2} alt='i6' ref={img2Ref}/>
            <img src={bg} alt='bg' ref={bg2Ref} className={styles.bg}/>
        </div>
    </div>
  )
}

export default Slide4