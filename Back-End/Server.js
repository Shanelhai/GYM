// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
require('dotenv').config();

// Create an instance of the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gym-data-information';
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schema and Model for the contact form
const contactSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submission
app.post('/submit', async (req, res) => {
  const { fname, lname, email, phone, address } = req.body;

  // Create a new contact record
  try {
    const newContact = new Contact({ fname, lname, email, phone, address });
    await newContact.save();
    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
