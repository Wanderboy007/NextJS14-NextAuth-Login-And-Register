"use client";
import React from "react";
import Image from "next/image";
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
    image: "http://zkdbkjzd",
    description: "goodimage",
  },
  {
    id: "Image 1",
    image: "http://zkdbkjzd",
    description: "goodimage",
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex justify-between m-5">
        <h1 className="p-2 ">Welcome,Ayush </h1>
        <Link
          href={"/advertiser/bookcampaign/campaignlocation"}
          className="bg-gray-600 p-2 px-5 rounded-3xl text-white text-lg m-3"
        >
          Start Advertising
        </Link>
      </div>
      <div className="grid grid-cols-3">
        {Locations.map((location) => (
          <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2">
              <img
                className="rounded-t-lg"
                src="https://placehold.co/400x400"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {location.id}
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  {location.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
