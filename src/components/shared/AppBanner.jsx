import { useState } from "react";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { notifyError, notifySuccess, sendEmail } from "../../functions/common";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import { motion } from "framer-motion";
import HireMeModal from "../HireMeModal";
import Button from "../reusable/Button";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  const [showModal, setShowModal] = useState(false);

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  function requestSend(e) {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    try {
      sendEmail(formData);
      e.target.reset();
      notifySuccess("Email sent successfully!");
    } catch (error) {
      notifyError("Failed to send email. Please try again!");
      throw error;
    }

    showHireMeModal();
  }

  return (
    <div>
      {/* Banner Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 px-6"
        style={{ padding: "2px 0" }}
      >
        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-full sm:w-1/2 text-center sm:text-left"
        >
          <h1
            className=" text-quaternary-dark  dark:text-primary-light text-2xl md:text-3xl"
            style={{ fontWeight: "bold" }}
          >
            Strategic Software Solutions, Engineered to Fuel Your Growth and
            Success
          </h1>
          <p
            className=" text-ternary-dark  dark:text-primary-light"
            style={{ fontSize: "1.2rem", marginTop: "10px" }}
          >
            At CeyncFuture, we help your business grow with the latest
            technology and customized solutions, focused on your success in a
            fast-changing digital world.
          </p>
          {/* <motion.div
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
          > */}
          <div className="md:flex mt-10">
            {/* <span
                onClick={showHireMeModal}
                className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                aria-label="Hire Me Button"
              > */}
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              onClick={showHireMeModal}
              className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
              aria-label="Hire Me Button"
            >
              <Button title="Get started" />
            </motion.div>
            {/* </span> */}
          </div>
          {/* </motion.div> */}
        </motion.div>

        {/* Right image content */}
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-full sm:w-1/2 mt-8 sm:mt-0 flex justify-center"
        >
          <img
            src={activeTheme === "dark" ? developerLight : developerDark}
            alt="Developer"
            style={{ maxWidth: "80%", borderRadius: "10px" }}
          />
        </motion.div>
      </motion.section>
      {/* Hire me modal */}
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={requestSend} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </div>
  );
};

export default AppBanner;
