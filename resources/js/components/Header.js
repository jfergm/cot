import React from 'react';

const Header = ({ title, body, image}) => {
  return (
    <div className="w-full h-screen relative bg-black">
      <div className="w-full h-full absolute opacity-60">
        <img className="w-full h-full object-cover" src={image} />
      </div>
      <div className="flex w-full h-full justify-center items-center z-20 relative flex-col px-2">
        <h1 className="text-white text-2xl"> {title} </h1>
        <p className="text-white w-full md:w-3/4 lg:w-1/2"> { body }</p>
      </div>
    </div>
  )

};

export default Header;