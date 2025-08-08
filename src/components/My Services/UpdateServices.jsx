import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import { getIdToken } from "firebase/auth";

const UpdateServices = () => {
  const { user, loading } = useContext(AuthContext);
  const [service, setService] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      if (!loading && user?.email) {
        try {
          const accessToken = await getIdToken(user);

          const res = await fetch(`${import.meta.env.VITE_API_URL}/service/${id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const data = await res.json();
          setService(data);
        } catch (error) {
          console.error("Failed to fetch service:", error);
        }
      }
    };

    fetchService();
  }, [loading, id, user]);

  const handleUpdateServices = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateServices = Object.fromEntries(formData.entries());

    try {
      const accessToken = await getIdToken(user);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/service/${service._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updateServices),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Service Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate(`/MyServices/${service.email}`);
        });
      } else {
        Swal.fire("No changes were made.", "", "info");
      }
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire("Failed to update service", "", "error");
    }
  };

  if (!service) return <div className="text-center mt-10">Loading service details...</div>;

  const { title, image, company, website, description, category, price } = service;

  return (
    <div className="max-w-3xl my-10 shadow-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Service</h2>
      <form onSubmit={handleUpdateServices} className="flex flex-col items-center gap-4">
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder="Service Title"
          className="input bg-[#9afcd890] input-bordered w-full"
          required
        />
        <input
          type="url"
          name="image"
          defaultValue={image}
          placeholder="Image URL"
          className="input bg-[#9afcd890] input-bordered w-full"
          required
        />
        <input
          type="text"
          name="company"
          defaultValue={company}
          placeholder="Company Name"
          className="input bg-[#9afcd890] input-bordered w-full"
          required
        />
        <input
          type="url"
          name="website"
          defaultValue={website}
          placeholder="Website URL"
          className="input bg-[#9afcd890] input-bordered w-full"
          required
        />
        <textarea
          name="description"
          defaultValue={description}
          placeholder="Description"
          className="textarea bg-[#9afcd890] textarea-bordered w-full"
          required
        ></textarea>
        <input
          type="text"
          name="category"
          defaultValue={category}
          placeholder="Category (e.g., IT, Transport)"
          className="input bg-[#9afcd890] input-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          defaultValue={price}
          placeholder="Price in BDT"
          className="input bg-[#9afcd890] input-bordered w-full"
          required
        />
        <input
          type="submit"
          className="btn btn-bg mt-2 w-full"
          value="Update Service"
        />
      </form>
    </div>
  );
};

export default UpdateServices;
