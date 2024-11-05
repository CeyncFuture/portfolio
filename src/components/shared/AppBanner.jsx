import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import { motion } from "framer-motion";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <div>
      {/* Banner Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 px-6"
        style={{ padding: "40px 0" }}
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
            Syncing the Future with Innovative Software
          </h1>
          <p
            className=" text-ternary-dark  dark:text-primary-light"
            style={{ fontSize: "1.2rem", marginTop: "10px" }}
          >
            At CeyncFuture, we accelerate your digital transformation through
            cutting-edge technology and agile development, empowering businesses
            to adapt and thrive in an ever-evolving landscape.
          </p>
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
    </div>
  );
};

export default AppBanner;
