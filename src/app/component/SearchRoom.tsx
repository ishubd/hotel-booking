"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchRoom() {
  const router = useRouter();

  function handleSearch(e: any) {
    e.preventDefault();
    router.push("/room?q=" + e.target.name.value);
  }

  return (
    <>
      <div className="container flex justify-center items-center mt-7">
        <div className="border border-stone-100 shadow-md w-1/2 flex justify-center items-center pt-6 pb-6">
          <form className="w-[75%]" onSubmit={handleSearch}>
            <div>
              <label htmlFor="">Where</label>
              <br />
              <input
                type="text"
                name="name"
                className="border border-slate-400 w-full h-8 px-1"
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Check in</label>
              <br />
              <input
                type="date"
                name="date"
                className="border border-slate-400 w-full h-8"
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Check out</label>
              <br />
              <input
                type="date"
                name="date"
                className="border border-slate-400 w-full h-8"
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="w-20 bg-primary text-white border border-primary-400 py-2 px-1 rounded"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
