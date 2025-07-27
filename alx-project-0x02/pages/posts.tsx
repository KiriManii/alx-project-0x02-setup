import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => (
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

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: PostProps[] = await res.json();
  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};

export default PostsPage;
