import Navbar from "../Components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LogIn = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 h-screen flex justify-center items-center ">
        <div className="flex flex-col items-center h-fit  w-[500px] bg-white py-8 border gap-6">
          <p className="font-semibold text-2xl">Log in to 500px</p>
          <div className="flex flex-col mt-4">
            <label className="text-gray-500">Email or Username*</label>
            <input placeholder="" className="border w-[350px] py-2"/>
          </div>
          <div>
            <div className="flex justify-between gap-4">
              <label className="text-gray-500">Password*</label>
              <label className="text-blue-500">Forgot password?</label>
            </div>
            <input placeholder="" className="border w-[350px] py-2" />
          </div>
          <button className="bg-blue-600 text-white font-semibold text-lg py-2 px-24 rounded-3xl  w-[350px]">Log in</button>

         
          <button className="bg-blue-950 text-white font-semibold text-lg py-2 px-2 rounded-3xl flex items-center gap-20 w-[350px] mt-4"><FaFacebook className="text-xl text-white ml-2"/> Log in with facebook</button>
          <button className=" text-gray-500 border-2 font-semibold text-lg py-2 px-2 rounded-3xl flex items-center gap-20  w-[350px]"><FcGoogle className="text-xl ml-2"/>Log in with google</button>

          <p className="text-gray-500 mt-4">Don't have an account? <span className="text-blue-500">Sign up</span></p>
        </div>
      </div>
    </>
  );
};
export default LogIn;
