import { Carousel } from 'flowbite-react';
import { Button, Label, TextInput, Select } from 'flowbite-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoSearchOutline } from "react-icons/io5";
import './Hero.css';


const Hero = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
    });
  }, []);

  return (
    <>
    <div className="hero flex items-center justify-center gap-40 py-20 w-full bg-gradient-to-b from-[#4CC9F000] to-[#4361EE70] sm-max:bg-none sm-max:from-transparent sm-max:to-transparent  sm-max:flex-col sm-max:py-10 sm-max:gap-0">
      
      {/* Carousel */}
      <div className='carousel max-w-md sm-max:w-[90%]' data-aos="zoom-in">
        <div className='flex flex-col gap-2'>
          <h3 className='text-[#4361EE] text-[24px] font-medium sm-max:text-[18px]'>REAL ESTATE</h3>
          <h1 className='text-[3.2rem] text-[#0B090A] font-bold leading-[55px] esm-max:text-[25px] esm-max:leading-[25px]'>Find a perfect home you love..!</h1>
          <p className='text-[#64748B] pt-4'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>
        </div>
        <div className="card-carousel sm-max:mt-20">
        <img className='Ellipse-carousel' src="./Ellipse-carousel.png" alt="" />
          <div className="h-46 sm-max:h-64 xl:h-80 2xl:h-96 ">
            <Carousel className='sm-max:bottom-10'>
              
              <img className='rounded-2xl' src="carousel1.jpg" alt="..." />
              <img className='rounded-2xl' src="carousel2.jpeg" alt="..." />
              <img className='rounded-2xl' src="carousel3.jpg" alt="..." />
              
            </Carousel>
        </div>
        </div>
      </div>
      
      {/* Form */}
      <div className='flex-1 max-w-md sm-max:w-[90%]' data-aos="flip-left">
       <div className='hr bg-white shadow p-8 rounded-3xl'>
        <div>
          <div className='flex items-center justify-center gap-[10rem] esm-max:gap-[5rem]  font-semibold'>
            <a href="" className="hr-link text-[#03AEFD]">For Sale</a>
            <a href="" className='text-[#64748B]'>For Rent</a>
          </div>
        <form className="selectForm flex flex-col gap-4 pt-[4rem] pb-6">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="" />
            </div>
            <TextInput id="email1" type="email" placeholder="New York, San Francisco, etc" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="" />
            </div>
            <Select id="countries" required>
              <option>Select Property Type</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="password1" value="" />
            </div>
            <Select id="countries" required className=''>
              <option disabled selected className='custom-dropdown'>Select Rooms</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className='flex items-center justify-start gap-2 text-[#03AEFD] cursor-pointer'>
          <img src="./icon_setting.png" alt="" />
          <p> Advance Search</p>
          </div>
          <div className='flex items-center justify-center mt-10'>
            <Button  type="submit" className='w-[85%]  bg-[#03AEFD] rounded-[5rem] cursor-pointer hover:bg-transparent p-1'><IoSearchOutline className='text-3xl mr-2' /> Search</Button>
          </div>
        </form>
        </div>
       </div>
      </div>

      <div className="people sm-max:hidden flex items-center gap-6 sm-max:flex-col">
        <div className='flex items-center justify-center gap-4 bg-white px-6 py-4 rounded-[5rem] shadow-lg'>
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
  );
};

export default Hero;
