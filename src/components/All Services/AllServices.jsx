import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';

const AllServices = () => {
  const data = useLoaderData();
  const [services, setServices] = useState(data?.data || []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
