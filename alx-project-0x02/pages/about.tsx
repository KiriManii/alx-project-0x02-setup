import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold">About Page</h1>
        <div className="flex space-x-4">
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
