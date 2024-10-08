"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Md10K } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";

const sidebarItems = [
  {
    name: "Dashboard",
    url: "/advertiser/dashboard",
    icon: (
      <MdDashboard className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
    ),
    userType: "mediaOwner",
  },
  {
    name: "Book Campaign",
    url: "/advertiser/bookcampaign/campaignlocation",
    icon: (
      <TbTargetArrow className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" />
    ),
    userType: "mediaOwner",
  },
  {
    name: "Campaign Progress",
    url: "/advertiser/campaignprogress",
    icon: (
      <MdOutlineDesignServices className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" />
    ),
    userType: "mediaOwner",
  },
  {
    name: "Contact Support",
    url: "/advertiser/dashboard",
    icon: (
      <BiSupport className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" />
    ),
    userType: "mediaOwner",
  },
];

export default function Navbar({ children }) {
  const pathname = usePathname();
  if (
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname === "/"
  )
    return children;
  return (
    <div className="w-screen h-full">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  light:hover:bg-gray-700 light:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 light:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap light:text-white">
              Flowbite
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((sidebarItem) => (
              <li>
                <Link
                  href={sidebarItem.url}
                  className="flex items-center p-2 text-gray-900 rounded-lg light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group"
                >
                  {sidebarItem.icon}
                  <span className="ms-3">{sidebarItem.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 ">{children}</div>
    </div>
  );
}
