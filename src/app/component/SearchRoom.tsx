
// "use client";
import { useState } from "react";
// import axios from "axios";

export default function SearchRoom() {
  // Typescript implementation
//   interface FormData {
//     name: string;
//     author: string;
//     genre: string;
//     user: string;
//     date: any;
//     stock: number;
//     price: number;
//   }

//   let data_value = {} as FormData;

//   const [data, setData] = useState(data_value);

//   function handleChange(e: any) {
//     setData({ ...data, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e: any) {
//     e.preventDefault();
//     axios.post("http://localhost:8000/api/data", {
//       name: data.name,
//       author: data.author,
//       genre: data.genre,
//       user: data.user,
//       date: data.date,
//       stock: data.stock,
//       price: data.price,
//     });
//   }

  return (
    <>
      <div className="flex justify-center items-center mt-7">
        <div className="border border-stone-100 shadow-md w-1/2 flex justify-center items-center pt-6 pb-6">
          <form action="" className="w-[75%]">
            <div>
              <label htmlFor="">Where</label>
              <br />
              <input
                type="text"
                name="name"
                // value={data.name}
                // onChange={handleChange}
                className="border border-slate-400 w-full h-8"
              />
            </div>
            <br />
            <div>
              <label htmlFor="">Check in</label>
              <br />
              <input
                type="date"
                name="date"
                // value={data.date}
                // onChange={handleChange}
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
                // value={data.date}
                // onChange={handleChange}
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
