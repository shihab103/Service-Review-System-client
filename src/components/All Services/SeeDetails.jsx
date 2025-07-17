import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router";
import axios from "axios";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { getIdToken } from "firebase/auth";
import { PacmanLoader } from "react-spinners";

const SeeDetails = () => {
  const { user,loading } = useContext(AuthContext);
  const [service, setService] = useState([null]);

  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [textReview, setTextReview] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
      const fetchServices = async () => {
        if (!loading && user?.email) {
          try {
            const accessToken = await getIdToken(user);
  
            const res = await fetch(
              `${import.meta.env.VITE_API_URL}/service/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
  
            const data = await res.json();
            setService(data);
          } catch (error) {
            console.error("Failed to fetch services:", error);
          }
        }
      };
  
      fetchServices();
    }, [loading, user?.email]);


  if (!service) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold text-red-500">Service not found!</p>
      </div>
    );
  }

   if (loading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <PacmanLoader color="#36d7b7" size={25} />
        </div>
      );
    }

  const { title, image, price, _id, company } = service;

  // Load reviews from backend
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/reviews/${_id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, [_id]);

  // Submit review handler
  const handleSubmitReview = async () => {
    if (!textReview || rating === 0) {
      return Swal.fire(
        "Error",
        "Please provide both rating and review text",
        "error"
      );
    }

    const reviewData = {
      serviceId: _id,
      serviceTitle: title,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      reviewText: textReview,
      rating,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/reviews`,
        reviewData
      );
      if (res.data.insertedId) {
        Swal.fire("Success", "Review added successfully", "success");
        setReviews([reviewData, ...reviews]); // show instantly
        setTextReview("");
        setRating(0);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden md:flex">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Company:</span> {company}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Price:</span> ৳{price}
          </p>
          <div>
            {user ? (
              <button className="btn btn-primary">Order</button>
            ) : (
              <p className="text-red-500">
                Please log in to order this service.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h3>

        {/* Add Review */}
        {user ? (
          <div className="bg-base-200 p-4 rounded-lg mb-6">
            <h4 className="text-xl font-semibold mb-2">Add Your Review</h4>
            <textarea
              className="textarea textarea-bordered w-full mb-3"
              placeholder="Write your review..."
              value={textReview}
              onChange={(e) => setTextReview(e.target.value)}
            ></textarea>
            <div className="flex items-center gap-4">
              <Rating
                initialRating={rating}
                onChange={(value) => setRating(value)}
                emptySymbol={<span className="text-3xl text-gray-400">☆</span>}
                fullSymbol={<span className="text-3xl text-yellow-500">★</span>}
              />
              <button className="btn btn-primary" onClick={handleSubmitReview}>
                Add Review
              </button>
            </div>
          </div>
        ) : (
          <p className="text-red-500">Please log in to add a review.</p>
        )}

        {/* Display Reviews */}
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((r, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-md shadow-sm bg-white"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={r.userPhoto}
                    alt={r.userName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{r.userName}</p>
                    <p className="text-sm text-gray-500">{r.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-1">{r.reviewText}</p>
                <Rating
                  readonly
                  initialRating={r.rating}
                  emptySymbol={<span className="text-lg text-gray-400">☆</span>}
                  fullSymbol={
                    <span className="text-lg text-yellow-500">★</span>
                  }
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
