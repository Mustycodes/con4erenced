import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className='fixed w-full top-0 left-0 bg-white z-30'>
      <div className='flex justify-between py-4 max-w-[1100px] mx-auto'>
        <Link href='/' className='font-bold italic text-lg'>
          Con<span className='text-orange-600 font-extrabold text-2xl'>4</span>
          erenced
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
