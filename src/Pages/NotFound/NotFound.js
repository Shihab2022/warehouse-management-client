import React from 'react';
import notFound from '../img/notFound.png'
const NotFound = () => {
    return (
        <div >
           <img className="w-screen mt-3 md:mt-8" src={notFound} alt="" /> 
        </div>
    );
};

export default NotFound;