import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from "../Axios/Api";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../Redux/Slices/AuthSlice"; // Correctly import action
 

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(''); // State for storing login errors
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    // Remove the old token if it exists
    const oldToken = localStorage.getItem("token");
    if (oldToken) localStorage.removeItem("token");
    
    try {
      const response = await api.post("/auth/login", data); 
      const token = response.data.data; // Adjust to match the actual structure of your API response
      if (token) {
        // Clear any previous errors
        setLoginError('');

        // Save token in both Redux state and localStorage
        dispatch(loginSuccess(token));
        console.log("Token saved successfully.");
        
        // Navigate to dashboard after successful login
        navigate("/dashboard");
      } else {
        // Show login error after 5 seconds and then hide it after another 5 seconds
        setLoginError("Login failed. Please check your credentials.");
        // Clear error after 5 seconds
        setTimeout(() => {
          setLoginError('');
        }, 5500); // 5 seconds after error shows up
      }
    } catch (error) {
      console.error("Error during login:", error);
      
      // Show error message from API response or default message after 5 seconds
      setTimeout(() => {
        setLoginError(error.response?.data?.message || "Login failed. Please try again.");
      }, 500);

      // Clear error after 5 seconds
      setTimeout(() => {
        setLoginError('');
      }, 5500); // 5 seconds after error shows up
    }
  };

  return (
    <div>
        <div className="w-full md:max-w-md max-w-sm mx-auto bg-white shadow-lg rounded-lg p-8 mt-32">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

          {/* Conditionally display login error */}
          {loginError && (
            <p className="text-red-500 text-center mb-4">{loginError}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none`}
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`w-full px-4 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none`}
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Login;
