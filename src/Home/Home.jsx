import { useEffect, useState } from "react";
import Banner from "../shared/Banner/Banner";
import NavBar from "../shared/NavBar/NavBar";
import BrandNames from "./BrandNames/BrandNames";
import CarCard from "./CarCard/CarCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const cars = useLoaderData();

    const [brandData, setBrandData] = useState([]);

    fetch('./cars.json')
    .then((response) => {
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log('Fetched data:', data);
        setBrandData(data);
    })
    .catch((error) => console.error('Error fetching brand data:', error));


    return (
        <div>
            <NavBar />
            <Banner />
            <BrandNames brandData={brandData} />


            <section className="py-8 mt-7 bg-gradient-to-r from-green-400 to-blue-500 text-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
                    <p className="text-lg">
                        At PowerGlide, we take care of your vehicle with a range of professional services to keep it in top condition.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2">Services Offered:</h3>
                        <ul className="list-none text-lg">
                            <li>Regular Maintenance</li>
                            <li>Oil Changes</li>
                            <li>Brake Repairs</li>
                            <li>Tire Services</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="py-8 bg-gray-100 mt-7">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Live Location</h2>
                    <p>
                        Visit us at our location to see our cars in person and get expert assistance.
                        Use the map below to find our live location:


                    </p>
                    <p>Location: 186, NabinBag, Gopalganj.
                    </p>
                    <p>Contact: 01716285196</p>

                </div>
            </section>
        </div>
    );
};

export default Home;