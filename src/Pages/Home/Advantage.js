import React from "react";
import details from "../img/details.png";
import {
  FaChevronCircleDown,
  FaUserTie,
  FaRegCalendarAlt,
  FaScribd,
} from "react-icons/fa";
const Advantage = () => {
  return (
    <>
      <div className="py-14 bg-yellow-100">
        <div className="flex justify-center flex-col mb-5 items-center">
          <p>120 + CARS TYPE & BRANDS TYPE</p>
          <h1 className="text-4xl">
            Royal Cars{" "}
            <span className="text-amber-600 font-bold">Advantages</span>
          </h1>
        </div>

        <div className=" flex justify-center items-center  ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="bg-white px-8 flex justify-center shadow-md rounded-md items-center flex-col py-14">
              <span className="text-4xl text-center text-amber-500">
                <FaUserTie />
              </span>
              <p className="text-xl font-semibold my-3">
                24/8 Customer Online support .
              </p>
              <p>Call Us Anywhere Anytime</p>
            </div>
            <div className="bg-amber-300  px-8 flex justify-center shadow-lg rounded-md items-center flex-col py-10">
              <span className="text-4xl text-center text-white">
                <FaRegCalendarAlt />
              </span>
              <p className="text-xl font-semibold my-3">
                24/8 Customer Online support .
              </p>
              <p>Call Us Anywhere Anytime</p>
            </div>
            <div className="bg-white px-8 flex justify-center shadow-lg rounded-md items-center flex-col py-10">
              <span className="text-4xl text-center text-amber-500">
                <FaScribd />
              </span>
              <p className="text-xl font-semibold my-3">
                24/8 Customer Online support .
              </p>
              <p>Call Us Anywhere Anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/******************************** * second section ********************************/}

      <div className="md:px-24 px-5 py-5 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div>
          <img src={details} alt="" />
        </div>
        <div className="m-5">
          <h4 className="text-lg tracking-wide">KNOW MORE ABOUT US</h4>
          <h1 className="text-4xl my-4">
            Who <span className="text-amber-500 font-bold">Royal Cars</span> Are
            .
          </h1>

          <p className="text-stone-600 mt-5">
            We know the difference is in the details and that's why our car , in
            the tourism and business ,industry , stand out for their quality and
            good taste .{" "}
          </p>
          <div className="my-5 ml-3">
            <div className="flex  items-center mb-3 text-sm">
              {" "}
              <span className="text-amber-500 text-xl   mr-3">
                <FaChevronCircleDown />{" "}
              </span>{" "}
              <p> We working since 1980 with 4,00 customers .</p>
            </div>
            <div className="flex  items-center mb-3 text-sm">
              {" "}
              <span className="text-amber-500 text-xl   mr-3">
                <FaChevronCircleDown />{" "}
              </span>{" "}
              <p>All brand & type cars in our garage .</p>
            </div>
            <div className="flex  items-center mb-3 text-sm">
              {" "}
              <span className="text-amber-500 text-xl   mr-3">
                <FaChevronCircleDown />{" "}
              </span>
              <p> 1,000+ picking location around the world .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantage;
