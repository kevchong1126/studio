import React, { useEffect, useRef } from 'react'
import styles from './Parallax.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { parallax } from '../../Gsap'
gsap.registerPlugin(ScrollTrigger)


const Parallax = () => {
    const text1 = useRef();
    const text2 = useRef();
    const text3 = useRef();
    const text4 = useRef();
    const text5 = useRef();
    const text6 = useRef();
    useEffect(() => {
        parallax(text1.current, -15);
        parallax(text2.current,  5);
        parallax(text3.current,  -10);
        parallax(text4.current,  15);
        parallax(text5.current, -5);
        parallax(text6.current, -10);

    }, [])
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.parallaxText} ref={text1}>
                The new yorker / allure / vogue / rolling stone & more, more, more...
            </p>
            <p className={styles.parallaxText} ref={text2}>
                The new yorker / allure / vogue / rolling stone & more, more, more...
            </p>
            <p className={styles.parallaxText} ref={text3}>
                The new yorker / allure / vogue / rolling stone & more, more, more...
            </p>
            <p className={styles.parallaxText} ref={text4}>
                The new yorker / allure / vogue / rolling stone & more, more, more...
            </p>
            <p className={styles.parallaxText} ref={text5}>
                The new yorker / allure / vogue / rolling stone & more, more, more...
            </p>
            <p className={styles.parallaxText} ref={text6}>
                The new yorker / allure / vogue / rolling stone & more, more, more...
            </p>
        </div>
    </div>
  )
}

export default Parallax