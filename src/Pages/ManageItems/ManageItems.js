import React from "react";
import useHomePageData from "../../Hooks/HomePageData";
import ManageItemsDetails from "./ManageItemsDetails";

const ManageItems = () => {
  const [homeData] = useHomePageData();
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
                        Update Stock
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
                      ></ManageItemsDetails>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
