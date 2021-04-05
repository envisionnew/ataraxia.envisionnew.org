import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-white">
      <NextSeo
        title="Ataraxia"
        description="Ataraxia is a non-profit organization dedicated to improving the mental health of our homeless population."
        canonical="https://ataraxia.envisionnew.org/"
        openGraph={{
          url: "https://ataraxia.envisionnew.org/",
        }}
      />
      <Head>
        <title>Ataraxia</title>
        <link rel="icon" href="../favicon/favicon.ico" />
      </Head>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="max-w-5xl pt-52 pb-24 mx-auto">
          <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold title-font text-black mb-6">
            Welcome to Ataraxia.
          </h1>
          <h2 class="text-2xl font-4 ld-04 title-font pb-11 text-gray-700 text-center">
            Ataraxia is a non-profit organization incubated by{" "}
            <a
              href="https://envisionnew.org"
              className="text-gray-500 text-dotted hover:text-blue-600"
            >
              Project enVision U.S.
            </a>
            <br />
            with a mission to improve the mental health of our homeless
            population.
          </h2>
          <div className="ml-6 text-center">
            <a
              className="inline-flex items-center py-3 mb-8 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent rounded px-7 bg-gradient-to-r from-blue-500 to-blue-800 text-md md:mt-0 focus:shadow-outline"
              href="#about"
            >
              <div className="flex text-lg">
                <span className="justify-center">Learn More</span>
              </div>
            </a>
            <a
              className="inline-flex items-center py-3 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent bg-black rounded px-7 lg:ml-11 md:ml-11 text-md md:mt-0 hover:text-white hover:bg-black focus:shadow-outline"
              href="#kits"
            >
              <div className="flex text-lg">
                <span className="justify-center">View Kits</span>
              </div>
            </a>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <img
            className="object-cover object-center w-3/4 border rounded shadow-md g327"
            alt="Placeholder Image"
            src="./images/placeholder.jpg"
          ></img>
        </div>
        <section id="about">
          <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-900 lg:text-7xl md:text-6xl">
            About
          </h2>
          <br />
          <p className="mx-auto text-xl font-normal leading-relaxed text-center text-gray-300 fs521 lg:w-1/3">
            Ataraxia is a non-profit organization incubated by Project enVision
            U.S. that is dedicated to end mental health illnesses in the
            homeless population.
          </p>
          <div className="max-w-4xl pt-12 mx-auto fsac4">
            <div class="ktq4">
              <center>
                <img className="w-10 text-center" src="../favicon/logo.png" />
              </center>
              <h3 class="pt-3 font-semibold text-center text-2xl text-white">
                Definition
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                Ataraxia is defined as a state of serene calmness. With
                countless challenges and difficulties, it is essential to focus
                on our mental health. We wanted a simple name that succinctly
                delivered our goal: to help the homless population achieve
                ataraxia.
              </p>
            </div>
            <div class="ktq4">
              <center>
                <img className="w-10 text-center" src="../favicon/logo.png" />
              </center>
              <h3 class="pt-3 font-semibold text-center text-2xl text-white">
                Mission Statement
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                Majority of homeless people deal with some level of mental
                illness, from depression to anxiety. Ataraxia is dedicated to
                helping these underprivileged populations with their mental
                health. We teach fruitful stress management techniques, so
                people can be in a better mental state to be more productive and
                deal with challenges effectively.
              </p>
            </div>
          </div>
        </section>
        <section id="kits">
          <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-900 lg:text-7xl md:text-6xl">
            Kits
          </h2>
          <br />
          <p className="mx-auto text-xl font-normal leading-relaxed text-center text-gray-300 fs521 lg:w-1/3">
            Our mental health kits come with the following items.
          </p>
          <div className="max-w-6xl pt-32 pb-32 mx-auto fsac4">
            <div class="ktq4">
              <img src="../images/kit2.jpg"></img>
              <h3 class="pt-3 text-center font-semibold text-2xl text-white my-2">
                Kit Contents
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                [Information]
              </p>
            </div>
            <div class="ktq4">
              <img src="../images/kit1.jpg"></img>
              <h3 class="pt-3 text-center font-semibold text-2xl text-white my-2">
                Completed Kit
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                [Information]
              </p>
            </div>
          </div>
        </section>
        <section id="COVID">
          <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-900 lg:text-7xl md:text-6xl">
            COVID-19
          </h2>
          <br />
          <p className="mx-auto text-xl font-normal leading-relaxed text-center text-gray-300 fs521 lg:w-1/3">
            COVID-19 has rapidly strengthened inequalities and those most
            forgotten in these difficult times are the homeless population.
            We've been creating <span className="underline">hygiene kits</span>{" "}
            to serve the homeless population in this crisis. Learn more
            information about our current drive below.
          </p>
          <div className="max-w-4xl pt-12 mx-auto fsac3">
            <div class="ktq4">
              <center>
                <img className="w-10 text-center" src="../favicon/logo.png" />
              </center>
              <h3 class="pt-3 font-semibold text-center text-2xl text-white">
                Hygiene Drive
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                [Information]
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="mb-20">
          <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-900 lg:text-7xl md:text-6xl">
            Courses
          </h2>
          <br />
          <p className="mx-auto text-xl font-normal leading-relaxed text-center text-gray-300 fs521 lg:w-1/3">
            Ataraxia has been developing online courses aimed at providing
            knowledge about mental health and ways to be supportive.
          </p>
          <div className="max-w-4xl pt-12 mx-auto fsac3">
            <div class="ktq4">
              <center>
                <img className="w-10 text-center" src="../favicon/logo.png" />
              </center>
              <h3 class="pt-3 font-semibold text-center text-2xl text-white">
                Course Information
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                [Information]
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
