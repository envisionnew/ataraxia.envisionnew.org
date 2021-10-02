export default function Podcast() {
  return (
    <section id="podcast" className="py-6 md:py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Listen to the{" "}
          <a
            href="https://open.spotify.com/show/4U8uJhkkXDlCQkraemyfcs?si=sz2BiEqATg6OrEgaS5urfw&dl_branch=1"
            rel="noopener noreferrer"
            target="_blank"
            className="underline md:no-underline outer-glow text-blue-headers dark:text-blue-headers-dark"
          >
            Speaking from Empathy
          </a>{" "}
          Podcast
        </h1>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://open.spotify.com/embed/episode/6ssINblRlWYVzsNlg4bny1"
            width="100%"
            height="232"
            title="Speaking from Empathy Spotify Podcast"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
