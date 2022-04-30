import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useHomePageData from "../../Hooks/HomePageData";
import DiscountDetails from "./DiscountDetails";
const Discount = () => {
    const [homeData]=useHomePageData()
    const discountData=homeData.slice(0,3)

  return (
    <>
      <div className="md:py-24 p-5 md:px-52  bg-stone-500">
        <div className="flex justify-between items-center">
          <div className="md:w-1/2">
            <p className="text-sm text-white">NEW MEMBER DISCOUNT </p>
            <h1 className="md:text-3xl font-bold my-3 text-amber-500">
              Reserved Now & Get 30% off for Auti & Mercedes Only .{" "}
            </h1>
          </div>
          <div className="flex items-center bg-amber-500 px-5 h-14 text-white text-sm  rounded-sm">
            <span className="text-xl">
              <FaUserPlus />
            </span>
            <Link to='/register' className="ml-3 font-bold"> SIGN UP NOW</Link>
          </div>
        </div>

        <div className="grid grid-cols-3">
{
    discountData.map(data => <DiscountDetails data={data} key={data._id}></DiscountDetails>)
}
</div>
      </div>



    </>
  );
};

export default Discount;
