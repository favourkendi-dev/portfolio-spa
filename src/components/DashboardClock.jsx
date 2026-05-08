import { useEffect, useState } from 'react';

function DashboardClock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = currentDateTime.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      aria-label="Current date and time"
      className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium text-gray-500 dark:text-slate-400">
          Local Time
        </p>

        <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {formattedTime}
        </h2>

        <p className="text-sm text-gray-600 dark:text-slate-300">
          {formattedDate}
        </p>
      </div>
    </section>
  );
}

export default DashboardClock;