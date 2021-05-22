import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaPhoneAlt, FaEnvelope, FaFacebookF,FaTwitter, FaLinkedinIn } from "react-icons/fa";


import { Loader } from "@googlemaps/js-api-loader"

import Nav from '../components/Nav';

const ContactPage = () => {
  const image = '/images/encabezados/header-contacto.jpg';
  const title = 'Lorem Ipsum';
  const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec lacus vitae turpis dictum vehicula non vitae tortor. Vivamus eget sapien a elit consectetur dignissim et id ligula.';

  useEffect(() => {
    const loader = new Loader({
      apiKey: "",
      version: "weekly",
    });
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 19.40338, lng: -99.24077 },
        zoom: 17,
      });
      
    });
    

  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <Nav></Nav>
      <Header title={title} body={body} image={image} />
      <div className="flex w-full items-center justify-center flex-col">
        <div className="w-4/5">
          <h2 className="text-blue-600 m-1 text-2xl">LOREM IPSUM</h2>
          <p className="text-gray-500 m-1">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text.</p>
          <p className="text-gray-500 m-1">Lorem Iosum es simplemente el texto30Lorem Ipsum es simplemente el texto de relleno Sólo dinos.</p>
          <div className="flex w-4/5">
            <form className="flex flex-col flex-1" method="POST">
              <input type="hidden" name="_token" value={ document.head.querySelector("[name=csrf-token][content]").content} />
              <input className="border-2 border-gray-300 rounded-md p-2 m-1" placeholder="Nombre" required type="text" name="name" />
              <input className="border-2 border-gray-300 rounded-md p-2 m-1" placeholder="Apellidos" required type="text" name="surname" />
              <input className="border-2 border-gray-300 rounded-md p-2 m-1" placeholder="Teléfono casa o celular" required type="tel" name="phone" />
              <input className="border-2 border-gray-300 rounded-md p-2 m-1" placeholder="Correo electrónico" required type="email" name="email" />
              <select className="border-2 border-gray-300 rounded-md p-2 m-1" required name="subject" >
                <option value="">Asunto (Elige uno)</option>
                <option value="Asunto 1"> Asunto 1 </option>
                <option value="Asunto 2"> Asunto 2</option>
              </select>
              <input className="border-2 border-gray-300 rounded-md p-2 m-1" placeholder="Empresa" name="company" type="text"/>
              <input className="border-2 border-gray-300 rounded-md p-2 m-1" placeholder="Teléfono oficina" name="company-phone" type="tel" />
              <textarea className="border-2 border-gray-300 rounded-md p-2 m-1" placeholder="Mensaje" required type="text" name="message" />
              <button className="bg-blue-600 rounded-md p-2 m-1 text-white">Enviar</button>
            </form>
            <div>
              <div className="mb-2">
                <h6 className="text-blue-600 m-1 text-xl">LOREM IPSUM</h6>
                <p className="text-gray-500 m-1">Bosque de Ciruelos #130 int. 1201</p>
                <p className="text-gray-500 m-1">Col. Bosque de Las Lomas. Cuajimalpa de Morelos</p>
                <p className="text-gray-500 m-1">México D.F. C.P. 11700</p>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-gray-500 m-1" />
                  <p className="text-gray-500 m-1">2224 1607</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-500 m-1" />
                  <p className="text-gray-500 m-1">contacto@dinkbit.com</p>
                </div>
              </div>
              <div className="my-2">
                <h6 className="text-blue-600 m-1 text-xl">DINKBIT</h6>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-gray-500 m-1" />
                  <p className="text-gray-500 m-1">2224 1607</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-500 m-1" />
                  <p className="text-gray-500 m-1">hacesmoscosasincreibles@dinkbit.com</p>
                </div>
              </div> 
              <div className="my-2">
                <h6 className="text-blue-600 m-1 text-xl">SIGUENOS EN</h6>
                <div className="flex items-center">
                  <FaFacebookF className="text-gray-500 m-1" />
                  <FaTwitter className="text-gray-500 m-1" />
                  <FaLinkedinIn  className="text-gray-500 m-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 p-2">
          <div id="map" className="relative">

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage;

if (document.getElementById('app')) {
    ReactDOM.render(<ContactPage />, document.getElementById('app'));
}
