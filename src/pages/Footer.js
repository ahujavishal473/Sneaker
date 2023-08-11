import React from "react";
import '../css/footer.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="box1">
                    <span>About us</span><br /><br />
                    <p>We are a passionate and dedicated team committed to delivering high-quality sneakers that cater to your needs. With a focus on innovation and customer satisfaction, we strive to exceed expectations and build lasting relationships. Explore our offerings and join us on a journey of excellence.
                    </p>
                </div>
                <div className="box2">

                    <span>Contact</span><br /><br />
                    <span> <BsFillTelephoneFill /> : 9825112012</span>
                    <span> <p><MdEmail /> : abc@gmail.com</p></span>


                </div>
               

                <div className="box3">
                    <span>Pages</span><br /><br />
                    <ul className="link">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Men">Men</Link></li>
                        <li><Link to="/Women">Women</Link></li>
                        <li><Link to="/All">All</Link></li>
                        
                    </ul>
                </div>
            </div>
            <div className="foot">
                © Copyright 2022 Shoes World. All rights reserved.
            </div>
        </>
    );

}
export default Footer;