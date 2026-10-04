import gsap from "gsap";

function comeOneByOne(ref, tl) {
    const root = ref.current;
    if (!root) return tl;

    // headings + paragraphs as whole blocks (not per character)
    const texts = root.querySelectorAll("h1, h2, p");
    // only the 4 cards, not every nested div
    const cards = Array.from(root.querySelector("#depthTimeLine")?.children ?? []);

    // reset leftovers from a previous build (Strict Mode / rebuilds)
    gsap.set([...texts, ...cards], { clearProps: "all" });

    tl.from(texts, {
        y: 24,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "opacity,transform,filter",
    });

    tl.from(cards, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
    }, "-=0.3");

    return tl;
}

export default comeOneByOne;