const CarCard = ({ car }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={car.image} alt={car.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{car.name}</h2>
                <p>{car.brand}</p>
                <p>{car.price}</p>
                <p>{car.carType}</p>
                <p>{car.rating}</p>
                <p>{car.shortDescription}</p>
            </div>
        </div>
    );
};

export default CarCard;