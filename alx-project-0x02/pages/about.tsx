import React from 'react';
import Header from '@/components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">About Page</h1>
      </main>
    </>
  );
};

export default AboutPage;
