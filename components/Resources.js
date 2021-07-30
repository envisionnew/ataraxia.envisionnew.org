export default function Resources() {
  return (
    <section id="resources" className="py-6 md:py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Find some of the most{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            informative
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            impactful
          </span>{" "}
          resources.
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-center text-gray-600 dark:text-gray-400 md:text-lg">
          We&apos;re introducing a new method for connection and relationality
          within the community by focusing on topics that <b>matter</b> – like
          your mental health.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-10 space-y-6">
            <div className="text-center sm:text-left">
              <a
                href="https://neurodiversity.wiki/?utm_source=ataraxia.envisionnew.org"
                rel="noreferrer"
                className="text-xl font-bold text-center underline text-rose-600 dark:text-rose-300 md:text-2xl"
              >
                Neurodiversity Wiki
              </a>
            </div>
            <div className="h-auto">
              <a
                href="https://neurodiversity.wiki/?utm_source=ataraxia.envisionnew.org"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/neurodiversity.png"
                  alt="Neurodiversity Wiki Landing Page"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Tool</span>: This is a wiki
                  that provides resources to understand different types of
                  disorders. It is written by people who experience these
                  conditions and provides a first-perspective look at what{" "}
                  <i>not</i> to do.
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-10 space-y-6">
            <div className="text-center sm:text-left">
              <a
                href="https://www.neurodiversityhub.org/?utm_source=ataraxia.envisionnew.org"
                className="text-xl font-bold underline text-rose-600 dark:text-rose-300 md:text-2xl"
              >
                Neurodiversity Hub
              </a>
            </div>
            <div className="h-auto">
              <a
                href="https://www.neurodiversityhub.org/?utm_source=ataraxia.envisionnew.org"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/neurodiversityhub.png"
                  alt="Neurodiversity Hub Landing Page"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Made for Students</span>: "The
                  intent is to provide programs to support neurodivergent
                  students to become work-ready, and build connections with
                  organisations that value their talents."
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
