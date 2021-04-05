import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50">
      <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            class="flex title-font font-medium text-gray-900 mb-4 md:mb-0"
          >
            {/* <img src="../favicon/favicon-32x32.png" /> */}
            <h1 class="text-2xl">ATARAXIA</h1>
          </a>
          <button
            className="content-end px-3 py-1 pb-4 ml-auto leading-none text-black outline-none cursor-pointer md:hidden focus:outline-none"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <a
              class="mr-11 pr-2 cursor-pointer text-gray-900 hover:text-white font-semibold tr04"
              href="#about"
            >
              About
            </a>
            <a
              class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-900 hover:text-white font-semibold tr04"
              href="#kits"
            >
              Kits
            </a>
            <a
              class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-900 hover:text-white font-semibold tr04"
              href="#COVID"
            >
              COVID-19
            </a>
            <a
              class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-900 hover:text-white font-semibold tr04"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent bg-gray-900 rounded-lg text-md md:mt-0 md:ml-4"
              href="https://donorbox.org/ataraxia-project-envision-us/"
            >
              <span className="justify-center">Donate</span>
            </a>
          </div>
          <a
            href="mailto:saurish@envisionnew.org"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
