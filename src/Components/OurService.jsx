import { IoSearchOutline } from "react-icons/io5";
<IoSearchOutline />
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
    });
  }, []);
  return (
    <>
      <div className="services bg-[#d4d4d43d] w-full" >
        <div className='py-20 flex flex-col items-center justify-center gap-10 text-center'>
            <div>
            <h4 className="text-[#2B2B2B] text-[20px] font-medium ">OUR SERVICES</h4>
            <p className="text-[40px] text-[#0B090A] font-semibold sm-max:text-[26px]">Donec porttitor euismod dignissim</p>
            </div>

            <div className=" flex items-center gap-12 sm-max:flex sm-max:flex-col" data-aos="flip-right" data-aos-easing="linear">
              <div className='boxes flex flex-col px-[3.8rem] items-center justify-center gap-3 w-[340px] h-[363px] bg-white rounded-[30px] sm-max:w-[300px] sm-max:h-[219px]'>
                <div className="circle-sm flex items-center justify-center w-[90px] h-[90px] bg-[#4361EE] rounded-full sm-max:h-[55px] sm-max:w-[55px]">
                  <div className="h-[30px] w-[30px] sm-max:h-[23px] sm-max:w-[23px]">
                  <img src="./iconsearch.png"  alt="searchicon" className="h-full w-full object-cover"/>
                  </div>
                </div>
                <h5 className="text-[#2B2B2B] text-[20px] font-medium sm-max:text-[16px]">Buy a New Home</h5>
                <p className="text-[#64748B] text-center sm-max:text-[13px]">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
              </div>
              <div className='boxes flex flex-col px-[3.8rem] items-center justify-center gap-3 w-[340px] h-[363px] bg-white rounded-[30px] sm-max:w-[300px] sm-max:h-[219px]'>
                <div className="circle-sm flex items-center justify-center w-[90px] h-[90px] bg-[#4361EE] rounded-full sm-max:h-[55px] sm-max:w-[55px]">
                  <div className="h-[30px] w-[30px]">
                  <img src="./iconhome.png"  alt="searchicon" className="h-full w-full object-cover"/>
                  </div>
                </div>
                <h5 className="text-[#2B2B2B] text-[20px] font-medium sm-max:text-[16px]">Sell a House</h5>
                <p className="text-[#64748B] text-center sm-max:text-[13px]">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
              </div> 
              <div className='boxes flex flex-col px-[3.8rem] items-center justify-center gap-3 w-[340px] h-[363px] bg-white rounded-[30px] sm-max:w-[300px] sm-max:h-[219px]'>
                <div className="circle-sm flex items-center justify-center w-[90px] h-[90px] bg-[#4361EE] rounded-full sm-max:h-[55px] sm-max:w-[55px]">
                  <div className="h-[30px] w-[45px] sm-max:h-[23px] sm-max:w-[23px]">
                  <img src="./iconbed.png"  alt="searchicon" className="h-full w-full object-cover"/>
                  </div>
                </div>
                <h5 className="text-[#2B2B2B] text-[20px] font-medium">Rent a House</h5>
                <p className="text-[#64748B] text-center sm-max:text-[13px]">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service
