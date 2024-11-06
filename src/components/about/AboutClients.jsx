import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';
import background from '../../images/profileBackground.png';
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ThilinaDP from "../../images/profileImages/thilina.png"

const AboutClients = () => {
 const { clientsData, clientsHeading } = useContext(AboutMeContext);

 const teamMembers = [
  {
    name: "Pacha sajith",
    role: "Copywriter",
    image: ThilinaDP,
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
   name: "KO raneeeel",
   role: "Principal Designer",
   image: "https://picsum.photos/id/2/200",
   twitter: "#",
   linkedin: "#",
  },
   ];

   return (
  <section className="text-center py-12 mt-10">
    {/* Title and Description */}
    <h2 className=" text-primary-dark dark:text-primary-light text-2xl font-semibold mb-2">Meet our leadership</h2>
    <p className="text-gray-600 dark:text-primary-light max-w-xl mx-auto mb-12">
   We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
    </p>

    {/* Team Members */}
    <div className="flex flex-wrap justify-center gap-4">
   {teamMembers.map((member, index) => (
    <motion.div
     initial={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     whileHover={{
      scale: 1.2,
      transition: { duration: 0.25 },
     }}
    >
     <div key={index} className="flex flex-row items-center text-center mx-5 ">
     <div className="image-container" style={{position: 'relative', width: '200px', height: '200px'}}>
      <img
       src={background}
       alt={member.name}
       className="background-image w-45 rounded-full object-cover mb-4"
       style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 1, opacity: 0.6}}
      />
      <img
       src={member.image}
       alt={member.name}
       className="foreground-image w-32 h-32 rounded-full object-cover mb-4"
       style={{position: 'absolute', top: '45px', left: '50px', zIndex: 2, width: '50%', height: 'auto'}}
      />
     </div>
     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h3 className="text-lg text-primary-dark dark:text-primary-light font-semibold">{member.name}</h3>
      <p className="text-gray-500 dark:text-primary-light  ">{member.role}</p>
      <div className="flex gap-4 mt-4 mb-5">
       <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-primary-light   hover:text-blue-500">
        <FaTwitter size={20} />
       </a>
       <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-primary-light  hover:text-blue-700">
        <FaLinkedin size={20} />
       </a>
      </div>
     </div>

     </div>
    </motion.div>
   ))}
    </div>
  </section>
   );
};

export default AboutClients;