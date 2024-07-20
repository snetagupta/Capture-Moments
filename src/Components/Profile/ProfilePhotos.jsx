import { IoDiamondOutline } from "react-icons/io5";

const ProfilePhotos = () => {
  return (
    <div className=" bg-gray-950 text-white py-6  flex flex-col items-center justify-center gap-2 w-[600px]">
      <IoDiamondOutline className="text-5xl" />
      <p className="flex justify-center text-xl font-semibold">Get unlimited uploads</p>
      <p className="flex justify-center text-lg">
        You have 21 uploads remaining until end of day Jul 19, 2024.
      </p>
      <button className="px-6 py-1 border bg-white text-black rounded-3xl flex justify-center font-semibold text-lg mt-2">
        Upgrade membership
      </button>
      <button className="px-12 py-1 border border-white rounded-3xl flex justify-center font-semibold text-lg ">
        Upload photos
      </button>
    </div>
  );
};
export default ProfilePhotos;
