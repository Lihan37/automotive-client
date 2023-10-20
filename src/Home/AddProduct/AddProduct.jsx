import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAddCar = event =>{
        event.preventDefault();

        const form = event.target;
        
        const name = form.name.value;
        const brandname = form.brandname.value;
        const price = form.price.value;
        const image = form.image.value;
        const cartype = form.cartype.value;
        const rating = form.rating.value;
        const shortdes = form.shortdes.value;

        const newCar ={ name, brandname, price, image, cartype, rating, shortdes}
        console.log(newCar);

        fetch('http://localhost:5000/cars',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Car added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <h2 className='text-5xl mb-10 font-bold text-center'>Add a Car</h2>
            <form onSubmit={handleAddCar}>
                <div className='container bg-gradient-to-r from-cyan-500 to-blue-500 border gap-4 p-24'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Name" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='brandname' placeholder="Brand Name" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" name='price' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Image" name='image' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Car Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Car Type" name='cartype' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Rating" name='rating' className="input w-full input-bordered" min="1" max="5" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Short Description" name='shortdes' className="input w-full input-bordered" />
                        </label>
                    </div>
                    <input type="submit" value="Add Car" className='btn btn-block mt-7 bg-orange-300' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
