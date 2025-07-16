import { use } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const AddServices = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleAddService = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const newService = Object.fromEntries(formData.entries());

  // Add current date
  newService.addedDate = new Date().toISOString().split("T")[0];

  newService.email = user?.email;

  console.log(newService);

  axios
    .post(`${import.meta.env.VITE_API_URL}/add-service`, newService)
    .then((data) => {
      console.log(data);
      Swal.fire({
        title: "Good job!",
        text: "Data Added Successfully",
        icon: "success",
      });
      navigate("/");
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      console.log(error);
    });
};


  return (
    <div className="max-w-3xl  my-10 shadow-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Service</h2>
      <form
        onSubmit={handleAddService}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          className="input input-bordered"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="input input-bordered"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="input input-bordered"
          required
        />
        <input
          type="url"
          name="website"
          placeholder="Website URL"
          className="input input-bordered"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered"
          required
        ></textarea>
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., IT, Transport)"
          className="input input-bordered"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price in BDT"
          className="input input-bordered"
          required
        />

        <input
          type="submit"
          className="btn btn-primary mt-2"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddServices;
