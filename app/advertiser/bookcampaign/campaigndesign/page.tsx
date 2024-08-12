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
            className="list-none border-b-2 border-black p-2 cursor-pointer hover:border-black"
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
      <div className="grid place-content-center m-20">
        <div>
          <h1 className="text-lg text-center ">
            You need a design to play with your Billboard
          </h1>
          <div className="flex flex-col items-center border-2 border-zinc-600 rounded-3xl m-5 p-5 gap-5">
            <h1>Designing Your Artwork?</h1>
            <p className="text-lg">
              Check your Board dimensions and upload artwork here
            </p>
            <button className=" bg-black rounded-3xl text-white p-2 px-5">
              upload
            </button>
          </div>
          <p className="text-lg text-center ">-or-</p>
          <p className="text-lg text-center cursor-pointer  underline ">
            Skip and upload later
          </p>
        </div>
      </div>
    </div>
  );
}
