import './Whoare.css';

const Whoare = () => {
  return (
    <>
      <div className="whoare flex items-center justify-center w-full gap-[3rem] mb-20">

        <div className='space-y-10 max-w-md'>
          <div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#4361EE] font-medium'>WHO ARE WE</h3>
              <h2 className='text-[#2B2B2B] text-[2rem] font-semibold'>Assisting individuals in locating the appropriate real estate.</h2>
              <p className='text-[#64748B] text-[15px]'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="boxes flex items-center justify-start gap-6 bg-white rounded-3xl w-[380px] h-[130px]">
              <img src="./whoare1.png" alt="" className='ml-4' />
              <div>
                <h5 className='text-[#4361EE]'>Donec porttitor euismod</h5>
                <p className='text-[#64748B] text-[.9rem]pr-[.5rem]'>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
              </div>
            </div>
            <div className="boxes flex items-center justify-start gap-6 bg-white rounded-3xl w-[380px] h-[130px]">
              <img src="./icon_user.png" alt="" className='ml-4' />
              <div>
                <h5 className='text-[#4361EE]'>Donec porttitor euismod</h5>
                <p className='text-[#64748B] text-[.9rem]pr-[.5rem]'>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="whoare_pics max-w flex items-center gap-4 relative">
            <img src="./who_elipse.png" alt="" className=" absolute top-[-1.8rem] right-[12rem]" />
            <div className="images  mt-[6.5rem]">
              <img src="./who1.jpeg" alt="" className='' />
            </div>
            <div className="flex flex-col gap-4">
              <div className="img-sm">
              <img src="./who2.jpeg" alt="" className='i' />
              </div>
              <div className="img-sm2 relative">
              <img src="./who3.jpeg" alt="" className='img2' />

              <div className="absolute h-[60px] w-[60px] bottom-[-2rem] left-[5rem]">
              <img src="./who_elipse2.png" alt="" className='w-full h-full'/>
              </div>
              </div>
            </div>
            
        </div>
      </div>

      {/* </div> */}
    </>
  )
}

export default Whoare;
