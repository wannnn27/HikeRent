import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import loginBg from "../../assets/hero/pemandangan.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigate("/");
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setMessage("Username atau password salah!");
      } else {
        setMessage("Terjadi kesalahan. Coba lagi.");
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Bagian kiri: Gambar */}
      <div
        className="hidden md:flex w-1/2 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
      </div>

      {/* Bagian kanan: Tulisan dan Formulir login */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        {/* Tulisan di atas form */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-poppins text-white-800 mb-2">
            Selamat Datang di HikeRent
          </h1>
          <p className="text-lg text-gray-600">
            Nikmati pengalaman penyewaan yang mudah dan cepat
          </p>
        </div>

        {/* Formulir */}
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg mx-4 md:mx-0">
          <h1 className="text-3xl font-bold text-center mb-6 font-poppins">Login</h1>
          <div className="mb-4">
            <input
              className="w-full p-3 text-lg text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full p-3 text-lg text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg py-3 text-center mb-4 font-poppins"
          >
            Login
          </button>

          {message && <p className="text-red-500 text-center mt-4">{message}</p>}

          <p className="text-center mt-4 font-poppins text-lg">
            Belum punya akun?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
            <span className="inline-block text-center w-full">Daftar</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
