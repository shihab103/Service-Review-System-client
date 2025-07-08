import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useLoaderData } from 'react-router';

const SeeDetails = () => {
    const { user } = use(AuthContext);
  const { data: service } = useLoaderData();

  const { title,name, image, price, _id, email, company } = service || {};


  return (
    <div>
      <div className="flex justify-around items-center py-12">
        <div className="flex-1">
          <img src={image} alt="" />
        </div>
        <div className="flex-1 p-5">
          <p>Title: {title}</p>
          <p>Company: {company}</p>
          <p>Price: {price}</p>

          <div className="flex gap-3">
            <button className="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;