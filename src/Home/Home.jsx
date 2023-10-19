import React, { useEffect, useState } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import Banner from '../shared/Banner/Banner';
import BrandNames from './BrandNames/BrandNames';

const Home = () => {
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        
        fetch('/public/cars.json')
            .then((response) => response.json())
            .then((data) => setBrandData(data))
            .catch((error) => console.error('Error fetching brand data:', error));
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <BrandNames brandData={brandData} />
        </div>
    );
};

export default Home;