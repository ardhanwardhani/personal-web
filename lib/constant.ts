import { SiCheerio, SiMui, SiSpring, SiSwagger } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IconType } from 'react-icons';
import { RiNextjsFill } from 'react-icons/ri';

export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = ['en', 'id'];

type TechStack = {
  icon: IconType;
  label: string;
};

type Project = {
  slug: string;
  projectName: string;
  imageUrl: string;
  techStacks: TechStack[];
  shortDescription: string;
  fullDescription: string;
};

type Blog = {
  title: string;
  url: string;
  platform: string;
  publishDate: string;
};

export const projectListEN: Project[] = [
  {
    slug: 'talent-center',
    projectName: 'Talent Center',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: SiSpring,
        label: 'Spring Boot',
      },
      {
        icon: FaReact,
        label: 'ReactJs',
      },
      {
        icon: BiLogoPostgresql,
        label: 'PostgreSQL',
      },
    ],
    shortDescription:
      'Talent Center is a talent commerce company owned by Padepokan 79. In this project, I served as a Full-Stack Developer. For the back-end, I utilized Spring Boot along with OOP and SOLID principles. On the front-end, I used ReactJS and common libraries within its ecosystem.',
    fullDescription:
      'Talent Center is a talent commerce company owned by Padepokan 79. In this project, I served as a Full-Stack Developer. For the back-end, I utilized Spring Boot along with OOP and SOLID principles. On the front-end, I used ReactJS and common libraries within its ecosystem. My responsibilities on the client-side included developing the Landing Page, Authorization, Talent Dashboard, Wishlist, and Talent Application features. This project demonstrates comprehensive skills in both back-end and front-end development to create a robust and user-friendly talent marketplace.',
  },
  {
    slug: 'branch-portal',
    projectName: 'Branch Portal Bank Jatim',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: SiSpring,
        label: 'Spring Boot',
      },
      {
        icon: BiLogoPostgresql,
        label: 'PostgreSQL',
      },
      {
        icon: SiSwagger,
        label: 'Swagger',
      },
    ],
    shortDescription:
      'The Branch Portal application, developed using Spring Boot with a monolithic architecture, serves as a data processing and management system for banking information such as customer data, transactions, and other related data.',
    fullDescription:
      'The Branch Portal application, developed using Spring Boot with a monolithic architecture, serves as a data processing and management system for banking information such as customer data, transactions, and other related data. As a back-end developer, I contributed to the development of APIs and the creation of the MPN Manager feature, as well as the export data feature using Apache POI. This project highlights the robust handling of banking data and efficient backend development practices.',
  },
  {
    slug: 'jobs-manager',
    projectName: 'Jobs Manager',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: FaNodeJs,
        label: 'NodeJs',
      },
      {
        icon: FaReact,
        label: 'ReactJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
      {
        icon: BiLogoPostgresql,
        label: 'PostgreSQL',
      },
      {
        icon: SiSwagger,
        label: 'Swagger',
      },
      {
        icon: SiCheerio,
        label: 'Cheerio',
      },
    ],
    shortDescription:
      'This project is designed to manage job listings using ReactJS for the front-end and NodeJS for the back-end. It features full CRUD functionality, allowing users to create, read, update, and delete job postings. Additionally, the application includes a feature to generate sample job data and an export function to download job listings in a convenient format. This project showcases the integration of modern web technologies to provide a comprehensive job management system.',
    fullDescription:
      'This project is designed to manage job listings using ReactJS for the front-end and NodeJS for the back-end. It features full CRUD functionality, allowing users to create, read, update, and delete job postings. Additionally, the application includes a feature to generate sample job data and an export function to download job listings in a convenient format. This project showcases the integration of modern web technologies to provide a comprehensive job management system.',
  },
  {
    slug: 'ticket-management-system',
    projectName: 'Ticket Management System',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: RiNextjsFill,
        label: 'NextJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
    ],
    shortDescription:
      'Ticket Management System is designed to manage complaints and issues at Padepokan 79. This application streamlines the process of logging, tracking, and resolving tickets, ensuring efficient handling and timely resolution of reported problems.',
    fullDescription:
      'Ticket Management System is designed to manage complaints and issues at Padepokan 79. This application streamlines the process of logging, tracking, and resolving tickets, ensuring efficient handling and timely resolution of reported problems.',
  },
  {
    slug: 'tiptip-web-app',
    projectName: 'TipTip Web App',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: RiNextjsFill,
        label: 'NextJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
    ],
    shortDescription:
      'TipTip Web App is a web-based platform developed to streamline the sale and distribution of event tickets and digital content. As a Developer, I focused on improving existing features to enhance overall quality and user experience, ensuring better performance, usability, and reliability across the platform.',
    fullDescription:
      'TipTip Web App is a web-based platform developed to streamline the sale and distribution of event tickets and digital content. As a Developer, I focused on improving existing features to enhance overall quality and user experience, ensuring better performance, usability, and reliability across the platform. The application supports creators and event organizers in monetizing their content through ticket sales, webinars, and premium digital assets like videos and documents. With a focus on scalability, user experience, and transactional security, TipTip Web App enables seamless interactions between content providers and their audiences.',
  },
  {
    slug: 'mangement-project-information-syste,',
    projectName: 'Information System Project Management',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: FaReact,
        label: 'ReactJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
    ],
    shortDescription: '',
    fullDescription: '',
  },
];

export const projectListID: Project[] = [
  {
    slug: 'talent-center',
    projectName: 'Talent Center',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: SiSpring,
        label: 'Spring Boot',
      },
      {
        icon: FaReact,
        label: 'ReactJs',
      },
      {
        icon: BiLogoPostgresql,
        label: 'PostgreSQL',
      },
    ],
    shortDescription:
      'Talent Center adalah perusahaan talent marketplace yang dimiliki oleh Padepokan 79. Dalam proyek ini, saya berperan sebagai Full-Stack Developer. Pada sisi back-end, saya menggunakan Spring Boot dengan menerapkan prinsip OOP dan SOLID. Untuk sisi front-end, saya mengembangkan menggunakan ReactJS beserta library umum dalam ekosistemnya.',
    fullDescription:
      'Talent Center adalah sebuah platform talent commerce yang dimiliki oleh Padepokan 79. Dalam proyek ini, saya berperan sebagai Full-Stack Developer. Di sisi back-end, saya membangun layanan menggunakan Spring Boot dengan menerapkan prinsip OOP dan SOLID. Sementara di sisi front-end, saya mengembangkan antarmuka menggunakan ReactJS beserta library yang umum digunakan dalam ekosistemnya. Tanggung jawab saya di sisi client mencakup pembuatan Landing Page, sistem Autentikasi, Talent Dashboard, Wishlist, serta fitur Talent Application. Proyek ini menunjukkan kemampuan saya dalam membangun solusi end-to-end, mulai dari back-end yang scalable hingga front-end yang ramah pengguna dan mudah diakses.',
  },
  {
    slug: 'branch-portal',
    projectName: 'Branch Portal Bank Jatim',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: SiSpring,
        label: 'Spring Boot',
      },
      {
        icon: BiLogoPostgresql,
        label: 'PostgreSQL',
      },
      {
        icon: SiSwagger,
        label: 'Swagger',
      },
    ],
    shortDescription:
      'Aplikasi Branch Portal, yang dibangun dengan Spring Boot menggunakan arsitektur monolitik, berfungsi sebagai sistem terpusat untuk memproses dan mengelola informasi perbankan, termasuk data nasabah, transaksi, dan data terkait lainnya.',
    fullDescription:
      'Aplikasi Branch Portal, yang dikembangkan menggunakan Spring Boot dengan arsitektur monolitik, berfungsi sebagai sistem pemrosesan dan manajemen data untuk informasi perbankan seperti data nasabah, transaksi, dan data terkait lainnya. Sebagai back-end developer, saya berkontribusi dalam pengembangan API serta pembuatan fitur MPN Manager dan fitur ekspor data menggunakan Apache POI. Proyek ini menyoroti kemampuan penanganan data perbankan yang kuat serta praktik pengembangan backend yang efisien.',
  },
  {
    slug: 'jobs-manager',
    projectName: 'Jobs Manager',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: FaNodeJs,
        label: 'NodeJs',
      },
      {
        icon: FaReact,
        label: 'ReactJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
      {
        icon: BiLogoPostgresql,
        label: 'PostgreSQL',
      },
      {
        icon: SiSwagger,
        label: 'Swagger',
      },
      {
        icon: SiCheerio,
        label: 'Cheerio',
      },
    ],
    shortDescription:
      'Aplikasi ini dirancang untuk mengelola daftar pekerjaan menggunakan ReactJS di sisi front-end dan NodeJS di sisi back-end. Aplikasi ini memiliki fungsionalitas CRUD lengkap, memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus lowongan pekerjaan. Selain itu, aplikasi ini dilengkapi dengan fitur untuk menghasilkan data pekerjaan sampel serta fungsi ekspor untuk mengunduh daftar pekerjaan dalam format yang mudah digunakan. Proyek ini menampilkan integrasi teknologi web modern untuk menyediakan sistem manajemen pekerjaan yang komprehensif.',
    fullDescription:
      'Aplikasi ini dirancang untuk mengelola daftar pekerjaan menggunakan ReactJS di sisi front-end dan NodeJS di sisi back-end. Aplikasi ini memiliki fungsionalitas CRUD lengkap, memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus lowongan pekerjaan. Selain itu, aplikasi ini dilengkapi dengan fitur untuk menghasilkan data pekerjaan sampel serta fungsi ekspor untuk mengunduh daftar pekerjaan dalam format yang mudah digunakan. Proyek ini menampilkan integrasi teknologi web modern untuk menyediakan sistem manajemen pekerjaan yang komprehensif.',
  },
  {
    slug: 'ticket-management-system',
    projectName: 'Ticket Management System',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: RiNextjsFill,
        label: 'NextJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
    ],
    shortDescription:
      'Ticket Management System dirancang untuk mengelola keluhan dan permasalahan di Padepokan 79. Aplikasi ini mempermudah proses pencatatan, pelacakan, dan penyelesaian tiket, sehingga penanganan masalah dapat dilakukan secara efisien dan tepat waktu.',
    fullDescription:
      'Ticket Management System dirancang untuk mengelola keluhan dan permasalahan di Padepokan 79. Aplikasi ini mempermudah proses pencatatan, pelacakan, dan penyelesaian tiket, sehingga penanganan masalah dapat dilakukan secara efisien dan tepat waktu.',
  },
  {
    slug: 'tiptip-web-app',
    projectName: 'TipTip Web App',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: RiNextjsFill,
        label: 'NextJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
    ],
    shortDescription:
      'TipTip Web App adalah platform berbasis web yang digunakan untuk mempermudah penjualan dan distribusi tiket acara serta konten digital. Sebagai Developer, saya berfokus pada peningkatan fitur yang sudah ada untuk meningkatkan kualitas keseluruhan dan pengalaman pengguna, dengan memastikan kinerja, kegunaan, serta keandalan platform tetap optimal.',
    fullDescription:
      'TipTip Web App adalah platform berbasis web yang dikembangkan untuk mempermudah penjualan dan distribusi tiket acara serta konten digital. Sebagai Developer, saya berfokus pada peningkatan fitur yang sudah ada untuk meningkatkan kualitas keseluruhan dan pengalaman pengguna, dengan memastikan kinerja, kegunaan, serta keandalan platform tetap optimal.Aplikasi ini mendukung kreator dan penyelenggara acara dalam memonetisasi konten mereka melalui penjualan tiket, webinar, serta aset digital premium seperti video dan dokumen. Dengan fokus pada skalabilitas, pengalaman pengguna, dan keamanan transaksi, TipTip Web App menghadirkan interaksi yang mulus antara penyedia konten dan audiens mereka.',
  },
  {
    slug: 'mangement-project-information-system',
    projectName: 'management Project Information System',
    imageUrl: '/assets/images/project.png',
    techStacks: [
      {
        icon: FaReact,
        label: 'ReactJs',
      },
      {
        icon: SiMui,
        label: 'Material UI',
      },
    ],
    shortDescription: '',
    fullDescription: '',
  },
];

export const aboutMeEN: string[] = [
  'I am a Software Developer with a vocational school background in Software Engineering and two years of professional experience in the field. Prior to this, I worked in the retail industry for three years. This combination of experiences has equipped me with strong communication skills, organizational management abilities, and problem-solving capabilities tailored to customer and user needs.',

  'On the technical side, I am capable of developing applications in both backend and frontend. I am experienced in working with technologies such as Java Spring Boot, ReactJS, and NextJS. In addition, I bring strong analytical skills, effective communication, and a results-oriented work approach.',

  'I am committed to building my career in the IT industry by contributing to the development of applications that create a positive impact on people’s lives. I enjoy taking on challenges and embrace opportunities to continuously learn and grow in this ever-evolving field of technology.',
];

export const aboutMeID: string[] = [
  'Saya adalah seorang Software Developer lulusan sekolah kejuruan jurusan Rekayasa Perangkat Lunak, dengan pengalaman profesional selama 2 tahun di bidang pengembangan perangkat lunak. Sebelumnya, saya bekerja di industri retail selama 3 tahun. Perpaduan pengalaman ini membekali saya dengan keterampilan komunikasi, manajemen organisasi, serta kemampuan menyelesaikan masalah berdasarkan kebutuhan pelanggan maupun pengguna.',
  'Dalam hal teknis, saya mampu mengembangkan aplikasi baik di sisi backend maupun frontend. Saya terbiasa menggunakan teknologi seperti Java Spring Boot, ReactJS, dan NextJS. Selain itu, saya memiliki kemampuan analisis yang kuat, komunikasi yang efektif, serta orientasi kerja yang berfokus pada hasil.',
  'Saya berkomitmen untuk membangun karir di industri IT dengan berkontribusi pada pengembangan aplikasi yang memberikan dampak positif bagi kehidupan. Saya menyukai tantangan dan selalu terbuka untuk kesempatan belajar serta berkarya di dunia teknologi yang terus berkembang pesat.',
];

export const blogListEN: Blog[] = [
  {
    title: 'Membuat Aplikasi Store Management dan Pos Sederhana',
    url: 'https://medium.com/@ardhanwardhani/membuat-aplikasi-store-management-dan-pos-sederhana-4b5b302537b8',
    platform: 'Medium',
    publishDate: '23 June 2024',
  },
  {
    title: 'Simulasi IoT Lokomotif dengan NodeJS, Kafka, MongoDB, PostgreSQL, Logging, dan Notif Telegram',
    url: 'https://www.linkedin.com/pulse/simulasi-iot-lokomotif-dengan-nodejs-kafka-mongodb-logging-wardhani-n7kcc/',
    platform: 'LinkedIn',
    publishDate: '22 November 2023',
  },
  {
    title: 'Job Vacancy App - Feeding and Exporting Data',
    url: 'https://youtu.be/712ZYfIVS7U?si=vWy0P8R4DOfY-M8C',
    platform: 'YouTube',
    publishDate: '6 August 2024',
  },
];

export const blogListID: Blog[] = [
  {
    title: 'Membuat Aplikasi Store Management dan Pos Sederhana',
    url: 'https://medium.com/@ardhanwardhani/membuat-aplikasi-store-management-dan-pos-sederhana-4b5b302537b8',
    platform: 'Medium',
    publishDate: '23 June 2024',
  },
  {
    title: 'Simulasi IoT Lokomotif dengan NodeJS, Kafka, MongoDB, PostgreSQL, Logging, dan Notif Telegram',
    url: 'https://www.linkedin.com/pulse/simulasi-iot-lokomotif-dengan-nodejs-kafka-mongodb-logging-wardhani-n7kcc/',
    platform: 'LinkedIn',
    publishDate: '22 November 2023',
  },
  {
    title: 'Job Vacancy App - Feeding and Exporting Data',
    url: 'https://youtu.be/712ZYfIVS7U?si=vWy0P8R4DOfY-M8C',
    platform: 'YouTube',
    publishDate: '6 August 2024',
  },
];
