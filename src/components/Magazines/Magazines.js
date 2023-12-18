import React, { useEffect, useRef } from 'react'
import styles from "./Magazines.module.scss"

/*Components*/
import Header from "../Header"
import Slide from './Slide'

/*Images*/
import image1 from "../../images/p1.png"
import image2 from "../../images/p2.jpg"
import image3 from "../../images/p3.jpg"
import small1 from "../../images/p1small.png"
import small2 from "../../images/p2small.jpg"
import small3 from "../../images/p3small.jpg"

/*Animation*/
import { horizontal } from '../../Gsap'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


const Magazines = () => {
    const container = useRef();
    const track = useRef();

    const slide1 = useRef([])
    const slide2 = useRef([])
    const slide3 = useRef([])
    useEffect(() => {
        const mm = gsap.matchMedia();
        
        mm.add("(min-width: 769px)", () => {
            const timeline = gsap.to(track.current, {
                x: `-${track.current.offsetWidth - window.innerWidth}`,
                ease: "none",
                scrollTrigger: {
                trigger: track.current,
                start: "top top",
                end: `+=${track.current.offsetWidth - window.innerWidth}`,
                pin: true,
                scrub: 0.5
                }
            })
    
            horizontal(slide1.current, [35,5, 5, 40, 0], timeline)
            horizontal(slide2.current, [45,5, 5, -100, 1], timeline)
            horizontal(slide3.current, [55, 20, 20, -10, 20], timeline)
        })
    
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Header first="our" second="portfolio" subheader="best chapter" />
        </div>
        <div className={styles.trackWrapper} ref={container}>
            <div className={styles.track} ref={track}>
                <Slide image={image1} small={small1} big1="Vogue" big2="Deutschland" subheader="2019" ref={slide1}/>
                <Slide image={image2} small={small2} big1="Vogue" big2="España" subheader="2021"  ref={slide2}/>
                <Slide image={image3} small={small3} big1="Numero" big2="Homme" subheader="2023"  ref={slide3}/> 
                
            </div>
        </div>
    </div>
  )
}

export default Magazines