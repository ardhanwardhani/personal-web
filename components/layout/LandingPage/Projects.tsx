'use client';
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { projects } from '../../../lib/constant';

export default function ProjectsSection({ t }: { t: (key: string) => string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-start justify-start md:px-15 px-5 pt-15">
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
      <h1 className="title-section text-4xl md:text-6xl font-bold text-purple-900 mb-12">Projects</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-5">
        <div className="w-full h-[200px] md:h-[450px] relative mb-10">
          <Image src={project.image} alt="Project preview" className="object-cover rounded-3xl shadow-lg" width={700} height={350} />
        </div>
        <div className="flex flex-col h-full gap-5">
          <h2 className="project-name text-2xl md:text-4xl">{project.title}</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.stacks.map((stack, i) => (
              <span
                key={i}
                className="stack-chip flex items-center gap-1.5 sm:gap-2 
                 px-2.5 py-1.5 sm:px-4 sm:py-2 
                 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-md 
                 text-purple-900 font-medium text-xs sm:text-sm"
              >
                {stack.icon && <Image src={stack.icon} alt={stack.name} className="w-3 h-3 sm:w-4 sm:h-4" width={16} height={16} />}
                {stack.name}
              </span>
            ))}
          </div>
          <div className="min-h-[200px] md:min-h-[130px]">
            {project.description.map((desc, i) => (
              <p key={i} className="mb-2 leading-relaxed">
                {desc}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button className="btn-detail-project px-6 py-2 border-2 border-purple-900 text-purple-900 font-medium rounded-2xl hover:bg-purple-900 hover:text-white transition">{t('seeDetail')}</button>
            <div className="flex gap-4">
              <button onClick={prevProject} className="btn-slide-card p-3 border-2 border-purple-900 rounded-2xl hover:bg-purple-900 hover:text-white hover:cursor-pointer transition">
                <BsArrowLeft size={20} />
              </button>
              <button onClick={nextProject} className="btn-slide-card p-3 border-2 border-purple-900 rounded-2xl hover:bg-purple-900 hover:text-white hover:cursor-pointer transition">
                <BsArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
