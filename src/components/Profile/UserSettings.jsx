import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const UserSettings = () => {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`${
                darkMode ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`${
                notifications ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;