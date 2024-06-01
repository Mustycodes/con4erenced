import Link from "next/link";
import LoginForm from "../_components/LoginForm";
import Wrapper from "@/app/components/ui/Wrapper";

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen overflow-auto lg:overflow-hidden bg-[#1C0221] text-slate-200'>
      <Wrapper className="px-6 py-6 lg:p-0 flex flex-col lg:flex-row">
        <div className='flex-1 flex justify-center items-center mb-12'>
          <div className='text-white text-center lg:text-left w-full md:w-3/5 flex flex-col space-y-4'>
            <p className='text-4xl lg:text-5xl font-bold tracking-wide'>
              Find all events <br /> around you
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
            <h2 className='font-bold text-2xl lg:text-3xl mb-6 text-[#F1F2F6]'>
              Login to your account
            </h2>
            <LoginForm />
            <div className='mt-4'>
              <p className='text-xs lg:text-sm'>
                Don't have an account?{" "}
                <Link href='/sign-up' className='text-orange-500'>
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LoginPage;
