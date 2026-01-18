import React from 'react';
import Banner from '../Components/Banner';
import Features from '../Components/Features';
import Gallery from '../Components/Galery';
import Newsletter from '../Components/NewsLetter';

const Home = () => (
    <div>
        <Banner></Banner>
        <Features></Features>
        <Gallery></Gallery>
        <Newsletter />
    </div>
);

export default Home;