import { FaFacebookF,FaTwitter,FaPinterestP  } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className=" px-14 py-4">
      <div className="flex justify-between gap-4 text-gray-500">
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-gray-600 font-semibold">Company</p>
         
          <p className="text-lg">Newsroom</p>
          <p className="text-lg">About us</p>
          <p className="text-lg"> careers</p>
        </div>
        <div className="flex flex-col gap-4">
          <p  className="text-2xl text-gray-600 font-semibold">Community</p>
          <p className="text-lg">Popular photos</p>
          <p className="text-lg">Editors' Choice</p>
          <p className="text-lg">Quests</p>
          <p className="text-lg">Portfolio</p>
        </div>
        <div className="flex flex-col gap-4">
          <p  className="text-2xl text-gray-600 font-semibold"> Licensing</p>
          <p className="text-lg">About Licensing</p>
          <p className="text-lg">Become a Contributor</p>
          <p className="text-lg">Submission requirements</p>
          <p className="text-lg">Content types</p>
          <p className="text-lg">Distribution</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <p  className="text-2xl text-gray-600 font-semibold"> Social</p>
          </div>
          <div className="flex items-center gap-2">
            <FaFacebookF className="text-start"/>
            <p className="text-lg">Facebook</p>
          </div>
          <div className="flex items-center gap-2">
            <FaTwitter/>
            <p className="text-lg"> Twitter</p>
          </div>
          <div className="flex items-center gap-2">
            <TiSocialInstagram/>
            <p className="text-lg"> Instagram</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPinterestP/>
            <p className="text-lg">Pinterest</p>
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <p  className="text-2xl text-gray-600 font-semibold">Download the app</p>
          <div className="flex gap-2">
            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" className="w-[120px] object-cover"/>
            <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/get-it-on-google-play-google-play-badge-png-logos-23.png" className="w-[120px] object-cover " />
          </div>
        </div>
      </div>
      <p className="border-b-2 mt-16"></p>
      <div className="flex justify-between text-gray-500 py-4">
        <p  className="text-xl text-gray-600 font-semibold">© 500px</p>
        <div className="flex gap-4">
          <p className="text-lg">Terms</p>
          <p className="text-lg">Privacy</p>
          <p className="text-lg">Support</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
