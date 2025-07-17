import React, { useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import "./BirthdayCard.css";
import AgeTimer from "./AgeTimer";
import Message from "./Message";

const BirthdayCard = () => {
  useEffect(() => {
    const audio = new Audio("../../public/assets/birthdaySong.mp3"); // ✅ Path in public/assets
    audio.play().catch((err) => console.log("Autoplay blocked:", err));
    audio.loop = true; // ✅ Keep it playing
    return () => audio.pause(); // ✅ Stop when unmount
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 px-4">
      {/* Left Section */}
      <div className="title flex-1">
        <h1 className="happy text-[10vw] md:text-[111px]">
          <span style={{ "--t": "2s" }}>H</span>
          <span style={{ "--t": "2.2s" }}>a</span>
          <span style={{ "--t": "2.4s" }}>p</span>
          <span style={{ "--t": "2.6s" }}>p</span>
          <span style={{ "--t": "2.8s" }}>y</span>
        </h1>
        <h1 className="birthday text-[11vw] md:text-[121px]">
          <span style={{ "--t": "3s" }}>B</span>
          <span style={{ "--t": "3.2s" }}>i</span>
          <span style={{ "--t": "3.4s" }}>r</span>
          <span style={{ "--t": "3.6s" }}>t</span>
          <span style={{ "--t": "3.8s" }}>h</span>
          <span style={{ "--t": "3s" }}>d</span>
          <span style={{ "--t": "3.2s" }}>a</span>
          <span style={{ "--t": "3.4s" }}>y</span>
        </h1>
        <div className="hat">
          <img src="../../public/assets/hat.png" alt="Birthday Hat" width="130" />
        </div>
        <AgeTimer />

        {/* Funny GIF */}
        <div className="flex justify-center">
          <img
            src="../../public/assets/mewmew.gif"
            alt="cat"
            className="w-24 h-24"
          />
        </div>

        {/* Image with Animation */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
        >
          <img
            src="../../public/assets/pic.png"
            alt="Ananya"
            className="rounded-full shadow-xl w-48 h-48 md:w-72 md:h-72 object-cover mx-auto border-8 border-yellow-400"
          />
        </motion.div>
      </div>

      {/* Right Section - Button with Animation */}
      <motion.div
        className="mt-6 md:mt-0 flex justify-center md:justify-end w-full md:w-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5, type: "spring" }}
      >
        <button className="bg-[#FF7882] mt-[-50px] border-3 border-black hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          🎉 Ananya 🎉
        </button>
      </motion.div>

      {/* Message Button */}
      <Message />
    </div>
  );
};

export default BirthdayCard;
