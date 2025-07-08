import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyServiceCard = ({ service }) => {
  const { _id, image, title, description, category, price } = service;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/service/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your coffee has been deleted.",
          icon: "success",
        });
      }
    });
  };

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
          <button className="btn">Update</button>
          <button onClick={handleDelete} className="btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServiceCard;
