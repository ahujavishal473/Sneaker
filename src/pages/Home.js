import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Home.css';
function Home() {
    const [shoesdata,setShoesdata]=useState([]);

    useEffect(()=>{
        axios
        .get("https://baby-blue-scallop-yoke.cyclic.app/api/data")
        .then((response)=>{
            setShoesdata(response.data);
        })
    },[])
    if(!shoesdata){
        return <h1>Loading....</h1>
    }
    const firstTenItems = shoesdata.slice(0, 4);

   

    return(
        <>
        <div className="photo">
          <div className="left">
            <p>Your Journey, Your Footwear:<br /> Find the Perfect Match.</p>
            <Link to={'/Men'}><button className="shop-button">Shop for Men</button></Link>
            <Link to={'/Women'}><button className="shop-button">Shop for Women</button></Link>
          </div> 
        </div>
        
          <div className="text"><h1>Our Products</h1></div>
          <div className="data">
        {firstTenItems.map((shoes)=>(
            <div className="card" key={shoes.product_id}>
                <img  className="p" src={shoes.product_images} alt={shoes.product_name} height="300px" width="400px"/>
                <h3 style={{textAlign:"left"}}>{shoes.product_name}</h3>
                <h3 style={{textAlign:"left"}}>₹{shoes.price}</h3>
                <div className="btn"><Link to={`Details/${shoes.product_id}`}><button type="submit">More details</button></Link></div>
            </div>
        ))}
       
        </div>
          <div className="explore">
          <Link to={'/All'}><button className="button1" type="submit">Show More</button></Link> 
          </div>

          <div className="brand">
          <div className="nike">
          
          </div>
          <div className="puma">

          </div>
        
          </div>
        
      </>
    );
    
}
export default Home;