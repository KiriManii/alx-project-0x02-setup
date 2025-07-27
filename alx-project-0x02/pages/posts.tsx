import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data: PostProps[]) => setPosts(data.slice(0, 10)))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
