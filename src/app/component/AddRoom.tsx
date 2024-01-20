"use client";
import axios from "axios";

import { useRouter } from "next/navigation";

import { useState } from "react";

// import axios from "axios";

export default function AddRoom() {
  // Typescript implementation
  interface RoomData {
    name: string;
    description: string;
    type: string;
    location: string;
    price: number;
  }

  let room_value = {} as RoomData;

  const [room, setRoom] = useState(room_value);

  const router = useRouter();

  function handleChange(e: any) {
    setRoom({ ...room, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    axios.post("http://localhost:8000/api/data", {
      name: room.name,
      description: room.description,
      type: room.type,
      location: room.location,
      price: room.price,
    });
    router.push("/room");
  }

  return (
    <>
      <div className="container flex justify-center items-center mt-16">
        <div className="border border-stone-100 shadow-md w-1/2 flex justify-center items-center pt-6 pb-6">
          <form
            action=""
            className="w-[75%]"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <label htmlFor="">Hotel</label>
              <br />
              <input
                type="text"
                name="name"
                value={room.name}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Description</label>
              <br />
              <input
                type="text"
                name="description"
                value={room.description}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Type</label>
              <br />

              <select
                name="type"
                value={room.type}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
              >
                <option value=""></option>
                <option value="Deluxe">Deluxe</option>
                <option value="Twin">Twin</option>
                <option value="Connecting Room">Others</option>
              </select>
            </div>
            <br />
            <div>
              <label htmlFor="">Location</label>
              <br />
              <input
                type="text"
                name="location"
                value={room.location}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Price</label>
              <br />
              <input
                type="number"
                min="0.00"
                step="100"
                name="price"
                value={room.price}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Image</label>
              <br />
              <input
                type="file"
                name="images"
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="w-20 bg-primary text-white border border-primary-400 py-2 px-1 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
