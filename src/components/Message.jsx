import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GreetingCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const message = `
Hello Ananya,
So, today is the day you were born—the day you became your parents’ biggest gift from God. I might know only 30–40% about you (not sure 😅), but one thing I know 100% is that you’re one of the strongest people I’ve seen as a woman. And I also know you want to do something big in life—not just for yourself, but for your parents too, and put a huge smile on their faces.

I know you’re strong, but don’t always try to be too strong—sometimes that turns into stubbornness (which is bad 😜)or could hurt you. If you’re ever going through something, share it with your cousins or family. Being vulnerable is not weakness; it’s strength too. And never think you’re not doing good—you’re doing way, way better than most people (including me 😂). Not comparing, just saying you’re doing great and its a fact!

Now coming to the gym (because honestly, I don’t know what else to say 😅let me cook)... I feel you have hidden strength that hasn’t fully unlocked yet. You might not care, but trying to push yourself and reach that full potential is always best, right? I’ll try and do my best to help without annoying you or making you angry, or crossing the line 🫣. I’ll support you as much as I can.

I really wish and pray you achieve every success in life and get all the things you desire and wish for... And one last thing—TRY which i always tell you😅. Always try new things because, Trying is never bad, but regret is, and it stays forever. I’m saying this because sometimes you get nervous or overthink, which is just your brain tricking you—not your heart. Trust your instincts; I’ve seen them work, especially in trading (remember?). But fear holds you back, so work on that.

Start trading again and make loads of money—so I can give you mine and you make it double or triple for me 😅😁. That way, I can settle in life too!

I don’t know what else to say, so… just live in peace, take care of yourself, be happy, And most importantly, keep smiling, no matter what.

Okay, enjoy your day with your loved ones. It’s your day—do whatever you want, but stay safe. Eat a lot of junk food too!
Chalo, i dont know what else to say 
Tata, bye-bye, 
Good Morning, and rock the day with some pull-ups 😁😜.

and yeah, i forgot i dont know whether it is emotional or not, Incase if it is emotinal please grab a tissue for yourself and wipe the tears (im 100% sure your not crying just kidding). But but if it made you smile till here while your reading this then keep that smile all day long or may be whole life.
Now im sleepy😪😴...
`;

  return (
    <div className="flex justify-center items-center mt-8">
      {/* Button to Open Card */}
      <button
        onClick={() => setIsOpen(true)}
        className="-mt-12 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition duration-300"
      >
        💬 A message awaiting for you 💬
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 p-4">
            <motion.div
              className="relative w-full md:w-[800px] h-[90%] md:h-[500px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-red-500 text-white text-xl font-bold px-3 py-1 rounded-full hover:bg-red-600"
              >
                &times;
              </button>

              {/* Image Top (mobile) / Left (desktop) */}
              <div className="w-full md:w-1/2 h-48 md:h-full bg-pink-200 flex items-center justify-center p-4">
                <img
                  src="/assets/pic.png"
                  alt="Ananya"
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-pink-500 shadow-lg"
                />
              </div>

              {/* Message Area */}
              <div className="flex-1 p-6 overflow-y-auto">
                <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-4 text-center">
                  🎉 Happy Birthday Ananya 🎉
                </h2>
                <h2>Scroll Down 👇</h2>
                <div className="text-gray-700 text-sm md:text-base whitespace-pre-line leading-relaxed">
                  {message}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GreetingCard;
