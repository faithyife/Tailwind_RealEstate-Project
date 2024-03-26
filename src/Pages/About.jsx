// import React, { useState } from "react";

// const About = () => {
//   const [value, setValue] = useState(0);
//   const [bgColor, changeBg] = useState("bg-red-600");

//   const randomColors = [
//     "bg-red-600",
//     "bg-blue-600",
//     "bg-green-600",
//     "bg-yellow-600",
//     "bg-purple-600",
//     "bg-pink-600",
//     "bg-indigo-600",
//     "bg-cyan-600",
//     "bg-teal-600",
//     "bg-orange-600",
//     "bg-orange-200",
//     "bg-black",
//     "bg-purple-600",
//   ];

//   const increment = () => {
//     setValue(value + 1);
//     const randomIndex = Math.floor(Math.random() * randomColors.length);
//     changeBg(randomColors[randomIndex]);
//   };

//   return (
//     <div className={`flex items-center justify-center h-screen ${bgColor}`}>
//       <div className="text-center">
//         <h1>Classwork</h1>
//         {value > 0 && (
//           <p className="text">{`Changed to: ${bgColor}`}</p>
          
//         )}

//         <button
//           className="bg-blue-500 p-2 rounded-[.5rem] text-white"
//           onClick={increment}
//         >
//           Counter {value}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;
