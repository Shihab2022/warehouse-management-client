import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegTrashAlt, FaScribd, FaRegFileAlt } from "react-icons/fa";

const ManageItemsDetails = ({ data ,handleDelete}) => {
  const { name1, name2, price, quantity, _id } = data;

  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/inventory/${id}`);
  };


  return (
    <>
      <tr className="whitespace-nowrap shadow-2xl ">
        <td className="px-1 md:px-6  py-4">
          <div className="text-sm text-gray-900">
            {name1} {name2}
          </div>
        </td>
        <td className="px-1 md:px-6 py-4">
          <div className="text-sm text-gray-500">{quantity}</div>
        </td>
        <td className="px-1 md:px-6 py-4 text-sm text-gray-500">{price}</td>
        <td
          onClick={() => handleDetails(_id)}
          className="px-1  md:px-6 py-4 text-xl md:text-2xl text-amber-900"
        >
          <FaRegFileAlt />
        </td>
        <td className=" flex justify-center py-2">
          <Link
            to="/addNewItem"
            className="text-xl  md:text-2xl text-orange-400"
          >
            <FaScribd />{" "}
          </Link>
        </td>
        <td className="px-1 md:px-6 py-4">
          <button
            onClick={() =>handleDelete(_id)}
            className="text-xl md:text-2xl text-red-700"
          >
            <FaRegTrashAlt />
          </button>
        </td>
      </tr>
      
    </>
  );
};

export default ManageItemsDetails;
