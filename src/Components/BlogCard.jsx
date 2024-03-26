import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ date, day, title, description, image }) => {
  return (
    <div className="">
      <div className="w-[340px] h-[240px]  relative ">
        <div className="overlay absolute inset-0 rounded-[30px] bg-black opacity-30"></div>
        <div className="flex flex-wrap items-center justify-center absolute top-0 rounded-bl-[10px] rounded-br-[10px] left-[45px] bg-white w-[50px] h-[40px]">
          <h5 className="font-medium text-[#2B2B2B] relative mb-4">
            {date}
            <small className="text-[#64748B] font-medium absolute bottom-[-0.7rem] left-1/2 transform -translate-x-1/2">
              {day}
            </small>
          </h5>
        </div>
        <img
          src={image}
          alt=""
          className="rrounded-tr-[30px] rounded-[30px] w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col mt-6 ml-2 gap-1">
        <h3 className="text-white font-normal w-[100%] text-[27px]">{title}</h3>
        <p className="text-[#D4D4D4] w-[75%] text-[12px]">{description}</p>
      </div>
      <div className="absolute text-[#03AEFD] w-[45px] h-[45px] bg-white flex items-center justify-center rounded-full cursor-pointer border-solid border-white hover:scale-75 bottom-[-4rem] right-[1rem]">
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default BlogCard;
