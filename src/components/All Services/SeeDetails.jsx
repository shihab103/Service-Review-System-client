import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router";
import axios from "axios";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { getIdToken } from "firebase/auth";
import Loading from "../Loading/Loading";

const SeeDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const [service, setService] = useState(null);
  const [serviceLoading, setServiceLoading] = useState(true);
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [textReview, setTextReview] = useState("");
  const [rating, setRating] = useState(0);

  // Fetch service without requiring login
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/service/${id}`);
        const data = await res.json();
        setService(data);
      } catch (error) {
        console.error("Failed to fetch service:", error);
      } finally {
        setServiceLoading(false);
      }
    };
    fetchService();
  }, [id]);

  // Fetch reviews
  useEffect(() => {
    if (service?._id) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/reviews/${service._id}`)
        .then((res) => setReviews(res.data))
        .catch((err) => console.log(err));
    }
  }, [service?._id]);

  if (loading || serviceLoading) {
    return <Loading />;
  }

  if (!service) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold text-red-500">Service not found!</p>
      </div>
    );
  }

  const { title, image, price, _id, company } = service;

  const handleSubmitReview = async () => {
    if (!textReview || rating === 0) {
      return Swal.fire("Error", "Please provide both rating and review text", "error");
    }

    try {
      const accessToken = await getIdToken(user);
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

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, reviewData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res.data.insertedId) {
        Swal.fire("Success", "Review added successfully", "success");
        setReviews([reviewData, ...reviews]);
        setTextReview("");
        setRating(0);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      {/* Service Details */}
      <div className="card-bg shadow-xl rounded-xl overflow-hidden">
        <div className="h-64 md:h-96">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-xl" />
        </div>

        <div className="p-6 md:p-8 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <span className="btn-bg font-semibold px-4 py-2 rounded-full shadow-md whitespace-nowrap">
            ৳{price}
          </span>
        </div>

        <div className="px-6 md:px-8 pb-6 gray">
          <span className="font-semibold">Company:</span> {company}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h3>

        {/* Add Review */}
        {user ? (
          <div className="card-bg p-4 rounded-lg mb-6">
            <h4 className="text-xl font-semibold mb-2">Add Your Review</h4>
            <textarea
              className="textarea bg textarea-bordered w-full mb-3"
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
              <button className="btn btn-bg" onClick={handleSubmitReview}>
                Add Review
              </button>
            </div>
          </div>
        ) : (
          <p className="h1 font-bold mb-5">Please log in to add a review.....</p>
        )}

        {/* Show Reviews */}
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((r, idx) => (
              <div key={idx} className="p-4 card-bg rounded-md shadow-sm bg">
                <div className="flex items-center gap-3 mb-2">
                  <img src={r.userPhoto} alt={r.userName} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{r.userName}</p>
                    <p className="text-sm text-gray-500">{r.date}</p>
                  </div>
                </div>
                <p className="gray mb-1">{r.reviewText}</p>
                <Rating
                  readonly
                  initialRating={r.rating}
                  emptySymbol={<span className="text-lg text-gray-400">☆</span>}
                  fullSymbol={<span className="text-lg text-yellow-500">★</span>}
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
