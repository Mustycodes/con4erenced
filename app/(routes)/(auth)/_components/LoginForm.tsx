"use client";

import { useState } from "react";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginData);
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <div className='flex flex-col gap-y-2'>
        <label htmlFor='username' className='text-lg text-[#F1F2F6]'>
          Username
        </label>
        <input
          name='username'
          type='text'
          className='bg-white bg-opacity-80 border p-2 w-full text-black rounded'
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='password' className='text-lg text-[#F1F2F6]'>
          Password
        </label>
        <input
          name='password'
          type='text'
          className='bg-white bg-opacity-80 border p-2 w-full text-black rounded'
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          type='submit'
          className='w-full bg-orange-500 hover:bg-orange-600 cursor-pointer rounded p-2 text-white font-semibold text-lg'
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
