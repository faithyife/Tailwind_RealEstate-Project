import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import quote from "/quote.png";
import testimony1 from "/testimony1.jpeg";
import testimony2 from "/testimony2.jpeg";
import testimony3 from "/testimony3.jpeg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Section = () => {
  const testimonialData = [
    {
      quote: quote,
      text: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
      img: testimony1,
      testy_name: "Barbara D. Smith",
      rating: 4,
    },
    {
      quote: quote,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: testimony2,
      testy_name: "John Doe",
      rating: 5,
    },
    {
      quote: quote,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: testimony3,
      testy_name: "John Doe",
      rating: 4,
    },
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const handleHorizontalClick = (index) => {
    setCurrent(index);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4 py-40">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#4361EE] text-[19px] tracking-[3px]">
              TESTIMONIALS
            </h3>
            <h2 className="text-[40px] text-[#2B2B2B] font-semibold w-[55%] ">
              Look What Our Customers Say!
            </h2>
            <p className="text-[#2B2B2B] w-[65%]">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est
              pellentesque.
            </p>
          </div>
          <div>
            <div className="arrows flex gap-10 ">
              <div
                className="arrowHover w-[50px] h-[50px] bg-[transparen] border-solid border-2 border-[#4361EE] flex items-center justify-center rounded-full cursor-pointer"
                onClick={handlePrev}
              >
                <FaArrowLeftLong className="arrowIcon text-[#4361EE]" />
              </div>
              <div
                className="arrowHover w-[50px] h-[50px] bg-[transparen] border-solid border-2 border-[#4361EE] flex items-center justify-center rounded-full cursor-pointer"
                onClick={handleNext}
              >
                <FaArrowRightLong className="arrowIcon text-[#4361EE]" />
              </div>
            </div>
          </div>
        </div>

        <section className="flex relative z-[100]">
          <div className="relative">
            {testimonialData.map(
              (testimonial, index) =>
                index === current && (
                  <div
                    key={index}
                    className={`relative box_testy w-[500px] h-[358px] bg-white rounded-[30px] px-14 py-8 ${
                      direction === "prev" ? "prev" : "next"
                    }`}
                    
                  >
                    <div className="flex flex-col gap-2">
                      <div>
                        <img src={testimonial.quote} alt="" />
                      </div>
                      <h4 className="leading-[30px] mb-2 text-[#2B2B2B] text-[19px] font-medium">
                        {testimonial.text}
                      </h4>
                      <hr className="my-2" />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="flex w-[50px] h-[50px]">
                            <img
                              className="w-full h-full rounded-full object-cover"
                              src={testimonial.img}
                              alt=""
                            />
                          </div>
                          <p className="text-[#2B2B2B] text-[20px] font-medium">
                            {testimonial.testy_name}
                          </p>
                        </div>
                        <div style={{ flex: 1 }}></div> {}
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            color={
                              i < testimonial.rating ? "yellow" : "#D4D4D4"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    
                  </div>
                )
            )}
            <div className="horizontalClicks flex gap-4 rotate-[270deg] absolute top-[11rem] right-[-5.5rem]">
              {testimonialData.map((_, index) => (
                <div
                  key={index}
                  className={`horizon1 w-[38px] h-[3px] bg-[${
                    index === current ? "#4361EE" : "#ccc"
                  }] rounded-full cursor-pointer`}
                  onClick={() => handleHorizontalClick(index)}
                ></div>
              ))}
            </div>
          </div>
          <div className="testyElipse absolute top-[-2rem] left-[-22px] z-[-10]">
                      <img src="./testyelipse.png" alt="" />
                    </div>
        </section>
      </div>
    </>
  );
};

export default Section;
