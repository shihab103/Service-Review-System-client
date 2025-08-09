import React, { useState, useEffect, useContext } from "react";
import MyServiceCard from "./MyServiceCard";
import { AuthContext } from "../../contexts/AuthContext";
import { getIdToken } from "firebase/auth";
import Loading from "../Loading/Loading";

const MyServices = () => {
  const { user, loading } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      if (!loading && user?.email) {
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
          setServices(data);
        } catch (error) {
          console.error("Failed to fetch services:", error);
        }
      }
    };

    fetchServices();
  }, [loading, user?.email]);

  if (loading) {
    return <Loading />;
  }

  const handleServiceDelete = (id) => {
    const filtered = services.filter((service) => service._id !== id);
    setServices(filtered);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-12">
        {services.map((service) => (
          <MyServiceCard
            key={service._id}
            service={service}
            onDelete={handleServiceDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
