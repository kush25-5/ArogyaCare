import { useState } from "react";
import { useLocation } from "wouter";

export default function VerifyPage() {
  const [, setLocation] = useLocation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter all 6 digits of OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: enteredOtp }),
      });

      const data = await response.json();

      if (data.status === true) {
        setLocation("/dashboard"); // ✅ redirect without reload
      } else {
        setError("Invalid OTP, please try again.");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("Server error, try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f9ff]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <img src="src/assets/logo.png" alt="ArogyaCare Logo" className="h-10 mr-2" />
          <h1 className="text-2xl font-bold text-[#1e90ff]">
            Arogya<span className="text-green-600">Care</span>
          </h1>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
          Verify Your Account 🔒
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter the 6-digit code sent to your email / phone
        </p>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center border rounded-md text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            ))}
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => alert("Resend OTP triggered")}
            >
              Resend OTP
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
