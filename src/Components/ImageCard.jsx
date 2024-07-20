import { FaCircleUser,FaRegHeart } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


const ImageCard = ({image}) =>{
    return(
       <div className="py-6">
        <div className="relative ">
            <div className="">
            <img className="rounded-md" src={image}/>
            </div>
            <div className="flex justify-between absolute bottom-1 w-full px-4">
            <div className="flex gap-2 items-center text-white">
             <FaCircleUser className="text-xl"/>
            <p className="text-xl">Avinash Yede</p>
            </div>
            <div className="flex items-center gap-6 ">
           <FaRegHeart className="text-white text-xl"/>
           <p className="font-semibold text-white mb-4 text-xl"><HiOutlineDotsHorizontal/></p>      
            </div>

            </div>

            </div>
        </div>

    )
}
export default ImageCard