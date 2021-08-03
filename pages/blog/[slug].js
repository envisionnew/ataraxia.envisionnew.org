import { Fragment } from "react";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import { databaseId } from "./index.js";
import { v4 as uuid } from "uuid";
import BlogLayout from "../../components/BlogLayout";

const imageSources = [
  "images.unsplash.com",
  "s3-us-west-2.amazonaws.com",
  "imgur.com",
];

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }

  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    const id = uuid();
    return (
      <span
        key={id}
        className={[
          bold ? "font-bold" : "",
          code
            ? "text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900"
            : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link
          ? [
              imageSources.some((u) => text.link.url.includes(u)) ? (
                <div className="mx-4">
                  <img
                    src={text.link.url}
                    alt={text.content}
                    className="w-full rounded-md"
                  />
                </div>
              ) : (
                <a
                  className="underline text-link-blue dark:text-link-purple"
                  href={text.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.content}
                </a>
              ),
            ]
          : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="my-4 text-3xl font-bold leading-relaxed text-black md:text-4xl dark:text-white">
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="my-4 text-xl font-bold leading-relaxed text-black dark:text-white md:text-2xl">
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="my-4 text-lg font-bold leading-relaxed text-black dark:text-white md:text-xl">
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
      <li className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
        <Text text={value.text} />
      </li>;
    case "numbered_list_item":
      return (
        <li className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <span className="ml-2 leading-relaxed text-gray-700 dark:text-gray-300">
              <Text text={value.text} />
            </span>
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary className="leading-relaxed text-gray-700 cursor-pointer dark:text-gray-300">
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <span className="leading-relaxed text-gray-700 dark:text-gray-300">
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            </span>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    default:
      return (
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          ❌ Unsupported block (
          {type === "unsupported" ? "unsupported by Notion API" : type})
        </p>
      );
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  const imageLink =
    "https://og-image.vercel.app/" +
    page.properties.Name.title[0].plain_text +
    "?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Fwww.ataraxiahealth.org%2Ffavicon%2Flogo.png";

  return (
    <BlogLayout
      title={page.properties.Name.title[0].plain_text}
      description={page.properties.Description.rich_text[0].plain_text}
      date={new Date(page.properties.Date.date.start)}
      image={imageLink}
      type="article"
    >
      <article className="relative text-gray-600">
        <div className="container max-w-3xl px-5 pt-12 mx-auto">
          <div className="xl:divide-y xl:divide-gray-200">
            <header className="pt-6 xl:pb-6">
              <div className="space-y-1 text-center">
                <div>
                  <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:leading-14">
                    {page.properties.Name.title[0].plain_text}
                  </h1>
                </div>
                <dl className="pt-3 space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-light leading-6 text-gray-500 dark:text-gray-400">
                      <time>
                        {new Date(
                          page.properties.Date.date.start
                        ).toLocaleString("en-US", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </time>
                    </dd>
                  </div>
                </dl>
              </div>
            </header>
            <div
              className="pb-8 divide-y divide-gray-200 dark:divide-gray-750 xl:divide-y-0"
              style={{ gridTemplateRows: "auto 1fr" }}
            >
              <dl className="pt-6 pb-10">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center space-x-8">
                    <li className="flex items-center space-x-2">
                      <img
                        src={
                          page.properties.AuthorImage.rich_text[0].plain_text
                        }
                        alt={`${page.properties.Author.rich_text[0].plain_text} avatar`}
                        className="w-10 h-10 rounded-full"
                      />
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-300">
                          {page.properties.Author.rich_text[0].plain_text}
                        </dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={
                              page.properties.AuthorURL.rich_text[0].plain_text
                            }
                            className="text-blue-500 hover:text-blue-600"
                          >
                            @
                            {
                              page.properties.AuthorURL.rich_text[0].plain_text.split(
                                "/"
                              )[3]
                            }
                          </a>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div className="divide-y divide-gray-200">
                <div className="pt-10 pb-8 prose max-w-none">
                  {blocks.map((block) => (
                    <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({
      params: {
        slug: page.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const database = await getDatabase(databaseId);
  const filter = database.filter(
    (blog) => blog.properties.Slug.rich_text[0].plain_text === slug
  );
  const page = await getPage(filter[0].id);
  const blocks = await getBlocks(filter[0].id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
