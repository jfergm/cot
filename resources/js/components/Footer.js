import React from 'react';

import { FaFacebookF,FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="flex self-end flex-col">
      <div className="bg-gray-300 w-screen h-28 flex flex-col justify-around">
        <div className="mx-40">
          <a href="/nosotros" className="text-xs m-2">QUIÉNES SOMOS</a>
          <a href="/servicios" className="text-xs m-2">NUESTROS SERVICIOS</a>
          <a href="/preguntas-frecuentes" className="text-xs m-2">FAQ</a>
          <a href="/contacto" className="text-xs m-2">CONTACTO</a>
          <a href="/cotiza" className="text-xs m-2">COTIZA TU PRESTAMO</a>  
        </div>
        <div className="mx-40">
          <div className="flex">
            <p class="text-xs m-2">© 2015 Dinkbit</p>
            <p class="text-xs m-2">Avisos de privacidad</p>
          </div>
          <div>
          <p class="text-xs m-2">Todos los derechos reservados</p>

          </div>
        </div>
      </div>
      <div className="bg-blue-800 w-screen h-12 flex fles-col justify-between items-center ">
        <div className="mx-40">
          <a className="text-white text-xs m-2">¿Preguntas?</a>
          <span className="text-white">|</span>
          <a className="text-white text-xs m-2">contacto@dinkbit.com</a>
          <span className="text-white">|</span>
          <a className="text-white text-xs m-2">2224 1607</a>
        </div>
        <div className="flex h-full items-center mx-40">
          <p className="text-white m-2 text-xs">SIGUENOS EN:</p>
          <FaFacebookF className="text-white m-2 text-xs" />
          <FaTwitter className="text-white m-2 text-xs" />
          <FaLinkedinIn className="text-white m-2 text-xs" />
          <div className="h-1/4 m-2">
             <img className="h-full" src="/images/logos/logo.png" />
           </div>
        </div>
      </div>
   </footer>
  )
};

export default Footer;