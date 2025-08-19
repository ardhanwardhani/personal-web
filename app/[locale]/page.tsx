'use client';

import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Footer from '../../components/layout/Footer';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">{t('description')}</p>
        <Button variant="primary" onClick={() => alert('Clicked!')}>
          🚀 Get Started
        </Button>
      </section>

      {/* Example Card */}
      <section>
        <Card title="Reusable Card Component">
          <p>
            This is an example of a <strong>Card</strong> component with light & dark mode styles.
          </p>
        </Card>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
