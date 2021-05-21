import React from 'react';

import { FaFacebookF,FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="flex w-full self-end flex-col">
      <div className="bg-gray-300 min-h-28 flex flex-col justify-around">
        <div className="flex items-center justify-center flex-col md:flex-row lg:flex-row">
          <a href="/nosotros" className="text-xs m-2">QUIÉNES SOMOS</a>
          <a href="/servicios" className="text-xs m-2">NUESTROS SERVICIOS</a>
          <a href="/preguntas-frecuentes" className="text-xs m-2">FAQ</a>
          <a href="/contacto" className="text-xs m-2">CONTACTO</a>
          <a href="/cotiza" className="text-xs m-2">COTIZA TU PRESTAMO</a>  
        </div>
          <div className="flex justify-center items-center">
            <p className="text-xs m-2">© 2015 Dinkbit</p>
            <p className="text-xs m-2">Todos los derechos reservados</p>
            <p className="text-xs m-2">Avisos de privacidad</p>
          </div>
      </div>
      <div className="bg-blue-800 w-full h-24 lg:h-12 md:h-12 flex flex-col lg:flex-row md:flex-row justify-between items-center ">
        <div className="flex w-full md:w-1/2 lg:w-1/2 h-1/2 md:h-full lg:h-full justify-center items-center">
          <a className="text-white text-xs m-2">¿Preguntas?</a>
          <span className="text-white">|</span>
          <a className="text-white text-xs m-2">contacto@dinkbit.com</a>
          <span className="text-white">|</span>
          <a className="text-white text-xs m-2">2224 1607</a>
        </div>
        <div className="flex w-full md:w-1/2 lg:w-1/2 h-1/2 md:h-full lg:h-full justify-center items-center">
          <p className="text-white m-2 text-xs">SIGUENOS EN:</p>
          <FaFacebookF className="text-white m-2 text-xs" />
          <FaTwitter className="text-white m-2 text-xs" />
          <FaLinkedinIn className="text-white m-2 text-xs" />
          <div className="h-1/4 m-2">
             <img className="h-full w-auto" src="/images/logos/logo.png" />
           </div>
        </div>
      </div>
   </footer>
  )
};

export default Footer;