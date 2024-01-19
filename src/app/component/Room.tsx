"use client";

import Link from "next/link";
import axios from "axios";

import { CiLocationOn } from "react-icons/ci";

import Image from "next/image";

import Fav from "@/app/favicon.ico";
import { useEffect, useState } from "react";

export default function Room() {
  // Fetching data from database through api

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/data").then((res) => {
      setRooms(res.data);
    });
  }, []);

  try {
    return (
      <>
        {rooms.map((room: any): any => {
          return (
            <div
              key={room._id}
              className="container border shadow-md mt-12 p-5"
            >
              <div className="flex gap-3">
                <div>
                  <Image src={Fav} width={200} height={200} alt="room" />
                </div>
                <div>
                  <p className="font-semibold text-2xl text-header">
                    {room.name}
                  </p>
                  <br />
                  <p>
                    Type: {room.type}
                  </p>
                  <br />
                  <p>{room.description}</p>
                  <br />
                  <p>
                    <CiLocationOn className="inline" /> {room.location}
                  </p>
                  <br />
                  <p>NPR {room.price}</p>
                </div>

                <div className="absolute right-20">
                  <Link
                    href={{
                      pathname: "/booking",
                      query: { room: JSON.stringify(room) },
                    }}
                  >
                    <button className="w-20 bg-primary text-white border border-primary-400 py-2 px-1 rounded mt-36">
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
