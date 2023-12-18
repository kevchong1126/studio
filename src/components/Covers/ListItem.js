import React, { useRef } from 'react'
import styles from "./ListItem.module.scss"
import { gsap } from "gsap";

const ListItem = ({cover, idx, image}) => {
  const picture = useRef();

  const ht  = {
    0 : styles.zero,
    1 : styles.one,
    2 : styles.two,
    3 : styles.three,
    4 : styles.four,
    5 : styles.five,
    6 : styles.six,
    7 : styles.seven,
  };

  const enterAnim = () => {
    gsap.to(picture.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5
    })
  }

  const leaveAnim = () => {
    gsap.to(picture.current, {
      opacity: 0,
      scale: 0.9,
      delay: 0.2,
      duration: 0.5
    })
  }
  return (
    <li className={`${styles.name} ${ht[idx]}`} onMouseEnter={enterAnim} onMouseLeave={leaveAnim}>
        {cover}
        <div className={styles.imgContainer} ref={picture}>
            <img src={image} alt='idx'/>
        </div>
    </li>
  )
}

export default ListItem