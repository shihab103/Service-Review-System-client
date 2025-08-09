import image from '../../assets/Photo/about.jpg';
const About = () => {
  return (
    <div className="bg-[#f9f5f0] text-gray-800">
      {/* About Koffi Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src={image}
            alt="Coffee Seed"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-bold text-[#6e4528] mb-4">
            About Koffi
          </h2>
          <p className="mb-4">
            Welcome to <span className="font-semibold">Koffi</span>, where
            passion meets perfection in every cup. We believe coffee is more
            than just a drink – it’s an experience, a moment of comfort, and a
            burst of inspiration.
          </p>
          <p className="mb-4">
            <strong>We Started At:</strong> 2015 – with a small coffee cart and
            a big dream. Today, we serve coffee lovers from all over the city,
            blending tradition with modern flavors.
          </p>
          <p>
            Our beans are sourced from the finest farms, roasted with care, and
            brewed with love – all to bring you that perfect cup every time.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section (New Design) */}
      <section className="bg-[#f0ded0] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#6e4528] mb-10">
            Meet Our Coffee Chefs
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                name: "Carlos Mendoza",
                role: "Head Coffee Chef",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Lina Thompson",
                role: "Coffee Roasting Specialist",
                img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Jamal Ahmed",
                role: "Brew Master",
                img: "https://images.unsplash.com/photo-1532634726-8b9fb9981cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 w-64 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#8b5e3c]"
                />
                <h3 className="text-xl font-semibold text-[#6e4528]">{member.name}</h3>
                <p className="text-[#6e4528] italic">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Coffee Process */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#6e4528] mb-12">
          Our Coffee Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[ 
            { step: "Harvesting", icon: "🌱" }, 
            { step: "Roasting", icon: "🔥" }, 
            { step: "Brewing", icon: "☕" }, 
            { step: "Serving", icon: "🍪" },
          ].map((process, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{process.icon}</div>
              <h3 className="font-semibold">{process.step}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
