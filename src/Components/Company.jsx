import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Company = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
    });
  }, []);

  return (
    <>
      <div className="company flex items-center justify-center text-center py-[10rem] flex-col sm-max:py-[3.5rem]">
  
        <div className='flex flex-col gap-10 relative'>
        <img src="./company_ellipse.png" alt="" className='absolute left-[3rem] top-[-3rem] h-[5rem] sm-max:hidden' />
          <p className='text-[#64748B] sm-max:text-[80%]'>Trusted by 100+ Companies across the globe! </p>

          <div className="company-logo flex items-center justify-start gap-[4.5rem] filter grayscale sm-max:w-full sm-max:overflow-hidden sm-max:px-4 sm-max:gap-[4rem] esm-max:gap-[2rem] esm-max:overflow-hidden" data-aos="zoom-in-left">
            <img src="./google.png" alt="" />
            <img src="./amazon.png" alt="" />
            <img src="./logitech.png" alt="" />
            <img src="./spotify.png" alt="" />
            <img src="./samsung.png" alt="" />
            <img src="./netflix.png" alt="" />
          </div>
          </div>
          
          <div className="people lg:hidden sm-max:flex items-center gap-6 sm-max:flex-col">
              <div className='flex items-center justify-center gap-4 bg-white px-6 py-4 rounded-[5rem] shadow-lg sm-max:mt-[2rem]'>
                <img src="./people.png" alt="" />
                <div>
                  <p>72K+ Happy</p>
                  <p>Customers</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-4 bg-white px-6 py-4 rounded-[5rem] shadow-lg'>
                <img src="./house_elipse.png" alt="" />
                <div>
                  <p>200+ New</p>
                  <p>Listings Everyday!</p>
                </div>
              </div>

        
            </div>

      </div>
    </>
  )
}

export default Company
