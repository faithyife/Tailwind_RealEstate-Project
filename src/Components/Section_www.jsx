
const Section_www = () => {
  return (
    <>
      <div className="whoare flex items-center justify-center w-full gap-[3rem] mb-20 sm-max:flex-col sm-max:items-center ">
        <div className="space-y-10 max-w-md sm-max:items-center sm-max:justify-center">
          <div className="sm-max:items-center sm-max:justify-center sm-max:mx-[2rem] sm-max:flex-1">
            <div className="flex flex-col sm-max:items-start   gap-2 sm-max:flex-1">
              <h3 className="text-[#4361EE] font-medium">WHO ARE WE</h3>
              <h2 className="text-[#2B2B2B] text-[2rem] font-semibold sm-max:text-[1.5rem]">
                Assisting individuals in locating the appropriate real estate.
              </h2>
              <p className="text-[#64748B] text-[15px]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus. Nulla convallis ipsum molestie nibh malesuada,
                ac malesuada leo volutpat.
              </p>
            </div>
          </div>

          <div className="whoare_pics max-w sm-max:flex sm-max:items-center sm-max:justify-center gap-4 relative lg:hidden">
          <img
            src="./who_elipse.png"
            alt=""
            className=" absolute top-[-1.8rem] right-[1rem] sm-max:w-[140px] sm-max:h-[140px] sm-max:right-[10rem]"
          />
          <div className="images sm-max:w-[170px] sm-max:h-[260px]  mt-[6.5rem] sm-max:mt-[2.5rem]">
            <img src="./who1.jpeg" alt="" className="sm-max:w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="img-sm sm-max:w-[143px] sm-max:h-[141px]">
              <img
                src="./who2.jpeg"
                alt=""
                className="sm-max:w-full"
              />
            </div>
            <div className="img-sm2 sm-max:w-[143px] sm-max:h-[100px] relative">
              <img
                src="./who3.jpeg"
                alt=""
                className="img2 sm-max:w-full sm-max:h-auto "
              />

              <div className="absolute h-[60px] w-[60px] bottom-[-2rem] left-[5rem]">
                <img src="./who_elipse2.png" alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>

          <div className="flex flex-col gap-6 sm-max:items-center">
            <div className="boxes flex items-center justify-start gap-6 bg-white rounded-3xl w-[380px] h-[130px] sm-max:w-[320px] sm-max:h-[117px]">
              <img src="./whoare1.png" alt="" className="ml-4 sm-max:w-[34px] sm-max:h-[37px]" />
              <div>
                <h5 className="text-[#4361EE]">Donec porttitor euismod</h5>
                <p className="text-[#64748B] text-[.9rem]pr-[.5rem] sm-max:text-[13px]">
                  Nullam a lacinia ipsum, nec dignissim purus. Nulla
                </p>
              </div>
            </div>
            <div className="boxes flex items-center justify-start gap-6 bg-white rounded-3xl w-[380px] h-[130px]  sm-max:w-[320px] sm-max:h-[117px]">
              <img src="./icon_user.png" alt="" className="ml-4 sm-max:w-[34px] sm-max:h-[37px]" />
              <div>
                <h5 className="text-[#4361EE]">Donec porttitor euismod</h5>
                <p className="text-[#64748B] text-[.9rem]pr-[.5rem  sm-max:text-[13px]">
                  Nullam a lacinia ipsum, nec dignissim purus. Nulla
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="whoare_pics max-w flex items-center gap-4 relative  sm-max:hidden lg:flex">
          <img
            src="./who_elipse.png"
            alt=""
            className=" absolute top-[-1.8rem] right-[12rem] sm-max:w-[140px] sm-max:h-[140px] sm-max:right-[6rem]"
          />
          <div className="images sm-max:w-[170px] sm-max:h-[260px]  mt-[6.5rem] sm-max:mt-[2.5rem]">
            <img src="./who1.jpeg" alt="" className="sm-max:w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="img-sm sm-max:w-[143px] sm-max:h-[141px]">
              <img
                src="./who2.jpeg"
                alt=""
                className="sm-max:w-full"
              />
            </div>
            <div className="img-sm2 sm-max:w-[143px] sm-max:h-[100px] relative">
              <img
                src="./who3.jpeg"
                alt=""
                className="img2 sm-max:w-full sm-max:h-auto "
              />

              <div className="absolute h-[60px] w-[60px] bottom-[-2rem] left-[5rem]">
                <img src="./who_elipse2.png" alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Section_www;
