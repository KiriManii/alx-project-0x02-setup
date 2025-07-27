import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([{ title, content }, ...posts]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home Page</h1>
          <PostModal onAdd={handleAddPost} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post, idx) => (
            <Card key={idx} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
