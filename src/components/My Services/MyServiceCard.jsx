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
    <div className="card bg-base-100 mx-auto w-full shadow-sm">
      <figure>
        <img
        className="h-[250px] w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="badge btn badge-outline">Update</button>
          <button onClick={handleDelete} className="badge btn badge-outline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyServiceCard;
