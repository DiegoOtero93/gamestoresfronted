import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";



function Footer() {
  return (
    <footer className='footer'>
    
    <div className='footer__rrss'>
    <FaFacebook />
    <IoLogoWhatsapp />
    <AiFillTikTok />
    <AiFillInstagram />




    </div>

    <p>&copy; Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer