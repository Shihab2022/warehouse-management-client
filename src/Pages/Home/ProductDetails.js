import React from 'react';
import {  useNavigate } from 'react-router-dom';

const ProductDetails = ({data}) => {
    const {name1,name2,picture,price,about,quantity,supplierName,_id}=data
    const navigate =useNavigate()
    const handleUpdate=(id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <>

         <div className="bg-white w-[90%] grid grid-cols-1 rounded-md md:ml-0 ml-5 shadow-2xl md:grid-cols-2  justify-evenly px-5 items-center py-8">
        <div className="w-full">
        <img className='h-[220px] md:w-[200px] rounded-sm' src={picture} alt="" /> 
        </div>
        <div className="ml-5 md:mt-0 mt-4">
        <p className='text-2xl'><span>{name1}</span> <span className='text-amber-500'>{name2}</span> </p>
        <p className='text-stone-400 text-sm my-3'>{about}</p>
        <p className='mb-2'>Price : <span className='text-amber-500 text-sm'>{price}</span></p>
        <p><span>Supplier : </span> <span className='text-amber-500 text-sm'>{supplierName}</span></p>
        <hr className="h-0.5 my-3  bg-amber-500" />
        <div className="flex justify-around items-center">
            <p>Quantity : <span className='text-amber-500'>{quantity}</span></p>
            <button onClick={() =>handleUpdate(_id)} className="bg-amber-500 px-5 py-2 text-white rounded-sm">Update</button>
        </div>
        </div>
         

        </div>
        </>
       
    );
};

export default ProductDetails;