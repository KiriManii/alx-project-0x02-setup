import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ userId, title, body }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">User ID: {userId}</p>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
