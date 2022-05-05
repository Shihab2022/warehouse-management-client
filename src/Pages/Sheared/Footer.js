import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../img/logo2.png'
import { FaFacebook ,FaTwitter ,FaLinkedin ,FaGithub,FaPaypal} from "react-icons/fa";
const Footer = () => {
    return (
      <>
      <footer className="text-white body-font md:px-24 px-5 w-screen bg-black">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <img src={logo2} alt="" />
     
    </Link>
    
    <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Royals Car  — MD SHIHAB UDDIN 
   
    </p>
    <div className="inline-flex sm:ml-auto text-xl text-black  sm:mt-0 mt-4 justify-center sm:justify-start">
     
      <Link to='/' className="ml-4 border-amber-500 rounded-sm hover:text-amber-500 hover:bg-black bg-white border-2 p-1 ">
     <FaFacebook/>
      </Link>
      <Link to='/' className="ml-4 border-amber-500 rounded-sm hover:text-amber-500 hover:bg-black bg-white border-2 p-1 ">
        <FaTwitter/>
      </Link>
      <Link to='/' className="ml-4 border-amber-500 rounded-sm hover:text-amber-500 hover:bg-black bg-white border-2 p-1 ">
       <FaLinkedin/>
      </Link>
      <Link to='/' className="ml-4 border-amber-500 rounded-sm hover:text-amber-500 hover:bg-black bg-white border-2 p-1 ">
       <FaGithub/>
      </Link>
      <Link to='/' className="ml-4 border-amber-500 rounded-sm hover:text-amber-500 hover:bg-black bg-white border-2 p-1 ">
       <FaPaypal/>
      </Link>
    </div>
  </div>
</footer>
      </>
    );
};

export default Footer;