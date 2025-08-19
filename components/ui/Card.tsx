import { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
