import { LiaCrownSolid } from "react-icons/lia";

const ProfileLicensing = () =>{
    return(
        <div className="  py-6  flex flex-col items-center justify-center gap-3 w-[600px]">
        <LiaCrownSolid className="text-6xl" />
        <p className="flex justify-center text-xl font-bold">
        Add Licensing photos
        </p>
        <p className="flex justify-center text-center text-base w-[400px] ">
        Submit your work to 500px Licensing and get paid for your work through our exclusive distribution partners. Your accepted photos will appear here!
        </p>
        <button className="px-16 py-2 border-2 border-blue-600 text-blue-500 rounded-3xl flex justify-center font-semibold text-lg">
          Upload Photos
        </button>
      </div>
    )
}
export default ProfileLicensing