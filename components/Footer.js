import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="text-black dark:text-gray-300 body-font">
      <div className="flex flex-col items-center w-3/4 px-10 pb-8 mx-auto border-t border-pink-600 sm:container dark:border-pink-300 sm:flex-row">
        <Link href="/">
          <a className="flex items-center justify-center mt-3 text-xl font-medium title-font md:ml-3 md:justify-start">
            ATARAXIA
          </a>
        </Link>
        <div className="invisible h-5 mt-3 ml-4 border-l border-black md:visible dark:border-gray-300" />
        <a
          className="flex items-center justify-center mt-3 font-medium title-font md:justify-start"
          href={
            router.pathname === "/"
              ? `https://github.com/envisionnew/ataraxia.envisionnew.org/edit/main/pages/index.js`
              : `https://github.com/envisionnew/ataraxia.envisionnew.org/edit/main/pages${router.pathname}.js`
          }
        >
          <span className="text-sm md:ml-5">Edit on GitHub</span>
        </a>
        <div className="invisible h-5 mt-3 ml-4 border-l border-black md:visible dark:border-gray-300" />
        <a
          className="flex items-center justify-center mt-3 font-medium title-font md:justify-start"
          href="https://donorbox.org/ataraxia-project-envision-us/"
        >
          <span className="text-sm md:ml-5">Donate</span>
        </a>
        <div className="invisible h-5 mt-3 ml-4 border-l border-black md:visible dark:border-gray-300" />
        <a
          className="flex items-center justify-center mt-3 font-medium title-font md:justify-start"
          href="https://vercel.com/?utm_source=envisionnew&utm_campaign=oss"
        >
          <img
            className="h-8 mb-2 ml-0 md:mb-0 lg:mb-0 md:ml-5"
            src="/images/powered-by-vercel.svg"
          ></img>
        </a>
        {/* <div className="invisible h-5 mt-3 ml-4 border-l border-black md:visible dark:border-gray-300" />
        <a
          className="flex items-center justify-center mt-3 font-medium title-font md:justify-start"
          href="https://envisionnew.org/?utm_source=ataraxia"
        >
          <img
            className="h-8 mb-2 ml-0 md:mb-0 lg:mb-0 md:ml-5"
            src="/images/incubated-by-envision.svg"
          ></img>
        </a> */}
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-3 sm:justify-start">
          <a
            aria-label="mail"
            href="maito:saurish@envisionnew.org?subject=From Ataraxia!"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            aria-label="instagram"
            className="ml-3"
            href="https://instagram.com/ataraxiaorg"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            aria-label="github"
            className="ml-3"
            href="https://github.com/envisionnew/ataraxia.envisionnew.org/"
          >
            <svg
              width="30"
              height="20"
              viewBox="0 0 25 24"
              fill="none"
              title="GitHub logo"
              className="w-5 h-5"
            >
              <path
                data-v-54e46119=""
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
