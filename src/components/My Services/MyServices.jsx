import React, { useState } from "react";
// import { useLoaderData } from "react-router";
import MyServiceCard from "./MyServiceCard";
import { PacmanLoader } from "react-spinners";

import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getIdToken } from "firebase/auth";

const MyServices = () => {
  // const data = useLoaderData();
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
    return (
      <div className="h-screen flex justify-center items-center">
        <PacmanLoader color="#36d7b7" size={25} />
      </div>
    );
  }

  const handleServiceDelete = (id) => {
    const filtered = services.filter((service) => service._id !== id);
    setServices(filtered);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 gap-6 py-12">
        {/* service card */}
        {services.map((service) => (
          <MyServiceCard
            key={service._id}
            service={service}
            onDelete={handleServiceDelete}
          ></MyServiceCard>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
