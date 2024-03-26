import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import './Header.css';
const Header = () => {
  return (
    <>
      <div className="header-bar lg:block bg-[#03AEFD] py-4 px-[8rem] w-full">
        <div className="flex items-center justify-between text-white font-Poppins text-[14px]">
          <div className="flex items-center gap-2">
            <GoLocation />
            <p>Rezilla, 18 Grattan St, Brooklyn</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <AiOutlinePhone />
              <p>+1 206-214-2298</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <IoMailOutline />
              <p>support@rezilla.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
