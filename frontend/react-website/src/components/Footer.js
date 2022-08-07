import  '../components-styling/Footer.css';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
  
  return (
   
     <footer className='footer--pin' role ='navigation'>
        <div className='footer'>
        <div className='row text-end'>
        <div className='col'>
        </div>
        <div className='col-1 text-center'>
        <a className='footer-link'href='https://twitter.com/CodeFirstGirls?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
        <FaTwitter color='white' size='1.5em' /></a>
          </div>
        <div className='row'>
        <div className='col-sm-8 col-md-4'>
        <Link to='/'className='footer-link'>Sign up</Link>
          </div>
        <div className='col-4 d-none d-md-block text-center'>
        <Link to='/'className='footer-link'>Home</Link>
          </div>
        <div className='col-4 text-end'>
        <Link to='javascript:void(0)'
        className='footer-link'
        onClick={() => window.location = 'mailto:the-youth-vote@domain.com'}>Contact</Link>
          </div>
          </div>
          </div>
         </div>
      </footer>
  )
}
export default Footer