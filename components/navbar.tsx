import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import { Search, Sun, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-black w-full h-[60px] fixed top py-3">
      <Container>
        <nav className="flex items-center justify-between px-4">
          <Link
            href="/"
            className="text-white text-2xl font-bold flex items-center"
          >
            <div className="w-8 h-8">
              <svg
                fill="#E4D804"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 338.044 338.045"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M269.016,0h-99.652c-13.583,0-30.204,9.476-37.122,21.164L59.188,144.599c-6.917,11.688-1.513,21.164,12.07,21.164h73.511 l-78.183,56.613c-11.007,7.962-8.911,14.423,4.672,14.423h43.061l-49.11,90.049c-6.506,11.919-3.123,14.777,7.551,6.371 l125.996-99.26c10.664-8.406,8.593-15.469-4.648-15.769c-13.229-0.3-23.962-0.553-23.962-0.553l82.798-75.837 c10.016-9.176,7.127-16.369-6.456-16.066l-76.342,1.696L276.499,17.666C285.95,7.908,282.599,0,269.016,0z"></path>{" "}
                  </g>
                </g>
              </svg>
            </div>
            AnimeList
          </Link>
          <div className="relative uppercase font-bold text-sm items-center gap-48 hidden lg:flex">
            <div className="text-white flex gap-8 items-center">
              <div>Anime</div>
              <div>Anime</div>
              <div>Anime</div>
              <div>Anime</div>
            </div>

            <div className="flex items-center">
              <input className="bg-white text-sm w-full h-[30px] rounded-full p-3" placeholder="Search"/>
              <Search className="w-6 h-6 absolute right-2"/>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-white py-1 px-1 rounded-full mr-2">
              <Sun className="w-6 h-6" />
            </div>

            <Link href="/">
              <div className="bg-white py-1 px-1 rounded-full">
                <User className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
