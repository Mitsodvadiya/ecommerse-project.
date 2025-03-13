import React from 'react';
import banner from "../assets/images/about.jpg"
import banner2 from "../assets/images/gallery-01.jpg"
// import pro1 from "../assets/images/pro-1.jpg"
// import pro2 from "../assets/images/pro-2.jpg"
// import pro3 from "../assets/images/pro-3.jpg"
// import manager from "../assets/images/manager.jpg"
// import designer from "../assets/images/designer.jpg"
// import developer from "../assets/images/developer.jpg"
const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 mb-16 overflow-hidden">
        <img
          src={banner}
          alt="Fashion Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white transform hover:scale-105 transition-transform duration-300">
            {/* <h1 className="text-5xl font-bold mb-4">StyleSpace</h1> */}
            <p className="text-xl">Redefining Fashion Since 2024</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="transform hover:-translate-y-2 transition-transform duration-300">
            <img
              src={banner2}
              alt="Our Workshop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in 2024, WardrobeWave has been redefining fashion through quality, 
              sustainability, and innovative design. We believe that great style shouldn't 
              compromise our planet's future.
            </p>
            <p className="text-lg text-gray-600">
              What started as a small boutique has grown into a community of fashion 
              enthusiasts and environmentally conscious individuals.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {  title: "Customer First", desc: "Your satisfaction is our top priority. We're committed to providing exceptional service and support." },
            {  title: "Quality Materials", desc: "We source the finest materials to ensure our clothing meets the highest standards of quality and comfort." },
            {  title: "Sustainable Fashion", desc: "Every piece is crafted with environmental consciousness, using eco-friendly materials and ethical practices." },
            {  title: "Design Excellence", desc: "Our designs blend contemporary trends with timeless elegance, creating pieces that last beyond seasons." }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image:pro1, title: "Design", desc: "Thoughtful creation of each piece" },
              { image:pro2, title: "Crafting", desc: "Ethical manufacturing process" },
              { image:pro3, title: "Quality Check", desc: "Rigorous testing standards" }
            ].map((step, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Mission Statement */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To create thoughtfully designed clothing that empowers individuals to express 
            their unique style while maintaining our commitment to sustainability and 
            ethical manufacturing. We envision a world where fashion positively impacts 
            both people and planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;