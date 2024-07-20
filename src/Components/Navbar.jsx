import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { GrSend } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { IoMdArrowUp } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-4 px-14 flex justify-between">
      <div className="flex items-center justify-between gap-6">
        <p className="text-2xl font-semibold">Capture-Moments</p>
        <p className="text-lg">Discover</p>
        <div className="flex items-center">
          <p className="text-lg">Licensing</p>
          <RiArrowDropDownLine className="text-2xl mt-1 text-gray-400" />
        </div>
        <p className="text-lg">Portfolio</p>
        <p className="text-lg">Memberships</p>
        <p className="font-bold text-xl">...</p>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center justify-between w-[300px] bg-gray-50 rounded-xl border-none">
          <input
            placeholder="Search power by AI"
            className="bg-gray-50 px-2 py-1 rounded-xl"
          />
          <IoSearchOutline className="mr-2" />
        </div>
        <LuUserCircle2 className="text-3xl mt-1 " />
        <GrSend className="text-3xl mt-1" />
        <GoBell className="text-3xl mt-1" />
        <div className="flex items-center justify-center gap-1 border border-black rounded-3xl px-2 py-1 ">
          <IoMdArrowUp className="text-2xl mr-1" />
          <button className="text-lg font-semibold mr-1">Upload</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
