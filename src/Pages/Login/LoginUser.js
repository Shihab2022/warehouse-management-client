import React, { useState } from 'react';
import logo2 from '../img/logo2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginUser = () => {
  const [getEmil,setGetEmail]=useState('')
const navigate =useNavigate()
let location = useLocation();
let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
const handleLogin=e=>{
const email = e.target.email.value
const password = e.target.password.value

  signInWithEmailAndPassword(email, password)
  e.preventDefault();
}
const handleGoogleSignIn=()=> {
  signInWithGoogle()
}
const updateYourPassword=async () => {
  if(getEmil){
    await sendPasswordResetEmail(getEmil);
    toast("Email reset password sent  !")
    
  }
  else{
    toast("Please enter your email address !")
  }
  
}




if(user || googleUser){
  navigate(from, { replace: true });
}
if(loading || googleLoading || sending){
  
 return <Loading></Loading>
}
// console.log(getEmil)
    return (
        <>
           <div className="flex items-center justify-center md:my-14 min-h-screen  ">
        <div className="px-8 py-6  text-left rounded-lg bg-amber-300 shadow-lg">
          <div className="flex justify-center">
            <img src={logo2} alt="" />
          </div>
          <h3 className="text-2xl  font-bold text-center">
            Login to your account
          </h3>

          <form onSubmit={handleLogin} >
            <div className="mt-4">
              <div>
                <label className="block ">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onBlur={e =>setGetEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block ">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            {
              error ? <p className="text-sm text-red-700 my-2">{error?.message}</p> : ''
            }
            {
              googleError ? <p className="text-sm text-red-700 my-2">{googleError?.message}</p> : ''
            }
              <div className="flex items-baseline justify-between">
                <button className="px-40 py-2 mt-4 text-white bg-yellow-900 rounded-full hover:bg-red-600">
                  Login
                </button>
              </div>
            </div>
            <ToastContainer />
          </form>
        
        <div className="flex justify-between ">
        <p className=" my-2 ">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              {" "}
              Register{" "}
            </Link>
          </p>
          <button onClick={updateYourPassword}  className="text-rose-600 hover:underline"> Reset Password</button>
        </div>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5">
            <p className="text-center   mx-4 mb-0">OR</p>
          </div>
          <div className="flex  items-baseline justify-between">
            <button onClick={handleGoogleSignIn} className="px-24 py-2 mt-2 text-white hover:bg-yellow-600 rounded-full bg-red-800">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
 
        </>
    );
};

export default LoginUser;