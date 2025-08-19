'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  // split path
  const segments = pathname.split('/').filter(Boolean); // hapus empty string

  // buang locale di awal kalau ada
  if (segments[0] === 'en' || segments[0] === 'id') {
    segments.shift();
  }

  // set locale baru
  const newLocale = locale === 'en' ? 'id' : 'en';
  const newPath = '/' + [newLocale, ...segments].join('/');

  return (
    <Link href={newPath}>
      <button className="px-3 py-1 rounded bg-green-500 text-white">{locale === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}</button>
    </Link>
  );
}
