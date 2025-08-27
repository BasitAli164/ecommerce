import React, { useEffect, useState } from "react";

export default function CountDownTime() {
  // target date  static
  // const targetDate=new Date("2025-09-05T00:00:00") //! make sure use this when backend and DB integrate

  // set target date dynamically
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 60)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-center">
      <div>
        <span>Days</span>
        <p className="text-2xl font-bold">{timeLeft.days}</p>
      </div>
      <span className="mt-6 text-xl text-accent font-bold">:</span>

      <div>
        <span>Hours</span>
        <p className="text-2xl font-bold">{timeLeft.hours}</p>
      </div>
      <span className="mt-6 text-xl text-accent font-bold">:</span>

      <div>
        <span>Minutes</span>
        <p className="text-2xl font-bold">{timeLeft.minutes}</p>
      </div>
      <span className="mt-6 text-xl text-accent font-bold">:</span>
      <div>
        <span>Seconds</span>
        <p className="text-2xl font-bold">{timeLeft.seconds}</p>
      </div>
    </div>
  );
}
