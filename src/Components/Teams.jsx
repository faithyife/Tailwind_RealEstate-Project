// import "./Teams.css";
import { useEffect } from 'react';
import AOS from 'aos';

const Teams = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
    });
  }, []);
  return (
    <>
      <div className="flex flex-col gap-[6rem] items-center justify-center mb-[10rem]">
        <div className="text-center">
          <h2 className="text-[rgb(67,97,238)] text-[15px] tracking-[1.25px] font-medium mb-2">
            INTRODUCE YOURSELF TO
          </h2>
          <h2 className="text-[#2B2B2B] text-[32px] font-semibold">
            Our Team Of Experts
          </h2>
        </div>

        <div className="teams flex gap-14 ml-10" data-aos="zoom-in-left" >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="tesy w-[200px] h-[280px]  relative ">
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-30 rounded-tl-[100px]"></div>
              <img
                src="./testy1.jpeg"
                alt=""
                className="rounded-tl-[100px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#0B090A] font-semibold text-[20px]">
                Brendon M
              </h3>
              <h5 className="text-[12px] mt-1 text-[#4361EE] font-medium cursor-pointer">
                CEO & Founder
              </h5>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="tesy w-[200px] h-[280px]  relative ">
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-30 rounded-tl-[100px]"></div>
              <img
                src="./testy2.jpeg"
                alt=""
                className="rounded-tl-[100px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#0B090A] font-semibold text-[20px]">
                Jodi J. Appleby
              </h3>
              <h5 className="text-[12px] mt-1 text-[#4361EE] font-medium cursor-pointer">
                Real Estate Developer
              </h5>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="tesy w-[200px] h-[280px]  relative ">
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-30 rounded-tl-[100px]"></div>
              <img
                src="./testy3.jpeg"
                alt=""
                className="rounded-tl-[100px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#0B090A] font-semibold text-[20px]">
                Justin S. Meza
              </h3>
              <h5 className="text-[12px] mt-1 text-[#4361EE] font-medium cursor-pointer">
                Listing Agent
              </h5>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="tesy w-[200px] h-[280px]  relative ">
              <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-30 rounded-tl-[100px]"></div>
              <img
                src="./testy4.jpeg"
                alt=""
                className="rounded-tl-[100px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[#0B090A] font-semibold text-[20px]">
                Susan T. Smith
              </h3>
              <h5 className="text-[12px] mt-1 text-[#4361EE] font-medium cursor-pointer">
                {" "}
                Buyer's Agent
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
