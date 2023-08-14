import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../css/Detail.css';

function Details() {
    const { productid } = useParams();
    const [details, setDetails] = useState([]);
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        axios
        .get(`https://baby-blue-scallop-yoke.cyclic.app/api/data?id=${productid}`)
        .then((response) => {
            setDetails(response.data);
        });
    }, [productid]);

    const addToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to the cart.");
            return;
        }
    
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        
        const existingCartItem = cartItems.find(item => item.productid === details.productid && item.selectedSize === selectedSize);
        if (existingCartItem) {
            alert("This product with the selected size is already in the cart.");
            return;
        }
    
        const cartItem = {
            ...details,
            selectedSize: selectedSize
        };
        
        cartItems.push(cartItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
        alert("Product added successfully to the cart");
    };
    

    if (!details) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="detailcard">
                <div className="productimage">
                    <img src={details.product_images} alt={details.product_name} height="300px" width="400px" />
                </div>
                <div className="productdetails">
                    <span className="company">{details.company_name}</span>
                    <span className="product-name">{details.product_name}</span>
                    <span className="price">₹{details.price}</span>
                    <div className="size-container">
                    <label htmlFor="shoe-size">Select Size:</label>
                        <select
                            id="shoe-size"
                            className="shoe-size-input"
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="9">10</option>
                            
                        </select>
                    </div>
                    <button className="cart-button" onClick={addToCart}>Add to Cart</button>
                    <h3>Product description</h3>
                    <span className="description">{details.description}</span>
                </div>
            </div>
        </>
    );
}

export default Details;










 

 

