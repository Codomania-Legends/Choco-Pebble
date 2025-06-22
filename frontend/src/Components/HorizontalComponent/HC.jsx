import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useEffect } from 'react'
import gsap from "gsap"
import BackgroundStart from '../../Animations/background'
import "./HC.css"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)
function Home() {
    const text = "A World Full _ Chocolate Wonders _ Where every bite feels like _"
    .replaceAll( " " , "^$^" )
    .split("^")
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".slider-hc", {
                xPercent: -66.66,
                ease: "none",
                scrollTrigger: {
                    trigger: ".container-hc",
                    pin: true,
                    start: "top top",
                    scrub: 1,
                }
            });
        })
        const split1 = SplitText.create(".First", { type: "words" });
        const split2 = SplitText.create(".Second", { type: "words" });
        const split3 = SplitText.create(".Third", { type: "words" });

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container-hc",
                start: "50% 50%", 
                toggleActions: "play none none reset",
            }
        })
        // tl1.from( ".slider-hc" , {
        //     opacity : 0,
        //     duration : 0.2,
        //     scrollTrigger : {
        //         trigger : ".container-hc",
        //         start : "start 5%",
        //         end : "5% 15%",
        //         scrub: 1,
        //         toggleActions: "play none none reset",
        //     }
        // } )
        tl1.from(split1.words, {
            duration: 0.3,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
            yoyo: true
        });
        tl1.from( ".image-hc-of" , {
            opacity : 0,
            duration : 0.3
        } )
        tl1.from( split2.words , {
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            duration: 0.7, 
            ease: "back",
            stagger: 0.15
        } )
        tl1.from( ".image-hc-comma" , {
            opacity : 0,
            height : "5em"
        } )
        split3.split({ type: "chars,words" });

        tl1.from(split3.chars, {
            duration: 1,
            scale: 4,
            autoAlpha: 0,
            rotationX: -180,
            transformOrigin: "100% 50%",
            ease: "back",
            stagger: 0.02
        });
        tl1.from( ".image-hc-love" , {
            rotate : -20,
            scale : 0.8,
            duration : 0.5,
            opacity : 0,
            y : 100,
            ease : "bounce.in"
        } )
        return () => ctx.revert();
    }, []);

return (
    <>
        <div className="container-hc flex">
            <div className="slider-hc flex">
                <img src="/is.svg" className='img1-hc' alt="" />
                <img src="/chocoChip.svg" className='img2-hc' alt="" />
                <img src="/chocoBar.svg" className='img3-hc' alt="" />
                <img src="/chocoaSeed1.svg" className='img4-hc' alt="" />
                <img src="/lightening.svg" className='img5-hc' alt="" />
                <img src="/chocoaSeed2.svg" className='img6-hc' alt="" />
                <img src="/flowers.png" className='img7-hc' alt="" />
                <img src="/chocoaSeed3.svg" className='img8-hc' alt="" />
                <div className="text-hc flex">
                    {
                        text.map((v, i) => {
                            if (v === "_") {
                                switch (i) {
                                    case 6:
                                        return <img key={i} className='image-hc-of' src="/of.svg" alt="of" />;
                                    case 12:
                                        return <img key={i} className='image-hc-comma' src="/comma.svg" alt="comma" />;
                                    case 24:
                                        return <img key={i} className='image-hc-love' src="/love.svg" alt="love" />;
                                    default:
                                        return null;
                                }
                            } else {
                                return <span key={i} className={`text-text-hc shadow ${i < 6 ? "First" : i < 12 ? "Second" : "Third"}`}>{v === "$" ? <pre> </pre> : v}</span>;
                            }
                        })
                    }
                </div>
            </div>
        </div>
    </>
)
}

export default Home
