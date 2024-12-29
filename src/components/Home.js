import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './css/styles.css';
import About from './About';
import HeroScene from './HeroScene';

const Home = () => {
  const [dynamicText, setDynamicText] = useState('');
  const texts = ['Websites', 'UI/UX Design', 'Graphics', '3D Models'];
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const delayBetweenWords = 1000;

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let timeout;

    const type = () => {
      if (!isDeleting && currentText.length < texts[currentIndex].length) {
        currentText += texts[currentIndex][currentText.length];
        setDynamicText(currentText);
        timeout = setTimeout(type, typingSpeed);
      } else if (isDeleting && currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setDynamicText(currentText);
        timeout = setTimeout(type, deletingSpeed);
      } else if (!isDeleting && currentText.length === texts[currentIndex].length) {
        isDeleting = true;
        timeout = setTimeout(type, delayBetweenWords);
      } else if (isDeleting && currentText.length === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        timeout = setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (<>
    <section className="w-full flex flex-col md:flex-row h-screen px-[0%] md:px-[5%]" id="home" style={{paddingLeft:'0'}}>
      <div className='w-[100vw] md:w-[30vw] h-[40vh] md:h-[100%] md:pl-[4%] md:pt-[5%]'>
        <Swiper
          className="home-swiper"
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide className="swiper-slide">
            <div className="py-[10%] px-[5%] text-center md:text-left">
              <h3 className="font-[400] text-[16px] md:text-[20px] mb-[5px]">Heyy!</h3>
              <h1 className="text-[38px] md:text-[48px] mb-[20px]">I am Pankaj</h1>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row h-[20px] mb-[10px] items-center w-fit mx-auto md:mx-0">
                  <p className="text-[16px] md:text-[20px] text-gray-500">I create awesome</p>
                  <p className="fade-in text-[16px] md:text-[20px] text-white" id="demo">
                    {dynamicText}
                  </p>
                </div>
                <div className="bg-white w-fit text-center px-3 rounded-full mt-8 cursor-pointer mb-[10px] mx-auto md:mx-0">
                  <span className="text-black text-[16px]">Download CV</span>
                  <button className="py-2 pl-3">
                    <a href="assets/Resume_pankajC57.pdf" download>
                      <p>&#10515;</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>

      <HeroScene />
    </section>


  </>

  );
};

export default Home;
