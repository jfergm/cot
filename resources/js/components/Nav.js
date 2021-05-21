import React from 'react';

const Nav = () => {
  return (
    <nav className="h-16 w-full bg-black bg-opacity-50 flex z-40 fixed top-0 justify-around">
      <div className="flex justify-center items-center">
        <img className="h-3/4" src="/images/logos/logo.png"></img>
      </div>
      <div className="flex flex-row justify-end items-center">
        <a href="/nosotros" className="text-xs hover:text-black text-white m-2">QUIÉNES SOMOS</a>
        <a href="/servicios" className="text-xs text-white m-2">NUESTROS SERVICIOS</a>
        <a href="/preguntas-frecuentes" className="text-xs text-white m-2">FAQ</a>
        <a href="/contacto" className="text-xs text-white m-2">CONTACTO</a>
        <div className="border-white border-2 h-1/2">
          <a href="/cotiza" className="text-xs text-white m-2">COTIZA TU PRESTAMO</a>  
        </div>
      </div>
    </nav>
  )
};

export default Nav;