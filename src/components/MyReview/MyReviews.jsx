import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { AuthContext } from "../../contexts/AuthContext";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  const [updatedRating, setUpdatedRating] = useState(0);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/user-reviews/${user.email}`)
        .then((res) => setMyReviews(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  // Delete review
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`${import.meta.env.VITE_API_URL}/reviews/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
          setMyReviews(myReviews.filter((review) => review._id !== id));
        }
      }
    });
  };

  // Update modal open
  const openUpdateModal = (review) => {
    setEditingReview(review);
    setUpdatedText(review.reviewText);
    setUpdatedRating(review.rating);
    document.getElementById("update_modal").showModal();
  };

  // Update review
  const handleUpdateReview = async () => {
    const updatedReview = {
      reviewText: updatedText,
      rating: updatedRating,
    };

    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/reviews/${editingReview._id}`, updatedReview);
      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Your review has been updated.", "success");
        // Update local state
        const newReviews = myReviews.map((r) =>
          r._id === editingReview._id ? { ...r, ...updatedReview } : r
        );
        setMyReviews(newReviews);
        document.getElementById("update_modal").close();
      }
    } catch (error) {
      console.log("🚀 ~ handleUpdateReview ~ error:", error)
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Reviews</h2>

      {myReviews.length === 0 ? (
        <p className="text-center">You haven't posted any reviews yet.</p>
      ) : (
        <div className="space-y-6">
          {myReviews.map((review) => (
            <div
              key={review._id}
              className="bg-base-100 shadow-md p-6 rounded-lg flex flex-col gap-2"
            >
              <p className="text-xl font-semibold">{review.serviceTitle}</p>
              <p className="text-gray-700">{review.reviewText}</p>
              <Rating
                readonly
                initialRating={review.rating}
                emptySymbol={<span className="text-lg text-gray-400">☆</span>}
                fullSymbol={<span className="text-lg text-yellow-500">★</span>}
              />
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => openUpdateModal(review)}
                  className="btn btn-sm btn-info"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-3">Update Your Review</h3>

          <div className="mb-2">
            <label className="font-semibold">Service Title:</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={editingReview?.serviceTitle}
              readOnly
            />
          </div>

          <div className="mb-2">
            <label className="font-semibold">Review:</label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="font-semibold">Rating:</label>
            <Rating
              emptySymbol={<span className="text-2xl text-gray-400">☆</span>}
              fullSymbol={<span className="text-2xl text-yellow-500">★</span>}
              initialRating={updatedRating}
              onChange={(rate) => setUpdatedRating(rate)}
            />
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <button onClick={handleUpdateReview} className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyReviews;
