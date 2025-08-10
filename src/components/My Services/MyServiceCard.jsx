import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyServiceCard = ({ service, onDelete }) => {
  const { _id, image, title, description } = service;
  const navigate = useNavigate();

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
        fetch(`${import.meta.env.VITE_API_URL}/service/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your service has been deleted.", "success");
              onDelete(_id); // update parent state
            }
          });
      }
    });
  };

  return (
    <div className="card-bg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden h-full">
      <figure className="h-44 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 flex-grow text-sm">{description.slice(0, 90)}...</p>
        <div className="mt-3 flex justify-end gap-3">
          <button
            onClick={() => navigate(`/dashboard/updateServices/${_id}`)}
            className="btn btn-outline btn-sm h1"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-outline btn-sm h2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServiceCard;
