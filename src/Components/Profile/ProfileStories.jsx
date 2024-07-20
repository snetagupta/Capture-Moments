import { MdOutlineLinkedCamera } from "react-icons/md";

const ProfileStories =() =>{
    return(
        <div className="  py-6  flex flex-col items-center justify-center gap-4 w-[600px]">
        <MdOutlineLinkedCamera className="text-6xl" />
        <p className="flex justify-center text-xl font-bold">
        Share your experience with 500px
        </p>
        <p className="flex justify-center text-center text-base ">
        Show off your visual storytelling skills and take viewers on a journey by creating a photo story.
        </p>
        <button className="px-6 py-2 border bg-blue-600 text-white rounded-3xl flex justify-center font-semibold text-lg">
          Create a Story
        </button>
      </div>
    )
}
export default ProfileStories;