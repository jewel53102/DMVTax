import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6">
            <Link href="/blog" className="text-[#C9A84C] text-sm hover:underline">
              ← All articles
            </Link>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#C9A84C]/20 text-[#C9A84C]">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readingTime}</span>
            <span className="text-xs text-gray-500">·</span>
            <time className="text-xs text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long", day: "numeric", year: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed">{post.description}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="prose prose-gray prose-headings:text-[#1B2A4A] prose-a:text-[#C9A84C] max-w-none">
          <MDXRemote source={post.content} />
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="bg-[#1B2A4A] text-white rounded-xl p-6">
            <p className="text-sm font-semibold mb-1">Need help with a tax problem in MD, DC, or VA?</p>
            <p className="text-sm text-gray-300 mb-4">
              Schedule a free 30-minute consultation with Stephen Cromwell, ESQ, CPA.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C9A84C] hover:bg-[#b8963f] text-[#1B2A4A] text-sm font-bold px-5 py-3 rounded-lg transition-colors"
            >
              Schedule free consultation →
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
