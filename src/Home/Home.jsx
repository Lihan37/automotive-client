import { useEffect, useState } from "react";
import Banner from "../shared/Banner/Banner";
import NavBar from "../shared/NavBar/NavBar";
import BrandNames from "./BrandNames/BrandNames";
import CarCard from "./CarCard/CarCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const cars = useLoaderData();

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
            {/* {
                cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
            } */}
        </div>
    );
};

export default Home;