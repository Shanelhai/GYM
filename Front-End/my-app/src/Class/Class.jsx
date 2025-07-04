import React, { useState } from 'react';
import ClassMenu from './Classmenu';
import './Class.css';

const Class = () => {
  const [items, setItems] = useState(ClassMenu); // Initial state set to all items

  // Function to filter items by category
  const filterItem = (category) => {
    if (category === 'All') {
      setItems(ClassMenu); // If "All" is selected, reset to all items
    } else {
      // Filter exercises based on selected category
      const updatedItems = ClassMenu.filter(item => item.category === category);
      setItems(updatedItems); // Update the state with the filtered items
    }
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">Fitness Club Class Exercise</h1>
      <hr />
      <div className="menu-container">
        <div className="menu-tab">
          {/* Buttons to filter by category */}
          <button className="btn btn-warning" onClick={() => filterItem('All')}>All</button>
          <button className="btn btn-warning" onClick={() => filterItem('Chest')}>CHEST</button>
          <button className="btn btn-warning" onClick={() => filterItem('Back')}>BACK</button>
          <button className="btn btn-warning" onClick={() => filterItem('Bicep')}>BICEP</button>
          <button className="btn btn-warning" onClick={() => filterItem('Tricep')}>TRICEP</button>
          <button className="btn btn-warning" onClick={() => filterItem('Shoulder')}>SHOULDER</button>
          <button className="btn btn-warning" onClick={() => filterItem('Legs')}>LEGS</button>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery">
          {/* Map through the filtered items and display each */}
          {items.length > 0 ? (
            items.map((exercise) => (
              <div key={exercise.id} className="exercise-card">
                <img src={exercise.image} alt={exercise.name} className="exercise-image" />
                <h2 className="exercise-name">{exercise.name}</h2>
                <p className="exercise-category">{exercise.category}</p>
                <p className="exercise-description">{exercise.description}</p>
                <a href={exercise.youtube} target="_blank" rel="noopener noreferrer" className="youtube-link">
                  Watch this Video
                </a>
              </div>
            ))
          ) : (
            <p>No exercises found for this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Class;
