import { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router"; 
import { AuthContext } from "../../contexts/AuthContext";
import { getIdToken } from "firebase/auth"; 

const AddServices = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [uploading, setUploading] = useState(false);

  const handleAddService = async (e) => {
    e.preventDefault();
    const form = e.target;

    const imageFile = form.image.files[0];
    if (!imageFile) {
      return Swal.fire("Error", "Please select an image file", "error");
    }

    setUploading(true);

    try {
      const imgbbAPIKey = "ff254ae7c4f6885639547b770ca43356";

      const imgFormData = new FormData();
      imgFormData.append("image", imageFile);

      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
        imgFormData
      );

      const imageUrl = imgbbRes.data.data.url;

      const newService = {
        title: form.title.value,
        image: imageUrl,
        company: form.company.value,
        website: form.website.value,
        description: form.description.value,
        category: form.category.value,
        price: form.price.value,
        addedDate: new Date().toISOString().split("T")[0],
        email: user?.email,
      };

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

      setUploading(false);

      if (response.status === 201) {
        Swal.fire({
          title: "Good job!",
          text: "Service Added Successfully",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      setUploading(false);
      console.error("Error adding service:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-3xl my-10 shadow-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Service</h2>
      <form onSubmit={handleAddService} className="flex flex-col items-center gap-4">
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          className="input input-bordered bg-[#f0ded0] w-full"
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
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
          disabled={uploading}
          className="btn btn-bg mt-2 w-full"
          value={uploading ? "Uploading..." : "Add Service"}
        />
      </form>
    </div>
  );
};

export default AddServices;
