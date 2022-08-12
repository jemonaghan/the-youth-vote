import React from 'react';
import  '../components-styling/Footer.css';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
  
  return (
   
    <footer className="footer" role ='navigation'>

        <div className='footer-item'>
            <Link to='/sign-up'className='foot-link'>Sign up</Link>
        </div>

        <div className='footer-item'>
            <Link to='/'className='foot-link'>The Youth Vote</Link>
        </div>
             
        <div className='footer-item two-stack'>
            <a className='foot-link'href='https://twitter.com/CodeFirstGirls?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
            <FaTwitter color='white' size='1.3em' /></a>
            <a className='foot-link' href="mailto:the-youth-vote@domain.com">Contact</a>
        </div>


    </footer>
  )
}
export default Footer