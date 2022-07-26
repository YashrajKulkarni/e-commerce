import React from "react";

function Offers() {
  return (
      <div className="bg-neutral-50 grid grid-rows-2 grid-cols-4 gap-4 mx-4 mt-4 place-items-stretch">
        <div className="relative bg-neutral-50 col-span-4 sm:col-span-2  md:col-span-1">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1577375774296-1480089cb555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cm9uaWNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />

          <button className="absolute rounded-lg h-fit w-fit px-4 py-1 left-0 right-0 top-0 bottom-0 m-auto bg-white text-black text-2xl font-bold">
            ELECTRONICS
          </button>
        </div>

        <div className="relative bg-neutral-50 col-span-4 sm:col-span-2  md:col-span-1 row-span-2 ">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1600593830144-a29f2855730e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1600&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLG5ld3x8fHx8fDE2NTY4MzgwOTg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />

          <button className="absolute rounded-lg h-fit w-fit px-4 py-1 left-0 right-0 top-0 bottom-0 m-auto bg-white text-black text-2xl font-bold">
            NATURE
          </button>
        </div>

        <div className="relative bg-neutral-50 col-span-4 sm:col-span-2  md:col-span-1">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1613447326896-c7b8a0ab9b43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="Men Image"
          />

          <button className="absolute rounded-lg h-fit w-fit px-4 py-1 left-0 right-0 top-0 bottom-0 m-auto bg-white text-black text-2xl font-bold">
            MEN
          </button>
        </div>

        <div className="relative bg-neutral-50 col-span-4 sm:col-span-2  md:col-span-1">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1633821879282-0c4e91f96232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="Women Image"
          />

          <button className="absolute rounded-lg h-fit w-fit px-4 py-1 left-0 right-0 top-0 bottom-0 m-auto bg-white text-black text-2xl font-bold">
            WOMEN
          </button>
        </div>

        <div className="relative bg-neutral-50 col-span-4 sm:col-span-2  md:col-span-1">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />

          <button className="absolute rounded-lg h-fit w-fit px-4 py-1 left-0 right-0 top-0 bottom-0 m-auto bg-white text-black text-2xl font-bold">
            COSMETICS
          </button>
        </div>

        <div className="relative bg-neutral-50 col-span-4 md:col-span-2">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1560375998-d4bfe216430f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80"
            alt="ACc"
          />

          <button className="absolute rounded-lg h-fit w-fit px-4 py-1 left-0 right-0 top-0 bottom-0 m-auto bg-white text-black text-2xl font-bold">
            ACCESSORIES
          </button>
        </div>
      </div>
  );
}

export default Offers;
