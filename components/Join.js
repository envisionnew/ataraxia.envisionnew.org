export default function Join() {
  return (
    <section id="join" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Join the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            adventure
          </span>
          .
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
          Do you want to help out in our mission? Sign up below to join our
          podcasts and get involved!
        </p>
        <div className="container max-w-5xl py-4 mx-auto">
          <div className="mx-auto md:w-2/3">
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSeRNu7Cx-iEzQ1T27GKu8XKVbGAvFGR1GEl-yneEKNfZoRN0g/formResponse"
              method="post"
            >
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="contactName"
                      className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      placeholder="John Smith"
                      name="entry.606961538"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                    ></input>
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="contactEmail"
                      className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      placeholder="john@smith.com"
                      name="entry.1594246197"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                    ></input>
                  </div>
                </div>
                <div className="w-1/2 p-2 lg:w-1/4">
                  <div className="relative">
                    <label
                      htmlFor="contactNumber"
                      className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                    >
                      Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactNumber"
                      name="entry.309809418"
                      required
                      placeholder="000-000-0000"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                    ></input>
                  </div>
                </div>
                <div className="w-1/2 p-2 lg:w-1/5">
                  <div className="relative">
                    <label
                      htmlFor="contactAge"
                      className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                    >
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="contactAge"
                      name="entry.1589744230"
                      placeholder="16"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                    ></input>
                  </div>
                </div>
                <div className="w-full p-2 lg:w-55">
                  <div className="relative">
                    <label
                      htmlFor="contactDiscord"
                      className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                    >
                      Discord Handle <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactDiscord"
                      placeholder="johnsmith#8080"
                      name="entry.457319759"
                      required
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                    ></input>
                  </div>
                </div>

                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="contactWhy"
                      className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                    >
                      Why do you want to join Ataraxia?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contactWhy"
                      name="entry.1653990664"
                      required
                      placeholder="Tell us why you want to join Ataraxia! Where do you want to be involved?"
                      className="w-full px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white h-28"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="extraMessage"
                      className="font-semibold leading-7 text-gray-800 dark:text-gray-200 text-md"
                    >
                      Anything else we should know about you?
                    </label>
                    <textarea
                      id="extraMessage"
                      name="entry.792655874"
                      placeholder="Tell us anything else we should know about you!"
                      className="w-full h-24 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    aria-label="submit"
                    className="flex px-8 py-2 mx-auto text-lg text-white transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-800 dark:text-gray-200 dark:bg-white"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
