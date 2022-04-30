import React from 'react';
import useHomePageData from '../../Hooks/HomePageData';
import ProductDetails from './ProductDetails';

const Product = () => {
    const [homeData]=useHomePageData()
 
    return (
        <div className="md:px-24 bg-yellow-100 py-10">
<div className="flex flex-col justify-center items-center mb-8">
    <h3 className="text-sm">OUR VEHICLES BRANDS & TYPE</h3>
    <h1 className="text-2xl md:text-4xl my-3">Find Your <span className="font-bold text-amber-500">Best Vehicles</span></h1>
</div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {
                homeData.map(data=><ProductDetails data={data} key={data._id}></ProductDetails>)
            }
      
        </div>
        </div>
       
    );
};

export default Product;