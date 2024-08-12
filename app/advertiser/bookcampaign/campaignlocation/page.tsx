import React from "react";
import { IoFilter } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";
import Link from "next/link";
const Locations = [
  {
    id: "Image 1",
    image: "https://placehold.co/600x400",
    description: "goodimage",
  },
  {
    id: "Image 1",
    image: "https://placehold.co/600x400",
    description: "goodimage",
  },
  {
    id: "Image 1",
    image: "https://placehold.co/600x400",
    description: "goodimage",
  },
  {
    id: "Image 1",
    image: "https://placehold.co/600x400",
    description: "goodimage",
  },
  {
    id: "Image 1",
    image: "https://placehold.co/600x400",
    description: "goodimage",
  },
  {
    id: "Image 1",
    image: "https://placehold.co/600x400",
    description: "goodimage",
  },
];

export default function page() {
  return (
    <div>
      <div className="flex justify-between m-5 items-center border-b-2 border-zinc-300 p-5">
        <h1 className="p-2 text-3xl ">Start a Campaign</h1>

        <div className="flex gap-3">
          <Link
            href={"/advertiser/bookcampaign/campaignlocation"}
            className="list-none border-b-2 border-black cursor-pointer hover:border-black p-2"
          >
            Location
          </Link>
          <Link
            href={"/advertiser/bookcampaign/campaigndesign"}
            className="list-none border-b-2 border-zinc-200 p-2 cursor-pointer hover:border-black"
          >
            Design
          </Link>
          <Link
            href={"/advertiser/bookcampaign/campaignreview"}
            className="list-none border-b-2 border-zinc-200 p-2 cursor-pointer hover:border-black"
          >
            Review
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-around">
        <div className="w-full">
          <div className="flex items-center m-3 gap-2">
            <input
              className="w-8/12 rounded-3xl"
              type="text"
              placeholder="search"
            />
            <IoFilter />
          </div>
          <div className="h-[500px] w-[500px] bg-pink-500"></div>
        </div>
        <div className="flex flex-col w-full gap-2 ">
          <div className="flex items-center justify-end gap-2 px-10 m-3">
            Filter
            <BsFilterLeft />
          </div>
          <div className="flex flex-col gap-3 overflow-hidden">
            {Locations.map((location) => (
              <div className="overflow-hidden  border-zinc-300 border-2 rounded-3xl ">
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="https://placehold.co/200x280"
                    alt="no image for this billboard"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      {location.id}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {location.description}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Availability
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      views
                    </p>
                    <button className="bg-black rounded-3xl px-5 text-white text-lg">
                      Add sign
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
