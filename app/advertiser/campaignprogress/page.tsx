import React from "react";
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
];

export default function page() {
  return (
    <div>
      <div className="flex justify-between m-5 items-center">
        <div className="flex items-center">
          <h1 className="p-2 text-3xl ">Campaign</h1>
          <input type="text" placeholder="search" className="rounded-3xl" />
          <button className="bg-gray-600 p-2 px-5 rounded-3xl text-white text-lg m-3">
            search
          </button>
        </div>
        <div className="flex gap-3">
          <li className="list-none border-b-2 border-black cursor-pointer hover:border-black p-2">
            Active
          </li>
          <li className="list-none border-b-2 border-zinc-200 p-2 cursor-pointer hover:border-black">
            Archived
          </li>
          <li className="list-none border-b-2 border-zinc-200 p-2 cursor-pointer hover:border-black">
            Draft
          </li>
        </div>
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
