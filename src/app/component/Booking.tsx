"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

import axios from "axios";

export default function Booking() {
  const searchParams = useSearchParams();
  const room: any = searchParams.get("room");
  const data = JSON.parse(room);
  const router = useRouter();

  // Typescript implementation

  interface BookingData {
    fname: string;
    address: string;
    contact: string;
    gender: string;
    room: number;
    checkin: any;
    checkout: any;
    price: number;
    room_id: string;
  }

  let book_value = {} as BookingData;

  const [booking, setBooking] = useState(book_value);

  function handleChange(e: any) {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    axios.post("http://localhost:8000/api/booking", {
      fname: booking.fname,
      address: booking.address,
      contact: booking.contact,
      gender: booking.gender,
      room: unchange_name,
      checkin: booking.checkin,
      checkout: booking.checkout,
      price: unchange_price,
      room_id: data._id,
    });
    router.push("/invoice");
  }

  const [unchange_name, setUnchangeName] = useState(data.name);
  const [unchange_price, setUnchangePrice] = useState(data.price);

  return (
    <>
      <div className="flex justify-center items-center mt-16">
        <div className="border border-stone-100 shadow-md w-1/2 flex justify-center items-center pt-6 pb-6">
          <form action="" className="w-[75%]" onSubmit={handleSubmit}>
            <p className="font-bold">Customer details</p>
            <br />
            <div>
              <label htmlFor="">Full name</label>
              <br />
              <input
                type="text"
                name="fname"
                value={booking.fname}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Address</label>
              <br />
              <input
                type="text"
                name="address"
                value={booking.address}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Contact no.</label>
              <br />
              <input
                type="number"
                name="contact"
                value={booking.contact}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Gender</label>
              <br />
              <select
                name="gender"
                value={booking.gender}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
              >
                <option value=""></option>
                <option value="female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <br />
            <div>
              <label htmlFor="">Room name</label>
              <br />
              <input
                type="text"
                name="room"
                value={unchange_name}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Check In</label>
              <br />
              <input
                type="date"
                name="checkin"
                value={booking.checkin}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Check Out</label>
              <br />
              <input
                type="date"
                name="checkout"
                value={booking.checkout}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Price</label>
              <br />
              <input
                type="number"
                min="0.00"
                step="50"
                name="price"
                value={unchange_price}
                onChange={handleChange}
                className="border border-slate-400 w-full h-8"
                required
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="w-20 bg-primary text-white border border-primary-400 py-2 px-1 rounded"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
