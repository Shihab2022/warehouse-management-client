import React from "react";
import useHomePageData from "../../Hooks/HomePageData";
import ManageItemsDetails from "./ManageItemsDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageItems = () => {
  const [homeData,setHomeData] = useHomePageData();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ? ");
    if (proceed) {
          const uri = `https://guarded-cliffs-41354.herokuapp.com/products/${id}`;
    //   const uri = `http://localhost:5000/products/${id}`;
      fetch(uri, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
            if(result.deletedCount > 0) {
                console.log("Success:", result);
                toast("This item  deleted successfully !")
                const remaining=homeData.filter(data =>data._id !==id)
                setHomeData(remaining)
            }
          
        });
    }
    
  };
  return (
    <>
     
      <div className="md:py-28 bg-amber-100 py-40">
        <div className="container flex justify-center mx-auto">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="border-b   shadow-2xl">
                <table className="divide-y divide-gray-300 ">
                  <thead className="bg-amber-200">
                    <tr className="border-b-2 border-amber-500">
                      
                      <th className="px-1 md:px-6 py-2 text-sm md:text-lg text-gray-900">Product Name</th>
                      <th className="px-1 md:px-6 py-2 text-sm md:text-lg text-gray-900">Quantity</th>
                      <th className="px-1 md:px-6 py-2 text-sm md:text-lg text-gray-900">
                        Price
                      </th>
                      <th className="px-1 md:px-6 py-2 text-sm md:text-lg text-gray-900">Details</th>
                      <th className="px-1 md:px-6 py-2 text-sm md:text-lg text-gray-900">
                        Update
                      </th>
                      <th className="px-1 md:px-6 py-2 text-sm md:text-lg text-gray-900">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {homeData.map((data) => (
                      <ManageItemsDetails
                        key={data._id}
                        data={data}
                        handleDelete={handleDelete}
                      ></ManageItemsDetails>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ManageItems;
