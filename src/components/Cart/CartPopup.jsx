import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CartPopup = ({ isOpen, setIsOpen }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // Inisialisasi useNavigate

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Keranjang masih kosong. Tambahkan produk terlebih dahulu.");
      return;
    }
    setIsOpen(false); // Tutup popup
    navigate("/checkout"); // Navigasi ke halaman checkout
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold dark:text-white">Keranjang Sewa</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-4">
            Keranjang masih kosong
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium dark:text-white">{item.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">Rp{item.price}/hari</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-gray-700 px-2 py-1 rounded"
                          disabled={item.quantity === 1} // Disable jika jumlah 1
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700 px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex justify-between font-bold mb-4">
                <span>Total:</span>
                <span>Rp{total}/hari</span>
              </div>
              <button
                className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-full transition-colors"
                onClick={handleCheckout} // Panggil handleCheckout
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
