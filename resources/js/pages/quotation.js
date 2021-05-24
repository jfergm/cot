import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const QuotationPage = () => {
  
  const [amount, setAmount] = useState(10000);
  const [times, setTimes] = useState(8);
  const [quotation, setQuotation] = useState({});

  useEffect( () => {
  }, [quotation])
  useEffect(() => {
    fetch(`/cotizar_ajax?q=${times}&amount=${amount}`)
    .then( (response) => {
      return response.json()
    })
    .then( data => {
      setQuotation({...data})
    })
    .catch( (error) => {
      alert("No se ha podido procesar")
    });
  }, [times, amount])

    const image = '/images/encabezados/header-cotizador.jpg';
    const title = 'Lorem Ipsum';
    const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae sem vitae risus viverra sodales a vitae diam. Nunc orci tortor, dapibus congue maximus non, consequat id neque. Morbi sollicitudin cursus felis at feugiat. Donec tempor rhoncus magna et pharetra. Aliquam eget egestas massa. Fusce volutpat maximus turpis, nec varius urna feugiat eget. Aenean dignissim maximus consectetur. Mauris ex risus, pretium quis cursus quis, convallis in ipsum.';
    return (
      <div className="flex flex-col min-h-screen w-full relative">
        <Nav></Nav>
        <Header title={title} body={body} image={image} />
        <div className="flex w-full items-center justify-center flex-col">
          <div className="flex w-full justify-center flex-col lg:flex-row md:flex-row">
            <div className="lg:w-2/5 md:w-2/5 w-full ">
              <h2 className="text-blue-600 m-1 text-2xl">LOREM IPSUM</h2>
              <p className="text-gray-500 m-1">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text.</p>
              <p className="text-gray-500 m-1">Lorem Iosum es simplemente el texto30Lorem Ipsum es simplemente el texto de relleno Sólo dinos.</p>
            </div>
            <div className="lg:w-2/5 md:w-2/5 w-full flex border-2 m-4 flex-col">
              <div class="max-w-full">
                <div className="border-b-2 m-2 p-2">
                  <p>Arrastre los botones de abajo para el monto que desa pedir prestado y en cuentas quincenas</p>
                </div>
                <div className="flex items-center flex-col">
                  <h2 className="self-start m-2 p-2 text-xl text-gray-600">MONTO</h2>
                  <div className="w-11/12 flex items-center justify-center flex-col">
                    <input type="range" className="w-full" min="5000" max="20000" step="5000"
                      value={amount}
                      onChange={({target}) => setAmount(target.value)}
                    />
                    <div className="flex justify-between w-full">
                      <span className="">$5, 000</span>
                      <span>$20, 000</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <h2 className="self-start m-2 p-2 text-xl text-gray-600">QUINCENAS</h2>
                  <div className="w-11/12 flex items-center justify-center flex-col">
                    <input type="range" className="w-full" min="8" max="12" step="2"
                      value={times}
                      onChange={({target}) => setTimes(target.value)}
                    />
                    <div className="flex justify-between w-full">
                      <span>8</span>
                      <span>12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 w-full justify-center items-center flex flex-col">
                <div class="flex w-full items-center justify-evenly p-3 m-2">
                  <div className="flex items-center flex-col">
                    <p className="text-xl text-gray-500">MONTO</p>
                    <p className="text-blue-600">$ { quotation.amount }</p>
                  </div>
                  <div  className="flex items-center flex-col">
                    <p className="text-xl text-gray-500">QUINCENAS</p>
                    <p className="text-blue-600">{ quotation.q }</p>
                  </div>
                  <div className="flex items-center flex-col">
                    <p className="text-xl text-gray-500">PAGOS</p>
                    <p className="text-blue-600">${ quotation.pay }</p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col m-2 border-2">
                  <div className=" bg-green-500 flex-1 p-2">
                    <p className="text-white text-2xl text-center">OBTENGA SU DINERO AHORA</p>
                  </div>
                  <div className=" flex-1 p-2">
                    <p className="text-gray-500 text-xl text-center">VER TABLA DE AMORTIZACIÓN</p>
                  </div>
                  <div class="block bg-scroll overflow-auto">
                  <table className=" bg-white w-full">
                    <thead className="p-2 bg-gray-100 text-gray-500">
                      <tr className="border-t-2">
                        <th className="p-2 text-center">No de pago</th>
                        <th className="p-2 text-center">Saldo Insoluto</th>
                        <th className="p-2 text-center">Amortización</th>
                        <th className="p-2 text-center">Interés</th>
                        <th className="p-2 text-center">IVA</th>
                        <th className="p-2 text-center">Pago</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        quotation.amortization && (
                          quotation.amortization.map( item => {
                            return(
                                <tr key={item.num} className={`${item.num % 2 === 0 ? 'bg-gray-100' : ''} text-gray-500`}>
                                  <td className="p-2 text-center">{item.num}</td>
                                  <td className="p-2 text-center">$ {item.balance}</td>
                                  <td className="p-2 text-center">$ {item.amort}</td>
                                  <td className="p-2 text-center">$ {item.interest}</td>
                                  <td className="p-2 text-center">$ {item.iva}</td>
                                  <td className="p-2 text-center">$ {item.pay}</td>
                              </tr>
                            )
                          })
                        )
                      }
                    </tbody>
                  </table>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-around flex-col items-center">
            <div className="p-2 w-4/5 border-t-2"></div>
            <div class="flex items-center w-4/5 my-1 p-2">
              <img src="/images/elementos/sq-check.png"></img>
              <p className="mx-2 text-gray-500">
                Lorem Ipsum <span className="text-blue-600">{quotation.interestRate?.TIRA}%</span>
              </p>
            </div>
            <div class="flex items-center w-4/5 my-1 p-2 ">
              <img src="/images/elementos/sq-check.png"></img>
              <p className="mx-2 text-gray-500">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              </p>
            </div>
            <div class="flex items-center w-4/5 my-1 p-2 ">
              <img src="/images/elementos/sq-check.png"></img>
              <p className="mx-2 text-gray-500">
                Lorem <span className="text-blue-600">{quotation.interestRate?.CAT}%</span> Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el text <span className="text-blue-600">01/10/2015</span>
              </p>
            </div>
            <div class="flex items-center w-4/5 my-1 p-2 ">
              <img src="/images/elementos/sq-check.png"></img>
              <p className="mx-2 text-gray-500">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              </p>
            </div>
            <div class="flex items-center w-4/5 my-1 p-2 ">
              <img src="/images/elementos/sq-check.png"></img>
              <p className="mx-2 text-gray-500">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              </p>
            </div>
          </div>



      </div>
        <Footer />
      </div>  )
}
export default QuotationPage;

if (document.getElementById('app')) {
  ReactDOM.render(<QuotationPage />, document.getElementById('app'));
}