import React from "react";
import { Link } from "react-router";

const FeaturedServices = ({ servicesData }) => {
  const data = servicesData.data;

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold h1 text-center mb-6">Featured Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {data.slice(0, 10).map((service) => (
          <div
            key={service._id}
            className="card-bg rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition duration-300 flex flex-col"
          >
            {/* Apply same padding around image */}
            <div className="p-3 pt-3 pb-0">
              <figure className="h-32 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
            </div>

            <div className="p-3 flex flex-col flex-grow">
              <h2 className="text-sm font-bold mb-1 line-clamp-1">
                {service.title}
              </h2>
              <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                {service.description}
              </p>
              <div className="text-xs text-gray-700 mt-auto">
                <p>
                  <span className="font-medium">Price:</span> ${service.price}
                </p>
              </div>
              <div className="mt-2">
                <Link to={`/services/${service._id}`}>
                  <button className="btn border-none btn-sm  btn-bg w-full">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
