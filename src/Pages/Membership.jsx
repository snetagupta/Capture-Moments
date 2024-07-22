import { PiSunglasses } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { GrUploadOption } from "react-icons/gr";
import Footer from "../Components/Footer";
import MembershipCard from "../Components/MembershipCard";
import { annual } from "../Data/AnnualData";
const Membership = () => {
  return (
    <div className="px-16">
      <div className="flex justify-between items-center bg-black">
        <div className=" flex flex-col gap-6">
          <p className="text-4xl font-bold text-white ">
            Unlock <span className="text-sky-400">20% Off</span> & Transform
            Your Photography
          </p>
          <p className="text-white text-xl w-[350px]">
            Get unlimited uploads, uncompressed storage, and insights that
            matter. Elevate your photography and connect with a global audience.
          </p>
          <button className="text-sky-400 font-bold text-xl border-2 border-sky-400 px-4 py-2 w-[200px] rounded-3xl">
            Upgrade Now
          </button>
        </div>
        <div>
          <img
            className="w-[1000px]"
            src="https://live.staticflickr.com/41/82542297_a47e8f5b3b.jpg"
          />
        </div>
      </div>
      <p className="text-4xl py-10 px-16 font-bold">What you get</p>

      <div className="flex justify-between items-center gap-6 px-16 mt-10">
        <div className="flex flex-col gap-4 flex-1">
          <IoIosStats className="text-4xl" />
          <p className="text-3xl font-bold">
            Get data insights to inform your work
          </p>
          <p className="text-xl w-[640px]">
            Learn where your photo views are coming from, which of your photos
            get the most likes and comments, how people are finding your work,
            and more.
          </p>
          <p className="font-bold">Included with</p>
          <div className="flex items-center gap-6">
            <div className="flex bg-sky-400 text-black py-1 px-4">
              <PiSunglasses className="mt-1.5" />
              <button className="font-semibold">Awesome</button>
            </div>
            <div className="flex items-center justify-between bg-black text-white py-1 px-3">
              <IoDiamondOutline />
              <button className="font-semibold">Pro</button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            className=""
            src="https://500px.com/static/media/insights.6f0d4093.png"
          />
          <p className="text-end text-xs">Photo by Bryson LaMunyon</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-6 px-16 mt-10">
        <div className="flex-1">
          <img
            className=""
            src="https://500px.com/static/media/upload.7000961e.png"
          />
          <p className=" text-xs">Photo by Amanda Carlson</p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <GrUploadOption className="text-4xl" />
          <p className="text-3xl font-bold">
            Upload as many photos as you want
          </p>
          <p className="text-xl w-[640px]">
            Want to share a large series or test multiple versions of your
            photos? With unlimited uploads, you can add many images as you’d
            like—the only limit is your creativity.
          </p>
          <p className="font-bold">Included with</p>
          <div className="flex items-center gap-6">
            <div className="flex bg-sky-400 text-black py-1 px-4">
              <PiSunglasses className="mt-1.5" />
              <button className="font-semibold">Awesome</button>
            </div>
            <div className="flex items-center justify-between bg-black text-white py-1 px-3">
              <IoDiamondOutline />
              <button className="font-semibold">Pro</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-12">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold">
              Start Your 30-Day Free Trial + Limited Time Offer
            </p>
            <p>
              Unlock a month of premium access completely free and enjoy the
              full benefits of a 500px membership after your trial. Now is the
              perfect opportunity to explore all that 500px has to offer.
            </p>
          </div>
          <div className="flex justify-center gap-8 my-8">
            <p className="text-xl font-bold border-b-2">Annual</p>
            <p className="text-xl font-bold">Monthly</p>
          </div>
          <div className="flex justify-center gap-6">
            {annual.map((data, id) => (
              <div key={id}>
                <MembershipCard annual={data} />
              </div>
            ))}
          </div>
          <div className="py-12">
          <p className="font-bold text-2xl py-6 px-2">Common questions</p>
          <div className="flex justify-between gap-8">
            
            <div className="flex-1 flex flex-col gap-6">
              <div >
                <p className="font-bold text-xl">What is your refund policy?</p>
                <p className="text-gray-600 text-[17px]">
                  You can request a full refund for your yearly subscription
                  payment within 30 days of initial purchase for Awesome and Pro
                  memberships on your account settings page. We're unable to
                  provide refunds for monthly payments, or auto-renewal
                  payments. For more information on our refund policy, please
                  refer to our <span>Terms of Service.</span>
                </p>
              </div>
              <div>
                <p className="font-bold text-xl">Can I switch my membership level?</p>
                <p className="text-gray-600 text-[17px]">
                  Yep! You can upgrade to a higher membership tier at any time.
                  If you are interested in downgrading, we can change your plan
                  within 30 days of purchase, or you can wait until it expires.
                  Just contact us at <span>500px Support.</span>
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
            <div>
                <p className="font-bold text-xl">What types of payment do you support?</p>
                <p className="text-gray-600 text-[17px]">
                We currently accept Paypal, Visa, MasterCard, and American Express credit cards.
                </p>
              </div>
              <div>
                <p className="font-bold text-xl">Can I deactivate my account?</p>
                <p className="text-gray-600 text-[17px]">
                Absolutely, you can close your account in your <span>Settings.</span> For a step-by-step guide on how to do so, please visit this Support article:<span> How do I close my account?</span>
                </p>
              </div>
              <div>
                <p className="font-bold text-xl">Still have a question?</p>
                <p className="text-gray-600 text-[17px]">
                Check out our <span>Support Center</span> for more information, plus, tips and tricks on how to make the most of 500px and level-up your photography.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Membership;
