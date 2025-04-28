import React from 'react';

export const Partner = ({ title, description, img }) => {
  return (
    <div className=" bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out h-full flex flex-col">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
};
