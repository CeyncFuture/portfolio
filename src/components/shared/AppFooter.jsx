import logoLight from "../../images/logo-light.png";
import logoDark from "../../images/logo-dark.png";
import Modal from "../reusable/Modal";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import TermsOfUse from "../../pages/TermsOfUse";
import * as Scroll from "react-scroll";

const ScrollLink = Scroll.Link;
const AppFooter = ({activeTheme}) => {

  return (
    <footer className="footer-bg dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              {activeTheme === "dark" ? (
                <img
                  src={logoDark}
                  className="h-36 me-3 dark:non"
                  alt="Dark Logo"
                />
              ) : (
                <img src={logoLight} className="h-36 me-3" alt="Dark Logo" />
              )}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#"
                     className="hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="hover:underline"
                    aria-label="Projects"
                  >
                    Projects
                  </ScrollLink>
                </li>
                 <li className="mb-4">
                   <ScrollLink
                     to="about"
                     smooth={true}
                     duration={500}
                     offset={-50}
                     className="hover:underline"
                     aria-label="About Us"
                   >
                     About Us
                   </ScrollLink>
                 </li>
                <li className="mb-4">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="hover:underline"
                    aria-label="Contact"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
            {/*<div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>*/}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Modal
                    button="Privacy Policy"
                    header="Privacy Policy"
                    body={<PrivacyPolicy />}
                    id="privacy"
                  />
                </li>
                <li>
                  <Modal
                    button="Terms of Use"
                    header="Terms of Use"
                    body={<TermsOfUse />}
                    id="terms"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              CeyncFuture™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
