import { useState, useEffect } from "react";

const VisitorsCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getInitialCount = () => {
      // Mock fetch visitor count from API or local storage
      const initialCount = localStorage.getItem("visitorCount") || 0;
      setCount(parseInt(initialCount) + 1);

      // Save the updated visitor count to local storage (or send it to the backend)
      localStorage.setItem("visitorCount", parseInt(initialCount) + 1);
    };

    getInitialCount();
  }, []);

  return (
    <div className="p-2 bg-dark text-white rounded d-flex align-items-center justify-content-center">
      Visitors: {count}
    </div>
  );
};

export default VisitorsCount;
