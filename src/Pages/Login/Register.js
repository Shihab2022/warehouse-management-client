import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../img/logo2.png";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from "../Sheared/Loading";

const Register = () => {
  const navigate=user.navigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
const submitFrom= e => {

  const email = e.target.email.value
  const password = e.target.password.value
  const confirmPassword = e.target.confirmPassword.value
  console.log(email,confirmPassword)
  createUserWithEmailAndPassword(email,password)
e.preventDefault();
}
if(loading){
  return <Loading></Loading>
}
if(user){
  
}


  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen md:py-24  bg-gray-200">
        <div className="px-8 py-6  text-left rounded-lg bg-amber-300 shadow-lg">
          <div className="flex justify-center">
            <img src={logo2} alt="" />
          </div>
          <h3 className="text-2xl text-black font-bold text-center">
            Register your account
          </h3>
          <form onSubmit={submitFrom}>
            <div className="mt-4">
              <div>
                <label className="block ">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-black">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block ">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
             

              <div className="flex items-baseline justify-between">
                <button className="px-40 py-2 mt-4 text-white bg-yellow-600 rounded-full hover:bg-red-600">
                  Register
                </button>
              </div>
            </div>
          </form>
          <p className="text-black my-3 ">
            Already have an account ?
            <Link
              to="/login"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              {" "}
              Login{" "}
            </Link>
          </p>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5">
            <p className="text-center  text-white mx-4 mb-0">OR</p>
          </div>
          <div className="flex  items-baseline justify-between">
            <button
              
              className="px-28 py-2 mt-4 text-white hover:bg-yellow-800 rounded-full bg-red-800"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
      <Loading></Loading>
    </>
    
  );
};

export default Register;
