import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: UserProps[]) => setUsers(data))
      .catch(console.error);
  }, []);

  return (
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
};

export default UsersPage;
