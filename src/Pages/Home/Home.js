import React from 'react';
import Advantage from './Advantage';
import Banner from './Banner';
import Discount from './Discount';
import Product from './Product';
import Related from './Related';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Product></Product>
            <Advantage></Advantage>
            <Discount></Discount>
            <Related></Related>
        </div>
    );
};

export default Home;