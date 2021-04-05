export default function Footer() {
  return (
    <footer className="pb-4 text-gray-800">
      <div className="max-w-5xl px-4 mx-auto divide-y divide-gray-900 xl:max-w-5xl sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 bg-top border-t border-black lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="https://donorbox.org/ataraxia-project-envision-us/"
                className="font-semibold text-gray-800 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="https://envisionnew.org"
                className="font-semibold text-gray-800 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Project enVision U.S.
              </a>
            </li>
            <li>
              <a
                href="mailto:saurish@envisionnew.org"
                className="font-semibold text-gray-800 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="font-semibold tracking-tight text-gray-800 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
            >
              © 2021 Ataraxia.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
