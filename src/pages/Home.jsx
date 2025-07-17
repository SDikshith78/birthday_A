import React, { useState } from "react";
import Identify from "../components/Identify";
import BirthdayCard from "../components/BirthdayCard";

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      {!isVerified ? (
        <Identify onSuccess={() => setIsVerified(true)} />
      ) : (
        <BirthdayCard />
      )}
    </div>
  );
};

export default Home;
