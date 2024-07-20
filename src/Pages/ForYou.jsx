import Navbar from "../Components/Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineSlideshow } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import ImageCard from "../Components/ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    image:
      "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.HVXYCjn4X9stb-HZtHeJjQHaFj?rs=1&pid=ImgDetMain",
  },
  
];

const ForYou = () => {
  return (
    <>
      <Navbar />
      <div className="py-4 px-14">
        <div className="flex justify-center gap-10">
          <p className="text-gray-400 text-xl">Following</p>
          <p className="text-black font-bold text-xl border-b-4 border-blue-500 ">
            For You
          </p>
          <p className="text-gray-400 text-xl">Explore</p>
        </div>
        <div className="flex justify-between gap-1">
          <div className="flex items-center">
            <p className="font-semibold">Daily dose</p>
            <RiArrowDropDownLine className="text-2xl mt-1 text-gray-500" />
          </div>
          <div className="flex justify-between gap-10">
            <div className="flex items-center gap-1">
              <p className="font-semibold">Slide show</p>
              <MdOutlineSlideshow className="text-gray-500" />
            </div>
            <div className="flex items-center gap-1 bg-blue-600 text-white p-2 rounded-md">
              <p>Layout</p>
              <LuLayoutGrid />
            </div>
          </div>
        </div>
        <div >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3}>
             {images.map((image) =><ImageCard image={image.image}/>)}
              
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};
export default ForYou;
