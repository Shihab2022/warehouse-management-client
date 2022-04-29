import React from "react";
import details from "../img/details.png";
import { FaChevronCircleDown } from "react-icons/fa";
const Advantage = () => {
  return (
    <div className="px-24 py-5 grid grid-cols-2 justify-center items-center">
      <div>
        <img src={details} alt="" />
      </div>
      <div>
        <h4>KNOW MORE ABOUT US</h4>
        <h1>Who Royal Cars Are .</h1>

        <p>
          We know the difference is in the details and that's why our car , in
          the tourism and business ,industry , stand out for their quality and
          good taste .{" "}
        </p>
        <div>
          <div className="flex ">
            {" "}
            <span>
              <FaChevronCircleDown />{" "}
            </span>{" "}
            <p> We working since 1980 with 4,00 customers .</p>
          </div>
          <div className="flex ">
            {" "}
            <span>
                <FaChevronCircleDown />{" "}
              </span>{" "}
            <p>
           
              All brand & type cars in our garage .
            </p>
          </div>
          <div className="flex ">
            {" "} <span>
                <FaChevronCircleDown />{" "}
              </span>
            <p>
              {" "}
             
              1,000+ picking location around the world .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
