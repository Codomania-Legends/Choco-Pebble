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
        const timeLine1 = gsap.timeline()
        let split1 = SplitText.create(".First" , { type : "words" } )
        const scroll = {
                trigger : ".container-hc",
                scrub : true,
                start : "0% 10%",
                end : "10%"
            }
        timeLine1.from( split1.words , {
            duration : 1,
            y : 100,
            autoAlpha : 0,
            stagger : 0.05,
            yoyo : true,
            scrollTrigger : scroll
        } )
        const ctx = gsap.context(() => {
            gsap.to(".slider-hc", {
            xPercent: -66.66,
            ease: "none",
            scrollTrigger: {
                trigger: ".container-hc",
                pin: true,
                scrub: true,
                start : "top top"
            }
            });
        });
        return () => ctx.revert();
    }, []);
return (
    <>
        <div className="container-hc flex">
            <div className="slider-hc flex">
                <img src="" className='img1-hc' alt="" />
                <img src="" className='img2-hc' alt="" />
                <img src="" className='img3-hc' alt="" />
                <img src="" className='img4-hc' alt="" />
                <div className="text-hc flex">
                    {
                        text.map((v, i) => {
                            if (v === "_") {
                                switch (i) {
                                    case 6:
                                        return <img key={i} src="/of.svg" alt="of" />;
                                    case 12:
                                        return <img key={i} src="/comma.svg" alt="comma" />;
                                    case 24:
                                        return <img key={i} src="/love.svg" alt="love" />;
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