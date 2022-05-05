import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddNewItem = () => {

  const handleAddNewItem=(e)=> {
const name1=e.target.firstName.value
const name2=e.target.lastName.value
const price= '$' + e.target.price.value
const quantity= e.target.quantity.value
const supplierName=e.target.supplierName.value
const picture=e.target.imageUri.value
const about=e.target.about.value
const addProduct ={name1,name2,price,quantity,supplierName,picture,about}


fetch('http://localhost:5000/products', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(addProduct),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  toast("New Item added successfully !")
})



// e.target.reset()
e.preventDefault();
  }
  return (
    <div className="relative ">
      <div className="bg-blend-darken">
        <img
          className=" md:w-screen h-full"
          src="https://i.ibb.co/PzwFxdV/pexels-mike-120049.jpg"
          alt=""
        />
      </div>

      <div className="absolute w-screen    bg-[rgba(0,0,0,.1)]  top-0">
        <div className="w-50 flex flex-col md:mt-24 mt-64  justify-center items-center">
          <h1 className="text-amber-600 text-xl font-bold mb-5 font-serif md:text-4xl">
            ADD NEW ITEM HERE
          </h1>
          <form onSubmit={handleAddNewItem}>
            <div className="flex justify-center md:justify-between flex-wrap">
              <input
                className="bg-stone-700 md:w-1/2 py-3 px-10 text-stone-100 rounded-sm"
                type="text"
                name="firstName"
                placeholder="First Name"
                id=""
              />
              <input
                className="bg-stone-700 md:w-[45%] md:mt-0 mt-3  py-3 px-10 text-stone-100 rounded-sm"
                type="text"
                name="lastName"
                placeholder="Last Name"
                id=""
              />
            </div>
            <div className="flex justify-center mt-4 md:justify-between flex-wrap">
              <input
                className="bg-stone-700 md:w-1/2 py-3 px-10 text-stone-100 rounded-sm"
                type="number"
                name="price"
                placeholder="Enter Price"
                id=""
              />
              <input
                className="bg-stone-700 md:w-[45%] md:mt-0 mt-3  py-3 px-10 text-stone-100 rounded-sm"
                type="number"
                name="quantity"
                placeholder="Product Quantity"
                id=""
              />
            </div>
            <input
              className="bg-stone-700 w-full  py-3 px-10 text-stone-100 rounded-sm mt-5"
              type="text"
              name="supplierName"
              placeholder="Supplier Name"
              id=""
            />
            <input
              className="bg-stone-700 w-full my-5  py-3 px-10 text-stone-100 rounded-sm"
              type="text"
              name="imageUri"
              placeholder="Image Url"
            />
            <textarea
              className="bg-stone-700 w-full py-5 text-stone-100 rounded-sm px-10 mt-2"
              name="about"
              placeholder="Please tell something for your product"
              id=""
              cols="30"
              rows="7"
            ></textarea>
            <div className="flex  my-2 justify-center">
              <input
                type="submit"
                value="Submit"
                className="bg-amber-600 text-xl text-white rounded-sm  py-3 px-10 w-1/2"
              />
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddNewItem;
