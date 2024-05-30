import Link from "next/link";
import LoginForm from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <div className='flex min-h-screen bg-[#1C0221] text-slate-200'>
      <div className='flex-1 flex justify-center items-center'>
        <div className="text-white w-full md:w-3/5 flex flex-col space-y-4">
          <p className="text-5xl font-bold tracking-wide">Find all events <br /> around you</p>
          <p className="text-slate-300 ">Discover and book various events around you all from the comfort of your home</p>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <div className="bg-white bg-opacity-10 p-8 w-full md:w-3/5 rounded-lg shadow-lg">
          <h2 className='font-bold text-3xl mb-6 text-[#F1F2F6]'>Login to your account</h2>
          <LoginForm />
          <div className='mt-4'>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href='/sign-up' className='text-orange-500'>
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
