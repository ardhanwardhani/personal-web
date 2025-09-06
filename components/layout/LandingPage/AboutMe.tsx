'use client';

import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { aboutMeEN, aboutMeID } from '../../../lib/constant';
import { useLocale } from 'next-intl';

export default function AboutMe({ t }: { t: (key: string) => string }) {
  const locale = useLocale();
  const aboutMe = locale === 'id' ? aboutMeID : aboutMeEN;
  return (
    <div id="about-me" className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/assets/images/blob-project-1.svg"
        alt="Green Blue Blob"
        width={700}
        height={500}
        className="absolute md:right-10 md:-top-90 right-0 -top-40 w-[100vw] max-w-[700px] z-[-1] pointer-events-none select-none blur-2xl opacity-50"
      />
      <Image
        src="/assets/images/blob-project-2.svg"
        alt="Green Blue Blob"
        width={700}
        height={500}
        className="absolute md:right-30 md:-top-130 right-10 -top-80 w-[100vw] max-w-[700px] z-[-1] pointer-events-none select-none blur-2xl opacity-50"
      />
      <div className="w-full h-full md:mt-35 mt-20 flex flex-col justify-center items-center mb-35 md:px-15 px-5 pt-15">
        <p className="title-section text-5xl font-bold mb-10">{t('title')}</p>
        <div className="w-full h-full flex md:flex-row sm:flex-col-reverse justify-center gap-10">
          <div className="flex flex-col gap-5">
            {aboutMe.map((desc, i) => {
              return <p key={i}>{desc}</p>;
            })}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} viewport={{ once: false, amount: 0.3 }} className="w-full h-1/6 flex flex-row flex-start gap-5 py-5">
              <Link
                href="https://drive.google.com/file/d/1yOHjzwX2dhdfex1Dx_VuNCIQk9W6u7OF/view?usp=sharing"
                target="_blank"
                className="bg-[#6EE984] w-[220px] h-[40px] rounded-full flex flex-row items-center justify-center font-medium gap-5 hover:cursor-pointer"
              >
                <p className="text-purple-900 text-md">{t('downloadMyCV')}</p>
                <BsArrowRight size={25} color="#59168b" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
