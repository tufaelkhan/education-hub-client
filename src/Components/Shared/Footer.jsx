import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-base-200'>
            <div className="footer p-10 text-base-content">
  <div>
    <img style={{'width':80}} src="https://img.freepik.com/premium-vector/admission-open-label-social-media-post-template_686319-365.jpg" alt="" />
    <p className='text-2xl'><span className='text-green-800 font-bold'>Admission</span> <span className='text-orange-500 font-bold'>Hub</span><br/> </p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Admission</a> 
    <a className="link link-hover">Personal Tranning</a> 
    <a className="link link-hover">Skills Session</a> 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Colleges</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</div>
  <div className='text-center'>
    <p className='pb-5'>Copyright © 2023 - All right reserved by Admission Ltd</p>
  </div>
        </footer>
    );
};

export default Footer;