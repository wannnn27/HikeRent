import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  const initialData = {
    name: "Adi Arwan Syah",
    email: "adi.arwan@example.com",
    password: "********", // Password disembunyikan secara default
    phone: "123-456-7890",
    address: "Jl. Pemuda No. 10, Yogyakarta",
    profilePicture: "https://via.placeholder.com/150", // Placeholder foto profil
  };

  // Ambil data dari localStorage atau gunakan nilai default
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState(userData);

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani unggahan foto profil
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedData({ ...updatedData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = () => {
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData)); // Simpan ke localStorage
    setIsEditing(false);
  };

  // Perbarui localStorage setiap kali userData berubah
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Account Settings</h1>
      <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        {isEditing ? (
          <div className="space-y-6">
            <div className="text-center">
              <label htmlFor="profilePicture" className="block text-sm font-medium mb-2">Profile Picture</label>
              <div className="mb-4">
                <img
                  src={updatedData.profilePicture}
                  alt="Profile"
                  className="w-28 h-28 rounded-full mx-auto object-cover border"
                />
              </div>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={updatedData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={updatedData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={updatedData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={updatedData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea
                name="address"
                value={updatedData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                rows="3"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="py-2 px-6 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <img
                src={userData.profilePicture}
                alt="Profile"
                className="w-28 h-28 rounded-full mx-auto object-cover border mb-4"
              />
            </div>
            <div>
              <span className="block text-sm font-medium">Name</span>
              <p className="text-gray-700 dark:text-white">{userData.name}</p>
            </div>
            <div>
              <span className="block text-sm font-medium">Email</span>
              <p className="text-gray-700 dark:text-white">{userData.email}</p>
            </div>
            <div>
              <span className="block text-sm font-medium">Password</span>
              <p className="text-gray-700 dark:text-white">{userData.password}</p>
            </div>
            <div>
              <span className="block text-sm font-medium">Phone</span>
              <p className="text-gray-700 dark:text-white">{userData.phone}</p>
            </div>
            <div>
              <span className="block text-sm font-medium">Address</span>
              <p className="text-gray-700 dark:text-white">{userData.address}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
            >
              Edit Information
            </button>
          </div>
        )}
      </div>
      <div className="text-center mt-6">
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AccountSettings;
