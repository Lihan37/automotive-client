import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../../shared/NavBar/NavBar';
import Swal from 'sweetalert2';

const UpdateCars = () => {
    const car = useLoaderData();
    const { name, brandname, price, image, cartype, shortdes, _id, rating } = car;

    useEffect(() => {
        
    }, [car]);

    const handleUpdateCar = event =>{
        event.preventDefault();

        const form = event.target;
        
        const name = form.name.value;
        const brandname = form.brandname.value;
        const price = form.price.value;
        const image = form.image.value;
        const cartype = form.cartype.value;
        const rating = form.rating.value;
        const shortdes = form.shortdes.value;

        const updatedCar ={ name, brandname, price, image, cartype, rating, shortdes}
        console.log(updatedCar);

        fetch(`https://automotive-server-mjdyasf4i-lihan37s-projects.vercel.app/cars/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Car Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <NavBar></NavBar>
            <h2 className='text-5xl mb-10 font-bold text-center'>Update Car: {name}</h2>
            <form onSubmit={handleUpdateCar}>
                <div className='container bg-gradient-to-r from-cyan-500 to-blue-500 border gap-4 p-24'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} name='name' placeholder="Name" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={brandname} name='brandname' placeholder="Brand Name" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" defaultValue={price} name='price' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Image" defaultValue={image} name='image' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Car Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Car Type" defaultValue={cartype} name='cartype' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Rating" defaultValue={rating} name='rating' className="input w-full input-bordered" min="1" max="5" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Short Description" defaultValue={shortdes} name='shortdes' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <input type="submit" value="Update Car" className='btn btn-block mt-7 bg-orange-300' />
                </div>
            </form>
        </div>
    );
};

export default UpdateCars;
