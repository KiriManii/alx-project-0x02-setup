import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Posts Page</h1>
      </main>
    </>
  );
};

export default PostsPage;
