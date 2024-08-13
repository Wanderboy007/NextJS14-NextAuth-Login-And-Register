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
            className="list-none border-b-2 cursor-pointer border-zinc-200 hover:border-black p-2"
          >
            Location
          </Link>
          <Link
            href={"/advertiser/bookcampaign/campaigndesign"}
            className="list-none border-b-2 cursor-pointer border-zinc-200 hover:border-black p-2"
          >
            Design
          </Link>
          <Link
            href={"/advertiser/bookcampaign/campaignreview"}
            className="list-none border-b-2 border-black p-2 cursor-pointer hover:border-black"
          >
            Review
          </Link>
        </div>
      </div>
      <form className="flex w-full gap-5">
        <div className="flex flex-col w-full">
          <div className="flex flex-col m-5">
            <label htmlFor="campaignName">Campaign Name:</label>
            <input
              className="rounded-xl"
              type="text"
              id="campaignName"
              name="campaignName"
            />
          </div>
          <div className="flex flex-col m-5">
            <div className="flex justify-between">
              <h1>Location</h1>
              <Link
                className="text-blue-500 text-sm"
                href={"/advertiser/bookcampaign/campaignlocation"}
              >
                Edit
              </Link>
            </div>
            <div className="text-lg">Location 112D</div>
          </div>
          <div className="flex flex-col m-5">
            <div className="flex justify-between">
              <h1>Design</h1>
              <Link
                className="text-blue-500 text-sm"
                href={"/advertiser/bookcampaign/campaigndesign"}
              >
                Edit
              </Link>
            </div>
            <div className="h-[80px] w-[80px] bg-pink-500"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <label htmlFor="name">Name:</label>
          <input className="rounded-xl" type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input className="rounded-xl" type="Email" id="email" name="email" />
          <div className="text-center">
            <input
              className="bg-black w-1/3 rounded-3xl px-5 py-2 text-white"
              type="submit"
              value="Save"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
