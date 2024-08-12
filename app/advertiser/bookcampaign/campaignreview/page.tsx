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
      <form>
        <label htmlFor="campaignName">Campaign Name:</label>
        <input type="text" id="campaignName" name="campaignName" />
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" />
        <label htmlFor="expDate">Expiration Date:</label>
        <input type="text" id="expDate" name="expDate" placeholder="MM/YYYY" />
        <label htmlFor="locations">Locations:</label>  
        <input type="text" id="locations" name="locations" />
        <label htmlFor="designs">Designs:</label>
        <input type="text" id="designs" name="designs" />
        <div>
          <p>I'm not a robot</p>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
