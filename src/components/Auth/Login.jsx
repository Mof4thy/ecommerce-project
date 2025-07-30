import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: 'emilys',
        password: 'emilyspass',
      });

      console.log("Login success:", response.data);

      // حفظ التوكن في localStorage
      localStorage.setItem("token", response.data.accessToken);

      navigate("/"); // إعادة التوجيه للصفحة الرئيسية
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your username and password.");
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    <div className="p-10 flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35AFA0]"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#35AFA0] hover:bg-teal-500 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#35AFA0] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
