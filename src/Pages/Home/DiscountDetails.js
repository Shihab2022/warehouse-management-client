import React from "react";
import { FaStar } from "react-icons/fa";

const DiscountDetails = ({ data }) => {

  const { picture, name1, price } = data;



  
  return (
    
      <>
        <div className="bg-white w-[90%] md:mt-0 mt-3 rounded-md grid grid-cols-1 md:ml-0 ml-5 md:my-8 shadow-2xl md:grid-cols-2  justify-evenly px-5 items-center py-8">
          <div className="w-full">
            <img
              className="h-[100px] md:w-[110px] rounded-sm"
              src={picture}
              alt=""
            />
          </div>
          <div className="">
          <div className="flex justify-evenly text-amber-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className=" md:mt-0 mt-2">
            <p className="text-xl my-1">{name1}</p>
            <p className='text-sm'>{price}</p>
          </div>
          </div>
        </div>
    
      </>
    
  );
};

export default DiscountDetails;
