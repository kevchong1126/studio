import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const bioImage = (img, bg, percent) => {
    gsap.from([img, bg], {
        yPercent: percent,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: "top top",
            scrub: 1
        }
    })
}

export const parallax = (target, percent) => {
    gsap.to(target, {
        xPercent: percent,
        ease: "none",
        scrollTrigger: {
            trigger: target,
            start: "top 105%",
            end: "top -10%",
            scrub: 1
        }
    })
}

export const horizontal = (array, percent, timeline) => {
    for (let i = 0; i < array.length; i++){
        console.log(array[i], percent[i])
        gsap.to(array[i], {
            xPercent: percent[i],
            ease: "none",
            scrollTrigger: {
                trigger: array[i],
                start: "left 70%",
                end: "left left",
                scrub: 1,
                containerAnimation: timeline
            }
        })
    }
}