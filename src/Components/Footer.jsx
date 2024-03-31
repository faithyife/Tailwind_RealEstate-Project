import { MdOutlinePhoneEnabled, MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#eceffd]">
        <div className="Footer py-[5rem] flex items-center justify-center">
          <div className="flex gap-[8rem]">
            <div className="footerContainer flex flex-col items-start justify-start gap-[1rem]">
              <div className="house flex items-center justify-center gap-2 cursor-pointer">
                <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#03AEFD] rounded-full">
                  <img
                    className="w-[16px] h-[16px]"
                    src="./houselogo.png"
                    alt="House Logo"
                  />
                </div>
                <p className="font-Poppins font-[600]">Rezilla</p>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p className="mb-7">
                  2728 Hickory StreetSalt ,<br /> Lake City, UT 84104
                </p>
                <div className="flex items-center gap-2">
                  <MdOutlinePhoneEnabled />
                  <span>+1206-214-2298</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineEmail />
                  <span>support@rezilla.com</span>
                </div>
              </div>
            </div>

            <div className="links flex flex-col gap-4">
              <h3 className="text-[#0B090A] font-semibold">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <Link className="" href="#">
                  <a href="">Home</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">About</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">Listing</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">Services</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">Blogs</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">Become a Agent</a>
                </Link>
              </div>
            </div>

            <div className="links flex flex-col gap-4">
              <h3 className="text-[#0B090A] font-semibold">Discovery</h3>
              <div className="flex flex-col gap-2">
                <Link className="" href="#">
                  <a href="">Canada</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">United Kingdom</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">Germany</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">Africa</a>
                </Link>
                <Link className="links" href="#">
                  <a href="">India</a>
                </Link>
              </div>
            </div>

            <div className="subscribe flex flex-col gap-6">
              <h3 className="text-[#0B090A] font-semibold">Subscrube to our Newsletter!</h3>

              <label htmlFor="" className="relative">
              <input type="email" placeholder="Email Address" className=" rounded-full bg-white border-0 px-4 outline-none  w-[17rem] h-[45px]" />
                <div className="absolute top-[.2rem] right-[.3rem] bg-[#03AEFD] w-[38px] h-[38px] flex items-center justify-center rounded-full cursor-pointer text-white border border-solid border-[#03AEFD] hover:bg-white hover:text-[#03AEFD]"><FaArrowRightLong/></div>
              </label>
              <div className="social-icons">
              <h3 className="text-[#0B090A] font-semibold my-3">Follow Us on</h3>
                <div className="flex items-start gap-2 text-[#03AEFD] text-[20px]">
                  <FaLinkedinIn />
                  <FaFacebookF />
                  <FaInstagram />
                  </div>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-[#0B090A] py-6 px-[13rem] flex items-center justify-between">
          <div className="text-[#AAAAAA]">
            <p>&copy;Rezilla - All right reserved</p>
          </div>
          <div className="links text-[#AAAAAA] flex gap-4">
            <Link>
            <a href="#">Terms and Conditions</a>
            </Link>
            <Link>
            <a href="#">Privacy Policy</a>
            </Link>
            <Link>
            <a href="#">Disclaimer</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
