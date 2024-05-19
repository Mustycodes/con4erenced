import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
          <h2>OOPS! This page was not Found</h2>
          <p>Could not find requested resource</p>
          <Link href='/'>Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
