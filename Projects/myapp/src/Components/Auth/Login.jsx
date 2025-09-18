import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    // console.log("Form submitted");
    // console.log("Email:", email);
    // console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md p-6 sm:p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none border-2 border-blue-400 focus:border-blue-600 text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full outline-none border-2 border-blue-400 focus:border-blue-600 text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-5 rounded-full transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
