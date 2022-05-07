import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [data,setData] =useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        
        const email=user?.email
        const uri = `http://localhost:5000/products?email=${email}`;
        // const uri = `https://guarded-cliffs-41354.herokuapp.com/products/${email}`;
    console.log(uri);
        fetch(uri)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
  console.log(user.email)
    return (
        <div className="h-screen text-5xl flex justify-center items-center">
        <h2 >this si my items</h2>
    </div>
    );
};

export default MyItems;