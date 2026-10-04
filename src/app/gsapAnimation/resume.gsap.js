import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function resumeAnimation(isAnimated, isDesktop) {
    // clean up the previous run (Strict Mode / re-mount)
    if (typeof isAnimated.current === "function") isAnimated.current()

    const groups = Array.from(document.querySelectorAll("#images"))
    const cleanups = []
    const triggers = []

    groups.forEach((group) => {
        const icons = Array.from(group.children)
        if (!icons.length) return

        // entry: rise + scale up + blur clearing, flowing across the row
        const tween = gsap.from(icons, {
            y: 28,
            scale: 0.85,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.8,
            stagger: { each: 0.07, from: "start" },
            ease: "power3.out",
            clearProps: "opacity,transform,filter",
            scrollTrigger: {
                trigger: group,
                start: "top 85%",
                once: true,
            },
        })
        triggers.push(tween.scrollTrigger)

        // hover: lift the icon, softly dim the others (desktop only)
        if (isDesktop) {
            icons.forEach((el) => {
                const enter = () => {
                    gsap.to(el, {
                        scale: 1.18,
                        y: -6,
                        opacity: 1,
                        duration: 0.35,
                        ease: "power3.out",
                        overwrite: "auto",
                    })
                    gsap.to(icons.filter((i) => i !== el), {
                        opacity: 0.45,
                        scale: 0.96,
                        duration: 0.35,
                        ease: "power2.out",
                        overwrite: "auto",
                    })
                }
                const leave = () => {
                    gsap.to(icons, {
                        scale: 1,
                        y: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        overwrite: "auto",
                    })
                }
                el.addEventListener("mouseenter", enter)
                el.addEventListener("mouseleave", leave)
                cleanups.push(() => {
                    el.removeEventListener("mouseenter", enter)
                    el.removeEventListener("mouseleave", leave)
                })
            })
        }
    })

    // cleanup fn stored in the ref so the next call can undo this one
    isAnimated.current = () => {
        triggers.forEach((t) => t && t.kill())
        cleanups.forEach((fn) => fn())
        groups.forEach((g) => gsap.set(Array.from(g.children), { clearProps: "all" }))
    }

    return isAnimated.current
}

export default resumeAnimation