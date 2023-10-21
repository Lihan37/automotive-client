import React, { useState, useEffect } from 'react';
import NavBar from '../../shared/NavBar/NavBar';

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addToCart')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCartItems(data);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    const removeItem = (index, itemId) => {
        fetch(`http://localhost:5000/cart/${itemId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    const updatedCart = [...cartItems];
                    updatedCart.splice(index, 1);
                    setCartItems(updatedCart);
                } else {
                    console.error('Failed to delete item:', response.status);
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    };

    return (
        <div>
            <NavBar />
            <div className="container mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li
                            key={index}
                            className="bg-white border p-4 mb-4 flex justify-between items-center"
                        >
                            <div className="w-1/3">
                                <span>{item.name}</span>
                            </div>
                            <div className="w-1/3">
                                <span>{item.brand}</span>
                            </div>
                            <div className="w-1/3">
                                <span>${item.price}</span>
                            </div>
                            <button
                                onClick={() => removeItem(index, item._id)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover-bg-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyCart; // Move the 'export default' to the end of the component
