import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [updateQuantity, setUpdateQuantity] = useState(false);
  const [getQuantity, setGetQuantity] = useState(product.quantity);
  console.log(updateQuantity);

  useEffect(() => {
    const uri = `https://guarded-cliffs-41354.herokuapp.com/products/${id}`;

    fetch(uri)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const handleQuantity = () => {
    // setGetQuantity(getQuantity - 1)
    const proQuantity = parseInt(product.quantity);
    setGetQuantity(proQuantity + 2);
    console.log(getQuantity, product.quantity);
  };
  return (
    <div className="relative ">
      <div className="bg-blend-darken">
        <img className="w-screen  h-screen" src={product?.picture} alt="" />
      </div>

      <div className="absolute items-center  grid md:grid-cols-2 gap-2 md:gap-10 justify-center  bg-[rgba(0,0,0,.5)] h-screen w-screen md:px-24  top-0">
        <div className=" w-full md:mt-0 mt-24  text-amber-500   py-2  md:py-8">
          <div className="ml-5 md:mt-0 mt-4">
            <p className="text-2xl md:text-5xl text-amber-500">
              <span>{product?.name1}</span>{" "}
              <span className="text-amber-800">{product?.name2}</span>{" "}
            </p>
            <p className="text-zinc-100 text-xl my-3">{product?.about}</p>
            <p className="mb-2 text-xl">
              Price : <span className="text-zinc-100 ">{product?.price}</span>
            </p>
            <p className="text-xl md:my-3">
              <span>Supplier : </span>{" "}
              <span className="text-zinc-100 ">{product?.supplierName}</span>
            </p>
            <p className="text-2xl text-amber-500 ">
            Quantity : <span className="text-zinc-100">{product?.quantity}</span>
          </p>
            <div></div>
          </div>
        </div>

        <div className="md:ml-10 ">
        
          <div className="flex md:flex-col flex-wrap items-center justify-center">
            <button
              onClick={handleQuantity}
              className="bg-amber-500 px-5 md:w-1/2 w-[40%] md:ml-0 ml-3 md:mt-8 py-2 text-white rounded-sm"
            >
              Delivered
            </button>
            <Link to='/addNewItem'
              className="bg-amber-700 px-5 text-center md:w-1/2 w-[40%] md:ml-0 ml-3  md:mt-5 py-2 text-white rounded-sm"
            >
              Add New Item
            </Link>
            <button className="bg-amber-500 px-5 my-5 md:w-1/2 w-[40%] md:ml-0 ml-3 py-2 text-white rounded-sm">
              {" "}
              All Inventory
            </button>

            {updateQuantity ? (
              <div className="md:w-[70%] w-[85%]  flex bg-[rgba(0,0,0,.5)]  px-8 md:py-4  rounded-lg relative">
                <input
                  className=" md:px-5 px-3  shadow-xl  py-2"
                  type="number"
                  name=""
                  id=""
                ></input>
                <button className="bg-amber-700 md:px-5 px-2  py-2 border-0 text-white ">
                  Add
                </button>
                <span
                  onClick={() => setUpdateQuantity(!updateQuantity)}
                  className="absolute top-1 md:right-2 right-1 text-white text-xl"
                >
                  <FaRegTimesCircle />
                </span>
              </div>
            ) : (
              <button
                onClick={() => setUpdateQuantity(!updateQuantity)}
                className="bg-amber-700 px-5 md:w-1/2 w-[40%] md:ml-0 ml-3 py-2 text-white rounded-sm"
              >
                Update Quantity
              </button>
            )}

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
