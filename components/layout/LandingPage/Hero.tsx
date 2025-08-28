'use client';

import { BsDownload, BsEnvelope } from 'react-icons/bs';
import Image from 'next/image';

export default function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-28 md:mt-0">
      <div className="flex flex-row items-center justify-center text-center relative z-10 w-11/12 h-140">
        <div className="w-full md:w-7/12 h-full">
          <div className="w-full h-2/6 md:h-3/6 text-left py-5 mb-10 md:mb-0">
            <p className="text-2xl mb-5">{t('title')}</p>
            <p className="hero-name md:text-8xl font-bold text-6xl">Anugrah</p>
            <p className="hero-name md:text-8xl text-6xl">Wardhani</p>
          </div>
          <div className="w-full h-2/6 md:h-1/6 mb-40 md:mb-10">
            <p className="text-lg text-left">{t('description')}</p>
          </div>
          <div className="w-full h-1/6 flex flex-row flex-start gap-5 py-5">
            <button className="bg-[#6EE984] w-[250px] h-[60px] rounded-full flex flex-row items-center justify-center font-medium gap-5 hover:cursor-pointer">
              <BsDownload size={25} color="#59168b" />
              <p className="text-purple-900 text-lg">{t('downloadMyCV')}</p>
            </button>
            <button className="bg-white w-[60px] h-[60px] rounded-3xl flex items-center justify-center border-3 hover:cursor-pointer">
              <BsEnvelope size={30} color="#59168b" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-5/12 h-full justify-end items-center">
          <div className="flex flex-row w-5/6 h-1/3 bg-[#6EE984] rounded-tl-[70px] rounded-r-[70px] mt-40">
            <Image src="/assets/images/erasebg-transformed.png" alt="Profile" className="h-[450px] -mt-65 ml-5" width={450} height={450} />
          </div>
        </div>
      </div>
    </section>
  );
}
