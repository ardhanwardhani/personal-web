'use client';

import { BsArrowDown } from 'react-icons/bs';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-28 md:mt-0 ">
      <div className="flex flex-col items-center justify-center mt-20 md:-mt-10">
        <div className="flex flex-row items-center justify-center text-center relative z-10 w-11/12 h-140">
          <div className="w-full md:w-6/12 h-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full h-2/6 md:h-3/6 text-left py-5 mb-10 md:mb-0 md:mt-10"
            >
              <p className="text-2xl mb-5">{t('title')}</p>
              <p className="hero-name md:text-8xl font-bold text-6xl">Anugrah</p>
              <p className="hero-name md:text-8xl text-6xl">Wardhani</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false, amount: 0.3 }} className="w-full h-2/6 md:h-1/6 mb-40 mt-0  md:mb-10">
              <p className="text-lg text-left">{t('description')}</p>
            </motion.div>
          </div>
          <div className="hidden md:flex w-6/12 h-full justify-end items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-row w-5/6 h-1/3 bg-[#6EE984] rounded-tl-[70px] rounded-r-[70px] mt-40"
            >
              <Image src="/assets/images/erasebg-transformed.png" alt="Profile" className="h-[400px] -mt-53 ml-5" width={400} height={400} />
            </motion.div>
          </div>
        </div>
        <div className="relative w-full">
          <a href="#about-me" className="absolute left-1/2 -translate-x-1/2 z-50 md:-mt-20 mt-10">
            <BsArrowDown className="text-2xl cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
}
