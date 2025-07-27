import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-1">Email: {email}</p>
      <p className="text-gray-600 text-sm">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
