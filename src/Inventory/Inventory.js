import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id);

  useEffect(() => {
    const uri = `https://guarded-cliffs-41354.herokuapp.com/products/${id}`;

    fetch(uri)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="h-screen text-5xl flex justify-center items-center">
      <h2>this si inventory page</h2>

      <img src={product.picture} alt="" />
    </div>
  );
};

export default Inventory;
