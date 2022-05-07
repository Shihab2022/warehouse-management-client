import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase.init";
const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const handleAddNewItem=(e)=> {
const name1=e.target.firstName.value
const name2=e.target.lastName.value
const price= '$' + e.target.price.value
const quantity= e.target.quantity.value
const supplierName=e.target.supplierName.value
const picture=e.target.imageUri.value
const about=e.target.about.value
const email=e.target.email.value

const addProduct ={name1,name2,price,email,quantity,supplierName,picture,about}

fetch('https://guarded-cliffs-41354.herokuapp.com/products',{
// fetch('http://localhost:5000/products', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(addProduct),
})
.then(response => response.json())
.then(data => {
  // console.log('Success:', data);
  toast("New Item added successfully !")
})
e.target.reset()
e.preventDefault();
  }
  return (
    <div className="relative  ">
      <div className="bg-blend-darken">
        <img
          className=" md:w-screen h-screen md:pb-0  md:mb-0 mb-56"
          src="https://i.ibb.co/PzwFxdV/pexels-mike-120049.jpg"
          alt=""
        />
      </div>

      <div className="absolute w-screen    bg-[rgba(0,0,0,.1)]  top-0">
        <div className="w-50 flex flex-col md:mt-24 mt-40  justify-center items-center">
          <h1 className="text-amber-600 text-xl font-bold mb-5 font-serif md:text-4xl">
            ADD NEW ITEM HERE
          </h1>
          <form onSubmit={handleAddNewItem}>
            <div className="flex justify-center md:justify-between flex-wrap">
              <input
                className="bg-stone-700 md:w-1/2 w-full py-3 px-10 text-stone-100 rounded-sm"
                type="text"
                name="firstName"
                placeholder="First Name"
                id=""
                required
              />
              <input
                className="bg-stone-700 md:w-[45%] w-full md:mt-0 mt-3  py-3 px-10 text-stone-100 rounded-sm"
                type="text"
                name="lastName"
                placeholder="Last Name"
                id=""
                
              />
            </div>
            <div className="flex justify-center mt-4 md:justify-between flex-wrap">
              <input
                className="bg-stone-700 md:w-1/2 w-full py-3 px-10 text-stone-100 rounded-sm"
                type="number"
                name="price"
                placeholder="Enter Price"
                id=""
                required
              />
              <input
                className="bg-stone-700 md:w-[45%] w-full md:mt-0 mt-3  py-3 px-10 text-stone-100 rounded-sm"
                type="number"
                name="quantity"
                placeholder="Product Quantity"
                id=""
                required
              />
            </div>
            <input
              className="bg-stone-700 w-full  py-3 px-10 text-stone-100 rounded-sm mt-5"
              type="text"
              name="supplierName"
              placeholder="Supplier Name"
              id=""
              required
            />
            <input
              className="bg-stone-700 w-full  py-3 px-10 text-stone-100 rounded-sm mt-5"
              type="email"
              name="email"
              value={user?.email}
              id=""
              disabled
            />
            <input
              className="bg-stone-700 w-full my-5  py-3 px-10 text-stone-100 rounded-sm"
              type="text"
              name="imageUri"
              placeholder="Image Url"
              required
            />
            <textarea
              className="bg-stone-700 w-full py-5 text-stone-100 rounded-sm px-10 mt-2"
              name="about"
              placeholder="Please tell something for your product"
              id=""
              cols="30"
              required
              rows="4"
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
