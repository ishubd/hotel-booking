import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="bg-primary text-white  p-3">
          <div className="container flex justify-between">
            <ul className="md: flex gap-3">
              <li>
                <a href="mailto: abc@info.com">
                  <CiMail className="inline" /> abc@info.com
                </a>
              </li>
              <li>
                <a href="tel: 123456789">
                  <BsTelephone className="inline" />
                  123456789
                </a>
              </li>
            </ul>
            {/* <ul className="md: flex gap-3">
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/cart"}>
                  <CiShoppingCart />
                </Link>
              </li>
            </ul> */}
          </div>
        </nav>
        <nav className="container text-center md: flex justify-between p-7">
          <Link href={"/"} className="text-4xl font-bold  text-header">
            Booked!
          </Link>
          <ul className="flex gap-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/room"}>Room</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
