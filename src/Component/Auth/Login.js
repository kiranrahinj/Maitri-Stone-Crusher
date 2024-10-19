import React from 'react';
import { useForm } from 'react-hook-form';
import api from "../Axios/Api";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data); // Await the API call
      console.log(response);
  
      // If login is successful, navigate to the /order page
      navigate("/order_dash");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
        <div className="w-full md:max-w-md max-w-sm mx-auto bg-white shadow-lg rounded-lg p-8 mt-32 ">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

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
