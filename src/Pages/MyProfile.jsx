import Navbar from "../Components/Navbar";
import { GrEdit } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import { useState } from "react";
import ProfilePhotos from "../Components/Profile/ProfilePhotos";
import ProfileGallaries from "../Components/Profile/ProfileGallaries";
import ProfileLicensing from "../Components/Profile/ProfileLicensing";
import ProfileStories from "../Components/Profile/ProfileStories";
import ProfileResume from "../Components/Profile/ProfileResume";

const MyProfile = () => {
  const [option, setOption] = useState(0);
  return (
    <>
      <Navbar />
      <div className="py-20 px-14">
        <div className="flex justify-center">
          <img src="https://pacdn.500px.org/userpic.png" />
        </div>
        <div className="flex gap-4 text-2xl justify-end">
          <GrEdit />
          <GoShareAndroid />
          <IoBagHandleOutline />
          <HiOutlineDotsHorizontal />
        </div>

        <p className="flex justify-center font-bold">Sneta Gupta</p>
        <div className="flex justify-center gap-3 font-semibold py-2">
          <p>1 Followers</p>
          <p>3 Following</p>
        </div>

        <div className="flex justify-center gap-5 py-4 text-xl font-semibold">
          <p
            className={`text-gray-500 transition-all duration-150 hover:text-blue-500 ${
              option === 0 && "border-b-2 border-blue-600 text-blue-600"
            }`}
            onClick={() => setOption(0)}
          >
            Photos
          </p>
          <p
            className={`text-gray-500 transition-all duration-150 hover:text-blue-500 ${
              option === 1 && "border-b-2 border-blue-600 text-blue-600"
            }`}
            onClick={() => setOption(1)}
          >
            Gallaries
          </p>
          <p
            className={`text-gray-500 transition-all duration-150 hover:text-blue-500 ${
              option === 2 && "border-b-2 border-blue-600 text-blue-600"
            }`}
            onClick={() => setOption(2)}
          >
            Licensing
          </p>
          <p
            className={`text-gray-500 transition-all duration-150 hover:text-blue-500 ${
              option === 3 && "border-b-2 border-blue-600 text-blue-600"
            }`}
            onClick={() => setOption(3)}
          >
            Stories
          </p>
          <p
            className={`text-gray-500 transition-all duration-150 hover:text-blue-500 ${
              option === 4 && "border-b-2 border-blue-600 text-blue-600"
            }`}
            onClick={() => setOption(4)}
          >
            Resume
          </p>
        </div>

        <div className="w-full h-full flex justify-center bg-slate-100 pt-6">
          {option === 0 ? (
            <ProfilePhotos />
          ) : option === 1 ? (
            <ProfileGallaries/>
          ) : option === 2 ? (
            <ProfileLicensing/>
          ) : option === 3 ? (
            <ProfileStories/>
          ) : option === 4 ? (
            <ProfileResume/>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default MyProfile;
