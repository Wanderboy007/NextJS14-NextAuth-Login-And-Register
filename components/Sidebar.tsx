"use client";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <nav>
        <Link href="/advertiser/dashboard">Dashboard</Link>
      </nav>
    </>
  );
};
export default Sidebar;
