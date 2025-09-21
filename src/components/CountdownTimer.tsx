import React, { useEffect, useState } from 'react';
interface CountdownTimerProps {
  targetDate: Date;
}
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60) % 24),
      minutes: Math.floor(difference / 1000 / 60 % 60),
      seconds: Math.floor(difference / 1000 % 60)
    };
  };
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  // Translate time units to Spanish
  const timeUnits = [{
    label: 'Días',
    value: timeLeft.days
  }, {
    label: 'Horas',
    value: timeLeft.hours
  }, {
    label: 'Minutos',
    value: timeLeft.minutes
  }, {
    label: 'Segundos',
    value: timeLeft.seconds
  }];
  return <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map(unit => <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-rose-700 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-gray-200">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm mt-1 text-gray-300">
            {unit.label}
          </span>
        </div>)}
    </div>;
};