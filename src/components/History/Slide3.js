import React, { useEffect, useRef } from 'react'
import styles from './Slide3.module.scss'

/*Components*/
import TextCard from './TextCard'
import { bioImage } from '../../Gsap'

/*Images*/
import image1 from "../../images/bio3.jpg"
import image2 from "../../images/bio4.jpg"
import bg from "../../images/bggif.gif"

const Slide3 = () => {
    const array = ["we embraced", "technological advancements", "incorportating", "state-of-the-art", "equipment"];
    const img1Ref = useRef();
    const bg1Ref = useRef();
    const img2Ref = useRef();
    const bg2Ref = useRef();

    useEffect(() => {
        bioImage(img1Ref.current, bg1Ref.current, 10)
        bioImage(img2Ref.current, bg2Ref.current, 20)
    }, []);

  return (
    <div className={styles.wrapper}>
        <TextCard index="03" year="2018" array={array} />

        <div className={styles.imgContainer1}>
            <img src={image1} alt='i3' ref={img1Ref}/>
            <img src={bg} alt='bg' ref={bg1Ref} className={styles.bg}/>
        </div>
        <div className={styles.imgContainer2}>
            <img src={image2} alt='i4' ref={img2Ref}/>
            <img src={bg} alt='bg' ref={bg2Ref} className={styles.bg}/>
        </div>
    </div>
  )
}

export default Slide3