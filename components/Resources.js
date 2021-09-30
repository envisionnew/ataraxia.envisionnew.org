import Image from "next/image";

const resources = [
  {
    name: "Neurodiversity Wiki",
    link: "http://www.neurodiversity.wiki",
    description: [
      <p>
        <span className="font-semibold">Tool</span>: This is a wiki that
        provides resources to understand different neurotypical identities. It
        is written by people who experience these conditions and provides a
        first-perspective look at what not to do.
      </p>,
    ],
    image: "neurodiversitywiki",
  },
  {
    name: "Neurodiversity Hub",
    link: "https://www.neurodiversityhub.org",
    description: [
      <p>
        <span className="font-semibold">Made for Students</span>: "The intent is
        to provide programs to support neurodivergent students to become
        work-ready, and build connections with organisations that value their
        talents."
      </p>,
    ],
    image: "neurodiversityhub",
  },
  {
    name: "Neurodiversity Network",
    link: "https://www.neurodiversitynetwork.net",
    description: [
      <p>
        <span className="font-semibold">Direct Resources</span>: "The purpose of
        Neurodiversity Network is to provide resources for neurodivergent job
        seekers and neurodivergent students, employers & universities, & the
        support of the neurodiverse community. Our mission is to consolidate
        various neurodiversity resources into one place."
      </p>,
    ],
    image: "neurodiversitynetwork",
  },
  {
    name: "Pivotdiversity Neurodiversity",
    link: "https://www.pivotdiversity.com/neurodiversity",
    description: [
      <p>
        <span className="font-semibold">Informational</span>: The website
        contains some definitions of common terms associated with
        neurodiversity. It answers some crucial questions through a beautiful
        graphic. It also highlights some members of the neurodiverse community.
        This is a powerful website!
      </p>,
    ],
    image: "pivotneurodiversity",
  },
];

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
          {resources.map((resource) => (
            <div className="mb-10 space-y-6">
              <div className="text-center sm:text-left">
                <a
                  href={`${resource.link}/?utm_source=ataraxiahealth.org`}
                  rel="noreferrer"
                  className="text-xl font-bold text-center underline md:no-underline outer-glow text-blue-headers dark:text-blue-headers-dark md:text-2xl"
                >
                  {resource.name}
                </a>
              </div>
              <div className="h-auto">
                <a
                  href={`${resource.link}/?utm_source=ataraxiahealth.org`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="rounded-lg">
                    <Image
                      src={`/images/${resource.image}.png`}
                      className="transition duration-700 rounded-md shadow-2xl md:rounded-xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                      width={1650}
                      height={1200}
                      alt={`${resource.name} landing page`}
                    />
                    {/* Dimensions on https://frameshift.cc: 550 x 400 */}
                  </div>
                </a>
              </div>
              <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
                <ul className="mr-0 md:mr-10">
                  {resource.description.map((list) => (
                    <li key={list} className="mb-2">
                      {list}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
