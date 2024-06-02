"use client";
import Wrapper from "@/app/components/ui/Wrapper";
import Link from "next/link";
import React, { useState } from "react";
import SignUpForm from "../_components/SignUpForm";

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
    <div className='flex justify-center items-center min-h-screen overflow-auto lg:overflow-hidden bg-[#1C0221] text-slate-200'>
      <Wrapper className='px-6 py-6 lg:p-0 flex flex-col lg:flex-row'>
        <div className='flex-1 flex justify-center items-center mb-12'>
          <div className='text-white text-center lg:text-left w-full md:w-3/4 flex flex-col space-y-4'>
            <p className='text-4xl font-bold tracking-wide'>
             Create an account and <br /> start networking 
            </p>
            <p className='text-sm lg:text-base text-slate-300 '>
              Discover and book various events around you all from the comfort
              of your home. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ex, dolorem
            </p>
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='bg-white bg-opacity-10 p-6 md:p-8 w-full lg:min-w-[400px] max-w-[500px] lg:w-3/5 rounded-lg shadow-lg'>
            {/* <h2 className='font-bold text-2xl lg:text-3xl mb-6 text-[#F1F2F6]'>
              Create an account
            </h2> */}
            <SignUpForm />
            <div className='mt-4'>
              <p className='text-xs lg:text-sm'>
                Remember your password?{" "}
                <Link href='/login' className='text-orange-500'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SignUpPage;
