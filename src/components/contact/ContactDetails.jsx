import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Maho, Kurunegala, Sri Lanka",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "ceyncfuture@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "+94 75 497 4017 / +94 76 702 5709",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="w-fit m-auto px-6 text-center">
        <div className="text-center lg:hidden">
          <p className="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-5">
            Get In Touch
          </p>
          <p className="font-general-medium text-lg dark:text-primary-light">
            Need help? <br /> just leave us a message, <br /> and we'll get back
            to you.
          </p>
        </div>
        {/* <div className="flex"> */}
        <div className="hidden lg:block text-center mt-24 mb-24">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Get In Touch
          </p>
          <p className="font-general-regular text-lg dark:text-primary-light mt-10">
            Need help? <br /> just leave us a message, <br /> and we'll get back
            to you.
          </p>
        </div>
        {/* <h2 className="font-general-medium text-xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2> */}

        <ul className="font-general-regular mt-10">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light min-w-fit">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ContactDetails;
