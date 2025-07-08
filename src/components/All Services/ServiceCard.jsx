import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
  const { _id, image, title, description, category, price } = service;

  return (
    <div className="card lg:card-side h-[250px] bg-base-100 shadow-md border hover:shadow-xl transition duration-300">
      <figure className="lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-l-md"
        />
      </figure>
      <div className="card-body lg:w-1/2 text-center items-center justify-center">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="py-2 text-gray-600">{description.slice(0, 100)}...</p>
        <p className="font-semibold text-lg text-green-600">${price}</p>
        <div className="card-actions mt-4">
          <Link to={`/services/${_id}`}>
          <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
