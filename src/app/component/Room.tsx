import { CiLocationOn } from "react-icons/ci";

import Image from "next/image";

import Fav from "@/app/favicon.ico";

export default function Room() {
  return (
    <>
      <div className="container border shadow-md mt-12 p-5">
        <div className="flex gap-3">
          <div>
            <Image src={Fav} width={200} height={200} alt="room" />
          </div>
          <div>
            <p className="font-semibold text-2xl text-header">Bag</p>
            <br />
            <p>
              Here in this section there will be any description available in
              the findings. To make searching easy we provide this feature to
              our user. Hope this will be helpful.
            </p>
            <br />
            <p>
              <CiLocationOn />
            </p>
            <br />
            <p>NPR</p>
          </div>
          <div>
            <button className="w-20 bg-primary text-white border border-primary-400 py-2 px-1 rounded mt-36">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
