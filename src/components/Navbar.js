import React, { useState } from "react";
import "../index.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Navbar() {
    const handleClick = function() {
        let burger = document.getElementById('burger').classList.toggle('active')
        let side = document.getElementById('sidebar').classList.toggle('active')
    }
    var lastScrollTop = 0
    window.addEventListener('scroll', function(){
      var scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
      if(scrollTop > lastScrollTop){
        document.getElementById('navbar').style.top = "-70px"
        document.getElementById('burger').style.top = "-70px"
        document.getElementById('navbar').style.transition = "0.35s"
        document.getElementById('burger').style.transition = "0.35s"
      }else{
        document.getElementById('navbar').style.top = "0"
        document.getElementById('burger').style.top = "0.3rem"
        document.getElementById('navbar').style.transition = "0.35s"
        document.getElementById('burger').style.transition = "0.35s"
      }
      lastScrollTop = scrollTop
    })
  return (
    <div>
      <nav id="navbar" className="navbar max-[640px]:h-12">
        <ul className="max-[640px]:items-start max-[640px]:w-full max-[640px]:mx-2">
          <div className="logo">
            <li>
              <img className="max-[640px]:w-full" src="images/LogoAmpu.png" />
            </li>
            <li>
              <h1 className='font-bold text-2xl max-[640px]:text-sm'>AMPU STUDIO</h1>
            </li>
          </div>
          <div className="flex justify-center items-center max-[640px]:invisible">
          <li className="mr-6">
            <FaFacebookF color="blue" fontSize="1.3rem" cursor='pointer' />
          </li>
          <li className="mr-6">
            <FaTwitter color="blue" fontSize="1.3rem" cursor='pointer' />
          </li>
          <li className="mr-6">
            <FaInstagram color="blue" fontSize="1.3rem" cursor='pointer' />
          </li>
          <a href="https://www.youtube.com/c/AMPUTV" target="_blank" className="py-2 px-3 rounded-lg bg-blue-500 flex flex-row justify-center items-center mr-8 text-white font-bold">
            <FaYoutube fontSize="1.3rem" />
            <h3 className="ml-3 text-sm">SUBSCRIBE</h3>
          </a>
          </div>
          
        </ul>
      </nav>
      <div className="burger max-[640px]:top-0" onClick={handleClick} id="burger">        
      <span id="strip1"></span>
      <span id="strip2"></span>
      <span id="strip3"></span>
          </div>
      <div id="sidebar">
        <ul>
          <div className="items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
          </div>
        </ul>
      </div>
    </div>
  );
  
  
}

export default Navbar;
