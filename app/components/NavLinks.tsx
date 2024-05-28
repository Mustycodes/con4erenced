"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const activeClass = "border-b-2 border-orange-600";

  const getClassStyle = (path: string) =>
    `${pathname === path ? activeClass : ""} pb-1`;

  return (
    <nav className='hidden md:flex md:items-center md:space-x-14'>
      <ul className='flex space-x-4'>
        <li>
          <Link className={getClassStyle("/all-events")} href='/all-events'>
            Find Events
          </Link>
        </li>
        <li>
          <Link className={getClassStyle("/create-event")} href='/create-event'>
            Create Event
          </Link>
        </li>
      </ul>
      <div className='flex space-x-4 items-center'>
        <Link href='/sign-up' className="button bg-white border-2 border-orange-500 py-2 px-4 text-orange-500 rounded ">Create Account</Link>
        <Link href='/login' className="button bg-orange-500 py-2 px-4 text-white rounded ">Login</Link>
      </div>
    </nav>
  );
};

export default NavLinks;
