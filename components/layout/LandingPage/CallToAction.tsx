'use client';

import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram } from 'react-icons/bs';
import Image from 'next/image';

export default function CTASection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-0">
      <Image
        src="/assets/images/bottom-blob.svg"
        alt="Green Blue Blob"
        width={700}
        height={500}
        className="absolute md:-top-100 md:-left-70 -top-70 -left-30 w-[100vw] max-w-[700px] z-[-1] pointer-events-none select-none blur-2xl opacity-50"
      />
      <h1 className="title-section text-3xl md:text-6xl font-bold text-purple-900 mb-12">{t('title')}</h1>
      <p className="font-semibold text-xl">{t('subtitle1')}</p>
      <p className="font-semibold text-xl">{t('subtitle2')}</p>
      <p className="font-semibold text-lg mt-20">{t('connect')}</p>
      <div className="h-full flex justify-end items-center mt-5">
        <div className="w-72 h-15 bg-white rounded-full shadow-md flex flex-row items-center justify-around">
          <BsGithub size={25} className="text-black cursor-pointer hover:text-gray-600" />
          <BsLinkedin size={25} className="text-black cursor-pointer hover:text-blue-600" />
          <BsTwitterX size={25} className="text-black cursor-pointer hover:text-gray-800" />
          <BsInstagram size={25} className="text-black cursor-pointer hover:text-pink-500" />
        </div>
      </div>
      <p className="text-center mt-10">
        {t('designedBy')}{' '}
        <a href="https://www.raharditya.com/" className="text-[#6EE984] hover:underline">
          Raharditya
        </a>
        <br />
        {t('developedBy')}{' '}
        <a href="" className="text-[#6EE984] hover:underline">
          Wardhani
        </a>
      </p>
    </section>
  );
}
