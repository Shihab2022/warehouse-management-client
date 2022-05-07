import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Sheared/Loading";

const Banner = () => {
  const [user, loading] = useAuthState(auth);

  const logOutUser = () => {
    signOut(auth);
  };
 
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="relative">
      <div className="z-50">
        <img
          className=" w-screen h-screen"
          src="https://i.ibb.co/bNFTbVP/banner.webp"
          alt=""
        />
      </div>

      <div className="absolute top-64 md:right-40 md:top-52 right-20 ">
        <h1 className="text-white font-sharp text-3xl md:text-6xl mb-8 font-bold ">
          Welcome to Our <br />{" "}
          <span className=" text-amber-600">Royal Cars shop.</span>{" "}
        </h1>
        <div className="  bg-amber-500 block w-[180px] py-3 text-white text-sm  rounded-sm">
         
         { user ? <button onClick={logOutUser} className="ml-3 px-6 font-bold">SIGN OUT NOW</button>
         :
         <Link to="/login" className="ml-3 px-6 font-bold">
            {" "}
            SIGN UP NOW
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
