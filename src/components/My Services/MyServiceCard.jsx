import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyServiceCard = ({ service,onDelete }) => {
  const { _id, image, title, description, category, price } = service;
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
        fetch(`http://localhost:3000/service/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your service has been deleted.", "success");
              onDelete(_id); // parent ke bolo ei service delete hoyeche
            }
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
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/updateServices/${_id}`)}
            className="badge btn badge-outline"
          >
            Update
          </button>
          <button onClick={handleDelete} className="badge btn badge-outline">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServiceCard;
