import React from "react";

const MyItemsDetails = ({ data,handleDelete}) => {
    // console.log(data)
    const {name1,name2,picture,price,quantity,about,_id}= data
  return (
    
            
          <div className="w-full md:w-1/2 pb-5  xl:w-1/3 px-4">
            <div className="bg-amber-100 h-[600px] shadow-xl shadow-orange-300 rounded-lg overflow-hidden mb-10">
              <img
                className="w-full"
                src={picture}
                alt=""
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3 className='text-2xl'> {name1} <span className="text-amber-600">{name2}</span></h3>
                <p className="text-sm  text-zinc-400 leading-relaxed my-5">
                  {about}
                </p>
                <div className="text-lg flex justify-between text-body-color leading-relaxed mb-7">
                  <p className="">Price : <span className="text-amber-600">{price}</span></p>
                  <p className="">Quantity : <span className="text-amber-600">{quantity}</span></p>
                </div>
                <button
                onClick={() => handleDelete(_id)}
                  className="inline-block py-2 px-7 border-2 border-amber-600  rounded-full text-base text-body-color font-medium hover:border-black  hover:bg-amber-600 hover:text-white transition"> DELETE</button>
              </div>
            </div>
          </div>

        
  );
};

export default MyItemsDetails;
