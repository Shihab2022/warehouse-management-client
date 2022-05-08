import React from 'react';
import useHomePageData from '../../Hooks/HomePageData';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import MyItemsDetails from './MyItemsDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyItems = () => {
  const [homeData,setHomeData]=useHomePageData()
  const navigate =useNavigate()
  const [user]= useAuthState(auth);
  if(!user){
navigate('/')
  }
  const myData=homeData.filter(item => item?.email === user?.email)
//   console.log(myData)

// delete product

const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ? ");
    if (proceed) {
      const uri = `https://guarded-cliffs-41354.herokuapp.com/products/${id}`;
      // const uri = `http://localhost:5000/products/${id}`;
      fetch(uri, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            // console.log("Success:", result);
            toast("This item  deleted successfully !");
            const remaining = homeData.filter((data) => data._id !== id);
            setHomeData(remaining);
          }
        });
    }
  };

    return (<>
    
    
    <section className="pt-20 md:px-28 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
    <h1 className="text-center text-2xl  font-bold md:text-5xl text-amber-800 mb-5 ">Your Added Product </h1>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
{
    myData.map(data =><MyItemsDetails key={data._id} handleDelete={handleDelete} data={data}></MyItemsDetails>)
}
    
        </div>
      </div>
    </section>
    <ToastContainer/>
    </>
     
    );
};

export default MyItems;