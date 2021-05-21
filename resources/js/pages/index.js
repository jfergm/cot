import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Nav from '../components/Nav';

const IndexPage = () => {
  const image = '/images/encabezados/header-home.jpg';
  const title = 'Lorem Ipsum';
  const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae sem vitae risus viverra sodales a vitae diam. Nunc orci tortor, dapibus congue maximus non, consequat id neque. Morbi sollicitudin cursus felis at feugiat. Donec tempor rhoncus magna et pharetra. Aliquam eget egestas massa. Fusce volutpat maximus turpis, nec varius urna feugiat eget. Aenean dignissim maximus consectetur. Mauris ex risus, pretium quis cursus quis, convallis in ipsum.';
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <Nav></Nav>
      <Header title={title} body={body} image={image} />
      <div className="bg-white flex justify-center flex-col items-center m-8">
        <h2 className="text-blue-600 text-2xl">LOREM IPSUM</h2>
        <p className="w-full md:w-3/4 lg:w-1/2 text-center text-gray-500">
         Pellentesque ac nibh eget mi finibus ullamcorper at in lectus. Vivamus sem tellus, pulvinar sed vehicula eget, tincidunt sed lacus. 
         Sed sit amet iaculis risus, vel scelerisque turpis. Proin efficitur id augue et tincidunt. Morbi metus sapien, placerat sodales velit sit amet,
         elementum suscipit tellus. Donec maximus, erat vel efficitur varius, lectus diam tempor augue, quis scelerisque nisi quam eget odio. 
         Pellentesque dapibus hendrerit ornare. Curabitur eu vulputate neque. Nunc interdum, odio eget vulputate maximus, arcu ligula dictum odio,
         vel blandit velit elit quis dolor. 
        </p>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center mb-8">
        <div className="flex flex-col justify-center items-center mx-8 my-4">
          <div className="w-48 h-48 flex justify-center items-center rounded-full bg-blue-400">
            <img className="" src="/images/elementos/cotiza.png" />
          </div>
          <p className="text-gray-500">Lorem Ipsum</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-8 my-4">
          <div className="w-48 h-48 flex justify-center items-center rounded-full bg-green-400">
            <img className="" src="/images/elementos/clock.png" />
          </div>
          <p className="text-gray-500">Lorem Ipsum</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-8 my-4">
          <div className="w-48 h-48 flex justify-center items-center rounded-full bg-yellow-400">
            <img className="" src="/images/elementos/money.png" />
          </div>
          <p className="text-gray-500">Lorem Ipsum</p>
        </div>
      </div>
      <div className="bg-gray-200 w-full flex items-center justify-center flex-col py-4">
        <h2 className="text-blue-600 text-2xl m-2">¿POR QUÉ USAR LOREM IPSUM?</h2>
        <div className="flex w-full flex-col lg:flex-row md:flex-row  flex-wrap m-2 items-center justify-center">
          <div className="w-11/12 md:w-1/2 lg:w-1/4 my-4 p-2">
            <h5 className="text-blue-600">PRIMERO</h5>
            <p className="text-gray-500">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar</p>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 my-4 p-2">
            <h5 className="text-blue-600">SEGUNDO</h5>
            <p className="text-gray-500">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar</p>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 my-4 p-2">
            <h5 className="text-blue-600">TERCERO</h5>
            <p className="text-gray-500">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full flex items-center justify-center flex-col py-4">
      <div className="flex w-full flex-col lg:flex-row md:flex-row  flex-wrap m-2 items-center justify-center">
          <div className="w-11/12 md:w-1/2 lg:w-1/4 my-4 p-2">
            <h5 className="text-blue-600">CUARTO</h5>
            <p className="text-gray-500">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar</p>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 my-4 p-2">
            <h5 className="text-blue-600">QUINTO</h5>
            <p className="text-gray-500">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar</p>
          </div>
          <div className="w-11/12 md:w-1/2 lg:w-1/4 my-4 p-2">
            <h5 className="text-blue-600">SEXTO</h5>
            <p className="text-gray-500">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar</p>
          </div>

        </div>
      </div>
      <div className="bg-white w-full flex items-center justify-center flex-col py-4">
        <h2 className="text-blue-600 text-2xl m-2">¿POR QUÉ USAR LOREM IPSUM?</h2>
        <div className="flex w-full flex-col lg:flex-row md:flex-row  flex-wrap m-2 items-center justify-center">
          <div class="flex items-center w-11/12 lg:w-2/3 my-4 p-2">
            <img src="/images/elementos/check.png"></img>
            <p className="mx-2 text-gray-500">
              Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido de un texto de un sitio mientras 
              que mira su diseño.
            </p>
          </div>
          <div class="flex items-center w-11/12 lg:w-2/3 my-4 p-2">
            <img src="/images/elementos/check.png"></img>
            <p className="mx-2 text-gray-500">
              El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letas, al contrario de usar textos como por ejemplo
              "Contenido aquí, contenido aquí".
            </p>
          </div>
          <div class="flex items-center w-11/12 lg:w-2/3 my-4 p-2">
            <img src="/images/elementos/check.png"></img>
            <p className="mx-2 text-gray-500">
              Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum 
              como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto
              si se encuentran en estado de desarrollo, Muchas versiones han evolucionado a través de los años, algunas veces por accidente, 
              otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage;

if (document.getElementById('app')) {
  ReactDOM.render(<IndexPage />, document.getElementById('app'));
}