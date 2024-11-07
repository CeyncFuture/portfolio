import designIcon from "../../images/icons/design.svg";

const Timeline = () => {
  return (
    <ol class="items-center sm:flex">
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-30 h-30 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg
              class="w-20 h-20 text-blue-500 dark:text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="-3 -3 30 30"
            >
              <path
                fill-rule="evenodd"
                d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-md font-semibold text-secondary-dark dark:text-secondary-light">
            Understanding Your Requirements
          </h3>
          {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 2, 2021
          </time> */}
          <p class="text-base font-normal text-gray-500 dark:text-gray-200">
            First, we discuss your needs in detail. This helps us fully
            understand what you want, so we can ensure the final product meets
            your expectations.
          </p>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-30 h-30 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <img
              src={designIcon}
              className="w-20 h-20 p-4"
              alt="design"
            />
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-md font-semibold text-gray-900 dark:text-white">
            Sample Design & Approval
          </h3>
          {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 23, 2021
          </time> */}
          <p class="text-base font-normal text-gray-500 dark:text-gray-200">
            Next, we create a sample or initial design based on your
            requirements. You review and approve it, so we know we’re on the
            right track before moving forward.
          </p>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-30 h-30 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg
              class="w-20 h-20 text-green-600 dark:text-green-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 15.3 5.7 11l-1.4 1.4L10 18l10-10-1.4-1.4L10 15.3Z" />
            </svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-md font-semibold text-gray-900 dark:text-white">
            Successful Development & Delivery
          </h3>
          {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on January 5, 2022
          </time> */}
          <p class="text-base font-normal text-gray-500 dark:text-gray-200">
            Finally, we complete the development of the project and deliver the
            finished product to you, ensuring it meets all agreed-upon standards
            and requirements.
          </p>
        </div>
      </li>
    </ol>
  );
};

export default Timeline;
