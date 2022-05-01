import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo2 from "../img/logo2.png";
import CustomLink from "../Login/CustomLink";
const Header = () => {
  const [user, loading] = useAuthState(auth);

  const logOutUser=()=> {
    signOut(auth);
  }
  return (
    <div className="relative">
      <header className="text-gray-600 fixed bg-black z-20 top-0 w-full  body-font">
        <div className="container mx-auto flex flex-wrap py-3 md:px-24 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font  font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={logo2} alt="" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap text-white text-xl  font-mono  items-center  justify-center">
            <CustomLink to="/home" className="mr-5  hover:text-amber-500">
              First Link
            </CustomLink>
            <CustomLink to="/" className="mr-5  hover:text-amber-500">
              Second Link
            </CustomLink>
            <Link to="/" className="mr-5 hover:text-amber-500">
              Third Link
            </Link>
          
          {
            user ? <button onClick={logOutUser} className="mr-5 bg-rose-800 px-5 py-1 rounded-lg hover:text-black ">
            Log out
          </button>  : <Link to="/login" className="mr-5 bg-amber-500 px-5 py-1 rounded-lg hover:text-black ">
            Login
          </Link>
          }
            
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
