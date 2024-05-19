"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const activeClass = "border-b-2 border-orange-600";

  return (
    <ul className='flex space-x-4'>
      <li>
        <Link className={`${pathname === "/" ? activeClass : ""} pb-1`} href='/'>Home</Link>
      </li>
      <li>
        <Link className={`${pathname === "/all-events" ? activeClass : ""} pb-1`} href='/all-events'>All Events</Link>
      </li>
      <li>
        <Link
          className={`${pathname === "/create-event" ? activeClass : ""} pb-1`}
          href='/create-event'
        >
          Create Event
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
