import { useContext } from "react";
import { motion } from "framer-motion";
import AboutMeContext from "../../context/AboutMeContext";
import AboutClientSingle from "./AboutClientSingle";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const AboutClients = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);

  const teamMembers = [
    {
      name: "Pacha sajith",
      role: "Copywriter",
      image: "https://picsum.photos/id/1/200/200",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Kaiya nayaka",
      role: "Senior Designer",
      image: "https://picsum.photos/id/2/200/",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Hora mahee",
      role: "Principal Designer",
      image: "https://picsum.photos/id/2/200",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "KO raneeeeeeeel",
      role: "Principal Designer",
      image: "https://picsum.photos/id/2/200",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="text-center py-12 px-6 mt-10">
      {/* Title and Description */}
      <h2 className=" text-primary-dark dark:text-primary-light text-2xl font-semibold mb-2">
        Meet our leadership
      </h2>
      <p className="text-gray-600 dark:text-primary-light max-w-xl mx-auto mb-12">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best results for our clients.
      </p>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            initial={{ opacity: 1 }}
			whileHover={{
				scale: 1.2,
				transition: { duration: 0.5 },
			  }}
          >
            <div
              key={index}
              className="flex flex-col items-center text-center mx-5 "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg text-primary-dark dark:text-primary-light font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-500 dark:text-primary-light  ">
                {member.role}
              </p>
              <div className="flex gap-4 mt-4 mb-5">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-primary-light   hover:text-blue-500"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-primary-light  hover:text-blue-700"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutClients;
