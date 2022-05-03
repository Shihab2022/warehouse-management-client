import React from "react";

const AddNewItem = () => {
  return (
    <div className="relative ">
      <div className="bg-blend-darken">
        <img className=" w-screen" src="https://i.ibb.co/PzwFxdV/pexels-mike-120049.jpg" alt="" />
      </div>

<div className="absolute w-screen  mt-24   bg-[rgba(0,0,0,.1)] h-screen top-0">
    
<div className="w-50 flex flex-col justify-center items-center">
    <h1 className="text-amber-600 text-xl font-bold mb-5 font-serif md:text-4xl">ADD NEW ITEM HERE</h1>
<form action="">
    <div className="flex justify-between" >
    <input className='bg-stone-700 w-1/2 py-3 px-10 text-stone-100 rounded-sm'  type="text" name="firstName" placeholder='First Name' id="" />
    <input className='bg-stone-700 w-[45%]   py-3 px-10 text-stone-100 rounded-sm'  type="text" name="secondName" placeholder='Last Name' id="" />
    </div>
    <input className='bg-stone-700 w-full  py-3 px-10 text-stone-100 rounded-sm mt-5'  type="password" name="password" placeholder='Password' id="" />
    <input  className='bg-stone-700 w-full my-5  py-3 px-10 text-stone-100 rounded-sm' type="text" name='imageUri' placeholder='Image Url'  />
    <textarea className='bg-stone-700 w-full py-5 text-stone-100 rounded-sm px-10 mt-2' name="about" placeholder='Please tell something for your product' id="" cols="30" rows="7"></textarea>
<div className='flex  my-2 justify-center'>
<input type="submit" value="Submit" className="bg-amber-600 text-xl text-white rounded-sm  py-3 px-10 w-1/2"/>
</div>
   
</form>
</div>
    
</div>

    </div>
  );
};

export default AddNewItem;
