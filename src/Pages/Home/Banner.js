import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>
 <div className="z-50">
            <img className=" w-screen h-screen" src='https://i.ibb.co/bNFTbVP/banner.webp' alt="" />
        </div>


        <div className="absolute top-64 md:right-40 md:top-52 right-20 ">
            <h1 className="text-white font-sharp text-3xl md:text-6xl mb-8 font-bold ">Welcome to Our <br /> <span className=" text-amber-600">Royal Cars shop.</span> </h1>
            <Link to='/manageItems' className='bg-amber-700 text-2xl text-white px-10 mt-64 py-2'>All items</Link>
        </div>
        </div>
       
    );
};

export default Banner;