"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import NavLinks from "./NavLinks";
import Link from "next/link";

const MobileNavbar = () => {
  const [showMobileNav, setshowMobileNav] = useState(false);
  const toggleNavbar = () => {};
  return (
    <div className="relative">
      <button onClick={toggleNavbar} type='button' className='md:hidden'>
        <MdMenu className='text-3xl' />
      </button>
      <nav className="absolute right-0">
        <div>Hello Musty</div>
        <ul className='flex space-x-4'>
          <li>
            <Link className={"/all-events"} href='/all-events'>
              Find Events
            </Link>
          </li>
          <li>
            <Link className={"/create-event"} href='/create-event'>
              Create Event
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
