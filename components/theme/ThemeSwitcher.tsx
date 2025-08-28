// 'use client';
// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';

// export default function ThemeSwitcher() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   if (!mounted) return null;

//   return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>;
// }

'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="relative flex items-center w-14 h-8 bg-gray-100  rounded-full p-1 transition-colors">
      <span className={`w-6 h-6 bg-gray-300 rounded-full shadow-md transform transition-transform ${isDark ? 'translate-x-6' : 'translate-x-0'}`}>
        <span className="flex items-center justify-center w-full h-full text-gray-800 dark:text-yellow-400">{isDark ? <Moon size={16} /> : <Sun size={16} />}</span>
      </span>
    </button>
  );
}
