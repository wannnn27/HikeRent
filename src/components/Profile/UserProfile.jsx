import React from 'react';
import { useAuth } from '../../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-md">
              {user.email}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Account Created</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-md">
              {user.metadata.creationTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;