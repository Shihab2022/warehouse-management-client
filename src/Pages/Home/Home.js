import React from 'react';
import Advantage from './Advantage';
import Banner from './Banner';
import Discount from './Discount';
import Product from './Product';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Product></Product>
            <Advantage></Advantage>
            
            <Discount></Discount>
        </div>
    );
};

export default Home;