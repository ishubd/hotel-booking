"use client";

import { useEffect, useState, useRef } from "react";

import axios from "axios";
import { useReactToPrint } from "react-to-print";

export default function Invoice() {
  const [booked, setBooked] = useState([] as any);

  useEffect(() => {
    axios.get("http://localhost:8000/api/current-booking").then((res) => {
      setBooked(res.data);
    });
  }, []);

  // for printing the invoice

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  try {
    return (
      <>
        <div
          ref={componentRef}
          className="container flex justify-center items-center mt-7"
        >
          <div className="border border-stone-100 shadow-md w-1/2 pt-6 pb-6">
            <div>
              <h1 className="font-bold text-center">Booked!</h1>
              <p className="font-thin text-center">Kumaripat, Lalitpur</p>
            </div>
            <div className="pt-6 pl-6">
              <p className="font-bold">Full Name</p>
              <p>{booked.fname}</p>
            </div>
            <div className="pt-6 pl-6">
              <p className="font-bold">Address</p>
              <p>{booked.address}</p>
            </div>
            <div className="pt-6 pl-6">
              <p className="font-bold">Contact</p>
              <p>{booked.contact}</p>
            </div>
            <div className="pt-6 pl-6">
              <p className="font-bold">Check in</p>
              <p>{booked.checkin}</p>
            </div>
            <div className="pt-6 pl-6">
              <p className="font-bold">Check out</p>
              <p>{booked.checkout}</p>
            </div>
            <div className="pt-6 pl-6">
              <p className="font-bold">Price</p>
              <p>{booked.price}</p>
            </div>
          </div>
        </div>
        <div className="container text-center mt-6">
          <button
            type="submit"
            onClick={handlePrint}
            className="w-20 bg-primary text-white border border-primary-400 py-2 px-1 rounded"
          >
            Print
          </button>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
