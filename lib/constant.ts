export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = ['en', 'id'];

type Project = {
  title: string;
  description: string[];
  image: string;
  stacks: { name: string; icon?: string }[];
};

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    image: '/assets/images/project.png',
    stacks: [
      { name: 'NextJS', icon: '/icons/nextjs.svg' },
      { name: 'TypeScript', icon: '/icons/ts.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwind.svg' },
    ],
    description: ['Website pribadi untuk menampilkan portfolio.', 'Menggunakan Next.js, TypeScript, dan TailwindCSS.'],
  },
  {
    title: 'E-commerce Platform',
    image: '/assets/images/project.png',
    stacks: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'NodeJS', icon: '/icons/nodejs.svg' },
      { name: 'MongoDB', icon: '/icons/mongo.svg' },
    ],
    description: ['Platform toko online dengan fitur cart dan payment.', 'Fullstack menggunakan MERN stack.'],
  },
  {
    title: 'Chat Application',
    image: '/assets/images/project.png',
    stacks: [{ name: 'NextJS', icon: '/icons/nextjs.svg' }, { name: 'Redis', icon: '/icons/redis.svg' }, { name: 'WebSocket' }],
    description: ['Aplikasi chat real-time dengan socket.', 'Menggunakan Redis untuk pub/sub system.'],
  },
];

export const blogs = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dol...',
    source: 'Medium',
    date: '13 August 2025',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dol...',
    source: 'LinkedIn',
    date: '13 August 2025',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dol...',
    source: 'Medium',
    date: '13 August 2025',
    link: '#',
  },
];
