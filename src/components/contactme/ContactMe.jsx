import React from 'react';
import '../contactme/ContactMe.css';
import crossicon from '/src/images/crossicon.svg';
import {  useDispatch } from 'react-redux';
import { modaleClosed } from '../../features/modaleSlice';
import { useSelector } from 'react-redux';


const ContactMe = () => {

  const dispatch = useDispatch()
  const isDarkModeOn = useSelector((store)=>store.darkModeSwitch.darkmode)

  const closeTheModale = (modalevalue) => {
    dispatch(modaleClosed(modalevalue))
  }

  return (
    <div className={isDarkModeOn ? "contact-modale-container" : "contact-bglightmodale-container"}>

   
      
        <div  className={isDarkModeOn ? "contact-modale-content" : "contact-bglightmodale-content"}>

        <img onClick={()=>{closeTheModale(false)}} className='crossicon' src={crossicon} width='30px' height='30px'/>

           <div className={isDarkModeOn ? "contact-me contact-me-title" : "contact-bglightme contact-me-title"} >Contact Me</div>
           <div className='contact-me-name'>
               <div className={isDarkModeOn ? "your-name" : "your-bglightname"} >Name</div>
               <input  className={isDarkModeOn ? "modaleinput" : "modalebglightinput"}  type='text' placeholder='your name'/>
           </div>
           <div className='contact-me-name'>
               <div  className={isDarkModeOn ? "your-name" : "your-bglightname"}>Your Email</div>
               <input  className={isDarkModeOn ? "modaleinput" : "modalebglightinput"}  type='text' placeholder='your email'/>
           </div>
          <div onClick={()=>{closeTheModale(false)}} className='submit-btn'>Send</div>
        </div>
    </div>
  )
}

export default ContactMe