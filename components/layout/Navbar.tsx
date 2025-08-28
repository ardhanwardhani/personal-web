'use client';

import { useState } from 'react';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import LanguageSwitcher from '../theme/LanguageSwicther';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar relative">
      <div className="hidden md:flex gap-10 items-center p-3">
        <div className="text-lg cursor-pointer hover:text-purple-700 transition">Home</div>
        <div className="text-lg cursor-pointer hover:text-purple-700 transition">Projects</div>
        <div className="text-lg cursor-pointer hover:text-purple-700 transition">Blogs</div>
        <div className="text-lg cursor-pointer hover:text-purple-700 transition">Contact</div>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      {/* Mobile Right Section */}
      <div className="flex gap-4 md:hidden text-black">
        <p className="hero-name text-bold text-xl">AW</p>
      </div>
      <div className="flex gap-4 md:hidden text-black">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <div className={`sidebar ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 p-6 text-lg">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X size={28} className="close-sidebar" />
            </button>
          </div>
          <div className="cursor-pointer hover:text-purple-700 transition">Home</div>
          <div className="cursor-pointer hover:text-purple-700 transition">Projects</div>
          <div className="cursor-pointer hover:text-purple-700 transition">Blogs</div>
          <div className="cursor-pointer hover:text-purple-700 transition">Contact</div>
          <div className="flex flex-col justify-start items-start gap-10 pt-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
