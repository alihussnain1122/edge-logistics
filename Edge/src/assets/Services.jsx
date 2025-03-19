import React from "react";

const services = [
  { 
    title: "Ocean Shipping", 
    description: "Reliable and cost-effective sea freight solutions to transport goods globally with full container and less-than-container options.", 
    icon: "🚢" 
  },
  { 
    title: "Air Shipping", 
    description: "Fast and secure air cargo services to deliver urgent shipments worldwide with real-time tracking and premium handling.", 
    icon: "✈️" 
  },
  { 
    title: "Truck Shipping", 
    description: "Seamless road transportation with a vast fleet of trucks ensuring efficient delivery across cities and borders.", 
    icon: "🚛" 
  },
  { 
    title: "Custom Clearance", 
    description: "Hassle-free customs processing with expert compliance to ensure smooth and quick clearance for your shipments.", 
    icon: "🛃" 
  },
  { 
    title: "Freight Forwarding", 
    description: "End-to-end logistics coordination, managing all shipping modes with competitive rates and seamless handling.", 
    icon: "📦" 
  },
  { 
    title: "Insurance", 
    description: "Protect your valuable shipments against risks with our comprehensive cargo insurance coverage for peace of mind.", 
    icon: "🛡️" 
  }
];


const Services = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-blue-900 font-semibold uppercase text-sm">Our Services</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#111c4f] mt-2">
          Efficient and Reliable Shipping with Edge Logistics
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg transition duration-300 bg-[#111c4f] text-white hover:bg-white hover:text-blue-900 shadow-lg cursor-pointer"
          >
            <div className="bg-blue-600 p-3 rounded-full inline-block">
              <span className="text-white text-xl">{service.icon}</span>
            </div>
            <h3 className="text-lg font-bold mt-4">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
