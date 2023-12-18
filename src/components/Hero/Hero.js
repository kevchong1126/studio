import React, { useEffect, useRef} from 'react';
import styles from './Hero.module.scss';

/*Components*/
import TextContainer from './TextContainer'
import ImageCollection from './ImageCollection'

/*Image*/
import image1 from '../../images/hero4.jpg'

import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const container = useRef();
    const imgContainer = useRef();
    const image = useRef();

    useEffect( () => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 1025px)", () => {
                gsap.to(imgContainer.current, {
                width: '100%',
                duration: 1,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top top',
                    end: `+=${container.current.offsetHeight}`,
                    scrub: 1
                }
            });
        })
        

        gsap.from(image.current, {
            scale: 1.3,
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: `+=${container.current.offsetHeight}`,
                scrub: 1
            }
        })
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>
                <TextContainer ref={container}/>
                <ImageCollection />
            </div>
            <div className={styles.right}>
                <div className={styles.imgContainer} ref={imgContainer}>
                    <img className={styles.heroImg} src={image1} ref={image} alt='hero'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero