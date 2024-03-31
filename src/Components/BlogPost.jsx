import React, { useState } from "react";
import BlogCard from "./BlogCard";

const BlogPost = () => {
  // State to manage current slides
  const [currentSlides, setCurrentSlides] = useState([0, 1, 2]);

  // Function to handle moving to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlides((prevSlides) => {
      const updatedSlides = prevSlides.map((slide) =>
        slide === 0 ? 2 : slide - 1
      );
      return updatedSlides;
    });
  };

  // Function to handle moving to the next slide
  const handleNextSlide = () => {
    setCurrentSlides((prevSlides) => {
      const updatedSlides = prevSlides.map((slide) =>
        slide === 2 ? 0 : slide + 1
      );
      return updatedSlides;
    });
  };

  // Data for each slide
  const slides = [
    {
      date: "28",
      day: "Tue",
      title: "Top 10 Home Buying Mistakes to Avoid",
      description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
      image: "./blog1.jpeg"
    },
    {
      date: "18",
      day: "Fri",
      title: "Get the Best Sale's Agent for Your Home",
      description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
      image: "./blog2.jpeg"
    },
    {
      date: "26",
      day: "Wed",
      title: "5 Tips for First-Time Home Sellers",
      description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
      image: "./blog3.jpeg"
    }
  ];

  return (
    <>
      {/* Main Container */}
      <div className="flex items-center justify-center flex-col gap-[10rem] bg-[#03AEFD] py-[7rem]">
        <div>
          {/* Trending Section */}
          <div className="flex flex-col items-center justify-center mb-20">
            <h3 className="tracking-[2px] font-medium text-white text-[20px]">
              WHAT'S TRENDING{" "}
            </h3>
            <h2 className="text-[40px] text-white font-semibold">
              Latest Blogs & Posts
            </h2>
          </div>

          {/* Slider Container */}
          <div className="flex items-center justify-center w-[500px] gap-8">
            {/* Mapping through slides */}
            {currentSlides.map((slideIndex) => (
              <div key={slideIndex} className="relative mx-2">
                {/* Rendering each slide */}
                <BlogCard {...slides[slideIndex]} />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Buttons */}
        <div className="sliders flex items-center justify-center gap-4 cursor-pointer">
          <button onClick={handlePrevSlide} className="w-[100px] h-[4px] bg-[#ccc] rounded-full"></button>
          
          <button onClick={handleNextSlide} className={`w-[100px] h-[4px] bg-[#ccc] rounded-full ${currentSlides.includes(0) ? 'active' : ''}`}></button>

          <button onClick={handleNextSlide} className={`w-[100px] h-[4px] bg-[#ccc] rounded-full ${currentSlides.includes(1) ? 'active' : ''}`}></button>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
