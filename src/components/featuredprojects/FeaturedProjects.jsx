import React,{useEffect} from 'react';
import '../featuredprojects/FeaturedProjects.css';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import blueball from '/src/images/blueball.png';
import violetball from '/src/images/violetball.png';
import infideckproj from '/src/images/infideckproj.png';
import { Link } from 'react-router-dom';


const FeaturedProjects = () => {

  const isDarkModeOn = useSelector((store)=>store.darkModeSwitch.darkmode)

    const redirectToShimmering = () => {
        window.location.href = "https://shimmeringlightz.com/";
    }
    const redirectToInfideck = () => {
      window.location.href = "https://inficompanyprofile.netlify.app/";
  }


  const redirectToProjects = () => {
   window.location.href = "/myprojects";
   window.scrollTo(0,0)
  }
  

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
    <div  className={isDarkModeOn ? 'featured-projects-container darkmodebg' : 'featured-projects-container lightmodebg'}>
        <div className='featured-projects-content'>

              <div className='projects-title-section'>

                  <div className='projects-section-title'>Featured Projects</div>
                  <div className='projects-section-description'>1 craft digital solutions that showcase my
                      passion and expertise in design and
                      development.</div>
                  </div>

                 

              <div className='projects-listing-section sec1'>
              <img className={isDarkModeOn ? 'blueballs-balls' : 'blueballs-balls'}  src={blueball}  />
                    <img className={isDarkModeOn ? 'violetballs-balls' : 'blueballs-balls'}  src={violetball}  />
                  <div className='project-list-box '>

                      <div onClick={() => redirectToShimmering()} className='project-list-display faderedball'>
                          <div className='display-main-screen '>

                            

                             <div className='display-page-1'></div>

                          </div>
                      </div>

                      <div className='project-list-controls'>

                          <div className='project-list-btn btn1'>Landing Page</div>
                          <div className='project-list-btn btn2'>React & Framer Motion</div>
                          <div onClick={() => redirectToShimmering()} className='project-list-btn btn3 faderedball'>View Project <svg className='moreicon'  width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 9.33333L8.33333 1M8.33333 1H1.66667M8.33333 1V7.66667" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg></div>

                      </div>

                  </div>


                  <div className='project-list-box'>

<div onClick={() => redirectToInfideck()} className='project-list-display faderedball'>
    <div className='display-main-screen'>

      

       <div className='display-page-2'></div>

    </div>
</div>

            <div className='project-list-controls'>

              <div className='project-list-btn btn1 '>Landing Page</div>
              <div className='project-list-btn btn2 '>React & Framer Motion</div>
              <div onClick={() => redirectToInfideck()} className='project-list-btn btn3 faderedball'>View Project <svg className='moreicon' width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9.33333L8.33333 1M8.33333 1H1.66667M8.33333 1V7.66667" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>

            </div>

          </div>

                 

              </div>

              

              <div className='projects-listing-button faderedball'>
                <Link onClick={()=>{redirectToProjects()}} to="/myprojects" className='notextdec'>Explore all the project</Link>
              </div>


          </div>
      </div>
  )
}

export default FeaturedProjects