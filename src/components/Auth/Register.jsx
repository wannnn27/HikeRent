import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import registerBg from "../../assets/hero/pemandangan.jpg";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Bagian kiri: Gambar */}
      <div
        className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${registerBg})` }}
      >
      </div>

      {/* Bagian kanan: Formulir register */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Teks  */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Bergabung dengan HikeRent</h2>
            <p className="text-lg text-gray-600">
              Daftar sekarang dan nikmati layanan terbaik
            </p>
          </div>

          {/* Formulir */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 font-poppins">
              Daftar Sekarang
            </h1>
            <div className="mb-4">
              <input
                className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Nomor HP atau Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                type="password"
                placeholder="Konfirmasi Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleRegister}
              type="button"
              className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg py-3 text-center mb-4 font-poppins"
            >
              Daftar
            </button>

            {message && (
              <p className="text-red-500 text-center mt-4">{message}</p>
            )}
            <p className="text-black text-center mt-4 text-lg">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-blue-500 hover:underline block">
                <span className="inline-block text-center w-full">Masuk</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
