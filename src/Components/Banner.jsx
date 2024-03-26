import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-end relative mx-[12rem] my-[7rem] w-[1200px] h-[260px] bg-[#03AEFD] rounded-[40px]">
        <div className="absolute right-[2rem] top-[-2.5rem]  bannerelipse1">
          <img src="./bannerelipse.png" alt="" />
        </div>

        <div className="absolute left-[17rem] top-[8.5rem]  bannerelipse1 rotate-5">
          <img src="./bannerelipse1.png" alt="" />
        </div>

        <div className="profile absolute left-4 bottom-0" data-aos="flip-right">
          <img src="./profile.png" alt="" />
        </div>

        <div
          className="flex items-center justify-center gap-2 mx-[]"
          data-aos="fade-left"
        >
          <div className="w-[60%]">
            <h2 className="text-white font-semibold text-[39px]">
              Become a Agent.
            </h2>
            <p className="text-white w-[75%]">
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.{" "}
            </p>
          </div>
          <button
            type="button"
            className="mr-[3rem] w-[165px] h-[49px] bg-white text-[#03AEFD] rounded-[30px] hover:scale-[.9] "
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
