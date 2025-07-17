import React, { useState } from "react";

const Identify = ({ onSuccess }) => {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNoClick = () => {
    setMessage("❌ Haha! Maybe next time 😜");
    setShowInput(false);
  };

  const handleYesClick = () => {
    setShowInput(true);
    setMessage("");
  };

  const handleSubmit = () => {
    if (name.trim().toLowerCase() === "ananya") {
      setMessage("✅ Correct! Welcome 🎉");
      setTimeout(() => {
        onSuccess(); // ✅ Trigger success callback
      }, 1000); // Small delay for user to see message
    } else {
      setMessage("❌ Wrong name! Try again 😅");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 text-center p-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Are you A _ _ _ _ a?
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleYesClick}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          ✅ Yes
        </button>
        <button
          onClick={handleNoClick}
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          ❌ No
        </button>
      </div>

      {showInput && (
        <div className="mt-4 flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded-lg px-4 py-2 w-64 text-center text-lg"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      )}

      {message && (
        <p className="mt-4 text-lg font-semibold text-gray-800">{message}</p>
      )}
    </div>
  );
};

export default Identify;
