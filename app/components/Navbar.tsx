import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNavbar from "./MobileNavbar";



const Navbar = () => {

  return (
    <header className='fixed w-full top-0 left-0 z-20 bg-white'>
      <div className='flex justify-between items-center p-4 max-w-screen-xl lg:px-0 mx-auto'>
        <Link href='/' className='font-semibold italic text-lg flex-1'>
          Con<span className='text-orange-600 font-bold text-2xl'>4</span>
          erenced
        </Link>
       <MobileNavbar />
        <NavLinks />
      </div>
    </header>
  );
};

export default Navbar;
