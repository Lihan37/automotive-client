import React from 'react';

const BrandNames = ({ brandData }) => {
    return (
        <div className="ml-5 mt-14">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Popular Car Brands</h1>
            <p className="text-2xl mb-10 text-gray-600">Explore some of the most popular car brands below.</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {brandData.map((brand) => (
                    <div key={brand.brand} className="card bg-red-100 w-80 shadow-xl">
                        <div className="bg-primary-500 p-4 rounded-t-xl">
                            <figure>
                                <img src={brand.img} alt={brand.brand} className="rounded-full w-36 h-24 mx-auto" />
                            </figure>
                        </div>
                        <div className="card-body items-center text-center p-4 bg-white rounded-b-xl">
                            <h2 className="card-title text-gray-500">
                                {brand.brand}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandNames;
