import React, { useEffect, useState, useRef } from "react";

function useInView(options) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      options
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isInView];
}

const WhyChooseUs = () => {
  const [leftRef, leftInView] = useInView({ threshold: 0.3 });
  const [textRef, textInView] = useInView({ threshold: 0.3 });
  const [rightRef, rightInView] = useInView({ threshold: 0.3 });

  const transitionStyle = {
    transitionProperty: "opacity, transform",
    transitionDuration: "700ms",
    transitionTimingFunction: "ease-out",
    willChange: "opacity, transform",
  };

  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We are committed to delivering fresh, high-quality meals crafted with care. Our team ensures every sip is satisfying, making us your top choice for amazing coffee experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Left Image */}
        <div
          ref={leftRef}
          className="w-full h-64 rounded-lg shadow-md overflow-hidden cursor-pointer"
          style={{
            ...transitionStyle,
            opacity: leftInView ? 1 : 0,
            transform: leftInView ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Coffee"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          ref={textRef}
          className="text-center md:text-left"
          style={{
            ...transitionStyle,
            opacity: textInView ? 1 : 0,
            transform: textInView ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">What Makes Us Special?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Freshly Roasted Premium Beans</li>
            <li>Skilled Baristas with Passion</li>
            <li>Authentic Aroma and Taste</li>
            <li>Comfortable Café Atmosphere</li>
            <li>Fast & Friendly Customer Service</li>
          </ul>
        </div>

        {/* Right Image */}
        <div
          ref={rightRef}
          className="w-full h-64 rounded-lg shadow-md overflow-hidden cursor-pointer"
          style={{
            ...transitionStyle,
            opacity: rightInView ? 1 : 0,
            transform: rightInView ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1341912094/photo/portrait-of-a-successful-chef-at-a-restaurant-and-smiling.jpg?s=612x612&w=0&k=20&c=qJlJ1sy6Hzpp9N50U7R_S7ayJ_sd2uC3Dh1QbAABq8A="
            alt="Chef"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
