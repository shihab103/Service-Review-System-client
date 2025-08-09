import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router"; 
import { AuthContext } from "../../contexts/AuthContext";
import { getIdToken } from "firebase/auth"; 

const AddServices = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddService = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());

    // Add current date and user's email
    newService.addedDate = new Date().toISOString().split("T")[0];
    newService.email = user?.email;

    try {
      const token = await getIdToken(user);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-service`,
        newService,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        Swal.fire({
          title: "Good job!",
          text: "Service Added Successfully",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error adding service:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
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
          className="input input-bordered bg-[#f0ded0] w-full"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="input input-bordered bg-[#f0ded0] w-full"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="input input-bordered bg-[#f0ded0] w-full"
          required
        />
        <input
          type="url"
          name="website"
          placeholder="Website URL"
          className="input input-bordered bg-[#f0ded0] w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered bg-[#f0ded0] w-full"
          required
        ></textarea>
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., IT, Transport)"
          className="input input-bordered bg-[#f0ded0] w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price in BDT"
          className="input input-bordered bg-[#f0ded0] w-full"
          required
        />
        <input
          type="submit"
          className="btn btn-bg mt-2 w-full"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddServices;
