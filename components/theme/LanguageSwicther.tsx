'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'en' || segments[0] === 'id') {
    segments.shift();
  }

  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPath = '/' + [newLocale, ...segments].join('/');
    setCurrentLocale(newLocale);
    router.push(newPath);
  };

  return (
    <select value={currentLocale} onChange={handleChange} className="lang-opt px-3 py-1 rounded cursor-pointer">
      <option value="en">English</option>
      <option value="id">Indonesia</option>
    </select>
  );
}
