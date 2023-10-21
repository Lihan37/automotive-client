import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  const rating = Math.floor(car.rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? 'bg-orange-400' : ''; // Apply the star color based on the rating
    stars.push(
      <input
        key={i}
        type="radio"
        name={`rating-${car._id}`}
        className={`mask mask-star-2 ${starClass}`}
      />
    );
  }

  return (
    <div className="card bg-gray-200 mb-5 shadow-xl">
      <figure className="px-10 pt-10 h-72">
        <img src={car.image} alt={car.name} className="rounded-xl h-full w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{car.name}</h2>
        <div className="card-info max-h-40 overflow-y-auto">
          <p className="mb-2 text-xl">Brand: {car.brandname}</p>
          <p className="mb-2">Price: {car.price}</p>
          <p className="mb-2">Type: {car.cartype}</p>
          <div className="rating">{stars}</div>
          <p>{car.shortdes}</p>
        </div>
        <div className="flex justify-center mt-4">
          <Link to={`/cars/${car._id}`} className="btn btn-primary mr-4">
            Details
          </Link>


          <button className="btn btn-accent">Update</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
