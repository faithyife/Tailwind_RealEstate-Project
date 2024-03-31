import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";


const Navbartwo = () => {
  return (
    <Navbar fluid className="navbars sticky top-0 z-[1000] bg-white lg:shadow-none sm-max:shadow">
      <div className="navTop flex items-center justify-between w-full lg:px-[7rem] sm-max:px-[0]">
        <Navbar.Collapse className="navLinks">
          <Link className="links flex items-center justify-center lg:bg-[#4361EE4D] lg:rounded-3xl lg:px-4 hover:bg-[#03AEFD] hover:text-[#fff] sm-max:p-2 sm-max:flex sm-max:items-start sm-max:justify-start" to="#" active>
            Home
          </Link>
          <Link className="links sm-max:p-2" to="#">
            About
          </Link>
          <Link className="links sm-max:p-2" to="#">
            Listing
          </Link>
          <Link className="links sm-max:p-2" to="#">
            Services
          </Link>
          <Link className="links sm-max:p-2" to="#">
            Blogs
          </Link>
          <div className="lg:hidden sm-max:flex sm-max:flex-col sm-max:items-start sm-max:justify-start sm-max:gap-6 sm-max:py-4">
            <div className="flex items-center justify-center gap-2 font-Poppins font-[450] ">
              <HiOutlineUserCircle />
              <a href="">Login/Register</a>
            </div>
            <div className="btn flex items-center justify-center gap-2 bg-[#03AEFD] px-6 py-2 rounded-full text-white cursor-pointer">
              <img
                className="w-[16px] h-[16px]"
                src="./houselogo.png"
                alt="House Logo"
              />
              <a href="">Add Listing</a>
            </div>
          </div>
        </Navbar.Collapse>
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
        <div className="flex md:order-2">
          <div className="md:flex items-center justify-center gap-6 sm-max:hidden min-[320px]:hidden max-[900px]:flex">
            <div className="flex items-center justify-center gap-2 font-Poppins font-[450] ">
              <HiOutlineUserCircle />
              <a href="">Login/Register</a>
            </div>
            <div className="btn flex items-center justify-center gap-2 bg-[#03AEFD] px-6 py-2 rounded-full text-white cursor-pointer">
              <img
                className="w-[16px] h-[16px]"
                src="./houselogo.png"
                alt="House Logo"
              />
              <a href="">Add Listing</a>
            </div>
          </div>
        </div>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default Navbartwo;
