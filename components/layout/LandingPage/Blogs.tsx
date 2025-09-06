'use client';

import { useLocale } from 'next-intl';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { blogListEN, blogListID } from '../../../lib/constant';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function BlogsSection({ t }: { t: (key: string) => string }) {
  const locale = useLocale();

  const blogs = locale === 'ID' ? blogListID : blogListEN;

  return (
    <section id="blogs" className="relative min-h-screen flex items-center justify-center px-5 md:px-15">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/assets/images/blob-project-2.svg"
          alt="Green Blue Blob"
          width={700}
          height={500}
          className="absolute md:-right-0 md:-top-70 -right-10 -top-50 w-[100vw] max-w-[700px] z-[-1] pointer-events-none select-none blur-2xl opacity-50"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="title-section text-4xl md:text-6xl font-bold text-purple-900 md:mb-12 mb-7"
        >
          Blogs
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 h-60">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.url}
              className="blog-card group p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/40 shadow-md hover:shadow-neutral-100 flex flex-col justify-between hover:shadow-lg transition transform duration-300 hover:scale-105"
            >
              <div>
                <h3 className="text-lg font-semibold text-purple-900 mb-3">{blog.title}</h3>
                <p className="text-sm text-gray-700">
                  {blog.platform} · {blog.publishDate}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <BsArrowUpRight className="w-6 h-6 text-purple-900" />
              </div>
            </a>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }} viewport={{ once: false, amount: 0.3 }} className="mt-8 flex flex-row justify-end items-end">
          <a href="#" className="see-more flex items-center gap-2 text-sm font-medium text-purple-900 hover:underline">
            {t('seeMore')} <BsArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
