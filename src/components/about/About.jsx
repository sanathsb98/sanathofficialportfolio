import React,{useEffect} from 'react';
import '../about/About.css';
import myprofile from '/src/images/myprofile.png';
import reactlogo from '/src/images/reactlogo.png';
import mongodblogo from '/src/images/mongodblogo.png';
import nodejslogo from '/src/images/nodejslogo.png';
import pythonlogo from '/src/images/pythonlogo.png';
import reactblacklogo from '/src/images/reactblacklogo.png';
import pythonblacklogo from '/src/images/pythonblacklogo.png';
import javablacklogo from '/src/images/javablacklogo.png';
import javalogo from '/src/images/javalogo.png';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import blueball from '/src/images/blueball.png';
import violetball from '/src/images/violetball.png';
import pinkball from '/src/images/pinkball.png';

const About = () => {

    const isDarkModeOn = useSelector((store)=>store.darkModeSwitch.darkmode)

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
        <div className='about-container'>
              <div className="cursor"></div>
             
            <div className='about-content'>

                <div className='about-info'>
                    <div className='about-me'>About Me</div>

             
                

                    <div className='about-socialicons-container'>
                        
                    

                        <div className='about-socialicon'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9997 0C7.17757 0 0 7.17757 0 16C0 24.8227 7.17757 32 15.9997 32C24.8222 32 32 24.8227 32 16C31.9997 7.17757 24.8219 0 15.9997 0ZM15.9997 30.4219C8.0476 30.4219 1.57806 23.9524 1.57806 16C1.57806 8.04787 8.0476 1.57806 15.9997 1.57806C23.9519 1.57806 30.4219 8.04787 30.4219 16C30.4217 23.9524 23.9519 30.4219 15.9997 30.4219Z" fill="#484E53" />
                                <path d="M7.87305 12.6096H11.5757V22.271H7.87305V12.6096Z" fill="#A9A9A9" />
                                <path d="M9.68841 11.0679C10.7234 11.0679 11.5624 10.3025 11.5624 9.35831C11.5624 8.41414 10.7234 7.64874 9.68841 7.64874C8.65345 7.64874 7.81445 8.41414 7.81445 9.35831C7.81445 10.3025 8.65345 11.0679 9.68841 11.0679Z" fill="#A9A9A9" />
                                <path d="M20.8831 12.3909C20.1248 12.3909 19.4823 12.529 18.9541 12.8049C18.4265 13.0811 17.9052 13.5403 17.3895 14.1831V12.6092H13.9414V22.2707H17.6441V17.6309C17.6441 16.7514 17.7837 16.1423 18.0628 15.8024C18.3418 15.4629 18.7053 15.293 19.1543 15.293C19.5606 15.293 19.876 15.419 20.1006 15.6707C20.3252 15.9224 20.437 16.3513 20.437 16.9581V22.2707H24.1581V16.1302C24.1581 14.8564 23.8682 13.9148 23.2888 13.3052C22.7102 12.6955 21.9077 12.3909 20.8831 12.3909Z" fill="#A9A9A9" />
                            </svg>
                        </div>
                        
                        <div className='about-socialicon'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9997 0C7.17757 0 0 7.17757 0 16C0 24.8224 7.17757 32 15.9997 32C24.8222 32 32 24.8224 32 16C32 7.17757 24.8219 0 15.9997 0ZM15.9997 30.4219C8.0476 30.4219 1.57806 23.9521 1.57806 16C1.57806 8.04787 8.0476 1.57806 15.9997 1.57806C23.9519 1.57806 30.4219 8.04787 30.4219 16C30.4219 23.9521 23.9519 30.4219 15.9997 30.4219Z" fill="#484E53" />
                                <path d="M15.9326 7.0578C11.0017 7.0578 6.99023 11.0692 6.99023 15.9999C6.99023 20.9308 11.0017 24.9423 15.9326 24.9423C20.8635 24.9423 24.875 20.9308 24.875 15.9999C24.875 11.0692 20.8635 7.0578 15.9326 7.0578ZM21.7701 11.5182C22.723 12.7539 23.2563 14.2616 23.2922 15.8216C21.4258 15.5317 19.7697 15.5736 18.3176 15.8316C18.0825 15.281 17.8322 14.737 17.5669 14.2004C19.0651 13.5647 20.5274 12.6991 21.7701 11.5182ZM20.6784 10.3754C19.5585 11.4375 18.2142 12.2168 16.8271 12.7885C15.7643 10.8694 14.7527 9.4704 14.2625 8.82892C14.8099 8.70087 15.3702 8.6361 15.9323 8.63587C17.7397 8.63587 19.3957 9.29129 20.6784 10.3754ZM12.9745 9.25789L12.7428 9.44883C12.7673 9.47855 13.9766 10.9696 15.3085 13.3332C12.5624 14.1822 9.91123 14.3322 8.75609 14.3524C9.28106 12.0668 10.871 10.1847 12.9745 9.25789ZM8.5683 15.9999C8.5683 15.9781 8.56961 15.9565 8.56988 15.9347C9.73843 15.9328 12.8438 15.8153 16.0683 14.7606C16.3083 15.2393 16.5361 15.724 16.7514 16.2143C13.2233 17.3071 11.1482 19.6237 10.3123 20.7509C9.22556 19.4677 8.5683 17.8094 8.5683 15.9999ZM11.4583 21.8437C12.0435 20.9805 13.8906 18.6589 17.3421 17.6603C17.9404 19.2539 18.427 20.9955 18.6587 22.8085L18.7729 22.7937C17.8736 23.1712 16.9079 23.3652 15.9326 23.3642C14.3142 23.3655 12.7408 22.8309 11.4583 21.8437ZM20.141 22.0376C19.8833 20.3761 19.4414 18.7894 18.9078 17.3239C20.1539 17.1437 21.5687 17.1398 23.1617 17.3991C22.7924 19.3109 21.6818 20.9606 20.141 22.0376Z" fill="#A9A9A9" />
                            </svg>
                        </div>
                        <div className='about-socialicon'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9997 0C7.17757 0 0 7.17757 0 16C0 24.8227 7.17757 32 15.9997 32C24.8222 32 32 24.8227 32 16C31.9997 7.17757 24.8219 0 15.9997 0ZM15.9997 30.4219C8.0476 30.4219 1.57806 23.9524 1.57806 16C1.57806 8.04787 8.0476 1.57806 15.9997 1.57806C23.9519 1.57806 30.4219 8.04787 30.4219 16C30.4217 23.9524 23.9519 30.4219 15.9997 30.4219Z" fill="#484E53" />
                                <path d="M20.9272 6.61115H17.4565C17.4486 6.6111 17.4407 6.61145 17.4329 6.6122C13.9288 6.62325 13.4711 9.07004 13.4693 11.2086C13.4644 11.2288 13.462 11.2496 13.4619 11.2704V12.7717H11.0638C10.994 12.7717 10.9271 12.7994 10.8778 12.8487C10.8285 12.898 10.8008 12.9649 10.8008 13.0347V16.7371C10.8008 16.8068 10.8285 16.8737 10.8778 16.923C10.9271 16.9724 10.994 17.0001 11.0638 17.0001H13.4619V25.1247C13.4619 25.1945 13.4896 25.2614 13.539 25.3107C13.5883 25.36 13.6552 25.3878 13.7249 25.3878H17.2248C17.2946 25.3878 17.3615 25.36 17.4108 25.3107C17.4601 25.2614 17.4878 25.1945 17.4878 25.1247V17.0003H20.927C20.9967 17.0003 21.0636 16.9726 21.1129 16.9233C21.1623 16.874 21.19 16.8071 21.19 16.7373V13.0349C21.19 12.9652 21.1623 12.8983 21.1129 12.8489C21.0636 12.7996 20.9967 12.7719 20.927 12.7719H17.2248V10.7817H20.927C20.9967 10.7817 21.0636 10.754 21.1129 10.7047C21.1623 10.6554 21.19 10.5885 21.19 10.5187V6.87416C21.19 6.83963 21.1832 6.80544 21.17 6.77353C21.1569 6.74162 21.1375 6.71263 21.1131 6.6882C21.0887 6.66377 21.0597 6.6444 21.0278 6.63118C20.9959 6.61795 20.9617 6.61115 20.9272 6.61115Z" fill="#A9A9A9" />
                            </svg>
                        </div>
                        <img className={isDarkModeOn ? 'violetballs-balls' : 'blueballs-balls'}  src={pinkball}  />
                        <div className='about-socialicon'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9999 0C7.17762 0 0 7.17757 0 16C0 24.8224 7.17762 32 15.9999 32C24.8224 32 32 24.8224 32 16C32 7.17757 24.8221 0 15.9999 0ZM15.9999 30.4219C8.04767 30.4219 1.57808 23.9521 1.57808 16C1.57808 8.04787 8.04767 1.57806 15.9999 1.57806C23.9521 1.57806 30.4219 8.04787 30.4219 16C30.4219 23.9521 23.9521 30.4219 15.9999 30.4219Z" fill="#484E53" />
                                <path d="M21.002 8.29346H10.9891C9.51225 8.29346 8.31055 9.49489 8.31055 10.972V21.0308C8.31055 22.5076 9.51199 23.7093 10.9891 23.7093H21.0017C22.4785 23.7093 23.6802 22.5079 23.6802 21.0308V10.9717C23.6802 9.49489 22.4788 8.29346 21.002 8.29346ZM18.3116 15.9728C18.3116 17.25 17.2727 18.2889 15.9955 18.2889C14.7183 18.2889 13.6794 17.25 13.6794 15.9728C13.6794 15.3393 13.9356 14.7648 14.3491 14.3464H17.6417C18.0712 14.7787 18.312 15.3635 18.3116 15.9728ZM18.9831 10.4365H21.3292V12.8533H18.9831V10.4365ZM21.002 22.131H10.9891C10.6973 22.1306 10.4176 22.0146 10.2113 21.8083C10.005 21.602 9.88897 21.3223 9.88862 21.0305V14.3464H12.4619C12.225 14.8559 12.1019 15.4109 12.1014 15.9728C12.1014 18.1203 13.8483 19.867 15.9955 19.867C18.1428 19.867 19.8897 18.1201 19.8897 15.9728C19.8897 15.3919 19.7582 14.8422 19.5291 14.3464H22.1022V21.0305C22.1018 21.3222 21.9858 21.6019 21.7796 21.8082C21.5733 22.0145 21.2937 22.1306 21.002 22.131Z" fill="#A9A9A9" />
                            </svg>
                        </div>
                        <div className='about-socialicon'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9997 0C7.17757 0 0 7.17757 0 16C0 24.8227 7.17757 32 15.9997 32C24.8222 32 32 24.8227 32 16C31.9997 7.17757 24.8219 0 15.9997 0ZM15.9997 30.4219C8.0476 30.4219 1.57806 23.9524 1.57806 16C1.57806 8.04787 8.0476 1.57806 15.9997 1.57806C23.9519 1.57806 30.4219 8.04787 30.4219 16C30.4217 23.9524 23.9519 30.4219 15.9997 30.4219Z" fill="#484E53" />
                                <path d="M23.1403 10.7868C23.508 10.5969 24.3885 10.0327 24.8036 8.82181C24.8036 8.82181 23.8033 9.54509 22.442 9.63031L22.4173 9.64399C22.0605 9.25362 21.6262 8.94198 21.1422 8.72899C20.6582 8.516 20.135 8.40635 19.6062 8.40705C17.5 8.40705 15.7928 10.1145 15.7928 12.2207C15.7928 12.5403 15.8325 12.8506 15.9069 13.1473L15.8885 13.1197C15.8885 13.1197 11.804 13.3538 7.95324 9.14111C7.95324 9.14111 6.25077 12.0345 9.16572 14.2472C8.52739 14.3535 7.40013 13.779 7.40013 13.779C7.40013 13.779 7.46378 16.821 10.4847 17.5659C9.99552 17.6937 9.0805 17.7358 8.78278 17.6085C8.78278 17.6085 9.22937 19.9272 12.3145 20.3317C11.5273 20.7786 10.0594 22.1399 6.74023 21.8845C6.74023 21.8845 9.12364 23.8416 13.5488 23.5654C17.974 23.2893 21.1866 20.3101 22.4843 17.1616C23.782 14.0131 23.4209 12.2204 23.4209 12.2204C23.4209 12.2204 24.5053 11.6513 25.2507 10.2899C24.9064 10.393 23.6295 10.705 23.1542 10.8204C23.1494 10.8093 23.1448 10.7981 23.1403 10.7868Z" fill="#A9A9A9" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='about-description-box'>

                    
                    <div className='about-description-des faderedball'>Hi, I am Sanath SB ! I'm a developer with 1 year of web development
                        experience with the past 2 years spent honing my skills in
                        WordPress, Shopify. And Webflow</div>

                        <img className={isDarkModeOn ? 'blueballs-balls' : 'blueballs-balls'}  src={blueball}  />
                    <img className={isDarkModeOn ? 'violetballs-balls' : 'blueballs-balls'}  src={violetball}  />

                    <div className='about-description-image'>

                        <div className='about-description-box '>I understand the importance of a Pixel-
                            perfect Website, pride myself on
                            producing high-quality websites, and I'm
                            comfortable working solo or as part of a
                            team.</div>

                        <div className='about-image-box'>
                            <img className='myprofile' src={myprofile} />
                        </div>

                    </div>


                </div>



            </div>

            <div className='experience-container'>



                <div className='experience-box'>

                    <div className='experience-content'>
                        <div className='experience-logo'>
                            {isDarkModeOn ? (   <img className='reactlogo faderedball' src={reactlogo} />):(  <img className='reactlogo faderedball' src={reactblacklogo} />)}
                           
                          
                          

                        </div>

                    </div>

                </div> 


                {/* <div className='experience-box middlebox'>

                    <div className='experience-content'>
                        <div className='experience-logo'>
                            <img className='mongologo faderedball' src={mongodblogo} />
                        </div>

                    </div>
                </div> */}


                {/* <div className='experience-box'>

                    <div className='experience-content'>
                        <div className='experience-logo'>
                            <img className='nodejslogo' src={nodejslogo} />
                        </div>

                    </div>

                </div> */}
                
                <div className='experience-box  middlebox'>
                    <div className='experience-content'>
                        <div className='experience-logo'>
                        {isDarkModeOn ? (  <img className='pythonlogo faderedball' src={pythonlogo} />):(   <img className='pythonlogo faderedball' src={pythonblacklogo} />)}
                          
                        </div>

                    </div>
                </div>

                <div className='experience-box'>
                    <div className='experience-content'>
                        <div className='experience-logo'>
                        {isDarkModeOn ? (  <img className='javalogo faderedball' src={javalogo} />):(    <img className='javalogo faderedball' src={javablacklogo} />)}   
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default About