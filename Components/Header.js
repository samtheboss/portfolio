import Image from "next/image";
import React from "react";
import { GrTwitter } from "react-icons/gr";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.jpg";
import LINKEDIN from "../assets/LINKEDIN.png";
import github from "../assets/github.png";
import styles from "../styles/style.module.css";

export default function Header() {
  return (
    <div>
      <div className=" bg-center flex items-center bgimage">
        <div className="m-10">
          <div className="m-4">
            <a href="https://twitter.com/Smartdev_apps" target="_blank">
              <div className="flex w-[320px] rounded-r-lg justify-between bg-slate-300 bg-opacity-30 hover:bg-gray-200 transition duration-200 items-center">
                <p className=" p-2 font-mono text-xl font-bold text-white hover:text-sky-600">
                  FOLLOW ME ON TWITTER
                </p>
                <div className="bg-slate-200 rounded-r-lg p-2">
                  <Image src={twitter} alt="" className="bg-center w-10" />
                </div>
              </div>
            </a>
          </div>
          <div className="m-4">
            <a href="https://www.linkedin.com/in/smartappsdev" target="_blank">
              <div className="flex w-[320px] rounded-r-lg justify-between bg-slate-300 bg-opacity-30 hover:bg-gray-200 transition duration-200 items-center">
                <p className="p-2 font-mono text-xl font-semibold text-white hover:text-gray-900">
                  FOLLOW ME ON LINKEDIN
                </p>
                <div className="bg-slate-200 rounded-r-lg p-2">
                  <Image src={LINKEDIN} alt="" className="bg-center w-10" />
                </div>
              </div>
            </a>
          </div>
          <div className="m-4">
            <a href="" target="_blank">
              <div className="flex w-[320px] rounded-r-lg justify-between bg-opacity-30 bg-slate-300 hover:bg-gray-200 transition duration-200 items-center">
                <p className=" p-2 font-mono text-xl font-bold text-white hover:text-green-600">
                  LET'S CHAT ON WHATSAPP
                </p>
                <div className="bg-slate-200 rounded-r-lg p-2">
                  <Image src={whatsapp} alt="" className="bg-center w-10" />
                </div>
              </div>
            </a>
          </div>
          {/* {[].map(p=> <)} */}
          <div className="m-4 ">
            <a href="" target="_blank">
              <div className="flex w-[320px] rounded-r-lg justify-between bg-opacity-30 bg-slate-300 hover:bg-gray-200 transition duration-200 items-center">
                <p className="p-2 font-mono text-md font-semibold text-white hover:text-black">
                  MY PROJECTS ON GITHUB
                </p>
                <div className="bg-slate-200 rounded-r-lg p-2 bg-opacity-40">
                  <Image
                    src={github}
                    alt=""
                    className="bg-center w-10 rounded-full"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>{" "}
        <div className="hero h-[270px] w-screen bg-opacity-50 mr-10 bg-slate-400">
          kldfsldkfll
        </div>
      </div>

      <div className="h-[270px] w-screen bg-opacity-50 mr-10">
        <div className="h-[100px] bg-[#2596be]">
          <p> Hello </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          class="sp-arrow-down"
          style={{ height: "100px", width: "100vw" }}
        >
          <polygon fill="#2596be" points="0,0 100,0 50,60" />
          <path
            d="M0,10 L50,70 L100,10"
            stroke="var(--theme-color)"
            stroke-width="3"
            fill="transparent"
            stroke-linecap="square"
          />
        </svg>
      </div>
    </div>
  );
}
