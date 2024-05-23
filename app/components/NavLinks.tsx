"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const activeClass = "border-b-2 border-orange-600";

  const getClassStyle = (path: string) =>
    `${pathname === path ? activeClass : ""} pb-1`;

  return (
    <ul className='flex space-x-4'>
      <li>
        <Link className={getClassStyle("/all-events")} href='/all-events'>
          Find Events
        </Link>
      </li>
      <li>
        <Link
          className={getClassStyle('/create-event')}
          href='/create-event'
        >
          Create Event
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
