import image from '../../assets/Photo/about.jpg';

import img1 from '../../assets/Photo/1 (2).jpg';
import img2 from '../../assets/Photo/2 (2).jpg';
import img3 from '../../assets/Photo/3 (2).jpg';

const About = () => {
  return (
    <div className=" text-gray-800">
      {/* About Koffi Section */}
      <section className=" mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
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
          <h2 className="text-3xl font-bold h1 mb-4">
            About Koffi
          </h2>
          <p className="mb-4 pc">
            Welcome to <span className="font-semibold">Koffi</span>, where
            passion meets perfection in every cup. We believe coffee is more
            than just a drink – it’s an experience, a moment of comfort, and a
            burst of inspiration.
          </p>
          <p className="mb-4 pc">
            <strong>We Started At:</strong> 2015 – with a small coffee cart and
            a big dream. Today, we serve coffee lovers from all over the city,
            blending tradition with modern flavors.
          </p>
          <p className='pc'>
            Our beans are sourced from the finest farms, roasted with care, and
            brewed with love – all to bring you that perfect cup every time.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section (New Design) */}
      <section className="card-bg py-16">
        <div className="mx-auto px-6">
          <h2 className="text-3xl font-bold text-center h1 mb-10">
            Meet Our Coffee Chefs
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                name: "Carlos Mendoza",
                role: "Head Coffee Chef",
                img: img1,
              },
              {
                name: "Lina Thompson",
                role: "Coffee Roasting Specialist",
                img: img2,
              },
              {
                name: "Jamal Ahmed",
                role: "Brew Master",
                img: img3,
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg rounded-xl shadow-lg p-6 w-64 flex flex-col items-center hover:scale-105 transition-transform duration-300"
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
      <section className="py-16 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center h1 mb-12">
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
              className="bg p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{process.icon}</div>
              <h3 className="font-semibold h1">{process.step}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
