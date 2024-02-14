import React,{useEffect} from 'react';
import '../home/Home.css';
import wavehands from '/src/images/wavehands.svg';
import colorballs from '/src/images/colorballs.png';
import blueball from '/src/images/blueball.png';
import violetball from '/src/images/violetball.png';
import About from '../about/About';
import FeaturedProjects from '../featuredprojects/FeaturedProjects';
import gsap from 'gsap';
import ContactMe from '../contactme/ContactMe';
import { useDispatch, useSelector } from 'react-redux';
import { modaleOpened } from '../../features/modaleSlice';


const Home = () => {

  const dispatch = useDispatch();
  const selector = useSelector((store)=>store.modaleswitch.modaleStatus)
  const isDarkModeOn = useSelector((store)=>store.darkModeSwitch.darkmode)

  const openModale = (status) => {
  dispatch(modaleOpened(status))
  }

  console.log(selector)

    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursorScale = document.querySelectorAll('.faderedball');
    
        let currentX = 0;
        let currentY = 0;
        let aimX = 0;
        let aimY = 0;
    
        const smoothMovement = () => {
          const diffX = aimX - currentX;
          const diffY = aimY - currentY;
    
          currentX += diffX * 0.1;
          currentY += diffY * 0.1;
    
          gsap.set(cursor, {
            left: currentX, // Adjust as needed
            top: currentY, // Adjust as needed
          });
    
          requestAnimationFrame(smoothMovement);
        };
    
        smoothMovement();
    
        const handleMouseMove = (e) => {
          aimX = e.clientX;
          aimY = e.clientY;
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        cursorScale.forEach((link) => {
          link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
            cursor.classList.remove('grow-small');
          });
          link.addEventListener('mousemove', () => {
            cursor.classList.add('grow');
    
            if (link.classList.contains('small')) {
              cursor.classList.remove('grow');
              cursor.classList.add('grow-small');
            }
          });
        });
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    
    return (
        <>
         <div className={isDarkModeOn ? "cursor":"blackcursor"}></div>
        <div className={isDarkModeOn ? 'homepage-container darkmodebg':'homepage-container lightmodebg'}>

                <div className='homepage-content'>
                    {isDarkModeOn ? ( <img className={isDarkModeOn ? 'color-balls' : 'bglightcolor-balls'}  src={colorballs} width='100%' height='100%' />):
                    (<img className={isDarkModeOn ? 'blueballs-balls' : 'blueballs-balls'}  src={blueball}  />
                 
                    )}
                     <img className={isDarkModeOn ? 'blueballs-balls' : 'blueballs-balls'}  src={blueball}  />
                    <img className={isDarkModeOn ? 'violetballs-balls' : 'blueballs-balls'}  src={violetball}  />

                    <div className='home-title '>
                        <div className={isDarkModeOn ? 'home-content-title':'home-bglightcontent-title'}>Developing with <span className='home-highlights'>Passion,</span></div>
                        <div className={isDarkModeOn ? 'home-content-title':'home-bglightcontent-title'}>Building with <span className='home-highlights'>Profession</span></div>
                    </div>
                    <div onClick={()=>openModale(true)} className={isDarkModeOn ? 'home-button':'homebglight-button'} >
                        <div  className={isDarkModeOn ? 'home-btn-text':'home-bglightbtn-text'} >Say hi</div>
                        <div className='wave-hands'><img className='waveimage' src={wavehands} /></div>
                        
                    </div>

            <div className='scroll-down'>
              <svg width="80" height="80" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.75 16.6667C18.75 17.357 19.3096 17.9167 20 17.9167C20.6904 17.9167 21.25 17.357 21.25 16.6667V11.6667C21.25 10.9763 20.6904 10.4167 20 10.4167C19.3096 10.4167 18.75 10.9763 18.75 11.6667V16.6667Z" fill="#A9A9A9" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.25 15.1239C31.25 9.58807 27.2227 4.87495 21.7546 4.01157C20.5921 3.82801 19.4079 3.82801 18.2454 4.01157C12.7773 4.87495 8.75 9.58807 8.75 15.1239V24.8761C8.75 30.412 12.7773 35.1251 18.2454 35.9885C19.4079 36.172 20.5921 36.172 21.7546 35.9885C27.2227 35.1251 31.25 30.412 31.25 24.8761L31.25 15.1239ZM21.3647 6.48098C25.6176 7.15249 28.75 10.8183 28.75 15.1239L28.75 24.8761C28.75 29.1818 25.6176 32.8475 21.3647 33.5191C20.4605 33.6618 19.5395 33.6618 18.6353 33.5191C14.3824 32.8475 11.25 29.1818 11.25 24.8761L11.25 15.1239C11.25 10.8183 14.3824 7.15249 18.6353 6.48098C19.5395 6.33821 20.4605 6.33821 21.3647 6.48098Z" fill="#A9A9A9" />
                <path className='down-arrow' d="M21.0624 46.6567L24.9153 42.0106C25.3302 41.5103 26.003 41.5103 26.4179 42.0106C26.8328 42.511 26.8328 43.3222 26.4179 43.8226L20.7512 50.6559C20.3363 51.1563 19.6636 51.1563 19.2486 50.6559L13.582 43.8226C13.167 43.3222 13.167 42.511 13.582 42.0106C13.9969 41.5103 14.6696 41.5103 15.0846 42.0106L18.9374 46.6567L18.9374 30.1041C18.9374 29.3965 19.4131 28.8229 19.9999 28.8229C20.5867 28.8229 21.0624 29.3965 21.0624 30.1041L21.0624 46.6567Z" fill="#A9A9A9" />
              </svg>
            </div>

          </div>

          <About />
          <FeaturedProjects />

        </div>
      
        { selector === true ? <ContactMe/> : ''}
      </>
    )
}

export default Home