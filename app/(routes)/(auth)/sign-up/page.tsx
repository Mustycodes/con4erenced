"use client"
import Link from "next/link";
import React, { useState } from "react";

const SignUpPage = () => {
    const [signupData, setsignupData] = useState({ username: "", password: "" });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setsignupData((prevsignupData) => ({
          ...prevsignupData,
          [name]: value,
        }));
      };
      const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(signupData);
      };
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1'>Background HERE</div>
      <div className='flex-1 flex justify-center items-center'>
        <div>
          <h2 className='font-bold text-3xl mb-6'>Create an account</h2>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='username' className='text-lg text-gray-600'>
                Username
              </label>
              <input
                name='username'
                type='text'
                className='border p-2 border-gray-500 w-full rounded'
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='password' className='text-lg text-gray-600'>
                Password
              </label>
              <input
                name='password'
                type='text'
                className='border p-2 border-gray-500 w-full rounded'
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type='submit'
                className='w-full bg-orange-500 hover:bg-orange-600 cursor-pointer p-2 text-white font-semibold text-lg'
              >
                Login
              </button>
            </div>
          </form>
          <div className='mt-2'>
            <p>
              Remember your password?{" "}
              <Link href='/login' className='text-orange-500'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
