'use client';

import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { blogs } from '../../../lib/constant';

export default function BlogsSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 -top-40">
      <div className="max-w-6xl flex flex-col justify-center items-center">
        <h1 className="title-section text-4xl md:text-6xl font-bold text-purple-900 mb-12">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-60">
          {blogs.map((blog, index) => (
            <a key={index} href={blog.link} className="blog-card group p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/40 shadow-md flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-lg font-semibold text-purple-900 mb-3">{blog.title}</h3>
                <p className="text-sm text-gray-700">
                  {blog.source} · {blog.date}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <BsArrowUpRight className="w-6 h-6 text-purple-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-row justify-end items-end">
          <a href="#" className="see-more flex items-center gap-2 text-sm font-medium text-purple-900 hover:underline">
            {t('seeMore')} <BsArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
