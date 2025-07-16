import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateServices = () => {
  const data = useLoaderData(); // data.data contains the actual service
  const service = data.data;
  const { _id, title, image, email, company, price, website, description, category } = service;

  const navigate = useNavigate();


  const handleUpdateServices = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateServices = Object.fromEntries(formData.entries());

    // send updated services to the db
    fetch(`http://localhost:3000/service/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateServices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Service Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate(`/MyServices/${email}`);
          });
        }
      });
  };

  return (
    <div className="max-w-3xl my-10 shadow-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Service</h2>
      <form onSubmit={handleUpdateServices} className="flex flex-col items-center gap-4">
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder="Service Title"
          className="input input-bordered w-full"
          required
        />
        <input
          type="url"
          name="image"
          defaultValue={image}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="company"
          defaultValue={company}
          placeholder="Company Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="url"
          name="website"
          defaultValue={website}
          placeholder="Website URL"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          defaultValue={description}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <input
          type="text"
          name="category"
          defaultValue={category}
          placeholder="Category (e.g., IT, Transport)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          defaultValue={price}
          placeholder="Price in BDT"
          className="input input-bordered w-full"
          required
        />

        <input
          type="submit"
          className="btn btn-primary mt-2 w-full"
          value="Update Service"
        />
      </form>
    </div>
  );
};

export default UpdateServices;
