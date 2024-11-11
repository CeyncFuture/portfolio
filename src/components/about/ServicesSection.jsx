import React from "react";

const servicesData = [
  {
    title: "Consulting",
    description:
      "Expert guidance to help you grow your business and navigate challenges.",
    icon: "💼",
  },
  {
    title: "Development",
    description:
      "Custom software solutions to meet your unique business needs.",
    icon: "💻",
  },
  {
    title: "Design",
    description: "Creative and user-centered design to elevate your brand.",
    icon: "🎨",
  },
  {
    title: "Marketing",
    description:
      "Strategic marketing services to increase visibility and reach.",
    icon: "📈",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center h-full flex flex-col justify-between">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const ServicesSection = () => (
  <section className="mt-10">
    <div className="mx-auto text-center">
      <p
        className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
        style={{ marginBottom: "7vh" }}
      >
        Our Services
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        We offer a variety of services to help you achieve success.
      </p>
      {/* Flex container for the cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Loop through each service and render a card */}
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex-none basis-1/2 sm:basis-1/3 lg:basis-1/4 max-w-xs min-w-[250px] h-[350px]" // Ensure consistent size for all cards
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
