import React from 'react';
import { Partner } from './Partner';
import { partnersData } from '../Data/partner';

export const PartnersList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Partners</h1>
      <div className="grid gap-10 grid-cols-1">
        {partnersData.map((partner, index) => (
          <Partner
            key={index}
            title={partner.title}
            description={partner.description}
            img={partner.img}
          />
        ))}
      </div>
    </div>
  );
};
