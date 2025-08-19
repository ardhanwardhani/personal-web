'use client';

import ThemeSwitcher from '../theme/ThemeSwitcher';
import LanguageSwitcher from '../theme/LanguageSwicther';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <div className="font-bold text-lg">MyApp</div>
      <div className="flex gap-4">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
