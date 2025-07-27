import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => (
  <>
    <Header />
    <main className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Users Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  </>
);

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: UserProps[] = await res.json();
  return {
    props: {
      users: data,
    },
  };
}

export default UsersPage;
