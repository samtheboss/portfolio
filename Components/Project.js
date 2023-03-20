import Image from "next/image";
import {
  AiFillAccountBook,
  AiFillAndroid,
  AiOutlineGlobal,
} from "react-icons/ai";
import { android } from "../assets/android.jpg";
import Sliders from "./Sliders";

export default function Project() {
  return (
    <div>
      <p className="text-center font-extrabold">FIND OUT MY TOP SKILLS</p>
      <div className="flex items-center">
        {[
          {
            icon: android,
            title: "WEB DEVELOPMENT",
            text: "By using custom properties for our color themes, we can drastically reduce the amount of code we need to write, and alleviate the maintenance burden. Let’s first take a look at how we can do this in regular CSS. We define our custom properties as variables on the :root selector, making them global variables. ",
          },
          {
            icon: android,
            title: "ANDROID DEVELOPMENT",
            text: "By using custom properties for our color themes, we can drastically reduce the amount of code we need to write, and alleviate the maintenance burden. Let’s first take a look at how we can do this in regular CSS. We define our custom properties as variables on the :root selector, making them global variables. ",
          },
          {
            icon: android,
            title: "DESKTOP DEVELOPMENT",
            text: "By using custom properties for our color themes, we can drastically reduce the amount of code we need to write, and alleviate the maintenance burden. Let’s first take a look at how we can do this in regular CSS. We define our custom properties as variables on the :root selector, making them global variables. ",
          },
        ].map((o) => (
          <div className="flex-col shadow-xl items-center bg-slate-800 opacity-80 hover:bg-opacity-20 p-10 m-3 text-center rounded-xl">
            <img src={o.icon} alt="" />
            <h4 className="font-bold text-lg text-white hover:text-black">
              {o.title}
            </h4>
            <p className="text-md text-white hover:text-slate-900">{o.text}</p>
          </div>
        ))}
      </div>
      <Sliders />
    </div>
  );
}
