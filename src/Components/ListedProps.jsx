
const ListedProps = () => {
  return (
    <>
      <div className='py-[12rem] flex flex-col gap-10 relative sm-max:flex sm-max:items-center sm-max:justify-center'>
        <div className='absolute w-[50px] h-[50px] top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img src="./who_elipse2.png" alt="" className='w-full h-full opacity-3'/>
        </div>
        <div className='flex flex-col gap-4 ml-[13.5rem] sm-max:ml-[0]'>
          <h2 className='text-[20px] text-[#4361EE] font-medium sm-max:text-[16px]'>AREAS ACROSS THE TOWN</h2>
          <h2 className='text-[#2B2B2B] text-[40px] font-semibold sm-max:text-[22px]'>Neighborhood Properties</h2>
        </div>

        <div className="props_images flex flex-col flex-wrap  gap-10 py-10 sm-max:flex sm-max:mx-6">
          <div className="flex flex-wrap items-center justify-center gap-10 sm-max:grid-cols-2 sm-max:gap-4 esm-max:grid esm-max:grid-cols-2">
            <div className='prop-md w-[300px] h-[320px] rounded-[30px] relative sm-max:w-[155px] sm-max:h-[155px]'>
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
              <img src="./prop1.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
              <div className='absolute w-full bottom-[2rem] left-[2.5rem] sm-max:left-[.5rem] sm-max:bottom-[.8rem]'>
                <h1 className='text-[57px] font-semibold text-white sm-max:text-[27px]'>216</h1>
                <p className='text-[19.3px] font-medium text-white sm-max:text-[13px]'>New York City, NY</p>
              </div>
            </div>

            <div className='prop-md w-[300px] h-[320px] rounded-[30px] relative sm-max:w-[155px] sm-max:h-[155px]'>
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
              <img src="./prop2.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
              <div className='absolute w-full bottom-[2rem] left-[2.5rem] sm-max:left-[.5rem] sm-max:bottom-[.8rem]'>
                <h1 className='text-[57px] font-semibold text-white sm-max:text-[27px]'>141</h1>
                <p className='text-[19.3px] font-medium text-white sm-max:text-[13px]'>Houston, TX</p>
              </div>
            </div>

            <div className='prop-md w-[420px] h-[320px] rounded-[30px] relative sm-max:w-[155px] sm-max:h-[155px]'>
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
              <img src="./prop3.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
              <div className='absolute w-full bottom-[2rem] left-[2.5rem] sm-max:left-[.5rem] sm-max:bottom-[.8rem]'>
                <h1 className='text-[57px] font-semibold text-white sm-max:text-[27px]'>212</h1>
                <p className='text-[19.3px] font-medium text-white sm-max:text-[13px]'>San Diego, CA</p>
              </div>
            </div>

            <div className='prop-md w-[412px] h-[320px] rounded-[30px] relative sm-max:w-[155px] sm-max:h-[155px]'>
                <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
                <img src="./prop4.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
                <div className='absolute w-full bottom-[2rem] left-[2.5rem] sm-max:left-[.5rem] sm-max:bottom-[.8rem]'>
                  <h1 className='text-[57px] font-semibold text-white sm-max:text-[27px]'>183</h1>
                  <p className='text-[19.3px] font-medium text-white sm-max:text-[13px]'>Philadelphia, PA</p>
                </div>
            </div>

            <div className='prop-md w-[658px] h-[320px] rounded-[30px] relative sm-max:w-[155px] sm-max:h-[155px]'>
                <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-25"></div>
                <img src="./prop5.jpeg" alt="" className='w-full h-full bg-cover bg-center rounded-[30px]' />
                <div className='absolute w-full bottom-[2rem] left-[2.5rem] sm-max:left-[.5rem] sm-max:bottom-[.8rem]'>
                  <h1 className='text-[57px] font-semibold text-white sm-max:text-[27px]'>183</h1>
                  <p className='text-[19.3px] font-medium text-white sm-max:text-[13px]'>San Francisco, CA</p>
                </div>
            </div>
          </div>

          {/* <div className="flex items-center justify-center gap-10">
            
          </div> */}

        </div>
        <div className='absolute w-[75px] h-[75px] bottom-14 right-[14rem] transform -translate-x-1/2 -translate-y-1/2'>
          <img src="./propelipse.png" alt="" className='w-full h-full opacity-3'/>
        </div>
      </div>
    </>
  );
};

export default ListedProps;
