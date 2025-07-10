import React from "react";

const WhyChooseUs = () => {
  return (
     <div className="my-12 px-4 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We are committed to delivering fresh, high-quality meals crafted with
        care. Our team ensures every sip is satisfying, making us your top choice
        for amazing coffee experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Left Coffee Image (Background) */}
        <div
          className="w-full h-64 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80')`,
          }}
        ></div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">
            What Makes Us Special?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Freshly Roasted Premium Beans</li>
            <li>Skilled Baristas with Passion</li>
            <li>Authentic Aroma and Taste</li>
            <li>Comfortable Café Atmosphere</li>
            <li>Fast & Friendly Customer Service</li>
          </ul>
        </div>

        {/* Right Coffee Chef Image (Background) */}
        <div
          className="w-full h-64 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1341912094/photo/portrait-of-a-successful-chef-at-a-restaurant-and-smiling.jpg?s=612x612&w=0&k=20&c=qJlJ1sy6Hzpp9N50U7R_S7ayJ_sd2uC3Dh1QbAABq8A=')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
