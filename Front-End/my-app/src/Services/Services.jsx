import React from 'react';
import image from '../Assets/Image home/image3.jpg';
import images from '../Assets/Image home/image4.jpg';
import imagess from '../Assets/Image home/image5.jpg';
import Footer from '../Footer/Footer';

const Services = () => {
  return (
    <>
        <section className="services">
            <h2>Our Fitness Club Services</h2>
                <div className="services-container">
                <div className="service-card">
                    <img src={image} alt="Personal Trainer" />
                    <h3>Personal Trainer</h3>
                    <p>Customized workout plans tailored for you.</p>
                    {/* Use anchor tag <a> instead of <button> for navigation */}
                    <a 
                      href="https://www.youtube.com/@YatinderSinghOfficial" 
                      className="service-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Learn More</a>
                    </div>
                    <div className="service-card">
                    <img src={images} alt="Group Classes" />
                    <h3>yoga Class</h3>
                    <p>Experience high-energy yoga class.</p>
                    <a 
                      href="https://www.youtube.com/watch?v=hHhxKkskHDg" 
                      className="service-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Join Now</a>
                    </div>
                    <div className="service-card">
                    <img src={imagess} alt="Nutrition Coaching" />
                    <h3>Nutrition Coaching</h3>
                    <p>Get a balanced diet plan that works for you.</p>
                    <a 
                      href="https://www.youtube.com/watch?v=n9YgUY9MZjc" 
                      className="service-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                    </div>
                    </div>
                    </section>
                    <Footer />
                </>
            );
        };

export default Services;
