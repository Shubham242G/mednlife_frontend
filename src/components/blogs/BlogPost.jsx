import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
  try {
    const API_URL = process.env.REACT_APP_API_URL;
    const res = await axios.get(
      `${API_URL}/api/blogs/${id}`
    );
    setBlog(res.data);
  } catch (err) {
    console.error("❌ Failed to fetch blog:", err);
  } finally {
    setLoading(false);
  }
};


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/80 to-[#17ADA1]/10">
        <span className="text-[#17ADA1] text-lg animate-pulse">
          Loading blog...
        </span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#17ADA1] text-xl">Blog not found</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black/90 to-[#17ADA1]/10 py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Back link */}
        <Link
          to="/blog"
          className="inline-block mb-8 text-[#17ADA1] hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Featured image */}
        {blog.images?.[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-[420px] rounded-3xl overflow-hidden mb-12 shadow-2xl"
          >
            <img
              src={blog.images[0]}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Blog container */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-[#17ADA1]/20"
        >
          {/* Date */}
          <p className="text-sm text-[#11897F] mb-4">
            {new Date(blog.date).toLocaleDateString("en-IN")}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-[#17ADA1] mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Summary */}
          <p className="text-lg text-[#11897F] mb-10 leading-relaxed">
            {blog.summary}
          </p>

          {/* Content (TipTap HTML) */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#17ADA1] prose-p:text-[#11897F]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* SEO info (optional display, subtle) */}
          {(blog.seoFocusKeyword || blog.seoMetaDescription) && (
            <div className="mt-16 pt-8 border-t border-[#17ADA1]/20">
              {blog.seoFocusKeyword && (
                <p className="text-sm text-[#11897F]">
                  <span className="font-medium text-[#17ADA1]">
                    Focus Keyword:
                  </span>{" "}
                  {blog.seoFocusKeyword}
                </p>
              )}

              {blog.seoMetaDescription && (
                <p className="text-sm text-[#11897F] mt-2">
                  <span className="font-medium text-[#17ADA1]">
                    Meta Description:
                  </span>{" "}
                  {blog.seoMetaDescription}
                </p>
              )}
            </div>
          )}
        </motion.article>
      </div>
    </section>
  );
};

export default BlogPost;
