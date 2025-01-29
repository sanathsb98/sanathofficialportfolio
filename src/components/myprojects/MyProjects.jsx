import React from 'react';
import '../myprojects/MyProjects.css';
import { useSelector } from 'react-redux';
import wavehands from '/src/images/wavehands.svg';
import colorballs from '/src/images/colorballs.png';
import blueball from '/src/images/blueball.png';
import violetball from '/src/images/violetball.png';
import socialmediaapp from '/src/images/socialmediaapp.png';


const MyProjects = () => {


  const selector = useSelector((store) => store.modaleswitch.modaleStatus)
  const isDarkModeOn = useSelector((store) => store.darkModeSwitch.darkmode)

  const redirectToShimmering = () => {
    window.location.href = "https://shimmeringlightz.com/";
  }
  const redirectToInfideck = () => {
    window.location.href = "https://inficompanyprofile.netlify.app/";
  }
  const redirectToSocialMedia = () => {
    window.location.href = "https://ecommerce-frontend-silk.vercel.app/";
  }
  const redirectToEcomApp = () => {
    window.location.href = "https://pg-shop-app-frontend.vercel.app/";
  }
  const redirectToEcomAdmin = () => {
    window.location.href = "  https://ecomwadmin.netlify.app/";
  }



  return (
    <div className='myprojects-container'>

      <div className={isDarkModeOn ? 'featured-projects-container darkmodebg' : 'featured-projects-container lightmodebg'}>
        <div className='featured-projects-content'>

          <div className='projects-title-section'>

            <div className='projects-section-title'>Selected Projects</div>
            <div className='projects-section-description'>Discover my skills and creativity in action, with just one click.</div>
          </div>

          <div className='projects-listing-section sec1'>
            <img className={isDarkModeOn ? 'blueballs-balls' : 'blueballs-balls'} src={blueball} />
            <img className={isDarkModeOn ? 'violetballs-balls' : 'blueballs-balls'} src={violetball} />
            <div className='project-list-box '>

              <div onClick={() => redirectToShimmering()} className='project-list-display faderedball'>
                <div className='display-main-screen '>
                  <div className='display-page-1'></div>

                </div>
              </div>

              <div className='project-list-controls'>
                <div className='project-list-btn btn1'>Landing Page</div>
                <div className='project-list-btn btn2'>React & Framer Motion</div>
                <div onClick={() => redirectToShimmering()} className='project-list-btn btn3 faderedball'>View Project <svg className='moreicon' width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            <div className='project-list-box'>

              <div onClick={() => redirectToSocialMedia()} className='project-list-display faderedball'>
                <div className='display-main-screen'>
                  <div className='display-page-3'></div>
                </div>
              </div>

              <div className='project-list-controls'>

                <div className='project-list-btn btn1 '>Social Media</div>
                <div className='project-list-btn btn2 '>MongoDB & Node</div>
                <div onClick={() => redirectToSocialMedia()} className='project-list-btn btn3 faderedball'>View Project <svg className='moreicon' width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.33333L8.33333 1M8.33333 1H1.66667M8.33333 1V7.66667" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></div>

              </div>

            </div>

            <div className='project-list-box'>

              <div onClick={() => redirectToEcomApp()} className='project-list-display faderedball'>
                <div className='display-main-screen'>
                  <div className='display-page-4'></div>
                </div>
              </div>

              <div className='project-list-controls'>

                <div className='project-list-btn btn1 '>Social Media</div>
                <div className='project-list-btn btn2 '>MongoDB & Node</div>
                <div onClick={() => redirectToEcomApp()} className='project-list-btn btn3 faderedball'>View Project <svg className='moreicon' width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.33333L8.33333 1M8.33333 1H1.66667M8.33333 1V7.66667" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></div>

              </div>

            </div>

            <div className='project-list-box'>

              <div onClick={() => redirectToEcomAdmin()} className='project-list-display faderedball'>
                <div className='display-main-screen'>
                  <div className='display-page-5'></div>
                </div>
              </div>

              <div className='project-list-controls'>

                <div className='project-list-btn btn1 '>Admin Panel</div>
                <div className='project-list-btn btn2 '>Postgres & Node</div>
                <div onClick={() => redirectToEcomAdmin()} className='project-list-btn btn3 faderedball'>View Project <svg className='moreicon' width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 9.33333L8.33333 1M8.33333 1H1.66667M8.33333 1V7.66667" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></div>

              </div>

            </div>

            



          </div>






        </div>
      </div>
    </div>
  )
}

export default MyProjects