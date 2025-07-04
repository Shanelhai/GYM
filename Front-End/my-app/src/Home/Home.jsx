import React from 'react';
import './Home.css';
import image from '../Assets/Image home/image.jpg';
import images from '../Assets/Image home/image2.jpg';
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Aabout from './Aabout';
import Servicess from './Servicess';
import Footer from '../Footer/Footer';

const Home = () =>{
    return(
        <>
            <div className='home-container'>
            <div className="hero-left">
            <h2>Transform Your Body,</h2>
            <h2>Transform Your Life</h2>
            <p>The gym is where discipline meets determination, every drop of sweat counts, and every rep brings you closer to your best self.💪🔥</p>
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <IoLogoYoutube /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter /></a>
            </div>
            <div className="hero-right">
            <img src={image} alt="Girl playing soccer" />
            <img src={images} alt="Boy reading a book" />
            </div>
            </div>
            <Aabout/>
            <Servicess/>
            <Footer/>
        </>
    )
}
export default Home;