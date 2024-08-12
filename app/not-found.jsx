"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const location = useRouter();

  return (
    <section className="bg-white rounded  w-full h-[90%] overflow-hidden">
      <div className="container  h-full px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-indigo-500 ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 ">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            {/* go back to previous opened page */}
            <button
              onClick={() => location.back()}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded gap-x-2 sm:w-auto hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  strokelinecap="round"
                  strokelinejoin="round"
                ></path>
              </svg>
              <span>Go back</span>
            </button>
            <Link
              href={"/"}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-gray-50 transition-colors duration-200 bg-indigo-500 rounded shrink-0 sm:w-auto hover:bg-indigo-600 "
            >
              Take me home
            </Link>
          </div>
        </div>
        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            alt=""
            className="w-full max-w-lg lg:mx-auto"
            src="https://merakiui.com/images/components/illustration.svg"
          />
        </div>
      </div>
    </section>
  );
}
