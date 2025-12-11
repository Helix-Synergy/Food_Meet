import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '000',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = new Date(targetDate) - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: '000', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24))).padStart(3, '0');
      const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="inline-flex flex-col items-center justify-center bg-white rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-lg w-full max-w-xs md:max-w-none">
      {/* Time Row */}
      <div className="flex items-baseline space-x-1 md:space-x-2 text-2xl md:text-4xl font-bold text-[#162B47] leading-none">
        <span>{timeLeft.days}</span>
        <span className="animate-blink">:</span>
        <span>{timeLeft.hours}</span>
        <span className="animate-blink">:</span>
        <span>{timeLeft.minutes}</span>
        <span className="animate-blink">:</span>
        <span>{timeLeft.seconds}</span>
      </div>

      {/* Label Row */}
      <div className="flex justify-between mt-1 md:mt-2 space-x-4 md:space-x-6 text-[#162B47] font-semibold text-sm md:text-lg tracking-wider">
        <span>Y</span>
        <span>H</span>
        <span>M</span>
        <span>S</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
