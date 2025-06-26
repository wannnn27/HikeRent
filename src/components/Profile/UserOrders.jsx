import React from 'react';

const UserOrders = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        <div className="space-y-4">
          {/* Placeholder for orders list */}
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No orders found
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;