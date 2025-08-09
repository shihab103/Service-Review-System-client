import React, { useContext, useEffect, useState } from "react";
import { getIdToken } from "firebase/auth";
import MyServiceCard from "../My Services/MyServiceCard";
import { AuthContext } from "../../contexts/AuthContext";
import MyReviews from "../MyReview/MyReviews";
import Loading from "../Loading/Loading";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      if (user?.email) {
        try {
          const accessToken = await getIdToken(user);
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/my-service/${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const data = await res.json();
          setMyServices(data); 
        } catch (error) {
          console.error("Failed to fetch services:", error);
        } finally {
          setLoading(false); 
        }
      } else {
        setLoading(false);
      }
    };

    fetchServices();
  }, [user]);

  const handleServiceDelete = (deletedId) => {
    setMyServices(myServices.filter((service) => service._id !== deletedId));
  };

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <section>
        <h2 className="text-2xl h2 font-semibold mb-6">My Services</h2>
        {myServices.length === 0 ? (
          <p className="text-gray-600">You have not added any services yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {myServices.map((service) => (
              <MyServiceCard
                key={service._id}
                service={service}
                onDelete={handleServiceDelete}
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <MyReviews />
      </section>
    </div>
  );
};

export default Dashboard;
