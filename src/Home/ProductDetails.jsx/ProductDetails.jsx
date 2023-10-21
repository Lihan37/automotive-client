import React, { useState, useEffect } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import cover1 from '../../assets/Rent-A-Car-Facebook-Cover-01.jpg'
import cover2 from '../../assets/Rent-A-Car-Facebook-Cover-27.jpg'
import cover3 from '../../assets//Rent-A-Car-Web-Banner-20.jpg'
import Swal from 'sweetalert2'


const ProductDetails = () => {
    const [car, setCar] = useState(null);


    const carId = window.location.pathname.split('/').pop();

    useEffect(() => {

        fetch(`https://automotive-server-mjdyasf4i-lihan37s-projects.vercel.app/cars/${carId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCar(data);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, [carId]);

    if (!car) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        const carDetails = {
            name: car.name,
            brand: car.brandname,
            price: car.price,  
          };
          
        fetch('https://automotive-server-mjdyasf4i-lihan37s-projects.vercel.app/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carDetails),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Car added to cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    };

    return (
        <div>
            <NavBar></NavBar>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={cover1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={cover2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={cover3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div className="card card-compact w-full mt-12 bg-orange-300 shadow-xl">
                <figure><img src={car.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-4xl text-center font-bold">{car.name}</h2>
                    <p className='text-2xl text-center font-bold'>{car.shortdes}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn w-full mt-5 btn-primary"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default ProductDetails;