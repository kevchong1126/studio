import React, { useEffect, useRef } from 'react'
import styles from './Slide2.module.scss'

/*Components*/
import TextCard from './TextCard'
import { bioImage } from '../../Gsap'

/*Images*/
import image1 from "../../images/bio2.png"
import bg from "../../images/bggif.gif"

const Slide2 = () => {
    const array = ["Our approach", "has allowed us", "to tailor", " to global brands"];
    const img1Ref = useRef();
    const bg1Ref = useRef();

    useEffect(() => {
        bioImage(img1Ref.current, bg1Ref.current, 20)
    }, []);

  return (
    <div className={styles.wrapper}>
        <TextCard index="02" year="2016" array={array} />

        <div className={styles.imgContainer}>
            <img src={image1} alt='castle' ref={img1Ref}/>
            <img src={bg} alt='bg' ref={bg1Ref} className={styles.bg}/>
        </div>
    </div>
  )
}

export default Slide2