
import React from 'react';

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-1/3">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
