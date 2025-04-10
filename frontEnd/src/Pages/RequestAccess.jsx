import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RequestAccess = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sendCheck, setSendCheck] = useState(false);

  const handleSubmit = async (e) => {
    setSendCheck(true);
    e.preventDefault();
    try {
      await axios.post("/api/auth/request-access", {
        name,
        email,
      });
      toast.success(
        "Request sent to admin. Please wait for approval. chack your email , you get a link to signup"
      );
      setName("");
      setEmail("");
      setSendCheck(false);
    } catch (error) {
      setSendCheck(false);
      let message = "Error sending request..";
      if (error.response && error.response.data) {
        // Check for the error message in the `error` property
        if (error.response.data.error) {
          message = error.response.data.error;
        } else if (
          error.response.data.errors &&
          error.response.data.errors.length > 0
        ) {
          message = error.response.data.errors[0].msg;
        } else if (error.response.data.message) {
          message = error.response.data.message;
        }
      }
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30"></div>
      </div>

      {/* Request Access form container */}
      <div className="relative bg-white rounded-lg shadow-2xl p-10 max-w-md w-full z-10">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
          Request Access
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Fill in your details below and wait for admin approval for Signup.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={sendCheck} // Disable the button while processing
            className={`w-full py-2 px-4 rounded-lg transition duration-300 ${
              sendCheck ? "bg-green-600" : "bg-orange-600 hover:bg-orange-700"
            } text-white`}>
            {sendCheck ? "Sending..." : "Send Request"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-gray-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;
