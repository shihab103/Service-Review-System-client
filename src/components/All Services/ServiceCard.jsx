import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { _id, image, title, description, category, price } = service;

  return (
    <div className="card-bg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden h-full">
      <figure className="h-40 overflow-hidden rounded-t-lg"> {/* ১০০px উচ্চতা */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="p-4 flex flex-col flex-grow"> {/* প্যাডিং একটু কমালাম */}
        <h2 className="text-lg font-semibold mb-1">{title}</h2> {/* ফন্ট সাইজ একটু ছোট */}
        <p className="text-xs pc font-medium mb-2">{category}</p> {/* ফন্ট ছোট */}
        <p className="gray flex-grow text-sm">{description.slice(0, 70)}...</p> {/* ডেসক্রিপশন ছোট */}
        <div className="mt-3 flex items-center justify-between">
          <span className="pc font-bold text-md">${price}</span>
          <Link to={`/services/${_id}`}>
            <button className="btn-bg px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors duration-300 text-sm">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
