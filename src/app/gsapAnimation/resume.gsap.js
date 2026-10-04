import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function resumeAnimation(isAnimated, isDesktop) {
    if (isAnimated.current) return

    isAnimated.current = true

    const tl = gsap.timeline()

    if (isDesktop) {
        const images = document.querySelectorAll("#images")

        for (let i = 0; i < images.length; i++) {
            const icons = Array.from(images[i].children)

            tl.from(icons, {
                x: () => gsap.utils.random(-100, 100),
                y: () => gsap.utils.random(-100, 100),
                opacity: 0,
                duration: .3,
                stagger: 0.3,
            },)

            icons.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    gsap.to(e, {
                        scale: 1.5,
                        duration: .5,
                        x: 10,
                        y: -10,
                        zIndex: 10,

                    })
                })
                e.addEventListener("mouseleave", () => {
                    gsap.to(e, {
                        scale: 1,
                        duration: .5,
                        x: 0,
                        y: 0,
                    })
                })
            })
        }
    } else {
        const images = document.querySelectorAll("#images")

        for (let i = 0; i < images.length; i++) {
            const icons = Array.from(images[i].children)

            tl.from(icons, {
                x: () => gsap.utils.random(-1000, 1000),
                y: () => gsap.utils.random(-1000, 1000),
                opacity: 0,
                duration: .1,
                scrollTrigger: {
                    trigger: skill[i],
                    scrub: 2,
                    scroller: "body",
                    end:"top 60%",
                    toggleActions: "play none none none",
        
                }
            },)

            icons.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    gsap.to(e, {
                        scale: 1.5,
                        duration: .5,
                        x: 10,
                        y: -10,
                        zIndex: 10,
                    })
                })
                e.addEventListener("mouseleave", () => {
                    gsap.to(e, {
                        scale: 1,
                        duration: .5,
                        x: 0,
                        y: 0,
                        zIndex:0
                    })
                })
            })
        }
    }

}

export default resumeAnimation