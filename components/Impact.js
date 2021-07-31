import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import React from "react";

export default function Impact() {
  return (
    <section id="impact" className="py-6 md:py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            impact
          </span>{" "}
          in numbers.
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-center text-gray-600 dark:text-gray-400 md:text-lg">
          We&apos;ve been at work in the community, targetting{" "}
          <b>racial discrimination</b> and attempting to relieve the mental
          health crisis in underserved communities.
        </p>
      </div>
      <div className="container max-w-5xl px-5 py-2 mx-auto mt-2">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="w-1/3 p-4">
            <h2 className="text-4xl font-medium text-black dark:text-white title-font sm:text-5xl">
              <CountUp end={200} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Kits Delivered
            </p>
          </div>
          <div className="w-1/3 p-4">
            <h2 className="text-4xl font-medium text-black dark:text-white title-font sm:text-5xl">
              <CountUp end={1} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Podcast/Speaker Episodes
            </p>
          </div>
          <div className="w-1/3 p-4">
            <h2 className="text-4xl font-medium text-black dark:text-white title-font sm:text-5xl">
              <CountUp end={10} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Course sign-ups [in trial!]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
