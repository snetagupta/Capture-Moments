import { FaCheck } from "react-icons/fa6";

const MembershipCard = ({annual}) => {
  return (
<div className=" flex flex-col items-center justify-center ">
      <div className="w-[350px] px-4 py-2 shadow-xl rounded-md ">
        <div className="flex justify-between font-semibold">
        <p className="text-lg ">{annual.heading1}</p>
        <div className="flex gap-2">
        <p className="bg-gray-400 px-2 rounded-sm">$47.90</p>
        <p className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-2 rounded-sm">{annual.heading2}</p>
        </div>
        </div>
        <p className="bg-blue-100 pl-1 pr-4 my-2 rounded">{annual.para}</p>
        {annual.pHeading.map((p) =>
        <div className="flex gap-2 border-b pb-2">
            <FaCheck className="text-green-600 mt-2"/>
        <p className="text-gray-600 text-[15px]"><span className="font-bold ">{p.title}:</span> {p.description}</p>
        </div>
)}
        
      </div>
      <button className="text-white bg-blue-600 py-2 px-24 rounded-3xl mt-4 ">{annual.button}</button>
      </div>
  );
};
export default MembershipCard;
