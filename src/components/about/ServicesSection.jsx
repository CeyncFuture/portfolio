import React from "react";
import web from "../../images/icons/services/web.png";
import mobile from "../../images/icons/services/mobile.png";
import ui from "../../images/icons/services/ui_ux.png";
import cloud from "../../images/icons/services/cloud.png";
import eCommerce from "../../images/icons/services/e-commerce.png";
import support from "../../images/icons/services/support.png";

const servicesData = [

  {
    title: "Web App Development",
    description:
      "Engaging, scalable web apps that elevate user experience.",
    icon: web,
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance mobile applications for iOS and Android.",
    icon: mobile,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and beautiful designs that put users first.",
    icon: ui,
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure, scalable cloud setups to power your business growth.",
    icon: cloud,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store development for seamless shopping experiences.",
    icon: eCommerce,
  },
  {
    title: "Technical Support & Maintenance",
    description:
      "Reliable support to keep your software running smoothly.",
    icon: support,
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-ternary-dark rounded-lg shadow-lg p-6 text-center h-full flex flex-col justify-between">
    <div className="text-5xl mb-4">
      {/* <img src={icon} sizes=""/> */}
      <img src={icon} alt="icon" width="100" height="100" className="mx-auto"/>
    </div>
    <h3 className="text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const ServicesSection = () => (
  <section>
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
