import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Tax Resolution Blog — Maryland, DC & Virginia",
  description:
    "Tax resolution guides for Maryland, DC, and Virginia residents. IRS notices explained, OIC eligibility, wage garnishment, unfiled returns, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#C9A84C] text-sm font-semibold tracking-wide mb-3 uppercase">Blog</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tax guides for DMV residents</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Plain-language explanations of IRS processes, state tax rules, and your resolution options in Maryland, DC, and Virginia.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">Articles coming soon.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#1B2A4A]/10 text-[#1B2A4A]">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readingTime}</span>
                  <span className="text-xs text-gray-300">·</span>
                  <time className="text-xs text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long", day: "numeric", year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-xl font-bold text-[#1B2A4A] mb-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#C9A84C] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-[#C9A84C] hover:underline">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
