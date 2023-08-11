import React, { useState, useEffect } from "react";
import '../css/Cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                
                <div >
                        {cartItems.map((item, index) => (
                            <div className="cartitem" key={index}>
                                <div className="image"><img src={item.product_images} alt="img" height={"150px"} /></div>
                                <div className="details">
                                        <h3>{item.product_name}</h3>
                                       <p>Price: ₹{item.price}</p>
                                </div>
                                <div className="remove">
                                    <button onClick={() => removeFromCart(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        <div className="">
                            <span>Total Price: ₹{getTotalPrice()}</span>
                        </div>
                 
                </div>   
            )}
        </div>
    );
}

export default Cart;