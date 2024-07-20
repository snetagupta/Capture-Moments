import { TbLibraryPlus } from "react-icons/tb";

const ProfileGallaries = () => {
  return (
    <>
      <div className="  py-6  flex flex-col items-center justify-center gap-4 w-[600px]">
        <TbLibraryPlus className="text-6xl" />
        <p className="flex justify-center text-xl font-bold">
          Curate photos using Galleries
        </p>
        <p className="flex justify-center text-base ">
          Build a Gallery to show off your style or to keep track of what
          inspires you!
        </p>
        <button className="px-6 py-2 border bg-blue-600 text-white rounded-3xl flex justify-center font-semibold text-lg">
          Create a new Gallary
        </button>
      </div>
    </>
  );
};
export default ProfileGallaries;
