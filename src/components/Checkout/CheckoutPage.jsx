import React, { useState } from "react";

import { useCart } from "../Cart/CartContext";

import { Check, Copy, Loader2 } from "lucide-react";

import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("");

  const [subMethod, setSubMethod] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handlePayment = () => {
    if (!paymentMethod || (paymentMethod !== "Tunai" && !subMethod)) {
      alert("Pilih metode dan detail pembayaran terlebih dahulu.");

      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setShowPaymentDetails(true);
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {" "}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg">
        {" "}
        <div className="p-6">
          {" "}
          <div className="space-y-6">
            {" "}
            {/* Order Summary */}{" "}
            <div className="space-y-4">
              {" "}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-100 pb-4"
                >
                  {" "}
                  <div className="flex items-center gap-4">
                    {" "}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}{" "}
                    <div>
                      {" "}
                      <h3 className="font-medium text-gray-900">
                        {item.name}
                      </h3>{" "}
                      <p className="text-sm text-gray-500">
                        x {item.quantity}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <span className="font-semibold text-blue-600">
                    {" "}
                    Rp{(item.price * item.quantity).toLocaleString()}{" "}
                  </span>{" "}
                </div>
              ))}{" "}
              <div className="flex justify-between items-center pt-4">
                {" "}
                <span className="font-semibold text-gray-900">Total</span>{" "}
                <span className="font-bold text-blue-600 text-xl">
                  {" "}
                  Rp{total.toLocaleString()}{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* Payment Methods */}{" "}
            <div className="space-y-4">
              {" "}
              <h2 className="font-semibold text-gray-900">
                Metode Pembayaran
              </h2>{" "}
              <div className="space-y-3">
                {" "}
                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  {" "}
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Transfer Bank"
                    checked={paymentMethod === "Transfer Bank"}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value);

                      setSubMethod("");
                    }}
                    className="w-4 h-4 text-blue-600"
                  />{" "}
                  <span className="ml-3 font-semibold text-gray-900">
                    Transfer Bank
                  </span>{" "}
                </label>{" "}
                {paymentMethod === "Transfer Bank" && (
                  <select
                    value={subMethod}
                    onChange={(e) => setSubMethod(e.target.value)}
                    className="font-semibold text-gray-600 text-blue-500 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {" "}
                    <option value="">Pilih Bank</option>{" "}
                    <option value="BCA">BCA</option>{" "}
                    <option value="Mandiri">Mandiri</option>{" "}
                    <option value="BNI">BNI</option>{" "}
                    <option value="BRI">BRI</option>{" "}
                  </select>
                )}{" "}
                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  {" "}
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="E-Wallet"
                    checked={paymentMethod === "E-Wallet"}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value);

                      setSubMethod("");
                    }}
                    className="w-4 h-4 text-blue-600"
                  />{" "}
                  <span className="ml-3 font-semibold text-gray-900">
                    E-Wallet
                  </span>{" "}
                </label>{" "}
                {paymentMethod === "E-Wallet" && (
                  <select
                    value={subMethod}
                    onChange={(e) => setSubMethod(e.target.value)}
                    className="font-semibold text-gray-600 text-blue-500 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {" "}
                    <option value="">Pilih E-Wallet</option>{" "}
                    <option value="DANA">DANA</option>{" "}
                    <option value="OVO">OVO</option>{" "}
                    <option value="GoPay">GoPay</option>{" "}
                  </select>
                )}{" "}
                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  {" "}
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Tunai"
                    checked={paymentMethod === "Tunai"}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value);

                      setSubMethod("");
                    }}
                    className="w-4 h-4 text-blue-600"
                  />{" "}
                  <span className="ml-3 font-semibold text-gray-900">
                    Tunai
                  </span>{" "}
                </label>{" "}
              </div>{" "}
            </div>{" "}
            <button
              onClick={handlePayment}
              disabled={loading || !paymentMethod}
              className={`w-full py-4 text-lg font-semibold text-white rounded-lg transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
              }
`}
            >
              {" "}
              {loading ? (
                <span className="flex items-center justify-center">
                  {" "}
                  <Loader2 className="animate-spin mr-2" /> Memproses...{" "}
                </span>
              ) : (
                "Bayar Sekarang"
              )}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Payment Details Modal */}{" "}
      {showPaymentDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          {" "}
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-lg">
            {" "}
            <h2 className="font-semibold text-2xl text-gray-900 text-center text-blue-500 mb-6">
              {" "}
              Detail Pembayaran{" "}
            </h2>{" "}
            <div className="space-y-6">
              {" "}
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                {" "}
                <p className="text-sm text-gray-700 mb-1">
                  Total Pembayaran
                </p>{" "}
                <p className="text-2xl font-bold text-blue-700 text-center">
                  {" "}
                  Rp{total.toLocaleString()}{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-sm text-gray-600 mb-1">
                  Metode Pembayaran
                </p>{" "}
                <p className="font-semibold text-lg text-gray-800">
                  {" "}
                  {paymentMethod}
                  {subMethod &&
                    `- ${subMethod}
`}{" "}
                </p>{" "}
              </div>{" "}
              {(paymentMethod === "Transfer Bank" ||
                paymentMethod === "E-Wallet") && (
                <div>
                  {" "}
                  <p className="text-sm text-gray-600 mb-1">
                    Nomor Virtual Account
                  </p>{" "}
                  <div className="flex items-center space-x-2">
                    {" "}
                    <code className="font-mono text-lg font-semibold bg-gray-100 text-blue-600 px-3 py-1 rounded-lg flex-1">
                      {" "}
                      {Math.random().toString().slice(2, 12)}{" "}
                    </code>{" "}
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          Math.random().toString().slice(2, 12),
                        );

                        setCopied(true);

                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                    >
                      {" "}
                      {copied ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}{" "}
                    </button>{" "}
                  </div>{" "}
                </div>
              )}{" "}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                {" "}
                <p className="text-sm text-gray-600 mb-2">
                  Instruksi Pembayaran:
                </p>{" "}
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  {" "}
                  {paymentMethod === "Tunai" ? (
                    <>
                      {" "}
                      <li>Tunjukkan kode pembayaran kepada kasir.</li>{" "}
                      <li>Lakukan pembayaran sesuai total tagihan.</li>{" "}
                      <li>Simpan bukti pembayaran.</li>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <li>Salin nomor virtual account di atas.</li>{" "}
                      <li>
                        Buka aplikasi {subMethod || "pembayaran"}
                        Anda.
                      </li>{" "}
                      <li>Masukkan nominal sesuai total pembayaran.</li>{" "}
                      <li>Masukkan nomor virtual account.</li>{" "}
                      <li>Periksa kembali detail pembayaran.</li>{" "}
                      <li>Konfirmasi dan selesaikan pembayaran.</li>{" "}
                    </>
                  )}{" "}
                </ol>{" "}
              </div>{" "}
              <button
                onClick={() => {
                  clearCart();

                  setShowPaymentDetails(false);

                  navigate("/");
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg"
              >
                {" "}
                Selesai{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default CheckoutPage;
