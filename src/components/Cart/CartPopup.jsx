import React from "react";
import { useCart } from "./CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CartPopup = ({ isOpen, setIsOpen }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert("Silakan login terlebih dahulu untuk melakukan checkout.");
      setIsOpen(false);
      navigate("/login", { state: { from: "/checkout" } });
      return;
    }
    if (cartItems.length === 0) {
      alert("Keranjang masih kosong. Tambahkan produk terlebih dahulu.");
      return;
    }
    setIsOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-stone-900/50 backdrop-blur-sm px-4">
      <div 
        className="bg-white p-8 rounded-2xl shadow-[0_32px_64px_rgba(0,0,0,0.15)] w-full max-w-md border border-stone-200 overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-stone-100">
          <h2 className="text-2xl font-black text-emerald-950 tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            KERANJANG <span className="text-emerald-600">SEWA</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-400 hover:text-emerald-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-400 text-[11px] uppercase tracking-[0.2em] font-bold">Keranjang masih kosong</p>
          </div>
        ) : (
          <>
            <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 items-center group">
                  <div className="w-20 h-20 bg-stone-50 rounded-xl flex-shrink-0 flex items-center justify-center p-4 border border-stone-100 overflow-hidden shadow-sm">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-stone-800 truncate text-sm uppercase tracking-wider">{item.name}</h3>
                    <p className="text-emerald-700 text-[11px] font-bold mt-1">Rp{item.price.toLocaleString()}/hari</p>
                    
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center bg-white rounded-lg border border-stone-200 px-2 shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 text-stone-400 hover:text-emerald-700 transition-colors flex items-center justify-center font-bold"
                          disabled={item.quantity === 1}
                        >
                          <span className="text-lg leading-none">-</span>
                        </button>
                        <span className="w-6 text-center text-[11px] font-bold text-emerald-950">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 text-stone-400 hover:text-emerald-700 transition-colors flex items-center justify-center font-bold"
                        >
                          <span className="text-lg leading-none">+</span>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-300 hover:text-red-500 transition-colors ml-auto p-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-stone-100">
              <div className="flex justify-between items-end mb-8">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">Total Estimasi</p>
                <p className="text-2xl font-black text-emerald-950 tracking-tighter" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Rp{total.toLocaleString()}
                </p>
              </div>
              <button
                style={{ background: "#047857", color: "#ffffff" }}
                className="w-full py-4 text-[11px] font-black uppercase tracking-[0.25em] rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-700/20 hover:bg-emerald-600"
                onClick={handleCheckout}
              >
                PROSES CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(4, 120, 87, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(4, 120, 87, 0.3); }
      `}</style>
    </div>
  );
};

export default CartPopup;