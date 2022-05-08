import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import MyItemsDetails from "./MyItemsDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Sheared/Loading";

const MyItems = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [user,loading] = useAuthState(auth);
 


  useEffect(() => {
    const email = user?.email;
    const url = `http://guarded-cliffs-41354.herokuapp.com/userAddCollection?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  // delete product

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ? ");
    if (proceed) {
      const uri = `https://guarded-cliffs-41354.herokuapp.com/userAddCollection/${id}`;
    //   const uri = `http://localhost:5000/userAddCollection/${id}`;
      fetch(uri, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            // console.log("Success:", result);
            toast("This item  deleted successfully !");
            const remaining = userData.filter((data) => data._id !== id);
            setUserData(remaining);
          }
        });
    }
  };
  if(loading){
    return <Loading></Loading>
}
  if (!user) {
    navigate("/");
  }

  return (
    <>
      <section className="pt-20 md:px-28 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <h1 className="text-center text-2xl  font-bold md:text-5xl text-amber-600 mb-8 ">
          Your Added Product{" "}
        </h1>
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {userData.map((data) => (
              <MyItemsDetails
                key={data._id}
                handleDelete={handleDelete}
                data={data}
              ></MyItemsDetails>
            ))}
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default MyItems;
