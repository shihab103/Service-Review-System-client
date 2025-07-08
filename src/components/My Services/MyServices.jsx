import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyServiceCard from './MyServiceCard';

const MyServices = () => {
    const data = useLoaderData();
    const [services,setServices] = useState(data?.data || []);
    console.log(data);


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
                {/* service card */}
                {
                    services.map(service=> <MyServiceCard key={service._id} service={service} ></MyServiceCard>)
                }

            </div>
        </div>
    );
};

export default MyServices;