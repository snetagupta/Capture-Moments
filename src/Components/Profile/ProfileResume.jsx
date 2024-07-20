import { IoDiamondOutline } from "react-icons/io5";

const ProfileResume =() =>{
    return(
        <div className=" bg-gray-950 text-white py-6  flex flex-col items-center justify-center gap-3 w-[650px] p-2">
        <IoDiamondOutline className="text-5xl" />
        <p className="flex justify-center text-xl font-semibold">Add Resume</p>
        <p className="flex justify-center text-center text-base">
        Show you're available for hire. List your years of experience, client testimonials, and specialties.
        </p>
        <p className="flex justify-center text-lg">
        You can set up your Resume, but need to Available to Hire search result to make it visible to the public and show up in the search results.
        </p>
        <button className="px-6 py-1 border bg-white text-black rounded-3xl flex justify-center font-semibold text-lg mt-2">
         Add a Resume
        </button>
        
      </div>

    )
}
export default ProfileResume;