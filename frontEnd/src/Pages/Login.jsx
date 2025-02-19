import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      let message = 'Login failed..';
            if (error.response && error.response.data) {
              // Check for the error message in the `error` property
              if (error.response.data.error) {
                message = error.response.data.error;
              } else if (error.response.data.errors && error.response.data.errors.length > 0) {
                message = error.response.data.errors[0].msg;
              } else if (error.response.data.message) {
                message = error.response.data.message;
              }
            }
         toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  relative overflow-hidden">
      {/* Background decorative layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30"></div>
      </div>

      {/* Login form container */}
      <div className="relative bg-white rounded-lg shadow-2xl p-10 max-w-md w-full z-10">
        
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Sign in to your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/request-access" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;   