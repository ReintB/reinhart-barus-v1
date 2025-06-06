import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { ScrollAnimation } from "../components/scroll-animation";

export const metadata = {
  title: "Blog",
  description: "Reinhart Barus Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <ScrollAnimation type="scale">
        <h1 className="mb-8 text-2xl font-medium">Reinhart's Blog 📝</h1>
      </ScrollAnimation>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col mb-5 space-y-1 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-col items-start justify-between w-full space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <ScrollAnimation type="slideRight">
                  <h2 className="text-black dark:text-white">
                    {post.metadata.title}
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation type="slideLeft">
                  <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <p className="tabular-nums">
                      {formatDate(post.metadata.publishedAt, false)}
                    </p>
                    <span>•</span>
                    <p>{post.readingTime} min read</p>
                  </div>
                </ScrollAnimation>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
