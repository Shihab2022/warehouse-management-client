import React from "react";

const RelatedDetails = ({ data }) => {
  const { name1, about, picture } = data;
  return (

    <>
     <div className="md:mb-0 mb-3">
      <img src={picture} className="w-full h-3/4 rounded-md" alt="" />
      <div className="grid mt-5 gap-3 grid-cols-4">
<div className='bg-black  rounded-sm flex items-center justify-center w-15 md:w-20 h-15 md:h-20 '>
    <p className=" text-white">FEB <br />20</p>
</div>
          <div className='col-span-3'>
          <p className='text-2xl font-bold'>{name1}</p>
      <p className='truncate'>{about}</p>
          </div>
     

      </div>
    
    </div>
    </>
   
  );
};

export default RelatedDetails;
