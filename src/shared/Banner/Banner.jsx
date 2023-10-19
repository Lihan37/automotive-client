import React from 'react';
import car from '../../assets/car-png-16828.png';

const Banner = () => {
    return (
        <div className="bg-gray-500 text-white py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 md:pr-4">
                    <h1 className="text-4xl font-bold text-yellow-300">Welcome to Powerglide</h1>
                    <p className="text-xl mt-4 italic text-gray-300">
                        Explore a World of Automotive Excellence.
                        <br />
                        Discover the Latest Car Models and Innovations.
                        <br />
                        Experience Unmatched Performance and Luxury.
                        <br />
                        Your Journey Begins Here.
                    </p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <img src={car} alt="Powerglide" className="mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
