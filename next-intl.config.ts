import defineConfig from 'next-intl/config';

const intlConfig = {
  locales: ['en', 'id'],
  defaultLocale: 'en',
};

export default defineConfig();
export { intlConfig };
