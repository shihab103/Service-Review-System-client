import React from "react";
import { Link } from "react-router";

const FeaturedServices = ({ servicesData }) => {
  const data = servicesData.data;

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.slice(0,6).map((service) => (
          <div
            key={service._id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 mt-5"
          >
            <figure>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600">{service.description}</p>
              <div className="mt-2">
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  {service.category}
                </p>
                <p>
                  <span className="font-medium">Price:</span> ${service.price}
                </p>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/services/${service._id}`}>
                  <button className="btn btn-sm btn-primary">
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
