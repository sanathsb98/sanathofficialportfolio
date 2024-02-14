import React from 'react';
import '../navbar/Navbar.css';
import { navbarValue } from '../../features/navbarSlice';
import {  useDispatch,useSelector} from 'react-redux';
import crossicon from '/src/images/crossicon.svg';
import DarkModeToggle from '../darkmodetoggle/DarkModeToggle';
import resume from '/src/images/resume.pdf';


const Navbar = () => {

  const dispatch = useDispatch()
  const navbarexpanded = useSelector((store)=>store.navbarstate.navbarexpanded)
  const isDarkModeOn = useSelector((store)=>store.darkModeSwitch.darkmode)

  const expandNavbar = (navbarstatus) => {
    dispatch(navbarValue(navbarstatus))
  }

  const downloadMyResume = () => {
    var link = document.createElement("a")
    link.href = resume;
    link.download = resume;
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
  }

  
  return (
    <div  className={isDarkModeOn ? 'navbar-container darkmodebg' : 'navbar-container lightmodebg'}>

      <div  className={navbarexpanded ? 'navbar-mobile' : 'navbar-content'}>

        <div className='navbar-name'><div>Sanath S B </div><div className='reddot'/></div>

        {navbarexpanded ? (<div className='navbar-tab'>Projects</div>) : ('')}
        {navbarexpanded ? (<div onClick={()=>{downloadMyResume()}} className='navbar-tab'>Download Resume</div>) : ('')}
        {navbarexpanded ? (<div className='navbar-light-trigger'><DarkModeToggle /></div>) : ('')}
        
        <div className='navbar-burger-icon'>

          {navbarexpanded ? (
                  
            <svg onClick={() => { expandNavbar(false) }} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={isDarkModeOn ? 'navbardarkpath' : 'navbarlightpath'} d="M6 6L18 18" stroke-linecap="round" />
              <path className={isDarkModeOn ? 'navbardarkpath' : 'navbarlightpath'} d="M18 6L6.00001 18" stroke-linecap="round" />
            </svg>
          
          )
            :
            (<svg onClick={()=>{expandNavbar(true)}} className='navbar-burger' width="30px" height="30px" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={isDarkModeOn ? 'navbardarkpath' : 'navbarlightpath'}  d="M2.25 12.25C3.2165 12.25 4 11.4665 4 10.5C4 9.5335 3.2165 8.75 2.25 8.75C1.2835 8.75 0.5 9.5335 0.5 10.5C0.5 11.4665 1.2835 12.25 2.25 12.25Z"  />
              <path className={isDarkModeOn ? 'navbardarkpath' : 'navbarlightpath'} d="M30.355 8.75H9.145C8.23649 8.75 7.5 9.48649 7.5 10.395V10.605C7.5 11.5135 8.23649 12.25 9.145 12.25H30.355C31.2635 12.25 32 11.5135 32 10.605V10.395C32 9.48649 31.2635 8.75 30.355 8.75Z"  />
              <path className={isDarkModeOn ? 'navbardarkpath' : 'navbarlightpath'} d="M30.355 17.5H2.145C1.23649 17.5 0.5 18.2365 0.5 19.145V19.355C0.5 20.2635 1.23649 21 2.145 21H30.355C31.2635 21 32 20.2635 32 19.355V19.145C32 18.2365 31.2635 17.5 30.355 17.5Z"  />
              <path className={isDarkModeOn ? 'navbardarkpath' : 'navbarlightpath'} d="M30.355 0H2.145C1.23649 0 0.5 0.736492 0.5 1.645V1.855C0.5 2.76351 1.23649 3.5 2.145 3.5H30.355C31.2635 3.5 32 2.76351 32 1.855V1.645C32 0.736492 31.2635 0 30.355 0Z"  />
            </svg>)}

     


        </div>

      </div>

    </div>
  )
}

export default Navbar