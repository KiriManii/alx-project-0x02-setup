import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="Card One" content="This is the first card content." />
          <Card title="Card Two" content="This is the second card content." />
        </div>
      </main>
    </>
  );
};

export default HomePage;
