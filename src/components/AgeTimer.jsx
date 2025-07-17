import React, { useEffect, useState } from "react";

const AgeTimer = () => {
  const birthDate = new Date("1997-07-18T00:00:00"); // Ananya's birthdate
  const [age, setAge] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();
      const diff = now - birthDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setAge({ years, days, hours, minutes, seconds });
    };

    updateAge();
    const timer = setInterval(updateAge, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-6 bg-white/80 p-2 rounded-xl shadow-lg w-full max-w-md mx-auto border-2 border-pink-300">
      <div className="flex justify-center mb-3">
        <img
          src="/assets/shinchan.gif" 
          alt="Shin Chan"
          className="w-24 h-24 "
        />
      </div>
      
      <h2 className="text-xl font-mono text-black mb-3">You have been shining for:</h2>
      <div className="flex justify-center flex-wrap gap-4 text-lg font-sans text-gray-700">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-pink-500">{age.years}</span>
          <span>Years</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-pink-500">{age.days}</span>
          <span>Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-pink-500">{age.hours}</span>
          <span>Hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-pink-500">{age.minutes}</span>
          <span>Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-pink-500">{age.seconds}</span>
          <span>Sec</span>
        </div>
      </div>
      
    </div>
  );
};

export default AgeTimer;
