
import React, { useState } from 'react';
import Card from './Card';

const Carousel = ({ cardData }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 300; // Adjust based on card size

  const scrollLeft = () => {
    setScrollPosition(prev => prev - scrollAmount);
  };

  const scrollRight = () => {
    setScrollPosition(prev => prev + scrollAmount);
  };

  return (
    <div className="relative">
      
      <div
        className="carousel-container flex gap-8 overflow-x-auto p-8"
        style={{ transform: `translateX(-${scrollPosition}px)`, transition: 'transform 0.3s ease' }}
      >
        {cardData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
            buttonText={data.buttonText}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
