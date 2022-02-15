import { getAllNodes } from "next-mdx/server";
import Link from "next/link";

export default function Projects({ posts }) {
  console.log(posts);
  return (
    <div className="site-container">
      <div className="space-y-6">
        {posts.map((post) => {
          return (
            <article key={post.url}>
              <h2 className="text-xl font-bold">
                <Link href="{post.url}">
                  <a>{post.frontMatter.title}</a>
                </Link>
              </h2>

              <p>{post.frontMatter.excerpt}</p>

              <div className="text-gray-400">
                <span>{post.frontMatter.date}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}
