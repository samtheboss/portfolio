import Navbaritems from "./Navbaritems";

import { AiFillHome } from "react-icons/ai";
import { FcContacts, FcDocument } from "react-icons/fc";
import loogos from "../assets/loogos.png";

import { ImCart } from "react-icons/im";
import { SiBloglovin, SiGnuprivacyguard } from "react-icons/si";
import Image from "next/image";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

export default function NavBar() {
  return (
    <div className="flex items-center h-20 w-full shadow-slate-400 shadow-lg z-[100] bg-[#ffffff] pt-2 pb-2 justify-between pr-10 mt-1 mb-1 sticky top-0">
      <Image src={loogos} alt="" className="w-[10rem] rounded-full " />
      <div className="flex items-center space-x-2 justify-end">
        <div className="bg-[#d2d7da] rounded-full items-center">
          <Navbaritems title="{ HOME }" Icon={AiFillHome} />
        </div>
        <div className="">
          <Navbaritems title="About" Icon={SiBloglovin} />
        </div>
        <div className="font-semibold">
          <Navbaritems title="Skills" Icon={GiSkills} />
        </div>
        <Navbaritems title="Contact" Icon={FcContacts} />
        <Navbaritems title="Projects" Icon={GrProjects} />

        <Navbaritems title="Resume" Icon={FcDocument} />
        <div className=" w-28 bg-sky-600 rounded-full items-center">
          <Navbaritems title="Sign Up" Icon={SiGnuprivacyguard} />
        </div>
      </div>
    </div>
  );
}
