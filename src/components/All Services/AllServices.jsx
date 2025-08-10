import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';

const AllServices = () => {
  const data = useLoaderData();
  const [services, setServices] = useState(data?.data || []);

  return (
    <div>
      <h1 className='text-3xl font-semibold h1 text-center mb-3 mt-7'>All Services here</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
