import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';
import NavBar from '../../shared/NavBar/NavBar';


const BrandPage = () => {
    const cars = useLoaderData();
    const pathName = window.location.pathname;
    const brandName = pathName.split('/brand/')[1];

    const brandSpecificCars = cars.filter((car) =>
        car.brandname.toLowerCase() === brandName.toLowerCase()
    );

    return (
        <div>
            <NavBar></NavBar>
            <div className='grid grid-cols-2 gap-5 '>
                {brandSpecificCars.map((car) => (
                    <CarCard key={car._id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default BrandPage;
