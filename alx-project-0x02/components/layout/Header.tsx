import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <nav className="container mx-auto flex space-x-6">
        <Link href="/">
          <a className="text-lg font-semibold hover:text-gray-700">Landing</a>
        </Link>
        <Link href="/home">
          <a className="text-lg font-semibold hover:text-gray-700">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-lg font-semibold hover:text-gray-700">About</a>
        </Link>
        <Link href="/posts">
          <a className="text-lg font-semibold hover:text-gray-700">Posts</a>
        </Link>
        <Link href="/users">
          <a className="text-lg font-semibold hover:text-gray-700">Users</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
