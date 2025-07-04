import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import images from '../Assets/Image home/imageabout.jpg';
const About = () => {
    return (
        <>
            <section className="about">
                <div className="about-content">
                    <h2>Welcome to Fitness Club Where Fitness Meets Passion!</h2>
                    <p>
                        At <strong>Fitness Club</strong>, we believe fitness is not just about lifting weights or running miles—it's about building a lifestyle that empowers you physically, mentally, and emotionally.
                    </p>
                    <p>
                        Founded in <strong>2024</strong>, our gym has been a cornerstone for individuals seeking to achieve their fitness goals, whether it’s shedding pounds, building strength, or improving overall well-being.
                    </p>
                    
                    <h3>Our Mission</h3>
                    <p>
                        To create an inclusive, inspiring, and motivating environment where everyone, regardless of their fitness level, can thrive and achieve their personal health goals.
                    </p>
                    
                    <h3>Why Choose Fitness Club</h3>
                    <ul>
                        <li>🏋️ <strong>Professional Trainers:</strong> Certified trainers to guide and motivate you.</li>
                        <li>💪 <strong>State-of-the-Art Equipment:</strong> Modern gym technology for optimal results.</li>
                        <li>🧘 <strong>Diverse Classes:</strong> Yoga, HIIT, strength training, and more.</li>
                        <li>🥗 <strong>Nutrition Support:</strong> Personalized diet plans.</li>
                        <li>🤝 <strong>Community Spirit:</strong> Supportive and motivating environment.</li>
                    </ul>
                    
                    <h3>Our Vision</h3>
                    <p>
                        To inspire healthier lifestyles and create a community where fitness is celebrated, goals are achieved, and everyone feels empowered to become their best selves.
                    </p>

                    <h3>Join Us Today!</h3>
                    <p>
                        Whether you're a beginner or an experienced athlete, <strong>Fitness Club</strong> is your ultimate fitness destination. Let’s build a stronger, healthier, and happier you—together!
                    </p>
                </div>
                <div className="about-image">
                    <img src={images} alt="boy running" />
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default About;
