import React, { useState } from 'react';
import axios from 'axios';

const ChatbotForm = ({ onFormSubmit, onClose }) => {
  const [step, setStep] = useState(1); // 1 = Collect Details, 2 = Enter OTP
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    otp: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      const apiUrl = process.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/chatbot/send-otp`, { email: formData.email });
      setStep(2);
      setSuccessMsg('Verification code sent to your email!');
    } catch (err) {
      console.error("Failed to send OTP:", err);
      setError('Failed to send verification code. Please check your email address.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const apiUrl = process.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/chatbot/verify-otp`, formData);
      onFormSubmit();
    } catch (err) {
      console.error("Failed to verify OTP:", err);
      setError(err.response?.data?.error || 'Invalid or expired verification code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-4 bg-gray-50 overflow-y-auto">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Welcome to Helix Conferences!</h3>
        <p className="text-sm text-gray-600 mt-1">
          {step === 1 ? "Please provide your details to start chatting." : "Enter the verification code sent to your email."}
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              placeholder="+1 234 567 8900"
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-2 flex justify-center items-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Send Verification Code"
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
          {successMsg && <p className="text-green-600 text-sm font-medium text-center bg-green-50 p-2 rounded">{successMsg}</p>}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="otp">6-Digit Code</label>
            <input
              type="text"
              id="otp"
              name="otp"
              required
              maxLength={6}
              value={formData.otp}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-center tracking-[0.5em] font-mono text-lg"
              placeholder="000000"
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-2 flex justify-center items-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Verify & Start Chat"
            )}
          </button>
          
          <div className="flex justify-between items-center mt-2 w-full">
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={isLoading}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Resend Code
            </button>
            <button
              type="button"
              onClick={() => {
                setError('');
                setSuccessMsg('');
                setFormData({ ...formData, otp: '' });
                setStep(1);
              }}
              className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              Change Email
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChatbotForm;
