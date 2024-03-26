// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Check.css';

// eslint-disable-next-line react/prop-types
const Room = ({ imagesrc, price, description, address, beds, baths, icon, text, bgColor, textColor }) => {
  return (
    <div className='flex flex-col gap-4 cursor-pointer hover:scale-[0.9] pl-6'>
      <div className="imgRooms w-[300px] h-[300px] relative">
        <img src={imagesrc} alt="" className='w-full h-full object-cover rounded-3xl' />
        {icon && text && (
          <div className="iconRoom flex items-center justify-center gap-2 px-5 py-2 rounded-2xl absolute top-[248px] left-[30px]" style={{ backgroundColor: bgColor }}>
            <img src={icon} alt="" className='h-4 w-4' />
            <small className='font-medium' style={{ color: textColor }}>{text}</small>
          </div>
        )}
      </div>
      <div className="details flex flex-col gap-1">
        <p className='text-[#2B2B2B] text-[20px]'>{price}</p>
        <p className='text-[#2B2B2B]'>{description}</p>
        <small className='text-[#64748B] text-[12px]'>{address}</small>
        <div className="iconRoom flex items-center gap-6">
          <div className='flex items-center gap-2'>
            <img src="./bed.png" alt="" />
            <small>{beds} Beds</small>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <img src="./bathroom.png" alt="" />
            <small>{baths} Bath</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const Check = () => {
  return (
    <div className="check flex flex-col items-center justify-center py-[4rem] gap-12 sm-max:items-center sm-max:justify-center">
      <div className="checkView flex items-start justify-between max-w gap-[9rem] sm-max:flex-col sm-max:gap-[1rem] sm-max:justify-center sm-max:items-center">
        <div className='sm-max:flex sm-max:flex-1 sm-max:flex-col sm-max:items-center sm-max:justify-start'>
          <h3 className='text-[#4361EE] text-xl font-medium'>CHECKOUT OUR NEW</h3>
          <h2 className='text-[#2B2B2B] text-[40px] font-semibold py-2 sm-max:text-[16px]'>Latest Listed Properties</h2>
          <p className='w-[75%] text-[#64748B] '>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
        </div>
        <div className='btns max-w flex items-center justify-center gap-6 pt-12 sm-max:gap-2'>
          <button type="button" className='border-2 border-[#03AEFD] text-[#03AEFD] px-[30px] py-[11px] rounded-[2rem]'>All</button>
          <button type="button" className="set bg-[#03AEFD] px-[30px] py-[11px] rounded-[2rem] text-white">Set</button>
          <button type="button" className='border-2 border-[#03AEFD] text-[#03AEFD] px-[30px] py-[11px] rounded-[2rem]'>Rent</button>
        </div>
      </div>
      
      <div className="rooms flex pl-[9rem] pb-[7rem] sm-max:flex-col sm-max:items-center sm-max:justify-center sm-max:pl-[0] sm-max:gap-[2.5rem]">
        <Room
          imagesrc="./room1.jpeg"
          price="$ 5,970"
          description="Tranquil Haven in the Woods"
          address="103 Wright CourtBurien, WA 98168"
          beds={4}
          baths={3}
          icon="./fire.png"
          text="Popular"
          bgColor="#FFE1E1"
          textColor="#FF1111"
        />
        <Room
          imagesrc="./room2.jpeg"
          price="$ 5,970"
          description="Tranquil Haven in the Woods"
          address="103 Wright CourtBurien, WA 98168"
          beds={4}
          baths={3}
          icon="./homeIcon.png"
          text="New Listing"
          bgColor="#D7EEFF"
          textColor="#119BFF"
        />
        <Room
          imagesrc="./room3.jpeg"
          price="$ 3,450"
          description="Charming Cottage in the Meadow"
          address="1508 Centennial Farm RoadHarlan, 51537"
          beds={4}
          baths={4}
          icon="./dollar.png"
          text="Discounted Price"
          bgColor="#F1FFF1"
          textColor="#00CE3A"
        />
        <Room
          imagesrc="./room4.jpeg"
          price="$ 2,389"
          description="Grand Estate on the Hilltop"
          address="103 Wright CourtBurien, WA 98168"
          beds={4}
          baths={3}
          icon="./fire.png"
          text="Popular"
          bgColor="#FFE1E1"
          textColor="#FF1111"
        />
        {/* Add more Room components here with different props */}
      </div>
    </div>
  );
};

export default Check;
