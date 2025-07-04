import React, { useState } from "react";
import './Contact.css';
import Footer from "../Footer/Footer";
import image5 from "../Assets/Image Contact/5.avif";

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const data = { ...formData, access_key: "45815596-c96e-4522-874b-00d40f126ca1" };

        try {
            const res = await fetch("http://localhost:5000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();

            if (res.ok && result.success) {
                setSubmissionStatus('Submission successful!');
                setFormData({
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    address: ''
                });
            } else {
                setSubmissionStatus('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Fitness Club Contact</h1>
            <hr />
            <div className="contact-container">
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} placeholder="Your first name" /><br />

                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} placeholder="Your last name" /><br />

                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" /><br />

                        <label htmlFor="phone">Phone number:</label><br />
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" /><br />

                        <label htmlFor="address">Address:</label><br />
                        <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="6" cols="50" placeholder="Write your address..."></textarea><br />

                        <button type="submit">Submit</button>
                    </form>
                    {submissionStatus && <p>{submissionStatus}</p>}
                </div>
                <div className="box-img">
                    <img src={image5} alt="Beach at sunset with waves crashing" className="image" />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
