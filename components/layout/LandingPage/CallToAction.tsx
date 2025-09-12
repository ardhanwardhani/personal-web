'use client';

import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram } from 'react-icons/bs';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function CTASection({ t }: { t: (key: string) => string }) {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-0">
      <Image
        src="/assets/images/bottom-blob.svg"
        alt="Green Blue Blob"
        width={700}
        height={500}
        className="absolute md:-top-100 md:-left-70 -top-70 -left-30 w-[100vw] max-w-[700px] z-[-1] pointer-events-none select-none blur-2xl opacity-50"
      />
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="title-section text-5xl md:text-5xl font-bold text-purple-900 mb-10 mt-15"
      >
        {t('title')}
      </motion.h1>
      <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: false, amount: 0.3 }} className="text-xl">
        {t('subtitle1')}
      </motion.p>
      <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: false, amount: 0.3 }} className="text-xl">
        {t('subtitle2')}
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false, amount: 0.3 }} className="font-semibold text-lg mt-10">
        {t('connect')}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false, amount: 0.3 }} className="h-full flex justify-end items-center mt-5">
        <div className="w-72 h-15 bg-white rounded-full shadow-md flex flex-row items-center justify-around">
          <a href="https://github.com/ardhanwardhani" target="_blank" rel="noopener noreferrer">
            <BsGithub size={25} className="text-black cursor-pointer hover:text-gray-600" />
          </a>
          <a href="https://www.linkedin.com/in/anugrah-wardhani/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={25} className="text-black cursor-pointer hover:text-blue-600" />
          </a>
          <a href="https://x.com/ardhnwrdhn" target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={25} className="text-black cursor-pointer hover:text-gray-800" />
          </a>
          <a href="https://www.instagram.com/ardhanwardhani/" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={25} className="text-black cursor-pointer hover:text-pink-500" />
          </a>
        </div>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false, amount: 0.3 }} className="text-center mt-10">
        {t('designedBy')}{' '}
        <a href="https://www.raharditya.com/" className="text-[#6EE984] hover:underline">
          Raharditya
        </a>
        <br />
        {t('developedBy')}{' '}
        <a href="" className="text-[#6EE984] hover:underline">
          Wardhani
        </a>
      </motion.p>
    </section>
  );
}
