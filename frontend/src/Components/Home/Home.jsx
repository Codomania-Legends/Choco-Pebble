import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import BackgroundStart from '../../Animations/background';
import chocobar from '/chocoBar.svg';
import HC from '../HorizontalComponent/HC';
import Chocobar from '../../Animations/Chocobar';
import chocochip from '/chocoChip.svg';
import chocolatesplashleft from '/barBackSplashLeft.svg';
import chocolatesplashright from '/barBackSplashRight.svg';
import BuyChocolate from '../BuyChocolate/BuyChocolate';
import Menu from '../MenuHighlight/Menu';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function Home() {
  const textRef = useRef();

  useEffect(() => {
    const timeLine = gsap.timeline()
    BackgroundStart('.background-gr' , timeLine);
    Chocobar(timeLine);

    // Split the text into characters
    const split = SplitText.create(textRef.current, { type: 'chars' });

    // Animate each character
    gsap.set(split.chars, {
      x: () => Math.random() * 300 - 150,
      y: () => Math.random() * 200 - 100,
      rotation: () => Math.random() * 720 - 360,
      opacity: 0,
    });

    timeLine.to(split.chars, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.05,
    });
  }, []);

  return (
    <>
      <main className="home background-gr flex">
        <Navbar />
        <div className="textHomeChocoPebble flex">
          <span ref={textRef} className="textSpan">Choco-Pebble</span>
        </div>

        <div className="chocobars flex">
          <div className="bar1 bars">
            <img src={chocobar} className="bar-img1 bar-img" />
          </div>
          <div className="bar2 bars">
            <img src={chocobar} className="bar-img2 bar-img" />
          </div>
          <div className="bar3 bars">
            <img src={chocobar} className="bar-img3 bar-img" />
          </div>

          {/* splash */}
          <div className="chocolate-splash-left splash">
            <img src={chocolatesplashleft} className="splash-left" />
          </div>
          <div className="chocolate-splash-right splash">
            <img src={chocolatesplashright} className="splash-right" />
          </div>

          {/* chocochip */}
          <div className="chocochips">
            <img src={chocochip} className="choco-chip1 chippy" />
            <img src={chocochip} className="choco-chip2 chippy" />
            <img src={chocochip} className="choco-chip3 chippy" />
            <img src={chocochip} className="choco-chip4 chippy" />
            <img src={chocochip} className="choco-chip5 chippy" />
          </div>
        </div>

        <div className="home-button flex">
          <button className="btn">Scroll Down</button>
        </div>
      </main>

      <HC />
      <Menu />
      <BuyChocolate />
    </>
  );
}

export default Home;
