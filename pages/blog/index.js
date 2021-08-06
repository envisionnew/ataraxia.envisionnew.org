import Link from "next/link";
import { getDatabase } from "../../lib/notion";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div className="h-screen bg-white dark:bg-black">
      <NextSeo
        title="Blog | Ataraxia"
        description="Find student-written and community-written content about neurodiversity and neuroscience."
        canonical="https://ataraxiahealth.org/blog/"
        openGraph={{
          url: "https://ataraxiahealth.org/blog",
          title: "Blog | Ataraxia",
          description:
            "Find student-written and community-written content about neurodiversity and neuroscience.",
          images: [
            {
              url: "/favicon/send.png",
              alt: "Ataraxia's Logo",
            },
          ],
          site_name: "Ataraxia – a non-profit organization.",
        }}
      />
      <Header />
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 pt-12 pb-12 mx-auto">
          <div className="flex flex-col w-full text-center">
            <h1 className="text-6xl font-semibold text-black dark:text-white title-font">
              Blog
            </h1>
            <br className="hidden lg:block"></br>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-3xl mx-5 mb-10 -mt-5 md:mx-auto lg:mx-auto">
          <ul className="divide-y divide-gray-200 dark:divide-gray-750">
            {posts.map((post) => {
              const dateString = post.properties.Date.date.start.replace(
                /-/g,
                "/"
              );
              const date = new Date(dateString).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              });
              return (
                <li className="py-8">
                  <article className="max-w-xl">
                    <div className="xl:col-span-3">
                      <div>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-sm font-light leading-6 text-gray-500 dark:text-gray-400">
                            <time>{date}</time>
                          </dd>
                        </dl>
                        <h3 className="my-3 text-2xl font-bold leading-8 tracking-tight hover:underline">
                          <Link
                            href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                          >
                            <a className="text-gray-900 dark:text-gray-200">
                              {post.properties.Name.title[0].plain_text}
                            </a>
                          </Link>
                        </h3>
                      </div>
                      <div className="prose text-gray-900 dark:text-gray-400 max-w-none">
                        {post.properties.Description.rich_text[0].plain_text}
                      </div>
                      <div className="pt-4">
                        <Link
                          href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                        >
                          <a className="text-link-blue dark:text-link-purple flex items-center space-x-0.5 group">
                            <span>Read more </span>
                            <span className="transition transform group-hover:translate-x-1">
                              →
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
