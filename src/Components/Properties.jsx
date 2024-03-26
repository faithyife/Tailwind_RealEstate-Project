import './Properties.css'; // Assuming you have a CSS file named Properties.css for styling

const Properties = () => {
  return (
    <>
      <div className='py-[12rem] flex flex-col gap-10 relative'>
        <div className='absolute w-[50px] h-[50px] top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img src="./who_elipse2.png" alt="" className='w-full h-full opacity-3'/>
        </div>
        <div className='flex flex-col gap-4 ml-[13.5rem]'>
          <h2 className='text-[20px] text-[#4361EE] font-medium'>AREAS ACROSS THE TOWN</h2>
          <h2 className='text-[#2B2B2B] text-[40px] font-semibold'>Neighborhood Properties</h2>
        </div>

        <div className="props_images flex flex-col  gap-10 py-10">
          <div className="flex items-center justify-center gap-10">
            <div className='prop-md w-[300px] h-[320px] rounded-[30px] relative'>
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
              <img src="./prop1.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
              <div className='absolute w-full bottom-[2rem] left-[2.5rem]'>
                <h1 className='text-[57px] font-semibold text-white'>216</h1>
                <p className='text-[19.3px] font-medium text-white'>New York City, NY</p>
              </div>
            </div>
            <div className='prop-md w-[300px] h-[320px] rounded-[30px] relative'>
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
              <img src="./prop2.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
              <div className='absolute w-full bottom-[2rem] left-[2.5rem]'>
                <h1 className='text-[57px] font-semibold text-white'>141</h1>
                <p className='text-[19.3px] font-medium text-white'>Houston, TX</p>
              </div>
            </div>
            <div className='prop-md w-[420px] h-[320px] rounded-[30px] relative'>
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
              <img src="./prop3.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
              <div className='absolute w-full bottom-[2rem] left-[2.5rem]'>
                <h1 className='text-[57px] font-semibold text-white'>212</h1>
                <p className='text-[19.3px] font-medium text-white'>San Diego, CA</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <div className='prop-md w-[412px] h-[320px] rounded-[30px] relative'>
                <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
                <img src="./prop4.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
                <div className='absolute w-full bottom-[2rem] left-[2.5rem]'>
                  <h1 className='text-[57px] font-semibold text-white'>183</h1>
                  <p className='text-[19.3px] font-medium text-white'>Philadelphia, PA</p>
                </div>
            </div>
            <div className='prop-md w-[658px] h-[320px] rounded-[30px] relative'>
                <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
                <img src="./prop5.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
                <div className='absolute w-full bottom-[2rem] left-[2.5rem]'>
                  <h1 className='text-[57px] font-semibold text-white'>183</h1>
                  <p className='text-[19.3px] font-medium text-white'>San Francisco, CA</p>
                </div>
            </div>
          </div>

        </div>
        <div className='absolute w-[75px] h-[75px] bottom-14 right-[14rem] transform -translate-x-1/2 -translate-y-1/2'>
          <img src="./propelipse.png" alt="" className='w-full h-full opacity-3'/>
        </div>
      </div>
    </>
  );
};

export default Properties;
